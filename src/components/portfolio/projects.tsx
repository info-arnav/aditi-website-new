import { FileText, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const ProjectsSection = () => {
  const { projects } = getPortfolioContent();

  return (
    <section id="projects" className="bg-card px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          {projects.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 sm:gap-8">
          {projects.items.map((item) => (
            <Card
              key={item.title}
              className="shadow-soft transition-shadow hover:shadow-hover"
            >
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.callout && (
                  <div className="mb-6 rounded-lg bg-gradient-primary p-6 text-center">
                    {item.title.includes('FairPlay') ? (
                      <FileText className="mx-auto mb-3 h-12 w-12 text-primary-foreground" />
                    ) : (
                      <TrendingUp className="mx-auto mb-3 h-12 w-12 text-primary-foreground" />
                    )}
                    <div className="text-lg font-bold text-primary-foreground">
                      {item.callout.title}
                    </div>
                    <div className="text-sm text-primary-foreground">
                      {item.callout.subtitle}
                    </div>
                  </div>
                )}

                {item.stats && (
                  <div className="mb-6 grid gap-4 md:grid-cols-2">
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
                      item.images.length >= 6 ? 'grid-cols-3' : 'grid-cols-2'
                    }`}
                  >
                    {item.images.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className={`w-full rounded-lg object-cover shadow-soft ${
                          item.images && item.images.length >= 6 ? 'h-24' : 'h-32'
                        }`}
                      />
                    ))}
                  </div>
                )}

                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm font-semibold text-primary">{item.badge}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
