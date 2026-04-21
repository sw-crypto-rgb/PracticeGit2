import { test, expect } from '@playwright/test';
import { Login } from './../pom/Login.js';


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

  test('user order any one product', async ({ page} ) => {
    const loginobj = new Login(page);
    await loginobj.launchApp();
    await loginobj.loginStandard();
    //other steps
  });