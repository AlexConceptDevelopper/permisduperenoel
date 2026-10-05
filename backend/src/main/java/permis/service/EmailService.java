package permis.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    @Value("${app.frontend.url}")
    private String frontendUrl;

    @Value("${app.mail.from}")
    private String fromEmail;

    @Value("${brevo.api.key:}")
    private String brevoApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Envoie l'e-mail avec le permis PDF en pièce jointe via l'API HTTP de Brevo (Port 443).
     */
    public void sendPermitEmail(String toEmail, String childName, byte[] pdfBytes) {
        try {
            String subject = "🎅 Ho ho ho ! Le permis officiel de " + childName + " est arrivé !";
            
            // Construction du HTML avec le logo hébergé sur le frontend (Logo.png)
            String htmlContent = """
                <!DOCTYPE html>
                <html>
                <body style="font-family: Arial, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 30px; border-radius: 12px;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #1e1b4b; padding: 30px; border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 16px; text-align: center;">
                        
                        <!-- LOGO OFFICIEL -->
                        <img src="%s/Logo.png" alt="Permis du Père Noël" style="width: 80px; height: 80px; object-fit: cover; margin-bottom: 20px; border-radius: 50%%; border: 2px solid #fbbf24;" />

                        <h1 style="color: #fbbf24; margin-top: 0;">Ho ho ho %s ! 🎄</h1>
                        <p style="font-size: 16px; color: #e2e8f0; text-align: left;">Les lutins de la Fabrique Magique ont le plaisir de t'annoncer que ton permis officiel tout droit venu du Pôle Nord est prêt !</p>
                        <p style="font-size: 14px; color: #cbd5e1; text-align: left;">Tu trouveras ton document officiel au format PDF en pièce jointe de cet e-mail. Tu peux l'imprimer pour le glisser sous le sapin ou l'afficher fièrement.</p>
                        
                        <div style="text-align: center; margin: 30px 0;">
                            <span style="background-color: rgba(251, 191, 36, 0.15); color: #fde047; padding: 10px 20px; border-radius: 9999px; font-weight: bold; border: 1px solid rgba(251, 191, 36, 0.3);">
                                ✨ 100%% Sécurisé & Secret du Pôle Nord
                            </span>
                        </div>
                        
                        <p style="color: #94a3b8; font-size: 12px; margin-top: 40px; text-align: center; border-top: 1px solid rgba(251, 191, 36, 0.15); padding-top: 20px;">
                            Joyeuses fêtes de fin d'année !<br>Le Secrétariat du Père Noël • <a href="%s" style="color: #fbbf24; text-decoration: none;">permisduperenoel.fr</a>
                        </p>
                    </div>
                </body>
                </html>
                """.formatted(frontendUrl, childName, frontendUrl);

            String url = "https://api.brevo.com/v3/smtp/email";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("api-key", brevoApiKey);

            // Encodage du PDF en Base64 exigé par l'API Brevo pour les pièces jointes
            String base64Pdf = Base64.getEncoder().encodeToString(pdfBytes);
            String attachmentName = "Permis_Père_Noël_" + childName + ".pdf";

            Map<String, Object> emailPayload = Map.of(
                    "sender", Map.of("email", fromEmail, "name", "Permis du Père Noël"),
                    "to", List.of(Map.of("email", toEmail)),
                    "subject", subject,
                    "htmlContent", htmlContent,
                    "attachment", List.of(Map.of(
                            "content", base64Pdf,
                            "name", attachmentName)));

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(emailPayload, headers);

            restTemplate.postForEntity(url, entity, String.class);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Échec de l'envoi de l'e-mail du permis pour " + childName, e);
        }
    }
}