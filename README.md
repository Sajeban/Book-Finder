# ![logo](https://github.com/user-attachments/assets/fcfc3f55-05e5-4800-8cd1-b0f919d005d4) 

Find your next read effortlessly with **Book Finder**, a sleek Next.js app that taps into the Google Books API. Search, browse, and discover books with ease using a responsive and intuitive interface.

🚀 **Deployed Application:**  
[https://book-finder-peach.vercel.app/](https://book-finder-peach.vercel.app/) 🌐

---

## 🛠 **Prerequisites**

Before you start, ensure you have the following installed:

- **Node.js:** Version 18.x  
- **Next.js:** Version 14.2

---

## ⚙️ **Installation and Setup**

To install the necessary Node modules, run the following command:

```bash
npm install
```
To run the application

```bash
npm run dev

```
---

## ✨ **Features**

- **Google Books API Integration:** Fetch and display detailed book information.
- **Responsive Design:** Beautiful and responsive UI built with Tailwind CSS for both mobile and desktop.
- **Loading and Error Handling:** Displays smooth loading animations and provides detailed error messages for scenarios like book not found or API rate limit issues.
- **Paginated Results:** Fetches and displays paginated book results.
- **Custom Theme:** Styled using Tailwind with primary color `#0074D9`.
- **Placeholder for Missing Images:** Automatically inserts a placeholder for books without images.
- **Formatted Book Descriptions:** Clean and readable formatting using Tailwind's `prose` class.

---

## 📸 **Screenshots**

### Home Page

<p>
  <img src="https://github.com/user-attachments/assets/868aa4c2-3dbe-4bf5-80ac-5bbca0d669ac" alt="Home Page - Desktop" width="50%" style="margin-right: 15px;"/>
  <img src="https://github.com/user-attachments/assets/d33e6f71-ed21-4786-a669-f5cdca8c0822" alt="Home Page - iPad" width="20%" style="margin-right: 15px;"/>
  <img src="https://github.com/user-attachments/assets/603f9958-8c7b-40ba-834b-96f47c81f3f7" alt="Home Page - Mobile" width="10%" />
</p>

### Book View

The image, publish date, full author names, rating, and page count are displayed.

<p>
  <img src="https://github.com/user-attachments/assets/0db1cc91-fc51-4089-8b36-19b6865c2388" alt="Book View - Desktop" width="50%" style="margin-right: 15px;"/>
  <img src="https://github.com/user-attachments/assets/1fc9e05b-b18c-4d44-8898-c3329c4e2a12" alt="Book View - iPad" width="20%" style="margin-right: 15px;"/>
  <img src="https://github.com/user-attachments/assets/dfca1859-3af5-422e-b903-7c911a6824e4" alt="Book View - Mobile" width="10%" />
</p>

### 404 Page

<img width="600" alt="404 Page" src="https://github.com/user-attachments/assets/008e07ac-ce42-4881-8ecc-3c358eca776f">

### Books Without Image
A placeholder image is used for these books.

<img width="260" alt="Placeholder Image" src="https://github.com/user-attachments/assets/0b6fd5ba-3b4e-4c41-88e2-ca1508e34a2d">

### Well-Formatted Descriptions

Try these links - [books/Lh4YEAAAQBAJ](https://book-finder-peach.vercel.app/books/Lh4YEAAAQBAJ) | [books/VyDVxwEACAAJ](https://book-finder-peach.vercel.app/books/VyDVxwEACAAJ)

<img width="600" alt="Formatted Description" src="https://github.com/user-attachments/assets/df6fc508-7950-4d17-953c-042386c5102e">

### Paginated API Calls

<img width="600" alt="Paginated Calls" src="https://github.com/user-attachments/assets/d6bbb9f5-f1df-45ef-93c9-d815d657dfd6">

---

## 🛡️ **Error Handling**

### Book Not Found

<img width="600" alt="Book Not Found" src="https://github.com/user-attachments/assets/ad98aced-3647-4a9c-a64a-d73eb55419fd">

### Unidentified Errors

<img width="600" alt="Unidentified Error" src="https://github.com/user-attachments/assets/14b6cf8a-b604-458c-a731-e62e2f52c54e">

---

## ⚠️ **Edge Cases**

1. **Invalid Book ID Search:**

   <img width="600" alt="Invalid Book ID" src="https://github.com/user-attachments/assets/c32b355d-805a-47f1-81f4-a83335b13d8c">

2. **Google API Rate Limit Exceeded:**

   <img width="600" alt="Rate Limit Exceeded" src="https://github.com/user-attachments/assets/6d1c4da2-6988-4b9e-8432-b6c93eea4352">

3. **Author Name Truncation (20+ characters):**

   <img width="199" alt="Author Name Truncated" src="https://github.com/user-attachments/assets/aee31be4-8455-439c-a05d-c5a7845e1027">

---

## 📑 **Appendices**

### Additional Home Page Layout

<p>
  <img src="https://github.com/user-attachments/assets/07e6deb5-597d-4b3b-8ecc-7c28565436ea" alt="Home Page - Desktop" width="50%" style="margin-right: 15px;"/>
  <img src="https://github.com/user-attachments/assets/c1450c80-5cb5-46d6-9271-1456d6b3ade1" alt="Home Page - iPad" width="20%" style="margin-right: 15px;"/>
  <img src="https://github.com/user-attachments/assets/6917d831-dba1-435d-91c0-9a6095e7a232" alt="Home Page - Mobile" width="10%" />
</p>

---

## 🚀 **Future Improvements**

### Pagination Enhancements

I planned to implement pagination like this:

<img width="700" alt="Pagination Plan" src="https://github.com/user-attachments/assets/67262e56-c8f2-40ce-9f97-51319ce68b1e">

However, due to the inconsistency in totalItems returned by the Google Books API, caused by open search on each request, it creates issues in generating reliable pagination numbers. A more robust handling method is required, but I was unable to complete this within the current timeframe.


For more details, refer to this [discussion on Stack Overflow](https://stackoverflow.com/questions/76799691/google-books-api-erroneously-incrementing-totalitems-returned).

---

