export interface Location {
  name: string;
  googleMapLink: string;
  contentSections: {
    introduction: string;
    bestTimeToVisit: string;
    mapEmbed: string;
    customInfo?: string[];
  };
}

export interface BlogInput {
  title: string;
  headerImage: string;
  country: string;
  locations: {
    name: string;
    googleMapLink: string;
    customInfo?: string[];
  }[];
  category?: string;
  author?: string;
}