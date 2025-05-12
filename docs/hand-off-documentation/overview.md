---
id: overview
title: Architecture Overview
sidebar_position: 2
---

# System at a glance

Below is the 10 000‑foot view of how the Avery's Helpful Hair Kits Website project fits together.

| Layer            | Main tech         | Responsibility                    |
| ---------------- | ----------------- | --------------------------------- |
| UI               | React 19          | Renders interactive pages and UI  |
| Routing          | React Router v7+  | Handles routes and redirects      |
| Stage Management | React Context API | Manages user sessions and more    |
| Styling          | CSS               | Utility‑first styling & dark mode |
| Backend          | Express + Supabase| Handles auth, slots, etc.         |
| Database         | Supabase(Postgres)| Stores users, slots, and requests |
| Authentification | Supabase Auth     | Email/password and OAuth login    |
| Hosting          | Vercel            | Deploys the site                  |
| Deployment       | GitHub + Vercel   | Automatic deployment on push      |


## Key directories

```
src/                 → Main application source code
    assets/              → Static assets (images, icons, etc.)
    common/              → Shared logic used across the website
        components/            → Reusable UI components (buttons, nav, etc.)
        contexts/              → Global state (user, calendar, etc.)
        hooks/              → Custom React hooks
        layouts/              → Shared layout wrappers or templates
        utils/              → Helper functions and utility logic
    pages/              → Route-based pages (auth, admin, volunteer views)
static/              → Publicly served static files (favicon, robots.txt)
App.css              → Global styles for the website
App.jsx              → Main app component with router and providers
index.css            → Base CSS reset and root style definitions
index.jsx            → React entry point
```

## Decision log (abridged)

| Date       | Choice                        | Rationale                                              |
| ---------- | ----------------------------- | ------------------------------------------------------ |
| 2025‑04‑10 | Chose Docusaurus over Next.js | Built‑in versioned docs saved weeks of boilerplate     |
| 2025‑04‑14 | Switched CSS to Tailwind      | Faster prototyping, consistent design tokens           |
| 2025‑04‑20 | Enabled Algolia search        | >10× better discoverability for long‑tail docs queries |
