import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface Gift {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const GIFT_EMOJIS = ['🎁', '⭐', '🎄', '🍪', '🦌', '🔔'];

export default function ChristmasGame() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [highScore, setHighScore] = useState(0);

  // Gestion du compte à rebours
  useEffect(() => {
    let timer: number;
    if (isPlaying && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      if (score > highScore) {
        setHighScore(score);
      }
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score, highScore]);

  // Apparition aléatoire des cadeaux pendant que l'on joue
  useEffect(() => {
    let spawner: number;
    if (isPlaying) {
      spawner = window.setInterval(() => {
        const newGift: Gift = {
          id: Date.now(),
          x: Math.floor(Math.random() * 80) + 10,
          y: Math.floor(Math.random() * 70) + 15,
          emoji: GIFT_EMOJIS[Math.floor(Math.random() * GIFT_EMOJIS.length)],
        };
        setGifts((prev) => [...prev.slice(-5), newGift]);
      }, 800);
    } else {
      setGifts([]);
    }
    return () => clearInterval(spawner);
  }, [isPlaying]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(15);
    setIsPlaying(true);
  };

  const handleCatchGift = (id: number) => {
    if (!isPlaying) return;
    setScore((prev) => prev + 1);
    setGifts((prev) => prev.filter((gift) => gift.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden">
      {/* Effets lumineux de fond */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <Helmet>
        <title>Le Mini-Jeu des Lutins - La Fabrique Magique</title>
        <meta name="description" content="Attrape le maximum de cadeaux avant la fin du temps imparti et aide les lutins du Père Noël !" />
      </Helmet>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 relative z-10 w-full grow flex flex-col items-center">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300 mb-3 shadow-inner">
            <span>🎮</span> Animation de Noël
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400 mb-2">
            La Tournée Express des Cadeaux 🎁
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
            Clique sur un maximum de cadeaux et de surprises magiques avant la fin du chrono !
          </p>
        </div>

        {/* Zone de jeu */}
        <div className="w-full max-w-2xl h-96 bg-indigo-950/60 backdrop-blur-md rounded-3xl border border-amber-400/30 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center p-6">
          
          {/* Header du jeu (Score / Chrono) */}
          {isPlaying && (
            <div className="absolute top-4 left-6 right-6 flex justify-between items-center text-sm sm:text-base font-bold text-amber-300 z-20 pointer-events-none">
              <span className="bg-indigo-900/80 px-4 py-1.5 rounded-xl border border-amber-400/20">
                ⭐ Score : {score}
              </span>
              <span className="bg-indigo-900/80 px-4 py-1.5 rounded-xl border border-amber-400/20">
                ⏳ Temps : {timeLeft}s
              </span>
            </div>
          )}

          {/* Écran d'accueil / Fin de partie */}
          {!isPlaying && (
            <div className="text-center z-20">
              {timeLeft === 0 ? (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-amber-300 mb-1">🎉 Fin de la partie !</h3>
                  <p className="text-slate-200 text-lg">Tu as attrapé <strong className="text-amber-400">{score}</strong> trésors !</p>
                  {highScore > 0 && <p className="text-xs text-slate-400 mt-1">Meilleur score : {highScore}</p>}
                </div>
              ) : (
                <p className="text-slate-300 text-sm mb-6 max-w-xs mx-auto">
                  Prêt à aider le Père Noël à trier les cadeaux en un temps record ?
                </p>
              )}

              <button
                onClick={startGame}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-3 rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
              >
                {timeLeft === 0 ? "Rejouer 🕹️" : "Lancer le jeu 🚀"}
              </button>
            </div>
          )}

          {/* Objets cliquables pendant la partie */}
          {isPlaying &&
            gifts.map((gift) => (
              <button
                key={gift.id}
                onClick={() => handleCatchGift(gift.id)}
                style={{ top: `${gift.y}%`, left: `${gift.x}%` }}
                className="absolute text-4xl sm:text-5xl transition-transform hover:scale-125 active:scale-95 cursor-pointer select-none"
              >
                {gift.emoji}
              </button>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}