interface Location {
  googleMapLink: string;
  name: string;
  coordinates?: {lat: number, lng: number};
}

interface BlogInput {
  title?: string;
  headerImage: string;
  country: string;
  locations: Location[];
}

export const generateBlogPrompt = ({ 
  title = '', 
  headerImage, 
  country, 
  locations 
}: BlogInput): string => {
  const countryFlags: Record<string, string> = {
    'Philippines': '🇵🇭',
    'Thailand': '🇹🇭',
    'Sri Lanka': '🇱🇰',
    'Greece': '🇬🇷',
    'Israel': '🇮🇱',
    'Italy': '🇮🇹'
  };

  const flag = countryFlags[country] || '🌍';
  const locationsList = locations.map(loc => `- ${loc.name} (${loc.googleMapLink})`).join('\n');

  return `
Create a comprehensive travel blog post with the following specifications:

STRUCTURE AND FORMATTING:
------------------------
1. Title: Create an engaging title that includes "${country}" and ends with "${flag}". The title should be SEO-optimized and under 60 characters.
2. Header Image: ${headerImage}
3. Meta Description: Write a compelling meta description under 160 characters that includes the main locations and purpose of the guide.

CONTENT SECTIONS:
----------------
1. Introduction (150-200 words):
   - Hook readers with an engaging opening
   - Briefly introduce ${country} and the specific area being covered
   - Set expectations for what readers will learn

2. Featured Locations:
${locationsList}

For each location, create:
- A 200-word introduction paragraph
- 3-5 key highlights (bullet points)
- Best time to visit section
- 2-3 insider tips
- Include the provided Google Maps embed code for each location

CALL TO ACTION PLACEMENTS:
-------------------------
Insert two call-to-action blocks:
1. Mid-content CTA (after the second location):
   Text: "Want to save these places for your next trip?"
   Button: "Download Locator App"
   Link: "https://locator.ltd"

2. End-content CTA (after the last location):
   Text: "Ready to explore ${country}? Save all these locations in one place!"
   Button: "Get Started with Locator"
   Link: "https://locator.ltd"

SEO OPTIMIZATION:
----------------
- Primary keyword: "${country} travel guide"
- Include secondary keywords naturally throughout the content
- Use H2 headings for location names
- Use H3 headings for subsections (Highlights, Best Time to Visit, Insider Tips)
- Optimize image alt texts
- Include internal links to related ${country} content if available

TECHNICAL REQUIREMENTS:
----------------------
- Word count: 1,500-2,500 words
- Mobile-responsive layout
- Optimized images with alt text
- Schema markup for travel article
- Social sharing meta tags

TONE AND STYLE:
--------------
- Conversational yet authoritative
- First-hand experience perspective
- Include practical tips and local insights
- Focus on unique aspects of each location
- Use active voice and present tense
- Break up text with bullet points and short paragraphs`;
};