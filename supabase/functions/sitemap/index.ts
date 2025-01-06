import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/xml',
}

// Define blog categories and posts directly in the Edge Function
const blogCategories = [
  {
    title: "Hong Kong",
    slug: "hong-kong",
    posts: [
      {
        title: "Hong Kong's Hidden Temples & Gardens",
        slug: "hong-kong-temples-guide",
        date: "2024-01-30"
      }
    ]
  },
  {
    title: "Thailand",
    slug: "thailand",
    posts: [
      {
        title: "Phuket Local Guide",
        slug: "phuket-local-guide",
        date: "2024-12-30"
      }
    ]
  },
  // ... other categories can be added here
];

serve(async (req) => {
  // Handle CORS preflight requests
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
    const postUrls = blogCategories.flatMap(category => 
      category.posts.map(post => ({
        url: `${baseUrl}/blog/${category.slug}/${post.slug}`,
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: post.date
      }))
    )

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
      headers: corsHeaders
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: corsHeaders
    })
  }
})
