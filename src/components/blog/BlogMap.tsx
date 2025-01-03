import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Blog locations data with proper typing
interface BlogLocation {
  country: string;
  coordinates: [number, number]; // Explicitly typed as [lat, lng]
  title: string;
  description: string;
}

const blogLocations: BlogLocation[] = [
  {
    country: 'philippines',
    coordinates: [14.5995, 120.9842], // Philippines coordinates [lat, lng]
    title: "Coron, Philippines",
    description: "Nature guide and marine wonders"
  },
  {
    country: 'thailand',
    coordinates: [13.7563, 100.5018], // Thailand coordinates [lat, lng]
    title: "Phuket, Thailand",
    description: "Local guide and hidden beaches"
  },
  {
    country: 'sri-lanka',
    coordinates: [7.8731, 80.7718], // Sri Lanka coordinates [lat, lng]
    title: "Arugam Bay, Sri Lanka",
    description: "Food guide and local spots"
  },
  {
    country: 'greece',
    coordinates: [35.5071, 27.2464], // Karpathos, Greece coordinates [lat, lng]
    title: "Karpathos, Greece",
    description: "Hidden paradise and local culture"
  }
];

const BlogMap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[600px] rounded-lg shadow-lg overflow-hidden">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {blogLocations.map((location, index) => (
          <Marker
            key={index}
            position={location.coordinates}
            eventHandlers={{
              click: () => navigate(`/blog/category/${location.country}`)
            }}
          >
            <Popup>
              <div>
                <h3 className="font-bold">{location.title}</h3>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BlogMap;