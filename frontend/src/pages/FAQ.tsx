import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer'; // Adapte le chemin si ton Footer est ailleurs

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Comment et quand le \"Permis du Père Noël\" est-il envoyé ?",
    answer: "La livraison est magique et instantanée ! Dès que tu as validé la commande, le permis officiel de ton enfant est généré au format numérique haute qualité et t'est envoyé directement par e-mail en quelques minutes. Tu peux ainsi l'imprimer tranquillement chez toi ou le glisser sous le sapin."
  },
  {
    question: "À quoi ressemble le permis et que contient-il ?",
    answer: "C'est un document officiel certifié par le Pôle Nord. Il comporte le prénom de l'enfant, sa photo (si ajoutée), sa classe de comportement (avec un super score pour les efforts de l'année !) et la signature officielle du Père Noël, le tout aux couleurs de notre thématique Deep Night Blue et Or."
  },
  {
    question: "Est-ce que le paiement est 100% sécurisé ?",
    answer: "Absolument. Toutes les transactions bancaires sont entièrement cryptées et sécurisées via nos partenaires de paiement de confiance. Aucune donnée sensible de carte bancaire n'est stockée sur nos serveurs."
  },
  {
    question: "Que fait-on des données de mes enfants ?",
    answer: "La confidentialité est notre priorité absolue (secret du Pôle Nord garanti). Les informations saisies (prénom, photo) servent uniquement à générer le permis de ton enfant et ne sont ni revendues, ni utilisées à des fins commerciales."
  },
  {
    question: "Puis-je commander le permis un 24 décembre au soir ?",
    answer: "Oui ! C'est l'avantage du format numérique instantané. Même à la dernière minute, les lutins de la Fabrique Magique travaillent d'arrache-pied 24h/24 pour que les retardataires trouvent leur permis à temps sous le sapin."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="py-16 px-6 max-w-4xl mx-auto relative z-10 flex-grow">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold bg-amber-500/10 border border-amber-400/30 px-3 py-1.5 rounded-full inline-block">
            ✨ Tout savoir sur la magie
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400 mt-4 mb-3">
            Foire Aux Questions
          </h1>
          <p className="text-sm text-indigo-200/90 font-medium">
            Les réponses à toutes vos interrogations pour préparer un Noël inoubliable.
          </p>
        </div>

        {/* Liste des questions / réponses */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-indigo-900/60 backdrop-blur-md border border-amber-400/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-amber-400/40"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-amber-100 text-sm md:text-base flex items-center gap-2">
                    <span className="text-amber-400">🎄</span> {item.question}
                  </span>
                  <span className={`transform transition-transform duration-300 text-amber-400 font-bold text-lg ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-indigo-100 text-xs md:text-sm leading-relaxed border-t border-amber-400/15 bg-indigo-950/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;