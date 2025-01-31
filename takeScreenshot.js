const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    args: [
      '--no-sandbox'
    ],
    executablePath: process.env.PUPPETEER_EXEC_PATH, // Use the path provided by the environment
  });

  const page = await browser.newPage();
  await page.goto("https://example.com", {
    waitUntil: "networkidle0",
  });

  // Take a screenshot
  await page.screenshot({ path: "screenshot.png" });
  console.log("Screenshot taken.");

  await browser.close();
}

run();