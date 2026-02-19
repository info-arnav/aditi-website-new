import { Instagram, Linkedin, Mail, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="order-2 lg:order-1 lg:w-1/2">
            <div className="relative mx-auto w-fit lg:mx-0">
              <img
                src="/static/polaroid.png"
                alt="Aditi Gupta"
                className="h-80 w-64 rounded-2xl object-cover shadow-soft sm:h-100 sm:w-80"
              />
              <div className="absolute -bottom-3 -right-3 rounded-xl bg-gradient-primary p-3 shadow-hover sm:-bottom-4 sm:-right-4 sm:p-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground sm:h-8 sm:w-8" />
              </div>
            </div>
          </div>

          <div className="order-1 text-center lg:order-2 lg:w-1/2 lg:text-left">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:mb-6 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Aditi
              </span>
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground sm:mb-8 sm:text-xl">
              B.Tech student at NSUT Delhi with a creative lens. I see shapes in
              numbers and stories in data. Director of Nalum, VP at Enactus, and
              digital content creator focused on meaningful impact.
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3 lg:justify-start">
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                Data Analyst
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                Product Strategy
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                Content Creator
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm"
              >
                Social Impact
              </Badge>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Button
                variant="default"
                className="w-full shadow-soft sm:w-auto"
                onClick={() =>
                  window.open('mailto:aditi.gupta1109@gmail.com', '_blank')
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>

              <div className="flex gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  className="flex-1 shadow-soft sm:flex-none"
                  onClick={() =>
                    window.open(
                      'https://in.linkedin.com/in/aditi-gupta-379ab624a',
                      '_blank',
                    )
                  }
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 shadow-soft sm:flex-none"
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/aditi.c0re/',
                      '_blank',
                    )
                  }
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
