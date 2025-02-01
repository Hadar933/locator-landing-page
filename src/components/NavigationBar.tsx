import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { BurgerMenu } from "./BurgerMenu";
import { useIsMobile } from "@/hooks/use-mobile";

export const NavigationBar = () => {
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
      initial={{ y: 0 }}
      animate={{
        y: 0,
        opacity: scrollY.get() > 100 ? 1 : 0.95,
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
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img 
              src="/lovable-uploads/47fe2b25-d83e-46e5-bb42-043d91389daf.png" 
              alt="Locator Logo" 
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg">Locator</span>
          </Link>
          
          {isMobile ? (
            <BurgerMenu />
          ) : (
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/newsletter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Newsletter
              </Link>
              <Link to="/free-tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Free Tools
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};