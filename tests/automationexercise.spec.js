import { test, expect } from '@playwright/test';


test('test', { tag: ['@smoke', '@login', '@regression']}, async ({ page }) => {
  await page.goto('https://automationexercise.com/');


  await page.locator('section').filter({ hasText: 'Category Women Dress Tops' }).click();
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('heading', { name: 'New User Signup!' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('sastdafdsss');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('wuvxznnnn.sashi@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByText('Enter Account Information').click();
  await page.getByRole('radio', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('secret_sauce');
  await page.locator('#days').selectOption('11');
  await page.locator('#months').selectOption('2');
  await page.locator('#years').selectOption('1980');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('saw');
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill('we');
  await page.getByRole('textbox', { name: 'Company', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('comapnay');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('street address 123');
  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('address2');
  //await page.getByRole('textbox', { name: 'Country *' }).click();
  await page.locator('#country').selectOption('United States');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('AP');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('vizag');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('530017');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('123456789');
  // before submit step
  await page.pause();
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Account Created!').click();
  await page.getByText('Congratulations! Your new').click();
  await page.getByText('You can now take advantage of').click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByText('Logged in as sastdafdss').click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByText('Account Deleted!').click();
  await page.getByText('Your account has been').click();
  await page.getByRole('link', { name: 'Continue' }).click();
    //await page.close();
});
