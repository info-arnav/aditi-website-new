import { Award, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const ExperienceSection = () => {
  const { experience } = getPortfolioContent();

  return (
    <section id="experience" className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          {experience.title}
        </h2>

        <div className="space-y-6 sm:space-y-8">
          {experience.items.map((item) => (
            <Card
              key={item.title}
              className="shadow-soft transition-shadow hover:shadow-hover"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-semibold text-primary">
                      {item.companyAndDuration}
                    </p>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {item.location}
                  </div>
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>

                {item.highlight && (
                  <div className="mb-6 rounded-lg bg-gradient-primary p-4 text-center">
                    <div className="mb-3 flex items-center justify-center">
                      <Award className="mr-2 h-8 w-8 text-primary-foreground" />
                      <span className="font-semibold text-primary-foreground">
                        {item.highlight.title}
                      </span>
                    </div>
                    <div className="text-sm text-primary-foreground">
                      {item.highlight.description}
                    </div>
                  </div>
                )}

                {item.stats && (
                  <div className="mb-6 grid gap-4 md:grid-cols-3">
                    {item.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg bg-muted p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {item.images && (
                  <div
                    className={`mb-6 grid gap-2 ${
                      item.images.length === 3
                        ? 'grid-cols-2'
                        : 'grid-cols-2 md:grid-cols-3'
                    }`}
                  >
                    {item.images.map((image, index) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className={`h-32 w-full rounded-lg object-cover shadow-soft ${
                          item.images?.length === 3 && index === 2
                            ? 'col-span-2'
                            : ''
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ExperienceSection };
