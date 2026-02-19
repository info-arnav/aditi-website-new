export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  avatarImage: {
    src: string;
    alt: string;
  };
  roleBadges: string[];
  cta: {
    email: string;
    socials: SocialLink[];
  };
};

export type AboutCard = {
  title: string;
  description: string;
};

export type AboutContent = {
  title: string;
  cards: AboutCard[];
};

export type StatItem = {
  value: string;
  label: string;
};

export type ImageItem = {
  src: string;
  alt: string;
};

export type ExperienceItem = {
  title: string;
  companyAndDuration: string;
  location: string;
  summary: string;
  stats?: StatItem[];
  images?: ImageItem[];
  highlight?: {
    title: string;
    description: string;
  };
  skills: string[];
};

export type ExperienceContent = {
  title: string;
  items: ExperienceItem[];
};

export type ProjectItem = {
  title: string;
  description: string;
  badge: string;
  tags: string[];
  stats?: StatItem[];
  callout?: {
    title: string;
    subtitle: string;
  };
  images?: ImageItem[];
};

export type ProjectsContent = {
  title: string;
  items: ProjectItem[];
};

export type LeadershipItem = {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
};

export type LeadershipContent = {
  title: string;
  items: LeadershipItem[];
};

export type PerformanceContent = {
  title: string;
  heading: string;
  paragraphs: string[];
  image: ImageItem;
  result: {
    title: string;
    subtitle: string;
  };
  tags: string[];
};

export type ResumeContent = {
  title: string;
  heading: string;
  description: string;
  filePath: string;
  downloadName: string;
};

export type FooterContent = {
  title: string;
  description: string;
  links: SocialLink[];
};

export type PortfolioContent = {
  navItems: NavItem[];
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  leadership: LeadershipContent;
  performance: PerformanceContent;
  resume: ResumeContent;
  footer: FooterContent;
};
