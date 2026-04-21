import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('heading', { name: 'Installation' }).click();
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'Running and debugging tests' }).click();
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page.locator('#introduction')).toContainText('Introduction');
  await expect(page.getByLabel('Main', { exact: true })).toMatchAriaSnapshot(`
    - navigation "Main":
      - link "Playwright logo Playwright":
        - /url: /
        - img "Playwright logo"
        - text: ""
      - link "Docs":
        - /url: /docs/intro
      - link "API":
        - /url: /docs/api/class-playwright
      - button "Node.js"
      - link "Community":
        - /url: /community/welcome
      - link "GitHub repository":
        - /url: https://github.com/microsoft/playwright
      - link "Discord server":
        - /url: https://aka.ms/playwright/discord
      - button "Switch between dark and light mode (currently system mode)"
      - button "Search (Ctrl+K)":
        - text: ""
        - img
        - text: ""
    `);
  await expect(page.getByRole('button', { name: 'Getting Started' })).toBeVisible();
  await page.getByText('Copyright © 2026 Microsoft').click();
  await page.getByText('Write tests using web-first assertions, fixtures and locators Run single or').click();
  await page.getByRole('tab', { name: 'yarn' }).nth(5).click();
  await page.getByRole('tab', { name: 'pnpm' }).nth(5).click();
  await page.getByRole('link', { name: 'Playwright logo Playwright' }).click();
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page.getByRole('button', { name: 'Getting Started' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Installation');
  await expect(page.locator('#installing-playwright')).toContainText('Installing Playwright');
  await page.getByText('Copyright © 2026 Microsoft').click();
  await page.getByRole('heading', { name: 'What\'s nextDirect link to' }).click();
  await page.getByRole('link', { name: 'Next Writing tests »' }).click();
  await expect(page.locator('h1')).toContainText('Writing tests');
  await page.getByRole('heading', { name: 'Writing tests' }).click();
  await expect(page.getByLabel('Main', { exact: true })).toMatchAriaSnapshot(`- button "Node.js"`);
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await expect(page.getByLabel('Docs pages')).toContainText('PreviousPlaywright Test');
  await page.getByRole('link', { name: 'Next APIRequest »' }).click();
  await page.getByRole('link', { name: 'Next APIRequest »' }).click();
  await page.close();
});
