import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { EmailSignup } from "@/components/EmailSignup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CtaSection />
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground">
              Sign up to receive updates about new features and our iOS launch.
            </p>
          </div>
          <EmailSignup />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;