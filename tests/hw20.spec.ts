import { test, expect } from '@playwright/test';
import {header} from '../page-object/header';

test.describe('Registration', () => {
    let header: header;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    header = header(page);
})

test('Sign Up', async ({ page }) => {
  await page.goto('/');
  await header.clickSignInButton();
  await page.getByRole('button', { name: 'Registration' }).click();
  await page.locator('#signupName').fill('Valentin');
  await page.locator('#signupLastName').fill('Udaskin');
  await page.getByLabel('Name').fill('vlaimiri+21@gmail.com');
  await page.locator('#signupPassword').fill('123QAZwsx');
  await page.getByLabel('Re-enter password').fill('123QAZwsx');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByRole('heading', {name: 'Garage' })).toBeVisible();
});
})

// test('Sign Up', async ({ page }) => {
//     await page.goto('/');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.getByRole('button', { name: 'Registration' }).click();
//     await page.locator('#signupName').fill('Valentin');
//     await page.locator('#signupLastName').fill('Udaskin');
//     await page.getByLabel('Name').fill('vlaimiri+2@gmail.com');
//     await page.locator('#signupPassword').fill('123QAZwsx');
//     await page.getByLabel('Re-enter password').fill('123QAZwsx');
//     await page.getByRole('button', { name: 'Register' }).click();
//     await expect(page.getByRole('heading', {name: 'Garage' })).toBeVisible();
//   });