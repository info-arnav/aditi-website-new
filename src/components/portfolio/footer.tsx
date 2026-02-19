import { Instagram, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';

const FooterSection = () => {
  return (
    <footer className="bg-muted px-4 py-8 sm:px-6 sm:py-12">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
          Let&apos;s Connect
        </h3>
        <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
          Always open to discussing data, collaborations, or creative projects.
        </p>

        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            variant="outline"
            className="shadow-soft"
            onClick={() =>
              window.open('mailto:aditi.gupta1109@gmail.com', '_blank')
            }
          >
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button
            variant="outline"
            className="shadow-soft"
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
            className="shadow-soft"
            onClick={() =>
              window.open('https://www.instagram.com/aditi.c0re/', '_blank')
            }
          >
            <Instagram className="mr-2 h-4 w-4" />
            Instagram
          </Button>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
