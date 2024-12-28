import { motion } from "framer-motion";
import { MapPin, Share2, Map } from "lucide-react";

const features = [
  {
    icon: Share2,
    title: "Share Content",
    description: "Share blog posts, social media content, or any link containing places you want to save.",
  },
  {
    icon: MapPin,
    title: "AI Extraction",
    description: "Our AI automatically extracts and saves location data from your shared content.",
  },
  {
    icon: Map,
    title: "Explore Map",
    description: "View all your saved places on an interactive map, organized and easy to find.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6"
            >
              <feature.icon className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};