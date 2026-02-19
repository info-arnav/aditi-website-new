import { aboutContent } from '@/features/portfolio/data/about';
import { experienceContent } from '@/features/portfolio/data/experience';
import { footerContent, resumeContent } from '@/features/portfolio/data/resume';
import { heroContent } from '@/features/portfolio/data/hero';
import { leadershipContent } from '@/features/portfolio/data/leadership';
import { navItems } from '@/features/portfolio/data/navigation';
import { performanceContent } from '@/features/portfolio/data/performance';
import { projectsContent } from '@/features/portfolio/data/projects';
import type { PortfolioContent } from '@/features/portfolio/model/types';

const portfolioContent: PortfolioContent = {
  navItems,
  hero: heroContent,
  about: aboutContent,
  experience: experienceContent,
  projects: projectsContent,
  leadership: leadershipContent,
  performance: performanceContent,
  resume: resumeContent,
  footer: footerContent,
};

function fetchPortfolioContent(): PortfolioContent {
  return portfolioContent;
}

export { fetchPortfolioContent };
