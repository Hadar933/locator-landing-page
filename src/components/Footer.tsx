import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/47fe2b25-d83e-46e5-bb42-043d91389daf.png" 
              alt="Locator Logo" 
              className="w-12 h-12 mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Save and organize amazing places with AI-powered location extraction
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/data-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Data Policy
                </Link>
              </li>
              <li><a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="text-sm text-center text-muted-foreground">
            © 2024 Locator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};