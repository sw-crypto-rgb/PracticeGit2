import { test, expect } from '@playwright/test';

test('Browser stack- Add to cart and checkout', async ({page} ) => {

  // go to site
  await page.goto('https://bstackdemo.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByText('Select Username').click();
  await page.getByText('demouser', { exact: true }).click();
  await page.getByText('Select Password').click();
  await expect(page.getByText('Select Password')).toBeVisible();
  await page.locator('#password svg').click();
  await page.getByText('testingisfun99', { exact: true }).click();
  await page.locator('div').nth(3).click();
  await page.locator('div').nth(4).click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('[id="1"]').getByRole('img', { name: 'img' }).click();

// Add to cart
  await page.getByText('iPhone 12', { exact: true }).click();
  await page.locator('[id="1"]').getByText('Add to cart').click();
  await page.getByText('X', { exact: true }).click();

 //Add item to cart 
  await page.locator('[id="5"]').getByRole('img', { name: 'img' }).click();
  await page.locator('[id="5"]').getByText('$599.00').click();
  await expect(page.locator('[id="5"]')).toContainText('iPhone 11');
  await page.locator('[id="5"]').getByText('Add to cart').click();

// Add item to cart
  await page.goto('https://bstackdemo.com/?signin=true');
  await page.locator('[id="6"]').getByRole('img', { name: 'img' }).click();
  await page.locator('[id="6"]').getByText('Add to cart').click();

  // checkout
  await page.getByRole('button', { name: 'Cart' }).click();
  await expect(page.getByText('3Bag')).toBeVisible();
  await expect(page.getByText('SUBTOTAL$ 2097.00OR UP TO 9 x')).toBeVisible();
  await page.getByText('Checkout').click();

// Address fill
  await page.locator('ol').click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('test');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('user');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Enter');
  await page.getByRole('textbox', { name: 'Address' }).click();
  await page.getByRole('textbox', { name: 'Address' }).fill('address');
  await page.getByRole('textbox', { name: 'State/Province' }).click();
  await page.getByRole('textbox', { name: 'State/Province' }).fill('AZ');
  await page.getByRole('textbox', { name: 'Postal Code' }).click();
  await page.getByRole('textbox', { name: 'Postal Code' }).fill('3213');
  await page.getByRole('button', { name: 'Submit' }).click();

  //Order confirmation
  await expect(page.getByText('Your Order has been')).toBeVisible();
  await expect(page.getByTestId('Your order number is')).toBeVisible(); 
  await page.getByRole('listitem').filter({ hasText: 'Your Order has been' }).click();
  await page.getByText('Your order number is 60.').click();
  await expect(page.locator('div').filter({ hasText: 'Your Order has been' }).nth(4)).toBeVisible();

  //download order receipt
  const downloadPromise = page.waitForEvent('download');
  await page.getByText('Download order receipt').click();
  const download = await downloadPromise;

    //logout
    await page.getByRole('button', { name: 'Continue Shopping »' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
  });