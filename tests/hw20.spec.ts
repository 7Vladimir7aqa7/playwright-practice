import { test, expect } from '@playwright/test';
import {Header} from '../page-object/header';
import { SignInForm } from '../forms/signInForm';

test.describe('Registration', () => {
    let header: Header;
    let signInForm: SignInForm;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    signInForm = new SignInForm(page);
})

test('Sign Up', async ({ page }) => {
  await page.goto('/');
  await signInForm.open();
  await signInForm.registrationF.click();
  await signInForm.registration('Valentin', 'Udaskin', 'vlaimiri+27@gmail.com', '123QAZwsx', '123QAZwsx');
  await expect(signInForm.formHeader).toBeVisible;


});
})
