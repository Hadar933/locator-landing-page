import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-24">
          <div className="container max-w-3xl">            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
              
              <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-4">
                <Mail className="h-5 w-5" />
                <a href="mailto:locatorapp.ai@gmail.com" className="text-primary hover:underline">
                  locatorapp.ai@gmail.com
                </a>
              </div>
              
              <p className="text-muted-foreground">
                We'd love to hear from you! Drop us an email with any questions, suggestions, or feedback.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;