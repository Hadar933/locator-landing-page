import { motion, useScroll, useTransform } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { NavigationBar } from "./NavigationBar";
import { useEffect, useRef, useState } from "react";
import { Pin, Share2, MapPin, Map } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Floating cards state
  const [cards] = useState([
    {
      type: "instagram",
      content: "Best coffee spots in town! ☕️ #CafeHopping",
      icon: Share2,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      type: "tiktok",
      content: "Hidden gems in Paris 🗼 #TravelTips",
      icon: MapPin,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      type: "blog",
      content: "Top 10 Street Food Markets in Bangkok 🍜",
      icon: Pin,
      color: "bg-gradient-to-r from-emerald-500 to-teal-500"
    }
  ]);

  // Animation for map markers
  const [markers, setMarkers] = useState<{ x: number; y: number; scale: number }[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newMarker = {
        x: Math.random() * 80 + 10, // 10-90% of container width
        y: Math.random() * 80 + 10, // 10-90% of container height
        scale: 0
      };
      setMarkers(prev => [...prev.slice(-5), newMarker]); // Keep last 6 markers
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavigationBar />
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <motion.div 
          ref={containerRef}
          style={{ y, opacity }}
          className="container pt-32 pb-16 relative z-10"
        >
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative z-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.2]">
              Save Places you Love
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Found a blog with food recommendations? a social media post with a must-visit cafe? 
              Just toss those to Locator and boom - they're on a map. It's perfect for trip planning 
              when recommendations pile up, or just when you want to save findings in a useful way.
            </p>
            <div className="flex flex-col items-center gap-6">
              <StoreButtons />
              <p className="text-sm text-muted-foreground">
                Join thousands of travelers, foodies, and explorers using Locator to save their favorite places
              </p>
            </div>
          </motion.div>

          {/* Interactive Visualization */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating Social Cards */}
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ 
                  x: -100, 
                  y: 100 + index * 60, 
                  opacity: 0,
                  rotate: -10 + Math.random() * 20
                }}
                animate={{ 
                  x: [-100, 20 + index * 30, -100],
                  y: [100 + index * 60, 50 + index * 40, 100 + index * 60],
                  opacity: [0, 1, 0],
                  rotate: [-10 + Math.random() * 20, 5 + Math.random() * 10, -10 + Math.random() * 20]
                }}
                transition={{
                  duration: 15,
                  delay: index * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`absolute ${card.color} p-4 rounded-xl shadow-lg max-w-xs`}
              >
                <div className="flex items-center gap-2 text-white">
                  <card.icon className="w-5 h-5" />
                  <p className="text-sm font-medium">{card.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Map Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                className="w-[600px] h-[600px] rounded-full border-2 border-blue-500/20 flex items-center justify-center"
              >
                <Map className="w-full h-full text-blue-500/20" />
                
                {/* Animated Map Markers */}
                {markers.map((marker, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{ duration: 4, ease: "easeOut" }}
                    className="absolute"
                    style={{
                      left: `${marker.x}%`,
                      top: `${marker.y}%`,
                    }}
                  >
                    <div className="relative">
                      <MapPin className="w-6 h-6 text-blue-500" />
                      <motion.div
                        initial={{ scale: 1, opacity: 0.3 }}
                        animate={{
                          scale: [1, 2],
                          opacity: [0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 bg-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};