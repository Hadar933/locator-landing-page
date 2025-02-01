import { Link } from "react-router-dom";

export const Tools = () => {
  return (
    <div className="container mx-auto px-4 pt-24">
      <h1 className="text-3xl font-bold mb-8">Tools</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          to="/free-tools/flight-calculator"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Flight Time Calculator</h2>
          <p className="text-muted-foreground">
            Calculate flight duration between airports considering factors like route, aircraft type, and weather.
          </p>
        </Link>
      </div>
    </div>
  );
};
