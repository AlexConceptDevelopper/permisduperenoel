import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// On va chercher tous les fichiers .tsx situés dans le dossier articles un peu plus haut
const modules = import.meta.glob<{ metadata: any; default: React.ComponentType }>('../../articles/*.tsx', { eager: true });

// On transforme ces fichiers en une simple liste exploitable
const articles = Object.values(modules).map((mod) => mod.metadata);

export default function BlogIndex() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Le Blog de Noël | La Fabrique Magique</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold mb-8">Le Blog de Noël 🎄</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <div key={art.slug} className="bg-white rounded-xl shadow p-4 border border-gray-100">
            <span className="text-xs text-red-600 font-semibold">{art.date}</span>
            <h2 className="text-xl font-bold mt-1 mb-2">
              <Link to={`/blog/${art.slug}`} className="hover:text-red-600">
                {art.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-4">{art.description}</p>
            <Link to={`/blog/${art.slug}`} className="text-red-600 font-bold text-sm">
              Lire l'article &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}