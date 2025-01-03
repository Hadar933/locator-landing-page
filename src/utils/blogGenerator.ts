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
Create an immersive and narrative-driven travel blog post that reads like a personal journey through ${country}:

STORYTELLING STRUCTURE:
---------------------
1. Opening Scene (300-400 words):
   - Begin with a vivid sensory description of arriving at the first location
   - Set the mood and atmosphere of ${country}
   - Weave in cultural context naturally through observations
   - End with a promise of what the journey will reveal

2. Visual Elements:
   - Featured header image: ${headerImage}
   - Format: Responsive 16:9 aspect ratio
   - Caption: Integrate into the narrative flow
   - Use imagery to support the story progression

3. Location Narratives:
For each location (${locationsList}):
   - Open with a personal anecdote or local interaction
   - Describe the atmosphere and energy of the place
   - Weave practical information naturally into the story
   - Include dialogue with locals or fellow travelers
   - Connect each location's story to the next
   - Embed maps as part of the journey's progression
   - Include descriptive transitions between locations

4. Narrative Elements:
   - Use first-person perspective
   - Include sensory details (sights, sounds, smells)
   - Incorporate local characters and conversations
   - Weave in historical context through storytelling
   - Build emotional connections to places
   - Create narrative arcs within each section

SEO & TECHNICAL REQUIREMENTS:
--------------------------
1. Title Structure:
   - Main title: "${title} ${flag}"
   - URL-friendly slug format
   - Meta description as story hook

2. Content Organization:
   - Natural paragraph flow
   - Descriptive subheadings
   - Seamless integration of practical details
   - Narrative transitions between sections

3. Rich Content:
   - Schema markup for travel articles
   - Location coordinates and maps
   - Image optimization and alt text
   - Internal linking through story context

4. User Experience:
   - Clear reading progression
   - Natural placement of practical information
   - Engaging story flow
   - Mobile-responsive layout

CALL-TO-ACTION INTEGRATION:
-------------------------
1. Story-Based CTA:
   - Integrate naturally into the narrative
   - Connect to reader's emotional journey
   - Place at key story moments
   - Maintain narrative flow

2. App Integration:
   - Weave app benefits into the story
   - Show how it enhances the journey
   - Natural connection to narrative

CONTENT GUIDELINES:
-----------------
1. Length: 2,000-2,500 words
2. Style: Personal, immersive, descriptive
3. Voice: Warm, engaging, authentic
4. Flow: Natural story progression
5. Details: Rich in context and atmosphere

This approach creates an engaging narrative that combines practical travel information with compelling storytelling, making the content both useful and enjoyable to read.`;
};
```