import React from 'react';     

export const Navbar: React.FC = () => {
  // Calcul du nombre de jours avant Noël (25 décembre)
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);
  if (today > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  const diffTime = christmas.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <header className="w-full relative z-20">
      
      {/* 🌟 Bandeau d'annonce magique défilant */}
      <div className="bg-linear-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 font-bold text-[11px] py-1.5 px-4 text-center overflow-hidden whitespace-nowrap shadow-md tracking-wide">
        <span className="inline-block animate-pulse">
          🎄 Plus que <strong className="underline">{diffDays} jours</strong> avant le grand départ des rennes ! • Livraison magique instantanée par email ✨
        </span>
      </div>

      {/* 🧭 Navbar principale */}
      <nav className="w-full border-b border-amber-400/20 bg-indigo-950/80 backdrop-blur-md px-6 py-3.5 flex justify-between items-center shadow-xl">
        
        {/* Logo & Slogan */}
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-bounce">🎅</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400 text-sm md:text-base tracking-wider">
                Permis du Père Noël
              </span>
              <span className="text-xs animate-spin duration-1000 inline-block">❄️</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-amber-300/70 font-bold block">
              ✨ La Fabrique Magique • Édition 2026
            </span>
          </div>
        </div>

        {/* Éléments de réassurance à droite */}
        <div className="flex items-center gap-3">
          {/* Badge Avis */}
          <div className="hidden sm:flex items-center gap-1 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-full text-[11px] text-amber-200 font-medium">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="ml-1 text-[10px] opacity-80">(4.9/5 - 1 420 parents comblés)</span>
          </div>

          {/* Lien Aide */}
          <a 
            href="#faq" 
            className="text-xs font-semibold text-amber-200/80 hover:text-amber-300 transition-colors bg-indigo-900/50 border border-amber-400/20 px-3 py-1.5 rounded-xl"
          >
            Aide & FAQ
          </a>
        </div>

      </nav>
    </header>
  );
};