import { Instagram, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const iconByLabel = {
  Email: Mail,
  LinkedIn: Linkedin,
  Instagram: Instagram,
} as const;

const FooterSection = () => {
  const { footer } = getPortfolioContent();

  return (
    <footer className="bg-muted px-4 py-8 sm:px-6 sm:py-12">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
          {footer.title}
        </h3>
        <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
          {footer.description}
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          {footer.links.map((link) => {
            const Icon = iconByLabel[link.label as keyof typeof iconByLabel] ??
              Mail;
            return (
              <Button
                key={link.label}
                variant="outline"
                className="shadow-soft"
                onClick={() => window.open(link.href, '_blank')}
              >
                <Icon className="mr-2 h-4 w-4" />
                {link.label}
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
