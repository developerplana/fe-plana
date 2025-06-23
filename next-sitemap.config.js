/** @type {import('next-sitemap').IConfig} */
// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://plana.vision',
    generateRobotsTxt: true,
    generateIndexSitemap: false, // ⛔️ no sitemap index
    sitemapSize: 1000, // pastikan cukup menampung semua
    additionalPaths: async (config) => {
      const lastmod = '2025-06-23T08:40:53+00:00';
      return [
        { loc: '/', lastmod, priority: 1.0 },
        { loc: '/works', lastmod, priority: 0.8 },
        { loc: '/about', lastmod, priority: 0.8 },
        { loc: '/blog', lastmod, priority: 0.8 },
        { loc: '/contact', lastmod, priority: 0.8 },
      ];
    },
  };
  