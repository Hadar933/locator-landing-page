import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, jsonLd }) => {
  const baseUrl = 'https://locator.ltd'; 
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
