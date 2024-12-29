import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Start Saving Places?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of users who are already organizing their favorite locations with Locator
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-2">
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