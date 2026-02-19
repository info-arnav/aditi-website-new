import { useState } from 'react';

import { AboutSection } from '@/components/portfolio/about';
import { CreatorSection } from '@/components/portfolio/creator';
import { ExperienceSection } from '@/components/portfolio/experience';
import { FooterSection } from '@/components/portfolio/footer';
import { HeroSection } from '@/components/portfolio/hero';
import { LeadershipSection } from '@/components/portfolio/leadership';
import { Navigation } from '@/components/portfolio/navigation';
import { PerformanceSection } from '@/components/portfolio/performance';
import { ProjectsSection } from '@/components/portfolio/projects';
import { ResumeSection } from '@/components/portfolio/resume';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <LeadershipSection />
      <CreatorSection />
      <PerformanceSection />
      <ResumeSection />
      <FooterSection />
    </div>
  );
};

export default Index;
