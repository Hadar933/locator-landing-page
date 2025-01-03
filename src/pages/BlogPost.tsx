import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { posts } from "@/content/blog/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <BlogSEO 
        title={post.title}
        description={post.description}
        author={post.author}
        publishDate={post.publishDate}
        modifiedDate={post.modifiedDate}
        slug={slug || ''}
        image={post.image}
      />
      
      <main className="flex-grow">
        <article className="py-24">
          <div className="container max-w-4xl">
            <BlogHeader 
              title={post.title}
              publishDate={post.publishDate}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;