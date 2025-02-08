import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGE_WIDTH = 200;
const IMAGE_HEIGHT = Math.round(IMAGE_WIDTH * 2.168);
const SIDE_SLIDE_SCALE = 0.8; // Scale factor for side slides

interface ShowcaseItem {
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

const CarouselSlide = ({ item, isActive }: { item: ShowcaseItem; isActive: boolean }) => (
  <div 
    className="relative bg-background/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl mx-auto transition-all duration-500"
    style={{ 
      width: IMAGE_WIDTH,
      opacity: isActive ? 1 : 0.5,
      transform: `scale(${isActive ? 1 : SIDE_SLIDE_SCALE})`
    }}
  >
    <div 
      className="relative overflow-hidden"
      style={{ 
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT
      }}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 object-cover object-center"
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    <div 
      className="p-8 bg-background/80 backdrop-blur-sm"
      style={{ width: IMAGE_WIDTH }}
    >
      <h3 className="text-3xl font-bold mb-3 text-foreground">{item.title}</h3>
      <p className="text-lg text-muted-foreground">{item.description}</p>
    </div>
  </div>
);

export const ShowcaseShare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const showcaseItems: ShowcaseItem[] = [
    {
      image: "assets/share-1.jpeg",
      title: "Find Interesting Places 🔍",
      description: "Discover great coffee shop recommendations from social media and blogs",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT
    },
    {
      image: "assets/share-2.png",
      title: "Share with Locator 📩",
      description: "Send your discovery to Locator using the share button",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT
    },
    {
      image: "assets/share-3.PNG",
      title: "Submit Article ✅",
      description: "Share the article URL and let our AI do the work",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT
    },
    {
      image: "assets/share-4.jpeg",
      title: "Discover on Map 🎉",
      description: "See all mentioned coffee shops instantly plotted on your map",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT
    },
  ];

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return showcaseItems.length - 1;
      if (next >= showcaseItems.length) return 0;
      return next;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? IMAGE_WIDTH * 1.5 : -IMAGE_WIDTH * 1.5,
      opacity: 0,
      scale: SIDE_SLIDE_SCALE,
    }),
    center: { 
      zIndex: 1, 
      x: 0, 
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? IMAGE_WIDTH * 1.5 : -IMAGE_WIDTH * 1.5,
      opacity: 0,
      scale: SIDE_SLIDE_SCALE,
    })
  };

  const getAdjacentSlides = () => {
    const prev = currentIndex === 0 ? showcaseItems.length - 1 : currentIndex - 1;
    const next = currentIndex === showcaseItems.length - 1 ? 0 : currentIndex + 1;
    return { prev, next };
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/20">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.08]" 
        />
        <div className="absolute inset-0 bg-noise opacity-[0.015]" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-br from-primary via-primary/90 to-secondary bg-clip-text text-transparent">
            Save Places You Love
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto">
            Find cool places and share them with Locator easily
          </p>
        </motion.div>

        <div 
          className="relative mx-auto overflow-visible"
          style={{ width: IMAGE_WIDTH * 2 }}
        >
          {/* Previous Slide */}
          <div 
            className="absolute top-0"
            style={{ 
              left: -IMAGE_WIDTH,
              transform: `scale(${SIDE_SLIDE_SCALE})`,
              opacity: 0.5
            }}
          >
            <CarouselSlide item={showcaseItems[getAdjacentSlides().prev]} isActive={false} />
          </div>

          {/* Current Slide */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 }
              }}
              className="relative"
              style={{ 
                width: IMAGE_WIDTH,
                margin: '0 auto',
                zIndex: 2
              }}
            >
              <CarouselSlide item={showcaseItems[currentIndex]} isActive={true} />
            </motion.div>
          </AnimatePresence>

          {/* Next Slide */}
          <div 
            className="absolute top-0"
            style={{ 
              right: -IMAGE_WIDTH,
              transform: `scale(${SIDE_SLIDE_SCALE})`,
              opacity: 0.5
            }}
          >
            <CarouselSlide item={showcaseItems[getAdjacentSlides().next]} isActive={false} />
          </div>

          {/* Navigation buttons - fixed positioning */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ 
              width: IMAGE_WIDTH * 3,
              left: -IMAGE_WIDTH,
              paddingLeft: IMAGE_WIDTH * 0.3,
              paddingRight: IMAGE_WIDTH * 0.3
            }}
          >
            <div className="flex justify-between w-full">
              <button
                onClick={() => navigate(-1)}
                className="pointer-events-auto p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="pointer-events-auto p-3 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
