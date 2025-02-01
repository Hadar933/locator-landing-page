const TAG_IMAGES: Record<string, string> = {
  'Beaches': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Beach_at_Fort_Lauderdale.jpg',
  'Nightlife': 'https://upload.wikimedia.org/wikipedia/commons/c/c0/1_times_square_night_2013.jpg',
  'Cuisine': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg'
};

const DEFAULT_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg';

export async function getDestinationImage(tags: string[]): Promise<string> {
  if (!tags || tags.length === 0) {
    return DEFAULT_IMAGE;
  }

  return TAG_IMAGES[tags[0]] || DEFAULT_IMAGE;
}
