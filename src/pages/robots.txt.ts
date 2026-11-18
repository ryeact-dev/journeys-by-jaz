import { SITE } from '../data/site';

// AI search / answer engines / training crawlers: all explicitly allowed.
const bots = [
  // OpenAI
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  // Anthropic
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Claude-Web', 'anthropic-ai',
  // Perplexity
  'PerplexityBot', 'Perplexity-User',
  // Google (Gemini / AI Overviews control token + search)
  'Googlebot', 'Googlebot-Image', 'Google-Extended', 'GoogleOther',
  // Microsoft / Bing (Copilot)
  'Bingbot',
  // Apple
  'Applebot', 'Applebot-Extended',
  // Meta
  'Meta-ExternalAgent', 'Meta-ExternalFetcher', 'FacebookBot', 'facebookexternalhit',
  // Amazon, DuckDuckGo, Cohere, Mistral, You.com, Common Crawl, ByteDance
  'Amazonbot', 'DuckDuckBot', 'DuckAssistBot', 'cohere-ai', 'MistralAI-User', 'YouBot', 'CCBot', 'Bytespider',
  // Others
  'Diffbot', 'ImagesiftBot', 'PetalBot', 'Timpibot',
];

export function GET() {
  const body = [
    `# robots.txt for ${SITE}`,
    '# Everything is open to search engines and AI/answer engines (SEO + AEO + GEO).',
    '',
    'User-agent: *',
    'Allow: /',
    'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
    '',
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${SITE}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
