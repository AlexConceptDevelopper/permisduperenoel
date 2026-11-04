package permis.service;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.Page;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Service;
import permis.model.DocumentData;
import permis.model.Order;

import java.io.InputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

@Service
public class PdfService {

    private Playwright playwright;
    private Browser browser;

    @PostConstruct
    public void init() {
        this.playwright = Playwright.create();
        this.browser = playwright.chromium()
                .launch(new com.microsoft.playwright.BrowserType.LaunchOptions()
                        .setHeadless(true)
                        .setArgs(List.of(
                            "--font-render-hinting=medium", 
                            "--enable-font-antialiasing",
                            "--disable-dev-shm-usage",
                            "--no-sandbox"
                        )));
    }

    @PreDestroy
    public void close() {
        if (browser != null) browser.close();
        if (playwright != null) playwright.close();
    }

    public byte[] generateChristmasPackPdf(Order order) throws Exception {
        DocumentData data = order.getDocumentData();

        String name = escapeXml((data != null && data.getChildName() != null) ? data.getChildName() : "Lucas");
        String age = escapeXml((data != null && data.getChildAge() != null) ? String.valueOf(data.getChildAge()) : "7");
        
        String gender = (data != null && data.getChildGender() != null) ? data.getChildGender() : "M";
        boolean isGirl = "F".equalsIgnoreCase(gender) || "FILLE".equalsIgnoreCase(gender) || "FEMININ".equalsIgnoreCase(gender);
        
        String cherForm = isGirl ? "Ma chère" : "Mon cher";
        String inscritForm = isGirl ? "Inscrite" : "Inscrit";

        String city = escapeXml((data != null && data.getCity() != null) ? data.getCity() : "Bordeaux");
        String sage = escapeXml((data != null && data.getToyRoomScore() != null) ? String.valueOf(data.getToyRoomScore()) : "9");
        String sommeil = escapeXml((data != null && data.getBedtimeSpeed() != null) ? data.getBedtimeSpeed() : "Rapide");
        String mention = escapeXml((data != null && data.getBehaviorNote() != null) ? data.getBehaviorNote() : "A bien écouté ses parents toute l'année !");
        String versoMsg = escapeXml((data != null && data.getBackMessage() != null) ? data.getBackMessage() : "Visa permanent accordé pour un passage prioritaire dans les cieux le soir du 24 décembre.");
        String serial = escapeXml((data != null && data.getSerialNumber() != null) ? data.getSerialNumber() : "PN-2026-9482-" + (name != null && name.length() >= 3 ? name.substring(0, 3).toUpperCase() : "LUC"));            

        String rawSantaLetter = (data != null && data.getSantaLetter() != null && data.getSantaLetter().trim().length() > 30)
                ? data.getSantaLetter()
                : cherForm + " " + name + ",\n\n"
                + "Les lutins m'ont rapporté une merveilleuse nouvelle depuis " + city + " ! "
                + "Cette année, tu as accompli un véritable exploit : \"" + mention + "\". Toute l'équipe du Pôle Nord en reste admirative !\n\n"
                + "Sache que ton nom est désormais inscrit en lettres d'or sur notre Grand Registre des Enfants Sages.\n\n"
                + "Passe de joyeuses fêtes, continue d'émerveiller tes proches et prépare-toi pour la nuit magique de Noël !";

        rawSantaLetter = rawSantaLetter
                .replaceAll("(?i)Avec toute mon affection,?\\s*Le Père Noël\\s*🎅?", "")
                .replaceAll("(?i)Le Père Noël\\s*🎅?", "")
                .replaceAll("(?i)Santa Claus\\s*🎅?", "")
                .trim();

        String santaLetter = escapeXml(rawSantaLetter);

        String rawAvatarUrl = (data != null && data.getAvatarUrl() != null && !data.getAvatarUrl().isEmpty()) ? data.getAvatarUrl() : "";
        String avatarUrl = resolveImageToBase64(rawAvatarUrl);

        String avatarContentPermit = avatarUrl.isEmpty() 
            ? "<div style=\"color: #cbd5e1; font-size: 13px; font-weight: bold; text-align: center; font-family: sans-serif;\">📸<br>Photo</div>"
            : "<img src=\"" + avatarUrl + "\" class=\"avatar-img\" />";

        String avatarContentPassport = avatarUrl.isEmpty() 
            ? "<div style=\"color: #cbd5e1; font-size: 13px; font-weight: bold; text-align: center; font-family: sans-serif;\">📸<br>Photo</div>"
            : "<img src=\"" + avatarUrl + "\" class=\"avatar-img\" style=\"width: 100%%; height: 100%%; object-fit: cover;\" />";

        // Assets
        String logoBase64 = resolveLocalAssetToBase64("Logo.png");
        if (logoBase64.isEmpty()) logoBase64 = resolveLocalAssetToBase64("logo.png");

        String stampBase64 = resolveLocalAssetToBase64("favicon-transparent.png");
        if (stampBase64.isEmpty()) stampBase64 = resolveLocalAssetToBase64("favicon.png");

        String permitBgRectoBase64 = resolveLocalAssetToBase64("permis-traineau-background.jpg");
        String permitBgVersoBase64 = resolveLocalAssetToBase64("permis-traineau-background-verso.jpg");

        String passportBgRectoBase64 = resolveLocalAssetToBase64("passeport-pole-nord-recto.jpg");
        if (passportBgRectoBase64.isEmpty()) passportBgRectoBase64 = resolveLocalAssetToBase64("passeport-recto.jpg");

        String passportBgVersoBase64 = resolveLocalAssetToBase64("passeport-pole-nord-verso.jpg");
        if (passportBgVersoBase64.isEmpty()) passportBgVersoBase64 = resolveLocalAssetToBase64("passeport-verso.jpg");

        // Chargement du fond prestige du diplôme (IA)
        String diplomaBgBase64 = resolveLocalAssetToBase64("christmas-parchment-certificate.jpg");

        String logoImgTag = logoBase64.isEmpty() ? "" : "<img src=\"" + logoBase64 + "\" style=\"max-height: 75px; margin-bottom: 10px;\" />";
        String stampImgTag = stampBase64.isEmpty() ? "" : "<img src=\"" + stampBase64 + "\" style=\"width: 38px; height: 38px; object-fit: contain;\" />";

        String htmlContent = """
                <!DOCTYPE html>
                <html>
                <head>
                <meta charset="UTF-8"/>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
                <style>
                    @page portrait-page { size: A4 portrait; margin: 0; }
                    @page landscape-page { size: A4 landscape; margin: 0; }

                    body { 
                        font-family: 'Cormorant Garamond', 'Georgia', serif; 
                        background-color: #ffffff; 
                        margin: 0; 
                        padding: 0; 
                        color: #ffffff; 
                    }

                    .page-portrait {
                        width: 210mm;
                        height: 297mm;
                        box-sizing: border-box;
                        background-color: #ffffff;
                        margin: 0;
                        padding: 0;
                        page: portrait-page;
                        break-after: page;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .page-landscape {
                        width: 297mm;
                        height: 210mm;
                        box-sizing: border-box;
                        background-color: #ffffff;
                        margin: 0;
                        padding: 0;
                        page: landscape-page;
                        break-after: page;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    /* --- PERMIS DE TRAÎNEAU --- */
                    .card-permit-recto {
                        background-image: url('%s');
                        background-size: cover;
                        background-position: center;
                        border: 2px solid rgba(251, 191, 36, 0.7);
                        border-radius: 20px;
                        width: 175mm;
                        height: 110.76mm;
                        box-sizing: border-box;
                        position: relative;
                        overflow: hidden;
                    }

                    .card-permit-verso {
                        background-image: url('%s');
                        background-size: cover;
                        background-position: center;
                        border: 2px solid rgba(251, 191, 36, 0.7);
                        border-radius: 20px;
                        width: 175mm;
                        height: 110.76mm;
                        box-sizing: border-box;
                        position: relative;
                        overflow: hidden;
                    }

                    /* --- PASSEPORT --- */
                    .card-passport-recto {
                        background-image: url('%s');
                        background-size: cover;
                        background-position: center;
                        border: 3px solid #d4af37;
                        border-radius: 20px;
                        width: 175mm;
                        height: 110.76mm;
                        box-sizing: border-box;
                        position: relative;
                        overflow: hidden;
                    }

                    .card-passport-verso {
                        background-image: url('%s');
                        background-size: cover;
                        background-position: center;
                        border: 3px solid #d4af37;
                        border-radius: 20px;
                        width: 175mm;
                        height: 110.76mm;
                        box-sizing: border-box;
                        position: relative;
                        overflow: hidden;
                    }

                    /* --- DIPLÔME PAYSAGE PRESTIGE --- */
                    .card-diploma-landscape {
                        background-image: url('%s');
                        background-size: cover;
                        background-position: center;
                        border-radius: 20px;
                        width: 265mm;
                        height: 178mm;
                        box-sizing: border-box;
                        position: relative;
                        padding: 35px 45px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        color: #451a03;
                        font-family: 'Cormorant Garamond', 'Georgia', serif;
                    }

                    /* --- LETTRE DU PÈRE NOËL --- */
                    .card-letter-portrait {
                        background: linear-gradient(135deg, #fffbeb 0%%, #fef3c7 50%%, #fde68a 100%%);
                        color: #451a03;
                        border: 5px solid #d4af37;
                        border-radius: 25px;
                        padding: 40px 45px;
                        width: 175mm;
                        height: 255mm;
                        box-sizing: border-box;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-family: 'Georgia', 'Noto Color Emoji', serif;
                    }
                    .letter-content {
                        font-size: 14px;
                        line-height: 1.85;
                        color: #78350f;
                        white-space: pre-line;
                        margin: 20px 0;
                        text-align: left;
                    }

                    .avatar-box { width: 90px; height: 110px; border: 2px solid rgba(251, 191, 36, 0.85); border-radius: 12px; background-color: #0f172a; overflow: hidden; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
                    .avatar-img { width: 100%%; height: 100%%; object-fit: cover; }

                    .label { font-size: 9.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(253, 224, 71, 0.95); font-family: 'Cinzel', serif; }
                    
                    .diploma-box-cream {
                        background-color: rgba(254, 243, 199, 0.85);
                        border: 1px solid #fcd34d;
                        border-radius: 12px;
                        padding: 12px 20px;
                        font-style: italic;
                        font-size: 15px;
                        font-weight: bold;
                        text-align: center;
                        color: #451a03;
                        margin: 10px auto;
                        max-width: 80%%;
                        box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
                    }
                </style>
                </head>
                <body>

                    <!-- PAGE 1 : PERMIS RECTO (Portrait) -->
                    <div class="page-portrait">
                        <div class="card-permit-recto">
                            <div style="position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.15); pointer-events: none;"></div>

                            <div style="position: absolute; top: 22%%; right: 0.5%%; z-index: 20; width: 27%%; display: flex; align-items: center; justify-content: center; text-align: center;">
                                <span style="font-family: 'Cinzel', serif; color: #fde68a; font-size: 9px; font-weight: 900; letter-spacing: 0.12em; text-shadow: 0 1px 2px rgba(0,0,0,0.9);">
                                    %s
                                </span>
                            </div>

                            <div style="position: absolute; inset: 0; padding-top: 55px; padding-left: 24px; padding-right: 24px; padding-bottom: 14px; z-index: 10; display: flex; flex-direction: column; justify-content: space-between;">
                                <div style="height: 100%%; display: flex; flex-direction: column; justify-content: space-between;">
                                    <div style="display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 12px; align-items: center; margin: auto 0; padding: 0 4px;">
                                        <div style="grid-column: span 4 / span 4; display: flex; flex-direction: column; align-items: center;">
                                            <div class="avatar-box">%s</div>
                                            <span style="font-family: 'Cinzel', serif; font-size: 11px; color: #fde68a; margin-top: 6px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em;">
                                                Sage (%s/10)
                                            </span>
                                        </div>

                                        <div style="grid-column: span 8 / span 8; display: flex; flex-direction: column; gap: 8px; text-align: left;">
                                            <div>
                                                <div class="label">Titulaire &amp; Âge</div>
                                                <div style="font-family: 'Cinzel', serif; font-size: 18px; font-weight: bold; color: #ffffff; letter-spacing: 0.025em;">
                                                    %s <span style="font-family: 'Cormorant Garamond', serif; font-size: 14px; font-weight: normal; color: #fde68a;">(%s ans)</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="label">Ville &amp; Sommeil</div>
                                                <div style="font-size: 13.5px; font-weight: bold; color: #f1f5f9;">
                                                    %s • <span style="font-family: 'Cormorant Garamond', serif; font-size: 14px; color: #fde68a;">%s</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="label">Mention</div>
                                                <div style="max-width: 90%%;">
                                                    <div style="font-size: 12.5px; font-style: italic; color: #fef3c7; background-color: rgba(0,0,0,0.45); padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(251,191,36,0.3); line-height: 1.35;">
                                                        « %s »
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style="padding-top: 6px; border-top: 1px solid rgba(251,191,36,0.3); display: flex; justify-content: space-around; align-items: center; font-size: 10px; color: #fde68a; font-weight: bold; padding-left: 8px; padding-right: 110px; font-family: 'Cinzel', serif;">
                                        <span>SECRÉTARIAT DU PÈRE NOËL</span>
                                        <span>25 DÉC. 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 2 : PERMIS VERSO (Portrait) -->
                    <div class="page-portrait">
                        <div class="card-permit-verso">
                            <div style="position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.15); pointer-events: none;"></div>

                            <div style="position: absolute; inset: 0; padding-top: 35px; padding-left: 24px; padding-right: 24px; padding-bottom: 14px; z-index: 10; display: flex; flex-direction: column; justify-content: space-between;">
                                <div style="height: 100%%; display: flex; flex-direction: column; justify-content: space-between; text-align: left; padding: 0 8px;">
                                    <div style="display: flex; flex-direction: column; gap: 14px; margin: auto 0; padding-top: 10px;">
                                        <div style="font-size: 13.5px; color: #fef3c7; line-height: 1.5; font-style: italic; font-weight: 600; background-color: rgba(0,0,0,0.4); padding: 14px; border-radius: 12px; border: 1px solid rgba(251,191,36,0.3);">
                                            « %s »
                                        </div>
                                        
                                        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; font-size: 11px; color: #fde68a;">
                                            <div style="background-color: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border: 1px solid rgba(251,191,36,0.3);">
                                                <span style="font-weight: bold; color: #fde047; display: block; margin-bottom: 3px; font-family: 'Cinzel', serif; font-size: 11.5px;">⭐ Indice de Rangement :</span> Validé à %s/10 par les lutins.
                                            </div>
                                            <div style="background-color: rgba(0,0,0,0.3); padding: 10px; border-radius: 8px; border: 1px solid rgba(251,191,36,0.3);">
                                                <span style="font-weight: bold; color: #fde047; display: block; margin-bottom: 3px; font-family: 'Cinzel', serif; font-size: 11.5px;">🔒 Sécurité :</span> Valable sur tout le territoire.
                                            </div>
                                        </div>
                                    </div>

                                    <div style="padding-top: 6px; border-top: 1px solid rgba(251,191,36,0.3); display: flex; justify-content: space-around; align-items: flex-end; font-size: 10px; color: #fde68a; font-weight: bold; padding-left: 8px; padding-right: 140px; font-family: 'Cinzel', serif;">
                                        <span>VISA PERMANENT • %s</span>
                                        <span>ATELIER CENTRAL S. CLAUS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 3 : PASSEPORT RECTO -->
                    <div class="page-portrait">
                        <div class="card-passport-recto" style="position: relative;">
                            <div style="position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.15); pointer-events: none;"></div>

                            <!-- Numéro de série -->
                            <div style="position: absolute; top: 13.5%%; right: 6%%; z-index: 20;">
                                <span style="font-family: 'Cinzel', serif; color: #fde68a; font-size: 8.5px; font-weight: 900; letter-spacing: 0.1em; text-shadow: 0 1px 2px rgba(0,0,0,0.9); background-color: rgba(15, 23, 42, 0.85); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(251,191,36,0.4);">
                                    %s
                                </span>
                            </div>

                            <!-- Photo avec coins arrondis -->
                            <div style="position: absolute; top: 29.5%%; left: 5.8%%; width: 22.5%%; height: 54%%; z-index: 20; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
                                <div style="width: 100%%; height: 84%%; border-radius: 8px; overflow: hidden; background-color: #0f172a; border: 1px solid rgba(251,191,36,0.6); display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);">
                                    <div style="width: 100%%; height: 100%%; border-radius: 6px; overflow: hidden;">%s</div>
                                </div>
                                <span style="font-family: 'Cinzel', serif; font-size: 8px; color: #fde68a; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em; background-color: rgba(15, 23, 42, 0.85); padding: 1px 6px; border-radius: 3px; border: 1px solid rgba(251,191,36,0.3);">
                                    Sage (%s/10)
                                </span>
                            </div>

                            <!-- Bloc Texte -->
                            <div style="position: absolute; top: 29.5%%; left: 33%%; right: 7%%; display: flex; flex-direction: column; gap: 7px; text-align: left; z-index: 20;">
                                <div>
                                    <div class="label" style="font-size: 8px;">Voyageur / Âge</div>
                                    <div style="font-family: 'Cinzel', serif; font-size: 15px; font-weight: bold; color: #ffffff; letter-spacing: 0.025em;">
                                        %s <span style="font-family: 'Cormorant Garamond', serif; font-size: 13px; font-weight: normal; color: #fde68a;">(%s ans)</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="label" style="font-size: 8px;">Ville</div>
                                    <div style="font-size: 12px; font-weight: bold; color: #f1f5f9;">
                                        %s
                                    </div>
                                </div>
                                <div>
                                    <div class="label" style="font-size: 8px;">Visa</div>
                                    <div style="max-width: 95%%;">
                                        <div style="font-size: 10.5px; font-style: italic; color: #fef3c7; background-color: rgba(15,23,42,0.85); padding: 5px 9px; border-radius: 5px; border: 1px solid rgba(251,191,36,0.35); line-height: 1.3;">
                                            « %s »
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Pied de page recto -->
                            <div style="position: absolute; bottom: 8.5%%; left: 8%%; right: 8%%; display: flex; justify-content: space-between; align-items: center; font-size: 8px; color: #fde68a; font-weight: bold; font-family: 'Cinzel', serif; z-index: 20;">
                                <span>PASSEPORT OFFICIEL</span>
                                <span>CONTRÔLE DOUANIER</span>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 4 : PASSEPORT VERSO -->
                    <div class="page-portrait">
                        <div class="card-passport-verso" style="position: relative;">
                            <div style="position: absolute; inset: 0; background-color: rgba(0, 0, 0, 0.15); pointer-events: none;"></div>

                            <div style="position: absolute; top: 10.5%%; left: 16%%; right: 16%%; z-index: 20;">
                                <div style="font-size: 11px; color: #fef3c7; line-height: 1.4; font-style: italic; font-weight: 600; background-color: rgba(15, 23, 42, 0.9); padding: 8px 12px; border-radius: 8px; border: 1px solid rgba(251,191,36,0.4); text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.4);">
                                    « %s »
                                </div>
                            </div>

                            <div style="position: absolute; bottom: 6.5%%; left: 8%%; right: 8%%; display: flex; justify-content: space-between; align-items: center; font-size: 8px; color: #fde68a; font-weight: bold; font-family: 'Cinzel', serif; z-index: 20;">
                                <span>PÔLE NORD • %s</span>
                                <span>MONDE ENTIER</span>
                            </div>
                        </div>
                    </div>

                    <!-- PAGE 5 : DIPLÔME RECTO (Paysage Prestige Alignement Centré) -->
                    <div class="page-landscape">
                        <div class="card-diploma-landscape">
                            
                            <!-- Numéro de série en haut à droite -->
                            <div style="width: 100%%; display: flex; justify-content: flex-end; padding-top: 5px;">
                                <span style="background-color: rgba(15, 23, 42, 0.9); color: #fde047; border: 1px solid rgba(251, 191, 36, 0.5); border-radius: 4px; padding: 3px 8px; font-size: 9px; font-family: monospace; font-weight: bold; white-space: nowrap;">
                                    %s
                                </span>
                            </div>

                            <!-- Bloc central rigoureusement centré -->
                            <div style="width: 100%%; display: flex; flex-direction: column; align-items: center; text-align: center; margin: auto 0;">
                                <span style="font-size: 9px; font-family: sans-serif; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #78350f; display: block; margin-bottom: 4px;">
                                    Grande Chancellerie du Pôle Nord
                                </span>
                                <div style="background-color: rgba(254, 243, 199, 0.7); border: 1px solid rgba(252, 211, 77, 0.6); border-radius: 6px; padding: 4px 14px; display: inline-block; margin-bottom: 12px;">
                                    <h3 style="font-size: 20px; font-weight: 900; text-transform: uppercase; color: #451a03; margin: 0; letter-spacing: 1px;">
                                        📜 Diplôme de l'Enfant Sage
                                    </h3>
                                </div>

                                <p style="font-size: 13px; font-style: italic; color: #78350f; font-weight: bold; margin: 4px 0 8px 0; font-family: sans-serif;">
                                    Ce certificat officiel est solennellement décerné à :
                                </p>
                                <p style="font-size: 28px; font-weight: bold; color: #b91c1c; margin: 4px 0 10px 0;">
                                    ⭐ %s <span style="font-size: 15px; font-family: sans-serif; font-weight: normal; color: #78350f;">(%s ans - 📍 %s)</span>
                                </p>
                                <div class="diploma-box-cream">
                                    « %s »
                                </div>
                                <p style="font-size: 12px; font-family: sans-serif; font-weight: bold; color: #78350f; margin-top: 8px;">
                                    ✨ Indice de rangement validé par les lutins : <span style="font-size: 15px; color: #b91c1c; font-weight: 900;">%s / 10</span> ✨
                                </p>
                            </div>

                            <!-- Pied de page / Signatures écartées de part et d'autre du sceau -->
                            <div style="width: 100%%; display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 4px;">
                                <div style="text-align: left;">
                                    <div style="font-size: 8px; font-family: sans-serif; text-transform: uppercase; font-weight: bold; color: #78350f;">Le Père Noël</div>
                                    <div style="font-size: 20px; font-weight: bold; color: #b91c1c; font-family: cursive;">Santa Claus</div>
                                </div>
                                
                                <div style="width: 50px; height: 50px;"></div>

                                <div style="text-align: right;">
                                    <div style="font-size: 8px; font-family: sans-serif; text-transform: uppercase; font-weight: bold; color: #78350f;">Chef des Lutins</div>
                                    <div style="font-size: 11px; font-family: sans-serif; font-weight: bold; color: #451a03;">25 Décembre 2026</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- PAGE 6 : DIPLÔME VERSO (Paysage Prestige Alignement Centré) -->
                    <div class="page-landscape">
                        <div class="card-diploma-landscape">
                            
                            <!-- Indication VERSO en haut à droite -->
                            <div style="width: 100%%; display: flex; justify-content: flex-end; padding-top: 5px;">
                                <span style="font-size: 9px; font-family: monospace; font-weight: bold; color: #78350f; background-color: rgba(254, 243, 199, 0.7); border: 1px solid rgba(252, 211, 77, 0.5); padding: 3px 8px; border-radius: 4px;">
                                    VERSO
                                </span>
                            </div>

                            <!-- Bloc central Verso -->
                            <div style="width: 100%%; display: flex; flex-direction: column; align-items: center; text-align: center; margin: auto 0; padding: 0 20px;">
                                <div style="background-color: rgba(254, 243, 199, 0.8); border: 1px solid rgba(252, 211, 77, 0.6); border-radius: 6px; padding: 4px 14px; display: inline-block; margin-bottom: 16px;">
                                    <span style="font-size: 12px; font-family: sans-serif; font-weight: bold; text-transform: uppercase; color: #78350f; letter-spacing: 1px;">
                                        📜 Note d'Honneur et Proclamation du Conseil
                                    </span>
                                </div>

                                <div class="diploma-box-cream" style="font-size: 17px; padding: 22px 28px; line-height: 1.5; max-width: 85%%;">
                                    « %s »
                                </div>
                                <p style="font-size: 12px; font-family: sans-serif; color: #78350f; font-weight: bold; margin-top: 16px;">
                                    ✨ %s à vie sur le Grand Registre d'Or des Enfants Sages du Pôle Nord. ✨
                                </p>
                            </div>

                            <!-- Pied de page Verso -->
                            <div style="width: 100%%; display: flex; justify-content: space-between; align-items: center; padding-bottom: 4px; font-size: 10px; font-family: monospace; font-weight: bold; color: #78350f;">
                                <span>🛡️ SCEAU OFFICIEL • %s</span>
                                <span>🎄 ATELIER CENTRAL DU PÔLE NORD</span>
                            </div>

                        </div>
                    </div>

                    <!-- PAGE 7 : LETTRE DU PÈRE NOËL (Portrait Prestige avec En-tête & Sceau) -->
                    <div class="page-portrait"><div class="card-letter-portrait">
                        <div style="text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 15px;">
                            %s
                            <div style="font-size: 11px; font-family: sans-serif; color: #92400e; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">Atelier Central du Pôle Nord</div>
                            <div style="font-size: 22px; font-weight: bold; color: #b91c1c; text-transform: uppercase; margin-top: 4px; letter-spacing: 1px;">Lettre Officielle du Père Noël</div>
                        </div>

                        <div class="letter-content">
                            %s
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px dashed #d4af37; padding-top: 20px; margin-top: 15px;">
                            <div>
                                <div style="font-size: 14px; font-weight: bold; color: #78350f;">Avec toute mon affection,</div>
                                <div style="font-family: cursive; font-size: 34px; color: #b91c1c; margin-top: 2px;">Santa Claus</div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px; text-align: right;">
                                %s
                                <div style="font-family: sans-serif; font-size: 9px; color: #92400e; font-weight: bold; text-align: left;">
                                    ✨ Sceau Officiel de l'Atelier<br/>Édition 2026
                                </div>
                            </div>
                        </div>

                        <div style="margin-top: 15px; text-align: center; font-family: sans-serif; font-size: 10px; color: #92400e; font-weight: bold; background-color: rgba(212, 175, 55, 0.15); padding: 10px; border-radius: 10px; border: 1px solid rgba(212, 175, 55, 0.4);">
                            ✨ Toute l'équipe de <strong>permisduperenoel.fr</strong> vous souhaite de très belles fêtes de fin d'année ! ✨
                        </div>
                    </div></div>

                </body>
                </html>
                """
                .formatted(
                        permitBgRectoBase64, permitBgVersoBase64,
                        passportBgRectoBase64, passportBgVersoBase64,
                        diplomaBgBase64,
                        serial, avatarContentPermit, sage, name, age, city, sommeil, mention,
                        versoMsg, sage, serial,
                        serial, avatarContentPassport, sage, name, age, city, mention,
                        versoMsg, serial,
                        serial, name, age, city, mention, sage,
                        versoMsg, inscritForm, serial,
                        logoImgTag, santaLetter, stampImgTag);

        synchronized (this) {
            try (Page page = browser.newPage()) {
                page.setContent(htmlContent, new Page.SetContentOptions().setWaitUntil(com.microsoft.playwright.options.WaitUntilState.NETWORKIDLE));

                Page.PdfOptions pdfOptions = new Page.PdfOptions();
                pdfOptions.setPrintBackground(true);
                pdfOptions.setPreferCSSPageSize(true);
                pdfOptions.setMargin(new com.microsoft.playwright.options.Margin()
                        .setTop("0")
                        .setBottom("0")
                        .setLeft("0")
                        .setRight("0"));

                return page.pdf(pdfOptions);
            }
        }
    }

