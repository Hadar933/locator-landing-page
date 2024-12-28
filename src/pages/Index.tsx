import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;