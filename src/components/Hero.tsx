import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-between px-4 py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full"
        >
          <div className="flex-1 text-left md:pr-8">
            <span className="text-purple-600 font-semibold mb-4 block">AI-Powered Location Saving</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Save & Organize Places with AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Save and organize amazing places from across the internet. Let AI extract locations
              from blog posts, social media, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src="/lovable-uploads/de8d0f60-8ffc-4ea2-9f86-f4f56f972f5a.png" 
                  alt="Download QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <img 
                  src="/lovable-uploads/47fe2b25-d83e-46e5-bb42-043d91389daf.png" 
                  alt="Locator Logo" 
                  className="w-16 h-16"
                />
                <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all hover:gap-4">
                  <span>Get it on Play Store</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};