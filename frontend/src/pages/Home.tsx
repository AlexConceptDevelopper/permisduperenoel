// src/pages/Home.tsx
import { useState } from "react";
import type { DocumentData, CreateOrderRequest } from "../types/document";
import { checkoutOrder } from "../apis/orderApi";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PermitPreview } from "../components/PermitPreview";
import { PassportPreview } from "../components/PassportPreview";
import { DiplomaPreview } from "../components/DiplomaPreview";
import { AkinatorQuiz } from "../components/AkinatorQuiz";
import { Helmet } from "react-helmet-async";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function Home() {
  const [customerEmail, setCustomerEmail] = useState("");
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isLetterUnlocked, setIsLetterUnlocked] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareFeedback, setShareFeedback] = useState("");

  const [formData, setFormData] = useState<DocumentData>({
    childName: "Lucas",
    childAge: 7,
    childGender: "M",
    city: "Bordeaux",
    behaviorNote: "A bien écouté ses parents toute l’année !",
    toyRoomScore: 9,
    bedtimeSpeed: "Rapide",
    serialNumber: "PN-2026-9482-LUC",
    backMessage:
      "Certificat officiel délivré par le Pôle Nord. Autorise la manipulation de paquets cadeaux et l'accès prioritaire au sapin.",
    santaLetter: "",
    avatarUrl: "",
  });

  const [activePreview, setActivePreview] = useState<
    "permit" | "passport" | "diploma"
  >("permit");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuizComplete = (quizData: Partial<DocumentData>) => {
    setFormData((prev) => ({
      ...prev,
      ...quizData,
    }));
    setIsQuizCompleted(true);
  };

  const triggerLetterDownload = () => {
    const rawName = formData.childName?.trim() || "enfant";
    const rawLetter =
      formData.santaLetter?.trim() ||
      `Mon cher ${rawName},\n\nLes lutins m'ont rapporté tes formidables exploits cette année ! Tu as fait de super progrès et je suis très fier de toi. Prépare-toi pour une nuit magique sous le sapin !`;

    const cleanedLetter = rawLetter
      .replace(/Avec toute mon affection,?\s*Le Père Noël\s*🎅?/gi, "")
      .replace(/Le Père Noël\s*🎅?/gi, "")
      .trim();

    const safeName = escapeHtml(rawName);
    const safeLetter = escapeHtml(cleanedLetter);
    const safeOrigin = escapeHtml(window.location.origin);

    const letterHtmlContent = `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8"/>
    <title>Lettre Officielle du Père Noël - ${safeName}</title>
    <style>
      body {
        font-family: 'Georgia', serif;
        background: #0f172a;
        color: #451a03;
        padding: 40px 20px;
        margin: 0;
      }
      .card {
        max-width: 650px;
        margin: 0 auto;
        border: 5px solid #d4af37;
        border-radius: 24px;
        background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
        padding: 40px 50px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        position: relative;
      }
      .header {
        text-align: center;
        border-bottom: 2px solid #d4af37;
        padding-bottom: 20px;
        margin-bottom: 25px;
      }
      .logo-img {
        max-height: 75px;
        margin-bottom: 12px;
        filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.15));
      }
      .title {
        color: #b91c1c;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 5px 0;
      }
      .subtitle {
        font-size: 11px;
        color: #92400e;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: sans-serif;
      }
      .content {
        font-size: 15px;
        line-height: 1.8;
        color: #78350f;
        white-space: pre-line;
        text-align: left;
        margin: 25px 0;
      }
      .signature-block {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        border-top: 1px dashed #d4af37;
        padding-top: 20px;
      }
      .signature-text {
        font-size: 14px;
        font-weight: bold;
        color: #78350f;
      }
      .santa-sig {
        font-family: 'Brush Script MT', cursive, serif;
        font-size: 32px;
        color: #b91c1c;
        margin-top: 5px;
      }
      .stamp-box {
        text-align: right;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .stamp-icon {
        width: 38px;
        height: 38px;
      }
      .footer {
        margin-top: 30px;
        text-align: center;
        font-family: sans-serif;
        font-size: 11px;
        color: #92400e;
        font-weight: bold;
        background-color: rgba(212, 175, 55, 0.15);
        padding: 12px;
        border-radius: 12px;
        border: 1px solid rgba(212, 175, 55, 0.4);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="header">
        <img src="${safeOrigin}/Logo.png" alt="Permis du Père Noël" class="logo-img" onerror="this.style.display='none'"/>
        <div class="subtitle">Atelier Central du Pôle Nord</div>
        <div class="title">Lettre Officielle du Père Noël</div>
      </div>

      <div class="content">${safeLetter}</div>

      <div class="signature-block">
        <div>
          <div class="signature-text">Avec toute mon affection,</div>
          <div class="santa-sig">Santa Claus</div>
        </div>
        <div class="stamp-box">
          <img src="${safeOrigin}/favicon-transparent.png" alt="Sceau" class="stamp-icon" onerror="this.style.display='none'"/>
          <div style="font-family: sans-serif; font-size: 10px; color: #92400e; font-weight: bold; text-align: left;">
            ✨ Sceau Officiel de l'Atelier<br/>Édition 2026
          </div>
        </div>
      </div>

      <div class="footer">
        ✨ Toute l'équipe de <strong>permisduperenoel.fr</strong> vous souhaite de très belles fêtes de fin d'année ! ✨
      </div>
    </div>
  </body>
</html>`;

    const blob = new Blob([letterHtmlContent], {
      type: "text/html;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Lettre_Pere_Noel_${rawName.replace(/[^a-zA-Z0-9_-]/g, "_")}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSocialShareAndDownload = async (
    platform: "whatsapp" | "facebook" | "instagram",
  ) => {
    const targetUrl = "https://www.permisduperenoel.fr";
    const encodedUrl = encodeURIComponent(targetUrl);
    const shareText = encodeURIComponent(
      `🎅 Découvre la lettre officielle et le permis du Père Noël pour les enfants sur ${targetUrl} !`,
    );

    setShareFeedback("");

    if (platform === "whatsapp") {
      window.open(`https://api.whatsapp.com/send?text=${shareText}`, "_blank", "noopener,noreferrer");
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else if (platform === "instagram") {
      try {
        await navigator.clipboard.writeText(targetUrl);
        setShareFeedback("Lien copié ! Colle-le dans ta Story Instagram.");
      } catch {
        setShareFeedback(`Partage ce lien dans ta Story Instagram : ${targetUrl}`);
      }
    }

    setIsLetterUnlocked(true);
    setShowShareModal(false);
    triggerLetterDownload();
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = customerEmail.trim();
    if (!trimmedEmail) {
      setErrorMessage(
        "Veuillez entrer une adresse e-mail valide pour recevoir vos documents.",
      );
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const orderRequest: CreateOrderRequest = {
        customerEmail: trimmedEmail,
        documentData: formData,
      };

      const response = await checkoutOrder(orderRequest);

      if (response.sessionUrl) {
        window.location.href = response.sessionUrl;
      } else {
        throw new Error("URL de redirection introuvable.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Une erreur est survenue lors de la communication avec le Pôle Nord. Réessayez !",
      );
      setIsLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result !== "string") return;

      const img = new Image();
      img.src = result;
      img.onload = () => {
        const MAX_SIZE = 600;
        let width = img.width;
        let height = img.height;

        if (width > height && width > MAX_SIZE) {
          height = (height * MAX_SIZE) / width;
          width = MAX_SIZE;
        } else if (height >= width && height > MAX_SIZE) {
          width = (width * MAX_SIZE) / height;
          height = MAX_SIZE;
        }

        const canvas = document.createElement("canvas");
        canvas.width = Math.round(width);
        canvas.height = Math.round(height);
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.8);
        setFormData((prev) => ({
          ...prev,
          avatarUrl: compressedBase64,
        }));
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen text-amber-50 flex flex-col justify-between relative overflow-x-hidden font-sans">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/images/bg-noel.png')",
        }}
      />

      <Helmet>
        <title>Le Permis du Père Noël 2026 - Pack Magique 4-en-1 (1,99 €)</title>
        <link rel="canonical" href="https://www.permisduperenoel.fr/" />
      </Helmet>

      <Navbar />

      <main className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 py-8 relative z-10 my-auto">
        {/* BANNIÈRE NOUVEAUTÉ : Format Paysage A4 */}
        <div className="w-full max-w-3xl mb-6 bg-indigo-950/80 border border-amber-400/50 rounded-2xl p-3 text-center shadow-lg backdrop-blur-md">
          <p className="text-xs md:text-sm font-bold text-amber-200 flex items-center justify-center gap-2 flex-wrap">
            <span>📜✨</span> NOUVEAU : Votre Diplôme de l'Enfant Sage est
            désormais disponible en{" "}
            <span className="text-white underline">
              Format Paysage A4 Grand Luxe
            </span>{" "}
            — idéal dès le 1er décembre ou sous le sapin !
          </p>
        </div>

        <header className="text-center space-y-2 max-w-2xl mb-6">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-block px-4 py-1.5 bg-indigo-950/40 border border-amber-400/40 text-amber-200 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
              ✨ Atelier Officiel du Père Noël • Édition 2026 ✨
            </span>
            <span className="inline-block px-3.5 py-1.5 bg-amber-400 text-slate-950 rounded-full text-xs font-black tracking-wide uppercase shadow-md">
              1,99 € • Aperçu gratuit
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400">
            Le Pack Magique 4-en-1
          </h1>
          <p className="text-amber-100/90 text-xs md:text-sm font-medium max-w-xl mx-auto bg-slate-950/45 px-3 py-2 rounded-xl backdrop-blur-xs">
            {!isQuizCompleted
              ? "Créez en 2 minutes le pack complet à 1,99 € (aperçu gratuit avant paiement) — avec une lettre du Père Noël aussi déblocable gratuitement via partage à la fin."
              : `Voici le dossier magique généré pour ${formData.childName} ! Vérifiez et recevez vos PDF immédiatement (1,99 €).`}
          </p>
        </header>

        {/* SECTION DES 4 CARTES D'INFORMATIONS */}
        <div className="w-full max-w-6xl mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-indigo-950/70 border border-amber-400/30 rounded-2xl p-4 shadow-md backdrop-blur-xs">
            <div className="text-xl mb-1">🎅</div>
            <h3 className="text-xs font-bold text-amber-300 uppercase">
              Dès décembre ou sous le sapin
            </h3>
            <p className="text-[11px] text-amber-100/80 mt-1">
              Glissez la lettre ou le diplôme dès le 1er décembre pour lancer
              la magie, puis gardez le permis pour le matin du 25 !
            </p>
          </div>
          <div className="bg-indigo-950/70 border border-amber-400/30 rounded-2xl p-4 shadow-md backdrop-blur-xs">
            <div className="text-xl mb-1">🎁</div>
            <h3 className="text-xs font-bold text-amber-300 uppercase">
              Prêt à afficher
            </h3>
            <p className="text-[11px] text-amber-100/80 mt-1">
              Le nouveau format paysage A4 est idéal à encadrer dans la chambre
              pour garder un souvenir impérissable de cette année magique.
            </p>
          </div>
          <div className="bg-indigo-950/70 border border-amber-400/30 rounded-2xl p-4 shadow-md backdrop-blur-xs">
            <div className="text-xl mb-1">⭐</div>
            <h3 className="text-xs font-bold text-amber-300 uppercase">
              Contrôle des Lutins
            </h3>
            <p className="text-[11px] text-amber-100/80 mt-1">
              Rangement des jouets, vitesse de coucher... Les scores validés par
              les lutins garantissent un passage prioritaire du traîneau !
            </p>
          </div>
          <div className="bg-indigo-950/80 border border-amber-400/60 rounded-2xl p-4 shadow-md backdrop-blur-xs">
            <div className="text-xl mb-1">✉️</div>
            <h3 className="text-xs font-bold text-amber-300 uppercase">
              Lettre du Père Noël
            </h3>
            <p className="text-[11px] text-amber-100/90 mt-1">
              Générez une réponse personnalisée ! À débloquer{" "}
              <strong>gratuitement</strong> via partage, ou directement{" "}
              <strong>comprise</strong> dans le Pack 4-en-1 à{" "}
              <strong>1,99 €</strong>.
            </p>
          </div>
        </div>

        {shareFeedback && (
          <div className="w-full max-w-3xl mb-4 bg-emerald-950/85 border border-emerald-400/50 text-emerald-200 text-xs font-semibold px-4 py-2.5 rounded-xl text-center">
            {shareFeedback}
          </div>
        )}

        {!isQuizCompleted ? (
          <div className="w-full max-w-xl mx-auto my-4">
            <AkinatorQuiz onComplete={handleQuizComplete} />
          </div>
        ) : (
          <div className="w-full space-y-6">
            {/* BLOC CADEAU GRATUIT : PARTAGE POUR DÉBLOQUER LA LETTRE */}
            <div className="w-full max-w-4xl mx-auto bg-indigo-950/80 border-2 border-amber-400/60 p-4 rounded-2xl text-center shadow-lg backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <p className="text-xs font-extrabold text-amber-300 uppercase flex items-center gap-1.5">
                  <span>✉️🎁</span> Option Gratuite : Lettre de Réponse du Père
                  Noël
                </p>
                <p className="text-[11px] text-amber-100/90">
                  {isLetterUnlocked
                    ? "✨ Lettre débloquée et téléchargée avec succès !"
                    : "Partagez sur WhatsApp, Facebook ou Instagram pour débloquer et télécharger gratuitement la lettre !"}
                </p>
              </div>

              {!isLetterUnlocked ? (
                <button
                  type="button"
                  onClick={() => setShowShareModal(true)}
                  className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl uppercase shadow-md flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all"
                >
                  <span>🔗</span> Partager pour débloquer (Gratuit)
                </button>
              ) : (
                <button
                  type="button"
                  onClick={triggerLetterDownload}
                  className="py-2 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl uppercase shadow-lg flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <span>📥</span> Re-télécharger ma Lettre Gratuite
                </button>
              )}
            </div>

            {/* MODALE DE CHOIX DES PLATEFORMES DE PARTAGE */}
            {showShareModal && (
              <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center z-50 p-4">
                <div className="bg-indigo-950 border-2 border-amber-400/60 p-6 rounded-3xl max-w-md w-full text-center space-y-4 shadow-2xl">
                  <span className="text-3xl">🎁✨</span>
                  <h3 className="text-sm font-black text-amber-300 uppercase">
                    Débloque ta lettre magique
                  </h3>
                  <p className="text-xs text-amber-100/90">
                    Choisis ton réseau pour partager la magie et lancer
                    instantanément le téléchargement :
                  </p>

                  <div className="grid grid-cols-1 gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => handleSocialShareAndDownload("whatsapp")}
                      className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl uppercase cursor-pointer flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>💬</span> Partager sur WhatsApp & Télécharger
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialShareAndDownload("facebook")}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl uppercase cursor-pointer flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>👥</span> Partager sur Facebook & Télécharger
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSocialShareAndDownload("instagram")}
                      className="w-full py-3 bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs rounded-xl uppercase cursor-pointer flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>📸</span> Copier le lien Story Insta & Télécharger
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowShareModal(false)}
                    className="text-xs text-amber-400/70 underline pt-2 cursor-pointer block mx-auto"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            )}

            <form
              onSubmit={handleCheckout}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
            >
              {/* Colonne de validation / Email */}
              <div className="lg:col-span-6 bg-indigo-950/90 border-2 border-amber-400/40 p-5 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between border-b border-amber-400/20 pb-2 mb-4">
                    <h2 className="text-xs font-bold text-amber-300 flex items-center gap-2 uppercase tracking-wider">
                      <span>✨</span> Dossier 2026 validé par les Lutins
                    </h2>
                    <button
                      type="button"
                      onClick={() => setIsQuizCompleted(false)}
                      className="text-[10px] text-amber-400 underline hover:text-amber-300 cursor-pointer"
                    >
                      Modifier les réponses
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] uppercase font-bold text-amber-200/90 mb-1">
                        E-mail du parent (envoi immédiat des PDF)
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full bg-slate-950/80 border-2 border-amber-400/30 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-bold text-amber-200/90 mb-1">
                        📸 Ajouter une photo de l'enfant (optionnel)
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full bg-slate-950/80 border-2 border-amber-400/30 rounded-xl p-2 text-xs text-amber-200 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-amber-400 file:text-slate-950 hover:file:bg-amber-300 cursor-pointer"
                      />
                    </div>

                    <div className="bg-slate-950/70 border border-amber-400/30 rounded-2xl p-3.5 text-xs space-y-2 text-amber-100 shadow-inner">
                      <p className="font-bold text-amber-300 border-b border-amber-400/20 pb-1.5 flex items-center justify-between">
                        <span>🎁 Le Pack Magique 4-en-1 (1,99 €) Contient :</span>
                        <span className="text-emerald-400 text-[10px] uppercase bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          4 PDF Prêts
                        </span>
                      </p>
                      <ul className="space-y-1 text-[11px] text-amber-100/90 pt-1">
                        <li>
                          🛷 <strong>Permis de Traîneau</strong> officiel de
                          l'enfant
                        </li>
                        <li>
                          🛂 <strong>Passeport du Pôle Nord</strong> personnalisé
                        </li>
                        <li>
                          📜 <strong>Diplôme de l'Enfant Sage</strong> (Format A4
                          Paysage)
                        </li>
                        <li>
                          ✉️ <strong>La Lettre de Réponse du Père Noël</strong>{" "}
                          (Inscrite au pack !)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-slate-950/70 border border-amber-400/20 rounded-2xl p-3 text-xs space-y-1 text-amber-100/90">
                      <p>
                        👶 <strong>Enfant :</strong> {formData.childName} (
                        {formData.childAge} ans)
                      </p>
                      <p>
                        📍 <strong>Ville :</strong> {formData.city}
                      </p>
                      <p>
                        🌟 <strong>Exploit :</strong> {formData.behaviorNote}
                      </p>
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-red-400 text-xs text-center font-semibold bg-red-950/50 p-2 rounded-lg border border-red-500/30">
                    {errorMessage}
                  </p>
                )}

                <div className="space-y-2">
                  <p className="text-[11px] text-center text-amber-200/85">
                    ⚡ Reçu dans votre boîte mail dans la minute • Imprimable
                    chez vous ou en impression express sans attendre le dernier
                    jour.
                  </p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black rounded-xl shadow-xl uppercase tracking-wider text-xs border border-amber-200 transition-transform transform hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
                  >
                    {isLoading
                      ? "Préparation du traîneau..."
                      : "🎁 Commander le Pack 4-en-1 (1,99€)"}
                  </button>
                </div>
              </div>

              {/* Aperçu en direct */}
              <div className="lg:col-span-6 flex flex-col items-center justify-between space-y-4 bg-indigo-950/90 border-2 border-amber-400/60 p-6 rounded-3xl shadow-[0_0_30px_rgba(251,191,36,0.15)] backdrop-blur-xl relative overflow-hidden">
                <div className="w-full flex flex-col items-center space-y-4 relative z-10">
                  <div className="flex items-center justify-between w-full px-2 gap-2 flex-wrap">
                    <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-amber-300 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-400/30 shadow-inner">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      Aperçu Magique en Direct
                    </div>
                    <span className="text-[11px] font-semibold text-amber-200/80">
                      N° {formData.serialNumber}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 w-full">
                    <button
                      type="button"
                      onClick={() => setActivePreview("permit")}
                      className={`py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${
                        activePreview === "permit"
                          ? "bg-linear-to-r from-red-800 to-red-950 text-yellow-100 border-amber-300 scale-105"
                          : "bg-indigo-950/80 text-amber-200/70 border-indigo-900"
                      }`}
                    >
                      <span>🛷</span> Permis
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePreview("passport")}
                      className={`py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${
                        activePreview === "passport"
                          ? "bg-linear-to-r from-blue-900 to-indigo-950 text-yellow-100 border-amber-300 scale-105"
                          : "bg-indigo-950/80 text-amber-200/70 border-indigo-900"
                      }`}
                    >
                      <span>🛂</span> Passeport
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePreview("diploma")}
                      className={`py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${
                        activePreview === "diploma"
                          ? "bg-linear-to-r from-amber-700 to-amber-950 text-yellow-100 border-amber-300 scale-105"
                          : "bg-indigo-950/80 text-amber-200/70 border-indigo-900"
                      }`}
                    >
                      <span>📜</span> Diplôme
                    </button>
                  </div>

                  <div className="w-full relative flex flex-col justify-center items-center p-4 sm:p-6 bg-slate-950/80 border-2 border-amber-400/50 rounded-2xl shadow-inner overflow-hidden min-h-80 sm:min-h-90">
                    <div className="relative z-10 w-full flex justify-center transform scale-90 sm:scale-100 md:scale-110 transition-transform duration-300 my-2">
                      {activePreview === "permit" && (
                        <PermitPreview data={formData} />
                      )}
                      {activePreview === "passport" && (
                        <PassportPreview data={formData} />
                      )}
                      {activePreview === "diploma" && (
                        <DiplomaPreview data={formData} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}