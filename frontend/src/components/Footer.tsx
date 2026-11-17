import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-amber-400/20 bg-indigo-950/90 backdrop-blur-md px-6 py-12 mt-20 relative z-20 text-xs text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Col 1 : Présentation de la marque */}
        <div>
          <h3 className="text-amber-300 font-bold text-base mb-3 flex items-center gap-2">
            <span>🎅</span> La Fabrique Magique
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Le secrétariat officiel du Pôle Nord pour faire briller les yeux des enfants : Permis de traîneau, lettres personnalisées et magie de Noël garantie.
          </p>
          <div className="text-xs text-amber-400/80 font-semibold">
            ✨ Édition 2026 - Pôle Nord
          </div>
        </div>

        {/* Col 2 : Maillage des Outils & Générateurs */}
        <div>
          <h4 className="text-amber-300 font-bold text-xs uppercase tracking-wider mb-3">
            Atelier Magique
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/" className="hover:text-amber-300 transition-colors">Le Pack Magique 4-en-1</Link>
            </li>
            <li>
              <Link to="/liste-noel" className="hover:text-amber-300 transition-colors">Rédiger la Lettre au Père Noël</Link>
            </li>
            <li>
              <Link to="/jeu" className="hover:text-amber-300 transition-colors">L'Arcade de Noël (Mini-jeux)</Link>
            </li>
          </ul>
        </div>

        {/* Col 3 : Maillage du Blog & Articles SEO */}
        <div>
          <h4 className="text-amber-300 font-bold text-xs uppercase tracking-wider mb-3">
            Le Coin des Parents & Guides
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/blog" className="hover:text-amber-300 transition-colors">Le Blog de Noël (Tous les articles)</Link>
            </li>
            <li>
              <Link to="/blog/secretariat-pere-noel-poste" className="hover:text-amber-300 transition-colors">Secrétariat du Père Noël (La Poste)</Link>
            </li>
            <li>
              <Link to="/blog/tuto-pull-moche-diy" className="hover:text-amber-300 transition-colors">Tuto DIY : Le Pull Moche de Noël</Link>
            </li>
            <li>
              <Link to="/blog/noms-rennes-pere-noel" className="hover:text-amber-300 transition-colors">Tout savoir sur les rennes</Link>
            </li>
          </ul>
        </div>

        {/* Col 4 : Pages Légales & Aide */}
        <div>
          <h4 className="text-amber-300 font-bold text-xs uppercase tracking-wider mb-3">
            Informations & Sécurité
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/mentions-legales" className="hover:text-amber-300 transition-colors">Mentions Légales</Link>
            </li>
            <li>
              <Link to="/cgv" className="hover:text-amber-300 transition-colors">CGV</Link>
            </li>
            <li>
              <Link to="/confidentialite" className="hover:text-amber-300 transition-colors">Politique de Confidentialité</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-amber-300 transition-colors">Aide & FAQ du Pôle Nord</Link>
            </li>
            <li>
              <span className="inline-flex items-center gap-1 text-emerald-400 mt-2 font-medium">
                🔒 100% Sécurisé & Secret
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bas de footer : Copyright & CubTaik */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-amber-200/70">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img 
            src="/Logo.png" 
            alt="Logo Permis du Père Noël" 
            className="w-7 h-7 object-contain rounded-lg border border-amber-400/30"
          />
          <div>
            <p className="font-bold text-amber-300 text-xs">Permis du Père Noël — La Fabrique Magique</p>
            <p className="text-[10px] mt-0.5 text-slate-400">
              Service officiel édité par{' '}
              <a 
                href="https://www.cubtaik.fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-300 hover:underline font-semibold transition-colors"
              >
                CubTaik
              </a>
              . Tous droits réservés.
            </p>
          </div>
        </div>

        <div className="text-[11px] text-slate-500">
          © 2026 PermisDuPereNoel.fr - Fait avec des étoiles et de la magie 🌟
        </div>
      </div>
    </footer>
  );
};