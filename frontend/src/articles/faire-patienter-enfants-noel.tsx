import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar'; // Ajuste le chemin si besoin
import { Footer } from '../components/Footer'; // Ajuste le chemin si besoin

const modules = import.meta.glob<{ metadata: any; default: React.ComponentType }>('../articles/*.tsx', { eager: true });

export default function ArticleView() {
  const { slug } = useParams();

  const matchedModule = Object.values(modules).find((mod) => mod.metadata.slug === slug);

  if (!matchedModule) {
    return <Navigate to="/blog" replace />;
  }

  const { metadata, default: ContentComponent } = matchedModule;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden">
      {/* Petits effets lumineux de fond */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <Helmet>
        <title>{metadata.title} - La Fabrique Magique</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        {metadata.image && <meta property="og:image" content={metadata.image} />}
      </Helmet>

      {/* Navbar en haut */}
      <Navbar />

      {/* Contenu de l'article */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 relative z-10 w-full flex-grow">
        {/* Fil d'Ariane / Retour au blog */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors bg-indigo-950/60 border border-amber-400/20 px-3 py-1.5 rounded-xl"
          >
            &larr; Retour au Blog Magique
          </Link>
        </div>

        <article className="bg-indigo-950/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-amber-400/20 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3">
            <span>✨</span> {metadata.date}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-6 tracking-tight leading-tight">
            {metadata.title}
          </h1>

          {metadata.image && (
            <div className="rounded-2xl overflow-hidden mb-8 border border-amber-400/20 shadow-lg h-64 sm:h-96">
              <img src={metadata.image} alt={metadata.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Corps de l'article avec un style lisible */}
          <div className="text-slate-300 space-y-4 leading-relaxed text-base sm:text-lg">
            <ContentComponent />
          </div>
        </article>
      </main>

      {/* Footer en bas */}
      <Footer />
    </div>
  );
}