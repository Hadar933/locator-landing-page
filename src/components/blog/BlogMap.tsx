import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useNavigate } from 'react-router-dom';

// Blog locations data
const blogLocations = [
  {
    country: 'philippines',
    coordinates: [120.9842, 14.5995], // Philippines coordinates
    title: "Coron, Philippines",
    description: "Nature guide and marine wonders"
  },
  {
    country: 'thailand',
    coordinates: [100.5018, 13.7563], // Thailand coordinates
    title: "Phuket, Thailand",
    description: "Local guide and hidden beaches"
  },
  {
    country: 'sri-lanka',
    coordinates: [80.7718, 7.8731], // Sri Lanka coordinates
    title: "Arugam Bay, Sri Lanka",
    description: "Food guide and local spots"
  },
  {
    country: 'greece',
    coordinates: [27.2464, 35.5071], // Karpathos, Greece coordinates
    title: "Karpathos, Greece",
    description: "Hidden paradise and local culture"
  }
];

const BlogMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [0, 20],
      zoom: 1.5,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each blog location
    blogLocations.forEach((location) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3 class="font-bold">${location.title}</h3>
         <p class="text-sm text-muted-foreground">${location.description}</p>`
      );

      const marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map.current!);

      // Add click event to marker
      marker.getElement().addEventListener('click', () => {
        navigate(`/blog/category/${location.country}`);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, navigate]);

  return (
    <div className="space-y-4">
      {!mapboxToken && (
        <div className="p-4 bg-secondary rounded-lg">
          <label className="block text-sm font-medium mb-2">
            Please enter your Mapbox public token to view the map:
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter Mapbox token..."
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-2">
            You can find your public token at{' '}
            <a 
              href="https://account.mapbox.com/access-tokens/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline"
            >
              Mapbox Access Tokens
            </a>
          </p>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="w-full h-[600px] rounded-lg shadow-lg"
      />
    </div>
  );
};

export default BlogMap;