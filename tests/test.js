import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  console.log('Navigating to example.com...');
  await page.goto('https://example.com/');
  
  // Get the h1 content
  const h1Content = await page.$eval('h1', (element) => element.textContent);
  console.log('H1 content:', h1Content);
  
  await browser.close();
})().catch(console.error); 