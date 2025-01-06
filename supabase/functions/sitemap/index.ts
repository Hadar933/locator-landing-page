import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { blogCategories } from '../../../src/content/blog/categories.ts'
import { posts } from '../../../src/content/blog/posts.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/xml',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const baseUrl = "https://locator.ltd"
    
    // Static pages
    const staticUrls = [
      { url: baseUrl, priority: 1.0, changefreq: 'weekly' },
      { url: `${baseUrl}/about`, priority: 0.8, changefreq: 'monthly' },
      { url: `${baseUrl}/contact`, priority: 0.8, changefreq: 'monthly' },
      { url: `${baseUrl}/blog`, priority: 0.9, changefreq: 'daily' },
      { url: `${baseUrl}/newsletter`, priority: 0.7, changefreq: 'monthly' },
      { url: `${baseUrl}/privacy`, priority: 0.5, changefreq: 'monthly' },
    ]

    // Blog categories
    const categoryUrls = blogCategories.map(category => ({
      url: `${baseUrl}/blog/${category.slug}`,
      priority: 0.8,
      changefreq: 'weekly'
    }))

    // Blog posts
    const postUrls = Object.entries(posts).map(([slug, post]) => {
      const category = blogCategories.find(cat => 
        cat.posts.some(p => p.slug === slug)
      )
      return {
        url: `${baseUrl}/blog/${category?.slug || 'uncategorized'}/${slug}`,
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: post.modifiedDate || post.publishDate
      }
    })

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map(item => `
  <url>
    <loc>${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority.toFixed(1)}</priority>
  </url>`).join('')}
${categoryUrls.map(item => `
  <url>
    <loc>${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority.toFixed(1)}</priority>
  </url>`).join('')}
${postUrls.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority.toFixed(1)}</priority>
  </url>`).join('')}
</urlset>`

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: corsHeaders
    })
  }
})