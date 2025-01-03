import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
            position={[location.coordinates[1], location.coordinates[0]]}
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