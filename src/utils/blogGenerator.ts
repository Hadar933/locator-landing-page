import { BlogInput } from "@/types/blog";

const generateContextSpecificCTA = (category: string) => {
  switch (category.toLowerCase()) {
    case 'food guide':
      return 'Map your favorite food spots';
    case 'nature guide':
      return 'Map your nature exploration spots';
    case 'shopping guide':
      return 'Save these shopping destinations';
    default:
      return 'Save these locations';
  }
};

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

  const today = new Date().toISOString().split('T')[0];
  const flag = countryFlags[country] || '🌍';
  
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
      `Custom Information:
       ${loc.customInfo.map(info => `- ${info}`).join('\n')}` : 
      'Generic location description will be used';
    
    return `- ${loc.name}
      Map embed code: ${mapEmbedCode}
      Google Maps link: ${loc.googleMapLink}
      ${customInfoSection}`;
  }).join('\n');

  const ctaTemplate = `
  <div class="my-12 text-center">
    <a href="/" class="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
      ${generateContextSpecificCTA(category)} with Locator
    </a>
  </div>`;

  return `
Create an immersive and narrative-driven travel blog post that reads like a personal journey through ${country}:

STORYTELLING STRUCTURE:
---------------------
1. Opening Scene:
   Begin with a vivid sensory description that places the reader right in the heart of ${country}. 
   Paint a picture of the atmosphere, the sounds, the smells, and the energy of the place.
   Weave in cultural context naturally through your observations.

2. Visual Elements:
   Featured header image: ${headerImage}
   Format: Responsive 16:9 aspect ratio
   Use imagery to support the story progression

3. Location Narratives:
For each location (${locationsList}):
   Share a personal anecdote or memorable encounter
   Describe the unique atmosphere and character
   Include practical visiting information
   Create smooth transitions between locations
   Integrate maps as part of the journey
   Build emotional connections to each place

   IMPORTANT: After describing 50% of the locations, insert this CTA:
   ${ctaTemplate}

4. Narrative Elements:
   Write in first-person perspective
   Include rich sensory details
   Feature local characters and conversations
   Weave historical context through storytelling
   Create emotional connections to places
   Build narrative arcs within each section

5. Ending Note:
   Craft a reflective conclusion that:
   - Ties together the journey's highlights
   - Shares a personal insight or transformation
   - Connects the experience to universal themes
   - Invites readers to imagine their own journey
   - Ends with an evocative final image or moment

6. Final Call-to-Action:
   IMPORTANT: End the post with:
   ${ctaTemplate}

CONTENT GUIDELINES:
-----------------
1. Length: 2,000-2,500 words
2. Style: Personal, immersive, descriptive
3. Voice: Warm, engaging, authentic
4. Flow: Natural story progression
5. Details: Rich in context and atmosphere
6. Publication Date: ${today}

This approach creates an engaging narrative that combines practical travel information with compelling storytelling, making the content both useful and enjoyable to read.`;
};