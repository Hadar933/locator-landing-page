import { motion, useInView } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import type { AutoplayType } from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

export const SocialProof = () => {
  const platforms = [
    {
      name: "Instagram Classic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },
    {
      name: "Reddit",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Reddit_logo_2023.svg"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      name: "TikTok",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
    },
    {
      name: "TripAdvisor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg"
    },
    {
      name: "Medium",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg"
    }
  ];

  const carouselRef = React.useRef(null);
  const isInView = useInView(carouselRef, { once: false });
  const [autoplay, setAutoplay] = React.useState<AutoplayType>();

  const plugin = React.useRef(
    Autoplay({ 
      delay: 0,
      stopOnInteraction: false,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      playOnInit: false
    })
  );

  React.useEffect(() => {
    if (!plugin.current) return;

    setAutoplay(plugin.current);
  }, []);

  // Start autoplay when the carousel comes into view
  React.useEffect(() => {
    if (isInView && autoplay) {
      autoplay.play();
    } else if (!isInView && autoplay) {
      autoplay.stop();
    }
  }, [isInView, autoplay]);

  return (
    <section className="py-4 bg-white">
      <div className="container" ref={carouselRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">Extract locations from your favorite platforms</p>
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
              skipSnaps: false,
              inViewThreshold: 1,
              duration: 8000
            }}
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-8">
              {[...platforms, ...platforms].map((platform, index) => (
                <CarouselItem key={`${platform.name}-${index}`} className="pl-8 basis-1/2 md:basis-1/4">
                  <div className="flex items-center justify-center h-24 md:h-32 px-4 md:px-6">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`} 
                      className="h-16 md:h-20 w-auto object-contain grayscale-0 hover:grayscale hover:opacity-60 transition-all"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};