import { useEffect } from "react";
import { blogCategories } from "@/content/blog/categories";
import { posts } from "@/content/blog/posts";

interface UrlConfig {
  url: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

const Sitemap = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = "https://locator.ltd";
      
      const urlGroups: UrlConfig[] = [
        { url: baseUrl, priority: 1.0, changefreq: 'monthly' },

        // Static pages - medium priority
        { url: `${baseUrl}/about`, priority: 0.5, changefreq: 'monthly' },
        { url: `${baseUrl}/privacy`, priority: 0.5, changefreq: 'monthly' },
        { url: `${baseUrl}/contact`, priority: 0.5, changefreq: 'monthly' },
        { url: `${baseUrl}/coming-soon`, priority: 0.5, changefreq: 'yearly' },
        
        // Blog related - high priority
        { url: `${baseUrl}/blog`, priority: 0.8, changefreq: 'daily' },
        { url: `${baseUrl}/newsletter`, priority: 0.8, changefreq: 'yearly' },
      ];

      // Add blog categories
      const categoryUrls: UrlConfig[] = blogCategories.map(category => ({
        url: `${baseUrl}/blog/${category.slug}`,
        priority: 0.8,
        changefreq: 'daily'
      }));

      // Add blog posts
      const postUrls: UrlConfig[] = Object.entries(posts).map(([slug]) => ({
        url: `${baseUrl}/blog/${
          blogCategories.find(cat => cat.posts.some(p => p.slug === slug))?.slug || 'uncategorized'
        }/${slug}`,
        priority: 0.8,
        changefreq: 'yearly'
      }));

      // Combine all URLs
      const allUrls = [...urlGroups, ...categoryUrls, ...postUrls];

      // Create XML structure
      const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(item => `  <url>
    <loc>${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

      // Set content type to XML
      document.querySelector('html')?.setAttribute('content-type', 'application/xml');
      
      // Set the document content
      document.body.style.whiteSpace = 'pre';
      document.body.textContent = xmlContent;
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