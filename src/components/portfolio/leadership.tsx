import { Award, Briefcase, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const icons = [Users, Award, Briefcase];

const LeadershipSection = () => {
  const { leadership } = getPortfolioContent();

  return (
    <section id="extracurricular" className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          {leadership.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {leadership.items.map((item, index) => {
            const Icon = icons[index] ?? Users;

            return (
              <Card
                key={item.title}
                className="shadow-soft transition-shadow hover:shadow-hover"
              >
                <CardContent className="p-8 text-center">
                  <Icon className="mx-auto mb-4 h-16 w-16 text-primary" />
                  <h3 className="mb-4 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{item.description}</p>
                  <div className="mb-2 text-2xl font-bold text-primary">
                    {item.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.metricLabel}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { LeadershipSection };
