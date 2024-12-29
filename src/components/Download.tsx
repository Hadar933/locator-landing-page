import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Download = () => {
  const navigate = useNavigate();

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
            <div className="flex flex-col gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=locator.android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 hover:opacity-90 transition-opacity"
              >
                <img 
                  src="/lovable-uploads/e69a0935-a169-4e70-b1d8-200d5f622c23.png" 
                  alt="Get it on Google Play" 
                  className="w-full h-auto"
                />
              </a>
              <button
                onClick={() => navigate("/coming-soon")}
                className="w-48 hover:opacity-90 transition-opacity"
              >
                <img 
                  src="/lovable-uploads/6d58cd60-f2f1-4697-8a87-bc7160e9cf66.png" 
                  alt="Download on the App Store" 
                  className="w-full h-auto"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};