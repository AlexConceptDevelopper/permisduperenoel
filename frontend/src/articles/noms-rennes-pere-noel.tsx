export const metadata = {
  slug: "noms-rennes-pere-noel",
  title: "La Légende du Traîneau et des Rennes du Père Noël : Connaissez-vous leurs Vrais Noms ?",
  description: "Découvrez l'histoire fascinante du traîneau magique et la liste officielle des rennes du Père Noël. Leurs noms, leurs rôles et leurs secrets révélés !",
  date: "27 octobre 2026",
  image: "/images/blog/rennes-pere-noel.jpg"
};

export default function ArticleContent() {
  return (
    <>
      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
        Chaque nuit du 24 décembre, un équipage féerique traverse le ciel étoilé à une vitesse supersonique pour distribuer des milliards de cadeaux. À la tête de ce traîneau volant se trouve une équipe d'élite constituée de rennes magiques indispensables. Mais au fait, connaissez-vous leurs <strong>vrais noms</strong> et leurs rôles secrets dans la grande tournée de Noël ? Plongée au cœur de la plus belle légende du Pôle Nord.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">1. Les 8 Rennes Originels du Père Noël</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        La tradition des rennes volants trouve ses racines dans un célèbre poème de Clement Clarke Moore écrit en 1823, intitulé <em>« A Visit from St. Nicholas »</em>. À l'origine, l'équipage se composait de quatre paires de rennes disposées dans un ordre très précis :
      </p>

      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li><strong>Tornade (Dasher) :</strong> Le plus rapide de la bande, toujours prêt à battre des records de vitesse.</li>
        <li><strong>Danseur (Dancer) :</strong> La grâce incarnée, capable de voler avec une élégance parfaite.</li>
        <li><strong>Fringant (Prancer) :</strong> Le renne le plus fier et le plus majestueux de l'équipage.</li>
        <li><strong>Ruse (Vixen) :</strong> L'experte en navigation, célèbre pour son intelligence redoutable.</li>
        <li><strong>Comète (Comet) :</strong> Le renne qui apporte le bonheur aux enfants sur son passage.</li>
        <li><strong>Cupidon (Cupid) :</strong> Le cœur tendre qui répand l'amour et la bienveillance.</li>
        <li><strong>Éclair (Donder / Donner) :</strong> Il apporte la lumière et traverse les plus fortes tempêtes de neige.</li>
        <li><strong>Tonnerre (Blitzen) :</strong> Le renne puissant qui rugit comme le vent d'hiver.</li>
      </ul>

      {/* --- ENCADRÉ INTERACTIF : LE PERMIS DU PÈRE NOËL --- */}
      <div className="bg-indigo-950/60 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🛷</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">Qui pilote les rennes au Pôle Nord ?</h4>
            <p className="text-xs text-slate-300">Pour conduire un tel équipage, le Père Noël possède un diplôme officiel ! Découvrez sa carte de permis d'attelage.</p>
          </div>
        </div>
        <a 
          href="/" 
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Voir le permis officiel &rarr;
        </a>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">2. Rudolph (Rudolphe), le 9ème Renne au Nez Rouge</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Ce n'est qu'en 1939 que le renne le plus célèbre de l'histoire a rejoint l'équipage. Créé par Robert L. May, <strong>Rudolphe (Rudolph)</strong> est né avec un nez rouge lumineux qui brillait dans le noir. D'abord moqué par ses camarades, il est devenu le héros d'une nuit de réveillon plongée dans un brouillard si épais que le traîneau ne pouvait plus décoller.
      </p>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Grâce à la lumière étincelante de son nez, le Père Noël lui a demandé de se placer en toute tête de l'attelage pour guider ses compagnons à travers les nuages. Depuis ce jour, Rudolphe est le chef de file incontesté de la nuit de Noël !
      </p>

      {/* PLACE ILLUSTRATION */}
      <div className="my-8 rounded-2xl overflow-hidden border border-amber-400/20 shadow-lg bg-indigo-950/80 p-2 text-center">
        <p className="text-xs text-amber-300 font-semibold py-1">🎨 Emplacement Illustration : Schéma de l'organisation de l'attelage du traîneau du Père Noël</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">3. Comment le traîneau parvient-il à voler ?</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        C'est l'un des plus grands secrets du Pôle Nord ! Pour s'envoler, les rennes se nourrissent tout au long de l'année de <em>lichen magique</em> et de carottes enchantées cultivées par les lutins. Mais le véritable carburant du traîneau, c'est **la poussière d'étoiles et l'émerveillement des enfants**.
      </p>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Plus les enfants croient en la magie de Noël, plus l'attelage devient léger et rapide. N'oubliez donc jamais de laisser une ou deux carottes au pied du sapin le 24 décembre au soir : les rennes en ont grand besoin après leur long voyage depuis le Pôle Nord !
      </p>

      {/* Encadré d'appel à l'action (CTA) principal */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">🎁 Un souvenir magique pour vos enfants !</h3>
        <p className="text-slate-300 text-sm mb-4">
          Offrez-leur la preuve irréfutable que le Père Noël a son permis de conduire le traîneau valide. Personnalisez votre permis officiel en quelques clics.
        </p>
        <a 
          href="/" 
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-md transition-all"
        >
          Créer le Permis du Père Noël &rarr;
        </a>
      </div>
    </>
  );
}