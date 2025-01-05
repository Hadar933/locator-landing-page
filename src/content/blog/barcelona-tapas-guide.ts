import { generateBlogPrompt } from "@/utils/blogGenerator";

const blogInput = {
  title: "Barcelona's Secret Tapas Bars",
  headerImage: "https://images.unsplash.com/photo-1515443961218-a51367888e4b",
  country: "spain",
  locations: [
    {
      name: "Bar Cañete",
      googleMapLink: "https://maps.google.com/?q=Bar+Cañete+Barcelona",
      customInfo: [
        "Historic bar since 1967",
        "Famous for seafood tapas",
        "Hidden in the Raval neighborhood"
      ]
    },
    {
      name: "Bodega La Puntual",
      googleMapLink: "https://maps.google.com/?q=Bodega+La+Puntual+Barcelona",
      customInfo: [
        "Specializes in Catalan wines",
        "Traditional patatas bravas",
        "Intimate atmosphere"
      ]
    },
    {
      name: "Cal Pep",
      googleMapLink: "https://maps.google.com/?q=Cal+Pep+Barcelona",
      customInfo: [
        "Counter seating only",
        "Daily changing menu",
        "Known for seafood tasting menu"
      ]
    }
  ],
  category: "Food Guide",
  author: "Maria Garcia"
};

export const post = {
  title: "Barcelona's Secret Tapas Bars",
  description: "Explore the hidden tapas bars of Barcelona like a local",
  author: "Maria Garcia",
  publishDate: "2024-03-22",
  modifiedDate: "2024-03-22",
  image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b",
  content: generateBlogPrompt(blogInput),
  country: "spain",
  flag: "🇪🇸",
  readingTime: "7 min read",
  callToAction: {
    position: 1,
    text: "Never miss a tapas spot in Barcelona!",
    buttonText: "Get the App",
    link: "https://play.google.com/store/apps/details?id=com.locator.app"
  }
};