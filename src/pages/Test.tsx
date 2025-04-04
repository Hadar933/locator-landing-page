import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CtaSection } from "@/components/CtaSection";
import { VideoCarousel } from "@/components/VideoCarousel";

const Test = () => {
  return (
    <div className="min-h-screen">
      <TestHero />
      <VideoCarousel />
      <CtaSection />
    </div>
  );
};

export default Test;

// Custom Hero component for the test page
const TestHero = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 pt-28 md:pt-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.2]">
            Save Places You Love
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Never lose track of amazing places again! Save restaurants, travel spots, and local gems from social media and websites.
          </p>
        </div>
      </div>
    </section>
  );
};