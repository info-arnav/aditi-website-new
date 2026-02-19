import type { HeroContent } from '@/features/portfolio/model/types';

export const heroContent: HeroContent = {
  headingPrefix: "Hi, I'm",
  headingHighlight: 'Aditi',
  description:
    'B.Tech student at NSUT Delhi with a creative lens. I see shapes in numbers and stories in data. Director of Nalum, VP at Enactus, and digital content creator focused on meaningful impact.',
  avatarImage: {
    src: '/static/polaroid.png',
    alt: 'Aditi Gupta',
  },
  roleBadges: [
    'Data Analyst',
    'Product Strategy',
    'Content Creator',
    'Social Impact',
  ],
  cta: {
    email: 'aditi.gupta1109@gmail.com',
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://in.linkedin.com/in/aditi-gupta-379ab624a',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/aditi.c0re/',
      },
    ],
  },
};
