import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// =====================================================================
// 1. JEU : MÉMORY FÉÉRIQUE
// =====================================================================
const MEMORY_EMOJIS = ['🎅', '🛷', '🦌', '🎄', '🎁', '⭐', '🍪', '🔔'];

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<{ id: number; emoji: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initGame = () => {
    const deck = [...MEMORY_EMOJIS, ...MEMORY_EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, isFlipped: false, isMatched: false }));
    setCards(deck);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [first, second] = newFlipped;
      if (newCards[first].emoji === newCards[second].emoji) {
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
        if (newCards.every((c) => c.isMatched)) setIsWon(true);
      } else {
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 900);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <div className="flex justify-between items-center w-full mb-4 px-2 text-sm font-bold text-amber-300">
        <span>🧠 Coups : {moves}</span>
        <button onClick={initGame} className="px-3 py-1 bg-amber-500/20 border border-amber-400/40 rounded-xl hover:bg-amber-500/30 text-xs">
          🔄 Recommencer
        </button>
      </div>

      {isWon ? (
        <div className="text-center py-10 animate-fade-in space-y-4">
          <div className="text-5xl">🏆</div>
          <h3 className="text-2xl font-black text-amber-300">Bravo, tu as gagné !</h3>
          <p className="text-slate-200 text-sm">Tu as retrouvé toutes les paires en {moves} coups !</p>
          <button onClick={initGame} className="px-6 py-3 bg-amber-500 text-slate-950 font-black rounded-xl shadow-lg hover:bg-amber-400">
            Rejouer 🔄
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 w-full">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(idx)}
              className={`aspect-square rounded-2xl text-3xl flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                card.isFlipped || card.isMatched
                  ? 'bg-amber-400/20 border-amber-400 text-white rotate-0'
                  : 'bg-indigo-950 border-slate-700 text-transparent hover:border-amber-400/50'
              }`}
            >
              {(card.isFlipped || card.isMatched) ? card.emoji : '❓'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// =====================================================================
// 2. JEU : LA COURSE DU TRAÎNEAU (CANVAS RUNNER)
// =====================================================================
const SleighRunnerGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const gameState = useRef({
    sleighY: 150,
    velocity: 0,
    obstacles: [] as { x: number; y: number; type: 'cloud' | 'star' }[],
    score: 0,
  });

  const startGame = () => {
    gameState.current = { sleighY: 150, velocity: 0, obstacles: [], score: 0 };
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  const jump = () => {
    if (isPlaying) gameState.current.velocity = -6;
  };

  useEffect(() => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let frame = 0;

    const loop = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Physique Traîneau
      gameState.current.velocity += 0.3;
      gameState.current.sleighY += gameState.current.velocity;

      // Limites écran
      if (gameState.current.sleighY > canvas.height - 30) {
        gameState.current.sleighY = canvas.height - 30;
      }
      if (gameState.current.sleighY < 10) gameState.current.sleighY = 10;

      // Dessin Traîneau
      ctx.font = '28px serif';
      ctx.fillText('🛷', 40, gameState.current.sleighY);

      // Génération Obstacles/Étoiles
      if (frame % 70 === 0) {
        gameState.current.obstacles.push({
          x: canvas.width,
          y: Math.random() * (canvas.height - 60) + 20,
          type: Math.random() > 0.4 ? 'star' : 'cloud',
        });
      }

      // Mouvement & Collision
      gameState.current.obstacles.forEach((obs, index) => {
        obs.x -= 3.5;
        ctx.font = '22px serif';
        ctx.fillText(obs.type === 'star' ? '⭐' : '🌩️', obs.x, obs.y);

        // Détection collision
        if (Math.abs(obs.x - 50) < 25 && Math.abs(obs.y - gameState.current.sleighY) < 25) {
          if (obs.type === 'star') {
            gameState.current.score += 10;
            setScore(gameState.current.score);
            gameState.current.obstacles.splice(index, 1);
          } else {
            setIsPlaying(false);
            setGameOver(true);
          }
        }
      });

      // Nettoyage obstacles hors champ
      gameState.current.obstacles = gameState.current.obstacles.filter((o) => o.x > -30);

      if (isPlaying) animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between items-center w-full max-w-md mb-3 text-sm font-bold text-amber-300">
        <span>⭐ Score : {score}</span>
        <span className="text-xs text-slate-400">Clique ou touche l'écran pour voler !</span>
      </div>

      <div 
        onClick={jump}
        className="relative w-full max-w-md h-64 bg-slate-900 border border-amber-400/30 rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center select-none"
      >
        <canvas ref={canvasRef} width={400} height={256} className="w-full h-full" />

        {!isPlaying && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center">
            {gameOver ? (
              <div className="space-y-3">
                <p className="text-xl font-bold text-rose-400">Oups ! Nuage d'orage touché 🌩️</p>
                <p className="text-sm text-slate-200">Score final : {score} points</p>
                <button onClick={startGame} className="px-6 py-2.5 bg-amber-500 text-slate-950 font-extrabold rounded-xl shadow-md">
                  Recommencer 🛷
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-slate-300">Guide le traîneau du Père Noël ! Attrape les ⭐ et évite les 🌩️.</p>
                <button onClick={startGame} className="px-6 py-3 bg-amber-500 text-slate-950 font-black rounded-xl shadow-lg">
                  Décoller 🚀
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// =====================================================================
// 3. JEU : ATELIER COLORIAGE
// =====================================================================
const COLOR_PALETTE = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#ec4899', '#ffffff', '#1e1b4b'];

const ColoringGame: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR_PALETTE[0]);
  const [fillColors, setFillColors] = useState<{ [key: string]: string }>({});

  const handleZoneClick = (zoneId: string) => {
    setFillColors((prev) => ({ ...prev, [zoneId]: selectedColor }));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-4">
      {/* Palette de couleurs */}
      <div className="flex items-center gap-2 p-2 bg-slate-900 border border-slate-800 rounded-2xl">
        {COLOR_PALETTE.map((c) => (
          <button
            key={c}
            onClick={() => setSelectedColor(c)}
            style={{ backgroundColor: c }}
            className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
              selectedColor === c ? 'scale-125 border-amber-300 shadow-md' : 'border-transparent'
            }`}
          />
        ))}
      </div>

      {/* Zone SVG de Coloriage (Exemple Sapin de Noël) */}
      <div className="w-full h-64 bg-slate-900 border border-amber-400/30 rounded-2xl p-4 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-48 h-48 cursor-pointer drop-shadow-md">
          {/* Étoile haut */}
          <polygon
            points="100,10 105,25 120,25 107,35 112,50 100,40 88,50 93,35 80,25 95,25"
            fill={fillColors['star'] || '#334155'}
            stroke="#fbbf24"
            strokeWidth="2"
            onClick={() => handleZoneClick('star')}
          />
          {/* Étage 1 */}
          <polygon
            points="100,35 140,80 60,80"
            fill={fillColors['tree1'] || '#1e293b'}
            stroke="#fbbf24"
            strokeWidth="2"
            onClick={() => handleZoneClick('tree1')}
          />
          {/* Étage 2 */}
          <polygon
            points="100,65 160,120 40,120"
            fill={fillColors['tree2'] || '#1e293b'}
            stroke="#fbbf24"
            strokeWidth="2"
            onClick={() => handleZoneClick('tree2')}
          />
          {/* Étage 3 */}
          <polygon
            points="100,95 180,160 20,160"
            fill={fillColors['tree3'] || '#1e293b'}
            stroke="#fbbf24"
            strokeWidth="2"
            onClick={() => handleZoneClick('tree3')}
          />
          {/* Tronc */}
          <rect
            x="85"
            y="160"
            width="30"
            height="30"
            fill={fillColors['trunk'] || '#0f172a'}
            stroke="#fbbf24"
            strokeWidth="2"
            onClick={() => handleZoneClick('trunk')}
          />
        </svg>
      </div>

      <p className="text-xs text-slate-400">Choisis une couleur puis clique sur une partie du sapin !</p>
    </div>
  );
};

// =====================================================================
// COMPOSANT PRINCIPAL ARCADE
// =====================================================================
export default function ArcadePage() {
  const [activeTab, setActiveTab] = useState<'memory' | 'runner' | 'coloring'>('memory');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden">
      <Helmet>
        <title>L'Arcade des Lutins – Jeux de Noël Gratuits</title>
        <meta name="description" content="Jouez aux mini-jeux officiels du Père Noël : Mémory, Course de traîneau et Coloriage féerique !" />
      </Helmet>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 relative z-10 w-full grow flex flex-col items-center">
        {/* En-tête */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono px-3 py-1 bg-amber-500/10 border border-amber-400/30 text-amber-300 rounded-full uppercase tracking-wider">
            🎮 Espace Récréatif des Lutins
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400 mt-3">
            L'Arcade de Noël
          </h1>
          <p className="mt-2 text-slate-300 text-sm max-w-md mx-auto">
            Des mini-jeux gratuits pour attendre la venue du Père Noël en s'amusant !
          </p>
        </div>

        {/* Sélecteur d'onglets de jeux */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-indigo-950/80 p-1.5 rounded-2xl border border-amber-400/20 shadow-lg">
          <button
            onClick={() => setActiveTab('memory')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'memory' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
            }`}
          >
            🧠 Mémory des Lutins
          </button>
          <button
            onClick={() => setActiveTab('runner')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'runner' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
            }`}
          >
            🛷 Course du Traîneau
          </button>
          <button
            onClick={() => setActiveTab('coloring')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'coloring' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-300 hover:text-white'
            }`}
          >
            🎨 Atelier Coloriage
          </button>
        </div>

        {/* Zone d'affichage du jeu actif */}
        <div className="w-full max-w-xl bg-indigo-950/40 border border-amber-400/30 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
          {activeTab === 'memory' && <MemoryGame />}
          {activeTab === 'runner' && <SleighRunnerGame />}
          {activeTab === 'coloring' && <ColoringGame />}
        </div>
      </main>

      <Footer />
    </div>
  );
}