import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { posts, BlogPost as BlogPostType, BlogLocation } from "@/content/blog/posts";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';

const renderLocation = (location: BlogLocation, index: number, post: BlogPostType) => {
  // Check if we need to render CTA after this location
  const shouldRenderCTA = post.callToAction && post.callToAction.position === index;

  return (
    <div key={index}>
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-4">{location.name}</h2>
        
        <div className="prose lg:prose-xl max-w-none mb-6">
          <p>{location.contentSections.introduction}</p>
          
          {location.contentSections.customInfo && (
            <ul className="list-disc pl-6 space-y-2 my-4">
              {location.contentSections.customInfo.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          )}
          
          <div className="my-4">
            <strong>Best Time to Visit:</strong>
            <p>{location.contentSections.bestTimeToVisit}</p>
          </div>
        </div>

        <div className="mt-6">
          <a 
            href={location.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline mb-4 inline-block"
          >
            View on Google Maps
          </a>
        </div>

        <div className="mt-4 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 h-[450px]">
          <div 
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: location.contentSections.mapEmbed }}
          />
        </div>
      </div>

      {shouldRenderCTA && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="my-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">{post.callToAction.text}</h3>
          <a 
            href={post.callToAction.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {post.callToAction.buttonText}
          </a>
        </motion.div>
      )}
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts] as BlogPostType;

  if (!post) {
    return <div>Post not found</div>;
  }

  // Extract country from the URL or use a default
  const country = post.country || 'philippines'; // Default to philippines if not specified

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
        country={country}
      />
      
      <main className="flex-grow">
        <article className="py-24">
          <div className="container max-w-4xl">
            <div className="mb-12">
              <Link to="/blog">
                <Button variant="ghost" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>

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
                {post.content && (
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                )}
                {post.locations?.map((location, index) => renderLocation(location, index, post))}
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