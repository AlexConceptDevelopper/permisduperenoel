export const metadata = {
  slug: "role-secrets-lutins-pere-noel",
  title: "Les secrets des lutins du Père Noël : Rôles, missions et mystères du Pôle Nord",
  description:
    "Qui sont vraiment les lutins du Père Noël ? Découvrez leurs missions secrètes au Pôle Nord, leur rôle dans l'atelier des jouets et comment ils veillent sur les enfants.",
  date: "18 novembre 2026",
  image: "/images/blog/lutins-noel.jpg",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Les secrets des lutins du Père Noël : Rôles, missions et mystères du Pôle Nord",
        description:
          "Qui sont vraiment les lutins du Père Noël ? Découvrez leurs missions secrètes au Pôle Nord, leur rôle dans l'atelier des jouets et comment ils veillent sur les enfants.",
        image: "https://www.permisduperenoel.fr/images/blog/lutins-noel.jpg",
        datePublished: "2026-11-18T08:00:00+01:00",
        author: {
          "@type": "Organization",
          name: "La Fabrique Magique",
          url: "https://permisduperenoel.fr",
        },
        publisher: {
          "@type": "Organization",
          name: "Permis du Père Noël",
          url: "https://permisduperenoel.fr",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quel est le rôle principal des lutins du Père Noël ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les lutins ont pour mission de fabriquer les jouets dans l'atelier du Pôle Nord, de trier le courrier des enfants et de veiller discrètement à ce que tout se déroule bien avant la nuit de Noël.",
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
        Derrière chaque cadeau emballé avec soin et chaque lettre lue au Pôle Nord, se cache une armée de petits personnages vêtus de vert et de rouge, aussi agiles que discrets : <strong>les lutins du Père Noël</strong>.
      </p>
      <p className="text-slate-300 mb-6 leading-relaxed">
        En tant qu'enquêteurs de la magie de Noël, nous avons ouvert les archives secrètes de l'atelier pour vous révéler le véritable quotidien de ces précieux assistants.
      </p>

      {/* SOMMAIRE DU GUIDE */}
      <div className="bg-slate-900/85 border border-amber-400/30 rounded-2xl p-6 my-8 backdrop-blur-md shadow-lg">
        <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-3">
          📍 Au sommaire de cette enquête :
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
          <li>
            •{" "}
            <a href="#origine" className="hover:underline">
              1. D'où viennent les lutins du Pôle Nord ?
            </a>
          </li>
          <li>
            •{" "}
            <a href="#missions" className="hover:underline">
              2. Les 3 missions secrètes des lutins
            </a>
          </li>
          <li>
            •{" "}
            <a href="#ecole" className="hover:underline">
              3. L'école des lutins : formation de haute voltige
            </a>
          </li>
          <li>
            •{" "}
            <a href="#faq" className="hover:underline">
              4. Foire aux questions sur les lutins
            </a>
          </li>
        </ul>
      </div>

      <h2
        id="origine"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        1. D'où viennent les lutins du Pôle Nord ?
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Issus des légendes scandinaves, les lutins (souvent appelés <em>nisse</em> ou <em>tomte</em>) étaient à l'origine des esprits protecteurs des foyers. Au fil du temps, ils ont élu domicile dans la grande froideur du Pôle Nord pour prêter main-forte au personnage le plus célèbre de l'hiver.
      </p>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Leur taille minuscule leur permet de se faufiler partout, ce qui explique pourquoi ils sont de redoutables observateurs de la bonne conduite des enfants tout au long de l'année.
      </p>

      <h2
        id="missions"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        2. Les 3 missions secrètes des lutins dans l'atelier
      </h2>
      <div className="space-y-4 my-6">
        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">
            Mission Alpha : La chaîne de montage des jouets
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Menuiserie, peinture sur bois, assemblage de peluches et tests de solidité : rien ne sort de l'atelier sans un contrôle qualité rigoureux validé par un chef lutin.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">
            Mission Beta : Le tri postal de la haute atmosphère
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Des millions de lettres arrivent chaque jour en décembre. Les lutins secrétaires trient les listes de souhaits, vérifient les adresses et préparent les dossiers pour le grand départ des tournées.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">
            Mission Gamma : L'observation bienveillante
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Discrets et infatigables, ils s'assurent que les enfants gardent leur âme d'enfant et se préparent sagement en attendant le réveillon.
          </p>
        </div>
      </div>

      {/* --- ENCADRÉ INTERACTIF : LE PERMIS --- */}
      <div className="bg-indigo-950/70 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🪪</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">
              Prêt à valider le comportement de votre enfant ?
            </h4>
            <p className="text-xs text-slate-300">
              Sous l'œil complice des lutins, certifiez sa bonne conduite avec le permis officiel du Pôle Nord.
            </p>
          </div>
        </div>
        <a
          href="/"
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Créer un permis &rarr;
        </a>
      </div>

      <h2
        id="ecole"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        3. L'école des lutins : formation de haute voltige
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        On ne nait pas lutin expert, on le devient ! L'académie du Pôle Nord dispense des cours intensifs de rubanage de cadeaux à l'aveugle, de pilotage de traîneau miniature et de diplomatie féerique. C'est grâce à cette rigueur que le traîneau du Père Noël ne subit jamais de retard de livraison.
      </p>

      {/* --- ENCADRÉ INTERACTIF : LA LISTE --- */}
      <div className="bg-indigo-950/70 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📜</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">
              Envie d'envoyer un message aux lutins ?
            </h4>
            <p className="text-xs text-slate-300">
              Rédigez la liste officielle des souhaits pour qu'elle arrive directement sur leur bureau au Pôle Nord.
            </p>
          </div>
        </div>
        <a
          href="/liste-noel"
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Faire la liste &rarr;
        </a>
      </div>

      <h2
        id="faq"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        4. Foire aux questions sur les lutins du Père Noël
      </h2>
      
      <div className="space-y-4 my-6">
        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">
            Comment les lutins font-ils pour tout fabriquer à temps ?
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Grâce à une organisation millimétrée, à de la magie de givre concentrée et à un travail d'équipe inarrêtable qui dure toute l'année.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">
            Est-ce que les lutins dorment ?
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Oui, mais uniquement pendant le mois de janvier, blottis sous des couettes en flocons de neige après l'effort intense des fêtes !
          </p>
        </div>
      </div>

      {/* Encadré d'appel à l'action (CTA) principal */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">
          ✨ Faites entrer la magie chez vous !
        </h3>
        <p className="text-slate-300 text-sm mb-4">
          Récompensez la sagesse de votre enfant avec un document officiel tout droit sorti des ateliers du Pôle Nord.
        </p>
        <a
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all"
        >
          Créer le permis officiel &rarr;
        </a>
      </div>
    </>
  );
}