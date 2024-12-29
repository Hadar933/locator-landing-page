import { motion } from "framer-motion";

export const SocialProof = () => {
  const platforms = [
    {
      name: "Instagram",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
    },
    {
      name: "TikTok",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      name: "Reddit",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Reddit_logo_2023.svg"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">Extract locations from your favorite platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {platforms.map((platform) => (
              <img 
                key={platform.name}
                src={platform.logo} 
                alt={`${platform.name} logo`} 
                className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};