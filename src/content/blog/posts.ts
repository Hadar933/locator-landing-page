import { post as phuketGuide } from './phuket-local-guide';
import { post as arugamBayGuide } from './arugam-bay-food-guide';
import { post as coronGuide } from './coron-nature-guide';
import { post as karpathosGuide } from './karpathos-local-guide';
import { post as telAvivCafeGuide } from './tel-aviv-cafe-guide';
import { post as naplesStreetsGuide } from './naples-streets-guide';
import { post as telAvivBurgerGuide } from './tel-aviv-burger-guide';
import { post as mirissaGuide } from './mirissa-backpacking-guide';
import { post as hongKongTemplesGuide } from './hong-kong-temples-guide';
import { post as croatiaCitiesGuide } from './croatia-cities-guide';
import { post as baliGuide } from './bali-local-guide';
import { post as tokyoGuide } from './tokyo-local-guide';
import { post as pragueGuide } from './prague-local-guide';
import { post as elNidoGuide } from './el-nido-palawan-guide';
import { post as northernVietnamGuide } from './northern-vietnam-guide';

export interface BlogLocation {
  name: string;
  googleMapLink: string;
  coordinates?: {lat: number, lng: number};
  contentSections: {
    introduction: string;
    bestTimeToVisit: string;
    mapEmbed: string;
    customInfo?: string[];
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
  "tel-aviv-burger-guide": telAvivBurgerGuide,
  "mirissa-backpacking-guide": mirissaGuide,
  "hong-kong-temples-guide": hongKongTemplesGuide,
  "croatia-cities-guide": croatiaCitiesGuide,
  "bali-local-guide": baliGuide,
  "tokyo-local-guide": tokyoGuide,
  "prague-local-guide": pragueGuide,
  "el-nido-palawan-guide": elNidoGuide,
  "northern-vietnam-guide": northernVietnamGuide
};
