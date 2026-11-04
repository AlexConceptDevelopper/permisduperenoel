// src/components/DiplomaPreview.tsx
import React, { useState } from 'react';
import type { DocumentData } from '../types/document';

interface DiplomaPreviewProps {
  data: DocumentData;
}

export const DiplomaPreview: React.FC<DiplomaPreviewProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const diplomaBg = '/images/christmas-parchment-certificate.jpg';

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
      <div 
        className="relative mx-auto w-full max-w-md aspect-[1.58/1] rounded-2xl shadow-2xl overflow-hidden font-serif select-none transition-all duration-500 bg-cover bg-center p-6 flex flex-col justify-between"
        style={{
          backgroundImage: `url(${diplomaBg})`
        }}
      >
        
        {!isFlipped ? (
          // --- RECTO ---
          <div className="relative w-full h-full flex flex-col justify-between items-center">
            
            {/* Ligne du haut : Numéro de série aligné à droite */}
            <div className="w-full flex justify-end pt-1">
              <span className="px-2.5 py-1 bg-slate-900/95 text-amber-300 border border-amber-400/50 rounded text-[6.5px] font-mono font-bold shadow-md whitespace-nowrap">
                {serialNumber}
              </span>
            </div>

            {/* Bloc central parfaitement centré horizontalement et verticalement */}
            <div className="w-full flex flex-col items-center text-center my-auto">
              <span className="text-[5.5px] font-sans font-bold tracking-[0.15em] uppercase text-amber-950/80 block mb-0.5">Grande Chancellerie du Pôle Nord</span>
              <h3 className="text-[10px] font-black tracking-wider uppercase text-amber-950 bg-amber-100/70 px-2.5 py-0.5 rounded inline-block border border-amber-300/50 shadow-xs mb-3">
                📜 Diplôme de l'Enfant Sage
              </h3>

              <p className="text-[7px] italic text-amber-950/90 font-medium">Ce certificat officiel est solennellement décerné à :</p>
              <p className="text-xs font-black tracking-wide text-red-700 my-1">
                ⭐ {childName} <span className="text-[8.5px] font-sans font-normal text-amber-950">({childAge} ans - {city})</span>
              </p>
              <div className="text-[7.5px] text-amber-950 px-3 py-1.5 italic bg-amber-100/80 rounded-lg border border-amber-300 shadow-inner max-w-xs mx-auto my-1">
                « {behaviorNote} »
              </div>
              <p className="text-[6.5px] font-sans font-bold text-amber-950 mt-1">
                ✨ Indice de rangement validé par les lutins : <span className="text-red-700 font-black">{toyRoomScore} / 10</span> ✨
              </p>
            </div>

            {/* Pied de page / Signatures */}
            <div className="w-full pb-1 px-2 flex justify-between items-end">
              <div className="text-left">
                <p className="text-[5px] font-sans uppercase text-amber-950/80 font-bold">Le Père Noël</p>
                <p className="text-[9.5px] font-script text-red-900 font-bold">Santa Claus</p>
              </div>
              
              <div className="w-8 h-8"></div> 

              <div className="text-right">
                <p className="text-[5px] font-sans uppercase text-amber-950/80 font-bold">Chef des Lutins</p>
                <p className="text-[6px] font-sans font-bold text-amber-950">25 Décembre 2026</p>
              </div>
            </div>
          </div>
        ) : (
          // --- VERSO ---
          <div className="relative w-full h-full flex flex-col justify-between items-center font-sans">
            
            {/* Mention VERSO en haut à droite */}
            <div className="w-full flex justify-end pt-1">
              <span className="text-[6px] text-amber-950/80 font-mono font-bold bg-amber-100/60 px-2 py-0.5 rounded border border-amber-300/40">VERSO</span>
            </div>

            {/* Bloc central Verso parfaitement centré */}
            <div className="w-full flex flex-col items-center text-center my-auto px-4">
              <div className="mb-3">
                <span className="text-[7px] font-bold tracking-widest uppercase text-amber-950/90 font-serif bg-amber-100/80 px-2.5 py-1 rounded-md border border-amber-300/60 shadow-xs">
                  📜 Note d'Honneur et Proclamation
                </span>
              </div>

              <div className="text-[8px] text-amber-950 leading-relaxed italic bg-amber-100/80 p-3.5 rounded-xl border border-amber-300 shadow-inner font-serif max-w-sm mx-auto">
                "{backMessage}"
              </div>
              <p className="text-[6.5px] text-amber-950/90 font-medium mt-2 font-serif">
                ✨ Inscrit(e) à vie sur le Grand Registre d'Or du Pôle Nord. ✨
              </p>
            </div>

            {/* Pied de page Verso */}
            <div className="w-full pb-1 px-2 flex justify-between items-center text-[5.5px] font-bold text-amber-950/90 font-mono">
              <span>🛡️ SCEAU OFFICIEL • {serialNumber}</span>
              <span>🎄 ATELIER CENTRAL DU PÔLE NORD</span>
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
        <span>🔄</span> {isFlipped ? "Voir le Recto (Diplôme)" : "Voir le Verso (Note d'Honneur)"}
      </button>
    </div>
  );
};