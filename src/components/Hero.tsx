import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-between px-4 py-16 container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="flex-1 text-left md:pr-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Save & Organize Places with AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Save and organize amazing places from across the internet. Let AI extract locations
            from blog posts, social media, and more.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src="/lovable-uploads/99ffacfe-821d-4eb5-942c-3d123f671149.png"
            alt="Save and organize places with AI"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};