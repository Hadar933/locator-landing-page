import { motion } from "framer-motion";
import { Map, Share2, Sparkles } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Map,
      title: "Smart Location Extraction",
      description: "AI automatically detects and saves locations from any text or website"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share your favorite places with friends and family in one click"
    },
    {
      icon: Sparkles,
      title: "Personalized Organization",
      description: "Create custom collections and tags to organize your saved places"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Locator?</h2>
          <p className="text-xl text-muted-foreground">Discover the smart way to save and organize places</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};