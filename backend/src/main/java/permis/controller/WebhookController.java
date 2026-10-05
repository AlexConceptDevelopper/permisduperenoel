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
import permis.service.OrderService; // 👈 On a uniquement besoin du OrderService

@RestController
@RequestMapping("/webhook")
public class WebhookController {

    private final OrderService orderService;

    @Value("${stripe.webhook.secret}")
    private String endpointSecret;

    public WebhookController(OrderService orderService) {
        this.orderService = orderService;
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
            event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Webhook Error: " + e.getMessage());
        }

        if ("checkout.session.completed".equals(event.getType())) {
            EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
            StripeObject stripeObject;

            if (dataObjectDeserializer.getObject().isPresent()) {
                stripeObject = dataObjectDeserializer.getObject().get();
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deserialization error");
            }

            Session session = (Session) stripeObject;
            
            // Appel propre du service métier pour tout gérer (Statut PAID + PDF + Email + RGPD)
            try {
                orderService.processSuccessfulPayment(session.getId());
            } catch (Exception e) {
                e.printStackTrace();
                // On retourne quand même 200 à Stripe pour éviter qu'il ne s'acharne à retenter le webhook en boucle
            }
        }

        return ResponseEntity.ok("Success");
    }
}