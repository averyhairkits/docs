---
id: overview
title: Documentation Overview
sidebar_position: 1
---

# What is **Avery’s Helpful Hair Kits Scheduler**?
<!-- **AwesomeProject** is a lightweight starter kit for building blazing‑fast, content‑driven sites with **React + Docusaurus 2**.
It ships with sensible defaults so you can focus on content—not configuration. -->

**Avery’s Helpful Hair Kits Scheduler** is a tool designed to streamline volunteer coordination for the nonprofit organization, Avery's Helpful Hair Kits. It allows volunteers to sign up and input their availability for future opportunities while giving organization admins an organized way to view and manage volunteer schedules. The scheduler includes a calendar interface where volunteers can select time slots, and admins can see availability summaries and confirm events. This system enhances efficiency by providing real-time scheduling updates, sorting options, and automated email notifications for confirmed sessions.

## Key features

| Feature                 | Why it matters                                                                 |
| ----------------------- | ------------------------------------------------------------------------------ |
| **Availability input**  | Volunteers can select and share their availability with admins.                |
| **Combined calendar**   | Admins can see all volunteer availability and confirmed sessions in one place. |
| **Cancellation log**    | Admins can see relevant changes to volunteer availability.                     |
| **User list**           | Admins can see all users that have a registered account.                       |

## Tech stack

- **React 18** &mdash; UI layer
- **MDX 2** &mdash; Markdown + React components
<!-- - **TypeScript** (optional but recommended) -->
<!-- - **Tailwind CSS** (pre‑wired) for rapid styling -->

## Folder anatomy
<!-- awesome-project/
├─ docs/ → Documentation (this folder)
├─ src/pages/ → Static pages (landing, blog, etc.)
├─ docusaurus.config.js
└─ sidebars.js -->

averyhairkits/frontend
├─ src/common/contexts/ → shared contexts
├─ src/pages/account → login and sign up page
├─ src/pages/home/left → side bar of home page (exists in variations across all pages except login and sign up)
├─ src/pages/home/right → main content of home page (volunteer/admin home calendar pages, admin user list page)
├─ src/pages/home/right → page navigation
└─ App.jsx