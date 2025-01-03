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

interface BlogLocation {
  country: string;
  coordinates: [number, number];
  title: string;
  description: string;
}

const blogLocations: BlogLocation[] = [
  {
    country: 'philippines',
    coordinates: [14.5995, 120.9842],
    title: "Coron, Philippines",
    description: "Nature guide and marine wonders"
  },
  {
    country: 'thailand',
    coordinates: [13.7563, 100.5018],
    title: "Phuket, Thailand",
    description: "Local guide and hidden beaches"
  },
  {
    country: 'sri-lanka',
    coordinates: [7.8731, 80.7718],
    title: "Arugam Bay, Sri Lanka",
    description: "Food guide and local spots"
  },
  {
    country: 'greece',
    coordinates: [35.5071, 27.2464],
    title: "Karpathos, Greece",
    description: "Hidden paradise and local culture"
  }
];

const BlogMap: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '600px', width: '100%' }}
      className="rounded-lg shadow-lg"
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
  );
};

export default BlogMap;