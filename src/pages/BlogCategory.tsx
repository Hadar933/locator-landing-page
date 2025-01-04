import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { blogCategories } from "@/content/blog/categories";

const BlogCategory = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  
  // Find the category data from our blogCategories
  const categoryData = blogCategories.find(
    cat => cat.slug === country?.toLowerCase()
  );

  // If category doesn't exist, redirect to blog page
  useEffect(() => {
    if (!categoryData) {
      navigate('/blog');
    }
  }, [categoryData, navigate]);

  if (!categoryData) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`${categoryData.title} Travel Guides | Locator App`}</title>
        <meta name="description" content={categoryData.description} />
        <meta property="og:title" content={`${categoryData.title} Travel Guides | Locator App`} />
        <meta property="og:description" content={categoryData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://locator.app/blog/${country}`} />
        <link rel="canonical" href={`https://locator.app/blog/${country}`} />
      </Helmet>

      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-4xl">            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <header className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                    ← Back to Blog
                  </Link>
                </div>
                <h1 className="text-4xl font-bold flex items-center gap-2 mb-4">
                  <span className="text-3xl">{categoryData.flag}</span>
                  {categoryData.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {categoryData.description}
                </p>
              </header>
              
              <div className="space-y-8" role="feed" aria-label={`${categoryData.title} posts`}>
                {categoryData.posts?.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <Link to={`/blog/${country}/${post.slug}`}>
                      <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <time dateTime={post.date} className="text-sm text-muted-foreground">
                        {post.date}
                      </time>
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