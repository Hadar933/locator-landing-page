import { useEffect } from "react";
import { blogCategories } from "@/content/blog/categories";
import { posts } from "@/content/blog/posts";

const Sitemap = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = "https://locator.ltd";
      
      // Collect all URLs in an array
      const urls = [
        // Static pages
        `${baseUrl}`,
        `${baseUrl}/about`,
        `${baseUrl}/privacy`,
        `${baseUrl}/contact`,
        `${baseUrl}/blog`,
        `${baseUrl}/newsletter`,
        `${baseUrl}/coming-soon`,
        
        // Blog categories (countries)
        ...blogCategories.map(category => 
          `${baseUrl}/blog/${category.slug}`
        ),
        
        // Blog posts (country + slug)
        ...Object.entries(posts).map(([slug, _]) => {
          const country = blogCategories.find(cat => 
            cat.posts.some(p => p.slug === slug)
          )?.slug || 'uncategorized';
          return `${baseUrl}/blog/${country}/${slug}`;
        })
      ];

      // Join URLs with newlines
      const sitemap = urls.join('\n');
      console.log(sitemap);
      // Set content type to text/plain
      document.querySelector('html')?.setAttribute('content-type', 'text/plain');
      
      // Set the document content
      document.body.style.whiteSpace = 'pre';
      document.body.textContent = sitemap;
    };

    try {
      generateSitemap();
    } catch (error) {
      console.error('Error generating sitemap:', error);
    }
  }, []);

  return null;
};

export default Sitemap;