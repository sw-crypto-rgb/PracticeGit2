// @ts-nocheck

import { test, expect } from '@playwright/test';

//single tag
//test('test', { tag: '@smoke'}, async ({ page }) => {
//tag a a group or provide multiple tags
test('test', { tag: ['@smoke', '@login', '@regression']}, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('Password');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.getByText('$29.99Remove').click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Checkout');
  await page.close
});