import { BlogInput } from "@/types/blog";

export const generateBlogPrompt = ({ 
  title = '', 
  headerImage, 
  country, 
  locations,
  category = 'Travel Guide',
  author = 'Local Expert'
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
  
  // Transform location data to include proper map embed code
  const locationsList = locations.map(loc => {
    const mapEmbedCode = `<iframe
      src="${loc.googleMapLink.replace('/maps/', '/maps/embed/')}"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
    
    return `- ${loc.name}
      Map embed code: ${mapEmbedCode}
      Google Maps link: ${loc.googleMapLink}`;
  }).join('\n');

  return `
Create an immersive and SEO-optimized travel blog post with the following specifications:

CONTENT STRUCTURE & NARRATIVE:
----------------------------
1. Title & Introduction (300-400 words):
   - Use engaging title with ${flag} emoji
   - Start with a compelling hook (personal story or interesting fact)
   - Set the scene and context for ${country}
   - Include a brief overview of what readers will learn
   - End with a clear value proposition

2. Header Image Implementation:
   - Main featured image: ${headerImage}
   - Required format: Responsive image with 16:9 aspect ratio
   - Alt text must include location keywords
   - Lazy loading for performance
   - Caption should include location context

3. For each location (${locationsList}):
   - Start with an engaging story or local insight
   - Include practical details (best times, costs, tips)
   - Add local context and cultural significance
   - Incorporate relevant historical facts
   - End with insider tips that aren't commonly known
   - Properly embed the provided Google Maps iframe
   - Include image gallery section after map

SEO OPTIMIZATION:
---------------
1. Technical SEO:
   - Title tag: "${title} ${flag} | Complete Guide [Current Year]"
   - Meta description: Engaging summary under 155 characters
   - URL structure: /${country.toLowerCase()}/${locations[0].name.toLowerCase().replace(/\s+/g, '-')}-guide
   - Canonical URL: https://locator.ltd/blog/[slug]

2. Content Optimization:
   - Primary keyword: "${country} travel guide"
   - Secondary keywords: Include location names, activities
   - LSI keywords: Add related terms naturally
   - Semantic relevance: Include related topics and themes

3. Structured Data:
   {
     "@context": "https://schema.org",
     "@type": "TravelGuide",
     "name": "${title}",
     "author": {
       "@type": "Person",
       "name": "${author}"
     },
     "about": {
       "@type": "Place",
       "name": "${country}"
     }
   }

4. Meta Tags:
   - og:title: "${title}"
   - og:description: [Compelling description]
   - og:image: ${headerImage}
   - twitter:card: "summary_large_image"
   - article:published_time: [Current date]
   - article:author: "${author}"

5. Internal Linking:
   - Link to related ${country} guides
   - Reference relevant city guides
   - Link to seasonal travel content
   - Add "Related Guides" section

CALL-TO-ACTION PLACEMENT:
-----------------------
1. Mid-Content CTA:
   - Place after second location
   - Focus on saving locations with Locator app
   - Use action-oriented button text

2. End-Content CTA:
   - Comprehensive CTA with app benefits
   - Include app screenshot
   - Add social proof element

CONTENT REQUIREMENTS:
-------------------
1. Word count: 2,000-2,500 words
2. Tone: Conversational yet authoritative
3. Perspective: First-hand experience
4. Currency: Include recent updates and changes
5. Accuracy: Verify all facts and prices
6. Local insights: Include non-obvious tips

This structured approach ensures proper handling of both images and maps while maintaining SEO optimization and user engagement.`;
};
