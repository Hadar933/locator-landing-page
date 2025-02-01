import { Link } from "react-router-dom";
import { MdFlightTakeoff, MdAccessTime, MdRecommend } from "react-icons/md";

export const Tools = () => {
  const tools = [
    {
      title: "Flight Time Calculator",
      description: "Calculate flight duration between airports considering factors like route, aircraft type, and weather.",
      link: "/free-tools/flight-time",
      isAvailable: true,
      icon: <MdFlightTakeoff className="w-8 h-8 text-blue-500 mb-4" />,
    },
    {
      title: "Best Time to Travel",
      description: "Find the perfect time to visit any destination based on weather, crowds, and prices.",
      link: "/free-tools/best-time",
      isAvailable: false,
      icon: <MdAccessTime className="w-8 h-8 text-purple-500 mb-4" />,
    },
    {
      title: "AI Travel Recommendations",
      description: "Share your favorite destinations and experiences, and let AI suggest your next perfect adventure.",
      link: "/free-tools/ai-recommendations", // Ensure this matches the route path exactly
      isAvailable: true,
      icon: <MdRecommend className="w-8 h-8 text-green-500 mb-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Free Travel Tools</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our collection of free tools to help plan your perfect journey
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="relative">
              {tool.isAvailable ? (
                <Link 
                  to={tool.link}
                  className="block p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <div className="flex flex-col items-center">
                    {tool.icon}
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">{tool.title}</h2>
                    <p className="text-gray-600 text-center">{tool.description}</p>
                  </div>
                </Link>
              ) : (
                <div className="block p-8 bg-white rounded-2xl shadow-sm border border-gray-100 h-full opacity-75">
                  <span className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                  <div className="flex flex-col items-center">
                    {tool.icon}
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">{tool.title}</h2>
                    <p className="text-gray-600 text-center">{tool.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
