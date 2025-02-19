import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, PlaneTakeoff, PlaneLanding, MapPin, Shuffle, Book, FlipVertical, ArrowUpDown } from "lucide-react";
import type { Airport } from './flight-time/airportSearch';
import { AirportMap } from './flight-time/AirportMap';
import { searchAirports, findNearestAirport, getRandomAirport } from './flight-time/airportSearch';
import { PopularRoutes } from './flight-time/PopularRoutes';
import { calculateFlightDistance, type FlightDistance } from './flight-time/distanceCalculator';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { SEO } from './SEO';

interface SavedState {
  fromAirport: Airport | null;
  toAirport: Airport | null;
  fromValue: string;
  toValue: string;
  userLocation: { lat: number; lon: number } | null;
}

export const FlightTime: React.FC = () => {
  const navigate = useNavigate();
  const { source, destination } = useParams<{ source?: string; destination?: string }>();
  const [fromOptions, setFromOptions] = useState<Airport[]>([]);
  const [toOptions, setToOptions] = useState<Airport[]>([]);
  const [fromAirport, setFromAirport] = useState<Airport | null>(null);
  const [toAirport, setToAirport] = useState<Airport | null>(null);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [surpriseLoading, setSurpriseLoading] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [distance, setDistance] = useState<FlightDistance | null>(null);

  // Add a ref to track if airports were loaded from URL
  const loadedFromUrl = useRef(false);

  // Load saved state on mount
  useEffect(() => {
    const savedState = localStorage.getItem('flighttimeState');
    if (savedState) {
      const parsed = JSON.parse(savedState) as SavedState;
      setFromAirport(parsed.fromAirport);
      setToAirport(parsed.toAirport);
      setFromValue(parsed.fromValue);
      setToValue(parsed.toValue);
      setUserLocation(parsed.userLocation);
    }
  }, []);

  // Save state when it changes
  useEffect(() => {
    const stateToSave: SavedState = {
      fromAirport,
      toAirport,
      fromValue,
      toValue,
      userLocation
    };
    localStorage.setItem('flighttimeState', JSON.stringify(stateToSave));
  }, [fromAirport, toAirport, fromValue, toValue, userLocation]);

  // Clear state when component unmounts
  useEffect(() => {
    return () => {
      // Only clear if we're not navigating to the blog
      if (!window.location.pathname.startsWith('/blog')) {
        localStorage.removeItem('flighttimeState');
      }
    };
  }, []);

  // Modify the URL update effect to prevent overriding URL parameters
  useEffect(() => {
    if (fromAirport && toAirport && !loadedFromUrl.current) {
      const fromCity = fromAirport.city.toLowerCase().replace(/\s+/g, '-');
      const toCity = toAirport.city.toLowerCase().replace(/\s+/g, '-');
      navigate(`/flight-time/${fromCity}/to/${toCity}`, { replace: true });
    }
  }, [fromAirport, toAirport]);

  // Load airports from URL params on mount
  useEffect(() => {
    const loadAirportsFromUrl = async () => {
      if (source && destination) {
        setLoading(true);
        loadedFromUrl.current = true;  // Set the flag before loading
        try {
          // Format the city names from URL
          const sourceCity = decodeURIComponent(source).replace(/-/g, ' ');
          const destCity = decodeURIComponent(destination).replace(/-/g, ' ');

          // Enhanced search to find best matching airports
          const fromResults = await searchAirports(sourceCity);
          const toResults = await searchAirports(destCity);

          // Find best matching airport by city name (case insensitive)
          const bestFromMatch = fromResults.find(
            airport => airport.city.toLowerCase() === sourceCity.toLowerCase()
          ) || fromResults[0];

          const bestToMatch = toResults.find(
            airport => airport.city.toLowerCase() === destCity.toLowerCase()
          ) || toResults[0];

          if (bestFromMatch) {
            setFromAirport(bestFromMatch);
            setFromValue(formatAirportName(bestFromMatch));
          }

          if (bestToMatch) {
            setToAirport(bestToMatch);
            setToValue(formatAirportName(bestToMatch));
          }

          // Calculate distance if both airports are found
          if (bestFromMatch && bestToMatch) {
            const result = calculateFlightDistance(bestFromMatch, bestToMatch);
            setDistance(result);
          }
        } finally {
          setLoading(false);
          // Reset the flag after a short delay to allow future manual updates
          setTimeout(() => {
            loadedFromUrl.current = false;
          }, 100);
        }
      }
    };

    loadAirportsFromUrl();
  }, [source, destination]);

  const handleSearch = async (query: string, setOptions: (airports: Airport[]) => void) => {
    if (query.length < 2) {
      setOptions([]);
      return;
    }
    setLoading(true);
    try {
      const results = await searchAirports(query);
      setOptions(results.slice(0, 10)); // Limit to first 10 results for better performance
    } finally {
      setLoading(false);
    }
  };

  const formatAirportName = (airport: Airport) => 
    `${airport.name} (${airport.iata}) - ${airport.city}, ${airport.country}`;

  const handleLocationClick = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLocationLoading(true);
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });

      const nearestAirport = await findNearestAirport(
        position.coords.latitude,
        position.coords.longitude
      );

      if (nearestAirport) {
        setFromAirport(nearestAirport);
        setFromValue(formatAirportName(nearestAirport));
        setFromOptions([]);
      } else {
        alert("No airports found near your location");
      }
    } catch (error) {
      alert("Error getting your location. Please try searching manually.");
    } finally {
      setLocationLoading(false);
    }
  };

  const handleSurpriseMe = async () => {
    setSurpriseLoading(true);
    try {
      const randomAirport = await getRandomAirport();
      setToAirport(randomAirport);
      setToValue(formatAirportName(randomAirport));
      setToOptions([]);
    } finally {
      setSurpriseLoading(false);
    }
  };

  const handleRecommendations = () => {
    if (!toAirport) return;
    navigate(`/blog/${toAirport.country.toLowerCase()}`);
  };

  const handleSelectPopularRoute = async (fromIata: string, toIata: string) => {
    setLoading(true);
    try {
      const airports = await searchAirports(fromIata);
      const fromAirport = airports.find(a => a.iata === fromIata);
      if (fromAirport) {
        setFromAirport(fromAirport);
        setFromValue(formatAirportName(fromAirport));
      }

      const toAirports = await searchAirports(toIata);
      const toAirport = toAirports.find(a => a.iata === toIata);
      if (toAirport) {
        setToAirport(toAirport);
        setToValue(formatAirportName(toAirport));
      }
    } finally {
      setLoading(false);
    }
  };

  // Add effect to automatically calculate distance when airports change
  useEffect(() => {
    if (fromAirport && toAirport) {
      const result = calculateFlightDistance(fromAirport, toAirport);
      setDistance(result);
    }
  }, [fromAirport, toAirport]);

  const getHeaderText = () => {
    if (fromAirport && toAirport) {
      return `${fromAirport.city} to ${toAirport.city} Flight Time`;
    }
    return 'Flight Time Calculator';
  };

  const handleFlip = () => {
    // Swap airports
    const tempAirport = fromAirport;
    const tempValue = fromValue;
    
    setFromAirport(toAirport);
    setFromValue(toValue);
    setToAirport(tempAirport);
    setToValue(tempValue);
  };

  // Generate SEO data
  const generateSEOData = () => {
    if (!fromAirport || !toAirport) {
      return {
        title: 'Flight Time Calculator - Calculate Travel Time Between Airports',
        description: 'Calculate flight times between any airports worldwide. Get accurate estimates of travel duration, distance, and route information for your journey.',
        canonical: '/flight-time'
      };
    }

    const fromCity = fromAirport.city;
    const toCity = toAirport.city;
    const distanceKm = distance?.actual.km || 0;
    const flightHours = distance?.duration.hours || 0;
    const flightMinutes = distance?.duration.minutes || 0;

    return {
      title: `Flight Time from ${fromCity} to ${toCity} - Duration & Distance Calculator`,
      description: `Flight time from ${fromCity} to ${toCity} is ${flightHours}h ${flightMinutes}m. The flight distance is ${distanceKm} kilometers. Get detailed route information and travel times.`,
      canonical: `/flight-time/${fromCity.toLowerCase().replace(/\s+/g, '-')}/to/${toCity.toLowerCase().replace(/\s+/g, '-')}`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Trip",
        "name": `${fromCity} to ${toCity} Flight`,
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "TravelAction",
              "fromLocation": {
                "@type": "Airport",
                "name": fromAirport.name,
                "iataCode": fromAirport.iata,
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": fromAirport.country,
                  "addressLocality": fromAirport.city
                }
              },
              "toLocation": {
                "@type": "Airport",
                "name": toAirport.name,
                "iataCode": toAirport.iata,
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": toAirport.country,
                  "addressLocality": toAirport.city
                }
              },
              "distance": {
                "@type": "Distance",
                "value": distanceKm,
                "unitCode": "KMT"
              }
            }
          ]
        }
      }
    };
  };

  const seoData = generateSEOData();

  return (
    <>
      <SEO {...seoData} />
      <div className="container max-w-6xl mx-auto p-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-4">
          <Card className="flex-1 min-w-0"> {/* added min-w-0 to prevent overflow */}
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-6 w-6" />
                {getHeaderText()}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <PlaneTakeoff className="h-4 w-4" />
                    <span>From Airport</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleLocationClick}
                      disabled={locationLoading}
                    >
                      <MapPin className="h-4 w-4 mr-1" />
                      {locationLoading ? "Finding..." : "Use my location"}
                    </Button>
                  </div>
                  <Input 
                    placeholder="Search airports..."
                    value={fromValue}
                    onChange={(e) => {
                      setFromValue(e.target.value);
                      handleSearch(e.target.value, setFromOptions);
                    }}
                  />
                  {fromOptions.length > 0 && (
                    <div className="border rounded-md max-h-60 overflow-y-auto">
                      {fromOptions.map((airport) => (
                        <button
                          key={airport.id}
                          className="w-full px-3 py-2 text-left hover:bg-accent text-sm flex items-center gap-2"
                          onClick={() => {
                            setFromAirport(airport);
                            setFromValue(formatAirportName(airport));
                            setFromOptions([]);
                          }}
                        >
                          {formatAirportName(airport)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      <PlaneLanding className="h-4 w-4" />
                      <span>To Airport</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {fromAirport && toAirport && (
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={handleFlip}
                        >
                          <ArrowUpDown className="h-4 w-4 mr-1" />
                          Switch
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleSurpriseMe}
                        disabled={surpriseLoading}
                      >
                        <Shuffle className="h-4 w-4 mr-1" />
                        {surpriseLoading ? "Selecting..." : "Surprise Me"}
                      </Button>
                    </div>
                  </div>
                  <Input 
                    placeholder="Search airports..."
                    value={toValue}
                    onChange={(e) => {
                      setToValue(e.target.value);
                      handleSearch(e.target.value, setToOptions);
                    }}
                  />
                  {toOptions.length > 0 && (
                    <div className="border rounded-md max-h-60 overflow-y-auto">
                      {toOptions.map((airport) => (
                        <button
                          key={airport.id}
                          className="w-full px-3 py-2 text-left hover:bg-accent text-sm flex items-center gap-2"
                          onClick={() => {
                            setToAirport(airport);
                            setToValue(formatAirportName(airport));
                            setToOptions([]);
                          }}
                        >
                          {formatAirportName(airport)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="h-[200px] lg:h-[300px]">
                <AirportMap 
                  fromAirport={fromAirport} 
                  toAirport={toAirport} 
                />
              </div>

              {fromAirport && toAirport && (
                <div className="space-y-4">
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={handleRecommendations}
                  >
                    <Book className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">
                      Find {toAirport.country} recommendations on our blog ✈️
                    </span>
                  </Button>

                  {distance && (
                    <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
                      {/* Main flight time display */}
                      <div className="text-center pb-4 mb-4 border-b">
                        <div className="text-sm text-muted-foreground mb-1">Estimated Flight Time</div>
                        <div className="text-4xl font-bold">
                          {distance.duration.hours}h {distance.duration.minutes.toString().padStart(2, '0')}min
                        </div>
                      </div>

                      {/* Secondary details in a grid */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium">Direct Distance</div>
                          <div className="text-muted-foreground">
                            {distance.direct.km} km / {distance.direct.miles} miles
                          </div>
                        </div>
                        <div>
                          <div className="font-medium flex items-center gap-2">
                            Actual Flight Distance
                            <HoverCard>
                              <HoverCardTrigger>
                                <Info className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80 bg-white dark:bg-gray-950 shadow-lg">
                                <div className="space-y-3">
                                  <p>The actual flight distance includes additional factors beyond the direct route:</p>
                                  <ul className="list-disc ml-4 text-sm text-muted-foreground space-y-2">
                                    <li>Short flights (&lt;1500km): +18% to account for more takeoff/landing procedures</li>
                                    <li>Medium flights (1500-3000km): +15% for standard routing</li>
                                    <li>Long flights (&gt;3000km): +12% as routes become more direct</li>
                                  </ul>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    These approximations are based on typical flight paths and air traffic patterns.
                                  </p>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          </div>
                          <div className="text-muted-foreground">
                            {distance.actual.km} km / {distance.actual.miles} miles
                          </div>
                        </div>
                        <div className="col-span-2 pt-2">
                          <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                            <div>Cruising Speed: {distance.details.cruisingSpeed} km/h</div>
                            <div>Timezone Change: {distance.details.timezoneDifference} hours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
          <div className="lg:block">
            <PopularRoutes onSelectRoute={handleSelectPopularRoute} />
          </div>
        </div>
      </div>
    </>
  );
};
