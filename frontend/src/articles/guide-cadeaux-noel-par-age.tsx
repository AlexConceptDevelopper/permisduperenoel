export const metadata = {
  slug: "guide-cadeaux-noel-par-age",
  title: "Enquête au Pôle Nord : À la recherche du cadeau introuvable (Guide des âges)",
  description: "Et si le choix des cadeaux de Noël se transformait en une véritable enquête policière ? Suivez les indices, décortiquez les profils d'âge et dénichez les pépites idéales de 0 à 10 ans.",
  date: "18 novembre 2026",
  image: "/images/blog/guide-cadeaux.jpg",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Enquête au Pôle Nord : À la recherche du cadeau introuvable (Guide des âges)",
        "description": "Et si le choix des cadeaux de Noël se transformait en une véritable enquête policière ? Suivez les indices, décortiquez les profils d'âge et dénichez les pépites idéales de 0 à 10 ans.",
        "image": "https://permisduperenoel.fr/images/blog/guide-cadeaux.jpg",
        "datePublished": "2026-11-18T08:00:00+01:00",
        "author": {
          "@type": "Organization",
          "name": "La Fabrique Magique",
          "url": "https://permisduperenoel.fr"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Permis du Père Noël",
          "url": "https://permisduperenoel.fr"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quels sont les meilleurs indices pour choisir un cadeau de Noël adapté à l'âge de l'enfant ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'enquête montre qu'il faut analyser les besoins fondamentaux de chaque tranche d'âge : motricité brute chez les tout-petits, jeux symboliques et construction chez les 3-5 ans, logique et stratégie chez les 6-8 ans, et technicité chez les plus grands."
            }
          }
        ]
      }
    ]
  }
};

