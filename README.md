# Kylax Bank - AI-Native Banking Platform

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://kylax-bank.vercel.app/)

**Live Demo:** [https://kylax-bank.vercel.app/](https://kylax-bank.vercel.app/)

Kylax Bank is a next-generation banking interface powered by AI, featuring a modern, responsive design, real-time application tracking, and AI-driven credit assessment visualizations.

## ✨ Features

- **AI-Driven UI**: Animated backgrounds, glassmorphism effects, and dynamic scroll animations.
- **Visual Application Tracker**: Real-time status updates with an AI "Holisti-Score" visualization.
- **Role-Based Portals**: Distinct dashboards for Loan Applicants and Loan Officers.
- **Data Visualization**: Interactive charts and progress indicators for financial data.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences.

## 🚀 Deployment

The project is deployed on Vercel.

- **Frontend**: React (CRA)
- **Deployment**: Vercel SPA Configuration

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

1. **Clone and navigate to the project:**
   ```bash
   cd /home/dev-kiran/Projects/kylaxBank
   ```

2. **Start the platform:**
   ```bash
   ./start-web.sh
   ```

3. **Access the interfaces:**
   - **🌐 Client Portal**: [http://localhost:3001](http://localhost:3001)
   - **🏦 Loan Officer Dashboard**: [http://localhost:3001/dashboard](http://localhost:3001/dashboard)

## System Architecture

- **Backend**: Express.js + WebSocket with a mock AI scoring engine
- **Frontend**: React + Tailwind CSS with a multi-step application wizard
- **Data**: In-memory data storage (demo mode)

---

© 2025 Kylax Bank. Revolutionizing lending with AI-powered credit assessments.
