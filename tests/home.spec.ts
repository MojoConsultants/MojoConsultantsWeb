import { test, expect } from '@playwright/test';

test.describe('Mojo Consultants Pages', () => {
  test('Index.html loads and displays expected content', async ({ page }) => {
    await page.goto('http://localhost:3000/Index.html');
    await expect(page.locator('h1')).toHaveText('Welcome to Mojo Consultants');
    await expect(page.locator('nav')).toContainText('Home');
    await expect(page.locator('footer')).toContainText('© 2025 Mojo Consultants');
  });

  test('home.html loads and displays expected content', async ({ page }) => {
    await page.goto('http://localhost:3000/home.html');
    await expect(page.locator('h1')).toHaveText('Welcome to Mojo Consultants');
    await expect(page.locator('nav')).toContainText('DevOps Tools');
    await expect(page.locator('footer')).toContainText('© 2025 Mojo Consultants');
  });
});