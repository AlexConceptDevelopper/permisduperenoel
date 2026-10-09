// src/pages/Home.tsx
import { useState } from "react";
import type { DocumentData, CreateOrderRequest } from "../types/document";
import { checkoutOrder } from "../apis/orderApi";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PermitPreview } from "../components/PermitPreview";
import { PassportPreview } from "../components/PassportPreview";
import { DiplomaPreview } from "../components/DiplomaPreview";
import { Helmet } from "react-helmet-async";

export function Home() {
  const [customerEmail, setCustomerEmail] = useState("");
  const [formData, setFormData] = useState<DocumentData>({
    childName: "Lucas",
    childAge: 7,
    city: "Bordeaux",
    behaviorNote: "A bien écouté ses parents toute l’année !",
    toyRoomScore: 9,
    bedtimeSpeed: "Rapide",
    serialNumber: "PN-2026-9482-LUC",
    backMessage:
      "Certificat officiel délivré par le Pôle Nord. Autorise la manipulation de paquets cadeaux et l'accès prioritaire au sapin.",
    avatarUrl: "",
  });

  const [activePreview, setActivePreview] = useState<
    "permit" | "passport" | "diploma"
  >("permit");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail) {
      setErrorMessage(
        "Veuillez entrer une adresse e-mail valide pour recevoir vos documents.",
      );
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const orderRequest: CreateOrderRequest = {
        customerEmail,
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
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const MAX_SIZE = 600;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_SIZE) {
              height *= MAX_SIZE / width;
              width = MAX_SIZE;
            }
          } else {
            if (height > MAX_SIZE) {
              width *= MAX_SIZE / height;
              height = MAX_SIZE;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, width, height);

          // Compression JPEG à 80% (bien en dessous de 2Mo)
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.8);

          setFormData((prev) => ({
            ...prev,
            avatarUrl: compressedBase64,
          }));
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-950 via-slate-900 to-blue-950 text-amber-50 flex flex-col justify-between relative overflow-x-hidden font-sans">
      <Helmet>
        <title>
          Le Permis du Père Noël 2026 - Pack Magique 3-en-1 (Permis, Passeport,
          Diplôme)
        </title>
        <meta
          name="description"
          content="Commandez en 2 minutes le pack officiel du Pôle Nord : Permis de traîneau, Passeport des lutins et Diplôme d'enfant sage personnalisé pour seulement 1,99 €."
        />
        <meta
          name="keywords"
          content="permis du père noël, diplôme enfant sage, lettre père noël, cadeau noël numérique, pôle nord"
        />

        {/* Open Graph / Réseaux Sociaux */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Le Permis du Père Noël - Pack Magique 3-en-1"
        />
        <meta
          property="og:description"
          content="Faites briller les yeux de votre enfant avec des documents officiels personnalisés du Pôle Nord en format PDF instantané !"
        />
        <meta property="og:url" content="https://permisduperenoel.fr/" />

        {/* Balises Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le Permis du Père Noël 2026" />
        <meta
          name="twitter:description"
          content="Créez un souvenir inoubliable sous le sapin pour 1,99 € !"
        />
      </Helmet>

      <Navbar />

      <main className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4 py-8 relative z-10 my-auto">
        {/* BANNIÈRE NOUVEAUTÉ : Grand Diplôme Paysage */}
        <div className="w-full max-w-3xl mb-6 bg-linear-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border border-amber-400/50 rounded-2xl p-3 text-center shadow-lg backdrop-blur-md animate-pulse">
          <p className="text-xs md:text-sm font-bold text-amber-200 flex items-center justify-center gap-2">
            <span>📜✨</span> NOUVEAU : Votre Diplôme de l'Enfant Sage est
            désormais disponible en{" "}
            <span className="text-white underline">
              Format Paysage A4 Grand Luxe
            </span>{" "}
            !
          </p>
        </div>

        <header className="text-center space-y-2 max-w-2xl mb-5">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/40 text-amber-200 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
            ✨ Atelier Officiel du Père Noël ✨
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400">
            Le Pack Magique 3-en-1
          </h1>
          <p className="text-amber-100/80 text-xs md:text-sm font-medium max-w-lg mx-auto">
            Personnalisez une seule fois les infos pour générer le Permis, le
            Passeport et le magnifique Diplôme Paysage de votre enfant pour
            seulement 1,99 €.
          </p>
        </header>

        {/* SECTION INFORMATIONS / CONSEILS MAGIQUES POUR NOËL */}
        <div className="w-full max-w-5xl mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-4 shadow-md">
            <div className="text-xl mb-1">🎅</div>
            <h3 className="text-xs font-bold text-amber-300 uppercase">
              La tradition du Pôle Nord
            </h3>
            <p className="text-[11px] text-amber-100/70 mt-1">
              Glissez le diplôme sous le sapin le 25 au matin pour émerveiller
              votre enfant en lui prouvant qu'il est inscrit sur le Grand
              Registre d'Or !
            </p>
          </div>
          <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-4 shadow-md">
            <div className="text-xl mb-1">🎁</div>
            <h3 className="text-xs font-bold text-amber-300 uppercase">
              Prêt à afficher
            </h3>
            <p className="text-[11px] text-amber-100/70 mt-1">
              Le nouveau format paysage A4 est idéal à encadrer dans la chambre
              pour garder un souvenir impérissable de cette année magique.
            </p>
          </div>
          <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-4 shadow-md">
            <div className="text-xl mb-1">⭐</div>
            <h3 className="text-xs font-bold text-amber-300 uppercase">
              Contrôle des Lutins
            </h3>
            <p className="text-[11px] text-amber-100/70 mt-1">
              Rangement des jouets, vitesse de coucher... Les scores validés par
              les lutins garantissent un passage prioritaire du traîneau !
            </p>
          </div>
        </div>

        <form
          onSubmit={handleCheckout}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          <div className="lg:col-span-6 bg-indigo-950/80 border-2 border-amber-400/40 p-5 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-3">
            <div>
              <h2 className="text-xs font-bold text-amber-300 flex items-center gap-2 border-b border-amber-400/20 pb-2 uppercase tracking-wider mb-3">
                <span>📝</span> Informations de l'enfant et du parent
              </h2>

              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                  <label className="block text-[11px] uppercase font-bold text-amber-200/80 mb-1">
                    E-mail du parent
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-slate-950/70 border-2 border-amber-400/30 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="col-span-12">
                  <label className="block text-[11px] uppercase font-bold text-amber-200/80 mb-1">
                    📸 Photo de l'enfant (optionnel)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ cursor: "pointer" }}
                    className="w-full bg-slate-950/70 border-2 border-amber-400/30 rounded-xl p-2 text-xs text-amber-200 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-amber-400 file:text-slate-950 hover:file:bg-amber-300 cursor-pointer"
                  />
                </div>

                <div className="col-span-12 pt-2 border-t border-amber-400/20">
                  <label className="block text-[11px] uppercase font-bold text-amber-200/80 mb-1">
                    Prénom de l'enfant
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.childName}
                    onChange={(e) =>
                      setFormData({ ...formData, childName: e.target.value })
                    }
                    className="w-full bg-slate-950/70 border-2 border-amber-400/30 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="col-span-4">
                  <label className="block text-[11px] uppercase font-bold text-amber-200/80 mb-1">
                    Âge
                  </label>
                  <input
                    type="number"
                    value={formData.childAge}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        childAge: Number(e.target.value),
                      })
                    }
                    className="w-full bg-slate-950/70 border-2 border-amber-400/30 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div className="col-span-8">
                  <label className="block text-[11px] uppercase font-bold text-amber-200/80 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full bg-slate-950/70 border-2 border-amber-400/30 rounded-xl p-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="col-span-5 bg-slate-950/50 border border-amber-400/20 rounded-xl p-2">
                  <label className="block text-[10px] uppercase font-bold text-amber-300 mb-1">
                    🎁 Rangement
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.toyRoomScore}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        toyRoomScore: Number(e.target.value),
                      })
                    }
                    className="w-full bg-slate-950 border border-amber-400/30 rounded-lg p-1 text-xs text-white text-center font-bold"
                  />
                </div>
                <div className="col-span-7 bg-slate-950/50 border border-amber-400/20 rounded-xl p-2">
                  <label className="block text-[10px] uppercase font-bold text-amber-300 mb-1">
                    🛏️ Sommeil
                  </label>
                  <select
                    value={formData.bedtimeSpeed}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bedtimeSpeed: e.target.value as any,
                      })
                    }
                    className="w-full bg-slate-950 border border-amber-400/30 rounded-lg p-1 text-[11px] text-white"
                  >
                    <option value="Rapide">Rapide 🌟</option>
                    <option value="Moyen">Correct 🌙</option>
                    <option value="Discutable">Négociateur 💬</option>
                  </select>
                </div>

                <div className="col-span-12">
                  <label className="block text-[11px] uppercase font-bold text-amber-200/80 mb-1">
                    Mention / Note de Sagesse
                  </label>
                  <input
                    type="text"
                    value={formData.behaviorNote}
                    onChange={(e) =>
                      setFormData({ ...formData, behaviorNote: e.target.value })
                    }
                    className="w-full bg-slate-950/70 border-2 border-amber-400/30 rounded-xl p-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="col-span-12">
                  <label className="block text-[11px] uppercase font-bold text-amber-200/80 mb-1">
                    💌 Message personnalisé au Verso
                  </label>
                  <textarea
                    rows={2}
                    value={formData.backMessage}
                    onChange={(e) =>
                      setFormData({ ...formData, backMessage: e.target.value })
                    }
                    className="w-full bg-slate-950/70 border-2 border-amber-400/30 rounded-xl p-2 text-xs text-white focus:border-amber-400 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-400 text-xs text-center font-semibold bg-red-950/50 p-2 rounded-lg border border-red-500/30">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
              className="w-full py-3 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black rounded-xl shadow-xl uppercase tracking-wider text-xs border border-amber-200 transition-transform transform hover:scale-[1.01] mt-3 disabled:opacity-50"
            >
              {isLoading
                ? "Préparation du traîneau..."
                : "🎁 Commander le Pack 3-en-1 (1,99€)"}
            </button>
          </div>

          {/* Aperçu Amélioré et Élargi (6 colonnes) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-between space-y-4 bg-linear-to-br from-indigo-950 via-slate-900 to-indigo-950 border-2 border-amber-400/60 p-6 rounded-3xl shadow-[0_0_30px_rgba(251,191,36,0.15)] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full flex flex-col items-center space-y-4 relative z-10">
              <div className="flex items-center justify-between w-full px-2">
                <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-amber-300 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-400/30 shadow-inner">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  Aperçu Magique en Direct
                </div>
                <span className="text-[11px] text-amber-200/60 font-mono">
                  Édition Limitée 2026
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full">
                <button
                  type="button"
                  onClick={() => setActivePreview("permit")}
                  style={{ cursor: "pointer" }}
                  className={`py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center justify-center gap-1.5 shadow-md ${
                    activePreview === "permit"
                      ? "bg-linear-to-r from-red-800 to-red-950 text-yellow-100 border-amber-300 scale-105 shadow-red-900/50"
                      : "bg-indigo-950/80 text-amber-200/70 border-indigo-900 hover:bg-indigo-900/60"
                  }`}
                >
                  <span>🛷</span> Permis
                </button>
                <button
                  type="button"
                  onClick={() => setActivePreview("passport")}
                  style={{ cursor: "pointer" }}
                  className={`py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center justify-center gap-1.5 shadow-md ${
                    activePreview === "passport"
                      ? "bg-linear-to-r from-blue-900 to-indigo-950 text-yellow-100 border-amber-300 scale-105 shadow-blue-900/50"
                      : "bg-indigo-950/80 text-amber-200/70 border-indigo-900 hover:bg-indigo-900/60"
                  }`}
                >
                  <span>🛂</span> Passeport
                </button>
                <button
                  type="button"
                  onClick={() => setActivePreview("diploma")}
                  style={{ cursor: "pointer" }}
                  className={`py-2 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border flex items-center justify-center gap-1.5 shadow-md ${
                    activePreview === "diploma"
                      ? "bg-linear-to-r from-amber-700 to-amber-950 text-yellow-100 border-amber-300 scale-105 shadow-amber-900/50"
                      : "bg-indigo-950/80 text-amber-200/70 border-indigo-900 hover:bg-indigo-900/60"
                  }`}
                >
                  <span>📜</span> Diplôme
                </button>
              </div>

              <div className="w-full relative flex flex-col justify-center items-center p-4 sm:p-6 bg-linear-to-b from-slate-950/80 to-indigo-950/90 border-2 border-amber-400/50 rounded-2xl shadow-[inset_0_2px_15px_rgba(0,0,0,0.8)] overflow-hidden min-h-80 sm:min-h-90">
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

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-15">
                  <p className="text-amber-400 font-black text-3xl md:text-5xl tracking-[0.4em] uppercase whitespace-nowrap transform -rotate-12">
                    PÔLE NORD
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full pt-2 border-t border-amber-400/20 text-center">
                <div className="bg-indigo-900/40 p-2 rounded-xl border border-amber-400/20">
                  <p className="text-[10px] font-bold text-amber-300">
                    ⚡ Reçu en 2 min
                  </p>
                  <p className="text-[9px] text-amber-100/70">
                    Par e-mail en PDF
                  </p>
                </div>
                <div className="bg-indigo-900/40 p-2 rounded-xl border border-amber-400/20">
                  <p className="text-[10px] font-bold text-amber-300">
                    🛡️ 100% Magique
                  </p>
                  <p className="text-[9px] text-amber-100/70">
                    Effet garanti le 25
                  </p>
                </div>
                <div className="bg-indigo-900/40 p-2 rounded-xl border border-amber-400/20">
                  <p className="text-[10px] font-bold text-amber-300">
                    🖨️ Prêt à imprimer
                  </p>
                  <p className="text-[9px] text-amber-100/70">
                    Format A4 pour le diplôme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
