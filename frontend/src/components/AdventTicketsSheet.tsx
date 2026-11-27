// src/components/AdventTicketsSheet.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

interface AdventTicket {
  day: number;
  category: "Coup d'envoi" | "Défi Lutin" | "Douceur" | "Réveillon";
  badge: string;
  message: string;
}

interface TicketTheme {
  screenCard: string;
  printCard: string;
  badgeText: string;
  divider: string;
  bodyText: string;
  decor: string;
}

const TICKET_THEMES: TicketTheme[] = [
  {
    screenCard: "bg-amber-50/95 border-amber-400/75 text-slate-900",
    printCard: "print:bg-amber-50/90 print:border-amber-500/70 print:text-slate-900",
    badgeText: "text-red-800 print:text-red-800",
    divider: "border-amber-900/15",
    bodyText: "text-slate-800 print:text-slate-800",
    decor: "🎄",
  },
  {
    screenCard: "bg-rose-50/95 border-rose-300/80 text-slate-900",
    printCard: "print:bg-rose-50/85 print:border-rose-400/70 print:text-slate-900",
    badgeText: "text-rose-900 print:text-rose-900",
    divider: "border-rose-900/15",
    bodyText: "text-slate-800 print:text-slate-800",
    decor: "🎁",
  },
  {
    screenCard: "bg-emerald-50/95 border-emerald-400/75 text-slate-900",
    printCard: "print:bg-emerald-50/85 print:border-emerald-500/70 print:text-slate-900",
    badgeText: "text-emerald-900 print:text-emerald-900",
    divider: "border-emerald-900/15",
    bodyText: "text-slate-800 print:text-slate-800",
    decor: "❄️",
  },
  {
    screenCard: "bg-indigo-950 border-amber-300/60 text-amber-50",
    printCard: "print:bg-indigo-950 print:border-amber-400 print:text-amber-50",
    badgeText: "text-amber-300 print:text-amber-300",
    divider: "border-amber-200/20",
    bodyText: "text-slate-100 print:text-slate-100",
    decor: "⭐",
  },
  {
    screenCard: "bg-orange-50/95 border-amber-500/70 text-slate-900",
    printCard: "print:bg-orange-50/85 print:border-amber-500/70 print:text-slate-900",
    badgeText: "text-amber-950 print:text-amber-950",
    divider: "border-amber-950/15",
    bodyText: "text-stone-800 print:text-stone-800",
    decor: "🍪",
  },
];

function getTicketTheme(day: number): TicketTheme {
  // Motif décalé pour éviter que deux tickets côte à côte aient le même style
  const index = (day * 3 + (day % 2)) % TICKET_THEMES.length;
  return TICKET_THEMES[index];
}

