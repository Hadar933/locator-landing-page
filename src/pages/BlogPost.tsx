import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();

  const posts = {
    "phuket-local-guide": {
    title: "Phuket Local Guide: From Patong to Hidden Beaches",
    description: "A laid-back guide to Phuket's best spots - from serene beaches to vibrant nightlife. Discover local recommendations for beaches, markets, landmarks, and nightlife spots in Phuket, Thailand.",
    publishDate: "2024-12-30",
    modifiedDate: "2024-12-30",
    author: "Locator Team",
    content: `
      <article class="prose lg:prose-xl max-w-none">
        <p class="lead">Hey there! If you're planning a trip to Phuket, you're in for a treat. I recently explored the Patong Beach area and wanted to share some cool spots that might help you plan your adventure. From pristine beaches to vibrant markets, here's my take on what's worth checking out.</p>

        <h2>The Beaches (Because That's Why We're Here)</h2>
        
        <h3>Freedom Beach</h3>
        <p>This is probably Phuket's best-kept secret. It's a bit tricky to get to, which keeps the crowds away - and that's exactly what makes it special. You can either take a longtail boat or brave the steep path down. The effort is totally worth it for the crystal-clear water and peaceful vibe.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0461453465386!2d98.27439087507825!3d7.8741616925985385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503a6e79d34f85%3A0xe25b4b9d1c2e01d4!2sFreedom%20Beach!5e0!3m2!1sen!2sth!4v1710901234567!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h3>Karon Beach</h3>
        <p>If you're looking for a more laid-back alternative to Patong, Karon is your spot. The beach is huge, so you'll always find your own space. The water's usually calmer here, making it great for swimming. Pro tip: catch the sunset here - it's usually less crowded than Patong.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7018557174886!2d98.29601097507773!3d7.820000093690371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502af61b6c52f5%3A0x98d49ee68d75bb72!2sKaron%20Beach!5e0!3m2!1sen!2sth!4v1710901234567!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h3>Patong Beach</h3>
        <p>The famous one! Yes, it's touristy, but there's a reason for that. The energy here is unmatched, especially around sunset when everyone gathers to watch the sky change colors. It's not just about the beach - the whole area comes alive at night.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3012557174886!2d98.28601097507773!3d7.890000093690371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502af61b6c52f5%3A0x98d49ee68d75bb72!2sPatong%20Beach!5e0!3m2!1sen!2sth!4v1710901234567!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h2>Local Culture & Shopping</h2>

        <h3>Wat Karon Market</h3>
        <p>This is where you'll find the real local vibe. The market has everything from fresh fruit to street food. It's not as touristy as some other markets, which means better prices and more authentic food. Try the mango sticky rice - you won't regret it!</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8018557174886!2d98.30601097507773!3d7.810000093690371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502af61b6c52f5%3A0x98d49ee68d75bb72!2sWat%20Karon%20Market!5e0!3m2!1sen!2sth!4v1710901234567!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h3>Jungceylon Mall</h3>
        <p>When you need a break from the heat, Jungceylon is your air-conditioned sanctuary. It's got everything from local boutiques to international brands, plus a really good food court with Thai and international options. Perfect for those occasional rainy days!</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4018557174886!2d98.29601097507773!3d7.880000093690371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502af61b6c52f5%3A0x98d49ee68d75bb72!2sJungceylon%20Shopping%20Center!5e0!3m2!1sen!2sth!4v1710901234567!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h2>Must-See Landmarks</h2>

        <h3>Big Buddha Phuket</h3>
        <p>You can't miss this one - literally, you can see it from miles away! The view from up here is incredible, especially early morning or late afternoon. Remember to dress respectfully (they provide cover-ups if needed). The drive up is an adventure in itself!</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9018557174886!2d98.31601097507773!3d7.800000093690371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502af61b6c52f5%3A0x98d49ee68d75bb72!2sBig%20Buddha%20Phuket!5e0!3m2!1sen!2sth!4v1710901234567!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h2>Nightlife</h2>

        <h3>Illuzion Club</h3>
        <p>If you're into nightlife, Illuzion is Patong's premier spot. It's massive, with multiple rooms playing different music styles. Even if clubbing isn't your thing, it's worth checking out for the impressive light shows and atmosphere. Just remember - drinks here are pricier than at smaller bars.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5018557174886!2d98.28601097507773!3d7.870000093690371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502af61b6c52f5%3A0x98d49ee68d75bb72!2sIlluzion%20Phuket!5e0!3m2!1sen!2sth!4v1710901234567!5m2!1sen!2sth" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h2>Quick Tip About Locator</h2>
        <p>By the way, I used Locator to save all these spots while I was researching my trip. It made it super easy to keep track of everything and plan my daily routes. You can save places directly from Google Maps, Instagram, or any website, and it organizes everything on a map for you. Really helped me visualize how close (or far) everything was from each other!</p>
      </article>
    `
    },
    "coron-nature-guide": {
      title: "Coron Nature Guide: Hidden Lakes and Marine Wonders",
      description: "Discover the natural wonders of Coron, Philippines - from therapeutic hot springs to pristine lakes and vibrant coral gardens. A comprehensive guide to the best nature spots in this tropical paradise.",
      publishDate: "2024-12-29",
      modifiedDate: "2024-12-29",
      author: "Locator Team",
      content: `
        <article class="prose lg:prose-xl max-w-none">
          <p class="lead">Welcome to Coron, a slice of paradise in the Philippines! This guide will take you through some of the most breathtaking natural wonders this island has to offer. From therapeutic hot springs to crystal-clear lakes and vibrant marine life, here's your guide to experiencing Coron's natural beauty.</p>

          <h2>Therapeutic Waters</h2>
          
          <h3>Maquinit Hot Spring</h3>
          <p>One of the few saltwater hot springs in the world, Maquinit offers a unique therapeutic experience. The water maintains a constant temperature of about 39-40°C (102-104°F), perfect for soothing tired muscles after a day of island hopping. The spring is surrounded by mangroves, creating a serene natural setting.</p>
          <div class="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.8018557174886!2d120.2043895!3d11.9940695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f51f1a640d85%3A0x88c2b64e14517522!2sMaquinit%20Hot%20Spring!5e0!3m2!1sen!2sph!4v1710901234567!5m2!1sen!2sph" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <h2>Marine Wonders</h2>

          <h3>Siete Pecados Marine Park</h3>
          <p>A cluster of seven small limestone islands, Siete Pecados is a snorkeler's paradise. The area is teeming with diverse marine life, including colorful coral formations, tropical fish, and sometimes even sea turtles. The shallow waters make it perfect for beginners while still offering plenty to explore for experienced snorkelers.</p>
          <div class="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.5018557174886!2d120.2143895!3d11.9840695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f51f1a640d85%3A0x88c2b64e14517522!2sSiete%20Pecados%20Marine%20Park!5e0!3m2!1sen!2sph!4v1710901234567!5m2!1sen!2sph" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <h3>Twin Peaks Coral Garden</h3>
          <p>This underwater garden is a testament to the Philippines' rich marine biodiversity. The site features two coral-covered limestone peaks descending into crystal-clear waters. Snorkelers and divers can spot various species of fish, giant clams, and beautiful coral formations.</p>
          <div class="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.3018557174886!2d120.2243895!3d11.9740695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f51f1a640d85%3A0x88c2b64e14517522!2sTwin%20Peaks%20Coral%20Garden!5e0!3m2!1sen!2sph!4v1710901234567!5m2!1sen!2sph" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <h2>Pristine Lakes</h2>

          <h3>Kayangan Lake View Deck</h3>
          <p>Often called the cleanest lake in Asia, Kayangan Lake is surrounded by towering limestone cliffs. The view deck offers one of the most photographed views in Coron. The lake itself is a mix of fresh and saltwater, creating a unique ecosystem. Don't miss the underwater rock formations visible through the crystal-clear water.</p>
          <div class="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.4018557174886!2d120.2343895!3d11.9640695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f51f1a640d85%3A0x88c2b64e14517522!2sKayangan%20Lake%20View%20Deck!5e0!3m2!1sen!2sph!4v1710901234567!5m2!1sen!2sph" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <h3>Barracuda Lake</h3>
          <p>Named after a giant barracuda that once lived in its waters, this lake is famous for its thermocline - a dramatic temperature change between layers of water. Divers can experience warm surface water suddenly giving way to cooler depths. The limestone walls extending underwater create an otherworldly atmosphere.</p>
          <div class="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.2018557174886!2d120.2443895!3d11.9540695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f51f1a640d85%3A0x88c2b64e14517522!2sBarracuda%20Lake!5e0!3m2!1sen!2sph!4v1710901234567!5m2!1sen!2sph" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <h2>Beach Paradise</h2>

          <h3>CYC Beach</h3>
          <p>CYC (Coron Youth Club) Beach is one of the few public beaches in the area. This pristine stretch of white sand is perfect for swimming and sunbathing. The shallow waters and gentle waves make it ideal for families. The beach is surrounded by native trees providing natural shade.</p>
          <div class="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.1018557174886!2d120.2543895!3d11.9440695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f51f1a640d85%3A0x88c2b64e14517522!2sCYC%20Beach!5e0!3m2!1sen!2sph!4v1710901234567!5m2!1sen!2sph" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <h2>Travel Tips</h2>
          <ul>
            <li>Best time to visit: December to March (dry season)</li>
            <li>Bring reef-safe sunscreen to protect the marine environment</li>
            <li>Book island hopping tours in advance during peak season</li>
            <li>Stay hydrated - the tropical climate can be intense</li>
            <li>Respect local customs and environmental regulations</li>
          </ul>

          <h2>Using Locator in Coron</h2>
          <p>Planning to visit these spots? Save them all in Locator for easy access during your trip. You can organize them by categories (beaches, lakes, diving spots) and even add your own notes and photos. It's particularly useful for planning island hopping routes since you can see all locations on a single map.</p>

          <div class="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3>Additional Resources</h3>
            <ul>
              <li><a href="https://tourism.gov.ph" target="_blank" rel="noopener noreferrer">Philippines Department of Tourism <ExternalLink className="inline h-4 w-4" /></a></li>
              <li><a href="https://divephilippines.com.ph" target="_blank" rel="noopener noreferrer">Diving Philippines <ExternalLink className="inline h-4 w-4" /></a></li>
            </ul>
          </div>
        </article>
      `
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.title} | Locator Travel Blog</title>
        <meta name="description" content={post.description} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://locator.ltd/blog/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <link rel="canonical" href={`https://locator.ltd/blog/${slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://locator.ltd"
            },
            "datePublished": post.publishDate,
            "dateModified": post.modifiedDate,
            "publisher": {
              "@type": "Organization",
              "name": "Locator",
              "url": "https://locator.ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://locator.ltd/lovable-uploads/47fe2b25-d83e-46e5-bb42-043d91389daf.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://locator.ltd/blog/${slug}`
            },
            "keywords": "Coron, Philippines, travel guide, hot springs, lakes, beaches, marine life, island hopping, nature, tourism",
            "articleSection": "Travel Guides"
          })}
        </script>
      </Helmet>
      
      <main className="flex-grow">
        <article className="py-24">
          <div className="container max-w-4xl">
            <div className="flex justify-between items-center mb-8">
              <Link to="/blog">
                <Button variant="ghost">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              <a 
                href="https://locator.ltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                Visit Locator <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
              <div className="mb-8 text-muted-foreground">
                <time dateTime={post.publishDate}>
                  Published on {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
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
