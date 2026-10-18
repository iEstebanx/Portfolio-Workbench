# ⚡ Ced — Web Developer & IT Solutions Portfolio

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Material UI](https://img.shields.io/badge/Material--UI-v6-007FFF?logo=mui&logoColor=white&style=for-the-badge)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment%20Ready-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Live Demo & Inspiration:** Designed with a sleek, interactive developer-first aesthetic inspired by modern portfolios, featuring real-time interactive widgets, tactile simulations, and dark/light mode toggle.

---

## 📌 About Me

> *"A motivated and responsible recent graduate seeking an entry-level position where I can apply my computer skills. I am eager to gain practical work experience, learn new skills, work well with others, and contribute to the team operations and deliver reliable technical solutions."*

- 🎓 **Education:** Recent Graduate in Computer Studies / IT
- 📍 **Location:** Cavite, Philippines *(Available for On-Site, Hybrid, and Remote roles)*
- 💼 **Primary Focus:** Entry-Level Full-Stack Web Development (React.js, Fastify) & IT Support / Hardware Maintenance
- 📧 **Direct Contact:** [ced@gmail.com](mailto:ced@gmail.com)

---

## 🚀 Key Interactive Features

1. **No External Images Needed:**
   - Engineered purely using clean SVG icons, modern typography, glassmorphism, and live interactive widgets.
2. **Interactive Terminal & Dev Station:**
   - Dynamic command runner simulating real terminal inspection (`cat introduction.txt`, `whoami --skills`, `sys.status`).
3. **Quscina Restaurant POS & Inventory Simulator:**
   - **Live POS Terminal:** Add dishes to order slips, calculate VAT & subtotals, and generate printable thermal receipts.
   - **Real-Time Inventory Tracker:** Live stock monitoring with low-inventory threshold warnings and instant restock actions.
   - **Sales Analytics Dashboard:** Daily revenue counters, ticket turnover rates, and transaction insights.
4. **Interactive Skill Matrix & Search:**
   - Filter skills by category (*Frontend*, *Backend*, *Hardware & Systems*, *Web Fundamentals*) or search live by keyword.
5. **Detailed Experience Timeline:**
   - Internship tenure at **Noveleta Training Center** detailing web system deployments (TESDA Enrollment, Venue Reservation) and workstation hardware troubleshooting.
6. **Dynamic Contact & Message Composer:**
   - One-click email copy to clipboard with instant feedback.
   - Pre-filled message templates (*Job Opportunity*, *Project Collaboration*, *IT Support*).
   - Confetti blast feedback and direct `mailto:` dispatch.
7. **Dark / Light Theme Persistence:**
   - Fully customized Material UI theme engine stored in `localStorage`.

---

## 🛠️ Technical Stack

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Frontend** | React 19, Material UI (MUI v6), Emotion, Tailwind CSS Fundamentals |
| **Backend & APIs** | Node.js, Fastify, REST APIs, JSON Architecture |
| **IT & Hardware** | Workstation Assembly, Component Diagnostics, Peripheral Setup (Network Printers, POS Scanners) |
| **Core Web** | JavaScript (ES6+), Semantic HTML5, CSS3 Grid/Flexbox |
| **Build & Deploy** | Vite, Rollup/Rolldown, Vercel, Git & GitHub |

---

## 📂 Project Structure

```text
Portfolio-Workbench/
├── index.html                 # Main HTML template with Google Fonts
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── README.md                  # Comprehensive GitHub documentation
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Application layout & theme provider
    ├── index.css              # Global resets and typography
    ├── theme.js               # Dark/Light MUI custom themes
    ├── data/
    │   └── portfolioData.js   # Centralized portfolio data
    └── components/
        ├── Navbar.jsx         # Sticky glassmorphic navigation bar
        ├── Hero.jsx           # Hero banner with interactive terminal console
        ├── About.jsx          # Background narrative & candidate credentials
        ├── Skills.jsx         # Filterable skill cards with search & meters
        ├── Projects.jsx       # Featured projects showcase
        ├── QuscinaInteractiveSimulator.jsx # Live POS & stock simulation
        ├── CaseStudyModal.jsx # Deep dive architecture dialog
        ├── Experience.jsx     # Work experience timeline (Noveleta Training Center)
        ├── Contact.jsx        # Email copy, templates & message composer
        └── Footer.jsx         # Footer with quick links & back-to-top
```

---

## 💻 Local Development Setup

Follow these simple steps to run the portfolio on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio-workbench.git
cd portfolio-workbench
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application with Hot Module Replacement (HMR).

### 4. Build for production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

---

## 🌐 Step-by-Step Vercel Deployment Guide

Deploying this portfolio to **Vercel** is free, automatic, and takes under 3 minutes.

### Step 1: Push your code to GitHub
If you haven't initialized Git yet, run:
```bash
git init
git add .
git commit -m "feat: complete interactive developer portfolio with MUI"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### Step 2: Connect with Vercel
1. Go to [https://vercel.com](https://vercel.com) and click **Sign Up** or **Log In** using your **GitHub account**.
2. From the Vercel Dashboard, click the **"Add New..."** button in the top-right corner and select **"Project"**.
3. Under **"Import Git Repository"**, locate your portfolio repository and click **"Import"**.

### Step 3: Configure Project Settings
Vercel automatically detects Vite and configures everything:
- **Framework Preset:** `Vite`
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

*(No environment variables or custom settings are required!)*

### Step 4: Click Deploy!
1. Click the **"Deploy"** button.
2. Vercel will build the project in ~30 seconds.
3. You'll receive a live URL (e.g., `https://your-portfolio.vercel.app`) with free SSL and automated CI/CD: every time you push changes to your GitHub `main` branch, Vercel will automatically redeploy!

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
