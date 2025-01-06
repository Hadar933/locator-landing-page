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

      // Collect all category URLs
      const categoryUrls = blogCategories.map(category => `
  <url>
    <loc>${baseUrl}/blog/${category.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Pages -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/newsletter</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  ${categoryUrls}
  ${blogPostUrls}
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