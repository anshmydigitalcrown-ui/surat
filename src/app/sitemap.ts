import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://surat-escorts.vercel.app'
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/services', 
    '/gallery',
    '/contact',
    '/privacy',
    '/terms',
  ]
  
  // Location pages
  const locations = [
    'varachha',
    'adajan', 
    'vesu',
    'citylight',
    'althan',
    'piplod',
    'udhna',
    'athwa',
    'rander',
    'ghod-dod-road',
    'ring-road',
    'nanpura'
  ]
  
  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...locationPages]
}