// src/components/AkinatorQuiz.tsx
import React, { useState } from 'react';
import type { DocumentData } from '../types/document';

interface AkinatorQuizProps {
  onComplete: (data: Partial<DocumentData>) => void;
}

const ADVENTURES = [
  'A survecu aux légumes de la cantine',
  'A appris à faire du vélo sans les petites roues',
  'A négocié le coucher comme un pro',
  'A été le roi/reine des bêtises rigolotes',
];

const TALENTS = [
  'Champion du monde de Lego',
  "Maître de l'hug (câlins illimités)",
  'Inventeur de blagues de lutins',
  'Chef cuisinier de boules de neige',
];

export const AkinatorQuiz: React.FC<AkinatorQuizProps> = ({ onComplete }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState(7);
  const [gender, setGender] = useState<'M' | 'F'>('M');
  const [city, setCity] = useState('');
  const [adventure, setAdventure] = useState(ADVENTURES[0]);
  const [talent, setTalent] = useState(TALENTS[0]);

  const buildPayload = (
    overrideAdventure?: string,
    overrideTalent?: string,
  ): Partial<DocumentData> => {
    const childName = name.trim() || 'Lucas';
    const childAge = Number(age) || 7;
    const childCity = city.trim() || 'Bordeaux';
    const selectedAdventure = overrideAdventure || adventure;
    const selectedTalent = overrideTalent || talent;

    const cleanPrefix = childName
      .replaceAll(/[^a-zA-Zà-üÀ-Ü]/g, '')
      .substring(0, 3)
      .toUpperCase();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const generatedSerialNumber = `PN-2026-${randomCode}-${cleanPrefix || 'LUC'}`;

    const generatedBehavior = `A brillé cette année en mode : "${selectedAdventure}"`;
    const generatedBackMessage = `Le Conseil des Lutins certifie que ${childName}, grâce à son talent secret de "${selectedTalent}" à ${childCity}, mérite amplement sa place sur le Grand Registre d'Or !`;

    const cherForm = gender === 'F' ? 'Ma chère' : 'Mon cher';
    const generatedSantaLetter =
      `${cherForm} ${childName},\n\n` +
      `Les lutins m'ont rapporté une merveilleuse nouvelle depuis ${childCity} ! ` +
      `Cette année, tu as accompli un véritable exploit : "${selectedAdventure}". Toute l'équipe du Pôle Nord en reste admirative !\n\n` +
      `Sans oublier ton incroyable talent secret de "${selectedTalent}" qui fait briller les yeux de tout l'atelier. ` +
      `Sache que ton nom est désormais inscrit en lettres d'or sur notre Grand Registre des Enfants Sages.\n\n` +
      `Passe de joyeuses fêtes, continue d'émerveiller tes proches et prépare-toi pour la nuit magique de Noël !\n\n` +
      `Avec toute mon affection,\nLe Père Noël 🎅`;

    return {
      childName,
      childAge,
      childGender: gender,
      city: childCity,
      serialNumber: generatedSerialNumber,
      behaviorNote: generatedBehavior,
      backMessage: generatedBackMessage,
      santaLetter: generatedSantaLetter,
      toyRoomScore: 10,
    };
  };

  const handleFinish = () => {
    onComplete(buildPayload());
  };

  const handleQuickPreview = () => {
    onComplete(buildPayload());
  };

  return (
    <div className="bg-indigo-950/90 border-2 border-amber-400/60 p-6 rounded-3xl shadow-2xl backdrop-blur-xl text-white max-w-xl mx-auto my-8">
      {step === 1 && (
        <div className="space-y-4 text-center">
          <span className="text-3xl">🎅✨</span>
          <h2 className="text-xl font-black text-amber-300 uppercase">
            L&apos;Enquête Magique des Lutins
          </h2>
          <p className="text-xs text-amber-100/80">
            Commençons par les présentations pour préparer le dossier de votre enfant.
          </p>

          <div className="space-y-3 text-left pt-2">
            <div>
              <label className="block text-[11px] uppercase font-bold text-amber-200 mb-1">
                Prénom de l&apos;enfant
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Léa"
                className="w-full bg-slate-950 border border-amber-400/30 rounded-xl p-2.5 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold text-amber-200 mb-1">
                Genre
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender('M')}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'M'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                      : 'bg-slate-950/50 border-amber-400/20 text-slate-400'
                  }`}
                >
                  👦 Garçon
                </button>
                <button
                  type="button"
                  onClick={() => setGender('F')}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    gender === 'F'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                      : 'bg-slate-950/50 border-amber-400/20 text-slate-400'
                  }`}
                >
                  👧 Fille
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold text-amber-200 mb-1">
                  Âge
                </label>
                <input
                  type="number"
                  min={1}
                  max={17}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-amber-400/30 rounded-xl p-2.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase font-bold text-amber-200 mb-1">
                  Ville
                </label>
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
            Choisir l&apos;exploit &amp; le talent ➔
          </button>

          <button
            type="button"
            onClick={handleQuickPreview}
            className="text-[11px] text-amber-300/80 hover:text-amber-200 underline cursor-pointer pt-1"
          >
            Voir l&apos;aperçu directement (modifiable ensuite)
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5 text-center">
          <div>
            <span className="text-3xl">🛷🪄</span>
            <h2 className="text-xl font-black text-amber-300 uppercase mt-1">
              Le Dossier de {name.trim() || 'votre enfant'}
            </h2>
            <p className="text-xs text-amber-100/80">
              Sélectionnez l&apos;exploit de l&apos;année et le talent secret pour le Pôle Nord.
            </p>
          </div>

          <div className="space-y-2 text-left">
            <p className="text-[11px] uppercase font-bold text-amber-200">
              🕵️‍♂️ Exploit de l&apos;année
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ADVENTURES.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAdventure(item)}
                  className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                    adventure === item
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                      : 'bg-slate-950/50 border-amber-400/20 text-slate-300 hover:border-amber-400/50'
                  }`}
                >
                  ✨ {item}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-left">
            <p className="text-[11px] uppercase font-bold text-amber-200">
              🏆 Talent secret
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TALENTS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTalent(item)}
                  className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                    talent === item
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                      : 'bg-slate-950/50 border-amber-400/20 text-slate-300 hover:border-amber-400/50'
                  }`}
                >
                  ⭐ {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-amber-200 border border-amber-400/30 font-bold rounded-xl uppercase text-xs cursor-pointer"
            >
              ⬅ Retour
            </button>
            <button
              type="button"
              onClick={handleFinish}
              className="flex-1 py-3 bg-linear-to-r from-amber-400 via-yellow-300 to-amber-500 hover:from-amber-300 text-slate-950 font-black rounded-xl uppercase text-xs tracking-wider shadow-xl cursor-pointer"
            >
              🎁 Générer le Pack Magique !
            </button>
          </div>
        </div>
      )}
    </div>
  );
};