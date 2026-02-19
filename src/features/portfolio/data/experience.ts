import type { ExperienceContent } from '@/features/portfolio/model/types';

export const experienceContent: ExperienceContent = {
  title: 'Work Experience',
  items: [
    {
      title: 'Data Analyst Intern',
      companyAndDuration: 'Zopper • Summer 2025',
      location: 'Gurugram, India',
      summary:
        'Transformed 1.7M row datasets into actionable insights. Built forecasting models using PyTorch and Tableau dashboards that improved decision-making across teams.',
      stats: [
        { value: '98.8%', label: 'Model Accuracy' },
        { value: '71%', label: 'Time Reduction' },
        { value: '140K', label: 'Optimized Rows' },
      ],
      images: [
        { src: '/assets/Zopper/Board.jpg', alt: 'Zopper workspace' },
        { src: '/assets/Zopper/Self.jpg', alt: 'At Zopper office' },
        {
          src: '/assets/Zopper/Ambience.jpg',
          alt: 'Zopper office ambience',
        },
      ],
      skills: ['Python', 'PyTorch', 'Tableau', 'Pandas', 'Forecasting'],
    },
    {
      title: 'Product Analyst Intern',
      companyAndDuration: 'Americana • Summer 2024',
      location: 'Remote',
      summary:
        'Investigated fraud patterns across 150+ outlets in Abu Dhabi using 75K+ rows of sales data and developed a real-time surveillance system integrating video analysis with transactions.',
      highlight: {
        title: 'Fraud Detection System',
        description: 'Real-time surveillance integration with video analysis',
      },
      stats: [
        { value: '80%', label: 'Review Time Reduced' },
        { value: '150+', label: 'Outlets Analyzed' },
        { value: '75K+', label: 'Data Rows Processed' },
      ],
      skills: ['Excel', 'FFmpeg', 'Data Analysis', 'Fraud Detection'],
    },
  ],
};
