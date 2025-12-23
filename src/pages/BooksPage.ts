import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BooksPage extends BasePage {
  private welcomeText = 'text=Welcome';
  private addBookButton = 'text=Add Book';
  private titleInput = 'input[name="title"]';
  private authorInput = 'input[name="author"]';
  private submitButton = 'button[type="submit"]';
  private logoutButton = 'text=Logout';
  private errorMessage = 'text=required';

  async assertOnBooksPage() {
    await expect(this.page).toHaveURL(/books/);
    await expect(this.page.locator(this.welcomeText)).toBeVisible();
  }

  async addBook(title: string, author: string) {
    await this.page.click(this.addBookButton);
    await this.page.fill(this.titleInput, title);
    await this.page.fill(this.authorInput, author);
    await this.page.click(this.submitButton);
  }

  async submitEmptyBookForm() {
    await this.page.click(this.addBookButton);
    await this.page.click(this.submitButton);
  }

  async assertBookVisible(title: string) {
    await expect(this.page.locator(`text=${title}`)).toBeVisible();
  }

  async assertBookValidationError() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }

  async logout() {
    await this.page.click(this.logoutButton);
  }
}
