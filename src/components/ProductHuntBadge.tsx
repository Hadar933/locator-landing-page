// ProductHuntBadge.tsx
export const ProductHuntBadge = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mt-8 mb-12">
      <div className="relative group w-full max-w-3xl"> {/* Added w-full and max-w-3xl */}
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Content container */}
        <div className="relative flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200/50 shadow-xl">
          <p className="text-base md:text-lg text-gray-600 mb-4 font-medium">
            🎉 <span className="animate-pulse">Coming Soon</span> on Product Hunt! 
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
                style={{ width: '250px', height: '54px' }}
                width="250" 
                height="54" 
                className="shadow-sm rounded"
              />
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            Be among the first to support us !🚀
          </p>
        </div>
      </div>
    </div>
  );
};
