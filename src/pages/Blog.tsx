import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Blog = () => {
  const blogCategories = [
    {
      title: "Travel Guides",
      description: "Discover hidden gems and must-visit locations around the world",
      slug: "travel-guides",
      posts: [
        {
          title: "Phuket Local Guide: From Patong to Hidden Beaches",
          slug: "phuket-local-guide",
          excerpt: "A laid-back guide to Phuket's best spots - from serene beaches to vibrant nightlife",
          date: "2024-12-30"
        }
      ]
    },
    {
      title: "Food & Restaurants",
      description: "Curated lists of the best dining spots in popular destinations",
      slug: "food-restaurants",
      posts: [
        {
          title: "Arugam Bay Food Guide: Local Gems & Hidden Spots",
          slug: "arugam-bay-food-guide",
          excerpt: "A casual food lover's guide to the best restaurants in Sri Lanka's surf paradise",
          date: "2024-12-31"
        }
      ]
    },
    {
      title: "City Living",
      description: "Local recommendations for urban explorers and city dwellers",
      slug: "city-living",
      comingSoon: true
    },
    {
      title: "Travel Planning",
      description: "Tips and tricks for organizing your travel itineraries",
      slug: "travel-planning",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Travel & Food Blog | Locator App</title>
        <meta name="description" content="Discover curated travel guides and food recommendations from around the world. Expert tips for travelers and food enthusiasts." />
        <meta property="og:title" content="Travel & Food Blog | Locator App" />
        <meta property="og:description" content="Discover curated travel guides and food recommendations from around the world." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://locator.app/blog" />
        <link rel="canonical" href="https://locator.app/blog" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Locator Travel & Food Blog",
            "description": "Discover curated travel guides and food recommendations from around the world",
            "publisher": {
              "@type": "Organization",
              "name": "Locator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://locator.app/logo.png"
              }
            },
            "blogPost": blogCategories
              .filter(category => !category.comingSoon)
              .flatMap(category => category.posts || [])
              .map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "datePublished": post.date,
                "url": `https://locator.app/blog/${post.slug}`
              }))
          })}
        </script>
      </Helmet>

      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-6xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link to="/">
                <Button variant="ghost">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">Travel & Food Recommendations</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Discover curated guides and recommendations for travelers and food enthusiasts
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="feed" aria-label="Blog categories">
                {blogCategories.map((category, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{category.title}</CardTitle>
                        <p className="text-muted-foreground">{category.description}</p>
                      </CardHeader>
                      <CardContent>
                        {category.comingSoon ? (
                          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            Coming Soon
                          </span>
                        ) : (
                          <div className="space-y-4">
                            {category.posts?.map((post, postIndex) => (
                              <Link 
                                key={postIndex}
                                to={`/blog/${post.slug}`}
                                className="block p-4 rounded-lg hover:bg-accent transition-colors"
                              >
                                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                                <p className="text-muted-foreground text-sm mb-2">{post.excerpt}</p>
                                <time dateTime={post.date} className="text-sm text-muted-foreground">{post.date}</time>
                              </Link>
                            ))}
                            <Link to={`/blog/category/${category.slug}`}>
                              <Button variant="secondary" className="w-full mt-4">
                                See More
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>

              <aside className="mt-16 p-8 bg-blue-50 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Why Use Locator for Your Adventures?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2" role="img" aria-label="target">🎯</span>
                    <span>Save locations instantly from any social media platform or website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" role="img" aria-label="robot">🤖</span>
                    <span>AI-powered location extraction saves you time and effort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" role="img" aria-label="map">🗺️</span>
                    <span>Organize places on an interactive map for better trip planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" role="img" aria-label="mobile">📱</span>
                    <span>Access your saved places anywhere, anytime on your Android device</span>
                  </li>
                </ul>
              </aside>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;