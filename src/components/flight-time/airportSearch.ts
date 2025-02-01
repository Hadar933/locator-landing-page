export interface Airport {
    id: string;
    name: string;
    city: string;
    country: string;
    iata: string;
    icao: string;
    latitude: number;
    longitude: number;
    altitude: number;
    timezone: number;
    dst: string;
    tz: string;
    type: string;
    source: string;
}

let airportsCache: Airport[] | null = null;

const parseCSVLine = (line: string): Airport | null => {
    const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
    if (!values || values.length < 14) return null;

    return {
        id: values[0].replace(/"/g, ''),
        name: values[1].replace(/"/g, ''),
        city: values[2].replace(/"/g, ''),
        country: values[3].replace(/"/g, ''),
        iata: values[4].replace(/"/g, ''),
        icao: values[5].replace(/"/g, ''),
        latitude: parseFloat(values[6].replace(/"/g, '')),
        longitude: parseFloat(values[7].replace(/"/g, '')),
        altitude: parseFloat(values[8].replace(/"/g, '')),
        timezone: parseFloat(values[9].replace(/"/g, '')),
        dst: values[10].replace(/"/g, ''),
        tz: values[11].replace(/"/g, ''),
        type: values[12].replace(/"/g, ''),
        source: values[13].replace(/"/g, '')
    };
};

const fetchAirports = async (): Promise<Airport[]> => {
    if (airportsCache) return airportsCache;

    const response = await fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat');
    const text = await response.text();
    const lines = text.split('\n');
    
    const airports = lines
        .map(line => parseCSVLine(line))
        .filter((airport): airport is Airport => airport !== null);
    
    airportsCache = airports;
    return airports;
};

const normalizeText = (text: string): string => {
    // Convert to lowercase and replace hyphens with spaces
    const withSpaces = text.toLowerCase().replace(/-/g, ' ');
    // Also create version with spaces replaced by hyphens
    const withHyphens = text.toLowerCase().replace(/\s+/g, '-');
    // Return both versions joined by pipe for regex alternation
    return `${withSpaces}|${withHyphens}`;
};

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1); // Fixed: was using dLat twice
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function deg2rad(deg: number) {
    return deg * (Math.PI/180);
}

export const findNearestAirport = async (latitude: number, longitude: number): Promise<Airport | null> => {
    const airports = await fetchAirports();
    const result = airports
        .filter(airport => 
            airport.type === 'airport' && 
            airport.iata !== '' && 
            airport.iata !== '\\N' &&
            airport.latitude && 
            airport.longitude  // Added validation for coordinates
        )
        .reduce((nearest, airport) => {
            const distance = getDistanceFromLatLonInKm(
                latitude,
                longitude,
                airport.latitude,
                airport.longitude
            );
            if (!nearest || distance < nearest.distance) {
                return { airport, distance };
            }
            return nearest;
        }, { airport: null as Airport | null, distance: Infinity });
    
    console.log('Found nearest airport:', result.airport?.name, 'at distance:', result.distance.toFixed(2), 'km');
    return result.airport;
};

export const searchAirports = async (query: string): Promise<Airport[]> => {
    const airports = await fetchAirports();
    const searchTerms = normalizeText(query);
    const searchRegex = new RegExp(searchTerms, 'i');

    return airports.filter(airport => 
        searchRegex.test(normalizeText(airport.name)) ||
        searchRegex.test(normalizeText(airport.city)) ||
        searchRegex.test(normalizeText(airport.country)) ||
        airport.iata.toLowerCase().includes(query.toLowerCase()) ||
        airport.icao.toLowerCase().includes(query.toLowerCase())
    );
};

export const getRandomAirport = async (): Promise<Airport> => {
    const airports = await fetchAirports();
    const validAirports = airports.filter(airport => 
        airport.type === 'airport' && 
        airport.iata !== '' && 
        airport.iata !== '\\N'
    );
    return validAirports[Math.floor(Math.random() * validAirports.length)];
};

// a few examples:
searchAirports('israel').then(console.log);