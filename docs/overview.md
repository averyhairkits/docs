---
id: overview
title: Documentation Overview
sidebar_position: 2
---

# What is the Avery's Helpful Hair Kits Scheduler?

The **Avery’s Helpful Hair Kits Scheduler** is a tool designed to streamline volunteer coordination. It allows volunteers to sign up and input their availability for future opportunities while giving the organizer an organized way to view and manage volunteer schedules.

## Key features

| Feature             | Why it matters                                |
| ------------------- | --------------------------------------------- |
| **Drag-and-Drop Scheduling**      | Volunteers and organizers can click and drag to select and confirm multiple time slots for volunteer events. |
| **Calendar Interface**            | Volunteers select available time slots. Organizers manage and view availability with color-coded time blocks.                    
* White: Available time slot.

* Gray: Full time slot (6 volunteers).

* Light Purple: Confirmed session.

* Dark Purple: Maximum capacity (6 volunteers) and confirmed.         |  


## Tech stack

**Frontend**
- **React** for UI components
- **React Router v7** for navigation
- styled-components for styling
- **Supabase** for authentication

**Backend**
- **Node.js** and **Express** for the server
- **PostgreSQL** (via Supabase) for database
- **ESLint** and **Prettier** for code formatting

**Development Tools**
- **Git** for version control
- **VS Code** as the recommended editor
- ESLint + Prettier for consistent code formatting

## Folder anatomy

Avery's Helpful Hair Kits/
├─ docs/ → Documentation (this folder)
├─ frontend/ 
├─ backend/ 
