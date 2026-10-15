import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Calcul du nombre de jours avant Noël (25 décembre)
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);
  if (today > christmas) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  const diffTime = christmas.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Fermer le menu déroulant si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full relative z-20">
      {/* 🌟 Bandeau d'annonce magique défilant */}
      <div className="bg-linear-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 font-bold text-[11px] py-1.5 px-4 text-center overflow-hidden whitespace-nowrap shadow-md tracking-wide">
        <span className="inline-block animate-pulse">
          🎄 Plus que <strong className="underline">{diffDays} jours</strong>{" "}
          avant le grand départ des rennes ! • Livraison magique instantanée par
          email ✨
        </span>
      </div>

      {/* 🧭 Navbar principale */}
      <nav className="w-full border-b border-amber-400/20 bg-indigo-950/80 backdrop-blur-md px-6 py-3.5 flex justify-between items-center shadow-xl">
        {/* Logo & Slogan */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative">
            <div className="absolute -inset-1 bg-amber-400/30 rounded-xl blur-xs"></div>
            <img
              src="/Logo.png"
              alt="Logo Permis du Père Noël"
              className="relative w-10 h-10 object-contain rounded-xl border border-amber-400/40 shadow-inner"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400 text-sm md:text-base tracking-wider group-hover:opacity-90 transition-opacity">
                Permis du Père Noël
              </span>
              <span className="text-xs animate-spin duration-1000 inline-block">
                ❄️
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-amber-300/70 font-bold block">
              ✨ La Fabrique Magique • Édition 2026
            </span>
          </div>
        </Link>

        {/* Éléments de réassurance et navigation à droite */}
        <div className="flex items-center gap-3">
          {/* Badge de réassurance éthique / sécurisé */}
          <div className="hidden lg:flex items-center gap-1.5 bg-amber-500/10 border border-amber-400/30 px-3 py-1 rounded-full text-[11px] text-amber-200 font-medium">
            <span>🔒</span>
            <span className="text-[10px] tracking-wide">
              100% Sécurisé & Secret du Pôle Nord
            </span>
          </div>

          {/* Menu Déroulant : Magie de Noël */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-xs font-bold text-amber-200 bg-indigo-900/60 hover:bg-indigo-900/90 border border-amber-400/30 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              <span>✨ Magie de Noël</span>
              <span className={`text-[10px] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-indigo-950 border border-amber-400/40 rounded-2xl shadow-2xl backdrop-blur-xl p-2 z-50 animate-fade-in">
                <Link
                  to="/liste-noel"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-amber-400/10 transition-colors"
                >
                  <span className="text-base">✉️</span>
                  <div>
                    <div className="font-bold">Liste de Noël</div>
                    <div className="text-[10px] text-slate-400 font-normal">Lettre au Père Noël</div>
                  </div>
                </Link>

                <Link
                  to="/blog"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-amber-400/10 transition-colors"
                >
                  <span className="text-base">📖</span>
                  <div>
                    <div className="font-bold">Le Blog Magique</div>
                    <div className="text-[10px] text-slate-400 font-normal">Conseils & histoires</div>
                  </div>
                </Link>

                <Link
                  to="/jeu"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-amber-400/10 transition-colors"
                >
                  <span className="text-base">🎮</span>
                  <div>
                    <div className="font-bold">Mini-Jeu</div>
                    <div className="text-[10px] text-slate-400 font-normal">Pour faire patienter</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Lien Aide & FAQ */}
          <Link
            to="/faq"
            className="text-xs font-semibold text-amber-200/80 hover:text-amber-300 transition-colors bg-indigo-900/50 border border-amber-400/20 px-3 py-1.5 rounded-xl"
          >
            Aide & FAQ
          </Link>
        </div>
      </nav>
    </header>
  );
};