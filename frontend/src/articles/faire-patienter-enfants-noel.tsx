export const metadata = {
  slug: "faire-patienter-enfants-noel",
  title: "Faire Patienter les Enfants Avant Noël : Rituels & Idées Faciles",
  description:
    "Astuces concrètes et idées pratiques pour calmer l'impatience en décembre : rituels du soir, avant-calendrier, activités manuelles, 24 tickets gratuits et lettre du Père Noël.",
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
          "Astuces concrètes et idées pratiques pour calmer l'impatience en décembre : rituels du soir, avant-calendrier, activités manuelles, 24 tickets gratuits et lettre du Père Noël.",
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
              text: "Mettez en place un rituel quotidien du soir (calendrier de l'Avent avec activités ou défis plutôt que uniquement des chocolats, lecture d'histoires, heures repères), lancez un mini-décompte avant le 1er décembre et impliquez-les dans la cuisine et les décorations.",
            },
          },
          {
            "@type": "Question",
            name: "Comment occuper les enfants le soir du réveillon avant l'ouverture des cadeaux ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Proposez des activités calmes et immersives : préparer le goûter du Père Noël et la carotte des rennes, écouter des histoires ou chansons de Noël, et laisser des indices féeriques pour le lendemain matin.",
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
        plus efficace est de transformer l&apos;attente en{" "}
        <strong>rituels concrets et ludiques</strong> : un mini-décompte dès la
        fin novembre, un calendrier d&apos;Avent orienté défis ou petits
        moments partagés plutôt que uniquement du sucre, des repères du soir
        stables et des activités pratiques à la maison.
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
        1. Rituels quotidiens et repères du soir (sans s&apos;appuyer que sur le chocolat)
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Quand la notion du temps est floue chez l&apos;enfant, les journées
        paraissent interminables. Garder des heures repères (repas, goûter,
        coucher) tout en ajoutant de petits rituels rassure et canalise
        l&apos;excitation :
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li>
          <strong>« Avant-calendrier » dès fin novembre :</strong> lancez un
          mini-décompte de quelques jours avant le 1er décembre avec une
          anecdote, un dessin à préparer pour le Père Noël ou un petit défi
          rigolo pour faire monter la magie en douceur.
        </li>
        <li>
          <strong>Défis ou petits mots plutôt que uniquement des chocolats :</strong>{" "}
          glissez un ticket d&apos;activité, une blague, un bon pour choisir
          l&apos;histoire du soir ou un petit défi des lutins (ranger un jeu,
          aider à mettre la table, chanter un refrain) pour donner du sens à
          chaque jour.
        </li>
        <li>
          <strong>Pause cocooning du soir :</strong> un chocolat chaud ou une
          tisane d&apos;hiver, une lumière douce, un chapitre de conte de Noël
          et un temps d&apos;échange pour mettre des mots sur l&apos;impatience
          avant de dormir.
        </li>
      </ul>

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
        2. Idées pratiques d&apos;activités manuelles, cuisine et traditions
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Impliquer les enfants dans des tâches concrètes occupe leurs mains et
        leur tête tout en créant des souvenirs de famille :
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li>
          <strong>Décorations maison :</strong> fabriquez des guirlandes en
          papier, des suspensions en pâte à sel ou en pâte autodurcissante, ou
          dessinez des sapins et flocons aux feutres-craie sur les fenêtres.
        </li>
        <li>
          <strong>Pâtisserie et petits cadeaux faits main :</strong> préparez des
          sablés ou biscuits de Noël avec des emporte-pièces, ou aidez-les à
          fabriquer des cartes et petits bricolages pour les grands-parents et
          les proches.
        </li>
        <li>
          <strong>Traditions et sorties :</strong> selon vos habitudes, faites
          germer des lentilles ou du blé début décembre, allez voir les
          illuminations ou flânez sur un marché de Noël sans chercher à tout
          acheter.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        3. Maintenez le mystère avec des indices du Pôle Nord
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
        4. Le soir du réveillon ou avant l&apos;ouverture des cadeaux
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Le 24 décembre au soir, l&apos;excitation est à son maximum et le
        sommeil peut être difficile. Gardez des activités calmes et cadrées :
        préparer ensemble une carotte et un petit mot pour les rennes,
        écouter une playlist douce ou une histoire, puis glisser un petit
        indice féerique (comme un{" "}
        <a
          href="/blog/preuves-passage-pere-noel"
          className="text-amber-400 font-semibold hover:underline"
        >
          permis perdu ou des traces de passage
        </a>
        ) pour rendre le réveil encore plus mémorable.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        5. Questions fréquentes pour gérer l&apos;attente
      </h2>
      <div className="space-y-4 my-6">
        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">
            Comment faire patienter un enfant avant le 1er décembre ?
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Lancez un petit décompte de quelques jours (ex. écrire sa lettre au
            Père Noël, trier les jouets inutilisés pour faire de la place,
            préparer la boîte à souvenirs ou démarrer vos premiers tickets
            d&apos;Avent).
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">
            Quelle activité proposer quand il pleut ou qu&apos;il fait froid en décembre ?
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Atelier pâtisserie, création de guirlandes en papier, chasse aux
            défis des lutins avec les 24 tickets d&apos;Avent ou lecture d&apos;un
            conte au chaud sous un plaid.
          </p>
        </div>
      </div>

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