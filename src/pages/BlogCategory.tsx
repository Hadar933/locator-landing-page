import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogCategory = () => {
  const { category } = useParams();
  
  const getCategoryPosts = (categorySlug: string) => {
    switch(categorySlug) {
      case 'philippines':
        return {
          title: "Philippines",
          description: "Discover hidden gems and travel guides across the Philippine archipelago",
          posts: [
            {
              title: "Coron Nature Guide: Hidden Lakes and Marine Wonders",
              slug: "coron-nature-guide",
              excerpt: "Discover the natural wonders of Coron - from therapeutic hot springs to pristine lakes and vibrant coral gardens",
              date: "2024-12-29"
            }
          ]
        };
      case 'thailand':
        return {
          title: "Thailand",
          description: "Local insights and travel guides for exploring Thailand",
          posts: [
            {
              title: "Phuket Local Guide: From Patong to Hidden Beaches",
              slug: "phuket-local-guide",
              excerpt: "A laid-back guide to Phuket's best spots - from serene beaches to vibrant nightlife",
              date: "2024-12-30"
            }
          ]
        };
      case 'sri-lanka':
        return {
          title: "Sri Lanka",
          description: "Food, culture, and travel guides for Sri Lanka",
          posts: [
            {
              title: "Arugam Bay Food Guide: Local Gems & Hidden Spots",
              slug: "arugam-bay-food-guide",
              excerpt: "A casual food lover's guide to the best restaurants in Sri Lanka's surf paradise",
              date: "2024-12-31"
            }
          ]
        };
      case 'greece':
        return {
          title: "Greece",
          description: "Explore the hidden corners and local culture of Greece",
          posts: [
            {
              title: "Karpathos: Greece's Hidden Paradise - Local Guide",
              slug: "karpathos-local-guide",
              excerpt: "Discover the untouched beauty of Karpathos - pristine beaches and authentic Greek culture away from the crowds",
              date: "2024-12-28"
            }
          ]
        };
      case 'israel':
        return {
          title: "Israel",
          description: "Explore the vibrant food scene and cultural hotspots of Israel",
          posts: [
            {
              title: "Tel Aviv Café Culture: Best Coffee Spots Guide",
              slug: "tel-aviv-cafe-guide",
              excerpt: "A curated guide to Tel Aviv's most charming cafés, from hidden gems to popular spots",
              date: "2024-12-27"
            },
            {
              title: "Tel Aviv's Ultimate Burger Guide: Local Favorites",
              slug: "tel-aviv-burger-guide",
              excerpt: "Discover the juiciest, most flavorful burgers in Tel Aviv's vibrant food scene",
              date: "2024-01-20"
            }
          ]
        };
      case 'italy':
        return {
          title: "Italy",
          description: "Explore the charming streets and hidden gems of Italy's most beautiful cities",
          posts: [
            {
              title: "Naples Shopping Streets Guide: From Via Toledo to Via Chiaia",
              slug: "naples-streets-guide",
              excerpt: "Discover the most iconic shopping streets of Naples, from the historic Via Toledo to the elegant Via Chiaia",
              date: "2024-01-15"
            }
          ]
        };
      default:
        return null;
    }
  };

  const categoryData = category ? getCategoryPosts(category) : null;

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`${categoryData.title} - Travel Blog | Locator App`}</title>
        <meta name="description" content={categoryData.description} />
        <meta property="og:title" content={`${categoryData.title} - Travel Blog | Locator App`} />
        <meta property="og:description" content={categoryData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://locator.ltd/blog/category/${category}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${categoryData.title} - Travel Blog | Locator App`} />
        <meta name="twitter:description" content={categoryData.description} />
        <link rel="canonical" href={`https://locator.ltd/blog/category/${category}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "headline": categoryData.title,
            "description": categoryData.description,
            "publisher": {
              "@type": "Organization",
              "name": "Locator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://locator.ltd/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://locator.ltd/blog/category/${category}`
            },
            "about": {
              "@type": "Thing",
              "name": categoryData.title,
              "description": categoryData.description
            }
          })}
        </script>
      </Helmet>

      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-4xl">            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <header>
                <h1 className="text-4xl font-bold mb-6">{categoryData.title}</h1>
                <p className="text-xl text-muted-foreground mb-12">
                  {categoryData.description}
                </p>
              </header>
              
              <div className="space-y-8" role="feed" aria-label={`${categoryData.title} posts`}>
                {categoryData.posts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <time dateTime={post.date} className="text-sm text-muted-foreground">{post.date}</time>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogCategory;
