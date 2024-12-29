import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

export const SocialProof = () => {
  const platforms = [
    {
      name: "Instagram New",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
    },
    {
      name: "Instagram Classic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg"
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
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-4 bg-white">
      <div className="container">
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
            }}
            plugins={[plugin.current]}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {platforms.map((platform) => (
                <CarouselItem key={platform.name} className="basis-1/3 md:basis-1/4">
                  <div className="flex items-center justify-center h-32">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`} 
                      className="h-20 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
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