import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-indigo-950 text-amber-100/90 px-6 py-16 relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Retour à l'atelier du Père Noël 🎄
        </Link>

        <div className="border-b border-amber-400/20 pb-6">
          <h1 className="text-3xl font-bold text-amber-300 drop-shadow-sm">
            Contactez le Pôle Nord
          </h1>
          <p className="mt-2 text-xs text-amber-200/60">Le secrétariat des lutins est à votre écoute</p>
        </div>

        <div className="space-y-6 text-sm text-amber-100/80 leading-relaxed">
          
          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-8 shadow-xl backdrop-blur-md text-center space-y-6">
            <p className="text-amber-200/90">
              Un problème avec ton téléchargement, une question sur la livraison magique de ton pack de Noël ? Les lutins du support te répondent sous 24h.
            </p>
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-xl px-6 py-4 text-amber-300 font-mono text-base tracking-wide shadow-inner">
              contact@permis-de-noel.fr
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}