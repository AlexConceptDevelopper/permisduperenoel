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
    private final PdfService pdfService;
    private final EmailService emailService;

    @Value("${stripe.api.key}")
    private String stripeApiKey;

    @Value("${app.frontend.url}")
    private String frontendUrl;

    // 👈 2. Ajout dans le constructeur
    public OrderService(OrderRepository orderRepository, OrderMapper orderMapper, PdfService pdfService,
            EmailService emailService) {
        this.orderRepository = orderRepository;
        this.orderMapper = orderMapper;
        this.pdfService = pdfService;
        this.emailService = emailService;
    }

    @PostConstruct
    public void initStripe() {
        Stripe.apiKey = stripeApiKey;
    }

    @Transactional
    public StripeResponse createOrderAndStripeSession(CreateOrderRequest request) {
        Order order = orderMapper.toEntity(request);
        Order savedOrder = orderRepository.save(order);

        try {
            SessionCreateParams params = SessionCreateParams.builder()
                    .setMode(SessionCreateParams.Mode.PAYMENT)
                    .setCustomerEmail(savedOrder.getCustomerEmail())
                    .addLineItem(
                            SessionCreateParams.LineItem.builder()
                                    .setQuantity(1L)
                                    .setPriceData(
                                            SessionCreateParams.LineItem.PriceData.builder()
                                                    .setCurrency("eur")
                                                    .setUnitAmount(199L)
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

            Session session = Session.create(params);
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

    // 👇 3. Nouvelle méthode métier propre appelée par le webhook
    @Transactional
    public void processSuccessfulPayment(String sessionId) {
        Order order = orderRepository.findByStripeSessionId(sessionId)
                .orElseThrow(() -> new RuntimeException("COMMANDE_INTROUVABLE"));

        // On ne traite que si la commande est encore PENDING pour éviter les doublons
        if ("PENDING".equals(order.getStatus())) {
            order.setStatus("PAID");
            orderRepository.save(order);

            try {
                // Récupération sécurisée du prénom de l'enfant depuis DocumentData
                String childName = (order.getDocumentData() != null && order.getDocumentData().getChildName() != null)
                        ? order.getDocumentData().getChildName()
                        : "l'enfant";

                // Génération du PDF
                byte[] pdfBytes = pdfService.generateChristmasPackPdf(order);

                // Envoi de l'e-mail via Brevo
                emailService.sendPermitEmail(order.getCustomerEmail(), childName, pdfBytes);

                // Nettoyage RGPD : suppression des données sensibles de l'enfant après l'envoi
                // if (order.getDocumentData() != null) {
                //     order.setDocumentData(null);
                //     orderRepository.save(order);
                // }

            } catch (Exception e) {
                // On log l'erreur d'envoi/génération mais on laisse la commande à PAID
                throw new RuntimeException("Erreur lors du traitement post-paiement (PDF/Email) : " + e.getMessage(),
                        e);
            }
        }
    }

    @Transactional
    public byte[] generatePdfForSession(String sessionId) {
        Order order = orderRepository.findByStripeSessionId(sessionId)
                .orElseThrow(() -> new RuntimeException("COMMANDE_INTROUVABLE"));

        // Si le webhook a un léger train de retard, on vérifie directement auprès de
        // Stripe
        if ("PENDING".equals(order.getStatus())) {
            try {
                Session session = Session.retrieve(sessionId);
                if ("paid".equals(session.getPaymentStatus())) {
                    processSuccessfulPayment(sessionId);
                    order = orderRepository.findByStripeSessionId(sessionId).get();
                }
            } catch (Exception e) {
                // On laisse passer vers l'exception si Stripe ne répond pas
            }
        }

        if (!"PAID".equals(order.getStatus())) {
            throw new SecurityException("PAIEMENT_NON_VALIDE");
        }

        try {
            byte[] pdfBytes = pdfService.generateChristmasPackPdf(order);

            // if (order.getDocumentData() != null) {
            //     order.setDocumentData(null);
            //     orderRepository.save(order);
            // }

            return pdfBytes;

        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la génération du PDF", e);
        }
    }
}