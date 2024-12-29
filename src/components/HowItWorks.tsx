import { motion } from "framer-motion";
import { Smartphone, Search, BookMarked, Map } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Download the App",
      description: "Get started by downloading Locator from the Play Store"
    },
    {
      icon: Search,
      title: "Browse & Discover",
      description: "Find interesting places across the web or use our search"
    },
    {
      icon: BookMarked,
      title: "Save Instantly",
      description: "One tap to save locations with AI-powered extraction"
    },
    {
      icon: Map,
      title: "Explore Places",
      description: "Access your saved locations anytime, anywhere"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">Get started in just a few simple steps</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-purple-100 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};