import { BlogInput } from "@/types/blog";

interface Location {
  name: string;
  googleMapLink: string;
  customInfo?: string[];
  bestTimeToVisit?: string;
  tips?: string[];
}

const generateBlogPrompt = ({ 
  title = '', 
  headerImage, 
  country, 
  locations,
  category = 'Travel Guide',
  author = 'Local Expert'
}: BlogInput): string => {
  // Format locations into a readable string
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
    
    const customInfoSection = loc.customInfo ? 
      `Location Details:
       ${loc.customInfo.map(info => `- ${info}`).join('\n')}` : 
      '';
    
    return `Location: ${loc.name}
      ${customInfoSection}
      Map: ${loc.googleMapLink}`;
  }).join('\n\n');

  return `
BLOG POST GENERATION PROMPT
==========================

REQUIRED INPUTS:
---------------
1. Country: ${country}
2. Category: ${category}
3. Title: ${title}
4. Header Image: ${headerImage}
5. Author: ${author}

LOCATIONS TO COVER:
------------------
${locationsList}

CONTENT STRUCTURE:
-----------------
Create an immersive travel narrative following this structure:

1. INTRODUCTION (300-400 words)
   - Hook: Start with an engaging sensory description
   - Context: Brief overview of ${country} and its significance
   - Purpose: What makes these locations special
   - Promise: What readers will learn/experience

2. MAIN LOCATIONS (1500-1800 words)
   For each location, cover:
   - Vivid description of arrival and first impressions
   - Historical or cultural significance
   - Personal observations and experiences
   - Practical tips (best times, costs, insider advice)
   - Local interactions or memorable moments
   - [INSERT LOCATION MAP HERE]
   
   NOTE: After covering 50% of locations, insert this CTA:
   <div class="my-8 p-6 bg-blue-50 rounded-lg text-center">
     <h3 class="text-xl font-bold mb-4">📍 Save These Places!</h3>
     <p class="mb-4">Add these ${country} recommendations to your personal map with Locator.</p>
     <a href="https://locator.ltd" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
       Start Planning Your Trip
     </a>
   </div>

3. CONCLUSION (200-300 words)
   - Summarize the journey
   - Share personal reflections
   - Offer final tips or recommendations
   - End with an inspiring call to action

WRITING GUIDELINES:
------------------
1. Style:
   - First-person perspective
   - Conversational yet informative tone
   - Rich in sensory details
   - Include dialogue where relevant

2. Technical Requirements:
   - Total length: 2,000-2,500 words
   - SEO-friendly headings
   - Include alt text for images
   - Proper formatting for quotes and citations

3. Cultural Sensitivity:
   - Respect local customs and traditions
   - Use correct local terminology
   - Acknowledge cultural context
   - Avoid stereotypes or generalizations

FINAL ELEMENTS:
--------------
1. Meta Description (150-160 characters)
2. Keywords (5-8 relevant terms)
3. Social Media Snippet (240 characters)
4. Final CTA Block:
   <div class="my-8 p-6 bg-blue-50 rounded-lg text-center">
     <h3 class="text-xl font-bold mb-4">Ready to Explore ${country}?</h3>
     <p class="mb-4">Save all these locations to your personal map and start planning your adventure.</p>
     <a href="https://locator.ltd" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
       Download Locator
     </a>
   </div>`;
};

export { generateBlogPrompt };