import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg mx-auto"
            >
              <h1 className="text-4xl font-bold mb-8">About Locator</h1>
              
              <p className="mb-6">
                Locator was born out of a shared desire to solve a common frustration: how to save and organize location-based recommendations easily. As travel and food enthusiasts, we—Hadar, a machine learning researcher with a background in robotics and deep time series analysis, and my developer friend, a skilled front-end and automation engineer—decided to tackle this challenge together.
              </p>

              <p className="mb-6">
                We created Locator to make it effortless to save and revisit must-try restaurants, scenic spots, and hidden gems. With AI-powered location extraction and an intuitive map interface, Locator keeps all your favorite places at your fingertips.
              </p>

              <p className="mb-6">
                What started as a personal project has grown into a tool we're excited to share with others who love exploring and discovering as much as we do. Join us in changing the way we save places—so you never lose track of a great recommendation again!
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;