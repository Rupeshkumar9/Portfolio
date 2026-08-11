export const siteConfig = {
  name: 'Rupesh Kumar',
  shortName: 'RUPESH',
  title: 'Full Stack Developer & DevOps Engineer',
  description: 'Full Stack Developer building secure, real-time, and AI-powered applications with modern web technologies.',
  url: 'https://rupesh-livid.vercel.app',
  email: 'Rupeshkumar45670234@gmail.com',
  avatar: '/assets/images/avatar.png',
  socials: {
    github: 'https://github.com/Rupeshkumar9',
    linkedin: 'https://www.linkedin.com/in/d-rupesh-kumar-92b544173/',
    x: 'https://x.com/NullVoidCoder',
    medium: 'https://medium.com/@Rupesh12',
  },
  resumeUrl: '/resume.pdf',
} as const;

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();
