import { motion } from "framer-motion";

export const Download = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-12">
            <img 
              src="/lovable-uploads/47fe2b25-d83e-46e5-bb42-043d91389daf.png" 
              alt="Locator Logo" 
              className="w-24 h-24 mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold mb-8">Download Locator</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="/lovable-uploads/de8d0f60-8ffc-4ea2-9f86-f4f56f972f5a.png" 
                alt="Download QR Code" 
                className="w-full h-full object-contain"
              />
            </div>
            <button className="w-48 h-16 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
              <span>Get it on Play Store</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};