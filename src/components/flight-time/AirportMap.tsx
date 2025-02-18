import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngBoundsExpression, LatLngTuple } from 'leaflet';
import type { Airport } from './airportSearch';
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const LocationButton = () => {
    const map = useMap();
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
        setLoading(true);
        map.locate().on('locationfound', function(e) {
            map.flyTo(e.latlng, 10);
            setLoading(false);
        }).on('locationerror', function(e) {
            alert('Could not find your location');
            setLoading(false);
        });
    };

    return (
        <div className="leaflet-top leaflet-right">
            <div className="leaflet-control leaflet-bar m-2">
                <Button 
                    size="sm" 
                    variant="secondary"
                    className="flex items-center gap-2 bg-white hover:bg-gray-100 dark:bg-gray-800"
                    onClick={handleClick}
                    disabled={loading}
                >
                    <MapPin className="h-4 w-4" />
                    {loading ? "Finding..." : "My Location"}
                </Button>
            </div>
        </div>
    );
};

// Add a new component to handle bounds
function ChangeView({ fromAirport, toAirport }: { fromAirport: Airport | null; toAirport: Airport | null }) {
  const map = useMap();

  useEffect(() => {
    if (fromAirport && toAirport) {
      const bounds = [
        [fromAirport.latitude, fromAirport.longitude],
        [toAirport.latitude, toAirport.longitude]
      ];
      map.fitBounds(bounds, {
        padding: [50, 50], // Add padding around bounds
        maxZoom: 12,      // Prevent too much zoom
        animate: true      // Smooth animation
      });
    } else if (fromAirport) {
      map.setView([fromAirport.latitude, fromAirport.longitude], 8);
    } else if (toAirport) {
      map.setView([toAirport.latitude, toAirport.longitude], 8);
    }
  }, [map, fromAirport, toAirport]);

  return null;
}

interface AirportMapProps {
    fromAirport: Airport | null;
    toAirport: Airport | null;
}

export const AirportMap: React.FC<AirportMapProps> = ({ fromAirport, toAirport }) => {
    const center = useMemo(() => {
        if (fromAirport && toAirport) {
            // Center between both airports
            return [(fromAirport.latitude + toAirport.latitude) / 2, (fromAirport.longitude + toAirport.longitude) / 2];
        } else if (fromAirport) {
            return [fromAirport.latitude, fromAirport.longitude];
        } else if (toAirport) {
            return [toAirport.latitude, toAirport.longitude];
        }
        return [0, 0]; // Default center if no airports selected
    }, [fromAirport, toAirport]);

    return (
        <div className="rounded-lg overflow-hidden border h-full min-h-[200px]">
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                center={center as [number, number]}
                zoom={2}
                className="z-10"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ChangeView fromAirport={fromAirport} toAirport={toAirport} />
                
                {fromAirport && (
                    <Marker 
                        position={[fromAirport.latitude, fromAirport.longitude]} 
                        icon={defaultIcon}
                    />
                )}
                
                {toAirport && (
                    <Marker 
                        position={[toAirport.latitude, toAirport.longitude]} 
                        icon={defaultIcon}
                    />
                )}

                {fromAirport && toAirport && (
                    <Polyline 
                        positions={[
                            [fromAirport.latitude, fromAirport.longitude],
                            [toAirport.latitude, toAirport.longitude]
                        ]}
                        color="red"
                    />
                )}
                <LocationButton />
            </MapContainer>
        </div>
    );
};
