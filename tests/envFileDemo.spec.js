import { test, expect } from '@playwright/test';

test('SauceDemo Login', async ({ page }) => {

    await page.goto(process.env.BASE_URL);
    await page.locator('[data-test="username"]').fill(process.env.USERNAME);
    await page.locator('[data-test="password"]').fill(process.env.PASSWORD);
    await page.locator('[data-test="login-button"]').click();
});