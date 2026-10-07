import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const modules = import.meta.glob<{ metadata: any; default: React.ComponentType }>('../articles/*.tsx', { eager: true });

export default function ArticleView() {
  const { slug } = useParams();

  // On cherche le fichier dont le slug correspond à l'URL
  const matchedModule = Object.values(modules).find((mod) => mod.metadata.slug === slug);

  if (!matchedModule) {
    return <Navigate to="/blog" replace />;
  }

  const { metadata, default: ContentComponent } = matchedModule;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Helmet>
        <title>{metadata.title} - La Fabrique Magique</title>
        <meta name="description" content={metadata.description} />
      </Helmet>

      <span className="text-sm text-gray-500">{metadata.date}</span>
      <h1 className="text-3xl font-bold mt-2 mb-6">{metadata.title}</h1>

      <div className="prose">
        <ContentComponent />
      </div>
    </article>
  );
}