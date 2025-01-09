import { test, expect } from '@playwright/test';

test('Got Amazon website', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.

  await expect(page.getByRole("searchbox")).toHaveAttribute('placeholder',"Search Amazon.in");
});

test('Product Price from results and product detail page', async ({page}) =>{
  await page.goto('https://www.amazon.in/');
  await page.getByRole("searchbox").fill("Iphone")
  await page.locator('#nav-search-submit-button').click()
  // await page.getByRole("button",{name:"Add to cart"}).first().click()
  const detailPagePromise = page.waitForEvent('popup');
  await page.locator('span[data-component-type="s-product-image"]').first().click()
  const detail = await detailPagePromise;
  //get prices
  const price = await page.locator('span[class="a-price-whole"]').first().textContent()
  const detailPrice =await detail.locator('span[class$="priceToPay"]  span[class="a-price-whole"]').textContent()
  expect(price).toBe(detailPrice);
});

