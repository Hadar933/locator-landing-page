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

interface BlogStructure {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate: string;
  image: string;
  country: string;
  flag: string;
  locations: {
    name: string;
    googleMapLink: string;
    coordinates?: {lat: number, lng: number};
    contentSections: {
      introduction: string;
      highlights: string[];
      bestTimeToVisit: string;
      insiderTips: string[];
      mapEmbed: string;
    };
  }[];
  callToAction: {
    position: number; // After which location to insert the CTA
    text: string;
    buttonText: string;
    link: string;
  };
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
}: BlogInput): BlogStructure => {
  const inferredCountry = country || inferCountryFromTitle(title);
  const flag = countryFlags[inferredCountry] || '🌍';
  const currentDate = new Date().toISOString().split('T')[0];

  return {
    title: `${flag} ${title}`,
    description: `Discover the best locations and hidden gems in ${inferredCountry}. A comprehensive guide to ${title}.`,
    author: "Locator Team",
    publishDate: currentDate,
    modifiedDate: currentDate,
    image: headerImage,
    country: inferredCountry,
    flag,
    locations: locations.map(location => ({
      name: location.name,
      googleMapLink: location.googleMapLink,
      coordinates: location.coordinates,
      contentSections: {
        introduction: "[AI: Add engaging introduction about the location]",
        highlights: [
          "[AI: Add key highlight 1]",
          "[AI: Add key highlight 2]",
          "[AI: Add key highlight 3]"
        ],
        bestTimeToVisit: "[AI: Add best time to visit information]",
        insiderTips: [
          "[AI: Add insider tip 1]",
          "[AI: Add insider tip 2]"
        ],
        mapEmbed: `<iframe
          src="${location.googleMapLink}"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>`
      }
    })),
    callToAction: {
      position: 1, // Default to after the second location
      text: "Want to save these places for your next trip?",
      buttonText: "Download Locator App",
      link: "https://locator.ltd"
    }
  };
};