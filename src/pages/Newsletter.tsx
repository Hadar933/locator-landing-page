import { EmailSignup } from "@/components/EmailSignup";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container">
          <Button
            variant="ghost"
            asChild
            className="mb-12 mt-8 gap-2"
          >
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <section className="py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-8 animate-fade-up">
              <h1 className="text-4xl font-bold mb-4">Stay Updated</h1>
              <p className="text-lg text-muted-foreground">
                Sign up to receive updates about new features and our iOS launch.
              </p>
            </div>
            <EmailSignup className="animate-fade-in" />
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Newsletter;