import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api', '/*.json$'],
    },
    sitemap: 'https://krishanstampsmaker.in/sitemap.xml',
  };
}
