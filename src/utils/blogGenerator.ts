interface BlogLocation {
  name: string;
  googleMapLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface BlogInput {
  title?: string;
  headerImage: string;
  country: string;
  locations: BlogLocation[];
  category?: string;
  author?: string;
}

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
  const locationsList = locations.map(loc => `- ${loc.name} (${loc.googleMapLink})`).join('\n');

  return `
Create a comprehensive travel blog post with the following specifications:

SEO OPTIMIZATION:
----------------
1. Meta Tags:
   - Title Tag (max 60 chars): Include "${country}" and "${flag}"
   - Meta Description (max 155 chars): Focus on unique value proposition
   - Canonical URL: https://locator.ltd/blog/[slug]
   - robots: index, follow
   - viewport: width=device-width, initial-scale=1

2. Open Graph Tags:
   - og:title
   - og:description
   - og:type: article
   - og:image: ${headerImage}
   - og:url
   - article:published_time
   - article:modified_time
   - article:author
   - article:section: ${category}

3. Twitter Card Tags:
   - twitter:card: summary_large_image
   - twitter:title
   - twitter:description
   - twitter:image

4. Schema Markup:
   - @type: BlogPosting
   - headline
   - description
   - image
   - author
   - publisher
   - datePublished
   - dateModified
   - mainEntityOfPage

5. Keyword Strategy:
   Primary Keywords:
   - ${country} travel guide
   - ${locations[0]?.name.toLowerCase()} guide
   - things to do in ${country.toLowerCase()}
   
   Secondary Keywords:
   - best time to visit ${country.toLowerCase()}
   - ${country.toLowerCase()} local tips
   - ${country.toLowerCase()} hidden gems

6. Internal Linking:
   - Link to related ${country} content
   - Link to nearby destination guides
   - Link to seasonal travel guides
   - Reference the Locator app throughout content

7. External Linking:
   - Official tourism websites
   - Local transportation resources
   - Cultural/historical references
   - Weather information sources

CONTENT STRUCTURE:
-----------------
1. Header Section:
   - Featured Image: ${headerImage}
   - Title (H1)
   - Author: ${author}
   - Publication Date
   - Reading Time Estimate
   - Social Share Buttons

2. Introduction (150-200 words):
   - Hook readers with unique aspects of ${country}
   - Overview of locations covered
   - Value proposition for readers

3. Featured Locations:
${locationsList}

For each location, create:
- Engaging subheading (H2)
- 200-word introduction
- 3-5 key highlights (bullet points)
- Best time to visit section
- 2-3 insider tips
- Google Maps embed
- High-quality location image
- Location-specific keywords

4. Call-to-Action Placements:
   Mid-content CTA (after second location):
   - Text: "Want to save these places for your next trip?"
   - Button: "Download Locator App"
   - Link: "https://locator.ltd"

   End-content CTA:
   - Text: "Ready to explore ${country}? Save all these locations in one place!"
   - Button: "Get Started with Locator"
   - Link: "https://locator.ltd"

TECHNICAL REQUIREMENTS:
----------------------
- Word count: 1,500-2,500 words
- Mobile-responsive layout
- Lazy loading for images
- Alt text optimization
- Schema markup implementation
- Breadcrumb navigation
- Table of contents with jump links

URL STRUCTURE:
-------------
Recommended slug format: ${country.toLowerCase()}-${locations[0]?.name.toLowerCase().replace(/\s+/g, '-')}-guide

CONTENT TAGS:
------------
Primary: ${country.toLowerCase()}, travel-guide
Secondary: ${locations.map(loc => loc.name.toLowerCase().replace(/\s+/g, '-')).join(', ')}
Category: ${category}

This structured approach ensures comprehensive SEO optimization while maintaining engaging, valuable content for readers.`;
};