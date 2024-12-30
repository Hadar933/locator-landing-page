import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogCategories = [
    {
      title: "Travel Guides",
      description: "Discover hidden gems and must-visit locations around the world",
      posts: [
        {
          title: "Phuket Local Guide: From Patong to Hidden Beaches",
          slug: "phuket-local-guide",
          excerpt: "A laid-back guide to Phuket's best spots - from serene beaches to vibrant nightlife",
          date: "2024-03-20"
        }
      ]
    },
    {
      title: "Food & Restaurants",
      description: "Curated lists of the best dining spots in popular destinations",
      comingSoon: true
    },
    {
      title: "City Living",
      description: "Local recommendations for urban explorers and city dwellers",
      comingSoon: true
    },
    {
      title: "Travel Planning",
      description: "Tips and tricks for organizing your travel itineraries",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-4xl">
            <Link to="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">Travel & Food Recommendations</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Discover curated guides and recommendations for travelers and food enthusiasts
              </p>
              
              <div className="grid grid-cols-1 gap-8">
                {blogCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card>
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
                                <time className="text-sm text-muted-foreground">{post.date}</time>
                              </Link>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-blue-50 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Why Use Locator for Your Adventures?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2">🎯</span>
                    <span>Save locations instantly from any social media platform or website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤖</span>
                    <span>AI-powered location extraction saves you time and effort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🗺️</span>
                    <span>Organize places on an interactive map for better trip planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📱</span>
                    <span>Access your saved places anywhere, anytime on your Android device</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;