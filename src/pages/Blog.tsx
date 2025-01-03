import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { BlogCategoryCard } from "@/components/blog/BlogCategoryCard";
import { blogCategories } from "@/content/blog/categories";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCategories = blogCategories.filter(category => {
    const matchesCategory = 
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPosts = category.posts?.some(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return matchesCategory || matchesPosts;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Travel & Food Blog | Locator App</title>
        <meta 
          name="description" 
          content="Discover curated travel guides and food recommendations from around the world. Expert tips for travelers and food enthusiasts." 
        />
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
              <p className="text-xl text-muted-foreground mb-8">
                Discover curated guides and recommendations from around the world
              </p>

              <div className="relative mb-8">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search countries, places, or food recommendations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="feed" aria-label="Blog categories">
                {filteredCategories.map((category, index) => (
                  <BlogCategoryCard key={category.slug} category={category} index={index} />
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
