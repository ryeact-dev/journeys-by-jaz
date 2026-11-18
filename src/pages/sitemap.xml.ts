import { SITE, LAST_MOD, kinds } from '../data/site';

const images: [string, string, string][] = [
  ['/og-image.jpg', 'Journeys by Jaz: a cruise ship docked under a deep blue sky', 'Houston vacation planner and travel agent'],
  ['/img/about-jaz.webp', 'Jaz, independent travel advisor and vacation planner', 'Meet Jaz'],
  ['/img/logo-large.webp', 'Journeys by Jaz logo', 'Journeys by Jaz logo'],
  ...kinds.map(([t, , img, alt]): [string, string, string] => [img.replace('./', '/'), alt, t]),
  ['/img/gallery-swimming.webp', 'Two people swimming in clear turquoise water with mountains behind', 'Life on the water'],
  ['/img/gallery-cruise-ship.webp', 'A Carnival cruise ship sailing past a cruise deck railing', 'Cruise ship'],
  ['/img/gallery-open-sea.webp', 'Deep blue open sea seen from a cruise ship deck', 'Open sea'],
  ['/img/gallery-mountains.webp', 'Green mountains and coastal homes across blue water', 'Coastal mountains'],
  ['/img/gallery-port.webp', 'A Royal Caribbean ship docked at the port', 'Cruise port'],
  ['/img/gallery-coast.webp', 'Turquoise waves breaking on a rocky shore with a cruise ship on the horizon', 'Coastline'],
];
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const imgXml = images
    .map(([p, caption, title]) => `    <image:image>\n      <image:loc>${SITE}${p}</image:loc>\n      <image:caption>${esc(caption)}</image:caption>\n      <image:title>${esc(title)}</image:title>\n    </image:image>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE}/</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${imgXml}
  </url>
  <url>
    <loc>${SITE}/privacy-policy</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE}/terms-of-service</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
