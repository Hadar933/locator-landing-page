import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

export const NavigationBar = () => {
  const { scrollY } = useScroll();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{
        y: scrollY.get() > 100 ? 0 : -100,
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/47fe2b25-d83e-46e5-bb42-043d91389daf.png" 
              alt="Locator Logo" 
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg">Locator</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/data-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Data Policy
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};