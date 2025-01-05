export const blogCategories = [
  {
    title: "Hong Kong",
    flag: "🇭🇰",
    description: "Discover spiritual sanctuaries and hidden natural gems in Hong Kong",
    slug: "hong-kong",
    posts: [
      {
        title: "Hong Kong's Hidden Temples & Gardens: Off the Beaten Path Guide",
        slug: "hong-kong-temples-guide",
        excerpt: "Explore Hong Kong's serene temples and lush gardens away from the tourist crowds",
        date: "2024-01-30"
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
        title: "Mirissa Backpacking Guide: Hidden Beaches & Local Gems",
        slug: "mirissa-backpacking-guide",
        excerpt: "Discover the laid-back charm of Mirissa - from secret beaches to the best local restaurants and viewpoints",
        date: "2024-01-25"
      },
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
  },
  {
    title: "Israel",
    flag: "🇮🇱",
    description: "Explore the vibrant food scene and cultural hotspots of Israel",
    slug: "israel",
    posts: [
      {
        title: "Tel Aviv Café Culture: Best Coffee Spots Guide",
        slug: "tel-aviv-cafe-guide",
        excerpt: "A curated guide to Tel Aviv's most charming cafés, from hidden gems to popular spots",
        date: "2024-12-27"
      },
      {
        title: "Tel Aviv's Ultimate Burger Guide: Local Favorites",
        slug: "tel-aviv-burger-guide",
        excerpt: "Discover the juiciest, most flavorful burgers in Tel Aviv's vibrant food scene",
        date: "2024-01-20"
      }
    ]
  },
  {
    title: "Italy",
    flag: "🇮🇹",
    description: "Explore the charming streets and hidden gems of Italy's most beautiful cities",
    slug: "italy",
    posts: [
      {
        title: "Naples Shopping Streets Guide: From Via Toledo to Via Chiaia",
        slug: "naples-streets-guide",
        excerpt: "Discover the most iconic shopping streets of Naples, from the historic Via Toledo to the elegant Via Chiaia",
        date: "2024-01-15"
      }
    ]
  },
  {
    title: "Croatia",
    flag: "🇭🇷",
    description: "Discover the stunning coastal cities and national parks of Croatia",
    slug: "croatia",
    posts: [
      {
        title: "Croatia's Must-Visit Cities: A Complete Guide",
        slug: "croatia-cities-guide",
        excerpt: "From ancient Roman ruins to stunning islands - explore Croatia's most beautiful destinations",
        date: "2024-02-01"
      }
    ]
  }
];

export type BlogCategory = typeof blogCategories[0];
