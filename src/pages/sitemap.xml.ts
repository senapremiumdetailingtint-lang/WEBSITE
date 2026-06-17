import type { APIRoute } from 'astro';
import { site, serviceAreas, servicePages } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  const entries = [
    { path: '/', priority: '1.0' },
    ...servicePages.map((s) => ({ path: `/services/${s.slug}`, priority: '0.9' })),
    ...serviceAreas.map((a) => ({ path: `/${a.slug}`, priority: '0.9' })),
    { path: '/privacy', priority: '0.3' },
  ];
  const urls = entries
    .map(
      (e) =>
        `  <url><loc>${new URL(e.path, site.url).href}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
