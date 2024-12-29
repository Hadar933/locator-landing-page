import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="text-purple-600 font-semibold mb-4 block">AI-Powered Location Saving</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Save & Organize Places with AI
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Extract and save locations from any content across the internet. Our AI reads blog posts, articles, and websites to automatically identify and organize places for you.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all hover:gap-4 mb-8">
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/lovable-uploads/eabb6feb-8829-456b-88dd-626a71aaf64b.png"
              alt="Save-it App Interface"
              className="w-full h-auto max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};