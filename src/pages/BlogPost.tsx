import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { posts, BlogPost as BlogPostType } from "@/content/blog/posts";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts] as BlogPostType;

  if (!post) {
    return <div>Post not found</div>;
  }

  const renderLocation = (location: BlogPostType["locations"][0], index: number) => {
    return (
      <section key={location.name} className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
        
        <p className="mb-6">{location.contentSections.introduction}</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Highlights</h3>
          <ul className="list-disc pl-6 space-y-2">
            {location.contentSections.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
          <p>{location.contentSections.bestTimeToVisit}</p>
        </div>

        <div className="rounded-lg overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: location.contentSections.mapEmbed }} />
        </div>

        {post.callToAction && index === post.callToAction.position && (
          <div className="my-12 p-6 bg-blue-50 rounded-lg text-center">
            <p className="text-lg mb-4">{post.callToAction.text}</p>
            <a
              href={post.callToAction.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {post.callToAction.buttonText}
            </a>
          </div>
        )}
      </section>
    );
  };

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
              <div className="prose lg:prose-xl max-w-none">
                {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
                {post.locations?.map((location, index) => renderLocation(location, index))}
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