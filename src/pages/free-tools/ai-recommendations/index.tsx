import { useState, useRef } from 'react';
import { MdSend, MdTravelExplore, MdBeachAccess, MdRestaurant, MdMuseum, 
         MdNaturePeople, MdNightlife, MdHiking, MdLocalActivity, MdShoppingBag, 
         MdHistory, MdDirectionsBoat, MdLocationCity, MdChevronLeft, MdChevronRight, MdLocationOn } from 'react-icons/md';
import { getAIRecommendations } from '../../../services/aiService';
import { getDestinationImage, imageStatus } from '../../../services/imageService';
import './styles.css';

interface Recommendation {
  destination: string;
  country: string;
  description: string;
  tags: string[];
  tagIcons: Record<string, JSX.Element>;
  imageUrl: string;  // Added imageUrl property
  highlights: string[];
  reasoning: string;
}

export interface AIRecommendationResponse { 
  recommendations: {
    destination: string;
    country: string;
    description: string;
    relevant_categories: string[];
    highlights: string[];
    reasoning: string;
  }[];
}

const CATEGORIES = {
  'Beaches': { icon: <MdBeachAccess />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Cuisine': { icon: <MdRestaurant />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Culture': { icon: <MdMuseum />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Nature': { icon: <MdNaturePeople />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Nightlife': { icon: <MdNightlife />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Hiking': { icon: <MdHiking />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Activities': { icon: <MdLocalActivity />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Shopping': { icon: <MdShoppingBag />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'History': { icon: <MdHistory />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Islands': { icon: <MdDirectionsBoat />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
  'Cities': { icon: <MdLocationCity />, colorClass: 'bg-gray-100 text-gray-700 hover:bg-gray-200' }
};

const buildAIPrompt = (userInput: string, categories: string[]): string => {
  return `You are an AI travel recommendation assistant. Your task is to provide 3-4 travel recommendations based on the user's input. The inputs you will receive are:

1. **Categories of Interest:** A list of travel-related categories, one of: ${categories.join(', ')}.
2. **User Description:** A free text input where the user explains what they liked about previous travels and what they are looking for in future trips.

Based on these inputs, generate a list of travel recommendations. For each recommendation, include the following details:

- **Destination Name:** Provide a specific destination name (city, region, or specific location).
- **Country:** ALWAYS include the full country name where the destination is located.
- **Description:** A brief summary of the destination and why it fits the user's interests.
- **Relevant Categories:** The categories from the user's input that this destination aligns with.
- **Highlights:** Key attractions or experiences the destination offers (e.g., museums, natural landscapes, local cuisine, adventure activities).
- **Recommendation Reasoning:** A short explanation of why this destination is a good match based on the user's description.

Return your answer in the following structured JSON format:

{
  "recommendations": [
    {
      "destination": "Destination Name",
      "country": "Country Name",
      "description": "Brief summary of the destination",
      "relevant_categories": ["category1", "category2"],
      "highlights": ["highlight1", "highlight2"],
      "reasoning": "Brief explanation of why this destination fits the user's interests"
    }
  ]
}
Return NOTHING ELSE.
Ensure that your recommendations are specific, and align closely with both the provided categories and the nuanced details mentioned in the user's free text description. do not respond with generic recommendations like a city or a country
OK, lets start:
categories: ${categories.join(', ')}
user wrote: ${userInput}`;
};

export default function AIRecommendations() {
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageLoadError, setImageLoadError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && selectedCategories.length === 0) return;
    
    const prompt = buildAIPrompt(input, selectedCategories);
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await getAIRecommendations(prompt);
      
      if (!aiResponse?.parsed?.recommendations?.length) {
        throw new Error('No recommendations received');
      }

      const recommendationsWithImages = await Promise.all(
        aiResponse.parsed.recommendations.map(async rec => {
          // Pass the relevant categories to getDestinationImage
          const imageUrl = await getDestinationImage(rec.relevant_categories || selectedCategories);
          return {
            destination: rec.destination,
            country: rec.country,
            description: rec.description,
            tags: rec.relevant_categories || [],
            highlights: rec.highlights || [],
            reasoning: rec.reasoning,
            tagIcons: Object.fromEntries(
              Object.entries(CATEGORIES).map(([key, value]) => [key, value.icon])
            ),
            imageUrl
          };
        })
      );
      
      setRecommendations(recommendationsWithImages);
    } catch (err) {
      setError(`Failed to get recommendations. Please try again. ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16"> {/* Reduced top padding */}
      <div className="max-w-4xl mx-auto px-4"> {/* Reduced max width */}
        <div className="text-center mb-12">
          <MdTravelExplore className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI Travel Recommendations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your travel experiences and preferences, and we'll suggest your next perfect destination
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {Object.entries(CATEGORIES).map(([category, { icon, colorClass }]) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 text-sm
                  ${selectedCategories.includes(category)
                    ? 'bg-blue-500 text-white'
                    : colorClass}
                `}
              >
                <span className="w-4 h-4">{icon}</span>
                {category}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tell me about places you've enjoyed..."
                className="flex-1 px-6 py-4 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
              <button 
                type="submit"
                className="pr-6 pl-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <MdSend className="w-6 h-6" />
              </button>
            </div>
          </form>

        </div>

        {isLoading && (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {error && (
          <div className="text-red-500 text-center my-4">
            {error}
          </div>
        )}

        {recommendations.length > 0 && (
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <MdChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar" // Reduced gap
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex-none w-full md:w-[calc(100%-1rem)] lg:w-[calc(50%-1rem)] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden" // Changed to 50% width and reduced size
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div 
                    className="h-40 w-full bg-cover bg-center relative" // Reduced height
                    style={{ 
                      backgroundImage: `url(${rec.imageUrl})`,
                      backgroundColor: '#f3f4f6' // Placeholder color while loading
                    }}
                  >
                    {/* Simple static placeholder instead of animated one */}
                    {!rec.imageUrl && (
                      <div 
                        className="absolute inset-0 bg-gray-200"
                      />
                    )}
                    {imageStatus.isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500"></div>
                      </div>
                    )}
                    {imageStatus.message && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2">
                        {imageStatus.message}
                      </div>
                    )}
                  </div>
                  <div className="p-4"> {/* Reduced padding */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2"> {/* Reduced text size */}
                      {rec.destination}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600">
                        <MdLocationOn className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          {rec.country}
                        </span>
                      </div>
                      {/* Moved categories here */}
                      <div className="flex flex-wrap gap-1">
                        {rec.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-700"
                          >
                            {rec.tagIcons[tag]}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 text-sm"> {/* Reduced margin */}
                      {rec.description}
                    </p>
                    
                    {/* Highlights Section */}
                    <div className="mb-3"> {/* Reduced margin */}
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Highlights:</h4>
                      <ul className="list-disc list-inside text-xs text-gray-600 space-y-0.5">
                        {rec.highlights.slice(0, 3).map((highlight, i) => ( // Limit to 3 highlights
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Reasoning Section */}
                    <div className="mb-3">
                      <div className="inline-block px-3 py-0.5 mb-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                        LocatorAI thinks:
                      </div>
                      <div className="p-2 bg-blue-50 rounded">
                        <p className="text-xs text-blue-700">
                          {rec.reasoning}
                        </p>
                      </div>
                    </div>

                    {/* Remove the old categories section at the bottom */}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <MdChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
