import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const BlogCategory = () => {
  const { category } = useParams();
  
  const getCategoryPosts = (categorySlug: string) => {
    switch(categorySlug) {
      case 'travel-guides':
        return {
          title: "Travel Guides",
          description: "Discover hidden gems and must-visit locations around the world. Expert travel guides and local recommendations for your next adventure.",
          posts: [
            {
              title: "Phuket Local Guide: From Patong to Hidden Beaches",
              slug: "phuket-local-guide",
              excerpt: "A laid-back guide to Phuket's best spots - from serene beaches to vibrant nightlife",
              date: "2024-12-30"
            },
            {
              title: "Coron Nature Guide: Hidden Lakes and Marine Wonders",
              slug: "coron-nature-guide",
              excerpt: "Explore the pristine lakes, hot springs, and coral gardens of Coron, Philippines",
              date: "2024-12-29"
            },
            {
              title: "Karpathos: Greece's Hidden Paradise - Local Guide",
              slug: "karpathos-local-guide",
              excerpt: "Discover the untouched beauty of Karpathos - pristine beaches and authentic Greek culture away from the crowds",
              date: "2024-12-28"
            }
          ]
        };
      case 'food-restaurants':
        return {
          title: "Food & Restaurants",
          description: "Curated lists of the best dining spots in popular destinations. Local food guides and restaurant recommendations from around the world.",
          posts: [
            {
              title: "Arugam Bay Food Guide: Local Gems & Hidden Spots",
              slug: "arugam-bay-food-guide",
              excerpt: "A casual food lover's guide to the best restaurants in Sri Lanka's surf paradise",
              date: "2024-12-31"
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
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link to="/blog">
                <Button variant="ghost">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </nav>
            
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