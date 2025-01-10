import { chromium } from 'playwright';  // Or 'firefox' or 'webkit'.

(async () => {
  const browser = await chromium.launch({ headless: false }); //accepts the key/value pair as arguments
  const page = await browser.newPage();
  await page.goto('https://www.amazon.in/');
  await page.getByRole("searchbox").fill("Iphone")
  await page.locator('#nav-search-submit-button').click()
  // await page.getByRole("button",{name:"Add to cart"}).first().click()
  const detailPagePromise = page.waitForEvent('popup');
  await page.locator('span[data-component-type="s-product-image"]').first().click()
  const detail = await detailPagePromise;
  const price = await page.locator('span[class="a-price-whole"]').first().textContent()
  const com =await detail.locator('span[class$="priceToPay"]  span[class="a-price-whole"]').textContent()
  console.log(price)
  console.log(com)

})();