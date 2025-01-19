import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Dummy locations for each URL
const urlToLocation: Record<string, { lat: number; lng: number }> = {
  "https://www.tiktok.com/embed/v2/7271327697891183918": { lat: 40.7128, lng: -74.0060 }, // NYC
  "https://www.instagram.com/p/DD2uCMyzCKU/embed": { lat: 48.8566, lng: 2.3522 }, // Paris
  "https://www.tiktok.com/embed/v2/7433701151872257313": { lat: 35.6762, lng: 139.6503 }, // Tokyo
  "https://www.instagram.com/p/DEyUt3VyNlx/embed": { lat: 51.5074, lng: -0.1278 }, // London
  "https://www.tiktok.com/embed/v2/7227835204541353243": { lat: -33.8688, lng: 151.2093 }, // Sydney
  "https://www.instagram.com/p/DEfUhcrOwm2/embed": { lat: 41.9028, lng: 12.4964 }, // Rome
  "https://www.tiktok.com/embed/v2/7337880069601348910": { lat: 1.3521, lng: 103.8198 }, // Singapore
  "https://www.instagram.com/p/C-A_CLKtZGB/embed": { lat: 25.2048, lng: 55.2708 }, // Dubai
  "https://www.tiktok.com/embed/v2/7302068588939054369": { lat: -22.9068, lng: -43.1729 }, // Rio
  "https://www.instagram.com/p/DCD9FwtPlLh/embed": { lat: 13.7563, lng: 100.5018 }, // Bangkok
};

interface LocationMapProps {
  url: string;
  onClose: () => void;
}

const LocationMap: React.FC<LocationMapProps> = ({ url, onClose }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHRpbm1qbmkwbXJ4MnFudWE5OHFxc3ZqIn0.O0N_qnEPc0Zx1algR5cyBA';
    
    const location = urlToLocation[url];
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [location.lng, location.lat],
      zoom: 12
    });

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([location.lng, location.lat])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [url]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-[90vw] max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Location</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="h-[60vh] rounded-lg overflow-hidden">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default LocationMap;