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

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative mx-auto w-full max-w-md aspect-[1.58/1] rounded-2xl bg-linear-to-br from-blue-950 via-indigo-950 to-slate-950 p-4 text-white shadow-2xl border-2 border-amber-400/80 overflow-hidden font-sans select-none">
        
        {!isFlipped ? (
          // RECTO
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-amber-400/30 pb-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛂</span>
                <div>
                  <p className="text-[7px] tracking-[0.25em] uppercase text-amber-300 font-bold">Migrations Célestes</p>
                  <h3 className="text-xs font-black tracking-wider uppercase">Passeport Pôle Nord</h3>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-blue-900/60 text-amber-300 border border-amber-400/40 rounded text-[8px] font-mono font-bold">
                {serialNumber}
              </span>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-4 flex flex-col items-center">
                <div className="relative w-20 h-22 rounded-lg bg-slate-900 border-2 border-amber-400/80 overflow-hidden flex items-center justify-center">
                  {avatarUrl ? <img src={avatarUrl} alt="" className="w-full h-full object-cover" /> : <span className="text-2xl">🧒</span>}
                </div>
                <span className="text-[7px] text-amber-200 mt-1 uppercase font-black">Rangement: {toyRoomScore}/10</span>
              </div>

              <div className="col-span-8 space-y-1 text-left">
                <div>
                  <p className="text-[7px] uppercase text-amber-300/80 font-semibold">Voyageur / Âge</p>
                  <p className="text-sm font-black text-white truncate">{childName} <span className="text-xs font-normal text-amber-200">({childAge} ans)</span></p>
                </div>
                <div>
                  <p className="text-[7px] uppercase text-amber-300/80 font-semibold">Ville</p>
                  <p className="text-[10px] font-bold text-slate-100 truncate">{city}</p>
                </div>
                <div>
                  <p className="text-[7px] uppercase text-amber-300/80 font-semibold">Visa</p>
                  <p className="text-[8px] italic text-amber-100 line-clamp-1 bg-blue-900/40 px-2 py-0.5 rounded border border-amber-400/20">"{behaviorNote}"</p>
                </div>
              </div>
            </div>

            <div className="mt-1 pt-1 border-t border-amber-400/20 flex justify-between items-center text-[6px] text-amber-300/70 font-mono">
              <span>PASSEPORT OFFICIEL</span>
              <span>CONTRÔLE DOUANIER</span>
            </div>
          </div>
        ) : (
          // VERSO CLASSIQUE (Plein format)
          <div className="h-full flex flex-col justify-between text-left">
            <div className="border-b border-amber-400/30 pb-1.5 flex justify-between items-center">
              <span className="text-[8px] font-bold tracking-widest uppercase text-amber-300">🛂 Visas & Tampons Officiels</span>
              <span className="text-[7px] text-amber-300/60 font-mono">VERSO</span>
            </div>

            <div className="space-y-2 py-2">
              <p className="text-[9px] text-indigo-100 leading-relaxed italic bg-blue-950/60 p-3 rounded-xl border border-amber-400/20 shadow-inner">
                "{backMessage}"
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-[7.5px] text-amber-200">
                <div className="bg-blue-900/40 p-2 rounded-lg border border-amber-400/20">☁️ Espace Aérien</div>
                <div className="bg-blue-900/40 p-2 rounded-lg border border-amber-400/20">🦌 Escorte Rennes</div>
                <div className="bg-blue-900/40 p-2 rounded-lg border border-amber-400/20">🎁 Douane Hotte</div>
              </div>
            </div>

            <div className="flex justify-between items-end pt-1 border-t border-amber-400/20 text-[6px] text-amber-300/70 font-mono">
              <span>PÔLE NORD • {serialNumber}</span>
              <span>MONDE ENTIER</span>
            </div>
          </div>
        )}

      </div>

      <button
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ cursor: 'pointer' }}
        className="mt-4 px-4 py-2 bg-indigo-900/80 hover:bg-indigo-800 text-amber-200 border border-amber-400/40 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
      >
        <span>🔄</span> {isFlipped ? "Voir le Recto" : "Voir le Verso"}
      </button>
    </div>
  );
};