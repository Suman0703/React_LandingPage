# 📰 Editorial Blog Layout (React + Tailwind)

This project is a **responsive editorial / magazine-style blog layout** built using **React + Vite + Tailwind CSS**.

It focuses on:
- Component-based architecture
- Responsive layouts
- Grid & Masonry concepts
- Clean Tailwind utility usage
- Data-driven UI using `.map()`

This README is written as **revision notes**, not just documentation.

---

## 🛠 Tech Stack

- **React** – UI library
- **Vite** – Fast development build tool
- **Tailwind CSS** – Utility-first CSS framework

---

## 📁 Project Structure (Conceptual)

src/

│── components/

│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── Card.jsx
│

│── pages/

│ ├── Page.jsx (Grid / Masonry section)

│
│── App.jsx
│── main.jsx



> Each component has **one responsibility only**.

---

## 🧠 Core Concepts Used

### 1️⃣ Component-Based Design

- **Navbar** → Top navigation overlay
- **Hero** → Background image + heading
- **Card** → Single reusable post design
- **Page** → Layout + data + repetition logic

👉 UI is split into **small reusable pieces**.

---

### 2️⃣ Data-Driven UI (VERY IMPORTANT)

Instead of writing HTML again and again, we use **data + `.map()`**.

Example data:

```js
const posts = [
  {
    title: "Trip that you'll never ever forget",
    date: "Nov 23, 2016",
    category: "Travel",
    excerpt: "...",
    image: "..."
  },
  ...
]
