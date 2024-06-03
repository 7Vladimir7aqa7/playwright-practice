import { expect, type Locator, type Page } from '@playwright/test';

export class header {
  readonly page: Page;
  readonly SignInButton: Locator;
  //readonly gettingStartedHeader: Locator;
  //readonly pomLink: Locator;
  //readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SignInButton = page.getByRole('button', { name: 'Sign In' });
    // this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    // this.pomLink = page.locator('li', {
    //   hasText: 'Guides',
    // }).locator('a', {
    //   hasText: 'Page Object Model',
    // });
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }

//   async goto() {
//     await this.page.goto('/');
    async clickSignInButton() {
    await this.SignInButton.click();
    //await expect(this.gettingStartedHeader).toBeVisible();
  }
}
//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
// }

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



