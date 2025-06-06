---
id: usage
title: Usage Guide
# sidebar_position: 4
sidebar_position: 2
---

# Usage guide

## Development workflow

### Start the live‑reload server

```bash
npm run start

Edits to any Markdown/MDX, React components, or config files trigger an auto‑reload.

Create a new doc

npm run new:doc "My New Page"

This scaffolds /docs/my-new-page.md with boilerplate front‑matter.

Build for production

npm run build

Static files are output to build/—ready to deploy to Netlify, Vercel, GitHub Pages, etc.

Customizing the theme
	1.	Override the Tailwind config in tailwind.config.js.
	2.	Drop global CSS overrides into src/css/custom.css.
	3.	Swap the logo by replacing static/img/logo.svg.

CLI reference

Script	What it does
npm run start	Dev server with hot reload
npm run build	Production build
npm run serve	Preview the production build locally
npm run swizzle	Eject/override internal theme components
```
