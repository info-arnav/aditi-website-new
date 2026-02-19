import { Award } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const PerformanceSection = () => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          Performance & Arts
        </h2>

        <Card className="shadow-soft transition-shadow hover:shadow-hover">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center">
              <Award className="mr-3 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Performer | Mirage Dance Crew | Resonanz&apos;24
              </h3>
            </div>

            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Dance has always been my creative outlet. In first year at
                  NSUT, I cleared all audition rounds to join Mirage, the
                  university&apos;s premier dance crew.
                </p>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  A lower back injury before performing season forced me to step
                  back for recovery and eventually leave the crew.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  In third year, I performed in Resonanz Battle of Branches and
                  won first place. The experience reinforced resilience.
                </p>
              </div>

              <div>
                <img
                  src="/assets/Reso/WhatsApp Image 2025-07-16 at 21.03.57_159e5dd1.jpg"
                  alt="Resonanz'24 dance performance"
                  className="h-64 w-full rounded-lg object-cover shadow-soft"
                />
                <div className="mt-4 rounded-lg bg-gradient-primary p-4 text-center">
                  <div className="mb-1 text-2xl font-bold text-primary-foreground">
                    1st Place
                  </div>
                  <div className="text-sm text-primary-foreground">
                    Battle of Branches - Resonanz&apos;24
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Dance', 'Performance', 'Mirage Crew', 'Resilience'].map(
                (tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ),
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { PerformanceSection };
