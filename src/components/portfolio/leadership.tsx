import { Award, Briefcase, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const LeadershipSection = () => {
  return (
    <section
      id="extracurricular"
      className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          Leadership & Extracurricular
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8 text-center">
              <Users className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Director, Nalum
              </h3>
              <p className="mb-4 text-muted-foreground">
                Alumni Portal Development & User Strategy
              </p>
              <div className="mb-2 text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8 text-center">
              <Award className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Vice President
              </h3>
              <p className="mb-4 text-muted-foreground">
                Enactus NSUT - Sustainable Ventures
              </p>
              <div className="mb-2 text-2xl font-bold text-primary">₹2L</div>
              <div className="text-sm text-muted-foreground">
                Funding Secured
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8 text-center">
              <Briefcase className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Head of Collaborations
              </h3>
              <p className="mb-4 text-muted-foreground">
                Moksha-Innovision Festival
              </p>
              <div className="mb-2 text-2xl font-bold text-primary">₹50L+</div>
              <div className="text-sm text-muted-foreground">
                Sponsorships Managed
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { LeadershipSection };
