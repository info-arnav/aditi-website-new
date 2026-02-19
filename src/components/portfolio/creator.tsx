import { ExternalLink, Instagram } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CreatorSection = () => {
  return (
    <section
      id="creator"
      className="bg-card px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          Digital Creator
        </h2>

        <Card className="shadow-soft transition-shadow hover:shadow-hover">
          <CardContent className="space-y-8 p-8">
            <div className="flex items-center justify-center">
              <Instagram className="mr-3 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">@aditi.c0re</h3>
            </div>

            <p className="text-center leading-relaxed text-muted-foreground">
              Follow my journey around fashion, travel, and lifestyle, and reach
              out for brand collaborations.
            </p>

            <div className="mx-auto max-w-md rounded-lg bg-muted p-6 text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Creator profile and latest posts are available directly on
                Instagram.
              </p>
              <Button asChild className="shadow-soft">
                <a
                  href="https://www.instagram.com/aditi.c0re/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Instagram
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-lg bg-muted p-6">
              <h4 className="mb-3 font-semibold">Dance Journey</h4>
              <p className="text-sm text-muted-foreground">
                Member of Mirage Dance Crew at NSUT. Won first place in Battle
                of Branches at Resonanz&apos;24. A back injury paused my crew
                journey, but it never stopped my passion for performance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { CreatorSection };
