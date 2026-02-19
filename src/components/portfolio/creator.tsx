import { Instagram } from 'lucide-react';

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
          <CardContent className="p-8">
            <div className="mb-6 flex items-center">
              <Instagram className="mr-3 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                @aditi.c0re
              </h3>
            </div>

            <p className="mb-8 leading-relaxed text-muted-foreground">
              What started as documenting college life turned into a content
              creation journey around fashion, travel, and lifestyle with 50+
              brand collaborations and authentic audience engagement.
            </p>

            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">3M+</div>
                <div className="text-muted-foreground">Monthly Reach</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">30K</div>
                <div className="text-muted-foreground">Avg. Views/Reel</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-primary">7%</div>
                <div className="text-muted-foreground">Engagement Rate</div>
              </div>
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
