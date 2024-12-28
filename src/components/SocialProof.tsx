import { motion } from "framer-motion";

export const SocialProof = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">Trusted by travelers and explorers worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <span className="text-2xl font-bold text-gray-400">100K+ Users</span>
            <span className="text-2xl font-bold text-gray-400">4.8★ Rating</span>
            <span className="text-2xl font-bold text-gray-400">50+ Countries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};