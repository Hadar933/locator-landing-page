import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { NavigationBar } from "./NavigationBar";
import { ProductHuntBadge } from "@/components/ProductHuntBadge";
import { VideoPlayer } from "./VideoPlayer";

export const Hero = () => {
  return (
    <>
      <NavigationBar />
      <section className="min-h-[80vh] flex items-center justify-center px-4 pt-28 md:pt-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.2]">
                Save Places you Love
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl text-center">
                Found a blog with food recommendations? a social media post with a must-visit cafe? 
                Just toss those to Locator and boom - they're on a map. It's perfect for trip planning 
                when recommendations pile up, or just when you want to save findings in a useful way.
              </p>
              <div className="flex flex-col items-center gap-6">
                <StoreButtons />
                <p className="text-sm text-muted-foreground">
                  Join thousands of travelers, foodies, and explorers using Locator
                </p>
                <div className="w-full max-w-xl">
                  <ProductHuntBadge />
                </div>
              </div>
            </motion.div>

            {/* Right column - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-start justify-center w-fit mx-auto p-6 rounded-3xl bg-gradient-to-b from-blue-50/50 to-white shadow-xl h-full"
            >
              <VideoPlayer />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};