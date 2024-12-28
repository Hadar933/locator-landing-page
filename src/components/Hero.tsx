import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Never lose a place again
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Save and organize amazing places from across the internet. Let AI extract locations
          from blog posts, social media, and more.
        </p>
      </motion.div>
    </section>
  );
};