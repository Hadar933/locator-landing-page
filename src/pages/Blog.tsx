import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BlogCategoryCard } from "@/components/blog/BlogCategoryCard";
import { blogCategories } from "@/content/blog/categories";
import { posts } from "@/content/blog/posts";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // First, get all posts from all categories for searching
  const allPosts = Object.entries(posts).map(([slug, post]) => ({
    slug,
    title: post.title,
    description: post.description,
    content: post.content,
    category: post.category,
    country: post.country
  }));

  // Search through posts first
  const matchingPosts = searchQuery ? allPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.content && post.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (post.country && post.country.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase()))
  ) : [];

  // If no direct post matches, filter categories
  const filteredCategories = searchQuery && !matchingPosts.length ? blogCategories.filter(category => {
    const matchesCategory = 
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPosts = category.posts?.some(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return matchesCategory || matchesPosts;
  }) : blogCategories;

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
              
              {searchQuery && matchingPosts.length > 0 ? (
                <div className="space-y-6" role="feed" aria-label="Search results">
                  {matchingPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                        <p className="text-muted-foreground mb-2">{post.description}</p>
                        {post.country && (
                          <p className="text-sm text-muted-foreground">
                            Country: {post.country}
                          </p>
                        )}
                      </Link>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="feed" aria-label="Blog categories">
                  {filteredCategories.map((category, index) => (
                    <BlogCategoryCard key={category.slug} category={category} index={index} />
                  ))}
                </div>
              )}

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
