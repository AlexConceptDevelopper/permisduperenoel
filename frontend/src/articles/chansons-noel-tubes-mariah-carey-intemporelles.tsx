import { useState } from 'react';

export const metadata = {
  slug: "chansons-noel-tubes-mariah-carey-intemporelles",
  title: "Chansons de Noël : entre tubes cultes et surdose de Mariah Carey, pourquoi on les aime (ou les redoute)",
  description: "Dès que novembre pointe le bout de son nez, elles reviennent squatter nos radios et nos têtes. Décryptage de ces mélodies de Noël qu'on adore chanter à tue-tête... ou fuir en courant.",
  date: "15 octobre 2026",
  image: "/images/blog/chansons-noel.jpg"
};

const playlist = [
  { id: 1, title: "All I Want for Christmas Is You", artist: "Mariah Carey", vibe: "La décongélation suprême 🧊👑", query: "Mariah Carey All I Want for Christmas Is You" },
  { id: 2, title: "Last Christmas", artist: "Wham!", vibe: "Le drama sentimental en pull de ski 🎿💔", query: "Wham Last Christmas" },
  { id: 3, title: "Petit Papa Noël", artist: "Tino Rossi", vibe: "La madeleine de Proust ultime 🪵🔥", query: "Tino Rossi Petit Papa Noel" },
  { id: 4, title: "Jingle Bell Rock", artist: "Bobby Helms", vibe: "L'énergie pure pour décorer le sapin 🎄🕺", query: "Bobby Helms Jingle Bell Rock" },
  { id: 5, title: "Let It Snow! Let It Snow! Let It Snow!", artist: "Frank Sinatra", vibe: "Le jazz au coin du feu 🎷❄️", query: "Frank Sinatra Let It Snow" },
  { id: 6, title: "Rockin' Around the Christmas Tree", artist: "Brenda Lee", vibe: "La banane et les guirlandes 🎸✨", query: "Brenda Lee Rockin Around the Christmas Tree" },
  { id: 7, title: "Happy Xmas (War Is Over)", artist: "John & Yoko", vibe: "L'hymne universel et touchant 🕊️❤️", query: "John Lennon Happy Xmas War Is Over" },
  { id: 8, title: "Santa Claus Is Comin' to Town", artist: "Michael Bublé", vibe: "Le crooner moderne par excellence 🎤🎩", query: "Michael Buble Santa Claus Is Comin to Town" },
  { id: 9, title: "It's Beginning to Look a Lot Like Christmas", artist: "Michael Bublé", vibe: "L'ambiance des vitrines de grands magasins 🏬🎁", query: "Michael Buble Its Beginning to Look a Lot Like Christmas" },
  { id: 10, title: "Santa Tell Me", artist: "Ariana Grande", vibe: "La pop de Noël acidulée 🎀🎶", query: "Ariana Grande Santa Tell Me" },
  { id: 11, title: "Mistletoe", artist: "Justin Bieber", vibe: "Le slow romantique sous le gui 🌿💖", query: "Justin Bieber Mistletoe" },
  { id: 12, title: "Underneath the Tree", artist: "Kelly Clarkson", vibe: "L'énergie vitaminée du Pôle Nord ⚡🎄", query: "Kelly Clarkson Underneath the Tree" },
  { id: 13, title: "Do They Know It's Christmas?", artist: "Band Aid", vibe: "La grande chorale caritative des années 80 🌍🎙️", query: "Band Aid Do They Know Its Christmas" },
  { id: 14, title: "White Christmas", artist: "Bing Crosby", vibe: "La nostalgie de la neige d'antan 🌨️🕰️", query: "Bing Crosby White Christmas" },
  { id: 15, title: "Joy to the World", artist: "Whitney Houston", vibe: "La puissance vocale gospel ✨🙌", query: "Whitney Houston Joy to the World" },
  { id: 16, title: "Wonderful Christmastime", artist: "Paul McCartney", vibe: "La pop synthé rétro et joyeuse 🎹🎉", query: "Paul McCartney Wonderful Christmastime" },
  { id: 17, title: "Sleigh Ride", artist: "The Ronettes", vibe: "Le rythme tambourinant des grelots 🛷🔔", query: "The Ronettes Sleigh Ride" },
  { id: 18, title: "Blue Christmas", artist: "Elvis Presley", vibe: "Le rock'n'roll mélancolique 🎸💙", query: "Elvis Presley Blue Christmas" },
  { id: 19, title: "Hallelujah", artist: "Pentatonix", vibe: "L'harmonie vocale a cappella frissons ❄️ choir", query: "Pentatonix Hallelujah" },
  { id: 20, title: "Happy New Year", artist: "ABBA", vibe: "La transition parfaite vers le réveillon 🍾🕛", query: "ABBA Happy New Year" }
];

