package permis.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import permis.dto.CreateOrderRequest;
import permis.dto.StripeResponse;
import permis.mapper.OrderMapper;
import permis.model.Order;
import permis.repository.global.OrderRepository;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    public OrderService(OrderRepository orderRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
    }

    @PostConstruct
    public void initStripe() {
        Stripe.apiKey = stripeApiKey;
    }

    @Transactional
    public StripeResponse createOrderAndStripeSession(CreateOrderRequest request) {
        // 1. Sauvegarde de la commande en base (statut PENDING)
        Order order = orderMapper.toEntity(request);
        Order savedOrder = orderRepository.save(order);

        try {
            // 2. Création des paramètres de la session Stripe Checkout
            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setCustomerEmail(savedOrder.getCustomerEmail())
                    .addLineItem(
                            SessionCreateParams.LineItem.builder()
                                    .setQuantity(1L)
                                    .setPriceData(
                                            SessionCreateParams.LineItem.PriceData.builder()
                                                    .setCurrency("eur")
                                                    .setUnitAmount(199L) // 1,99 € en centimes
                                                    .setProductData(
                                                            SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                    .setName(
                                                                            "Pack Magique de Noël (Permis + Passeport + Diplôme)")
                                                                    .setDescription(
                                                                            "Documents personnalisés pour l'enfant")
                                                                    .build())
                                                    .build())
                                    .build())
                    .setSuccessUrl(frontendUrl + "/success?session_id={CHECKOUT_SESSION_ID}")
                    .setCancelUrl(frontendUrl + "/cancel")
                    .putMetadata("orderId", savedOrder.getId().toString())
                    .build();

            // 3. Appel de l'API Stripe
            Session session = Session.create(params);

            // 4. Enregistrement du vrai Session ID Stripe en base
            savedOrder.setStripeSessionId(session.getId());
            orderRepository.save(savedOrder);

            return new StripeResponse(
                    "SUCCESS",
                    "Session Stripe créée avec succès",
                    session.getId(),
                    session.getUrl());

        } catch (StripeException e) {
            throw new RuntimeException("Erreur Stripe : " + e.getMessage(), e);
        }
    }
}