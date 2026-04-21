import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
//await page.getByTestId('username').fill('standard_user');
//await page.getByTestId('password').fill('secret_sauce');
//await page.getByTestId('login-button').click();


//47.48 min mar2
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();

});
