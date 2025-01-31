import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane } from "lucide-react";
import type { Airport } from './airportSearch';
import { Badge } from "@/components/ui/badge";
import { searchAirports } from './airportSearch';
import { calculateFlightDistance } from './distanceCalculator';

interface PopularRoute {
  from: {
    iata: string;
    city: string;
  };
  to: {
    iata: string;
    city: string;
  };
  description: string;
  tag?: string;
}

const ROUTES: PopularRoute[] = [
  {
    from: { iata: 'JFK', city: 'New York' },
    to: { iata: 'DXB', city: 'Dubai' },
    description: 'The East meets Middle East ✈️',
    tag: 'Popular'
  },
  {
    from: { iata: 'BKK', city: 'Bangkok' },
    to: { iata: 'DPS', city: 'Bali' },
    description: 'Southeast Asian Paradise 🌴',
    tag: 'Trending'
  },
  {
    from: { iata: 'LHR', city: 'London' },
    to: { iata: 'SYD', city: 'Sydney' },
    description: 'The Kangaroo Route 🦘',
    tag: 'Long-haul'
  },
  {
    from: { iata: 'LAX', city: 'Los Angeles' },
    to: { iata: 'TYO', city: 'Tokyo' },
    description: 'Pacific Adventure 🗼'
  },
  {
    from: { iata: 'SFO', city: 'San Francisco' },
    to: { iata: 'SIN', city: 'Singapore' },
    description: 'Silicon Valleys Connect 🌉'
  },
  {
    from: { iata: 'TLV', city: 'Tel Aviv' },
    to: { iata: 'ATH', city: 'Athens' },
    description: 'Mediterranean Magic 🏺',
    tag: 'Short-haul'
  },
  {
    from: { iata: 'CDG', city: 'Paris' },
    to: { iata: 'HND', city: 'Tokyo' },
    description: 'Fashion Meets Tech 🗼'
  },
  {
    from: { iata: 'AMS', city: 'Amsterdam' },
    to: { iata: 'CPT', city: 'Cape Town' },
    description: 'European African Connection 🌍'
  },
  {
    from: { iata: 'BCN', city: 'Barcelona' },
    to: { iata: 'MEX', city: 'Mexico City' },
    description: 'Latin Culture Bridge 💃'
  }
];

interface RouteWithDetails extends PopularRoute {
  duration: string;
  distance: number;
}

interface PopularRoutesProps {
  onSelectRoute: (fromIata: string, toIata: string) => Promise<void>;
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ onSelectRoute }) => {
  const [routesWithDetails, setRoutesWithDetails] = useState<RouteWithDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const calculateRoutes = async () => {
      const detailedRoutes = await Promise.all(
        ROUTES.map(async (route) => {
          const [fromAirports, toAirports] = await Promise.all([
            searchAirports(route.from.iata),
            searchAirports(route.to.iata)
          ]);

          const fromAirport = fromAirports.find(a => a.iata === route.from.iata);
          const toAirport = toAirports.find(a => a.iata === route.to.iata);

          if (!fromAirport || !toAirport) return null;

          const flightDetails = calculateFlightDistance(fromAirport, toAirport);
          
          return {
            ...route,
            duration: `${flightDetails.duration.hours}h ${flightDetails.duration.minutes}m`,
            distance: flightDetails.actual.km
          };
        })
      );

      setRoutesWithDetails(detailedRoutes.filter((route): route is RouteWithDetails => route !== null));
      setLoading(false);
    };

    calculateRoutes();
  }, []);

  return (
    <Card className="w-full lg:w-80">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Plane className="h-5 w-5" />
          Popular Routes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {loading ? (
          <div className="text-sm text-muted-foreground">Loading routes...</div>
        ) : (
          routesWithDetails.map((route) => (
            <Button
              key={`${route.from.iata}-${route.to.iata}`}
              variant="outline"
              className="w-full justify-start text-left p-4 h-auto hover:bg-accent/50 transition-colors"
              onClick={() => onSelectRoute(route.from.iata, route.to.iata)}
            >
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <div className="font-medium">
                    {route.from.city} → {route.to.city}
                  </div>
                  {route.tag && (
                    <Badge variant="secondary" className="ml-2">
                      {route.tag}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{route.description}</span>
                  <span className="font-mono">{route.duration}</span>
                </div>
              </div>
            </Button>
          ))
        )}
      </CardContent>
    </Card>
  );
};
