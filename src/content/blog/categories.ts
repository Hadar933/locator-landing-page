import { posts } from "./posts";

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface BlogCategory {
  title: string;
  description: string;
  slug: string;
  flag: string;
  posts: BlogPost[];
}

export const blogCategories: BlogCategory[] = [
  {
    title: "Indonesia",
    description: "Discover hidden beaches and cultural treasures in the Indonesian archipelago",
    slug: "indonesia",
    flag: "🇮🇩",
    posts: [
      {
        title: posts["bali-beach-guide"].title,
        excerpt: posts["bali-beach-guide"].description,
        date: posts["bali-beach-guide"].publishDate,
        slug: "bali-beach-guide"
      }
    ]
  },
  {
    title: "Japan",
    description: "Explore the best food spots and cultural experiences in Japan",
    slug: "japan",
    flag: "🇯🇵",
    posts: [
      {
        title: posts["tokyo-ramen-guide"].title,
        excerpt: posts["tokyo-ramen-guide"].description,
        date: posts["tokyo-ramen-guide"].publishDate,
        slug: "tokyo-ramen-guide"
      }
    ]
  },
  {
    title: "Spain",
    description: "Experience the vibrant food scene and cultural heritage of Spain",
    slug: "spain",
    flag: "🇪🇸",
    posts: [
      {
        title: posts["barcelona-tapas-guide"].title,
        excerpt: posts["barcelona-tapas-guide"].description,
        date: posts["barcelona-tapas-guide"].publishDate,
        slug: "barcelona-tapas-guide"
      }
    ]
  }
];