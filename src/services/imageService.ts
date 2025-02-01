const CATEGORY_IMAGES = {
  'Beaches': [
    'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1482555670981-4de159d8553b',
    'https://images.unsplash.com/photo-1509233725247-49e657c54213',
    'https://images.unsplash.com/photo-1471922694854-ff1b63b20054',
    'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57'
  ],
  'Cuisine': [
    'https://images.unsplash.com/photo-1576867757603-05b134ebc379',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    'https://images.unsplash.com/photo-1496412705862-e0088f16f791',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe'
  ],
  'Culture': [
    'https://images.unsplash.com/photo-1528605105345-5344ea20e269',
    'https://images.unsplash.com/photo-1543906965-f9520aa2ed8a',
    'https://images.unsplash.com/photo-1533551268962-824e232f7ee1',
    'https://images.unsplash.com/photo-1459679749680-18eb1eb37418',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  ],
  'Nature': [
    'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f',
    'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e'
  ],
  'Nightlife': [
    'https://images.unsplash.com/photo-1575444758702-4a6b9222336e',
    'https://images.unsplash.com/photo-1570872626485-d8ffea69f463',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3'
  ],
  'Hiking': [
    'https://images.unsplash.com/photo-1501554728187-ce583db33af7',
    'https://images.unsplash.com/photo-1551632811-561732d1e306',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b'
  ],
  'Activities': [
    'https://images.unsplash.com/photo-1526385604508-05e4e7f0bc61',
    'https://images.unsplash.com/photo-1590682680695-43b964a3ae17',
    'https://images.unsplash.com/photo-1502680390469-be75c86b636f',
    'https://images.unsplash.com/photo-1530549387789-4c1017266635',
    'https://images.unsplash.com/photo-1512412046876-f386342eddb3',
    'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be'
  ],
  'Shopping': [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
    'https://images.unsplash.com/photo-1481437156560-3205f6a55735',
    'https://images.unsplash.com/photo-1567958451986-2de427a4a0be',
    'https://images.unsplash.com/photo-1482192505345-5655af888cc4',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc'
  ],
  'History': [
    'https://images.unsplash.com/photo-1461360370896-922624d12aa1',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744',
  ],
  'Islands': [
    'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5',
    'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86',
    'https://images.unsplash.com/photo-1468746587034-766ade47c1ac',
    'https://images.unsplash.com/photo-1516091877740-fde016699f2c',
    'https://images.unsplash.com/photo-1530948990335-1eb93cbe6430',
    'https://images.unsplash.com/photo-1511884642898-4c92249e20b6'
  ],
  'Cities': [
    'https://images.unsplash.com/photo-1470004914212-05527e49370b',
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb',
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    'https://images.unsplash.com/photo-1444723121867-7a241cacace9',
    'https://images.unsplash.com/photo-1522083165195-3424ed129620',
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c'
  ],
};


export const imageStatus = {
  message: '',
  isLoading: false,
  error: false
};

// Track used images
const usedImages = new Set<string>();

function getRandomImage(array: string[]): string {
  // Filter out previously used images
  const availableImages = array.filter(img => !usedImages.has(img));
  
  // If all images have been used, reset the tracking
  if (availableImages.length === 0) {
    usedImages.clear();
    return `${array[Math.floor(Math.random() * array.length)]}?w=1200`;
  }
  
  // Get random image from remaining available images
  const selectedImage = availableImages[Math.floor(Math.random() * availableImages.length)];
  usedImages.add(selectedImage);
  return `${selectedImage}?w=1200`;
}

export async function getDestinationImage(tags: string[] = []): Promise<string> {
  // Find first matching tag that exists in our categories
  const matchingTag = tags.find(tag => tag in CATEGORY_IMAGES);
  
  if (!matchingTag || !CATEGORY_IMAGES[matchingTag]) {
    // If no matching tag found, use Cities as default
    return getRandomImage(CATEGORY_IMAGES['Cities']);
  }
  
  return getRandomImage(CATEGORY_IMAGES[matchingTag]);
}
