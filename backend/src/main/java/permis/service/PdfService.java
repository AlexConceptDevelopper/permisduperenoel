package permis.service;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.Page;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Service;
import permis.model.DocumentData;
import permis.model.Order;

@Service
public class PdfService {

    private Playwright playwright;
    private Browser browser;

    @PostConstruct
    public void init() {
        this.playwright = Playwright.create();
        this.browser = playwright.chromium().launch(new com.microsoft.playwright.BrowserType.LaunchOptions().setHeadless(true));
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
        String city = escapeXml((data != null && data.getCity() != null) ? data.getCity() : "Bordeaux");
        String sage = escapeXml((data != null && data.getToyRoomScore() != null) ? String.valueOf(data.getToyRoomScore()) : "9");
        String sommeil = escapeXml((data != null && data.getBedtimeSpeed() != null) ? data.getBedtimeSpeed() : "Rapide");
        String mention = escapeXml((data != null && data.getBehaviorNote() != null) ? data.getBehaviorNote()
                : "A bien écouté ses parents toute l'année !");
        String versoMsg = escapeXml((data != null && data.getBackMessage() != null) ? data.getBackMessage()
                : "Certificat officiel délivré par le Pôle Nord.");
        String serial = escapeXml((data != null && data.getSerialNumber() != null) ? data.getSerialNumber()
                : "PN-2026-9482-" + name.toUpperCase());

        String avatarSrc = (data != null && data.getAvatarUrl() != null) ? data.getAvatarUrl() : "";

        String htmlContent = """
            <!DOCTYPE html>
            <html>
            <head>
            <meta charset="UTF-8"/>
            <style>
                @page portrait-page { size: A4 portrait; margin: 0; }
                @page landscape-page { size: A4 landscape; margin: 0; }
                
                body { font-family: 'Helvetica', Arial, sans-serif; background-color: #ffffff; margin: 0; padding: 0; color: #ffffff; }
                
                /* Pages Portrait (Permis & Passeports) */
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

                /* Pages Paysage (Diplômes grand format A4) */
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
                
                /* --- CARTES PORTRAIT AVEC DÉGRADÉS --- */
                .card-permit {
                    background: linear-gradient(135deg, #781214 0%%, #450a0a 100%%);
                    border: 3px solid #d4af37;
                    border-radius: 20px;
                    padding: 30px;
                    width: 175mm;
                    height: 112mm;
                    box-sizing: border-box;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .card-passport {
                    background: linear-gradient(135deg, #0f172a 0%%, #020617 100%%);
                    border: 3px solid #d4af37;
                    border-radius: 20px;
                    padding: 30px;
                    width: 175mm;
                    height: 112mm;
                    box-sizing: border-box;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                /* --- DIPLÔME PAYSAGE (Grand format avec dégradé crème/ambre) --- */
                .card-diploma-landscape {
                    background: linear-gradient(135deg, #fffbeb 0%%, #fef3c7 50%%, #fde68a 100%%);
                    color: #451a03;
                    border: 5px solid #d4af37;
                    border-radius: 25px;
                    padding: 45px 60px;
                    width: 265mm;
                    height: 178mm;
                    box-sizing: border-box;
                    position: relative;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-family: 'Georgia', serif;
                }

                .header-flex { position: absolute; top: 30px; left: 30px; right: 30px; display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #d4af37; padding-bottom: 10px; }
                .badge { border: 1px solid #d4af37; padding: 4px 10px; font-size: 10px; font-weight: bold; font-family: monospace; border-radius: 6px; }
                
                .content-row { display: flex; gap: 20px; align-items: center; margin-top: 15px; }
                .avatar-box { width: 85px; height: 105px; border: 2px solid #d4af37; border-radius: 10px; background-color: #0f172a; overflow: hidden; display: flex; align-items: center; justify-content: center; }
                .avatar-img { width: 100%%; height: 100%%; object-fit: cover; }
                
                .info-col { flex: 1; display: flex; flex-direction: column; gap: 6px; }
                .label { font-size: 9px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #fde047; }
                .value { font-size: 13px; font-weight: bold; }
                
                .footer { position: absolute; bottom: 20px; left: 30px; right: 30px; display: flex; justify-content: space-between; font-size: 9px; font-family: monospace; font-weight: bold; }
                
                .box-desc { background-color: #450a0a; border: 1px solid #d4af37; border-radius: 8px; padding: 12px; font-style: italic; font-size: 12px; font-weight: bold; text-align: center; }
                .box-desc-blue { background-color: #0f172a; border: 1px solid #d4af37; border-radius: 8px; padding: 12px; font-style: italic; font-size: 12px; font-weight: bold; text-align: center; }
                
                .diploma-box-cream {
                    background-color: #fef3c7;
                    border: 1px solid #fcd34d;
                    border-radius: 12px;
                    padding: 16px;
                    font-style: italic;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    color: #451a03;
                    margin: 15px 0;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
                }
            </style>
            </head>
            <body>

                <!-- PAGE 1 : PERMIS RECTO (Portrait) -->
                <div class="page-portrait"><div class="card-permit">
                    <div class="header-flex">
                        <div>
                            <div style="font-size: 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #fde047;">🎄 Royaume du Pôle Nord</div>
                            <div style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin-top: 2px;">🛷 Permis de Traîneau</div>
                        </div>
                        <div class="badge" style="color: #fde047; background-color: #550a0c;">%s</div>
                    </div>
                    <div class="content-row">
                        <div style="text-align: center;">
                            <div class="avatar-box"><img src="%s" class="avatar-img" /></div>
                            <div style="font-size: 8px; font-weight: bold; color: #fde047; margin-top: 6px;">⭐ Sage (%s/10)</div>
                        </div>
                        <div class="info-col">
                            <div class="label">Titulaire &amp; Âge</div>
                            <div class="value" style="font-size: 15px;">⭐ %s (%s ans)</div>
                            <div class="label">Ville &amp; Sommeil</div>
                            <div class="value">📍 %s • ⚡ %s</div>
                            <div class="label">Mention</div>
                            <div class="value" style="font-style: italic; background-color: #550a0c; padding: 6px 10px; border-radius: 6px; border: 1px solid #d4af37;">« %s »</div>
                        </div>
                    </div>
                    <div class="footer" style="color: #fde047;">
                        <span>🎅 SECRÉTARIAT DU PÈRE NOËL</span>
                        <span>📅 25 DÉC. 2026</span>
                    </div>
                </div></div>

                <!-- PAGE 2 : PERMIS VERSO (Portrait) -->
                <div class="page-portrait"><div class="card-permit">
                    <div class="header-flex">
                        <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #fde047;">📜 Instructions Officielles du Pôle Nord</div>
                        <div style="font-size: 9px; font-weight: bold; color: #fde047;">VERSO</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div class="box-desc">« %s »</div>
                        <div style="display: flex; gap: 15px;">
                            <div style="flex: 1; background-color: #450a0a; border: 1px solid #d4af37; border-radius: 8px; padding: 12px;">
                                <div style="font-size: 10px; font-weight: bold; color: #fde047; margin-bottom: 4px;">⭐ Indice de Rangement :</div>
                                <div style="font-size: 9px; font-weight: bold;">Validé à %s/10 par les lutins.</div>
                            </div>
                            <div style="flex: 1; background-color: #450a0a; border: 1px solid #d4af37; border-radius: 8px; padding: 12px;">
                                <div style="font-size: 10px; font-weight: bold; color: #fde047; margin-bottom: 4px;">🔒 Sécurité :</div>
                                <div style="font-size: 9px; font-weight: bold;">Valable sur tout le territoire.</div>
                            </div>
                        </div>
                    </div>
                    <div class="footer" style="color: #fde047;">
                        <span>✨ VISA PERMANENT • %s</span>
                        <span>🔨 ATELIER CENTRAL S. CLAUS</span>
                    </div>
                </div></div>

                <!-- PAGE 3 : PASSEPORT RECTO (Portrait) -->
                <div class="page-portrait"><div class="card-passport">
                    <div class="header-flex">
                        <div>
                            <div style="font-size: 8px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #fde047;">🌌 Migrations Célestes</div>
                            <div style="font-size: 16px; font-weight: bold; text-transform: uppercase; margin-top: 2px;">✈ Passeport Pôle Nord</div>
                        </div>
                        <div class="badge" style="color: #fde047;">%s</div>
                    </div>
                    <div class="content-row">
                        <div style="text-align: center;">
                            <div class="avatar-box"><img src="%s" class="avatar-img" /></div>
                            <div style="font-size: 8px; font-weight: bold; color: #fde047; margin-top: 6px;">📦 Rangement: %s/10</div>
                        </div>
                        <div class="info-col">
                            <div class="label">Voyageur / Âge</div>
                            <div class="value" style="font-size: 15px;">👤 %s (%s ans)</div>
                            <div class="label">Ville</div>
                            <div class="value">📍 %s</div>
                            <div class="label">Visa</div>
                            <div class="value" style="font-style: italic; background-color: #0f172a; padding: 6px 10px; border-radius: 6px; border: 1px solid #d4af37;">« %s »</div>
                        </div>
                    </div>
                    <div class="footer" style="color: #fde047;">
                        <span>🛂 PASSEPORT OFFICIEL</span>
                        <span>🛃 CONTRÔLE DOUANIER</span>
                    </div>
                </div></div>

                <!-- PAGE 4 : PASSEPORT VERSO (Portrait) -->
                <div class="page-portrait"><div class="card-passport">
                    <div class="header-flex">
                        <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; color: #fde047;">🛂 Visas &amp; Tampons Officiels</div>
                        <div style="font-size: 9px; font-weight: bold; color: #fde047;">VERSO</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div class="box-desc-blue">« %s »</div>
                        <div style="display: flex; gap: 12px; text-align: center;">
                            <div style="flex: 1; background-color: #0f172a; border: 1px solid #d4af37; border-radius: 8px; padding: 12px; font-size: 10px; color: #fde047; font-weight: bold;">☁️ Espace Aérien</div>
                            <div style="flex: 1; background-color: #0f172a; border: 1px solid #d4af37; border-radius: 8px; padding: 12px; font-size: 10px; color: #fde047; font-weight: bold;">🦌 Escorte Rennes</div>
                            <div style="flex: 1; background-color: #0f172a; border: 1px solid #d4af37; border-radius: 8px; padding: 12px; font-size: 10px; color: #fde047; font-weight: bold;">🎁 Douane Hotte</div>
                        </div>
                    </div>
                    <div class="footer" style="color: #fde047;">
                        <span>❄️ PÔLE NORD • %s</span>
                        <span>🌍 MONDE ENTIER</span>
                    </div>
                </div></div>

                <!-- PAGE 5 : DIPLÔME RECTO (Paysage Grand Format) -->
                <div class="page-landscape"><div class="card-diploma-landscape">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #d4af37; padding-bottom: 12px;">
                        <div style="text-align: left;">
                            <div style="font-size: 10px; font-family: sans-serif; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: #92400e;">Grande Chancellerie du Pôle Nord</div>
                            <div style="font-size: 24px; font-weight: bold; text-transform: uppercase; color: #451a03; margin-top: 4px;">📜 Diplôme de l'Enfant Sage</div>
                        </div>
                        <div class="badge" style="color: #92400e; border-color: #92400e; font-size: 12px; padding: 6px 14px;">%s</div>
                    </div>
                    
                    <div style="margin: 15px 0;">
                        <p style="font-size: 14px; font-style: italic; color: #78350f; font-weight: bold; margin-bottom: 10px; font-family: sans-serif;">Ce certificat officiel est solennellement décerné à :</p>
                        <p style="font-size: 32px; font-weight: bold; color: #b91c1c; margin: 10px 0;">
                            ⭐ %s <span style="font-size: 16px; font-family: sans-serif; font-weight: normal; color: #78350f;">(%s ans - 📍 %s)</span>
                        </p>
                        <div class="diploma-box-cream">« %s »</div>
                        <p style="font-size: 13px; font-family: sans-serif; font-weight: bold; color: #92400e;">
                            ✨ Indice de rangement validé par les lutins : <span style="font-size: 16px; color: #b91c1c; font-weight: black;">%s / 10</span> ✨
                        </p>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #d4af37; padding-top: 15px;">
                        <div style="text-align: left;">
                            <div style="font-size: 9px; font-family: sans-serif; text-transform: uppercase; font-weight: bold; color: #92400e;">Le Père Noël</div>
                            <div style="font-size: 20px; font-weight: bold; color: #b91c1c; font-family: cursive;">Santa Claus</div>
                        </div>
                        <div style="width: 45px; height: 45px; background-color: #b91c1c; border: 3px solid #d4af37; border-radius: 50%%; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">👑</div>
                        <div style="text-align: right;">
                            <div style="font-size: 9px; font-family: sans-serif; text-transform: uppercase; font-weight: bold; color: #92400e;">Chef des Lutins</div>
                            <div style="font-size: 11px; font-family: sans-serif; font-weight: bold; color: #78350f;">25 Décembre 2026</div>
                        </div>
                    </div>
                </div></div>

                <!-- PAGE 6 : DIPLÔME VERSO (Paysage Grand Format) -->
                <div class="page-landscape"><div class="card-diploma-landscape" style="justify-content: space-between;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #d4af37; padding-bottom: 12px;">
                        <div style="font-size: 14px; font-family: sans-serif; font-weight: bold; text-transform: uppercase; color: #92400e; letter-spacing: 1px;">📜 Note d'Honneur et Proclamation du Conseil</div>
                        <div style="font-size: 11px; font-family: monospace; font-weight: bold; color: #92400e;">VERSO</div>
                    </div>
                    
                    <div style="margin: auto 0; padding: 20px 0;">
                        <div class="diploma-box-cream" style="font-size: 18px; padding: 35px;">« %s »</div>
                        <p style="font-size: 13px; font-family: sans-serif; color: #78350f; font-weight: bold; margin-top: 25px;">
                            ✨ Inscrit(e) à vie sur le Grand Registre d'Or des Enfants Sages du Pôle Nord. ✨
                        </p>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #d4af37; padding-top: 15px; font-size: 11px; font-family: monospace; font-weight: bold; color: #92400e;">
                        <span>🛡️ SCEAU OFFICIEL • %s</span>
                        <span>🎄 ATELIER CENTRAL DU PÔLE NORD</span>
                    </div>
                </div></div>

            </body>
            </html>
            """.formatted(
                serial, avatarSrc, sage, name, age, city, sommeil, mention,
                versoMsg, sage, serial,
                serial, avatarSrc, sage, name, age, city, mention,
                versoMsg, serial,
                serial, name, age, city, mention, sage,
                versoMsg, serial
            );

        synchronized (this) {
            try (Page page = browser.newPage()) {
                page.setContent(htmlContent);
                
                Page.PdfOptions pdfOptions = new Page.PdfOptions();
                pdfOptions.setPrintBackground(true);
                pdfOptions.setPreferCSSPageSize(true);
                pdfOptions.setMargin(new com.microsoft.playwright.options.Margin()
                    .setTop("0")
                    .setBottom("0")
                    .setLeft("0")
                    .setRight("0")
                );
                
                return page.pdf(pdfOptions);
            }
        }
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