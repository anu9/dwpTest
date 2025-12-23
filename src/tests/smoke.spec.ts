import { test, expect } from '@playwright/test';

test('smoke test - login page loads', async ({ page }) => {
  await page.goto('https://frontendui-librarysystem.onrender.com/login');
  await expect(page).toHaveURL(/login/);
});
