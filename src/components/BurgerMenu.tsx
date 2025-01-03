import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-accent rounded-md">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col gap-6 mt-8">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors py-1">
              About
            </Link>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <div className="flex flex-col gap-1">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors py-1">
                Privacy Policy
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <div className="flex flex-col gap-1">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors py-1">
                Contact Us
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors py-1">
                Blog
              </Link>
              <Link to="/newsletter" className="text-muted-foreground hover:text-primary transition-colors py-1">
                Newsletter
              </Link>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};