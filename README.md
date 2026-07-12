# 🚀 Rahul Kumar Acharya | Full-Stack Web Developer Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Maintained%3F-yes-0ea5e9?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Main%20Stack-React%20%26%20DRF-06b6d4?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</div>

<br />

Welcome to my professional developer portfolio. This project is a modern, high-performance **React Single Page Application (SPA)** compiled with **Vite** and styled using **Tailwind CSS v4** to showcase my journey as a **Full-Stack Web Developer**.

---

## 🛠️ The Tech Arsenal

### **Frontend & Interface**
* **React 19**: Component-driven architecture and dynamic client-side rendering.
* **Tailwind CSS v4**: Native, compiler-fast styles with visual grid designs.
* **HTML5 & CSS3**: Semantic document structure and custom animations.
* **JavaScript (ES6+)**: Dynamic asynchronous operations.

### **Backend & APIs**
* **Python**: Core programming logic.
* **Django REST Framework (DRF)**: Design and architecture of secure, scalable APIs and relational endpoints.
* **PostgreSQL & SQLite**: Relational database setups.
* **Firebase**: Real-time databases and web services.

### **Hosting & Workflow**
* **Vite**: Ultra-fast hot-reloading bundler.
* **Git & GitHub**: Version control, collaborative branches, and repository audits.
* **Vercel, Netlify & Render**: Continuous deployment integrations and serverless redirects.

---

## ✨ Key Features

* **Sleek Cyber-Minimalist Theme**: Custom dark mode featuring an architectural grid overlay (`.grid-bg`) and glowing background radial gradients.
* **Clean History Routing**: Client-side single-page router utilizing `history.pushState` to completely eliminate hash links (`#`) in browser URLs.
* **Asymmetric Skills Grid**: Categorized and structured list layouts that break grid uniformity for clear visual hierarchy.
* **Case Study Projects Layout**: Alternating editorial presentation rows for major case studies, and a compact folder vault grid for utility experiments.
* **Secure Environment Configuration**: Sensitive third-party API configs (such as EmailJS) are safely configured using local `.env` variables and loaded via `import.meta.env`.
* **ATS-Friendly Resume**: A single-page professional resume compiled programmatically to PDF and linked directly in the header navigation.
* **EmailJS Form Portal**: Secure contact page allowing visitors to dispatch emails directly to my inbox with active loading indicators.

---

## 📁 Project Structure

```text
├── public/
│   ├── Images/           # Brand assets, certificates, and project screenshots
│   ├── assets/
│   │   └── resume.pdf    # Compiled ATS-friendly PDF resume
│   └── _redirects        # Netlify SPA routing redirects
├── src/
│   ├── components/       # Header, Footer, and common layout modules
│   ├── hooks/            # Reusable custom hooks (e.g., useSEO)
│   ├── pages/            # Page modules (Home, About, Skills, Projects, Certs, Contact)
│   ├── App.jsx           # Main SPA path routing coordinate
│   ├── index.css         # Global variables, scrollbars, and Tailwind v4 directives
│   └── main.jsx          # React app mount entrypoint
├── index.html            # Core document with default static SEO & favicon
├── vercel.json           # Vercel SPA routing redirects
├── package.json          # Dependency scripts & compiler packages
└── vite.config.js        # Vite bundler & Tailwind v4 compiler configuration
```
