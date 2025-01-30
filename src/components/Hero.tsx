import { motion, useScroll, useTransform } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { NavigationBar } from "./NavigationBar";
import { useEffect, useRef, useState } from "react";
import { Pin, Share2, MapPin, Map, Coffee, Utensils, Camera, Star, Heart, Plane, Hotel, Music } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Expanded floating cards with more variety and organized by rows
  const [cards] = useState([
    // Row 1 - Food & Drinks
    [
      {
        type: "instagram",
        content: "Best coffee spots in town! ☕️ #CafeHopping",
        icon: Coffee,
        color: "bg-gradient-to-r from-purple-500 to-pink-500"
      },
      {
        type: "tiktok",
        content: "Hidden gem bakery in Paris 🥐",
        icon: Heart,
        color: "bg-gradient-to-r from-pink-500 to-rose-500"
      },
      {
        type: "blog",
        content: "Top 10 Street Food Markets 🍜",
        icon: Utensils,
        color: "bg-gradient-to-r from-emerald-500 to-teal-500"
      },
      {
        type: "facebook",
        content: "Wine tasting route in Tuscany 🍷",
        icon: Star,
        color: "bg-gradient-to-r from-blue-500 to-indigo-500"
      }
    ],
    // Row 2 - Travel & Sights
    [
      {
        type: "twitter",
        content: "Secret rooftop bars in NYC 🌃",
        icon: Plane,
        color: "bg-gradient-to-r from-orange-500 to-red-500"
      },
      {
        type: "instagram",
        content: "Best sunset spots in Santorini 🌅",
        icon: Camera,
        color: "bg-gradient-to-r from-violet-500 to-purple-500"
      },
      {
        type: "blog",
        content: "Hidden beaches in Bali 🏖️",
        icon: MapPin,
        color: "bg-gradient-to-r from-cyan-500 to-blue-500"
      },
      {
        type: "tiktok",
        content: "Mountain hiking trails 🏔️",
        icon: Pin,
        color: "bg-gradient-to-r from-green-500 to-emerald-500"
      }
    ],
    // Row 3 - Entertainment & Culture
    [
      {
        type: "facebook",
        content: "Live jazz venues in New Orleans 🎷",
        icon: Music,
        color: "bg-gradient-to-r from-yellow-500 to-orange-500"
      },
      {
        type: "instagram",
        content: "Art galleries in Berlin 🎨",
        icon: Heart,
        color: "bg-gradient-to-r from-red-500 to-pink-500"
      },
      {
        type: "blog",
        content: "Historic hidden gems 🏛️",
        icon: Hotel,
        color: "bg-gradient-to-r from-indigo-500 to-violet-500"
      },
      {
        type: "twitter",
        content: "Local festivals guide 🎪",
        icon: Share2,
        color: "bg-gradient-to-r from-teal-500 to-cyan-500"
      }
    ]
  ]);

  // Animation for map markers
  const [markers, setMarkers] = useState<{ x: number; y: number; scale: number }[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newMarker = {
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        scale: 0
      };
      setMarkers(prev => [...prev.slice(-5), newMarker]);
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
            <div className="flex flex-col items-center gap-6 mb-12">
              <StoreButtons />
              <p className="text-sm text-muted-foreground">
                Join thousands of travelers, foodies, and explorers using Locator to save their favorite places
              </p>
            </div>

            {/* Floating Cards Section - Now organized in rows */}
            <div className="relative h-[600px] mb-24">
              {cards.map((row, rowIndex) => (
                <div key={rowIndex} className="relative h-[200px] mb-8">
                  {row.map((card, cardIndex) => (
                    <motion.div
                      key={`${rowIndex}-${cardIndex}`}
                      initial={{ 
                        x: cardIndex % 2 === 0 ? -100 : 100,
                        y: 50,
                        opacity: 0,
                        rotate: -5 + Math.random() * 10
                      }}
                      animate={{ 
                        x: [
                          cardIndex % 2 === 0 ? -100 : 100,
                          0,
                          cardIndex % 2 === 0 ? 100 : -100
                        ],
                        y: [
                          50,
                          30 + (Math.random() * 20),
                          50
                        ],
                        opacity: [0, 1, 0],
                        rotate: [-5 + Math.random() * 10, 5 + Math.random() * 10, -5 + Math.random() * 10]
                      }}
                      transition={{
                        duration: 15,
                        delay: cardIndex * 2 + rowIndex * 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`absolute left-1/2 transform -translate-x-1/2 ${card.color} p-4 rounded-xl shadow-lg max-w-xs backdrop-blur-sm`}
                      style={{
                        left: `${25 + (cardIndex * 25)}%`
                      }}
                    >
                      <div className="flex items-center gap-2 text-white">
                        <card.icon className="w-5 h-5" />
                        <p className="text-sm font-medium">{card.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}

              {/* Central Map Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]"
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
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};