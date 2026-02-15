import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sitepro.ma'
  const now = new Date()

  // 1. Static Pages (French - Main)
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/creation-site-web`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/creation-site-web-maroc`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    { url: `${base}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    // Service pages
    { url: `${base}/e-commerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/application-mobile-maroc`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/referencement-seo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/design-branding`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/maintenance-site-web-maroc`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/maintenance-support`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Blog index
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
  ]

  // 2. English Pages (Dynamic discovery from src/app/en)
  const enDir = path.join(process.cwd(), 'src/app/en')
  const enPages: MetadataRoute.Sitemap = []

  if (fs.existsSync(enDir)) {
    // Main /en page
    enPages.push({ url: `${base}/en`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })

    const enItems = fs.readdirSync(enDir)
    enItems.forEach(item => {
      const itemPath = path.join(enDir, item)
      const stat = fs.statSync(itemPath)
      if (stat.isDirectory() && !item.startsWith('[') && !item.startsWith('(')) {
        enPages.push({
          url: `${base}/en/${item}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.7
        })
      }
    })
  }


  // 3. City landing pages for local SEO
  const cities = [
    'tanger', 'rabat', 'kenitra', 'tetouan', 'larache', 'asilah', 'chefchaouen',
    'al-hoceima', 'nador', 'casablanca', 'khouribga', 'fes', 'meknes', 'ifrane',
    'marrakech', 'essaouira', 'benguerir', 'agadir', 'laayoune', 'dakhla'
  ]
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/creation-site-web-${city}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // 4. Case studies (static for now, could be dynamic if needed)
  const caseStudies: MetadataRoute.Sitemap = [
    { url: `${base}/portfolio/case-studies/mama-fatma-store`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/portfolio/case-studies/le-grand-bazar`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/portfolio/case-studies/maroc-maroc`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ]

  // 5. Dynamic Blog Posts
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  const blogPosts: MetadataRoute.Sitemap = []

  if (fs.existsSync(blogDir)) {
    const blogItems = fs.readdirSync(blogDir)
    blogItems.forEach(item => {
      const itemPath = path.join(blogDir, item)
      const stat = fs.statSync(itemPath)

      // Filter for directories that are not special Next.js folders
      if (stat.isDirectory() && !item.startsWith('[') && !item.startsWith('(')) {
        // Try to find the last modification time of the page.tsx
        let lastMod = now
        const pagePath = path.join(itemPath, 'page.tsx')
        if (fs.existsSync(pagePath)) {
          const pageStat = fs.statSync(pagePath)
          lastMod = pageStat.mtime
        }

        blogPosts.push({
          url: `${base}/blog/${item}`,
          lastModified: lastMod,
          changeFrequency: 'weekly',
          priority: 0.9 // High priority for blogs as requested
        })
      }
    })
  }

  return [...staticPages, ...enPages, ...cityPages, ...caseStudies, ...blogPosts]
}
