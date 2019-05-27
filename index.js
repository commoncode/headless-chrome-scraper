const HCCrawler = require('headless-chrome-crawler');

(async () => {
  const crawler = await HCCrawler.launch({
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
    onSuccess: (result => {
      console.log(result.response.url);
    }),
  });
  const myDomain = process.env.START_DOMAIN;
  console.log(`Starting scraping at: ${myDomain}...`);
  await crawler.queue({
    url: `https://${myDomain}/`,
    allowedDomains: [myDomain],
    maxDepth: 3,
    waitUntil: 'networkidle0',
    jQuery: false,
    browserCache: false,
  });
  await crawler.onIdle();
  await crawler.close();
  console.log(`Finished scraping ${myDomain}`);
})();
