import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { posts } from "@/content/blog/posts";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
            <div className="mb-8 overflow-hidden rounded-lg border">
              <AspectRatio ratio={21/9}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>

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

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Locations Map</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1VR1lzX_5g5Pv_JIwEjKa3MYwU_5IXIU&ehbc=2E312F"
                    width="100%"
                    height="480"
                    className="rounded-lg border"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;