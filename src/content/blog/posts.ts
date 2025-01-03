import { post as phuketGuide } from './phuket-local-guide';
import { post as arugamBayGuide } from './arugam-bay-food-guide';
import { post as coronGuide } from './coron-nature-guide';
import { post as karpathosGuide } from './karpathos-local-guide';

export const posts = {
  "phuket-local-guide": phuketGuide,
  "arugam-bay-food-guide": arugamBayGuide,
  "coron-nature-guide": coronGuide,
  "karpathos-local-guide": karpathosGuide
};

export type BlogPost = typeof phuketGuide;