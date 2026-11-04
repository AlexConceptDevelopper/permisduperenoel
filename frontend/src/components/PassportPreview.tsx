// src/components/PassportPreview.tsx
import React, { useState } from "react";
import type { DocumentData } from "../types/document";

interface PassportPreviewProps {
  data: DocumentData;
}

export const PassportPreview: React.FC<PassportPreviewProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    childName = "Camille",
    childAge = 6,
    city = "Paris",
    behaviorNote = "Sage",
    avatarUrl,
    toyRoomScore = 9,
    serialNumber = "PN-2026-9482",
    backMessage = "Visa permanent accordé pour un passage prioritaire dans les cieux le soir du 24 décembre.",
  } = data;

  const passportRectoBg = "/images/passeport-pole-nord-recto.jpg";
  const passportVersoBg = "/images/passeport-pole-nord-verso.jpg";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Conteneur principal (dimensions et fond) */}
      <div 
        className="relative mx-auto w-full max-w-md aspect-[1.58/1] rounded-2xl text-white shadow-2xl border-2 border-amber-400/80 overflow-hidden font-sans select-none transition-all duration-500 bg-cover bg-center"
        style={{
          backgroundImage: `url(${isFlipped ? passportVersoBg : passportRectoBg})`
        }}
      >
        
        {!isFlipped ? (
          // --- RECTO ---
          <div className="relative w-full h-full">
            
            {/* 1. Numéro de série (Position absolue au millimètre) */}
            <div className="absolute top-14.5 right-9">
              <span className="px-2 py-0.5 bg-blue-950/90 text-amber-300 border border-amber-400/50 rounded text-[8px] font-mono font-bold shadow-md">
                {serialNumber}
              </span>
            </div>

            {/* 2. Bloc Photo + Rangement (Position absolue à gauche) */}
            <div className="absolute top-21.5 left-6 flex flex-col items-center">
              <div className="w-26 h-31.5 rounded-md bg-slate-950/90 border border-amber-400/60 overflow-hidden flex items-center justify-center shadow-inner">
                {avatarUrl ? <img src={avatarUrl} alt="" className="w-full h-full object-cover" /> : <span className="text-3xl">🧒</span>}
              </div>
              <span className="mt-1 text-[7px] text-amber-200 uppercase font-bold bg-slate-950/80 px-1.5 py-0.5 rounded border border-amber-400/20">
                Rangement: {toyRoomScore}/10
              </span>
            </div>

            {/* 3. Bloc Texte de droite (Position absolue) */}
            <div className="absolute top-25.5 left-38.75 right-7.5 space-y-1.5 text-left">
              <div>
                <p className="text-[6.5px] uppercase text-amber-300/90 font-bold tracking-wider">Voyageur / Âge</p>
                <p className="text-sm font-black text-white truncate drop-shadow">{childName} <span className="text-xs font-normal text-amber-200">({childAge} ans)</span></p>
              </div>
              <div>
                <p className="text-[6.5px] uppercase text-amber-300/90 font-bold tracking-wider">Ville</p>
                <p className="text-[10px] font-bold text-slate-100 truncate">{city}</p>
              </div>
              <div>
                <p className="text-[6.5px] uppercase text-amber-300/90 font-bold tracking-wider">Visa</p>
                <p className="text-[8px] italic text-amber-100 line-clamp-2 bg-blue-950/80 px-2 py-1 rounded border border-amber-400/30">"{behaviorNote}"</p>
              </div>
            </div>

            {/* 4. Pied de page (Position absolue en bas) */}
            <div className="absolute bottom-4 left-8 right-8 flex justify-around items-center text-[7px] text-amber-300/90 font-mono font-bold tracking-widest">
              <span>PASSEPORT OFFICIEL</span>
              <span>CONTRÔLE DOUANIER</span>
            </div>

          </div>
        ) : (
          // --- VERSO ---
          <div className="relative w-full h-full">
            
            {/* Message de visa positionné proprement dans la case supérieure centrale */}
            <div className="absolute top-3 left-16 right-16">
              <p className="text-[8.5px] text-indigo-100 leading-relaxed italic bg-blue-950/90 p-1 rounded-lg border border-amber-400/40 shadow-inner text-center">
                "{backMessage}"
              </p>
            </div>

            {/* Pied de page verso positionné exactement sur les bandes du bas de l'image */}
            <div className="absolute bottom-4 left-10 right-10 flex justify-around items-end text-[7px] text-amber-300/90 font-mono font-bold tracking-widest">
              <span>PÔLE NORD • {serialNumber}</span>
              <span>MONDE ENTIER</span>
            </div>

          </div>
        )}

      </div>

      <button
        type="button"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ cursor: 'pointer' }}
        className="mt-4 px-4 py-2 bg-indigo-900/80 hover:bg-indigo-800 text-amber-200 border border-amber-400/40 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
      >
        <span>🔄</span> {isFlipped ? "Voir le Recto" : "Voir le Verso"}
      </button>
    </div>
  );
};