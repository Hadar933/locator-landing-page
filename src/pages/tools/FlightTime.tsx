import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchAirports, Location } from '@/utils/flightCalculator';

const FlightTime: React.FC = () => {
  const { src, dst } = useParams();
  const [fromQuery, setFromQuery] = useState(src || '');
  const [toQuery, setToQuery] = useState(dst || '');
  const [fromOptions, setFromOptions] = useState<Array<{ code: string; airport: { city: string; country: string } }>>([]);
  const [toOptions, setToOptions] = useState<Array<{ code: string; airport: { city: string; country: string } }>>([]);
  
  const handleSearch = (query: string, setOptions: React.Dispatch<React.SetStateAction<any[]>>) => {
    const results = searchAirports(query);
    setOptions(results);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-8">Flight Time Calculator</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <label className="block text-sm font-medium mb-2">From</label>
              <input 
                type="text" 
                value={fromQuery}
                onChange={(e) => {
                  setFromQuery(e.target.value);
                  handleSearch(e.target.value, setFromOptions);
                }}
                className="w-full p-2 border rounded"
                placeholder="Search for a city or airport"
              />
              {fromOptions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                  {fromOptions.map((option, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setFromQuery(`${option.airport.city} (${option.code})`);
                        setFromOptions([]);
                      }}
                    >
                      {option.airport.city}, {option.airport.country} ({option.code})
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex-1 relative">
              <label className="block text-sm font-medium mb-2">To</label>
              <input 
                type="text" 
                value={toQuery}
                onChange={(e) => {
                  setToQuery(e.target.value);
                  handleSearch(e.target.value, setToOptions);
                }}
                className="w-full p-2 border rounded"
                placeholder="Search for a city or airport"
              />
              {toOptions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
                  {toOptions.map((option, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setToQuery(`${option.airport.city} (${option.code})`);
                        setToOptions([]);
                      }}
                    >
                      {option.airport.city}, {option.airport.country} ({option.code})
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold mb-4">Estimated Flight Time</h3>
            <div className="text-3xl font-bold text-blue-600 py-4">
              2 hours 30 minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightTime;
