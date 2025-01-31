import type { Airport } from './airportSearch';

export interface FlightDistance {
  direct: {
    km: number;
    miles: number;
  };
  actual: {
    km: number;
    miles: number;
  };
  duration: {
    hours: number;
    minutes: number;
  };
  details: {
    cruisingSpeed: number;
    timezoneDifference: number;
  };
}

const EARTH_RADIUS_KM = 6371;
const KM_TO_MILES = 0.621371;
const BASE_ROUTE_COEFFICIENT = 1.15;

// Speed adjustments based on distance
const SPEED_PROFILES = {
  SHORT_HAUL: { // 0-1500km
    speed: 750,
    taxiTime: 40, // minutes
    coefficient: 1.18 // More indirect due to air traffic
  },
  MEDIUM_HAUL: { // 1500-3000km
    speed: 850,
    taxiTime: 45,
    coefficient: 1.15
  },
  LONG_HAUL: { // 3000-8000km
    speed: 900,
    taxiTime: 50,
    coefficient: 1.12 // More direct routes for long distances
  },
  ULTRA_LONG_HAUL: { // >8000km
    speed: 920,
    taxiTime: 55,
    coefficient: 1.10 // More direct routes for very long distances
  }
};

function getFlightProfile(distanceKm: number) {
  if (distanceKm <= 1500) return SPEED_PROFILES.SHORT_HAUL;
  if (distanceKm <= 3000) return SPEED_PROFILES.MEDIUM_HAUL;
  if (distanceKm <= 8000) return SPEED_PROFILES.LONG_HAUL;
  return SPEED_PROFILES.ULTRA_LONG_HAUL;
}

function getHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // Normalize longitudes to handle date line crossing
    let dLon = deg2rad(normalizeLongitude(lon2 - lon1));
    const dLat = deg2rad(lat2 - lat1);
    
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return EARTH_RADIUS_KM * c;
}

function normalizeLongitude(dLon: number): number {
    // Ensure the difference is in the range [-180, 180]
    if (dLon > 180) {
        dLon -= 360;
    } else if (dLon < -180) {
        dLon += 360;
    }
    return dLon;
}

function deg2rad(deg: number): number {
    return deg * (Math.PI/180);
}

function calculateFlightDuration(distanceKm: number, from: Airport, to: Airport): { hours: number; minutes: number } {
    const profile = getFlightProfile(distanceKm);
    
    // Basic flight time
    const cruisingHours = distanceKm / profile.speed;
    
    // Add taxi, takeoff, landing, and approach time (in hours)
    const groundTime = profile.taxiTime / 60;
    
    // Adjust for timezone changes (jet lag effect on scheduling)
    const timezoneDiff = Math.abs(from.timezone - to.timezone);
    const timezoneFactor = timezoneDiff > 3 ? (timezoneDiff * 0.1) : 0;
    
    const totalHours = cruisingHours + groundTime + timezoneFactor;
    
    return {
        hours: Math.floor(totalHours),
        minutes: Math.round((totalHours - Math.floor(totalHours)) * 60)
    };
}

const roundToNearestTen = (minutes: number): number => {
  return Math.round(minutes / 10) * 10;
};

export function calculateFlightDistance(from: Airport, to: Airport): FlightDistance {
    const directDistanceKm = getHaversineDistance(
        from.latitude, from.longitude,
        to.latitude, to.longitude
    );
    
    const profile = getFlightProfile(directDistanceKm);
    const actualDistanceKm = directDistanceKm * profile.coefficient;
    
    const duration = calculateFlightDuration(actualDistanceKm, from, to);

    // Round the minutes to nearest 10
    const totalMinutes = Math.floor(actualDistanceKm / profile.speed * 60);
    const rawHours = Math.floor(totalMinutes / 60);
    const rawMinutes = totalMinutes % 60;
    const roundedMinutes = roundToNearestTen(rawMinutes);
    
    // Adjust hours if minutes round up to 60
    const finalHours = roundedMinutes === 60 ? rawHours + 1 : rawHours;
    const finalMinutes = roundedMinutes === 60 ? 0 : roundedMinutes;

    return {
        direct: {
            km: Math.round(directDistanceKm),
            miles: Math.round(directDistanceKm * KM_TO_MILES)
        },
        actual: {
            km: Math.round(actualDistanceKm),
            miles: Math.round(actualDistanceKm * KM_TO_MILES)
        },
        duration: {
            hours: finalHours,
            minutes: finalMinutes
        },
        details: {
            cruisingSpeed: profile.speed,
            timezoneDifference: Math.abs(from.timezone - to.timezone)
        }
    };
}