const ADVENT_TICKETS: AdventTicket[] = [
  {
    day: 1,
    category: "Coup d'envoi",
    badge: "Jour 1 • C'est parti !",
    message:
      "C'est parti pour décembre ! Les lutins ouvrent l'œil sur tes plus beaux sourires.",
  },
  {
    day: 2,
    category: "Défi Lutin",
    badge: "Jour 2 • Mission éclair",
    message:
      "Range tes jouets en moins de 5 minutes avant le dîner pour gagner une étoile des lutins.",
  },
  {
    day: 3,
    category: "Douceur",
    badge: "Jour 3 • Joker câlin",
    message:
      "Un gros câlin express et une histoire choisie par toi ce soir avant de dormir.",
  },
  {
    day: 4,
    category: "Défi Lutin",
    badge: "Jour 4 • Vitesse lumière",
    message:
      "Enfile ton pyjama et brosse tes dents sans traîner : le Père Noël aime les couche-tôt.",
  },
  {
    day: 5,
    category: "Douceur",
    badge: "Jour 5 • Pause douceur",
    message:
      "Bon pour un chocolat chaud ou un goûter surprise à déguster aujourd'hui.",
  },
  {
    day: 6,
    category: "Coup d'envoi",
    badge: "Jour 6 • Saint-Nicolas",
    message:
      "L'atelier du Pôle Nord tourne à plein régime ! Fais un beau dessin ou un sourire aux lutins.",
  },
  {
    day: 7,
    category: "Défi Lutin",
    badge: "Jour 7 • Coup de main",
    message:
      "Aide à mettre la table ou à débarrasser aujourd'hui : les lutins adorent l'entraide.",
  },
  {
    day: 8,
    category: "Douceur",
    badge: "Jour 8 • Choix du roi",
    message:
      "Aujourd'hui, c'est toi qui choisis la musique ou la chanson sur le trajet !",
  },
  {
    day: 9,
    category: "Défi Lutin",
    badge: "Jour 9 • Écoute active",
    message:
      "Écoute bien du premier coup aujourd'hui pour garder ton score au top sur le registre.",
  },
  {
    day: 10,
    category: "Douceur",
    badge: "Jour 10 • Secret de famille",
    message:
      "Glisse un petit mot gentil ou un dessin à quelqu'un de la maison aujourd'hui.",
  },
  {
    day: 11,
    category: "Défi Lutin",
    badge: "Jour 11 • Chambre nickel",
    message:
      "Fais un petit tri de tes peluches ou petits jouets pour laisser de la place à la magie.",
  },
  {
    day: 12,
    category: "Douceur",
    badge: "Jour 12 • Soirée cocooning",
    message:
      "Version mini-plaid : une pause calme ensemble avant la suite des aventures.",
  },
  {
    day: 13,
    category: "Défi Lutin",
    badge: "Jour 13 • Mot doux",
    message:
      "Dis « s'il vous plaît » et « merci » avec un grand sourire à chaque repas aujourd'hui.",
  },
  {
    day: 14,
    category: "Douceur",
    badge: "Jour 14 • Bonus week-end",
    message:
      "Un petit jeu de société ou un puzzle en famille à lancer quand tu le souhaites.",
  },
  {
    day: 15,
    category: "Défi Lutin",
    badge: "Jour 15 • Mi-parcours",
    message:
      "Déjà la moitié de décembre ! Les lutins vérifient la liste des enfants sages.",
  },
  {
    day: 16,
    category: "Douceur",
    badge: "Jour 16 • Super pouvoir",
    message:
      "Joker patience : garde ton calme si quelque chose ne va pas tout de suite comme prévu.",
  },
  {
    day: 17,
    category: "Défi Lutin",
    badge: "Jour 17 • Défi dodo",
    message:
      "Au lit à l'heure convenue ce soir pour recharger tes batteries avant les fêtes.",
  },
  {
    day: 18,
    category: "Douceur",
    badge: "Jour 18 • Étoile d'or",
    message:
      "Bravo pour tes efforts cette semaine : tu fais partie des soutiens officiels de l'atelier.",
  },
  {
    day: 19,
    category: "Défi Lutin",
    badge: "Jour 19 • Esprit d'équipe",
    message:
      "Partage un jouet ou aide un proche sans qu'on te le demande aujourd'hui.",
  },
  {
    day: 20,
    category: "Douceur",
    badge: "Jour 20 • Compte à rebours",
    message:
      "Plus que 4 dodos avant la veille de Noël ! Prépare tes plus belles idées.",
  },
  {
    day: 21,
    category: "Défi Lutin",
    badge: "Jour 21 • Dernière ligne droite",
    message:
      "Rangement express et bonne humeur : les rennes s'entraînent déjà pour le grand voyage.",
  },
  {
    day: 22,
    category: "Douceur",
    badge: "Jour 22 • Moment magique",
    message:
      "Un temps rien qu'à nous pour parler de ton meilleur souvenir de l'année.",
  },
  {
    day: 23,
    category: "Défi Lutin",
    badge: "Jour 23 • Prêt pour le départ",
    message:
      "Dernier contrôle des lutins : montre que tu es prêt(e) pour une nuit féerique.",
  },
  {
    day: 24,
    category: "Réveillon",
    badge: "Jour 24 • Le grand soir !",
    message:
      "C'est le grand soir ! N'oublie pas les biscuits, un verre de lait et une carotte pour les rennes.",
  },
];

const PAGES_OF_TICKETS = [
  { id: "1-8", title: "Jours 1 à 8", tickets: ADVENT_TICKETS.slice(0, 8) },
  { id: "9-16", title: "Jours 9 à 16", tickets: ADVENT_TICKETS.slice(8, 16) },
  { id: "17-24", title: "Jours 17 à 24", tickets: ADVENT_TICKETS.slice(16, 24) },
] as const;

type FilterMode = "all" | "1-8" | "9-16" | "17-24";

