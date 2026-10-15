export const metadata = {
  slug: "faire-patienter-enfants-noel",
  title: "Comment faire patienter les enfants avant Noël ? Nos astuces magiques",
  description: "Le mois de décembre est long pour les petits. Découvrez nos conseils pour canaliser l'impatience et faire monter la magie jusqu'au 25 décembre.",
  date: "7 octobre 2026",
  image: "/images/blog/impatiente-noel.jpg"
};

export default function ArticleContent() {
  return (
    <>
      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
        Pour les enfants, le mois de décembre ressemble à une éternité. Entre les vitrines illuminées, 
        la lettre au Père Noël et les préparatifs, l'impatience monte de jour en jour. Les journées 
        semblent parfois interminables à l'approche du 25 décembre. Voici quelques astuces magiques 
        pour canaliser cette énergie et transformer l'attente en un merveilleux compte à rebours.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">1. Installez un rituel quotidien du soir</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Rien ne vaut un moment rituel pour rythmer les journées des plus jeunes. Chaque soir, au moment 
        du coucher, prenez un instant pour ouvrir la case du calendrier de l'Avent, lire une histoire 
        de Noël ou discuter des bonnes actions de la journée. Cela structure le temps et aide l'enfant 
        à réaliser que le grand jour approche doucement.
      </p>

      {/* --- ENCADRÉ DISCRET ET EFFICACE : LE WISHLISTMAKER --- */}
      <div className="bg-indigo-950/60 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">✉️</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">Envie d'écrire la lettre au Père Noël ?</h4>
            <p className="text-xs text-slate-300">Créez la liste de souhaits interactive et imprimez la lettre magique de votre enfant.</p>
          </div>
        </div>
        <a 
          href="/liste-noel" 
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Rédiger la liste &rarr;
        </a>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">2. Maintenez le mystère avec des indices du Pôle Nord</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pour faire patienter les plus sceptiques ou renforcer la magie chez les plus petits, faites vivre 
        les préparatifs du Pôle Nord à la maison. Par exemple, recevoir un <a href="/" className="text-amber-400 font-semibold hover:underline">permis de traîneau officiel du Père Noël</a> ou un diplôme d'enfant sage en cours de mois est une preuve irréfutable que les lutins veillent déjà au grain ! C'est un excellent moyen de les encourager à rester sages jusqu'au bout.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">3. Impliquez-les dans les préparatifs de la maison</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Rien n'occupe mieux un enfant que de se sentir utile. Confiez-lui la mise en place de la décoration 
        du sapin, la fabrication de sablés de Noël ou la confection d'un petit mot pour les rennes. 
        En se sentant acteurs de la fête, l'attente devient un jeu de construction plutôt qu'une longue souffrance.
      </p>

      {/* Encadré d'appel à l'action (CTA) principal vers ton app (Le Permis) */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">✨ Envie d'ajouter une surprise magique ?</h3>
        <p className="text-slate-300 text-sm mb-4">
          Faites briller leurs yeux avant l'heure en créant leur propre permis officiel du Père Noël personnalisé en quelques clics.
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