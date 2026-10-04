// src/components/DiplomaPreview.tsx
import React, { useState } from 'react';
import type { DocumentData } from '../types/document';

interface DiplomaPreviewProps {
  data: DocumentData;
}

export const DiplomaPreview: React.FC<DiplomaPreviewProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    childName = 'Camille',
    childAge = 6,
    city = 'Paris',
    behaviorNote = 'A répandu la joie',
    toyRoomScore = 9,
    serialNumber = 'PN-2026-9482',
    backMessage = 'Grand prix d honneur décerné par le Père Noël pour une année pleine de gentillesse et de sourires.',
  } = data;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Même gabarit que le Permis et Passeport (aspect-[1.58/1]) pour garder la même taille visuelle */}
      <div className="relative mx-auto w-full max-w-md aspect-[1.58/1] rounded-2xl bg-linear-to-br from-amber-50 via-amber-100 to-orange-100 p-3.5 text-amber-950 shadow-2xl border-4 border-amber-500 overflow-hidden font-serif select-none flex flex-col justify-between">
        
        {!isFlipped ? (
          // RECTO FORMAT GABARIT STANDARD
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-center border-b-2 border-amber-400/60 pb-1">
              <div>
                <span className="text-[7.5px] font-sans font-bold tracking-[0.2em] uppercase text-amber-800">Grande Chancellerie</span>
                <h3 className="text-xs font-black tracking-wider uppercase text-amber-950">📜 Diplôme de l'Enfant Sage</h3>
              </div>
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-900 border border-amber-600/40 rounded text-[7.5px] font-mono font-bold shadow-xs">
                {serialNumber}
              </span>
            </div>

            <div className="text-center space-y-1 my-auto">
              <p className="text-[8px] italic text-amber-900 font-medium">Ce certificat officiel est solennellement décerné à :</p>
              <p className="text-sm font-black tracking-wide text-red-700 my-0.5">
                ⭐ {childName} <span className="text-[9.5px] font-sans font-normal text-amber-900">({childAge} ans - {city})</span>
              </p>
              <div className="text-[8.5px] text-amber-900 px-2 py-1 italic bg-amber-200/60 rounded-lg border border-amber-300 shadow-inner max-w-xs mx-auto">
                « {behaviorNote} »
              </div>
              <p className="text-[7.5px] font-sans font-bold text-amber-900">
                ✨ Indice de rangement : <span className="text-red-700 font-black">{toyRoomScore} / 10</span> ✨
              </p>
            </div>

            <div className="pt-1 border-t-2 border-amber-400/50 flex justify-between items-center">
              <div>
                <p className="text-[6.5px] font-sans uppercase text-amber-800 font-bold">Le Père Noël</p>
                <p className="text-[11px] font-script text-red-800 font-bold">Santa Claus</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-red-700 border-2 border-amber-400 flex items-center justify-center shadow-md transform rotate-6">
                <span className="text-[9px] text-amber-200">👑</span>
              </div>
              <div className="text-right">
                <p className="text-[6.5px] font-sans uppercase text-amber-800 font-bold">Chef des Lutins</p>
                <p className="text-[7.5px] font-sans font-bold text-amber-900">25 Décembre</p>
              </div>
            </div>
          </div>
        ) : (
          // VERSO FORMAT GABARIT STANDARD
          <div className="h-full flex flex-col justify-between font-sans">
            <div className="border-b-2 border-amber-400/60 pb-1 flex justify-between items-center">
              <span className="text-[7.5px] font-bold tracking-widest uppercase text-amber-800 font-serif">📜 Note d'Honneur et Proclamation</span>
              <span className="text-[7px] text-amber-800/80 font-mono font-bold">VERSO</span>
            </div>

            <div className="my-auto text-center px-2">
              <div className="text-[9px] text-amber-900 leading-relaxed italic bg-amber-200/60 p-2.5 rounded-xl border border-amber-400/40 shadow-inner font-serif">
                "{backMessage}"
              </div>
              <p className="text-[7.5px] text-amber-800 font-medium mt-1.5 font-serif">
                ✨ Inscrit(e) à vie sur le Grand Registre d'Or du Pôle Nord. ✨
              </p>
            </div>

            <div className="flex justify-between items-center pt-1 border-t border-amber-400/40 text-[6.5px] font-bold text-amber-900 font-mono">
              <span>🛡️ SCEAU OFFICIEL • {serialNumber}</span>
              <span>🎄 PÔLE NORD</span>
            </div>
          </div>
        )}

      </div>

      <button
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ cursor: 'pointer' }}
        className="mt-4 px-4 py-2 bg-indigo-900/80 hover:bg-indigo-800 text-amber-200 border border-amber-400/40 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
      >
        <span>🔄</span> {isFlipped ? "Voir le Recto (Diplôme)" : "Voir le Verso (Note d'Honneur)"}
      </button>
    </div>
  );
};