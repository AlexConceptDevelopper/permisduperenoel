import tutoImage from "../../public/images/blog/tuto-pull-diy.jpg";

export const metadata = {
  slug: "tuto-pull-moche-diy",
  title: "Tuto DIY : Comment fabriquer son propre pull moche de Noël facilement",
  description: "Guide étape par étape pour créer un pull de Noël kitch et unique à partir de vieux vêtements et d'accessoires de récup'. Zéro déchet, 100% rigolo !",
  date: "14 novembre 2026",
  image: tutoImage
};

export default function ArticleContent() {
  return (
    <>
      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
        Vous avez un concours de pulls moches prévu au bureau ou entre amis, mais aucun modèle du commerce ne trouve grâce à vos yeux (ou plutôt, ils ne sont pas <em>assez</em> ridicules) ? La meilleure option reste de le fabriquer soi-même. 
        Suivez notre tutoriel complet pour transformer un vieux pull tout simple en une œuvre d'art festive et ultra-kitch !
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Étape 1 : Le choix de la base et du matériel</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Le secret d'un bon DIY réside dans la récupération. Fouillez dans vos armoires ou passez en friperie avant d'acheter du neuf.
      </p>

      <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 mb-6 space-y-4">
        <h3 className="text-lg font-bold text-amber-300">Ce dont vous aurez besoin :</h3>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-2 pl-2">
          <li><strong className="text-slate-100">La base :</strong> Un vieux pull uni de couleur vive (rouge, vert sapin, bleu nuit ou même de Noël basique). Évitez le noir trop triste, sauf si vous voulez faire un "Dark Noël".</li>
          <li><strong className="text-slate-100">Les décorations :</strong> Petites boules de Noël en plastique (légères), guirlandes à LED miniatures fonctionnant à piles, rubans de satin rouge et doré.</li>
          <li><strong className="text-slate-100">La mercerie :</strong> Chutes de feutrine (blanche, marron, rouge, noire), pompons colorés, yeux mobiles autocollants.</li>
          <li><strong className="text-slate-100">L'outillage :</strong> Un pistolet à colle chaude (indispensable pour que ça tienne) ou du fil et une aiguille si vous préférez coudre.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Étape 2 : Conter l'histoire de votre pull (Le design)</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Ne collez pas des éléments au hasard. Un bon pull moche raconte une histoire. Voici trois thèmes qui cartonnent à coup sûr :
      </p>
      <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2 pl-2">
        <li><strong className="text-amber-300">Le Renne en 3D :</strong> Un grand cercle de feutrine marron sur le torse, un énorme pompon rouge pour le nez, et des cornes en feutrine qui dépassent sur les épaules.</li>
        <li><strong className="text-amber-300">Le Sapin Lumineux :</strong> Une guirlande de feutrine verte en zigzag sur laquelle vous cousez/collez de vraies petites boules de Noël et une mini-guirlande lumineuse LED dont le boîtier à piles se glissera discrètement dans la poche.</li>
        <li><strong className="text-amber-300">Le Bonhomme de Neige coincé :</strong> Un bonhomme de neige en feutrine blanche dont la tête dépasse sur le ventre et le corps semble submergé sous des couches de coton "neige".</li>
      </ul>

      {/* --- ENCADRÉ CONSEIL PRO --- */}
      <div className="bg-indigo-950/60 border border-amber-400/30 rounded-2xl p-5 my-8 backdrop-blur-md shadow-lg">
        <h4 className="text-sm font-bold text-amber-300 mb-1">💡 L'astuce du pro pour la colle chaude :</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          Mettez un carton ou un livre épais à l'intérieur du pull avant d'utiliser le pistolet à colle. Cela évitera que la colle chaude ne traverse le tissu et ne colle le devant du pull avec le dos !
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Étape 3 : L'assemblage et les finitions</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Enfilez le pull (sur un cintre ou sur vous devant un miroir) pour placer vos éléments au bon endroit :
      </p>
      <ol className="list-decimal list-inside text-slate-300 mb-6 space-y-2 pl-2">
        <li><strong className="text-slate-100">Disposez à blanc :</strong> Posez vos formes en feutrine et vos accessoires sans les fixer pour valider la composition.</li>
        <li><strong className="text-slate-100">Fixez les gros éléments :</strong> Collez d'abord le fond (les formes principales en tissu).</li>
        <li><strong className="text-slate-100">Ajoutez le relief :</strong> Collez les pompons, les yeux, et suspendez ou cousez solidement les éléments lourds (comme les boules de Noël en plastique) pour qu'ils ne tombent pas au premier "Jingle Bells".</li>
        <li><strong className="text-slate-100">Sécurisez l'électronique :</strong> Si vous intégrez des LED, prévoyez un petit scratch ou une poche intérieure pour cacher le boîtier de piles.</li>
      </ol>

      {/* --- CTA VERS TON APPLICATION --- */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">✨ Prêt pour le grand jour ?</h3>
        <p className="text-slate-300 text-sm mb-4">
          Votre pull est prêt ? Accompagnez votre look le jour J en créant votre propre permis officiel de traîneau du Père Noël personnalisé !
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