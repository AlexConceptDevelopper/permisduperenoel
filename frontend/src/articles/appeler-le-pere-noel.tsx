// src/articles/appeler-le-pere-noel.tsx
export const metadata = {
  slug: "appeler-le-pere-noel",
  title:
    "Appeler le Père Noël : numéros gratuits, tarifs affichés et alternatives sans surtaxe",
  description:
    "Envie d'appeler le Père Noël en décembre ? Découvrez la différence entre répondeur fixe non surtaxé, numéros payants à tarif affiché, vigilance sur les 3630/089 et alternatives gratuites.",
  date: "26 novembre 2026",
  image: "/images/blog/appeler-le-pere-noel.jpg",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Appeler le Père Noël : numéros gratuits, tarifs affichés et alternatives sans surtaxe",
        description:
          "Envie d'appeler le Père Noël en décembre ? Découvrez la différence entre répondeur fixe non surtaxé, numéros payants à tarif affiché, vigilance sur les 3630/089 et alternatives gratuites.",
        image:
          "https://www.permisduperenoel.fr/images/blog/appeler-le-pere-noel.jpg",
        datePublished: "2026-11-26T08:00:00+01:00",
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
            name: "Quel numéro gratuit existe pour laisser un message au Père Noël ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le 04 22 52 10 10 est un numéro fixe classique (préfixe 04, non surtaxé) qui fonctionne comme un répondeur interactif permettant aux enfants de laisser leur message ou leur liste. Il est conseillé à l'adulte de vérifier l'état de la ligne avant de passer le téléphone à l'enfant.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi faut-il vérifier les tarifs des numéros courts ou en 089 ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Certains numéros courts (comme le 3630) ou numéros en 08 92 / 08 90 peuvent être payants ou surtaxés (à l'acte ou à la durée, par exemple autour de 2,99 € l'appel selon le service et le coût d'appel opérateur). Il est recommandé de toujours vérifier le tarif affiché et de consulter l'annuaire officiel infosva.org.",
            },
          },
          {
            "@type": "Question",
            name: "Existe-t-il une alternative gratuite sans surtaxe téléphonique ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui : l'envoi d'une lettre papier au secrétariat du Père Noël (à Libourne, 33500) ne nécessite pas de timbre depuis la France métropolitaine, et certaines campagnes saisonnières (comme des opérations vidéo/WhatsApp de marques) proposent parfois des réponses gratuites selon leur disponibilité.",
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
        « On peut <strong>appeler le Père Noël</strong> au téléphone ? » Dès
        que décembre approche, la question revient presque à chaque fois. Si
        l’idée fait rêver les enfants, tous les numéros ne se valent pas :
        certains sont de simples répondeurs sur un numéro fixe standard,
        tandis que d’autres sont des services payants ou surtaxés à tarif
        affiché. Voici un tour d’horizon clair et transparent pour éviter les
        mauvaises surprises tout en gardant la magie intacte.
      </p>

      {/* SOMMAIRE RAPIDE */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 my-8">
        <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-3">
          📍 Dans cet article :
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
          <li>
            •{" "}
            <a href="#comparatif" className="hover:underline">
              1. Comparatif : options téléphoniques et alternatives
            </a>
          </li>
          <li>
            •{" "}
            <a href="#fixe-non-surtaxe" className="hover:underline">
              2. Le répondeur fixe non surtaxé (04 22 52 10 10)
            </a>
          </li>
          <li>
            •{" "}
            <a href="#vigilance-tarifs" className="hover:underline">
              3. Vigilance sur les numéros courts (3630) et numéros en 089
            </a>
          </li>
          <li>
            •{" "}
            <a href="#alternatives" className="hover:underline">
              4. Alternatives sans surtaxe : courrier, vidéo et dossier magique
            </a>
          </li>
          <li>
            •{" "}
            <a href="#conseils-parents" className="hover:underline">
              5. Les bons réflexes avant de passer le combiné
            </a>
          </li>
          <li>
            •{" "}
            <a href="#faq" className="hover:underline">
              6. Foire aux questions des parents
            </a>
          </li>
        </ul>
      </div>

      <h2
        id="comparatif"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        1. Comparatif : ce qu&apos;il faut savoir avant de composer un numéro
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pour s’y retrouver facilement, mieux vaut distinguer les lignes fixes
        standards, les numéros à valeur ajoutée (SVA) soumis à tarification
        affichée et les moyens de contact non téléphoniques :
      </p>

      <div className="overflow-x-auto my-6 rounded-2xl border border-slate-800 bg-slate-900/70">
        <table className="w-full text-left text-xs sm:text-sm text-slate-300">
          <thead className="bg-slate-900 text-amber-300 border-b border-slate-800">
            <tr>
              <th className="py-3 px-4 font-bold">Option / Canal</th>
              <th className="py-3 px-4 font-bold">Fonctionnement</th>
              <th className="py-3 px-4 font-bold">Tarification / Repère</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-100">
                04 22 52 10 10
              </td>
              <td className="py-3 px-4">
                Numéro fixe en 04 : répondeur interactif pour laisser un
                message ou une liste (à vérifier avant l&apos;appel).
              </td>
              <td className="py-3 px-4">
                Numéro fixe standard (non surtaxé ; selon forfait/opérateur).
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-100">
                Numéros en 08 92 / 08 90
              </td>
              <td className="py-3 px-4">
                Scénarios vocaux ou mises en relation dédiées éditées par des
                tiers.
              </td>
              <td className="py-3 px-4">
                Payant / surtaxé (tarif affiché, ex. autour de 2,99 € / appel +
                coût d&apos;appel opérateur).
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-100">
                Numéros courts (ex. 3630)
              </td>
              <td className="py-3 px-4">
                Numéro court à 4 chiffres soumis aux règles des services à valeur
                ajoutée.
              </td>
              <td className="py-3 px-4">
                Peut être payant ou surtaxé selon le service et les conditions
                (vérifier sur infosva.org).
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-100">
                Lettre postale (Libourne)
              </td>
              <td className="py-3 px-4">
                Envoi d&apos;une lettre papier au Secrétariat du Père Noël.
              </td>
              <td className="py-3 px-4">
                Sans timbre depuis la France métropolitaine.
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold text-slate-100">
                Campagnes vidéo / WhatsApp
              </td>
              <td className="py-3 px-4">
                Opérations ponctuelles de marques (ex. messages ou vidéos
                générées).
              </td>
              <td className="py-3 px-4">
                Souvent gratuites quand la campagne saisonnière est active, sous
                réserve de disponibilité.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2
        id="fixe-non-surtaxe"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        2. Le répondeur fixe non surtaxé (04 22 52 10 10) : comment ça marche ?
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Parmi les numéros connus pour « appeler le Père Noël », le{" "}
        <strong>04 22 52 10 10</strong> est un numéro géographique classique en{" "}
        <code>04</code> (il ne s’agit pas d’un numéro surtaxé en <code>089</code>
        ). Il est associé à un système de messagerie / répondeur interactif qui
        permet à l’enfant d’entendre un message thématique et d’enregistrer sa
        liste de cadeaux.
      </p>
      <p className="text-slate-300 mb-4 leading-relaxed">
        <strong>Point important à garder en tête :</strong> c’est un répondeur
        automatisé et non une conversation en direct avec une personne. Comme
        pour toute ligne saisonnière ou initiative indépendante, il est toujours
        conseillé de tester l’appel en amont pour vérifier qu’il est actif et
        adapté à l’âge de votre enfant avant de lui tendre le téléphone.
      </p>

      <h2
        id="vigilance-tarifs"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        3. Vigilance sur les numéros courts (3630) et les numéros en 089
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Sur internet, on tombe facilement sur des numéros courts à 4 chiffres
        (comme le <strong>3630</strong>) ou sur des numéros spéciaux en{" "}
        <strong>08 92</strong> / <strong>08 90</strong>. Contrairement à une
        idée reçue, un numéro court n’est pas automatiquement gratuit : il peut
        être payant ou surtaxé selon le service édité et les conditions
        tarifaires en vigueur.
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li>
          <strong>Toujours chercher un tarif clair et affiché :</strong> Un
          service sérieux indique son coût avant l’appel (par exemple un montant
          fixe par appel ou à la minute, hors coût éventuel lié à
          l’opérateur).
        </li>
        <li>
          <strong>Vérifier via l&apos;annuaire officiel :</strong> En cas de
          doute sur un numéro spécial ou court, vous pouvez consulter
          l’annuaire <code>infosva.org</code> afin de vérifier la nature et la
          catégorie tarifaire du numéro.
        </li>
        <li>
          <strong>Éviter les clics impulsifs :</strong> Ne laissez pas un
          enfant composer un numéro trouvé au hasard sans avoir vérifié
          d’abord sa tarification.
        </li>
      </ul>

      {/* --- ENCADRÉ INTERACTIF : LE PACK MAGIQUE --- */}
      <div className="bg-indigo-950/60 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🪪</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">
              Envie d&apos;une magie concrète sans dépendre d&apos;une ligne
              téléphonique ?
            </h4>
            <p className="text-xs text-slate-300">
              Créez en 2 minutes le dossier officiel du Pôle Nord de votre
              enfant (Permis, Passeport, Diplôme de l&apos;Enfant Sage et
              Lettre personnalisée) à imprimer ou glisser sous le sapin.
            </p>
          </div>
        </div>
        <a
          href="/?utm_source=blog&utm_medium=article&utm_campaign=appeler-pere-noel"
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Créer son dossier 2026 &rarr;
        </a>
      </div>

      <h2
        id="alternatives"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        4. Alternatives sans surtaxe : courrier, vidéo et souvenirs à la maison
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Si vous préférez éviter toute facturation téléphonique ou si votre
        enfant est un peu intimidé par le téléphone, plusieurs alternatives
        fonctionnent très bien :
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li>
          <strong>La lettre papier au Secrétariat du Père Noël :</strong> L’envoi
          d’une lettre postale au Père Noël (à Libourne, 33500) ne nécessite
          pas de timbre depuis la France métropolitaine. Pensez à bien inscrire
          le nom et l’adresse de l’enfant au dos de l’enveloppe.
        </li>
        <li>
          <strong>Les opérations vidéo ou messagerie saisonnières :</strong>{" "}
          Certaines enseignes ou opérateurs (comme des campagnes vidéo/WhatsApp
          proposées en période de fêtes) mettent parfois à disposition des
          réponses gratuites à un message écrit, sous réserve que la campagne
          soit ouverte au moment où vous testez.
        </li>
        <li>
          <strong>Les documents officiels personnalisés :</strong> Un Permis du
          Père Noël, un Passeport du Pôle Nord ou une Lettre citant le prénom
          et les efforts de l’année ancrent la magie dans un objet que l’enfant
          peut garder et montrer.
        </li>
      </ul>

      <h2
        id="conseils-parents"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        5. Les bons réflexes avant de passer le combiné
      </h2>
      <ol className="list-decimal list-inside space-y-3 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li>
          <strong>Faites un essai rapide vous-même :</strong> Vérifiez la
          qualité audio, le message d’accueil et l’absence de surprise
          tarifaire avant d’installer votre enfant.
        </li>
        <li>
          <strong>Préparez une courte liste :</strong> Pour les plus jeunes,
          noter deux ou trois idées à l’avance évite le trac au moment où le
          répondeur démarre.
        </li>
        <li>
          <strong>Respectez le rythme de chacun :</strong> Un tout-petit peut
          être impressionné par une voix au téléphone ; rien n’oblige à insister
          si l’écrit ou le dessin lui convient mieux.
        </li>
      </ol>

      <h2 id="faq" className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        6. Foire aux questions des parents
      </h2>

      <div className="space-y-4 my-6">
        <div>
          <h4 className="text-base font-bold text-amber-300">
            Le 04 22 52 10 10 est-il un numéro surtaxé ?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mt-1">
            Non, il s’agit d’un numéro fixe en <code>04</code> (non surtaxé),
            connu comme répondeur interactif pour laisser un message. Le coût
            éventuel dépend uniquement des conditions habituelles de votre ligne
            fixe ou mobile envers un numéro fixe français.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-amber-300">
            Pourquoi le 3630 ou un numéro en 089 peuvent-ils être payants ?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mt-1">
            Certains numéros courts (comme le 3630) ou numéros spéciaux en{" "}
            <code>08 92</code> / <code>08 90</code> relèvent de services
            pouvant être payants ou surtaxés selon l’éditeur, le mode de
            facturation (à l’acte ou à la durée) et les tarifs affichés. Il est
            toujours conseillé de vérifier les tarifs avant d’appeler.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-amber-300">
            Quelle est la meilleure option si je veux zéro risque de facture
            téléphonique ?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mt-1">
            L’envoi d’une lettre postale sans timbre depuis la France
            métropolitaine vers le Secrétariat du Père Noël (Libourne) ou la
            création d’un{" "}
            <a
              href="/?utm_source=blog&utm_medium=article&utm_campaign=appeler-pere-noel"
              className="text-amber-400 underline hover:text-amber-300 font-medium"
            >
              dossier personnalisé du Père Noël
            </a>{" "}
            en ligne permet de faire plaisir sans passer par un appel
            téléphonique.
          </p>
        </div>
      </div>

      {/* Encadré d'appel à l'action (CTA) principal */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">
          🎄 Préparez un souvenir magique pour Noël 2026
        </h3>
        <p className="text-slate-300 text-sm mb-4">
          Générez en quelques minutes le Permis officiel du Père Noël, le
          Passeport du Pôle Nord, le Diplôme de l&apos;Enfant Sage A4 et la
          Lettre personnalisée de votre enfant.
        </p>
        <a
          href="/?utm_source=blog&utm_medium=article&utm_campaign=appeler-pere-noel"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all"
        >
          Créer le dossier de mon enfant &rarr;
        </a>
      </div>
    </>
  );
}