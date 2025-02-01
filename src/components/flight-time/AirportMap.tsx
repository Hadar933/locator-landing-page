import React from 'react';
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

interface AirportMapProps {
    fromAirport: Airport | null;
    toAirport: Airport | null;
}

export const AirportMap: React.FC<AirportMapProps> = ({ fromAirport, toAirport }) => {
    const bounds = React.useMemo(() => {
        if (fromAirport && toAirport) {
            return [
                [fromAirport.latitude, fromAirport.longitude],
                [toAirport.latitude, toAirport.longitude]
            ] as LatLngBoundsExpression;
        }
        return undefined;
    }, [fromAirport, toAirport]);

    const center = fromAirport 
        ? [fromAirport.latitude, fromAirport.longitude]
        : [20, 0]; // Default center of the map

    const zoom = (!fromAirport && !toAirport) ? 2 : 4;

    return (
        <div className="rounded-lg overflow-hidden border h-full min-h-[200px]">
            <MapContainer
                style={{ height: '100%', width: '100%' }}
                bounds={bounds}
                center={center as [number, number]}
                zoom={zoom}
                className="z-10"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
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
