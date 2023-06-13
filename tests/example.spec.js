// @ts-check
const { test, expect } = require('@playwright/test');

test('Board has 9 Square', async ({ page }) => {
  await page.goto('https://rashuoo7.github.io/tic-tak/');

  // Expect a title "to contain" a substring.
  const locator = page.locator('#main-board > .board-square');
console.log(locator)
  await expect(locator).toHaveCount(9);

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
