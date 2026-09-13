# Portfolio Content Upgrade — September 2026

## Objective

Update the portfolio homepage so that its project and technology content accurately represents my current Full-Stack / Backend Developer profile.

Do not redesign the overall portfolio visual language. Preserve the existing Starfield/HUD aesthetic, glassmorphism cards, project hierarchy, marquee animation, responsiveness, and reduced-motion support.

---

## 1. FEATURED_PROJECTS

Replace the current homepage project lineup with these three flagship projects:

### 1. VaultGuard
Role: Primary featured / hero project

Title:
VaultGuard — Zero-Knowledge Password Manager

Description:
A privacy-focused, zero-knowledge password manager that encrypts credentials on the client before synchronization. VaultGuard combines a React web client, Express/MongoDB backend, Android app with offline Autofill support, and Manifest V3 browser extension. It uses AES-256-GCM encryption, OPAQUE password authentication, secure cookie-based sessions, and local key management so the backend never receives plaintext vault data.

Primary technologies:
React, Vite, Node.js, Express.js, MongoDB, Mongoose, JWT, OPAQUE, AES-256-GCM, Capacitor, Android, Manifest V3

Project URL:
https://github.com/Rupeshkumar9/VaultGuard

Keep VaultGuard as the large hero card because it is the most technically differentiated project.

Recommended feature cards:
- Zero-Knowledge Encryption
- OPAQUE Authentication
- Android Offline Autofill
- Browser Extension

---

### 2. FinTrack
Role: Secondary featured project

Title:
FinTrack — Personal Finance & Expense Tracker

Description:
A full-stack personal finance platform for tracking income and expenses, managing monthly category budgets, and analyzing spending through interactive dashboards. FinTrack uses Next.js and React on the frontend with an Express REST API, PostgreSQL, and Prisma on the backend, supporting authenticated transactions, filtering, search, pagination, reporting, multi-currency preferences, and CSV export.

Primary technologies:
Next.js, React, Node.js, Express.js, PostgreSQL, Prisma, JWT

Project URL:
https://github.com/Rupeshkumar9/FinTrack

---

### 3. FluxBoard
Role: Secondary featured project

Title:
FluxBoard — Real-Time Collaboration Platform

Description:
A real-time collaborative Kanban and engineering project management platform built for distributed teams. FluxBoard provides synchronized boards, draggable workflows, task checklists, comments, multi-assignee collaboration, and role-based access, with Socket.io powering live updates across connected clients. The application combines a React/Vite frontend with an Express, MongoDB, and Socket.io backend.

Primary technologies:
React, Vite, Node.js, Express.js, MongoDB, Mongoose, Socket.io, JWT

Project URL:
https://github.com/Rupeshkumar9/FluxBoard

---

## 2. OTHER PROJECTS

Do not delete older projects from the codebase or GitHub.

Move the following out of the primary featured area:



### ToxiGuard
Keep as an additional/hackathon project.

Existing project purpose:
AI-powered toxicity detection using VADER sentiment analysis.

Technologies:
Python, Django, AI/ML

Project URL:
https://github.com/Rupeshkumar9/Toxic_guard

### SocialFeed Hub
Keep as an additional/legacy project.

Description:
A social bookmarks and content dashboard with browser-extension integration and backend synchronization.

Technologies:
JavaScript, Node.js, MongoDB, Browser Extension

Project URL:
https://github.com/Rupeshkumar9/SocialFeed-hub

---

## 3. FEATURED PROJECT ORDER

Display projects in this order:

1. VaultGuard
2. FinTrack
3. FluxBoard

VaultGuard remains visually dominant.

FinTrack and FluxBoard should appear immediately after VaultGuard as the two main supporting projects.

Older projects should only appear under an "Other Projects" or "More Projects" area.

---

## 4. TECH_STACK

Keep the animated marquee design.

Do NOT replace the marquee with a static grid.

The existing alternating left/right motion fits the visual identity and should remain.

Change the categories to:

### LANGUAGES
- JavaScript
- TypeScript
- Python
- Java
- SQL
- HTML5
- CSS3

### FRAMEWORKS & RUNTIMES
- React
- Next.js
- Node.js
- Express
- Vite
- Tailwind CSS

### DATABASES & BACKEND
- MongoDB
- PostgreSQL
- Prisma
- Mongoose

### TOOLS & INFRA
- Git
- GitHub
- Docker
- Linux
- MongoDB Atlas
- Supabase
- Vercel
- Render

Remove from the current marquee:

- C++
- Django
- MySQL
- Firebase

unless these technologies become active parts of my current development stack later.

---

## 5. TECH_STACK ANIMATION

Preserve the existing animation behavior:

- Row 1 moves left
- Row 2 moves right
- Row 3 moves left
- Row 4 moves right
- Hover pauses the active marquee
- Respect prefers-reduced-motion

Maintain the existing visual style, spacing, chip appearance, fades, and dark HUD aesthetic.

Do not make the animation excessively fast.

---

## 6. ABOUT SECTION CONSISTENCY

Update the ABOUT section so it no longer references obsolete project groupings.

Remove outdated references to:
- Traffic Signal Optimizer
- SocialFeed Hub as a flagship project
- old four-project featured statistics

Update the project references to:
- VaultGuard
- FinTrack
- FluxBoard

Keep older projects only when they are explicitly presented as past/secondary work.

Update "Featured Projects" count to 3 if that metric is retained.

Do not invent additional project or hackathon statistics.

---

## 7. Content Principles

The portfolio should communicate three core engineering strengths:

VaultGuard:
Security, cryptography, authentication, multi-platform architecture

FinTrack:
Backend APIs, PostgreSQL, data modeling, business logic, analytics

FluxBoard:
Real-time systems, WebSockets, collaboration, authorization

Descriptions should emphasize:
- what the product does
- the engineering problem it solves
- the important technologies/architecture
- the most technically interesting implementation details

Avoid generic statements such as:
"Built a modern web application using React."

Prefer specific statements about architecture and capabilities.

---

## 8. Visual Design Principle

Preserve the existing portfolio visual identity:
- Starfield/HUD theme
- Glassmorphism
- Blue/purple accent system
- Project hero hierarchy
- Animated technical stack
- Responsive layouts
- Reduced-motion accessibility

The upgrade should be a content and information-architecture improvement, not a complete redesign.

---

## 9. Final Homepage Hierarchy

Hero
→ Featured Projects
→ Blog
→ TECH_STACK
→ ABOUT
→ Contact/Footer

Within Featured Projects:

VaultGuard
→ FinTrack
→ FluxBoard

Within secondary project discovery:

→ ToxiGuard
→ SocialFeed Hub

The homepage should make the visitor understand within seconds that the primary specialization is Full-Stack / Backend development with security, relational data, and real-time systems.