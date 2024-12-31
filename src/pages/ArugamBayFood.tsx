import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const ArugamBayFood = () => {
  const arugamBayGuide = {
    title: "Arugam Bay Food Guide: Local Gems & Hidden Spots",
    description: "Discover the best restaurants and cafes in Arugam Bay, Sri Lanka. From authentic local cuisine to wood-fired pizzas, burgers, and fresh smoothies - a casual food lover's guide to Sri Lanka's surf paradise.",
    publishDate: "2024-12-31",
    modifiedDate: "2024-12-31",
    author: "Locator Team",
    content: `
      <article class="prose lg:prose-xl max-w-none">
        <p class="lead">Hey food lovers! If you're heading to Arugam Bay, you're in for a treat. This surf town isn't just about catching waves - it's got some seriously good eats. Here's my personal rundown of the best spots to grab a bite, from pizza to burgers to local Sri Lankan cuisine.</p>

        <h2>Best Pizza in Town</h2>
        
        <h3>Cili Hotel & Pizza Restaurant</h3>
        <p>If you're craving pizza in Arugam Bay, this is your spot. The wood-fired pizzas here are the real deal, and the casual vibe makes it perfect for post-surf meals. They've got this amazing seafood pizza that's worth trying - fresh catches from the bay make all the difference.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5461453465386!2d81.83439087507825!3d6.8341616925985385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5bd6755555555%3A0x1234567890abcdef!2sCili%20Hotel%20%26%20Pizza%20Restaurant!5e0!3m2!1sen!2slk!4v1710901234567!5m2!1sen!2slk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h2>Local Flavors</h2>

        <h3>Mama's Restaurant</h3>
        <p>Want to try authentic Sri Lankan food? Mama's is where it's at. Their rice and curry is the real deal - the kind of food that makes you understand why Sri Lankan cuisine is so special. The dhal curry here is particularly good, and they're super friendly with dietary restrictions.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5461453465386!2d81.83439087507825!3d6.8341616925985385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5bd6755555555%3A0x1234567890abcdef!2sMamas%20Restaurant!5e0!3m2!1sen!2slk!4v1710901234567!5m2!1sen!2slk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h3>The Spice Trail</h3>
        <p>A bit fancier than your typical beach spot, but still totally casual. Their seafood curry is amazing - super fresh and perfectly spiced. If you're not into spicy food, just let them know, and they'll adjust the heat level for you.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5461453465386!2d81.83439087507825!3d6.8341616925985385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5bd6755555555%3A0x1234567890abcdef!2sThe%20Spice%20Trail!5e0!3m2!1sen!2slk!4v1710901234567!5m2!1sen!2slk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h2>Quick Bites & Comfort Food</h2>

        <h3>Hello Burger</h3>
        <p>Sometimes you just need a good burger, right? Hello Burger's got you covered. Their portions are huge, and they've got this awesome sauce that goes with everything. Perfect for when you're starving after a surf session.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5461453465386!2d81.83439087507825!3d6.8341616925985385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5bd6755555555%3A0x1234567890abcdef!2sHello%20Burger!5e0!3m2!1sen!2slk!4v1710901234567!5m2!1sen!2slk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h3>Squeeze Me</h3>
        <p>Not exactly a restaurant, but you can't miss this juice bar. Their fresh fruit smoothies are perfect for those hot Arugam Bay days. Try their special coconut smoothie - it's basically paradise in a glass.</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5461453465386!2d81.83439087507825!3d6.8341616925985385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5bd6755555555%3A0x1234567890abcdef!2sSqueeze%20Me!5e0!3m2!1sen!2slk!4v1710901234567!5m2!1sen!2slk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h3>Kaffi Coffee Shop</h3>
        <p>Need your morning coffee fix? Kaffi's got some of the best coffee in town. Their iced lattes are perfect for hot days, and they've got some really good breakfast options too. The avocado toast is surprisingly good!</p>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5461453465386!2d81.83439087507825!3d6.8341616925985385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5bd6755555555%3A0x1234567890abcdef!2sKaffi%20Coffee%20Shop!5e0!3m2!1sen!2slk!4v1710901234567!5m2!1sen!2slk" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

        <h2>Quick Tip About Locator</h2>
        <p>By the way, I used Locator to save all these spots while I was exploring Arugam Bay. It's super handy when you're walking around and want to remember a place for later. Just save the location straight from Google Maps or any website, and it'll show up on your personal map. Makes it way easier to plan your meals and remember where all the good spots are!</p>
      </article>
    `
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{arugamBayGuide.title} | Locator Travel Blog</title>
        <meta name="description" content={arugamBayGuide.description} />
        <meta name="author" content={arugamBayGuide.author} />
        <meta property="og:title" content={arugamBayGuide.title} />
        <meta property="og:description" content={arugamBayGuide.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://locator.app/blog/arugam-bay-food" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={arugamBayGuide.title} />
        <meta name="twitter:description" content={arugamBayGuide.description} />
        <link rel="canonical" href="https://locator.app/blog/arugam-bay-food" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": arugamBayGuide.title,
            "description": arugamBayGuide.description,
            "author": {
              "@type": "Organization",
              "name": arugamBayGuide.author
            },
            "datePublished": arugamBayGuide.publishDate,
            "dateModified": arugamBayGuide.modifiedDate,
            "publisher": {
              "@type": "Organization",
              "name": "Locator",
              "logo": {
                "@type": "ImageObject",
                "url": "https://locator.app/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://locator.app/blog/arugam-bay-food"
            }
          })}
        </script>
      </Helmet>

      <main className="flex-grow">
        <article className="py-24">
          <div className="container max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-6">{arugamBayGuide.title}</h1>
              <div className="mb-8 text-muted-foreground">
                <time dateTime={arugamBayGuide.publishDate}>
                  Published on {new Date(arugamBayGuide.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div 
                className="prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: arugamBayGuide.content }}
              />
            </motion.div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArugamBayFood;