import { GraduationCap, Lightbulb } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const icons = [GraduationCap, Lightbulb];

const AboutSection = () => {
  const { about } = getPortfolioContent();

  return (
    <section id="about" className="bg-card px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          {about.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 sm:gap-8">
          {about.cards.map((card, index) => {
            const Icon = icons[index] ?? GraduationCap;

            return (
              <Card
                key={card.title}
                className="shadow-soft transition-shadow hover:shadow-hover"
              >
                <CardContent className="p-8">
                  <Icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-4 text-xl font-semibold">{card.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
