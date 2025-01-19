import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import LocationMap from "./LocationMap";

export const VideoCarousel = () => {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    })
  );

  const [sharedUrl, setSharedUrl] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const { toast } = useToast();
  
  const handleShare = (url: string) => {
    setSharedUrl(url);
    toast({
      title: "URL copied to clipboard!",
      description: "Scroll down to see the shared URL",
    });
    // Scroll to bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const handleSubmit = () => {
    if (sharedUrl) {
      setShowMap(true);
    }
  };

  const videos = [
    {
      platform: "TikTok",
      embedUrl: "https://www.tiktok.com/embed/v2/7271327697891183918",
    },
    {
      platform: "Instagram",
      embedUrl: "https://www.instagram.com/p/DD2uCMyzCKU/embed",
    },
    {
      platform: "TikTok",
      embedUrl: "https://www.tiktok.com/embed/v2/7433701151872257313",
    },
    {
      platform: "Instagram",
      embedUrl: "https://www.instagram.com/p/DEyUt3VyNlx/embed",
    },
    {
      platform: "TikTok",
      embedUrl: "https://www.tiktok.com/embed/v2/7227835204541353243",
    },
    {
      platform: "Instagram",
      embedUrl: "https://www.instagram.com/p/DEfUhcrOwm2/embed",
    },
    {
      platform: "TikTok",
      embedUrl: "https://www.tiktok.com/embed/v2/7337880069601348910",
    },
    {
      platform: "Instagram",
      embedUrl: "https://www.instagram.com/p/C-A_CLKtZGB/embed",
    },
    {
      platform: "TikTok",
      embedUrl: "https://www.tiktok.com/embed/v2/7302068588939054369",
    },
    {
      platform: "Instagram",
      embedUrl: "https://www.instagram.com/p/DCD9FwtPlLh/embed",
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
                <div className="space-y-4">
                  <div className="aspect-[9/16] rounded-xl overflow-hidden border shadow-lg">
                    <iframe
                      src={video.embedUrl}
                      className="w-full h-full"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                  <Button 
                    onClick={() => handleShare(video.embedUrl)}
                    variant="outline"
                    className="w-full"
                  >
                    <Share2 className="mr-2" />
                    Share to Locator
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {sharedUrl && (
          <div className="mt-16 p-6 border rounded-lg bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">Shared URL</h3>
            <div className="p-4 bg-white border rounded mb-4 break-all">
              {sharedUrl}
            </div>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        )}

        {showMap && sharedUrl && (
          <LocationMap 
            url={sharedUrl} 
            onClose={() => setShowMap(false)} 
          />
        )}
      </div>
    </section>
  );
};