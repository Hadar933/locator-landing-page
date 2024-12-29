import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-3xl">
            <Link to="/">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-8">Blog</h1>
              
              <p className="text-xl text-muted-foreground mb-4">
                Coming Soon
              </p>
              
              <p className="text-muted-foreground">
                We're working on bringing you amazing travel and food blogs. Stay tuned for curated content about the best places to visit and eat around the world!
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;