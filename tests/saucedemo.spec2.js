/* 
// when writing Playwright TC, part 1 is locating elements, part 2 is performing actions on those elements, and part 3 is making assertions on the expected results.
//Asserions are the conditions that we expect to be true at a certain point in our test. They help us verify that our application is behaving as expected. 
// In Playwright, we can use the expect function to make assertions about the state of our application.
// Locators are unique identifiers that allow us to find web elelments in html and interact with elements on a web page. 
// They are essential for performing actions and making assertions in our tests. 
// Playwright provides various types of locators, such as CSS selectors, XPath, and role-based locators.
Simple Mental Model
Think of:
async → "This function contains operations that take time."
await → "Wait here until this finishes."

🔥 Quick Real-World Analogy
Imagine:
page.goto() = ordering food
await = waiting for the food
Without await = walking away before food arrives */

import { test, expect } from '@playwright/test';
import { Login } from './../pom/Login2.js';

test('should login to sauce demo app', async ({page} ) => {
    const loginobj = new Login(page);
    await loginobj.launchApp();
    await loginobj.loginStandard();
  });

  test('user get error while login to sauce demo app', async ({ page} ) => {
    const loginobj = new Login(page);
    await loginobj.launchApp();
    await loginobj.loginError();  
  });
      //other steps
  test('should login to sauce demo app with performance error', async ({page} ) => {
    const loginobj = new Login(page);
    await loginobj.launchApp();
    await loginobj.loginPerformance(); 
  });
  
  test('user get error while login to sauce demo app with empty credentials', async ({ page} ) => {
    const loginobj = new Login(page);
    await loginobj.launchApp();
    await loginobj.loginEmpty();  
  });
  test ('user get error while login to sauce demo app with invalid credentials', async ({ page} ) => {
    const loginobj = new Login(page);
    await loginobj.launchApp();
    await loginobj.loginInvalid();  
  });

  test('user get error while login to sauce demo app with empty username', async ({ page} ) => {
    const loginobj = new Login(page);
    await loginobj.launchApp();
    await loginobj.loginEmptyUsername();  
  });

test('user order any one product', async ({ page} ) => {
  const loginobj = new Login(page);
  await loginobj.launchApp();
  await loginobj.loginStandard();
});