import { test, expect } from '@playwright/test';

test('field name1', async ({ page }) => {
  await page.goto('/');
  const signIn = page.getByText('Sign in');
  await signIn.click();

  const registration = page.getByText('Registration');
  await registration.click();

  const nameField = page.getByLabel('name');
  //await expect(page.getByRole('Name'))
  await nameField.click();
  await page.getByLabel('name').fill('Vasyl');
  

//   const LastName = page.getByLabel('Last name');
//   await LastName.fill('Pupkin');
//   await LastName.click();
  //await nameField.click();
});


// test('field_name1 emptyField', async ({ page })) => {
//   await page.goto('/');
//   const inputField = 'input[name="username"]'
//   await page.getByLabel('').fill('')
//   //await page.locator('button', { })