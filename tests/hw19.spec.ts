import { test, expect } from '@playwright/test';

test.only('field name1', async ({ page }) => {
    await page.goto('/');
    const signIn = page.getByText('Sign in');
    await signIn.click();

    const registration = page.getByText('Registration');
    await registration.click();

    const nameField = page.locator('#signupName');
    await nameField.fill('Vasyl');

    const LastName = page.locator('#signupLastName');
    await LastName.fill('Pupkin');

    const Email = page.locator('#signupEmail');
    await Email.fill('vladimir.gazevich+7@getMaxListeners.com');

    const Pass = page.locator('#signupPassword');
    await Pass.fill('1234Qwerty');

    const rePass = page.locator('#signupRepeatPassword');
    await rePass.fill('1234Qwerty');

    const login = page.locator('//button[@class="btn btn-primary"]');
    await login.click();
});

test('re-enterPass', async ({ page }) => {
    await page.goto('/');
    const signIn = page.getByText('Sign in');
    await signIn.click();

    const registration = page.getByText('Registration');
    await registration.click();

    const nameField = page.locator('#signupName');
    await nameField.fill('Vasyl');

    const LastName = page.locator('#signupLastName');
    await LastName.fill('Pupkin');

    const Email = page.locator('#signupEmail');
    await Email.fill('vladimir.gazevich+2@getMaxListeners.com');

    const Pass = page.locator('#signupPassword');
    await Pass.fill('1234Qwerty');

    const rePass = page.locator('#signupRepeatPassword');
    await rePass.fill('');

    await registration.click();
    //await login.click();
});

test('re-enterPass2', async ({ page }) => {
    await page.goto('/');
    const signIn = page.getByText('Sign in');
    await signIn.click();

    const registration = page.getByText('Registration');
    await registration.click();

    const nameField = page.locator('#signupName');
    await nameField.fill('Vasyl');

    const LastName = page.locator('#signupLastName');
    await LastName.fill('Pupkin');

    const Email = page.locator('#signupEmail');
    await Email.fill('vladimir.gazevich+2@getMaxListeners.com');

    const Pass = page.locator('#signupPassword');
    await Pass.fill('1234Qwerty');

    const rePass = page.locator('#signupRepeatPassword');
    await rePass.fill('1234qWert');

    await registration.click();
    //await login.click();
});

test('Pass1', async ({ page }) => {
    await page.goto('/');
    const signIn = page.getByText('Sign in');
    await signIn.click();

    const registration = page.getByText('Registration');
    await registration.click();

    const nameField = page.locator('#signupName');
    await nameField.fill('Vasyl');

    const LastName = page.locator('#signupLastName');
    await LastName.fill('Pupkin');

    const Email = page.locator('#signupEmail');
    await Email.fill('vladimir.gazevich+2@getMaxListeners.com');

    const Pass = page.locator('#signupPassword');
    await Pass.fill('');

    const rePass = page.locator('#signupRepeatPassword');
    await rePass.fill('')
    
});

test('Pass2', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('Vasyl');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('Pupkin');

        const Email = page.locator('#signupEmail');
        await Email.fill('vladimir.gazevich+2@getMaxListeners.com');

        const Pass = page.locator('#signupPassword');
        await Pass.fill('фыфыфы');

        const rePass = page.locator('#signupRepeatPassword');
        await rePass.fill('')
    });

test('email+pass', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('Vasyl');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('Pupkin');

        const Email = page.locator('#signupEmail');
        await Email.fill('vladimir.gazevich+2@');

        const Pass = page.locator('#signupPassword');
        await Pass.fill('');

        const rePass = page.locator('#signupRepeatPassword');
        await rePass.fill('')
    });
test('email1', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('Vasyl');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('Pupkin');

        const Email = page.locator('#signupEmail');
        await Email.fill('vladimir.gazevich+2@');

        const rePass = page.locator('#signupRepeatPassword');
        await rePass.fill('')
    });

test('email2', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('Vasyl');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('Pupkin');

        const Email = page.locator('#signupEmail');
        await Email.fill('');

        const Pass = page.locator('#signupPassword');
        await Pass.fill('');
        
    });


test('lastName1', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('Vasyl');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('P');

        const Email = page.locator('#signupEmail');
        await Email.fill('');

        
        //await login.click();
    });

test('lastName2', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('Vasyl');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('$%^');

        const Email = page.locator('#signupEmail');
        await Email.fill('');

        
        //await login.click();
    });

test('lastName3', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('Vasyl');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('');

        const Email = page.locator('#signupEmail');
        await Email.fill('');

        
        //await login.click();
    });
 
test('FirstName1', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('V');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('');

    });

test('FirstName2', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('#$%');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('');

    });

test('FirstName3', async ({ page }) => {
        await page.goto('/');
        const signIn = page.getByText('Sign in');
        await signIn.click();

        const registration = page.getByText('Registration');
        await registration.click();

        const nameField = page.locator('#signupName');
        await nameField.fill('');

        const LastName = page.locator('#signupLastName');
        await LastName.fill('');

    });



//   const LastName = page.getByLabel('Last name');
//   await LastName.fill('Pupkin');
//   await LastName.click();
//await nameField.click();
//});


// test('field_name1 emptyField', async ({ page })) => {
//   await page.goto('/');
//   const inputField = 'input[name="username"]'
//   await page.getByLabel('').fill('')
//   //await page.locator('button', { })