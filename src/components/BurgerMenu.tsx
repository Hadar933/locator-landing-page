import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
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
        <nav className="flex flex-col gap-6 mt-20">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <SheetClose asChild>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors py-1">
                About
              </Link>
            </SheetClose>
          </div>
          
          <div>
            <SheetClose asChild>
              <Link to="/free-tools" className="block">
                <h3 className="font-semibold mb-2 hover:text-primary transition-colors">Free Tools</h3>
              </Link>
            </SheetClose>
            <div className="flex flex-col gap-1">
              <SheetClose asChild>
                <Link to="/free-tools/ai-recommendations" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  AI Travel Recommendations
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/free-tools/flight-calculator" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  Flights Calculator
                </Link>
              </SheetClose>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <div className="flex flex-col gap-1">
              <SheetClose asChild>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  Privacy Policy
                </Link>
              </SheetClose>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <div className="flex flex-col gap-1">
              <SheetClose asChild>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  Contact Us
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  Blog
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/newsletter" className="text-muted-foreground hover:text-primary transition-colors py-1">
                  Newsletter
                </Link>
              </SheetClose>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};