import type { ProjectsContent } from '@/features/portfolio/model/types';

export const projectsContent: ProjectsContent = {
  title: 'Featured Projects',
  items: [
    {
      title: 'FairPlay in Online Money Games',
      description:
        'Research project on fairness in real-money gaming platforms with 300+ participants. Co-authored published research with Prof. Ritu Sibal and Mr. Sanjaya Baru.',
      badge: 'Published Research Paper',
      tags: ['Research', 'Data Analysis', 'Gaming Ethics'],
      stats: [
        { value: '300+', label: 'Participants' },
        { value: '3', label: 'Co-Authors' },
      ],
      callout: {
        title: 'Published Research',
        subtitle: 'Gaming Ethics & Fairness Analysis',
      },
    },
    {
      title: 'E-Commerce Analytics Dashboard',
      description:
        'Built a BI solution analyzing 50K+ Myntra orders using Excel and Power BI with dynamic dashboards for revenue optimization and customer behavior insights.',
      badge: 'Full-Stack BI Solution',
      tags: ['Power BI', 'Excel', 'Business Intelligence'],
      stats: [
        { value: '50K+', label: 'Orders Analyzed' },
        { value: '15+', label: 'KPI Dashboards' },
      ],
      callout: {
        title: 'Interactive Dashboard',
        subtitle: 'Business Intelligence Analytics',
      },
    },
    {
      title: 'Project Clair',
      description:
        'Co-founded an affordable air purification solution using SolidWorks design. Won Enactus India National Expo and secured ₹2L funding.',
      badge: 'National Champions',
      tags: ['SolidWorks', 'Product Design', 'Social Impact'],
      images: [
        { src: '/assets/Clair/IMG-20250716-WA0011.jpg', alt: 'Project Clair' },
        { src: '/assets/Clair/IMG-20250716-WA0012.jpg', alt: 'Project Clair' },
        { src: '/assets/Clair/IMG-20250716-WA0013.jpg', alt: 'Project Clair' },
        { src: '/assets/Clair/IMG-20250716-WA0014.jpg', alt: 'Project Clair' },
        { src: '/assets/Clair/IMG-20250716-WA0015.jpg', alt: 'Project Clair' },
        { src: '/assets/Clair/IMG-20250716-WA0016.jpg', alt: 'Project Clair' },
      ],
    },
    {
      title: 'Project Srijan',
      description:
        'Sustainable paper recycling initiative creating plantable seed paper. Leading R&D with plans for community employment and social inclusion.',
      badge: 'Ongoing R&D',
      tags: ['Sustainability', 'Social Impact', 'Entrepreneurship'],
      images: [
        { src: '/assets/Srijan/IMG-20250716-WA0017.jpg', alt: 'Srijan process' },
        { src: '/assets/Srijan/IMG-20250716-WA0018.jpg', alt: 'Seed paper' },
        { src: '/assets/Srijan/IMG-20250716-WA0019.jpg', alt: 'Srijan team' },
        {
          src: '/assets/Srijan/WhatsApp Image 2025-07-16 at 18.26.26_8df164ac.jpg',
          alt: 'Srijan workshop',
        },
      ],
    },
  ],
};
