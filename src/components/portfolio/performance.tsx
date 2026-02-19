import { Award } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const PerformanceSection = () => {
  const { performance } = getPortfolioContent();

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          {performance.title}
        </h2>

        <Card className="shadow-soft transition-shadow hover:shadow-hover">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center">
              <Award className="mr-3 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                {performance.heading}
              </h3>
            </div>

            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div>
                {performance.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`leading-relaxed text-muted-foreground ${
                      index < performance.paragraphs.length - 1 ? 'mb-6' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <img
                  src={performance.image.src}
                  alt={performance.image.alt}
                  className="h-64 w-full rounded-lg object-cover shadow-soft"
                />
                <div className="mt-4 rounded-lg bg-gradient-primary p-4 text-center">
                  <div className="mb-1 text-2xl font-bold text-primary-foreground">
                    {performance.result.title}
                  </div>
                  <div className="text-sm text-primary-foreground">
                    {performance.result.subtitle}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {performance.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { PerformanceSection };
