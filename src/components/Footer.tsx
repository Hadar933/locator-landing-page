import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Locator. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/data-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Data Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};