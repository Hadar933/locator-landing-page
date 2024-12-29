import { motion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";

export const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Start Saving Places?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who are already organizing their favorite locations with Locator
          </p>
          <StoreButtons />
        </motion.div>
      </div>
    </section>
  );
};