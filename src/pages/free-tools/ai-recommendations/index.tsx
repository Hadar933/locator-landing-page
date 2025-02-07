import { useState, useRef, useMemo, useEffect } from 'react';
import { MdSend, MdTravelExplore, MdBeachAccess, MdRestaurant, MdMuseum, 
         MdNaturePeople, MdNightlife, MdHiking, MdLocalActivity, MdShoppingBag, 
         MdHistory, MdDirectionsBoat, MdLocationCity, MdChevronLeft, MdChevronRight, MdLocationOn, MdSearch } from 'react-icons/md';
import { getAIRecommendations } from '../../../services/aiService';
import { getDestinationImage, imageStatus } from '../../../services/imageService';
import { buildAIPrompt } from './prompt';
import './styles.css';
import { COUNTRIES_WITH_FLAGS } from './countries';
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
const CATEGORY_COLOR = 'bg-gray-100 text-gray-700 hover:bg-gray-200';
const CATEGORIES = {
  'Beaches': { icon: <MdBeachAccess />, colorClass: CATEGORY_COLOR },
  'Cuisine': { icon: <MdRestaurant />, colorClass: CATEGORY_COLOR },
  'Culture': { icon: <MdMuseum />, colorClass: CATEGORY_COLOR },
  'Nature': { icon: <MdNaturePeople />, colorClass: CATEGORY_COLOR },
  'Nightlife': { icon: <MdNightlife />, colorClass: CATEGORY_COLOR },
  'Hiking': { icon: <MdHiking />, colorClass: CATEGORY_COLOR },
  'Activities': { icon: <MdLocalActivity />, colorClass: CATEGORY_COLOR },
  'Shopping': { icon: <MdShoppingBag />, colorClass: CATEGORY_COLOR },
  'History': { icon: <MdHistory />, colorClass: CATEGORY_COLOR },
  'Islands': { icon: <MdDirectionsBoat />, colorClass: CATEGORY_COLOR },
  'Cities': { icon: <MdLocationCity />, colorClass: CATEGORY_COLOR }
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function AIRecommendations() {
  const [input, setInput] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageLoadError, setImageLoadError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [monthIndex, setMonthIndex] = useState<number>(new Date().getMonth()); // Initialize with current month
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredCountries = useMemo(() => {
    return Object.entries(COUNTRIES_WITH_FLAGS).filter(([country]) => 
      country.toLowerCase().includes(countrySearch.toLowerCase())
    );
  }, [countrySearch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && selectedCategories.length === 0) return;
    
    const prompt = buildAIPrompt(input, selectedCategories, selectedMonth, selectedCountry, Object.keys(CATEGORIES));
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await getAIRecommendations(prompt);
      
      if (!aiResponse?.parsed?.recommendations?.length) {
        throw new Error('No recommendations received');
      }

      const recommendationsWithImages = await Promise.all(
        aiResponse.parsed.recommendations.map(async rec => {
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
      setError(`'We didnt quite get that. Can you rephrase?'. ${err instanceof Error ? err.message : 'Unknown error'}`);
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

  // Update month selection handler
  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(event.target.value);
    setMonthIndex(index);
    setSelectedMonth(MONTHS[index]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mb-6">
            <MdTravelExplore className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI Travel Recommendations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your travel experiences and preferences, and we'll suggest your next perfect destination
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          {/* Add Country Selection before Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Where would you like to go?</h3>
            <div className="relative" ref={countryDropdownRef}>
              <div 
                className="w-full p-2 border rounded-lg bg-white shadow-sm cursor-pointer"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
              >
                <div className="flex items-center gap-2">
                  <MdSearch className="text-gray-400" />
                  <input
                    type="text"
                    value={selectedCountry ? `${COUNTRIES_WITH_FLAGS[selectedCountry]} ${selectedCountry}` : countrySearch}
                    onChange={(e) => {
                      setCountrySearch(e.target.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '')); // Remove emoji from search
                      setSelectedCountry(null);
                      setIsCountryDropdownOpen(true);
                    }}
                    placeholder="Search countries..."
                    className="w-full outline-none"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>

              {/* Updated Country Dropdown */}
              {isCountryDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
                  {filteredCountries.map(([country, flag]) => (
                    <div
                      key={country}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => {
                        setSelectedCountry(country);
                        setCountrySearch('');
                        setIsCountryDropdownOpen(false);
                      }}
                    >
                      <span className="text-xl">{flag}</span>
                      <span>{country}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Categories Section with Title */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">What interests you?</h3>
            <div className="flex flex-wrap gap-2 justify-center">
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
          </div>

          {/* Month Selection Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">When are you planning to travel?</h3>
            <div className="relative px-4">
              {/* Current month display */}
              <div className="text-center mb-2">
                <span className="text-lg font-medium text-purple-600">
                  {MONTHS[monthIndex]}
                </span>
              </div>
              
              {/* Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="11"
                  value={monthIndex}
                  onChange={handleMonthChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                          accent-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                
                {/* Month labels */}
                <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                  <span>Jan</span>
                  <span className="hidden sm:block">Mar</span>
                  <span className="hidden md:block">May</span>
                  <span className="hidden sm:block">Jul</span>
                  <span className="hidden md:block">Sep</span>
                  <span className="hidden sm:block">Nov</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Custom slider styling */}
              <style>{`
                input[type='range']::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 20px;
                  height: 20px;
                  background: #8B5CF6;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 2px solid white;
                  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                }

                input[type='range']::-moz-range-thumb {
                  width: 20px;
                  height: 20px;
                  background: #8B5CF6;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 2px solid white;
                  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
                }
              `}</style>
            </div>
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