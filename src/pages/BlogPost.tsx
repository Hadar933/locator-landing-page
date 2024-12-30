import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();

  const phuketGuide = {
    title: "Phuket Local Guide: From Patong to Hidden Beaches",
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
  };

  if (slug !== 'phuket-local-guide') {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
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
              <h1 className="text-4xl font-bold mb-6">{phuketGuide.title}</h1>
              <div 
                className="prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: phuketGuide.content }}
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