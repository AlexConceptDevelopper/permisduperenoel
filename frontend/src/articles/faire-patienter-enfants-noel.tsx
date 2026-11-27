export const metadata = {
  slug: "faire-patienter-enfants-noel",
  title: "Faire Patienter les Enfants Avant Noël : Rituels & Idées Faciles",
  description:
    "Astuces concrètes pour calmer l'impatience en décembre : rituels du soir, 24 tickets d'Avent gratuits et lettre du Père Noël personnalisée.",
  date: "7 octobre 2026",
  image: "/images/blog/impatiente-noel.jpg",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Faire Patienter les Enfants Avant Noël : Rituels & Idées Faciles",
        description:
          "Astuces concrètes pour calmer l'impatience en décembre : rituels du soir, 24 tickets d'Avent gratuits et lettre du Père Noël personnalisée.",
        image: "https://www.permisduperenoel.fr/images/blog/impatiente-noel.jpg",
        datePublished: "2026-10-07T08:00:00+01:00",
        author: {
          "@type": "Organization",
          name: "La Fabrique Magique",
          url: "https://www.permisduperenoel.fr",
        },
        publisher: {
          "@type": "Organization",
          name: "Permis du Père Noël",
          url: "https://www.permisduperenoel.fr",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Comment aider un enfant à patienter jusqu'à Noël ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mettez en place un rituel quotidien du soir (calendrier de l'Avent, lecture d'histoires), faites vivre les préparatifs du Pôle Nord avec des indices et impliquez-les dans la décoration de la maison.",
            },
          },
        ],
      },
    ],
  },
};

export default function ArticleContent() {
  return (
    <>
      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
        Pour calmer l&apos;impatience des enfants jusqu&apos;au 25 décembre, le
        plus efficace est de structurer l&apos;attente avec un{" "}
        <strong>rituel quotidien</strong> (un ticket ou une case d&apos;Avent
        par jour), des indices du Pôle Nord et de petites missions à la
        maison. Voici nos idées les plus simples pour transformer
        l&apos;attente en vrai compte à rebours.
      </p>

      {/* --- ENCADRÉ EXPRESS : 24 TICKETS AVENT GRATUITS --- */}
      <div className="bg-indigo-950/75 border border-amber-400/40 rounded-2xl p-5 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎟️</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">
              Besoin d&apos;une idée par jour pour décembre ?
            </h4>
            <p className="text-xs text-slate-300">
              Imprimez gratuitement nos <strong>24 Tickets de l&apos;Avent</strong>{" "}
              (petits mots &amp; défis des lutins) sur 3 feuilles prêtes à
              découper, sans prénom requis.
            </p>
          </div>
        </div>
        <a
          href="/tickets-avent"
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Voir les 24 tickets &rarr;
        </a>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        1. Installez un rituel quotidien du soir
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Rien ne vaut un moment rituel pour rythmer les journées des plus
        jeunes. Chaque soir, au moment du coucher, prenez un instant pour
        tirer un ticket ou ouvrir la case du calendrier de l&apos;Avent, lire
        une histoire de Noël ou discuter des bonnes actions de la journée. Cela
        structure le temps et aide l&apos;enfant à réaliser que le grand jour
        approche doucement.
      </p>

      {/* --- ENCADRÉ DISCRET : LA LETTRE AU PÈRE NOËL --- */}
      <div className="bg-indigo-950/60 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">✉️</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">
              Envie d&apos;écrire la lettre au Père Noël ?
            </h4>
            <p className="text-xs text-slate-300">
              Version classique <strong>100 % gratuite</strong>, personnalisée
              gratuitement sur partage, ou incluse dans le{" "}
              <strong>Pack Magique 4-en-1 à 1,99 €</strong> (aperçu gratuit).
            </p>
          </div>
        </div>
        <a
          href="/liste-noel"
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Rédiger la liste &rarr;
        </a>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        2. Maintenez le mystère avec des indices du Pôle Nord
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pour faire patienter les plus sceptiques ou renforcer la magie chez les
        plus petits, faites vivre les préparatifs du Pôle Nord à la maison. Par
        exemple, recevoir un{" "}
        <a
          href="/"
          className="text-amber-400 font-semibold hover:underline"
        >
          permis de traîneau officiel du Père Noël
        </a>{" "}
        ou un diplôme d&apos;enfant sage en cours de mois est une preuve
        irréfutable que les lutins veillent déjà au grain ! C&apos;est un
        excellent moyen de les encourager à rester sages jusqu&apos;au bout.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        3. Impliquez-les dans les préparatifs de la maison
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Rien n&apos;occupe mieux un enfant que de se sentir utile. Confiez-lui la
        mise en place de la décoration du sapin, la fabrication de sablés de
        Noël ou la confection d&apos;un petit mot pour les rennes. En se
        sentant acteurs de la fête, l&apos;attente devient un jeu de
        construction plutôt qu&apos;une longue attente pesante.
      </p>

      {/* Encadré d'appel à l'action (CTA) principal vers ton app (Le Permis) */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">
          ✨ Envie d&apos;ajouter une surprise magique ?
        </h3>
        <p className="text-slate-300 text-sm mb-4">
          Faites briller leurs yeux avant l&apos;heure en créant leur propre
          dossier officiel du Père Noël en quelques clics (aperçu gratuit).
        </p>
        <a
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all"
        >
          Créer un permis magique &rarr;
        </a>
      </div>
    </>
  );
}