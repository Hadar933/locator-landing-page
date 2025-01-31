import { majorAirports, searchAirportsByQuery, AirportData } from '@/data/airports';

export interface Location {
  city: string;
  code: string;
  country: string;
  lat: number;
  lng: number;
  name: string;
}

export const searchCities = async (query: string): Promise<Location[]> => {
  return [];
};

export const calculateDistance = (from: Location, to: Location): number => {
  return 1000; // dummy distance
};

export const calculateFlightDuration = (distance: number) => {
  return { hours: 2, minutes: 30 }; // dummy duration
};

export function searchAirports(query: string): Array<Location> {
  return searchAirportsByQuery(query).map(airport => ({
    city: airport.city,
    code: airport.code,
    country: airport.country,
    lat: airport.lat,
    lng: airport.lng,
    name: airport.name
  }));
}

export function getAirportInfo(code: string): Location | null {
  const airport = majorAirports.find(a => a.code === code.toUpperCase());
  if (!airport) return null;
  
  return {
    city: airport.city,
    code: airport.code,
    country: airport.country,
    lat: airport.lat,
    lng: airport.lng,
    name: airport.name
  };
}

export function isValidAirport(code: string): boolean {
  return majorAirports.some(a => a.code === code.toUpperCase());
}

export const getAvailableAirports = (): string[] => {
  return majorAirports.map(a => a.code);
};

export function fromAirport(code: string): AirportData | null {
  return majorAirports.find(a => a.code === code.toUpperCase()) || null;
}