export function AdventTicketsSheet() {
  const [filter, setFilter] = useState<FilterMode>("all");

  const visiblePages = PAGES_OF_TICKETS.filter((page) =>
    filter === "all" ? true : page.id === filter
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="apercu-et-impression"
      className="w-full max-w-5xl mx-auto my-6 bg-slate-900/90 border border-amber-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl print:bg-amber-50/40 print:text-black print:border-0 print:shadow-none print:p-6 print:my-0 print:max-w-none"
    >
      {/* En-tête masqué à l'impression */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6 print:hidden">
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full mb-2">
            ✂️ DIY • 3 Pages (8 tickets / page) • Aucun prénom requis
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            24 Tickets Calendrier de l&apos;Avent — Aperçu &amp; Impression
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Imprimé sur <strong className="text-amber-200">3 feuilles</strong>{" "}
            (8 tickets par feuille) pour un format lisible et facile à découper.
          </p>
          <p className="text-[11px] text-amber-200/85 mt-1.5">
            💡 Astuce : dans la fenêtre d&apos;impression, ouvrez{" "}
            <strong>Plus de paramètres</strong> et décochez{" "}
            <strong>En-têtes et pieds de page</strong> pour retirer la date et
            l&apos;adresse du navigateur.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="shrink-0 py-3 px-5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg cursor-pointer transition-all flex items-center justify-center gap-2"
        >
          <span>🖨️</span> Imprimer les 3 pages
        </button>
      </div>

      {/* Filtres d'aperçu à l'écran uniquement */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 print:hidden">
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: "all", label: "Les 3 pages (24 tickets)" },
              { id: "1-8", label: "Page 1 • Jours 1–8" },
              { id: "9-16", label: "Page 2 • Jours 9–16" },
              { id: "17-24", label: "Page 3 • Jours 17–24" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                filter === item.id
                  ? "bg-amber-400 text-slate-950 border-amber-300"
                  : "bg-slate-950/70 text-slate-300 border-slate-700 hover:border-amber-400/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-slate-400">
          L&apos;impression génère toujours les 3 pages complètes (8 tickets par page).
        </span>
      </div>

      {/* 3 blocs-pages : à l'écran selon le filtre, à l'impression toujours les 3 pages */}
      <div className="space-y-8 print:space-y-0">
        {PAGES_OF_TICKETS.map((page, pageIndex) => {
          const isHiddenByFilter = !visiblePages.some((p) => p.id === page.id);
          const isLastPage = pageIndex === PAGES_OF_TICKETS.length - 1;

          return (
            <div
              key={page.id}
              className={`${
                isHiddenByFilter ? "hidden print:block" : "block"
              } ${!isLastPage ? "print:break-after-page print:page-break-after-always" : ""}`}
            >
              <div className="flex items-center justify-between mb-3 print:mb-3 print:pt-1 print:border-b print:border-amber-300/60 print:pb-2">
                <div>
                  <span className="hidden print:block text-sm font-black uppercase tracking-wider text-amber-900">
                    Permis du Père Noël
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 print:text-xs print:text-slate-700">
                    {page.title}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 print:text-xs print:text-amber-900">
                  {page.tickets.length} tickets à découper
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-4">
                {page.tickets.map((ticket) => {
                  const theme = getTicketTheme(ticket.day);

                  return (
                    <div
                      key={ticket.day}
                      className={`relative overflow-hidden flex flex-col justify-center min-h-33.75 print:min-h-52.5 rounded-2xl border-2 border-dashed p-4 shadow-sm break-inside-avoid print:rounded-xl print:p-4 ${theme.screenCard} ${theme.printCard}`}
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none select-none absolute -bottom-2 -right-2 text-4xl opacity-15 print:opacity-15"
                      >
                        {theme.decor}
                      </span>

                      <div
                        className={`relative z-10 flex items-center justify-between gap-2 border-b pb-2 mb-2.5 print:pb-2 print:mb-2.5 ${theme.divider}`}
                      >
                        <span
                          className={`text-xs font-black uppercase tracking-wide flex items-center gap-1.5 ${theme.badgeText}`}
                        >
                          <span>{theme.decor}</span>
                          <span>{ticket.badge}</span>
                        </span>
                        <span className="text-[11px] font-bold opacity-75 uppercase print:text-[10px]">
                          ✂️ Découper
                        </span>
                      </div>

                      <p
                        className={`relative z-10 text-sm font-semibold leading-relaxed print:text-sm print:leading-relaxed ${theme.bodyText}`}
                      >
                        {ticket.message}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Passerelle vers le Pack 4-en-1 (masquée à l'impression) */}
      <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <p className="text-xs text-slate-300">
          Vous voulez aussi un{" "}
          <strong className="text-amber-300">
            Permis, Passeport, Diplôme A4 et Lettre nominatifs
          </strong>{" "}
          avec le prénom et la photo de l&apos;enfant ?{" "}
          <strong className="text-amber-200">
            Pack 4-en-1 à 1,99 € (aperçu gratuit)
          </strong>
          .
        </p>
        <Link
          to="/?utm_source=avent-tickets&utm_medium=component&utm_campaign=24-tickets-avent"
          className="shrink-0 py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
        >
          Tester l&apos;aperçu gratuit (1,99 €) &rarr;
        </Link>
      </div>

      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body * {
            visibility: hidden;
          }
          #apercu-et-impression,
          #apercu-et-impression * {
            visibility: visible;
          }
          #apercu-et-impression {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}