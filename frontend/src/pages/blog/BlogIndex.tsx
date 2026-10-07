import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../../components/Navbar'; 
import { Footer } from '../../components/Footer'; 

const modules = import.meta.glob<{ metadata: any; default: React.ComponentType }>('../../articles/*.tsx', { eager: true });
const articles = Object.values(modules).map((mod) => mod.metadata);

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden">
      <Helmet>
        <title>Le Blog de Noël - Conseils et Astuces | La Fabrique Magique</title>
        <meta 
          name="description" 
          content="Découvrez tous nos articles, conseils et astuces pour faire patienter les enfants, préparer les fêtes et vivre un Noël magique et inoubliable." 
        />
      </Helmet>

      {/* Navbar intégrée en haut */}
      <Navbar />

      {/* Contenu de la page Blog */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10 w-full grow">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 px-4 py-1.5 rounded-full text-xs font-semibold text-amber-300 mb-4 shadow-inner">
            <span>✨</span> Le coin des lutins & des parents
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-100 to-amber-400 mb-4 tracking-tight">
            Le Blog Magique de Noël 🎄
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Astuces pour faire patienter les enfants, idées de traditions et secrets du Pôle Nord pour préparer des fêtes mémorables.
          </p>
        </div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article 
              key={art.slug} 
              className="bg-indigo-950/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-amber-400/20 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:shadow-2xl group"
            >
              {art.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-indigo-950 via-transparent to-transparent opacity-80"></div>
                </div>
              )}

              <div className="p-6 flex flex-col grow">
                <span className="text-xs font-semibold text-amber-400 mb-2 block">{art.date}</span>
                
                <h2 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">
                  <Link to={`/blog/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-slate-300 text-sm mb-6 line-clamp-3 grow leading-relaxed">
                  {art.description}
                </p>

                <Link 
                  to={`/blog/${art.slug}`}
                  className="inline-flex items-center text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors mt-auto gap-1"
                >
                  Lire l'article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer intégré en bas */}
      <Footer />
    </div>
  );
}