export default function ArticleContent() {
  return (
    <>
      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
        <strong>Dossier n° 2026-12/25</strong> — <span className="text-amber-400 font-semibold">Statut :</span> En cours d'investigation. 
        Le QG des lutins est en état d'alerte maximale. Chaque année, c'est la même énigme criminelle : comment dénicher LE cadeau parfait au milieu de milliers de références sans tomber dans le piège du plastique superficiel ou des stéréotypes périmés ? En tant qu'enquêteurs du Pôle Nord, nous avons mené l'interrogatoire des plus grands experts (les enfants eux-mêmes). 
      </p>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Sortez vos carnets de notes et votre loupe. Voici le rapport d'enquête complet, classé par tranches d'âge, avec plusieurs pistes hautement suspectes à glisser sous le sapin.
      </p>

      {/* SOMMAIRE DE L'ENQUÊTE */}
      <div className="bg-slate-900/85 border border-amber-400/30 rounded-2xl p-6 my-8 backdrop-blur-md shadow-lg">
        <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-3">🔍 Sommaire du Rapport d'Enquête :</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
          <li>• <a href="#suspects-0-2" className="hover:underline">Phase 1 : Les 0 - 2 ans (Indices sensoriels)</a></li>
          <li>• <a href="#suspects-3-5" className="hover:underline">Phase 2 : Les 3 - 5 ans (Le théâtre de l'imaginaire)</a></li>
          <li>• <a href="#suspects-6-8" className="hover:underline">Phase 3 : Les 6 - 8 ans (Le code de la logique)</a></li>
          <li>• <a href="#suspects-9-10" className="hover:underline">Phase 4 : Les 9 - 10 ans (L'épreuve technique)</a></li>
          <li>• <a href="#verdict" className="hover:underline">Le Verdict du Juge : La Règle des 4 indices</a></li>
        </ul>
      </div>

      <h2 id="suspects-0-2" className="text-2xl font-bold text-slate-100 mt-10 mb-4">Phase 1 : Le dossier des 0 - 2 ans (La scène de crime sensorielle)</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Ici, le suspect principal cherche à comprendre les lois de la physique à mains nues. Inutile de chercher des complices électroniques qui clignotent : le criminel en herbe a besoin de matière, de poids et de résistance. 
      </p>
      
      <div className="space-y-4 my-6">
        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste A : Le Trio d'emboîtement en bois massif</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Un classique indémodable. L'enquête prouve que le bois brut stimule le sens haptique (le toucher) bien plus que le plastique mou. L'enfant teste, rate, recommence et valide l'hypothèse de la gravité par lui-même.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste B : Les modules de motricité libre en mousse ferme</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Des tunnels, des pentes douces et des blocs géométriques. L'objectif : permettre au suspect de grimper, rouler et chuter sans dommage collatéral sur le parquet du salon.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste C : Le chariot de marche lesté et stable</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            L'outil indispensable pour s'émanciper. Il sert à transporter des cailloux, des peluches ou de mystérieux dossiers secrets d'une pièce à l'autre à toute allure.
          </p>
        </div>
      </div>

      {/* --- ENCADRÉ INTERACTIF : LE PERMIS --- */}
      <div className="bg-indigo-950/70 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🪪</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">Premier interrogatoire au Pôle Nord ?</h4>
            <p className="text-xs text-slate-300">Gardez une empreinte indélébile de cette première année avec le permis de traîneau officiel.</p>
          </div>
        </div>
        <a 
          href="/" 
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Créer un permis &rarr;
        </a>
      </div>

      <h2 id="suspects-3-5" className="text-2xl font-bold text-slate-100 mt-10 mb-4">Phase 2 : Le dossier des 3 - 5 ans (Le théâtre de l'imitation)</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        À cet âge, le suspect mène une double vie permanente : il est tour à tour chef d'orchestre, pilote de navette spatiale, chef cuisinier ou mécanicien de précision. C'est le moment critique où les rayons des magasins tentent d'orienter les pistes selon le genre. Notre brigade rejette catégoriquement ces frontières artificielles.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste A : Les plaques de construction magnétiques géantes</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Le Saint Graal de l'architecte en herbe. Châteaux forts, bases lunaires ou ponts suspendus : les aimants s'emilètent à l'infini et garantissent des heures de calme plat pour les parents.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste B : La station polyvalente (Cuisine & Établi d'atelier)</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Qu'il s'agisse de mijoter un ragoût de briques ou de visser des écrous en bois, ces postes d'imitation développent la motricité fine, la syntaxe du langage et le sens du partage.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste C : La valise d'investigation naturaliste</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Une loupe de terrain, des jumelles légères et une boîte loupe pour observer les insectes du jardin. Le suspect apprend à enquêter sur le monde vivant qui l'entoure.
          </p>
        </div>
      </div>

      <h2 id="suspects-6-8" className="text-2xl font-bold text-slate-100 mt-10 mb-4">Phase 3 : Le dossier des 6 - 8 ans (Le code de la logique)</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Le suspect maîtrise désormais la lecture, compte ses points et adore imposer ses propres règles du jeu. L'enquête se corse : il lui faut de la tactique, du défi mental et des preuves tangibles de sa réussite.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste A : Les jeux de société d'enquête et de bluff tactique</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Des titres comme <em>Karak</em>, <em>Mysterium Kids</em> ou les jeux de cartes évolutifs. Ils apprennent à analyser des indices, à coopérer et à accepter l'échec stratégique.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste B : Le laboratoire de chimie inoffensive et de cristaux</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Pipettes, éprouvettes et réactions spectaculaires (mais sans danger). Le suspect enfile sa blouse de scientifique pour décoder les mystères de la matière.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste C : Les romans illustrés dont vous êtes le héros</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Ici, chaque page lue impose un choix décisif : tourner vers la page 12 ou la page 45. Le livre devient une aventure interactive dont le lecteur est le seul maître à bord.
          </p>
        </div>
      </div>

      {/* --- ENCADRÉ INTERACTIF : LA LETTRE --- */}
      <div className="bg-indigo-950/70 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">✉️</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">Besoin d'interroger la liste du suspect ?</h4>
            <p className="text-xs text-slate-300">Utilisez notre outil interactif pour l'aider à consigner ses requêtes officielles pour le Père Noël.</p>
          </div>
        </div>
        <a 
          href="/liste-noel" 
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Rédiger la liste &rarr;
        </a>
      </div>

      <h2 id="suspects-9-10" className="text-2xl font-bold text-slate-100 mt-10 mb-4">Phase 4 : Le dossier des 9 - 10 ans (L'épreuve technique et de haute voltige)</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        À ce stade, le suspect flirte avec l'adolescence. Il rejette tout ce qui paraît « trop bébé » et cherche à manipuler de vrais mécanismes complexes qui exigent de la rigueur et de la concentration absolue.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste A : Les structures articulées à engrenages complexes (Technic)</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Boîtes de vitesse miniatures, moteurs électriques et assemblages de haute précision. Une erreur de montage dans les premières pages réduit tous les efforts à néant : le suspect apprend la patience de force.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste B : Les kits d'artisanat d'art et de modélisme</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Pyrogravure encadrée, ateliers de poterie sur tour miniature ou maquettes de précision. L'art de maîtriser ses gestes pour façonner un objet unique.
          </p>
        </div>

        <div className="bg-indigo-950/50 p-4 rounded-xl border border-amber-400/20">
          <h4 className="text-sm font-bold text-amber-300">Piste C : Les jeux d'évasion grandeur nature (Escape Games de table)</h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            Des énigmes cryptées, des cadenas à combinaisons multiples et des codes secrets à déchiffrer en équipe. Idéal pour passer une soirée entière le nez penché sur des parchemins codés.
          </p>
        </div>
      </div>

      <h2 id="verdict" className="text-2xl font-bold text-slate-100 mt-10 mb-4">Le Verdict du Juge : La Règle des 4 indices pour clore l'enquête</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pour éviter que la scène de crime du 25 décembre au matin ne se transforme en un champ de ruines saturé de babioles inutiles, la brigade du Pôle Nord applique une sentence irrévocable : <strong>la règle des 4 indices</strong> pour chaque suspect, ni plus, ni moins :
      </p>
      
      <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li><strong>L'indice suprême :</strong> Le cadeau principal mûrement enquêté et ardemment désiré.</li>
        <li><strong>L'indice utilitaire :</strong> Un équipement pratique dont il a un besoin vital (vêtement d'aventure, gourde, sac).</li>
        <li><strong>L'indice culturel :</strong> Un livre, une BD ou un atlas pour nourrir l'esprit critique.</li>
        <li><strong>L'indice collectif :</strong> Un jeu de société ou une activité à partager avec l'ensemble de la cellule familiale.</li>
      </ol>

      {/* Encadré d'appel à l'action (CTA) principal */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">✨ L'enquête est bouclée !</h3>
        <p className="text-slate-300 text-sm mb-4">
          Maintenant que les pièces du puzzle sont assemblées, scellez le dossier officiel de votre enfant avec le Pack Magique du Pôle Nord.
        </p>
        <a 
          href="/" 
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all"
        >
          Générer le dossier officiel &rarr;
        </a>
      </div>
    </>
  );
}