import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-purple-600 font-semibold mb-4 block">AI-Powered Location Saving</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Save & Organize Places with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Extract and save locations from any content across the internet. Our AI reads blog posts, articles, and websites to automatically identify and organize places for you.
          </p>
          <a 
            href="https://play.google.com/store/apps/details?id=locator.android" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition-all hover:gap-4 mx-auto"
          >
            <span>Get it on Google Play</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};