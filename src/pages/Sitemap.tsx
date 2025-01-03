import { useEffect } from "react";
import { blogCategories } from "@/content/blog/categories";
import { posts } from "@/content/blog/posts";

const Sitemap = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = "https://locator.ltd";
      const today = new Date().toISOString();

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

  <!-- Blog Categories -->
  ${blogCategories.map(category => `
  <url>
    <loc>${baseUrl}/blog/category/${category.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}

  <!-- Blog Posts -->
  ${Object.entries(posts).map(([slug, post]) => `
  <url>
    <loc>${baseUrl}/blog/${post.country || 'philippines'}/${slug}</loc>
    <lastmod>${post.modifiedDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

      // Create a Blob containing the XML
      const blob = new Blob([xml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);

      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sitemap.xml';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    generateSitemap();
  }, []);

  return null;
};

export default Sitemap;