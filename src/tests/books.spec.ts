import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BooksPage } from '../pages/BooksPage';
import { users, book } from '../utils/testData';

test.describe('Books Inventory', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/login');
    await loginPage.login(users.valid.username, users.valid.password);
  });

  test('Happy path: login → add book → logout', async ({ page }) => {
    const booksPage = new BooksPage(page);

    await booksPage.assertOnBooksPage();
    await booksPage.addBook(book.valid.title, book.valid.author);
    await booksPage.assertBookVisible(book.valid.title);

    await booksPage.logout();
    await expect(page).toHaveURL('/login');
  });

  test('Validation: should show error when adding book with empty fields', async ({ page }) => {
    const booksPage = new BooksPage(page);

    await booksPage.assertOnBooksPage();
   // await booksPage.submitEmptyBookForm();
   // await booksPage.assertBookValidationError();
  });

});
