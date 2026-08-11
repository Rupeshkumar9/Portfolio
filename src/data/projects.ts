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

export const projects: Project[] = [
  {
    name: 'ToxiGuard',
    icon: 'fa-brain',
    description: 'AI-powered toxicity detection using VADER sentiment analysis and drift prediction algorithms.',
    tags: ['DJANGO', 'PYTHON', 'AI/ML'],
    href: 'https://github.com/Rupeshkumar9/Toxic_guard',
    badge: 'HACKATHON',
    badgeIcon: 'fa-trophy',
    accent: 'accent',
  },
  {
    name: 'Gram Sewa',
    icon: 'fa-building-columns',
    description: 'Civic complaint tracking system for rural villages with bilingual UI and citizen and authority dashboards.',
    tags: ['REACT', 'VITE', 'I18N'],
    href: 'https://github.com/Rupeshkumar9/Gram_sewa',
    badge: 'COLLEGE',
    badgeIcon: 'fa-graduation-cap',
    accent: 'primary',
  },
  {
    name: 'SocialFeed Hub',
    icon: 'fa-rss',
    description: 'Social bookmarks dashboard with a browser extension and MongoDB-backed content synchronization.',
    tags: ['NODE.JS', 'MONGODB', 'EXTENSION'],
    href: 'https://github.com/Rupeshkumar9/SocialFeed-hub',
    badge: 'VERCEL',
    badgeIcon: 'fa-cloud',
    accent: 'warning',
  },
];
