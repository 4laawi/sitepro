import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sitepro.ma'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/creation-site-web`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Service pages
    { url: `${base}/e-commerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/applications-mobiles`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/referencement-seo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/design-branding`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/maintenance-support`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Blog index (placeholder)
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
  ]

  // City landing pages for local SEO
  const cities = ['marrakech', 'rabat', 'casablanca', 'agadir', 'fes', 'tanger', 'laayoune']
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/creation-site-web/${city}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Case studies (portfolio subpages)
  const caseStudies: MetadataRoute.Sitemap = [
    { url: `${base}/portfolio/case-studies/mama-fatma-store`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/portfolio/case-studies/le-grand-bazar`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/portfolio/case-studies/maroc-maroc`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]

  return [...staticPages, ...cityPages, ...caseStudies]
}


