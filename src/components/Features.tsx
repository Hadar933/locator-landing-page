import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      title: "Save great places",
      image: "/lovable-uploads/2368e07d-3e2d-482f-8764-8494418552f3.png",
      description: "Keep track of all your favorite locations in one place"
    },
    {
      title: "From anywhere",
      image: "/lovable-uploads/717b9b28-7927-4846-bf47-b92bb5f36fae.png",
      description: "Import places from your favorite apps and websites"
    },
    {
      title: "Plan your trip",
      image: "/lovable-uploads/faae5971-74b7-4388-bb63-ab97eaa577ad.png",
      description: "Organize and plan your visits with detailed information"
    },
    {
      title: "Organize with labels",
      image: "/lovable-uploads/2697e36a-21fd-43f7-9541-ceab67dfd093.png",
      description: "Create custom labels to categorize your saved places"
    },
    {
      title: "One-click navigation",
      image: "/lovable-uploads/afe5cdd4-6494-4122-975a-8effa9807b1a.png",
      description: "Get directions to your saved places instantly"
    },
    {
      title: "All your spots in one place",
      image: "/lovable-uploads/3b77a459-912d-4702-9b98-0f0c6a9e241a.png",
      description: "Access all your saved locations in a single view"
    },
    {
      title: "No matter their source",
      image: "/lovable-uploads/12e7cc51-15fc-4ab9-9ec0-4930a80de55f.png",
      description: "Import places from various platforms seamlessly"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="relative w-full max-w-[540px] aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover max-h-[960px]"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};