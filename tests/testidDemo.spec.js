import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').click({
    button: 'right'
  });
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="login-button"]').click();
    await page.getByText('Submit').press('Enter');
  });