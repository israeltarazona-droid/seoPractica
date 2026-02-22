const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://prerender-v17.web.app' });

  const links = [
    { url: '/home', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/testPrerender', changefreq: 'monthly', priority: 0.8 },
  ];

  const outputPath = path.resolve(__dirname, 'dist', 'seo-practica','browser' ,'sitemap.xml');
  const writeStream = createWriteStream(outputPath);

  sitemap.pipe(writeStream);
  links.forEach(link => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generado correctamente en:', outputPath);
}

generateSitemap().catch(err => {
  console.error('Error al generar sitemap:', err);
});