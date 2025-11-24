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
  
  // All 24 Location pages
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
    'nanpura',
    'majura-gate',
    'pal',
    'katargam',
    'sagrampura',
    'mota-varachha',
    'magdalla',
    'dumas-road',
    'someshwara',
    'kamrej',
    'bhatar',
    'pandesara',
    'new-civil-hospital-road'
  ]

  // All 21 Service pages
  const services = [
    'air-hostess',
    'business-meetings',
    'call-girl',
    'celebrity-look-alike',
    'college-girl',
    'corporate-event',
    'dinner-dates',
    'hotel-escort',
    'housewife',
    'in-call-service',
    'outcall-service',
    'party-escort',
    'premiumcall-girls',
    'private-model',
    'russian-model',
    'social-events',
    'special-service',
    'travel-companion',
    'vip-companionship',
    'wedding-escort',
    'weekend-special'
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

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...locationPages, ...servicePages]
}