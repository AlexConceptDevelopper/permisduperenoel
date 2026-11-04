// src/pages/Success.tsx
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getPdfDownloadUrl } from "../apis/orderApi";
import { Helmet } from "react-helmet-async";

export function Success() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!sessionId) {
      alert("Identifiant de session manquant.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const downloadUrl = getPdfDownloadUrl(sessionId);
      
      // On télécharge via fetch pour maîtriser le chargement sur la même page
      const response = await fetch(downloadUrl);
      
      if (!response.ok) {
        throw new Error("Erreur lors de la génération du PDF.");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Création d'un lien invisible pour forcer le téléchargement du fichier
      const link = document.createElement("a");
      link.href = url;
      link.download = "Pack-Noel-Pecieux.pdf";
      document.body.appendChild(link);
      link.click();
      
      // Nettoyage
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setHasDownloaded(true);
    } catch (error) {
      console.error(error);
      setErrorMessage("La génération du pack a pris un peu trop de temps ou a échoué. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-950 via-slate-900 to-blue-950 text-amber-50 flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">
      <Helmet>
        <title>Commande Validée - Téléchargez votre Pack de Noël !</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Effets lumineux de fond */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-lg bg-indigo-950/80 border-2 border-amber-400/50 p-8 rounded-3xl shadow-[0_0_50px_rgba(251,191,36,0.2)] backdrop-blur-xl text-center relative z-10 space-y-6">
        <div className="text-6xl animate-bounce">🎁🎅✨</div>

        <div className="space-y-2">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-400/40 text-amber-200 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
            Paiement Validé avec Succès !
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400">
            Merci pour votre commande !
          </h1>
          <p className="text-amber-100/80 text-sm leading-relaxed">
            Ho ho ho ! Les lutins du Pôle Nord préparent les documents officiels de votre enfant.
          </p>

          {/* Notification pour l'e-mail */}
          <p className="text-xs text-amber-300/90 font-medium bg-amber-500/10 border border-amber-400/20 py-2 px-3 rounded-xl">
            📧 Une copie de votre pack vous a également été envoyée par e-mail pour que vous puissiez le retrouver facilement.
          </p>
        </div>

        {/* Message d'avertissement sur le temps de génération */}
        <div className="text-xs text-amber-200/90 bg-blue-950/60 border border-blue-500/30 p-3 rounded-xl">
          ⏳ <strong>Note :</strong> La préparation magique du PDF (assemblage des fonds et des images) peut prendre de <strong>quelques secondes à 1 minute</strong>. Merci de patienter sans fermer la page.
        </div>

        {hasDownloaded && (
          <div className="bg-emerald-950/60 border border-emerald-500/40 p-3 rounded-2xl text-emerald-200 text-xs font-medium">
            ✅ Téléchargement réussi ! Votre pack est bien sur votre appareil.
          </div>
        )}

        {errorMessage && (
          <div className="bg-rose-950/60 border border-rose-500/40 p-3 rounded-2xl text-rose-200 text-xs font-medium">
            ❌ {errorMessage}
          </div>
        )}

        <div className="pt-2 flex flex-col gap-3">
          <button
            onClick={handleDownload}
            disabled={isLoading}
            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
            className={`w-full py-3.5 font-black rounded-xl shadow-xl uppercase tracking-wider text-xs border transition-all ${
              isLoading
                ? "bg-amber-600/50 text-slate-300 border-amber-500/30 cursor-wait animate-pulse"
                : "bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 border-amber-200 transform hover:scale-[1.02]"
            }`}
          >
            {isLoading ? "🔄 Génération magique en cours..." : "📥 Télécharger mon Pack de Noël (PDF)"}
          </button>

          <button
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            className="w-full py-3 bg-indigo-900/60 hover:bg-indigo-900 text-amber-200 font-bold rounded-xl border border-amber-400/30 text-xs tracking-wider transition-colors"
          >
            🏠 Retourner à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}