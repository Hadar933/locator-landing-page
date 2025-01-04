import { BlogPost } from "./posts";

export const post: BlogPost = {
  title: "Tel Aviv's Ultimate Burger Guide: Local Favorites",
  description: "A mouthwatering journey through Tel Aviv's best burger joints, from hidden gems to legendary establishments",
  author: "Local Food Expert",
  publishDate: "2024-01-20",
  modifiedDate: "2024-01-20",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/60/PikiWiki_Israel_68164_port_of_jaffa.jpg",
  country: "Israel",
  flag: "🇮🇱",
  category: "Food Guide",
  readingTime: "8 min read",
  tags: ["Food Guide", "Tel Aviv", "Burgers", "Local Recommendations", "Street Food"],
  locations: [
    {
      name: "Prozdor",
      googleMapLink: "https://maps.app.goo.gl/mWhzRz26wXhiBwTC9",
      contentSections: {
        introduction: "Tucked away in a bustling corner of Tel Aviv, Prozdor has earned its reputation as a burger institution. This cozy spot combines traditional Israeli hospitality with modern burger craftsmanship, creating an experience that's both authentic and innovative.",
        customInfo: ["A really famous one in tel aviv. everybody knows it"],
        bestTimeToVisit: "Visit during weekday lunch hours (12:00-14:00) to avoid the evening rush. The restaurant is particularly busy during weekend evenings.",
        mapEmbed: `<iframe src="https://maps.google.com/maps?q=prozdor+tel+aviv&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      }
    },
    {
      name: "The Little Burger Shop",
      googleMapLink: "https://maps.app.goo.gl/LScQ1aoeRXoPfvmV8",
      contentSections: {
        introduction: "The Little Burger Shop might be small in size, but it's huge in flavor and character. This intimate spot has revolutionized Tel Aviv's burger scene with its creative combinations and attention to detail.",
        bestTimeToVisit: "Early evening (17:00-19:00) tends to be less crowded, and you'll catch the beautiful Tel Aviv sunset while dining.",
        mapEmbed: `<iframe src="https://maps.google.com/maps?q=the+little+burger+shop+tel+aviv&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      }
    },
    {
      name: "Vitrina",
      googleMapLink: "https://maps.app.goo.gl/QQg1XV2PeBp79AKS9",
      contentSections: {
        introduction: "Vitrina has become synonymous with gourmet street food in Tel Aviv. Their burgers represent the perfect fusion of high-end cuisine and casual dining, making it a must-visit destination for burger enthusiasts.",
        bestTimeToVisit: "Late afternoon (15:00-17:00) offers the most relaxed dining experience, especially on weekdays.",
        mapEmbed: `<iframe src="https://maps.google.com/maps?q=vitrina+tel+aviv&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      }
    },
    {
      name: "Benz Brothers",
      googleMapLink: "https://maps.app.goo.gl/snuVtSaEcipq6e2c6",
      contentSections: {
        introduction: "Benz Brothers brings American-style burgers to the heart of Tel Aviv, but with a distinctly Israeli twist. Their commitment to quality and consistency has earned them a loyal following among locals and tourists alike.",
        customInfo: ["On the simpler side, but still worth a shot"],
        bestTimeToVisit: "Lunch hours (12:00-14:00) during weekdays offer the best combination of fresh food and minimal wait times.",
        mapEmbed: `<iframe src="https://maps.google.com/maps?q=benz+brothers+tel+aviv&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      }
    },
    {
      name: "Silly Kid",
      googleMapLink: "https://maps.app.goo.gl/QBSaiaW8JsEM8fpq5",
      contentSections: {
        introduction: "Silly Kid brings a playful approach to serious burger-making. This whimsical spot combines creative presentation with top-notch ingredients, creating an experience that's as fun as it is delicious.",
        customInfo: ["All about chicken - tenders, burgers, you name it"],
        bestTimeToVisit: "Early dinner (18:00-20:00) offers the full experience with the most energetic atmosphere.",
        mapEmbed: `<iframe src="https://maps.google.com/maps?q=silly+kid+tel+aviv&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      }
    }
  ],
  callToAction: {
    position: 2, // After 2 locations (40% through the content)
    text: "Never lose track of your favorite burger spots in Tel Aviv! Save these locations and discover more hidden gems with Locator.",
    buttonText: "Start Saving Your Burger Adventures",
    link: "https://locator.ltd"
  },
  content: `
    <p class="lead">
      Tel Aviv's burger scene is a testament to the city's culinary creativity, where traditional Middle Eastern flavors meet international burger craftsmanship. From hidden gems to legendary establishments, each spot offers its own unique take on this beloved comfort food.
    </p>

    <p>
      As we explore the city's best burger joints, you'll discover how Tel Aviv's food culture has embraced and transformed this global favorite. Each location brings its own character, flavors, and atmosphere to the table, creating experiences that go beyond just great food.
    </p>

    <div class="my-8">
      <h2 class="text-2xl font-bold mb-4">What Makes Tel Aviv Burgers Special?</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Fusion of Middle Eastern and Western flavors</li>
        <li>Emphasis on fresh, local ingredients</li>
        <li>Creative toppings and house-made sauces</li>
        <li>Diverse options for all dietary preferences</li>
        <li>Unique atmosphere at each location</li>
      </ul>
    </div>

    <blockquote class="italic border-l-4 pl-4 my-6">
      "Tel Aviv's burger scene is where tradition meets innovation, creating flavors that you won't find anywhere else in the world."
    </blockquote>

    <h2 class="text-2xl font-bold mt-8 mb-4">Best Times to Explore</h2>
    <p>
      The best time to explore Tel Aviv's burger scene is during weekday afternoons when the crowds are smaller and you can truly savor each experience. Many locations offer lunch specials that make your culinary adventure even more enjoyable.
    </p>

    <div class="my-12 text-center">
      <a href="/" class="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
        Map your favorite burger spots with Locator
      </a>
    </div>

    <div class="bg-blue-50 p-6 rounded-lg my-8">
      <h3 class="font-bold mb-2">Pro Tips for Your Burger Adventure:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Most places are busiest during weekend evenings</li>
        <li>Many spots offer delivery, but the in-house experience is worth it</li>
        <li>Don't hesitate to ask for recommendations - staff are usually passionate about their burgers</li>
        <li>Follow each location's social media for special offers and new menu items</li>
      </ul>
    </div>

    <div class="mt-12 p-6 bg-blue-50 rounded-lg">
      <h3 class="text-xl font-semibold mb-4">Start Your Journey with Locator</h3>
      <p class="mb-6">Ready to explore these amazing locations? Save them all in one place with Locator - your personal travel companion.</p>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
        Download Locator App
      </a>
    </div>
  `,
};

export default post;
