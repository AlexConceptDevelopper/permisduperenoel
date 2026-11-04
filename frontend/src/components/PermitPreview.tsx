// src/components/PermitPreview.tsx
import React, { useState } from 'react';
import type { DocumentData } from '../types/document';

interface PermitPreviewProps {
  data: DocumentData;
}

export const PermitPreview: React.FC<PermitPreviewProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    childName = 'Léo',
    childAge = 7,
    city = 'Lyon',
    behaviorNote = 'A brillé cette année en mode : "A survécu aux légumes de la cantine"',
    avatarUrl,
    toyRoomScore = 10,
    bedtimeSpeed = 'Rapide',
    serialNumber = 'PN-2026-9482-LUC',
    backMessage = 'Certificat officiel délivré par le Pôle Nord. Autorise la manipulation de paquets cadeaux et l’accès prioritaire au sapin.',
  } = data;

  return (
    <div className="w-full flex flex-col items-center">
      <div 
        className="relative mx-auto w-full max-w-md aspect-[1.58/1] rounded-2xl text-white shadow-2xl border-2 border-amber-400/70 overflow-hidden select-none bg-cover bg-center transition-all duration-300"
        style={{ 
          backgroundImage: `url('/images/${isFlipped ? 'permis-traineau-background-verso.jpg' : 'permis-traineau-background.jpg'}')`,
          fontFamily: "'Cormorant Garamond', serif" 
        }}
      >
        {/* Voile sombre léger pour garantir la lisibilité des textes */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

        {/* NUMÉRO DE SÉRIE : Visible uniquement au recto dans l'encadré supérieur droit */}
        {!isFlipped && (
          <div className="absolute top-[22.5%] right-[0.5%] z-20 w-[27%] flex items-center justify-center text-center">
            <span 
              className="text-amber-200 text-[6.5px] font-black tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {serialNumber}
            </span>
          </div>
        )}

        {/* ZONE DE CONTENU PRINCIPAL */}
        <div className="absolute inset-0 pt-16 px-6 pb-4 z-10 flex flex-col justify-between">
          {!isFlipped ? (
            // RECTO
            <div className="h-full flex flex-col justify-between">
              
              {/* Corps central avec photo bien dimensionnée */}
              <div className="grid grid-cols-12 gap-3 items-center my-auto px-2">
                <div className="col-span-4 flex flex-col items-center">
                  <div className="relative w-20 h-24 rounded-xl bg-slate-900 border-2 border-amber-400/80 overflow-hidden flex items-center justify-center shadow-lg">
                    {avatarUrl ? <img src={avatarUrl} alt="" className="w-full h-full object-cover" /> : <span className="text-3xl">🧒</span>}
                  </div>
                  <span className="text-[8.5px] text-amber-200 mt-1 uppercase font-bold tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>
                    Sage ({toyRoomScore}/10)
                  </span>
                </div>

                <div className="col-span-8 space-y-1.5 text-left">
                  <div>
                    <p className="text-[7.5px] uppercase text-amber-300 font-semibold tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>Titulaire & Âge</p>
                    <p className="text-sm font-bold text-white truncate tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                      {childName} <span className="text-xs font-normal text-amber-200" style={{ fontFamily: "'Cormorant Garamond', serif" }}>({childAge} ans)</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-[7.5px] uppercase text-amber-300 font-semibold tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>Ville & Sommeil</p>
                    <p className="text-[10.5px] font-bold text-slate-100 truncate">{city} • <span className="text-amber-200">{bedtimeSpeed}</span></p>
                  </div>
                  <div>
                    <p className="text-[7.5px] uppercase text-amber-300 font-semibold tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>Mention</p>
                    <div className="max-w-[85%]">
                      <p className="text-[9px] italic text-amber-100 bg-black/40 px-2 py-0.5 rounded border border-amber-400/20 leading-tight">
                        "{behaviorNote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pied de page Recto */}
              <div className="pt-1.5 border-t border-amber-400/20 flex justify-around items-center text-[7.5px] text-amber-200 font-bold px-2 pr-28" style={{ fontFamily: "'Cinzel', serif" }}>
                <span>SECRÉTARIAT DU PÈRE NOËL</span>
                <span>25 DÉC. 2026</span>
              </div>
            </div>
          ) : (
            // VERSO (Utilise sa propre image de fond dédiée)
            <div className="h-full flex flex-col justify-between text-left px-2 pt-2">
              
              {/* Corps Verso */}
              <div className="space-y-3 py-2 my-auto">
                <p className="text-[10px] text-amber-100 leading-relaxed italic font-semibold bg-black/35 p-3 rounded-xl border border-amber-400/20 shadow-inner">
                  "{backMessage}"
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-[8px] text-amber-200">
                  <div className="bg-black/25 p-2 rounded-lg border border-amber-400/20">
                    <span className="font-bold text-amber-300 block mb-0.5" style={{ fontFamily: "'Cinzel', serif" }}>⭐ Indice de Rangement :</span> Validé à {toyRoomScore}/10 par les lutins.
                  </div>
                  <div className="bg-black/25 p-2 rounded-lg border border-amber-400/20">
                    <span className="font-bold text-amber-300 block mb-0.5" style={{ fontFamily: "'Cinzel', serif" }}>🔒 Sécurité :</span> Valable sur tout le territoire.
                  </div>
                </div>
              </div>

              {/* Pied de page Verso */}
              <div className="flex justify-around items-end pt-1.5 border-t border-amber-400/20 text-[8px] text-amber-200 font-bold px-2 pr-36" style={{ fontFamily: "'Cinzel', serif" }}>
                <span>VISA PERMANENT • {serialNumber}</span>
                <span>ATELIER CENTRAL S. CLAUS</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ cursor: 'pointer', fontFamily: "'Cinzel', serif" }}
        className="mt-4 px-4 py-2 bg-indigo-900/80 hover:bg-indigo-800 text-amber-200 border border-amber-400/40 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
      >
        <span>🔄</span> {isFlipped ? "Voir le Recto" : "Voir le Verso"}
      </button>
    </div>
  );
};