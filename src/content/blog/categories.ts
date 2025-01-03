export const blogCategories = [
  {
    title: "Philippines",
    flag: "🇵🇭",
    description: "Discover hidden gems and travel guides across the Philippine archipelago",
    slug: "philippines",
    posts: [
      {
        title: "Coron Nature Guide: Hidden Lakes and Marine Wonders",
        slug: "coron-nature-guide",
        excerpt: "Discover the natural wonders of Coron - from therapeutic hot springs to pristine lakes and vibrant coral gardens",
        date: "2024-12-29"
      }
    ]
  },
  {
    title: "Thailand",
    flag: "🇹🇭",
    description: "Local insights and travel guides for exploring Thailand",
    slug: "thailand",
    posts: [
      {
        title: "Phuket Local Guide: From Patong to Hidden Beaches",
        slug: "phuket-local-guide",
        excerpt: "A laid-back guide to Phuket's best spots - from serene beaches to vibrant nightlife",
        date: "2024-12-30"
      }
    ]
  },
  {
    title: "Sri Lanka",
    flag: "🇱🇰",
    description: "Food, culture, and travel guides for Sri Lanka",
    slug: "sri-lanka",
    posts: [
      {
        title: "Arugam Bay Food Guide: Local Gems & Hidden Spots",
        slug: "arugam-bay-food-guide",
        excerpt: "A casual food lover's guide to the best restaurants in Sri Lanka's surf paradise",
        date: "2024-12-31"
      }
    ]
  },
  {
    title: "Greece",
    flag: "🇬🇷",
    description: "Explore the hidden corners and local culture of Greece",
    slug: "greece",
    posts: [
      {
        title: "Karpathos: Greece's Hidden Paradise - Local Guide",
        slug: "karpathos-local-guide",
        excerpt: "Discover the untouched beauty of Karpathos - pristine beaches and authentic Greek culture away from the crowds",
        date: "2024-12-28"
      }
    ]
  }
];

export type BlogCategory = typeof blogCategories[0];