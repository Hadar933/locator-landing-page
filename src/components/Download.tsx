import { motion } from "framer-motion";

export const Download = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Download Locator</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-48 h-48 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">QR Code</span>
            </div>
            <div className="w-48 h-16 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">Play Store Button</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};