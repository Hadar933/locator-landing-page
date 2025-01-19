import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const VideoCarousel = () => {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  );

  const videos = [
    {
      platform: "TikTok",
      embedUrl: "https://www.tiktok.com/embed/v2/7166771195133068549",
    },
    {
      platform: "Instagram",
      embedUrl: "https://www.instagram.com/p/C3QQ_8fL5O4/embed",
    },
    {
      platform: "TikTok",
      embedUrl: "https://www.tiktok.com/embed/v2/7166771195133068549",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          See How Others Use Locator
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {videos.map((video, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[9/16] rounded-xl overflow-hidden border shadow-lg">
                  <iframe
                    src={video.embedUrl}
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};