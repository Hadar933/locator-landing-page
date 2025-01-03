import { EmailSignup } from "@/components/EmailSignup";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-16 bg-secondary">
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