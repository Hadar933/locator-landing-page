import { generateBlogPrompt } from "@/utils/blogGenerator";

const blogInput = {
  title: "Tokyo's Best Hidden Ramen Shops",
  headerImage: "https://images.unsplash.com/photo-1557872943-16a5ac26437e",
  country: "japan",
  locations: [
    {
      name: "Nakiryu",
      googleMapLink: "https://maps.google.com/?q=Nakiryu+Tokyo",
      customInfo: [
        "Michelin-starred ramen shop",
        "Famous for tantanmen",
        "Worth the typical 2-hour wait"
      ]
    },
    {
      name: "Fuunji",
      googleMapLink: "https://maps.google.com/?q=Fuunji+Tokyo",
      customInfo: [
        "Specializes in tsukemen (dipping noodles)",
        "Rich fish-based broth",
        "Located near Shinjuku station"
      ]
    },
    {
      name: "Kagari",
      googleMapLink: "https://maps.google.com/?q=Kagari+Ginza+Tokyo",
      customInfo: [
        "Known for chicken paitan ramen",
        "Hidden in Ginza's backstreets",
        "Creamy yet light broth"
      ]
    }
  ],
  category: "Food Guide",
  author: "Kenji Tanaka"
};

export const post = {
  title: "Tokyo's Best Hidden Ramen Shops",
  description: "Discover the most authentic and hidden ramen shops in Tokyo",
  author: "Kenji Tanaka",
  publishDate: "2024-03-21",
  modifiedDate: "2024-03-21",
  image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e",
  content: generateBlogPrompt(blogInput),
  country: "japan",
  flag: "🇯🇵",
  readingTime: "10 min read",
  callToAction: {
    position: 2,
    text: "Save these ramen spots for your next Tokyo trip!",
    buttonText: "Download Locator",
    link: "https://play.google.com/store/apps/details?id=com.locator.app"
  }
};