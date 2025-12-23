# Books Inventory Application – Playwright Automation

This project contains end-to-end UI automation tests for the **Books Inventory Application** using **Playwright + TypeScript** and **Page Object Model (POM)** design.

---

## Application Under Test

- **URL:** https://frontendui-librarysystem.onrender.com/login
- **Credentials:**  
  - Username: `admin`  
  - Password: `admin`

---

## Business Requirements Covered

✔ Only authorized users can access the books catalog  
✔ Login and book forms include validation  
✔ Users can create books  
✔ Error messages are shown for invalid input  
✔ Logout returns the user to the login page  

---

## Test Coverage

### Authentication
- Unauthorized user cannot login
- Authorized user can login successfully

### 📘 Books Inventory
- Happy path: Login → Add Book → Logout
- Validation: Error shown when adding a book with empty fields

### Smoke
- Login page loads successfully

---

## Run all tests
npx playwright test

## Run all tests(headed)
npx playwright test --headed 

## Generate and view the HTML report
npx playwright show-report

## Gap Analysis

✅ Expected Functional Coverage

1. Only authorized users can access Books page
2. Login form validation
3. Successful login redirects to Books page
4. Welcome message is displayed
5. User can add a book
6. Book form validation errors appear
7. Logout returns user to login page

🔍 Potential Gaps

1. Can user access /books directly without login?
2. Are validation messages user-friendly and visible?
3. Does logout actually clear session?
4. Are empty or invalid book fields blocked?
5. Is newly added book visible in the list?
