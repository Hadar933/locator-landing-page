import { post as phuketGuide } from './phuket-local-guide';
import { post as arugamBayGuide } from './arugam-bay-food-guide';
import { post as coronGuide } from './coron-nature-guide';
import { post as karpathosGuide } from './karpathos-local-guide';
import { post as telAvivCafeGuide } from './tel-aviv-cafe-guide';
import { post as naplesStreetsGuide } from './naples-streets-guide';
import { post as telAvivBurgerGuide } from './tel-aviv-burger-guide';

export interface BlogLocation {
  name: string;
  googleMapLink: string;
  coordinates?: {lat: number, lng: number};
  contentSections: {
    introduction: string;
    highlights: string[];
    bestTimeToVisit: string;
    mapEmbed: string;
  };
}

export interface BlogPost {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  modifiedDate: string;
  image: string;
  content?: string;
  country?: string;
  flag?: string;
  locations?: BlogLocation[];
  callToAction?: {
    position: number;
    text: string;
    buttonText: string;
    link: string;
  };
  tags?: string[];
  category?: string;
  readingTime?: string;
}

export const posts: Record<string, BlogPost> = {
  "phuket-local-guide": phuketGuide,
  "arugam-bay-food-guide": arugamBayGuide,
  "coron-nature-guide": coronGuide,
  "karpathos-local-guide": karpathosGuide,
  "tel-aviv-cafe-guide": telAvivCafeGuide,
  "naples-streets-guide": naplesStreetsGuide,
  "tel-aviv-burger-guide": telAvivBurgerGuide
};