package permis.controller;

import com.stripe.model.Event;
import com.stripe.model.EventDataObjectDeserializer;
import com.stripe.model.StripeObject;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import permis.model.Order;
import permis.repository.global.OrderRepository;

@RestController
@RequestMapping("/webhook")
public class WebhookController {

    private final OrderRepository orderRepository;

    @Value("${stripe.webhook.secret}")
    private String endpointSecret; // La clé secrète du webhook (whsec_...)

    public WebhookController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @PostMapping
    public ResponseEntity<String> handleStripeWebhook(
            @RequestBody String payload,
            @RequestHeader("Stripe-Signature") String sigHeader) {

        if (sigHeader == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Missing Stripe-Signature header");
        }

        Event event;
        try {
            // Vérification de la signature cryptographique pour s'assurer que ça vient bien de Stripe
            event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Webhook Error: " + e.getMessage());
        }

        // On écute l'événement de fin de paiement réussi
        if ("checkout.session.completed".equals(event.getType())) {
            EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
            StripeObject stripeObject;

            if (dataObjectDeserializer.getObject().isPresent()) {
                stripeObject = dataObjectDeserializer.getObject().get();
            } else {
                // Désérialisation de secours si besoin
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deserialization error");
            }

            Session session = (Session) stripeObject;
            
            // On récupère l'ID de commande qu'on avait stocké dans les metadata
            String orderIdStr = session.getMetadata().get("orderId");

            if (orderIdStr != null) {
                Long orderId = Long.parseLong(orderIdStr);
                Order order = orderRepository.findById(orderId).orElse(null);

                if (order != null && "PENDING".equals(order.getStatus())) {
                    order.setStatus("PAID");
                    orderRepository.save(order);
                    System.out.println("Commande #" + orderId + " passée à PAID avec succès !");
                }
            }
        }

        return ResponseEntity.ok("Success");
    }
}