export default function ArticleContent() {
  const [selectedTrack, setSelectedTrack] = useState(playlist[0]);

  return (
    <>
      <p className="text-lg text-slate-300 mb-6 leading-relaxed">
        C'est le grand marronnier musical de fin d'année. À peine le dernier bonbon d'Halloween avalé, le couperet tombe : les playlists de Noël envahissent les supermarchés, les radios et les open spaces. Entre nostalgie régressive et saturation auditive totale, impossible d'y échapper. Mais comment ces mélodies hivernales ont-elles réussi à s'incruster durablement dans nos cerveaux ?
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">1. Le réveil de Mariah Carey : l'éternel recommencement</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        C'est le meme ultime du web, mais c'est surtout une réalité implacable. Dès le 1er novembre, les aiguilles de la décongélation s'activent pour libérer la reine incontestée de la saison : <em>All I Want for Christmas Is You</em>. Qu'on l'écoute en boucle avec un bonnet à pompon ou qu'on frôle l'urticaire dès les premières notes du xylophone d'intro, ce tube intergalactique reste le signal sonore officiel que la magie (ou la folie) de Noël est bel et bien lancée.
      </p>

      {/* --- JUKE-BOX INTERACTIF YOUTUBE (20 TITRES) --- */}
      <div className="bg-indigo-950/80 border-2 border-amber-400/50 rounded-2xl p-5 my-8 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between mb-4 border-b border-amber-400/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📻✨</span>
            <div>
              <h3 className="text-sm font-black text-amber-300 uppercase">La Juke-Box Géante des Lutins (Top 20)</h3>
              <p className="text-[11px] text-amber-100/70">Cliquez sur un titre pour l'écouter directement sur YouTube</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-red-500/20 border border-red-400/40 text-red-200 text-[10px] font-bold rounded-full">
            ▶ 20 Tubes
          </span>
        </div>

        {/* Piste sélectionnée et bouton de recherche YouTube */}
        <div className="bg-slate-950/70 border border-amber-400/30 rounded-xl p-4 mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-amber-300">🎵 {selectedTrack.title}</div>
            <div className="text-[11px] text-slate-300">{selectedTrack.artist} • <span className="text-amber-200 italic">{selectedTrack.vibe}</span></div>
          </div>
          
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedTrack.query)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl text-center transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🎬</span> Écouter sur YouTube &rarr;
          </a>
        </div>

        {/* Liste des 20 morceaux */}
        <div className="space-y-1.5 max-h-72 overflow-y-auto pr-2">
          <p className="text-[10px] uppercase font-bold text-amber-200/60 mb-2">Choisissez votre hymne de Noël :</p>
          {playlist.map((track) => (
            <button
              key={track.id}
              type="button"
              onClick={() => setSelectedTrack(track)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                selectedTrack.id === track.id 
                  ? "bg-amber-500/20 border border-amber-400/60 text-amber-200 font-bold" 
                  : "bg-indigo-900/30 hover:bg-indigo-900/60 text-slate-300 border border-transparent"
              }`}
            >
              <span>🎶 {track.title} <span className="text-slate-400 font-normal">({track.artist})</span></span>
              {selectedTrack.id === track.id && <span className="text-amber-400 text-[10px]">◀ SÉLECTIONNÉ</span>}
            </button>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">2. Les madeleines de Proust et les classiques intergénérationnels</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Heureusement, la bande-son de décembre ne se résume pas uniquement aux vocalises suraiguës de nos divas pop préférées. On replonge avec délice dans les intemporelles : de la gouaille de Tino Rossi avec <em>Petit Papa Noël</em> aux arrangements cuivrés de Wham! avec <em>Last Christmas</em>. Ces chansons fonctionnent comme des capsules temporelles magiques : dès qu'on les entend, on a instantanément 8 ans, les yeux rivés sur le sapin, à attendre impatiemment le matin du 25.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">3. Chanter en famille pour oublier le froid</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        C'est scientifiquement prouvé (ou presque) : chanter faux à tue-tête sur des chants de Noël en préparant des sablés les mains pleines de farine est l'un des meilleurs remèdes contre la morosité automnale. C'est le moment de partager ses goûts musicaux kitsch avec les enfants et de lancer le compte à rebours officiel dans la maison.
      </p>

      {/* Encadré d'appel à l'action (CTA) vers ton app */}
      <div className="bg-indigo-900/40 border border-amber-400/30 rounded-2xl p-6 my-8 text-center backdrop-blur-md">
        <h3 className="text-xl font-bold text-amber-300 mb-2">✨ Envie d'une vraie touche de magie à la maison ?</h3>
        <p className="text-slate-300 text-sm mb-4">
          Faites vivre un scénario digne des plus beaux contes de Noël à vos enfants en commandant leur véritable permis de traîneau officiel.
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