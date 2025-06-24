require('dotenv').config();
const fetch = require('node-fetch');

const siteUrl = process.env.NEXT_PUBLIC_CMS_BASE_URL || 'http://localhost:3000';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  additionalPaths: async () => {
    const lastmod = new Date().toISOString();

    let works = [];
    try {
      const res = await fetch(`${siteUrl}/api/works`);
      works = await res.json();
    } catch (err) {
      console.error('Error fetching works:', err);
    }

    let blogs = [];
    try {
      const res = await fetch(`${siteUrl}/api/blogs/detail`);
      blogs = await res.json();
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }

    const workPaths = works.map((work) => ({
      loc: `/works/${work.slug}`,
      lastmod: work.updatedAt || lastmod,
      priority: 0.8,
    }));

    const blogPaths = blogs.map((blog) => ({
      loc: `/blog/${blog.slug}`,
      lastmod: blog.updatedAt || lastmod,
      priority: 0.8,
    }));

    const staticPaths = [
      { loc: '/', lastmod, priority: 1.0 },
      { loc: '/about', lastmod, priority: 0.8 },
      { loc: '/contact', lastmod, priority: 0.8 },
      { loc: '/works', lastmod, priority: 0.8 },
      { loc: '/blog', lastmod, priority: 0.8 },
    ];

    return [...staticPaths, ...workPaths, ...blogPaths];
  },
};
