import { defineConfig } from 'astro/config';

// Fully self-contained output (inline CSS + JS, no absolute asset paths),
// so the build works on GitHub Pages, any static host, or opened from disk.
export default defineConfig({
  site: 'https://ryeact-dev.github.io',
  build: { inlineStylesheets: 'always' },
});
