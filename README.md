# 🏖️ Beach Resort (ReactJS)

A **Beach Resort** web application built with **ReactJS (Class-Based Components)** showcasing luxurious resort rooms with a simple e-commerce–style browsing experience. This project was originally developed **~6 years ago**, following React best practices of that time.

---

## ✨ Features

* 🏨 **Luxurious Rooms Listing**

  * Display different room types (single, double, family, luxury)
  * Room details with images, pricing, and amenities

* 🛒 **E-commerce-style Experience**

  * Browse rooms
  * Filter by room type, price, capacity, and extras
  * Dynamic room rendering

* ⚛️ **React Class-Based Components**

  * Built before React Hooks era
  * Uses `Component`, `state`, and `props`
  * Demonstrates traditional React architecture

* 📱 **Responsive UI**

  * Works across desktop and mobile screens

---

## 🛠️ Tech Stack

* **ReactJS** (Class Components)
* **JavaScript (ES6)**
* **HTML5 / CSS3**
* **Context API** (early usage for state management)
* **React Router** (for navigation)

> ⚠️ Note: This project does **not** use React Hooks, Redux, or modern build optimizations as it was created before those became standard.

---

## 📂 Project Structure (Simplified)

```
beach-resort/
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Room.js
│   │   ├── RoomsList.js
│   │   └── RoomsFilter.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Rooms.js
│   │   └── SingleRoom.js
│   │
│   ├── context.js
│   ├── data.js
│   ├── App.js
│   └── index.js
│
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js** (recommended: v14 or v16)
* **npm** or **yarn**

### Installation

```bash
git clone <repository-url>
cd beach-resort
npm install
```

### Run the App

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## 🧠 Learning Purpose

This project is ideal for:

* Understanding **legacy React codebases**
* Learning **class-based component patterns**
* Maintaining or refactoring older React applications
* Migrating class components to **modern React Hooks**

---

## 🔄 Possible Improvements (Modernization Ideas)

* Convert class components to **functional components with Hooks**
* Replace Context API with **Redux / Zustand**
* Upgrade to latest React & Webpack
* Improve accessibility (ARIA)
* Add real payment integration

---

## 📸 Screenshots

*Add screenshots here (Home page, Rooms list, Room details)*

---

## 📜 License

This project is for **educational and portfolio purposes**.

---

## 🙌 Acknowledgements

Inspired by early React tutorials and projects focused on hotel and resort booking systems.

---

### ⭐ If you’re reviewing this project today

Please consider it in the context of **React standards from ~6 years ago**, where class-based components were the norm.
