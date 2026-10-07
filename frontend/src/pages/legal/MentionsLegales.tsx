import { Link } from 'react-router-dom';

export default function MentionsLegales() {
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
            Mentions Légales
          </h1>
          <p className="mt-2 text-xs text-amber-200/60">Informations officielles du Pôle Nord</p>
        </div>

        <div className="space-y-6 text-sm text-amber-100/80 leading-relaxed">
          
          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">1. Édition du site</h2>
            <p>Le présent site est édité par la structure commerciale <strong className="text-amber-200">CubTaik</strong>, représentée par :</p>
            <div className="rounded-xl border border-amber-400/10 bg-indigo-950/60 p-4 text-xs text-amber-200/80 space-y-1">
              <p><strong className="text-amber-200">Entrepreneur individuel :</strong> Alexandre Cubizolle</p>
              <p><strong className="text-amber-200">Nom commercial :</strong> CubTaik</p>
              <p><strong className="text-amber-200">SIREN :</strong> 109 752 832</p>
              <p><strong className="text-amber-200">Siège social :</strong> 3 Chem des Brandes, 17600 Sablonceaux, France</p>
              <p><strong className="text-amber-200">TVA :</strong> TVA non applicable, art. 293 B du CGI</p>
              <p><strong className="text-amber-200">Directeur de la publication :</strong> Alexandre Cubizolle</p>
              <p>
                <strong className="text-amber-200">Contact :</strong>{" "}
                <a href="mailto:contact@permisduperenoel.fr" className="text-amber-400 underline hover:text-amber-300">
                  contact@permisduperenoel.fr
                </a>
              </p>
            </div>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">2. Hébergement</h2>
            <p>Le site et les données de l'application sont hébergés par :</p>
            <div className="rounded-xl border border-amber-400/10 bg-indigo-950/60 p-4 text-xs text-amber-200/80 space-y-1">
              <p><strong className="text-amber-200">Hébergeur :</strong> Railway Corp.</p>
              <p><strong className="text-amber-200">Siège social :</strong> San Francisco, CA, USA</p>
            </div>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site et de ses contenus relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables (Packs de Noël).
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}