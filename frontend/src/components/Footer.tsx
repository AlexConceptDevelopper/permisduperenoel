import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-amber-400/20 bg-indigo-950/80 backdrop-blur-md px-6 py-8 mt-16 relative z-20 text-xs text-amber-200/70">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img 
            src="/Logo.png" 
            alt="Logo Permis du Père Noël" 
            className="w-8 h-8 object-contain rounded-lg border border-amber-400/30"
          />
          <div>
            <p className="font-bold text-amber-300">Permis du Père Noël — La Fabrique Magique</p>
            <p className="text-[10px] mt-0.5 text-amber-200/50">Service officiel certifié par le secrétariat des lutins. Tous droits réservés.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-medium text-[11px]">
          <Link to="/mentions-legales" className="hover:text-amber-300 transition-colors">
            Mentions Légales
          </Link>
          <Link to="/cgv" className="hover:text-amber-300 transition-colors">
            CGV
          </Link>
          <Link to="/confidentialite" className="hover:text-amber-300 transition-colors">
            Confidentialité
          </Link>
          <Link to="/contact" className="hover:text-amber-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};