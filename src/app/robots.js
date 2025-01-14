export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [],
    },
    sitemap: 'https://hacknitr.com/sitemap.xml',
  };
}
