export interface Location {
  name: string;
  googleMapLink: string;
  contentSections: {
    introduction: string;
    highlights: string[];
    bestTimeToVisit: string;
    insiderTips: string[];
    mapEmbed: string;
  };
}

export interface BlogInput {
  title: string;
  headerImage: string;
  country: string;
  locations: {
    name: string;
    googleMapLink: string;
  }[];
  category?: string;
  author?: string;
}