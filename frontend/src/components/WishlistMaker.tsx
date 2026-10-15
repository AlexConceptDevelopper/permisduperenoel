import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const CATEGORIES = [
  { id: 'gaming', name: 'Jeux Vidéo & Consoles', icon: '🎮', color: 'bg-purple-600/30 border-purple-400/50 text-purple-200' },
  { id: 'lego', name: 'Constructions & Legos', icon: '🧱', color: 'bg-amber-600/30 border-amber-400/50 text-amber-200' },
  { id: 'toys', name: 'Poupées & Peluches', icon: '🧸', color: 'bg-pink-600/30 border-pink-400/50 text-pink-200' },
  { id: 'vehicles', name: 'Véhicules & Circuits', icon: '🚗', color: 'bg-blue-600/30 border-blue-400/50 text-blue-200' },
  { id: 'creative', name: 'Créatif & Loisirs', icon: '🎨', color: 'bg-emerald-600/30 border-emerald-400/50 text-emerald-200' },
  { id: 'outdoor', name: 'Plein air & Vélo', icon: '🚲', color: 'bg-cyan-600/30 border-cyan-400/50 text-cyan-200' },
  { id: 'books', name: 'Livres & Histoires', icon: '📚', color: 'bg-orange-600/30 border-orange-400/50 text-orange-200' },
];

interface WishItem {
  id: number;
  text: string;
  categoryIcon: string;
}

