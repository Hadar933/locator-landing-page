import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { BurgerMenu } from "./BurgerMenu";

export const Hero = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-6xl relative">
        <div className="absolute top-4 right-4">
          <BurgerMenu />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-blue-600 font-semibold mb-4 block">AI-Powered Location Saving</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            Save & Organize Places with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Extract and save locations from any content across the internet. Our AI reads blog posts, articles, and websites to automatically identify and organize places for you.
          </p>
          <StoreButtons />
        </motion.div>
      </div>
    </section>
  );
};