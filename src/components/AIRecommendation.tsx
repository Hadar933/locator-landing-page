// ...existing code...

interface AIRecommendationProps {
  reasoning: string;
}

const AIRecommendation: React.FC<AIRecommendationProps> = ({ reasoning }) => {
  return (
    <div className="mt-4">
      <div className="inline-block px-4 py-1 mb-2 text-sm font-medium text-white bg-blue-600 rounded-full">
        LocatorAI thinks:
      </div>
      <div className="p-4 bg-blue-100 rounded-lg text-blue-800">
        {reasoning}
      </div>
    </div>
  );
};
// ...existing code...
