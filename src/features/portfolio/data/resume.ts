import type {
  FooterContent,
  ResumeContent,
} from '@/features/portfolio/model/types';

export const resumeContent: ResumeContent = {
  title: 'Resume',
  heading: 'Download Resume',
  description:
    'Get a comprehensive overview of my experience, skills, and achievements across work, projects, leadership, and technical expertise in data analysis and product strategy.',
  filePath: '/docs/resume.pdf',
  downloadName: 'Aditi_Gupta_Resume.pdf',
};

export const footerContent: FooterContent = {
  title: "Let's Connect",
  description:
    'Always open to discussing data, collaborations, or creative projects.',
  links: [
    { label: 'Email', href: 'mailto:aditi.gupta1109@gmail.com' },
    {
      label: 'LinkedIn',
      href: 'https://in.linkedin.com/in/aditi-gupta-379ab624a',
    },
    { label: 'Instagram', href: 'https://www.instagram.com/aditi.c0re/' },
  ],
};
