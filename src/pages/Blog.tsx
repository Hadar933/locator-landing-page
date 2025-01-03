import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import BlogMap from "@/components/blog/BlogMap";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Travel & Food Blog | Locator App</title>
        <meta 
          name="description" 
          content="Discover curated travel guides and food recommendations from around the world. Expert tips for travelers and food enthusiasts." 
        />
        <meta property="og:title" content="Travel & Food Blog | Locator App" />
        <meta 
          property="og:description" 
          content="Discover curated travel guides and food recommendations from around the world." 
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://locator.app/blog" />
        <link rel="canonical" href="https://locator.app/blog" />
      </Helmet>

      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">Explore Our Travel Stories</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Click on the markers to discover local insights and recommendations from around the world
              </p>
              
              <BlogMap />

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