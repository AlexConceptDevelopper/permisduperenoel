import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-amber-400/20 bg-indigo-950/80 backdrop-blur-md px-6 py-8 mt-16 relative z-20 text-xs text-amber-200/70">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="font-bold text-amber-300">🎅 Permis du Père Noël — La Fabrique Magique</p>
          <p className="text-[10px] mt-1 text-amber-200/50">Service officiel certifié par le secrétariat des lutins. Tous droits réservés.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-medium text-[11px]">
          <a href="#mentions" className="hover:text-amber-300 transition-colors">Mentions Légales</a>
          <a href="#cgv" className="hover:text-amber-300 transition-colors">CGV</a>
          <a href="#confidentialite" className="hover:text-amber-300 transition-colors">Confidentialité</a>
          <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};