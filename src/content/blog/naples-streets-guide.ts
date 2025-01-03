import { generateBlogPost } from "@/utils/blogGenerator";

export const post = generateBlogPost({
  title: "Naples Shopping Streets Guide: From Via Toledo to Via Chiaia",
  headerImage: "/lovable-uploads/naples-streets.jpg", // You'll need to upload an image
  country: "Italy",
  locations: [
    {
      name: "Via Toledo",
      googleMapLink: "https://maps.app.goo.gl/LKqzw5WCtJYDpwST9",
      coordinates: {
        lat: 40.8467,
        lng: 14.2494
      }
    },
    {
      name: "Via Chiaia",
      googleMapLink: "https://maps.app.goo.gl/XMqaaDaB7LrvnTYW9",
      coordinates: {
        lat: 40.8377,
        lng: 14.2478
      }
    },
    {
      name: "Via Calabritto",
      googleMapLink: "https://maps.app.goo.gl/k5K3NYf5J6F2KWKt5",
      coordinates: {
        lat: 40.8329,
        lng: 14.2477
      }
    },
    {
      name: "Via del Mille",
      googleMapLink: "https://maps.app.goo.gl/VC7YxkyynmiGmBLw9",
      coordinates: {
        lat: 40.8352,
        lng: 14.2365
      }
    }
  ]
});