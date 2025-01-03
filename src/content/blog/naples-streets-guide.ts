import { generateBlogPost } from "@/utils/blogGenerator";

export const post = generateBlogPost({
  title: "Naples Shopping Streets Guide: From Via Toledo to Via Chiaia",
  headerImage: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Certosa_desde_Sant%27Elmo_10.JPG",
  country: "Italy",
  locations: [
    {
      name: "Via Toledo",
      googleMapLink: "https://maps.app.goo.gl/LKqzw5WCtJYDpwST9",
      coordinates: {
        lat: 40.8467,
        lng: 14.2494
      },
      description: `
        <section>
          <h2>Via Toledo - Naples' Historic Shopping Avenue</h2>
          <p>
            Via Toledo, one of Naples' main commercial arteries since the 16th century, stretches for over a kilometer through the heart of the historic center. This bustling street is a shopper's paradise, featuring everything from international fashion brands to traditional Neapolitan craftsmen.
          </p>
          <h3>What You'll Find</h3>
          <ul>
            <li>International fashion chains like Zara and H&M</li>
            <li>Historic cafes and pastry shops</li>
            <li>Traditional Neapolitan tailors</li>
            <li>Street artists and performers</li>
          </ul>
          <p>
            Pro tip: Visit early in the morning to avoid the crowds and enjoy the historic architecture without the usual hustle and bustle.
          </p>
        </section>
      `
    },
    {
      name: "Via Chiaia",
      googleMapLink: "https://maps.app.goo.gl/XMqaaDaB7LrvnTYW9",
      coordinates: {
        lat: 40.8377,
        lng: 14.2478
      },
      description: `
        <section>
          <h2>Via Chiaia - Elegant Shopping District</h2>
          <p>
            Via Chiaia connects Piazza del Plebiscito to Piazza dei Martiri, representing Naples' most elegant shopping street. This pedestrian-friendly area is known for its luxury boutiques and historic buildings.
          </p>
          <h3>Shopping Highlights</h3>
          <ul>
            <li>Designer boutiques and luxury brands</li>
            <li>Antique bookshops</li>
            <li>Artisanal jewelry stores</li>
            <li>Traditional Neapolitan tie makers</li>
          </ul>
          <p>
            Best time to visit: Late afternoon when the locals enjoy their passeggiata (evening stroll) and the shops are less crowded.
          </p>
        </section>
      `
    },
    {
      name: "Via Calabritto",
      googleMapLink: "https://maps.app.goo.gl/k5K3NYf5J6F2KWKt5",
      coordinates: {
        lat: 40.8329,
        lng: 14.2477
      },
      description: `
        <section>
          <h2>Via Calabritto - Luxury Shopping Haven</h2>
          <p>
            Via Calabritto is Naples' answer to Milan's Via Montenapoleone. This exclusive street houses the city's most prestigious fashion brands and jewelry stores.
          </p>
          <h3>What to Expect</h3>
          <ul>
            <li>High-end fashion boutiques</li>
            <li>Luxury watch retailers</li>
            <li>Designer jewelry shops</li>
            <li>Exclusive accessories stores</li>
          </ul>
          <p>
            Insider tip: The street is quieter during lunch hours (1-3 PM), perfect for window shopping without crowds.
          </p>
        </section>
      `
    },
    {
      name: "Via del Mille",
      googleMapLink: "https://maps.app.goo.gl/VC7YxkyynmiGmBLw9",
      coordinates: {
        lat: 40.8352,
        lng: 14.2365
      },
      description: `
        <section>
          <h2>Via del Mille - Contemporary Fashion Hub</h2>
          <p>
            Via del Mille offers a perfect blend of contemporary fashion and traditional Neapolitan style. This street is known for its mix of modern boutiques and historic shops.
          </p>
          <h3>Shopping Experience</h3>
          <ul>
            <li>Contemporary fashion boutiques</li>
            <li>Local designer shops</li>
            <li>Vintage stores</li>
            <li>Trendy cafes and bars</li>
          </ul>
          <p>
            Local secret: Visit on weekday mornings for the best shopping experience and personal attention from shop owners.
          </p>
        </section>
      `
    }
  ]
});