    private String resolveImageToBase64(String urlStr) {
        if (urlStr == null || urlStr.isEmpty()) {
            return "";
        }
        if (urlStr.startsWith("data:image")) {
            return urlStr;
        }
        try {
            byte[] imageBytes = null;
            if (urlStr.startsWith("http://") || urlStr.startsWith("https://")) {
                try (InputStream in = URI.create(urlStr).toURL().openStream()) {
                    imageBytes = in.readAllBytes();
                }
            } else {
                String localPath = urlStr;
                if (urlStr.contains("/uploads/")) {
                    localPath = "./uploads/" + urlStr.substring(urlStr.indexOf("/uploads/") + 9);
                }
                Path path = Paths.get(localPath);
                if (Files.exists(path)) {
                    imageBytes = Files.readAllBytes(path);
                }
            }

            if (imageBytes == null) {
                return "";
            }

            String mimeType = "image/jpeg";
            String lower = urlStr.toLowerCase();
            if (lower.endsWith(".png")) {
                mimeType = "image/png";
            } else if (lower.endsWith(".webp")) {
                mimeType = "image/webp";
            }

            return "data:" + mimeType + ";base64," + Base64.getEncoder().encodeToString(imageBytes);
        } catch (Exception e) {
            System.err.println("Erreur conversion image pour le PDF : " + e.getMessage());
            return "";
        }
    }

    private String resolveLocalAssetToBase64(String fileName) {
        try {
            String pathStr = fileName.startsWith("/") ? fileName : "/static/" + fileName;
            InputStream is = getClass().getResourceAsStream(pathStr);
            if (is == null) {
                is = getClass().getClassLoader().getResourceAsStream("static/" + fileName);
            }
            if (is != null) {
                byte[] bytes = is.readAllBytes();
                String mimeType = fileName.toLowerCase().endsWith(".png") ? "image/png" : "image/jpeg";
                return "data:" + mimeType + ";base64," + Base64.getEncoder().encodeToString(bytes);
            }
        } catch (Exception e) {
            System.err.println("Impossible de charger l'asset " + fileName + " : " + e.getMessage());
        }
        return "";
    }

    private String escapeXml(String input) {
        if (input == null)
            return "";
        return input.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&apos;");
    }
}