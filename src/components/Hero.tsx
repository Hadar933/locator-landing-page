import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { NavigationBar } from "./NavigationBar";

export const Hero = () => {
  return (
    <>
      <NavigationBar />
      <section className="min-h-[40vh] flex items-center justify-center px-4 pt-28 md:pt-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.2]">
              Save Places you Love
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Found a blog with food recommendations? a social media post with a must-visit cafe? Just toss those to Locator and boom - they're on a map. It's perfect for trip planning when recommendations pile up, or just when you want to save findings in a useful way.
            </p>
            <div className="flex flex-col items-center gap-6">
              <StoreButtons />
              <p className="text-sm text-muted-foreground">
                Join thousands of travelers, foodies, and explorers using Locator to save their favorite places
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};