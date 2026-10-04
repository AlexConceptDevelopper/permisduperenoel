package permis.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import permis.dto.CreateOrderRequest;
import permis.dto.StripeResponse;
import permis.model.Order;
import permis.repository.global.OrderRepository;
import permis.service.OrderService;
import permis.service.PdfService;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    private final OrderService orderService;
    private final OrderRepository orderRepository;
    private final PdfService pdfService;

    public OrderController(OrderService orderService, OrderRepository orderRepository, PdfService pdfService) {
        this.orderService = orderService;
        this.orderRepository = orderRepository;
        this.pdfService = pdfService;
    }

    @PostMapping("/checkout")
    public ResponseEntity<StripeResponse> createCheckoutSession(@RequestBody CreateOrderRequest request) {
        StripeResponse response = orderService.createOrderAndStripeSession(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/download-pdf")
    public ResponseEntity<byte[]> downloadPdf(@RequestParam String sessionId) {
        try {
            Order order = orderRepository.findByStripeSessionId(sessionId)
                    .orElseThrow(() -> new RuntimeException("Commande introuvable pour cette session"));

            byte[] pdfBytes = pdfService.generateChristmasPackPdf(order);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", "Pack-Magique-Noel.pdf");

            return ResponseEntity.ok()
                    .headers(headers)
                    .body(pdfBytes);

        } catch (Exception e) {
            // Affiche la vraie erreur en rouge dans la console Spring Boot !
            e.printStackTrace(); 
            return ResponseEntity.internalServerError().build();
        }
    }
}