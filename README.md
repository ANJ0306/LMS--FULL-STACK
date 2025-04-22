# 📚 Library Management System (LMS)

## Overview

The Library Management System (LMS) is a comprehensive web-based application designed to manage all core operations of a library. This includes user and admin operations, book inventory, transactions (issue/return/fine), and membership management. This system is implemented using the **MERN stack**: React.js (frontend), Node.js + Express.js (backend), and MySQL (database via Sequelize ORM).

All features below are derived directly from the functional modules listed in the official LMS Excel specification.

---

## System Modules & Features

### 👤 User & Admin Management
- Admin Login
- User Login
- Admin Home Page
- User Home Page
- User Management (Add, View, Edit users)
- Log Out

---

### 📚 Book Management
- Add Book
- Update Book
- Master List of Books
- Book Available (Real-time book availability)
- Search Results (Search by title, author, or category)

---

### 💳 Membership Management
- Add Membership
- Update Membership
- Master List of Memberships

---

### 🔁 Book Transactions
- Book Issue (14-day period)
- Return Book
- Pay Fine (₹5 per day after due date)
- Active Issues (currently issued books)
- Overdue Returns (delayed returns with fines)
- Issue Requests (requested books by members)

---

### 📊 Reports & Ledger
- Reports (Issue & Return summary, fine summary)
- Ledger Info (track transaction records and financial data)


---

### 🛠 System Utilities
- Maintenance (update system parameters)
- Cancel (cancel operations)
- Confirmation (pop-up confirmations and alerts)

---

### 🖥️ Technology Stack
-Frontend
-React.js
-React Router
-TailwindCSS / Bootstrap

### Backend
-Node.js
-Express.js
-MongoDB + Mongoose      |

---



