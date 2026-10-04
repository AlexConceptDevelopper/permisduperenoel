import React from 'react';
import { Link } from 'react-router-dom';

export default function Cgv() {
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
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="mt-2 text-xs text-amber-200/60">Dernière mise à jour : Octobre 2026</p>
        </div>

        <div className="space-y-6 text-sm text-amber-100/80 leading-relaxed">
          
          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">1. Objet</h2>
            <p>
              Les présentes CGV définissent les conditions de vente du service de création de documents personnalisés de fin d'année (« Le Pack Magique de Noël »).
            </p>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">2. Tarifs et Paiement (Stripe)</h2>
            <p>
              Le prix du service est fixé à <strong className="text-amber-200">1,99 € TTC</strong>. Le paiement s'effectue comptant en ligne par carte bancaire via notre prestataire sécurisé <strong className="text-amber-200">Stripe</strong>. La commande est validée instantanément après confirmation du paiement.
            </p>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">3. Absence de droit de rétractation</h2>
            <p>
              Conformément à l'article L. 221-28 du Code de la consommation, les documents numériques personnalisés étant générés et fournis immédiatement après le paiement, le droit de rétractation ne peut pas être exercé.
            </p>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">4. Loi applicable</h2>
            <p>
              Les présentes CGV sont régies par le droit français. En cas de litige, compétence exclusive est attribuée aux tribunaux compétents.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}