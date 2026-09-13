export type HeroProject = {
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  href: string;
  badge: string;
  icon: string;
  features: {
    title: string;
    description: string;
    icon: string;
    colorClass: string;
  }[];
  tags: string[];
};

export type FeaturedProject = {
  name: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  badge: string;
  badgeIcon: string;
  icon: string;
  accent: 'primary' | 'accent' | 'warning';
};

export type Project = {
  name: string;
  icon: string;
  description: string;
  tags: string[];
  href: string;
  badge: string;
  badgeIcon: string;
  accent: 'primary' | 'accent' | 'warning';
};

export const vaultGuard: HeroProject = {
  name: 'VaultGuard',
  subtitle: 'MULTI-PLATFORM',
  tagline: 'Zero-Knowledge Password Manager',
  description:
    'A privacy-focused, zero-knowledge password manager that encrypts credentials on the client before synchronization. VaultGuard combines a React web client, Express/MongoDB backend, Android app with offline Autofill support, and Manifest V3 browser extension. It uses AES-256-GCM encryption, OPAQUE password authentication, secure cookie-based sessions, and local key management so the backend never receives plaintext vault data.',
  href: 'https://github.com/Rupeshkumar9/VaultGuard',
  badge: 'MULTI-PLATFORM',
  icon: '🔐',
  features: [
    {
      title: 'Zero-Knowledge Encryption',
      description: 'Client-side AES-256-GCM before synchronization.',
      icon: 'fas fa-shield-halved',
      colorClass: 'text-primary',
    },
    {
      title: 'OPAQUE Authentication',
      description: 'Zero-knowledge password exchange; plaintext never sent.',
      icon: 'fas fa-key',
      colorClass: 'text-accent',
    },
    {
      title: 'Android Offline Autofill',
      description: 'Native Keystore integration & offline autofill service.',
      icon: 'fas fa-mobile-screen',
      colorClass: 'text-success',
    },
    {
      title: 'Browser Extension',
      description: 'Manifest V3 integration for Chromium and Firefox.',
      icon: 'fas fa-puzzle-piece',
      colorClass: 'text-warning',
    },
  ],
  tags: [
    'REACT',
    'VITE',
    'NODE.JS',
    'EXPRESS.JS',
    'MONGODB',
    'MONGOOSE',
    'JWT',
    'OPAQUE',
    'AES-256-GCM',
    'CAPACITOR',
    'ANDROID',
    'MANIFEST V3',
  ],
};

export const supportingFeaturedProjects: FeaturedProject[] = [
  {
    name: 'FinTrack',
    title: 'FinTrack — Personal Finance & Expense Tracker',
    description:
      'A full-stack personal finance platform for tracking income and expenses, managing monthly category budgets, and analyzing spending through interactive dashboards. FinTrack uses Next.js and React on the frontend with an Express REST API, PostgreSQL, and Prisma on the backend, supporting authenticated transactions, filtering, search, pagination, reporting, multi-currency preferences, and CSV export.',
    tags: ['NEXT.JS', 'REACT', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL', 'PRISMA', 'JWT'],
    href: 'https://github.com/Rupeshkumar9/FinTrack',
    badge: 'FULL-STACK',
    badgeIcon: 'fa-chart-line',
    icon: 'fa-wallet',
    accent: 'primary',
  },
  {
    name: 'FluxBoard',
    title: 'FluxBoard — Real-Time Collaboration Platform',
    description:
      'A real-time collaborative Kanban and engineering project management platform built for distributed teams. FluxBoard provides synchronized boards, draggable workflows, task checklists, comments, multi-assignee collaboration, and role-based access, with Socket.io powering live updates across connected clients. The application combines a React/Vite frontend with an Express, MongoDB, and Socket.io backend.',
    tags: ['REACT', 'VITE', 'NODE.JS', 'EXPRESS.JS', 'MONGODB', 'MONGOOSE', 'SOCKET.IO', 'JWT'],
    href: 'https://github.com/Rupeshkumar9/FluxBoard',
    badge: 'REAL-TIME',
    badgeIcon: 'fa-bolt',
    icon: 'fa-diagram-project',
    accent: 'accent',
  },
];

export const secondaryProjects: Project[] = [
  {
    name: 'ToxiGuard',
    icon: 'fa-brain',
    description:
      'AI-powered toxicity detection using VADER sentiment analysis and drift prediction algorithms.',
    tags: ['PYTHON', 'DJANGO', 'AI/ML'],
    href: 'https://github.com/Rupeshkumar9/Toxic_guard',
    badge: 'HACKATHON',
    badgeIcon: 'fa-trophy',
    accent: 'accent',
  },
  {
    name: 'SocialFeed Hub',
    icon: 'fa-rss',
    description:
      'A social bookmarks and content dashboard with browser-extension integration and backend synchronization.',
    tags: ['JAVASCRIPT', 'NODE.JS', 'MONGODB', 'EXTENSION'],
    href: 'https://github.com/Rupeshkumar9/SocialFeed-hub',
    badge: 'Personal',
    badgeIcon: 'fa-puzzle-piece',
    accent: 'warning',
  },
  {
    name: 'Gram Sewa',
    icon: 'fa-building-columns',
    description:
      'Civic complaint tracking system for rural villages with bilingual UI and citizen and authority dashboards.',
    tags: ['REACT', 'VITE', 'I18N'],
    href: 'https://github.com/Rupeshkumar9/Gram_sewa',
    badge: 'COLLEGE',
    badgeIcon: 'fa-graduation-cap',
    accent: 'primary',
  },
];

export const projects: Project[] = secondaryProjects;
