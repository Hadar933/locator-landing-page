import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";

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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-2">
              <img 
                src="/lovable-uploads/de8d0f60-8ffc-4ea2-9f86-f4f56f972f5a.png" 
                alt="Download QR Code" 
                className="w-full h-full object-contain"
              />
            </div>
            <StoreButtons />
          </div>
        </motion.div>
      </div>
    </section>
  );
};