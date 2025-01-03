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

  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
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
   IMPORTANT: Make sure to include a compelling CTA at the end that:
   - References specific moments from the journey
   - Highlights how the app enhances travel experiences
   - Emphasizes the value of saving these locations
   - Encourages readers to start their own adventure
   - Uses emotional connection to drive action
   - Position it naturally within the flow of content
   - Make it feel like a natural extension of the story
   - Avoid making it feel too promotional

SEO & TECHNICAL REQUIREMENTS:
--------------------------
1. Title Structure:
   Main title: "${title} ${flag}"
   URL-friendly slug format
   Meta description as story hook

2. Content Organization:
   Natural paragraph flow
   Descriptive subheadings
   Seamless integration of practical details
   Narrative transitions between sections

3. Rich Content:
   Schema markup for travel articles
   Location coordinates and maps
   Image optimization and alt text
   Internal linking through story context

4. User Experience:
   Clear reading progression
   Natural placement of practical information
   Engaging story flow
   Mobile-responsive layout

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