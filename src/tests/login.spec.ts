import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/testData';

test('Unauthorized user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate('/login');

  await loginPage.login(users.invalid.username, users.invalid.password);
  await loginPage.assertLoginFailed();
});

test('Authorized user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate('/login');

  await loginPage.login(users.valid.username, users.valid.password);
  await expect(page).toHaveURL(/books/);
});
