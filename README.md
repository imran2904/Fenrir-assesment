# APS - Security Scanning Platform

A modern B2B SaaS security platform built with Next.js and React. This project recreates a professional security scanning dashboard with dark/light theme support and responsive design.

## Live Demo

Check out the live deployment: [https://fenrir-assesment.vercel.app/](https://fenrir-assesment.vercel.app/)

## Features

- **Authentication UI** - Clean signup/login interface with social auth options
- **Dashboard** - Scan overview with severity stats and scan management
- **Live Scan Console** - Real-time scan monitoring with activity logs and findings
- **Dark/Light Theme** - Fully functional theme toggle across all pages
- **Responsive Design** - Works seamlessly from mobile (375px) to desktop (1280px+)
- **Interactive Components** - Collapsible panels, tabs, modals, and more

## Tech Stack

- Next.js 16.1.6
- React 19.2.3
- Tailwind CSS v4
- FontAwesome Icons
- Vercel (Deployment)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.


## Pages

### 1. Login/Signup (`/`)
- Split layout with feature highlights
- Form validation
- Social login buttons (Apple, Google, Meta)

### 2. Dashboard (`/dashboard`)
- Severity cards (Critical, High, Medium, Low)
- Scan table with status, progress, and vulnerabilities
- Search and filter functionality
- Click any scan row to view details

### 3. Scan Detail (`/scan-detail`)
- Circular progress indicator
- Step tracker (Spidering → Mapping → Testing → Validating → Reporting)
- Live console with activity logs
- Finding log with vulnerability cards
- Collapsible panels

## Theme Toggle

The app supports both dark and light themes. Toggle is available in the header on all dashboard pages. Theme preference is saved in localStorage.

## Responsive Breakpoints

- Mobile: 375px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

## Deployment

Deployed on Vercel with automatic deployments from the main branch.

## Notes

- All data is mocked - no backend integration
- Logout redirects to the login page
- Theme persists across page reloads
- Sidebar collapses to hamburger menu on mobile

## Development

Built as part of a frontend assessment to demonstrate:
- UI/UX implementation from design references
- Responsive design skills
- React component architecture
- State management
- Dark mode implementation
- Clean, maintainable code

---

