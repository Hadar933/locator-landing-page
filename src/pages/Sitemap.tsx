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

      // Create a new document
      const doc = new DOMParser().parseFromString(xml, 'application/xml');
      
      // Remove existing content
      while (document.documentElement.firstChild) {
        document.documentElement.firstChild.remove();
      }
      
      // Set content type
      document.contentType = 'application/xml';
      
      // Replace document content with XML
      document.replaceChild(
        document.importNode(doc.documentElement, true),
        document.documentElement
      );
    };

    generateSitemap();
  }, []);

  return null;
};

export default Sitemap;