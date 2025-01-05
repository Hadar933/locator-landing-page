import { generateBlogPrompt } from "@/utils/blogGenerator";

const blogInput = {
  title: "Ultimate Guide to Bali's Hidden Beaches",
  headerImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  country: "indonesia",
  locations: [
    {
      name: "Green Bowl Beach",
      googleMapLink: "https://maps.google.com/?q=Green+Bowl+Beach+Bali",
      customInfo: [
        "Best visited during low tide",
        "Famous for its pristine white sand",
        "Home to two ancient caves with bat colonies"
      ]
    },
    {
      name: "Nyang Nyang Beach",
      googleMapLink: "https://maps.google.com/?q=Nyang+Nyang+Beach+Bali",
      customInfo: [
        "Accessible via 500-step staircase",
        "Perfect for sunset photography",
        "Shipwreck remains visible during low tide"
      ]
    },
    {
      name: "Gunung Payung Beach",
      googleMapLink: "https://maps.google.com/?q=Gunung+Payung+Beach+Bali",
      customInfo: [
        "Known for excellent snorkeling",
        "Dramatic limestone cliffs",
        "Local warungs serve fresh coconuts"
      ]
    }
  ],
  category: "Beach Guide",
  author: "Sarah Chen"
};

export const post = {
  title: "Ultimate Guide to Bali's Hidden Beaches",
  description: "Discover secluded beaches in Bali away from the tourist crowds",
  author: "Sarah Chen",
  publishDate: "2024-03-20",
  modifiedDate: "2024-03-20",
  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  content: generateBlogPrompt(blogInput),
  country: "indonesia",
  flag: "🇮🇩",
  readingTime: "8 min read",
  callToAction: {
    position: 1,
    text: "Never lose track of these hidden gems!",
    buttonText: "Save These Beaches",
    link: "https://play.google.com/store/apps/details?id=com.locator.app"
  }
};