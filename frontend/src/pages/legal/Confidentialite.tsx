import { Link } from 'react-router-dom';

export default function Confidentialite() {
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
            Politique de Confidentialité &amp; RGPD
          </h1>
          <p className="mt-2 text-xs text-amber-200/60">Dernière mise à jour : Octobre 2026</p>
        </div>

        <div className="space-y-6 text-sm text-amber-100/80 leading-relaxed">
          
          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">1. Données collectées</h2>
            <p>
              Dans le cadre de l'utilisation du site, nous collectons l'adresse e-mail de l'acheteur ainsi que les informations de personnalisation de l'enfant (prénom, âge, ville, notes de comportement).
            </p>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">2. Purge automatique des données (RGPD)</h2>
            <p>
              Parce que nous attachons une importance capitale à la protection des données des mineurs, <strong className="text-amber-200">toutes les informations personnelles de l'enfant sont automatiquement purgées et supprimées</strong> de notre base de données dès que le PDF est téléchargé. Seule une trace comptable anonymisée de la transaction est conservée.
            </p>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">3. Prestataires tiers et sécurité</h2>
            <p>Pour assurer le fonctionnement du service, nous faisons appel à :</p>
            <ul className="list-disc pl-5 space-y-1 text-amber-200/80">
              <li><strong className="text-amber-100">Stripe :</strong> Gestion sécurisée des paiements en ligne.</li>
              <li><strong className="text-amber-100">Railway :</strong> Hébergement des données de l'application.</li>
            </ul>
          </section>

          <section className="bg-indigo-900/40 border border-amber-400/20 rounded-2xl p-6 shadow-xl backdrop-blur-md space-y-3">
            <h2 className="text-lg font-semibold text-amber-300">4. Vos droits (RGPD)</h2>
            <p>
              Conformément à la réglementation, vous disposez d'un droit d'accès et de suppression de vos données. Pour toute demande, vous pouvez nous contacter à l'adresse : contact@permis-de-noel.fr.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}