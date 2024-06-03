import { test, expect } from '@playwright/test';
import {Header} from '../page-object/header';
import { SignInForm } from '../forms/signInForm';

test.describe('Registration', () => {
    let header: Header;
    let signInForm: SignInForm;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    //header = new Header(page);
    signInForm = new SignInForm(page);
})

test('Sign Up', async ({ page }) => {
  await page.goto('/');
  //await header.clickSignInButton();
  await signInForm.open();
  await signInForm.registrationF.click();
  await signInForm.registration('Valentin', 'Udaskin', 'vlaimiri+26@gmail.com', '123QAZwsx', '123QAZwsx');
  await expect(signInForm.formHeader).toBeVisible;

//   await page.getByRole('button', { name: 'Registration' }).click();
//   await page.locator('#signupName').fill('Valentin');
//   await page.locator('#signupLastName').fill('Udaskin');
//   await page.getByLabel('Name').fill('vlaimiri+21@gmail.com');
//   await page.locator('#signupPassword').fill('123QAZwsx');
//   await page.getByLabel('Re-enter password').fill('123QAZwsx');
//   await page.getByRole('button', { name: 'Register' }).click();
//   await expect(page.getByRole('heading', {name: 'Garage' })).toBeVisible();
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