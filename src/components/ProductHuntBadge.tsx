// ProductHuntBadge.tsx
export const ProductHuntBadge = () => {
  return (
    // Outer container without margins
    <div className="flex flex-col items-center">
      {/* Main wrapper with full width */}
      <div className="relative group w-full">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
        
        {/* Content container - reduced padding and made it inline-flex */}
        <div className="relative inline-flex flex-col items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-xl mx-auto">
          <p className="text-base md:text-lg text-gray-500 mb-3 font-medium">
            🎉 <span className="animate-pulse">As seen</span> on Product Hunt! 
          </p>
          
          <div className="transform transition-transform duration-300 hover:scale-105">
            <a 
              href="https://www.producthunt.com/posts/locator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-locator" 
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-90 transition-opacity"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=833424&theme=light&t=1739517992730" 
                alt="Locator - Turn blogs, TikToks and more into a map of places to visit" 
                style={{ width: '400px', height: '50px' }}
                width="400" 
                height="50" 
                className="shadow-sm rounded"
              />
            </a>
          </div>
          
          <p className="mt-3 text-sm text-gray-500">
            Be among the first to support us !🚀
          </p>
        </div>
      </div>
    </div>
  );
};
