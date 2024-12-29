import { motion } from "framer-motion";
import { Share2, MapPin, Map, ListPlus, FileText, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const withoutLocator = [
    {
      icon: FileText,
      title: "Find Recommendations",
      description: "Discover a blog post about '10 Best Coffee Shops in NYC'"
    },
    {
      icon: MapPin,
      title: "Manual Search",
      description: "Search each place individually on Google Maps"
    },
    {
      icon: ListPlus,
      title: "Create Lists",
      description: "Manually save each location to your personal list"
    }
  ];

  const withLocator = [
    {
      icon: Share2,
      title: "Share Content",
      description: "Simply share the blog post to Locator"
    },
    {
      icon: Sparkles,
      title: "AI Extraction",
      description: "AI automatically extracts all location coordinates"
    },
    {
      icon: Map,
      title: "Instant Map View",
      description: "All places instantly appear on your personal map"
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
          <p className="text-xl text-muted-foreground">See the difference Locator makes</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Without Locator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-500">Without Locator</h3>
              <p className="text-muted-foreground mt-2">The traditional way</p>
            </div>
            {withoutLocator.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
            <div className="text-center text-muted-foreground">
              ⏱️ Takes 15-20 minutes
            </div>
          </motion.div>

          {/* With Locator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-600">With Locator</h3>
              <p className="text-muted-foreground mt-2">The smart way</p>
            </div>
            {withLocator.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
            <div className="text-center text-muted-foreground">
              ⚡ Takes less than 1 minute
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};