export default function WishlistMaker() {
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [customWish, setCustomWish] = useState('');
  const [wishlist, setWishlist] = useState<WishItem[]>([]);
  
  const [showModal, setShowModal] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleAddWish = (textToAdd: string, icon: string) => {
    if (!textToAdd.trim()) return;
    const newItem: WishItem = {
      id: Date.now(),
      text: textToAdd.trim(),
      categoryIcon: icon,
    };
    setWishlist([...wishlist, newItem]);
    setCustomWish('');
  };

  const handleRemoveWish = (id: number) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const handleOpenPreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim() || wishlist.length === 0) return;
    setShowModal(true);
  };

  // Simulation du vol magique réglée à 7 secondes (7000ms)
  const handleConfirmSend = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 7000);
  };

  const handlePrintLetter = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden">
      <Helmet>
        <title>La Lettre au Père Noël Officielle - La Fabrique Magique</title>
        <meta name="description" content="Rédige et génère la vraie lettre manuscrite au Père Noël pour ton enfant !" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 relative z-10 w-full grow">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300 mb-4 shadow-inner">
            <span>✉️✨</span> Secrétariat Officiel du Pôle Nord
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400 mb-4 tracking-tight">
            La Lettre au Père Noël 🎄
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Remplis la liste de cadeaux, puis découvre et imprime la lettre magique manuscrite de ton enfant !
          </p>
        </div>

        {/* Formulaire principal */}
        <form onSubmit={handleOpenPreview} className="space-y-8">
          <div className="bg-indigo-950/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-amber-400/20 shadow-xl">
            <h2 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <span>👶</span> 1. Prénom et âge de l'enfant
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Prénom</label>
                <input 
                  type="text" 
                  required
                  placeholder="ex: Théo" 
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-400/30 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Âge (optionnel)</label>
                <input 
                  type="text" 
                  placeholder="ex: 4 ans" 
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-400/30 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          <div className="bg-indigo-950/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-amber-400/20 shadow-xl">
            <h2 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <span>🎁</span> 2. Choix des cadeaux
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleAddWish(cat.name, cat.icon)}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all cursor-pointer hover:scale-102 ${cat.color}`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-left leading-tight">{cat.name}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Ou tape un souhait précis (ex: Un vélo rouge, une console...)" 
                value={customWish}
                onChange={(e) => setCustomWish(e.target.value)}
                className="grow bg-slate-900 border border-amber-400/30 rounded-xl px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                onClick={() => handleAddWish(customWish, '⭐')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer"
              >
                Ajouter à la lettre +
              </button>
            </div>

            {wishlist.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {wishlist.map((item) => (
                  <span 
                    key={item.id} 
                    className="bg-slate-900 border border-amber-400/30 rounded-lg px-3 py-1.5 text-xs flex items-center gap-2 text-slate-200"
                  >
                    <span>{item.categoryIcon}</span> {item.text}
                    <button 
                      type="button" 
                      onClick={() => handleRemoveWish(item.id)}
                      className="text-red-400 hover:text-red-300 ml-1 font-bold cursor-pointer"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={!childName.trim() || wishlist.length === 0}
              className="bg-linear-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 disabled:opacity-50 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl transition-all text-base sm:text-lg cursor-pointer inline-flex items-center gap-2"
            >
              <span>📜✨</span> Voir la lettre manuscrite magique &rarr;
            </button>
          </div>
        </form>

        {/* MODALE / APERÇU EN GRAND DE LA LETTRE */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl bg-indigo-950 border border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              {!isSending && (
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-900/80 p-2 rounded-full w-9 h-9 flex items-center justify-center font-bold cursor-pointer z-10"
                >
                  ✕
                </button>
              )}

              {/* ÉTATA DE CHARGEMENT MAGIQUE (7 SECONDES) */}
              {isSending ? (
                <div className="py-16 text-center flex flex-col items-center justify-center space-y-6 animate-fade-in">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="text-6xl animate-bounce relative z-10">
                      🛷🦌✨
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-black text-amber-300 uppercase tracking-wider animate-pulse">
                      Envoi magique au Pôle Nord en cours...
                    </h4>
                    <p className="text-xs text-slate-300 max-w-xs mx-auto">
                      Les rennes s'élancent dans le ciel étoilé pour livrer la lettre de <strong className="text-amber-200">{childName}</strong> directement sur le bureau du Père Noël ! 🌠
                    </p>
                  </div>

                  <div className="w-48 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-amber-400/30">
                    <div className="h-full bg-linear-to-r from-amber-500 via-yellow-300 to-amber-500 animate-[pulse_1s_infinite] w-full"></div>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-amber-300 mb-4 text-center">
                    ✨ Aperçu officiel de la lettre
                  </h3>

                  {/* LE PARCHEMIN */}
                  <div 
                    id="printable-letter"
                    className="relative bg-[#fffdf5] text-slate-900 p-8 sm:p-10 rounded-2xl shadow-inner border-4 border-[#e8d7b5] mb-6 overflow-hidden"
                    style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                  >
                    <div className="absolute top-4 right-4 border-4 border-red-700/80 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center text-red-700/80 rotate-12 uppercase font-black text-center text-[9px] leading-tight p-1 select-none pointer-events-none">
                      <span>⭐ PÔLE NORD ⭐</span>
                      <span className="text-[7px]">CERTIFIÉ</span>
                      <span className="text-[10px] mt-0.5">2026</span>
                    </div>

                    <div className="text-2xl sm:text-3xl text-red-800 font-bold mb-4 border-b-2 border-red-200 pb-2">
                      Cher Père Noël 🎅,
                    </div>

                    <p className="text-xl sm:text-2xl leading-relaxed text-slate-800 mb-4">
                      Je m'appelle <strong className="text-red-700 underline">{childName}</strong>
                      {childAge && (
                        <span> 
                          {" "}et j'ai{" "}
                          <strong className="text-red-700">
                            {childAge.trim().toLowerCase().includes("an") ? childAge : `${childAge} ${parseInt(childAge) === 1 ? "an" : "ans"}`}
                          </strong>
                        </span>
                      )}. Voici ma liste de souhaits pour Noël :
                    </p>

                    <ul className="space-y-2 mb-6 text-xl sm:text-2xl pl-2">
                      {wishlist.map((item, index) => (
                        <li key={item.id} className="flex items-center gap-3">
                          <span className="text-red-600 font-bold">{index + 1}.</span>
                          <span className="text-xl">{item.categoryIcon}</span>
                          <span className="font-semibold text-slate-900">{item.text}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 text-xl sm:text-2xl text-slate-800">
                      <p>Gros bisous aux lutins ! 🦌✨</p>
                      <div className="mt-2 text-2xl font-bold text-red-800 italic">
                        ~ {childName}
                      </div>
                    </div>
                  </div>

                  {/* BOUTONS D'ACTION OU ÉCRAN DE SUCCÈS */}
                  {!isSent ? (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={handlePrintLetter}
                        className="flex-1 bg-slate-900 hover:bg-slate-800 border border-amber-400/40 text-amber-300 font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>🖨️</span> Imprimer la lettre
                      </button>

                      <button
                        type="button"
                        onClick={handleConfirmSend}
                        className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                      >
                        <span>✉️🚀</span> Envoyer officiellement au Pôle Nord
                      </button>
                    </div>
                  ) : (
                    <div className="bg-slate-950/90 border border-amber-400/40 rounded-2xl p-6 text-center animate-fade-in">
                      <div className="text-3xl mb-2">🎉🛷✨</div>
                      <h4 className="text-lg font-extrabold text-amber-300 mb-1">
                        Lettre livrée avec succès au Pôle Nord !
                      </h4>
                      <p className="text-slate-300 text-xs mb-4">
                        Le Père Noël l'a bien reçue et l'a posée sur son bureau pour <strong className="text-amber-200">{childName}</strong>.
                      </p>

                      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-xl p-4 mb-4 text-left">
                        <div className="text-[11px] font-black text-amber-300 uppercase mb-1">📜 Étape suivante indispensable :</div>
                        <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                          Pour que le Père Noël puisse livrer tous les cadeaux de <span className="text-amber-200">{childName}</span> en toute sécurité, n'oublie pas son <strong className="text-amber-200">Permis de Traîneau Officiel</strong> !
                        </p>
                        <a
                          href="/"
                          className="block w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-2.5 rounded-lg text-center text-xs transition-all shadow-md"
                        >
                          Générer le Permis de Traîneau officiel &rarr;
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={() => { setShowModal(false); setIsSent(false); setWishlist([]); setChildName(''); setChildAge(''); }}
                        className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                      >
                        Créer une autre lettre
                      </button>
                    </div>
                  )}
                </>
              )}

            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}