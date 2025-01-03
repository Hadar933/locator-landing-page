import { Helmet } from "react-helmet";

interface BlogSEOProps {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate: string;
  slug: string;
  image: string;
}

export const BlogSEO = ({ 
  title, 
  description, 
  author, 
  publishDate, 
  modifiedDate, 
  slug,
  image
}: BlogSEOProps) => {
  return (
    <Helmet>
      <title>{title} | Locator Travel Blog</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content="Karpathos, Greece, travel guide, hidden gems, Greek islands, beaches, restaurants, authentic Greece, budget travel" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://locator.ltd/blog/${slug}`} />
      <meta property="og:image" content={image} />
      <meta property="article:published_time" content={publishDate} />
      <meta property="article:modified_time" content={modifiedDate} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content="Travel" />
      <meta property="article:tag" content="Travel Guide" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={`https://locator.ltd/blog/${slug}`} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description,
          "image": image,
          "author": {
            "@type": "Organization",
            "name": author,
            "url": "https://locator.ltd"
          },
          "datePublished": publishDate,
          "dateModified": modifiedDate,
          "publisher": {
            "@type": "Organization",
            "name": "Locator",
            "url": "https://locator.ltd",
            "logo": {
              "@type": "ImageObject",
              "url": image
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://locator.ltd/blog/${slug}`
          },
          "keywords": "Travel Guide, Local Recommendations, Hidden Gems",
          "articleSection": "Travel Guides"
        })}
      </script>
    </Helmet>
  );
};