# 📦 BitStore — Product Management Dashboard

A modern **React + TypeScript + TailwindCSS** application featuring product CRUD operations, charts, analytics, authentication, and full Light/Dark mode with localStorage.

---

## 🚀 Features

### ✅ Product Management
- Add, edit, delete products  
- Image upload (file input + URL paste)  
- Modern Figma-style UI components  
- Product table with checkbox, filters, sorting UI  
- Responsive layout  

### 📊 Dashboard & Analytics
- Weekly Earnings bar chart  
- Earnings line chart  
- Subscriptions performer chart  
- Total Views mini line chart  
- Recent sales list  
- Payment history table  
- Top sales product list  
- All charts fully support dark mode  

### 🔐 Authentication
- Mock login system  
- Role-based routing  
- Protected routes using `<ProtectedRoute />`  
- Manager-only dashboard  

### 🌙 Light / Dark Mode
- Theme toggle in Navbar  
- Saves preference in **localStorage**  
- Applies Tailwind **dark:** classes globally  

### 🧩 Clean Architecture
- Modular reusable components  
- Context-based Auth + Theme providers  
- Mock API abstraction layer  
- Figma-inspired design system  

---

## 🛠 Tech Stack

| Layer | Technology |
|------|------------|
| Framework | React + Vite |
| Language | TypeScript |
| Styles | TailwindCSS |
| Routing | React Router |
| Charts | Recharts |
| State | Context API |
| Mock API | In-memory CRUD |

---

## 📂 Folder Structure

```
src/
 ├── api/
 │    └── mockApi.ts
 ├── components/
 │    ├── charts/
 │    ├── tables/
 │    ├── Sidebar.tsx
 │    ├── Navbar.tsx
 │    └── Footer.tsx
 ├── context/
 │    ├── AuthContext.tsx
 │    └── ThemeContext.tsx
 ├── pages/
 │    ├── LoginPage.tsx
 │    ├── DashboardPage.tsx
 │    ├── ProductsPage.tsx
 │    ├── AddProductPage.tsx
 │    └── ProductFormPage.tsx
 ├── data/
 │    └── mockProducts.ts
 ├── App.tsx
 └── main.tsx
```

---

## ⚙️ Installation

### 1️⃣ Clone the project
```bash
git clone <your-repo>
cd <project-folder>
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
```bash
npm run dev
```

Your app will start at:
```
http://localhost:5173
```

---

## 🔑 Mock Login Credentials

```
email: admin@example.com
password: admin123
role: MANAGER
```

Use these credentials to access the dashboard.

---

## 🔐 Protected Routes Example

```tsx
<ProtectedRoute allowedRoles={["MANAGER"]}>
  <DashboardPage />
</ProtectedRoute>
```

---

## 🌙 Dark Mode System

- Saved in `localStorage.theme`
- Managed by `ThemeContext.tsx`
- Tailwind classes automatically switch (`dark:bg-slate-800`, etc.)
- Navbar, Sidebar, cards, charts support dark mode fully

---

## 📈 Charts Included

### ✔ Weekly Earning Bar Chart  
### ✔ Earnings Line Chart  
### ✔ Subscriptions Performer Chart  
### ✔ Total Views Mini Chart  
### ✔ Reusable BarChartCard / LineChartCard  

All built with **Recharts** and 100% responsive.

---

## 📬 Mock API (CRUD)

All product CRUD operations are handled in:

```
src/api/mockApi.ts
```

Includes:
- getProducts  
- getProductById  
- saveProduct  
- deleteProduct  

Data stored in-memory for demo use.

---

## 🧭 Routes Overview

- `/login`
- `/dashboard`
- `/products`
- `/products/new`
- `/products/:id/edit`
- `/unauthorized`

---

