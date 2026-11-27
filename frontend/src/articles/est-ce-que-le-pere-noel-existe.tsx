// src/articles/est-ce-que-le-pere-noel-existe.tsx
export const metadata = {
  slug: "est-ce-que-le-pere-noel-existe",
  title:
    "Est-ce que le Père Noël existe ? Réponses bienveillantes selon l'âge (2026)",
  description:
    "Votre enfant vous demande si le Père Noël existe vraiment ? Découvrez comment répondre avec douceur selon son âge, préserver la magie de Noël et garder le lien de confiance.",
  date: "28 novembre 2026",
  image: "/images/blog/est-ce-que-le-pere-noel-existe.png",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Est-ce que le Père Noël existe ? Réponses bienveillantes selon l'âge (2026)",
        description:
          "Votre enfant vous demande si le Père Noël existe vraiment ? Découvrez comment répondre avec douceur selon son âge, préserver la magie de Noël et garder le lien de confiance.",
        image:
          "https://www.permisduperenoel.fr/images/blog/est-ce-que-le-pere-noel-existe.png",
        datePublished: "2026-11-28T09:00:00+01:00",
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
            name: "Comment répondre si mon enfant demande si le Père Noël existe vraiment ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Commencez par lui demander ce qu'il en pense et pourquoi il pose la question. Adaptez ensuite votre réponse à son âge : rassurante et imagée chez les plus jeunes, plus ouverte et nuancée quand les doutes arrivent.",
            },
          },
          {
            "@type": "Question",
            name: "À quel âge les enfants commencent-ils à douter du Père Noël ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les premiers doutes apparaissent souvent entre 6 et 8 ans, au contact des camarades de classe ou face à des questions concrètes sur l'organisation de la nuit de Noël, même si le rythme varie selon chaque enfant.",
            },
          },
          {
            "@type": "Question",
            name: "Faut-il dire toute la vérité d'un coup ou accompagner la transition en douceur ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Accompagner la transition en douceur préserve la confiance et l'esprit de fête. On peut faire évoluer la magie vers le partage, les surprises en famille et la joie de faire plaisir aux autres.",
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
        Un matin au petit-déjeuner, dans la voiture sur le chemin de
        l&apos;école ou au moment de border le lit, la question tombe souvent
        sans prévenir : <strong>« Est-ce que le Père Noël existe vraiment ? »</strong>.
        Pour les parents, ce moment réveille un petit pincement au cœur : on a
        envie de faire durer la magie encore un peu, tout en voulant rester
        juste et sincère face à un enfant qui grandit.
      </p>

      {/* ACCÈS RAPIDE AU PACK PERSONNALISÉ */}
      <div className="bg-indigo-950/70 border border-amber-400/40 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
            ✨ Souvenir &amp; Magie • Aperçu gratuit avant paiement
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            Vous voulez marquer Noël avec un document au prénom de votre enfant
            ou garder un joli souvenir de la magie de l&apos;enfance ?
          </p>
        </div>
        <a
          href="/?utm_source=blog&utm_medium=article&utm_campaign=pere-noel-existe"
          className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Aperçu gratuit (1,99 €) &rarr;
        </a>
      </div>

      {/* SOMMAIRE SEO */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 my-8">
        <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-3">
          📍 Dans ce guide :
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
          <li>
            •{" "}
            <a href="#ecouter-la-question" className="hover:underline">
              1. Pourquoi cette question arrive souvent au moment où on s&apos;y attend le moins
            </a>
          </li>
          <li>
            •{" "}
            <a href="#reponses-selon-age" className="hover:underline">
              2. Quelles réponses selon l&apos;âge et la maturité de l&apos;enfant
            </a>
          </li>
          <li>
            •{" "}
            <a href="#ce-quil-faut-eviter" className="hover:underline">
              3. Les maladresses à éviter quand le doute s&apos;installe
            </a>
          </li>
          <li>
            •{" "}
            <a href="#prolonger-la-magie" className="hover:underline">
              4. Faire évoluer la magie de Noël sans casser l&apos;ambiance
            </a>
          </li>
          <li>
            •{" "}
            <a href="#faq" className="hover:underline">
              5. Questions fréquentes des parents
            </a>
          </li>
        </ul>
      </div>

      <h2
        id="ecouter-la-question"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        1. Pourquoi cette question arrive souvent au moment où on s&apos;y attend le moins
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Derrière <em>« Est-ce que le Père Noël existe ? »</em>, il n&apos;y a
        pas toujours la même intention. Parfois, l&apos;enfant vient
        d&apos;entendre un camarade de cour de récréation affirmer le contraire
        et cherche une parole rassurante à la maison. D&apos;autres fois, il a
        déjà fait ses propres déductions et teste si ses parents vont lui
        confirmer ce qu&apos;il commence à deviner.
      </p>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Le meilleur réflexe consiste souvent à lui renvoyer doucement la balle :{" "}
        <strong>« Toi, qu&apos;est-ce que tu en penses ? Qu&apos;est-ce qui te fait dire ça ? »</strong>.
        En écoutant son raisonnement, on comprend tout de suite s&apos;il a
        besoin d&apos;être rassuré ou s&apos;il est prêt pour une conversation
        plus grande.
      </p>

      <h2
        id="reponses-selon-age"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        2. Adapter sa réponse selon l&apos;âge et la sensibilité de l&apos;enfant
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Tous les enfants n&apos;avancent pas au même rythme sur ce sujet. Une
        réponse juste à 4 ans peut sembler artificielle à 8 ans, et inversement :
      </p>
      <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6 pl-2 leading-relaxed">
        <li>
          <strong>De 3 à 5 ans :</strong> l&apos;imaginaire est au cœur du jeu et
          de l&apos;émerveillement. Une réponse simple, chaleureuse et
          rassurante suffit, centrée sur la joie des fêtes, les lutins et
          l&apos;attention portée aux enfants.
        </li>
        <li>
          <strong>De 6 à 8 ans (l&apos;âge des premiers doutes) :</strong> les
          questions deviennent plus logiques (traîneau, horaires, cadeaux). On
          peut valider ce qu&apos;il observe sans forcer ni brusquer, tout en
          gardant la poésie de la tradition.
        </li>
        <li>
          <strong>À partir de 8–9 ans :</strong> quand la vérité est presque
          évidente, insister sur l&apos;impossible peut créer un décalage. On
          peut alors faire découvrir la magie autrement : celle des attentions
          partagées, des surprises et de la joie de faire plaisir aux autres.
        </li>
      </ul>

      {/* ENCADRÉ CONVERSION VERS LE PACK 4-EN-1 À 1,99 € */}
      <div className="bg-indigo-950/60 border border-amber-400/30 rounded-2xl p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🎄</span>
          <div>
            <h4 className="text-sm font-bold text-amber-300">
              Envie de créer un document personnalisé pour Noël ?
            </h4>
            <p className="text-xs text-slate-300">
              Générez en 2 minutes le{" "}
              <strong className="text-amber-200">
                Pack Magique 4-en-1 à 1,99 €
              </strong>{" "}
              (Permis de Traîneau, Passeport du Pôle Nord, Diplôme A4 et Lettre
              personnalisée avec prénom, photo et score des lutins — aperçu
              gratuit avant paiement).
            </p>
          </div>
        </div>
        <a
          href="/?utm_source=blog&utm_medium=article&utm_campaign=pere-noel-existe"
          className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-all shadow-md"
        >
          Aperçu gratuit (1,99 €) &rarr;
        </a>
      </div>

      <h2
        id="ce-quil-faut-eviter"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        3. Les maladresses à éviter quand les doutes apparaissent
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Quand un enfant commence à assembler les indices, certaines réactions
        risquent de le frustrer ou de casser l&apos;élan de confiance. Évitez
        notamment de vous vexer ou de tourner sa question en dérision : pour
        lui, comprendre comment fonctionne le monde est une étape sérieuse.
      </p>
      <p className="text-slate-300 mb-4 leading-relaxed">
        À l&apos;inverse, inutile de lever le voile trop tôt si l&apos;enfant
        n&apos;a pas encore posé la question ou s&apos;il aime encore se
        laisser porter par l&apos;histoire. Respecter son propre rythme permet
        que la transition se fasse naturellement.
      </p>

      <h2
        id="prolonger-la-magie"
        className="text-2xl font-bold text-slate-100 mt-10 mb-4"
      >
        4. Garder la magie vivante autrement au fil des années
      </h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Même lorsque le regard sur le Père Noël change, Noël reste un moment à
        part dans l&apos;année : les décorations, les petits rituels du mois de
        décembre, les moments passés ensemble et la surprise au pied du sapin.
        Un petit mot complice, un clin d&apos;œil partagé ou un document
        symbolique glissé avec un cadeau aide à garder cette chaleur intacte.
      </p>

      <h2 id="faq" className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        5. Questions fréquentes sur l&apos;existence du Père Noël
      </h2>

      <div className="space-y-4 my-6">
        <div>
          <h4 className="text-base font-bold text-amber-300">
            Comment répondre si mon enfant demande si le Père Noël existe vraiment ?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mt-1">
            Commencez par lui demander ce qu&apos;il en pense et ce qui a
            déclenché sa question, puis adaptez votre réponse à son âge et à sa
            sensibilité.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-amber-300">
            À quel âge les enfants commencent-ils à douter ?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mt-1">
            Les premiers questionnements apparaissent souvent entre 6 et 8 ans,
            mais chaque enfant a son propre rythme.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-amber-300">
            Peut-on garder la tradition même quand l&apos;enfant grandit ?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mt-1">
            Oui, en faisant évoluer l&apos;histoire vers l&apos;esprit de
            partage, les petites attentions en famille et la joie de faire
            plaisir aux autres.
          </p>
        </div>

        <div>
          <h4 className="text-base font-bold text-amber-300">
            Où créer un document personnalisé pour Noël ?
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed mt-1">
            Vous pouvez{" "}
            <a
              href="/?utm_source=blog&utm_medium=article&utm_campaign=pere-noel-existe"
              className="text-amber-400 underline hover:text-amber-300 font-medium"
            >
              tester l&apos;aperçu gratuit du Pack Magique 4-en-1 (1,99 €)
            </a>{" "}
            directement depuis la page d&apos;accueil.
          </p>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">
          🎄 Préparez un Noël plein de magie et de souvenirs en famille
        </h3>
        <p className="text-slate-300 text-sm mb-4">
          Créez en 2 minutes le{" "}
          <strong className="text-amber-200">
            Pack Magique 4-en-1 à 1,99 €
          </strong>{" "}
          (Permis de Traîneau, Passeport du Pôle Nord, Diplôme A4 et Lettre
          personnalisée — aperçu gratuit avant paiement).
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/?utm_source=blog&utm_medium=article&utm_campaign=pere-noel-existe"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs shadow-md transition-all"
          >
            Aperçu gratuit (1,99 €) &rarr;
          </a>
        </div>
      </div>
    </>
  );
}