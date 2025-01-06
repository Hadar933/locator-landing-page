import { EmailSignup } from "@/components/EmailSignup";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Stay Updated - Newsletter Signup</title>
        <meta name="description" content="Sign up to receive updates about new features and our iOS launch." />
        <meta property="og:title" content="Stay Updated - Newsletter Signup" />
        <meta property="og:description" content="Sign up to receive updates about new features and our iOS launch." />
        <meta property="og:image" content="/lovable-uploads/69d731ec-c142-4b3f-a661-b18db53b18ab.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="flex-1">
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