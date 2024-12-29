import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogCategories = [
    {
      title: "Travel Guides",
      description: "Discover hidden gems and must-visit locations around the world",
      comingSoon: true
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogCategories.map((category, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    {category.comingSoon && (
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Coming Soon
                      </span>
                    )}
                  </motion.article>
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