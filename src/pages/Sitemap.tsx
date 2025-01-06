import { useEffect } from "react";
import { blogCategories } from "@/content/blog/categories";
import { posts } from "@/content/blog/posts";

const Sitemap = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = "https://locator.ltd";
      const today = new Date().toISOString();

      // Collect all blog post URLs
      const blogPostUrls = Object.entries(posts).map(([slug, post]) => {
        const country = blogCategories.find(cat => 
          cat.posts.some(p => p.slug === slug)
        )?.slug || 'uncategorized';
        
        return `
  <url>
    <loc>${baseUrl}/blog/${country}/${slug}</loc>
    <lastmod>${post.modifiedDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
      }).join('');

      // Add blog categories
      const categoryUrls: UrlConfig[] = blogCategories.map(category => ({
        url: `${baseUrl}/blog/${category.slug}`,
        priority: 0.8,
        changefreq: 'weekly'
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

      // Create a Blob with XML content and correct MIME type
      const blob = new Blob([xml], { type: 'application/xml' });
      
      // Create a link element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'sitemap.xml';
      
      // Programmatically click the link to download the file
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    };

    generateSitemap();
  }, []);

  return null;
};

export default Sitemap;