import { expect, type Locator, type Page } from '@playwright/test';
import { Header } from '../page-object/header';

export class SignInForm {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly Name: Locator;
    readonly LastName: Locator;
    readonly rePassField: Locator;
    readonly firstLoginButton: Locator;
    readonly registrationF: Locator;
    readonly formHeader: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('#signupEmail');
        this.passwordField = page.locator('#signupPassword');
        this.Name = page.locator('#signupName');
        this.LastName = page.locator('#signupLastName');
        this.rePassField = page.locator('#signupRepeatPassword');

        this.loginButton = page.locator('//button[@class="btn btn-primary"]');
        this.registrationF = page.getByText('Registration');
        this.firstLoginButton = page.getByText('Sign in');
        this.formHeader = page.getByText('Garage');
    }
 
    async open() {
    const header = new Header(this.page);
    await header.clickSignInButton();
    //await expect(this.formHeader).toBeVisible();
 }

async registration(name: string, lastName: string, email: string, password: string, rePass: string) {
    await this.firstLoginButton.click;
    await this.registrationF.click;
    await this.Name.fill(name);
    await this.LastName.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.rePassField.fill(rePass);
    await this.loginButton.click();

}
}