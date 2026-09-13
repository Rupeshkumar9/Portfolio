# Rupesh Kumar — Portfolio

Personal developer portfolio and first-party technical blog, built with Astro and deployed as a static site on Vercel.

Live site: [rupesh-livid.vercel.app](https://rupesh-livid.vercel.app/)

---

## Features

- Astro static site generation with the original space/HUD visual system.
- Flagship projects showcase: **VaultGuard** (Zero-Knowledge Password Manager), **FinTrack** (Personal Finance Tracker), and **FluxBoard** (Real-Time Collaboration Platform).
- 4-row animated marquee tech stack (Languages, Frameworks & Runtimes, Databases & Backend, Tools & Infra).
- Markdown blog posts loaded through a typed Astro content collection.
- Static article routes under `/blog/`, with 10-post pagination at `/blog/page/<n>/`.
- Homepage latest-article cards, article metadata, RSS, sitemap, robots.txt, and JSON-LD.
- On-site resume viewer at `/resume/` and direct PDF at `/resume.pdf`.
- Reduced-motion support, responsive navigation, project cards, skills marquee, and scroll interactions.

## Local development

```bash
npm install
npm run dev
```

Run the production checks before publishing:

```bash
npm run check
npm run build
npm run preview
```

## Writing a blog post

Add a Markdown file to `src/content/blog/` with the required frontmatter:

```md
---
title: "Your article title"
description: "A useful search-friendly description between 40 and 180 characters."
pubDate: 2026-08-12
tags: ["Backend", "Node.js"]
heroImage: "/assets/blog/your-thumbnail.svg"
heroAlt: "Description of the thumbnail"
draft: false
featured: false
---

Article content goes here.
```

Store thumbnails in `public/assets/blog/`. Draft posts are available during development but are excluded from the production archive, RSS, and sitemap.

## Deployment

The repository is connected to Vercel. Branch pushes create preview deployments and the configured production branch publishes the live site. The Astro build output is `dist/`.


---
