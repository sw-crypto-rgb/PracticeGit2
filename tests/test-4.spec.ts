import { test, expect } from '@playwright/test';

test('test', { tag:'@smoke'}, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toContainText('Add to cart');
  await page.locator('[data-test="title"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toContainText('Your Cart');
  await expect(page.locator('[data-test="cart-list"]')).toMatchAriaSnapshot(`
    - text: QTY Description 1
    - link "Sauce Labs Backpack":
      - /url: "#"
    - text: /carry\\.allTheThings\\(\\) with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection\\. \\$\\d+\\.\\d+/
    - button "Remove"
    - text: "1"
    - link "Sauce Labs Bike Light":
      - /url: "#"
    - text: /A red light isn't the desired state in testing but it sure helps when riding your bike at night\\. Water-resistant with 3 lighting modes, 1 AAA battery included\\. \\$\\d+\\.\\d+/
    - button "Remove"
    - text: "1"
    - link "Sauce Labs Bolt T-Shirt":
      - /url: "#"
    - text: /Get your testing superhero on with the Sauce Labs bolt T-shirt\\. From American Apparel, \\d+% ringspun combed cotton, heather gray with red bolt\\. \\$\\d+\\.\\d+/
    - button "Remove"
    - text: "1"
    - link "Sauce Labs Onesie":
      - /url: "#"
    - text: /Rib snap infant onesie for the junior automation engineer in development\\. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel\\. \\$\\d+\\.\\d+/
    - button "Remove"
    `);
  await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('asdasd');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('dasdsa');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('323322');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="tax-label"]').click();
  await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $69.08');
  await expect(page.locator('[data-test="total-info-label"]')).toContainText('Price Total');
  await expect(page.locator('[data-test="shipping-info-label"]')).toBeVisible();
  await page.locator('[data-test="payment-info-label"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await page.close
});