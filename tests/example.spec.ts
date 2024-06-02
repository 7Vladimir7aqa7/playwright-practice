import { test, expect } from '@playwright/test';

test('first test', async ({ page }) => {
  await page.goto('/');
});


test('field_name1 emptyField', async ({ page }) => {
  await page.goto('/');
  const inputField = 'input[name="username"]'
  await page.getByLabel('').fill('')
  //await page.locator('button', { })

});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');


  // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
