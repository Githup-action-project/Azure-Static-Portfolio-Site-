
# Mohammed Ibrahim Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Azure. It showcases professional experience, projects, and integrates real-time visitor analytics using Azure Table Storage and Azure Functions.

## 🚀 Features
- Responsive design with Tailwind CSS
- Hero section with gradient background and call-to-action
- Visitor analytics dashboard with CountUp animation
- Azure Function backend for tracking unique visitors
- CI/CD with GitHub Actions
- Hosted on Azure Static Web Apps

## 🛠 Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Azure Functions (Node.js)
- Database: Azure Table Storage
- Deployment: Azure Static Web Apps, GitHub Actions

## 📁 Folder Structure
```
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── VisitorAnalytics.jsx
 │    └── Footer.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    ├── Projects.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

## 🧱 Architecture Overview
- Static Web App serves React frontend
- Azure Function App handles visitor tracking
- Visitor data stored in Azure Table Storage

## ⚙️ Deployment Steps
1. Push code to GitHub
2. GitHub Actions builds and deploys frontend to Azure Static Web Apps
3. Azure Function App deployed separately using Azure Functions Core Tools
4. CORS configured to allow frontend to call backend

## 📊 Analytics Integration
- Visitor IP tracked and stored in Azure Table Storage
- Function returns total visitors, unique visitors, and last visit timestamp
- React component fetches and displays analytics with CountUp animation

## 🧪 How to Run Locally
```bash
npm install
npm run dev
```

## 🔄 CI/CD with GitHub Actions
- Workflow file: `.github/workflows/deploy.yml`
- Steps:
  - Checkout code
  - Install dependencies
  - Build project
  - Deploy to Azure Static Web Apps

## 🌐 Custom Domain Setup
- Add domain in Azure Portal → Static Web App → Custom Domains
- Configure DNS with CNAME record
- Azure issues free SSL certificate

## 📈 Future Enhancements
- Add charts for visitor trends using Chart.js
- Create dedicated analytics dashboard page
- Add blog section for DevOps insights
- Improve SEO with meta tags and Open Graph

## Live Demo
- Visit: [https://brave-coast-04f21c003.1.azurestaticapps.net](https://brave-coast-04f21c003.1.azurestaticapps.net)
- View visitor analytics in real-time

---

