import { Instagram, Linkedin, Mail, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const socialIconByLabel = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
} as const;

const HeroSection = () => {
  const { hero } = getPortfolioContent();

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="order-2 lg:order-1 lg:w-1/2">
            <div className="relative mx-auto w-fit lg:mx-0">
              <img
                src={hero.avatarImage.src}
                alt={hero.avatarImage.alt}
                className="h-80 w-64 rounded-2xl object-cover shadow-soft sm:h-100 sm:w-80"
              />
              <div className="absolute -bottom-3 -right-3 rounded-xl bg-gradient-primary p-3 shadow-hover sm:-bottom-4 sm:-right-4 sm:p-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground sm:h-8 sm:w-8" />
              </div>
            </div>
          </div>

          <div className="order-1 text-center lg:order-2 lg:w-1/2 lg:text-left">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:mb-6 sm:text-5xl lg:text-6xl">
              {hero.headingPrefix}{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {hero.headingHighlight}
              </span>
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground sm:mb-8 sm:text-xl">
              {hero.description}
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3 lg:justify-start">
              {hero.roleBadges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Button
                variant="default"
                className="w-full shadow-soft sm:w-auto"
                onClick={() => window.open(`mailto:${hero.cta.email}`, '_blank')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>

              <div className="flex gap-3 sm:gap-4">
                {hero.cta.socials.map((social) => {
                  const Icon =
                    socialIconByLabel[
                      social.label as keyof typeof socialIconByLabel
                    ] ?? Instagram;

                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      className="flex-1 shadow-soft sm:flex-none"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {social.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
