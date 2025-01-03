interface Location {
  googleMapLink: string;
  name: string;
  coordinates?: {lat: number, lng: number};
  description?: string;
}

interface BlogInput {
  title?: string;
  headerImage: string;
  country?: string;
  locations: Location[];
}

const countryFlags: Record<string, string> = {
  'Philippines': '🇵🇭',
  'Thailand': '🇹🇭',
  'Sri Lanka': '🇱🇰',
  'Greece': '🇬🇷',
  'Israel': '🇮🇱',
  'Italy': '🇮🇹'
};

const inferCountryFromTitle = (title: string): string => {
  const countries = Object.keys(countryFlags);
  return countries.find(country => title.toLowerCase().includes(country.toLowerCase())) || 'Unknown';
};

export const generateBlogPost = ({ 
  title = '', 
  headerImage, 
  country, 
  locations 
}: BlogInput) => {
  const inferredCountry = country || inferCountryFromTitle(title);
  const flag = countryFlags[inferredCountry] || '🌍';
  
  const currentDate = new Date().toISOString().split('T')[0];
  
  const generateLocationContent = (location: Location, index: number) => {
    return location.description || `
      <section class="space-y-6">
        <h2 class="text-2xl font-bold">${location.name}</h2>
        
        <!-- Pre-content for ${location.name} -->
        <p>[Add engaging introduction about ${location.name} here]</p>

        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="${location.googleMapLink}"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Post-content for ${location.name} -->
        <p>[Add detailed description, tips, and experiences about ${location.name} here]</p>
      </section>

      ${index === 1 ? `
        <div class="my-12 text-center">
          <a href="/" class="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Add these places to Locator
          </a>
        </div>
      ` : ''}
    `;
  };

  const content = `
    <div class="space-y-8">
      <p class="text-lg leading-relaxed">
        [Add introduction about the overall experience and what makes these locations special]
      </p>

      ${locations.map((location, index) => generateLocationContent(location, index)).join('\n')}

      <section class="mt-12 space-y-4">
        <h2 class="text-2xl font-bold">Tips for Your Visit</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>[Add practical tip 1]</li>
          <li>[Add practical tip 2]</li>
          <li>[Add practical tip 3]</li>
          <li>[Add practical tip 4]</li>
        </ul>
      </section>
    </div>
  `;

  return {
    title: `${flag} ${title}`,
    description: `Discover the best locations and hidden gems in ${inferredCountry}. A comprehensive guide to ${title}.`,
    author: "Locator Team",
    publishDate: currentDate,
    modifiedDate: currentDate,
    image: headerImage,
    content
  };
};