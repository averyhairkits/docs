---
id: faq
title: Frequently Asked Questions
sidebar_position: 4
---

# Frequently Asked Questions

### “Why Docusaurus instead of Next.js or Astro?”

Docusaurus ships opinionated docs features (versioning, search, sidebar, i18n) out of the box—no plugins or custom builds needed.

---

### “Can I write plain React pages too?”

Absolutely. Drop JSX/TSX files in `src/pages/` and they become routed pages alongside your Markdown docs.

---

### “How do I add Google Analytics?”

Add your GA4 measurement ID to `docusaurus.config.js`:

```js
export default {
  // …
  themeConfig: {
    // …
    gtag: { trackingID: 'G‑XXXXXXXXXX' },
  },
};



⸻

“Does it support dark mode?”

Yes—dark mode is enabled by default. The toggle appears in the navbar and respects the user’s OS preference.

⸻

“Where can I get help?”
	•	GitHub Issues: https://github.com/facebook/docusaurus/issues
	•	Discord: #docusaurus channel in the Reactiflux server
	•	Stack Overflow: Tag questions with docusaurus

---

**Next step (optional):**
If you’d like a **minimal working site repo** to pair with these docs, just let me know and I can scaffold the project structure (folders, config, sample landing page) for you.
```
