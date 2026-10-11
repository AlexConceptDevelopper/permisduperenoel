// src/components/AkinatorQuiz.tsx
import React, { useState } from 'react';
import type { DocumentData } from '../types/document';

interface AkinatorQuizProps {
  onComplete: (data: Partial<DocumentData>) => void;
}

export const AkinatorQuiz: React.FC<AkinatorQuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState(7);
  const [city, setCity] = useState('');
  const [adventure, setAdventure] = useState('A survecu aux légumes de la cantine');
  const [talent, setTalent] = useState('Champion du monde de Lego');

  const handleFinish = () => {
    const childName = name || 'Lucas';
    const childAge = Number(age) || 7;
    const childCity = city || 'Bordeaux';

    const generatedBehavior = `A brillé cette année en mode : "${adventure}"`;
    const generatedBackMessage = `Le Conseil des Lutins certifie que ${childName}, grâce à son talent secret de "${talent}" à ${childCity}, mérite amplement sa place sur le Grand Registre d'Or !`;
    
    // Génération automatique de la lettre personnalisée du Père Noël
    const generatedSantaLetter = `Mon cher ${childName},\n\n`
      + `Les lutins m'ont rapporté une merveilleuse nouvelle depuis ${childCity} ! `
      + `Cette année, tu as accompli un véritable exploit : "${adventure}". Toute l'équipe du Pôle Nord en reste admirative !\n\n`
      + `Sans oublier ton incroyable talent secret de "${talent}" qui fait briller les yeux de tout l'atelier. `
      + `Sache que ton nom est désormais inscrit en lettres d'or sur notre Grand Registre des Enfants Sages.\n\n`
      + `Passe de joyeuses fêtes, continue d'émerveiller tes proches et prépare-toi pour la nuit magique de Noël !\n\n`
      + `Avec toute mon affection,\nLe Père Noël 🎅`;

    onComplete({
      childName: childName,
      childAge: childAge,
      city: childCity,
      behaviorNote: generatedBehavior,
      backMessage: generatedBackMessage,
      santaLetter: generatedSantaLetter,
      toyRoomScore: 10, // Max pour les super héros de l'enquête !
    });
  };

  return (
    <div className="bg-indigo-950/90 border-2 border-amber-400/60 p-6 rounded-3xl shadow-2xl backdrop-blur-xl text-white max-w-xl mx-auto my-8">
      {step === 1 && (
        <div className="space-y-4 text-center">
          <span className="text-3xl">🎅✨</span>
          <h2 className="text-xl font-black text-amber-300 uppercase">L'Enquête Magique des Lutins</h2>
          <p className="text-xs text-amber-100/80">Commençons par les présentations secrètes pour le grand livre des elfes.</p>
          
          <div className="space-y-3 text-left pt-2">
            <div>
              <label className="block text-[11px] uppercase font-bold text-amber-200 mb-1">Prénom de l'enfant</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Ex: Léa" 
                className="w-full bg-slate-950 border border-amber-400/30 rounded-xl p-2.5 text-xs text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold text-amber-200 mb-1">Âge</label>
                <input 
                  type="number" 
                  value={age} 
                  onChange={(e) => setAge(Number(e.target.value))} 
                  className="w-full bg-slate-950 border border-amber-400/30 rounded-xl p-2.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase font-bold text-amber-200 mb-1">Ville</label>
                <input 
                  type="text" 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)} 
                  placeholder="Ex: Lyon" 
                  className="w-full bg-slate-950 border border-amber-400/30 rounded-xl p-2.5 text-xs text-white"
                />
              </div>
            </div>
          </div>

          <button 
            type="button"
            onClick={() => setStep(2)}
            className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl uppercase text-xs tracking-wider mt-4 shadow-lg cursor-pointer"
          >
            Continuer l'enquête magique ➔
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 text-center">
          <span className="text-3xl">🛷🕵️‍♂️</span>
          <h2 className="text-xl font-black text-amber-300 uppercase">Le Rapport des Lutins</h2>
          <p className="text-xs text-amber-100/80">Qu'est-ce qui a marqué l'année de {name || 'notre petit champion'} ?</p>

          <div className="space-y-2 text-left">
            {[
              "A survecu aux légumes de la cantine",
              "A appris à faire du vélo sans les petites roues",
              "A négocié le coucher comme un pro",
              "A été le roi/reine des bêtises rigolotes"
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setAdventure(item)}
                className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                  adventure === item 
                    ? "bg-amber-500/20 border-amber-400 text-amber-200" 
                    : "bg-slate-950/50 border-amber-400/20 text-slate-300 hover:border-amber-400/50"
                }`}
              >
                ✨ {item}
              </button>
            ))}
          </div>

          <button 
            type="button"
            onClick={() => setStep(3)}
            className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl uppercase text-xs tracking-wider mt-4 shadow-lg cursor-pointer"
          >
            Dernière étape ➔
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 text-center">
          <span className="text-3xl">🪄🏆</span>
          <h2 className="text-xl font-black text-amber-300 uppercase">Le Talent Secret</h2>
          <p className="text-xs text-amber-100/80">Quel est son super-pouvoir secret cette année ?</p>

          <div className="space-y-2 text-left">
            {[
              "Champion du monde de Lego",
              "Maître de l'hug (câlins illimités)",
              "Inventeur de blagues de lutins",
              "Chef cuisinier de boules de neige"
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTalent(item)}
                className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                  talent === item 
                    ? "bg-amber-500/20 border-amber-400 text-amber-200" 
                    : "bg-slate-950/50 border-amber-400/20 text-slate-300 hover:border-amber-400/50"
                }`}
              >
                ⭐ {item}
              </button>
            ))}
          </div>

          <button 
            type="button"
            onClick={handleFinish}
            className="w-full py-3 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 text-slate-950 font-black rounded-xl uppercase text-xs tracking-wider mt-4 shadow-xl cursor-pointer animate-pulse"
          >
            🎁 Générer le Pack Magique Personnalisé !
          </button>
        </div>
      )}
    </div>
  );
};