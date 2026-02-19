import { FileText, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-card px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2 sm:gap-8">
          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="mb-3 text-lg font-bold text-foreground sm:mb-4 sm:text-xl">
                FairPlay in Online Money Games
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
                Research project on fairness in real-money gaming platforms with
                300+ participants. Co-authored published research with Prof.
                Ritu Sibal and Mr. Sanjaya Baru.
              </p>
              <div className="mb-4 rounded-lg bg-gradient-primary p-4 text-center sm:mb-6 sm:p-6">
                <div className="mb-2 flex flex-col items-center justify-center sm:mb-3 sm:flex-row">
                  <FileText className="mb-2 h-10 w-10 text-primary-foreground sm:mb-0 sm:mr-3 sm:h-12 sm:w-12" />
                  <div>
                    <div className="text-lg font-bold text-primary-foreground sm:text-xl">
                      Published Research
                    </div>
                    <div className="text-xs text-primary-foreground sm:text-sm">
                      Gaming Ethics & Fairness Analysis
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground">
                    Participants
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">
                    Co-Authors
                  </div>
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {['Research', 'Data Analysis', 'Gaming Ethics'].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm font-semibold text-primary">
                Published Research Paper
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8">
              <h3 className="mb-4 text-xl font-bold text-foreground">
                E-Commerce Analytics Dashboard
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Built a BI solution analyzing 50K+ Myntra orders using Excel and
                Power BI with dynamic dashboards for revenue optimization and
                customer behavior insights.
              </p>
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">
                    Orders Analyzed
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    KPI Dashboards
                  </div>
                </div>
              </div>
              <div className="mb-6 rounded-lg bg-gradient-primary p-6 text-center">
                <TrendingUp className="mx-auto mb-3 h-16 w-16 text-primary-foreground" />
                <div className="text-sm font-medium text-primary-foreground">
                  Interactive Business Intelligence Dashboard
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {['Power BI', 'Excel', 'Business Intelligence'].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm font-semibold text-primary">
                Full-Stack BI Solution
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8">
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Project Clair
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Co-founded an affordable air purification solution using
                SolidWorks design. Won Enactus India National Expo and secured
                ₹2L funding.
              </p>
              <div className="mb-6 grid grid-cols-3 gap-2">
                {[
                  'IMG-20250716-WA0011.jpg',
                  'IMG-20250716-WA0012.jpg',
                  'IMG-20250716-WA0013.jpg',
                  'IMG-20250716-WA0014.jpg',
                  'IMG-20250716-WA0015.jpg',
                  'IMG-20250716-WA0016.jpg',
                ].map((image) => (
                  <img
                    key={image}
                    src={`/assets/Clair/${image}`}
                    alt="Project Clair"
                    className="h-24 w-full rounded-lg object-cover shadow-soft"
                  />
                ))}
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {['SolidWorks', 'Product Design', 'Social Impact'].map(
                  (tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ),
                )}
              </div>
              <div className="text-sm font-semibold text-primary">
                National Champions
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8">
              <h3 className="mb-4 text-xl font-bold text-foreground">
                Project Srijan
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Sustainable paper recycling initiative creating plantable seed
                paper. Leading R&D with plans for community employment and
                social inclusion.
              </p>
              <div className="mb-6 grid grid-cols-2 gap-2">
                <img
                  src="/assets/Srijan/IMG-20250716-WA0017.jpg"
                  alt="Srijan process"
                  className="h-32 w-full rounded-lg object-cover shadow-soft"
                />
                <img
                  src="/assets/Srijan/IMG-20250716-WA0018.jpg"
                  alt="Seed paper"
                  className="h-32 w-full rounded-lg object-cover shadow-soft"
                />
                <img
                  src="/assets/Srijan/IMG-20250716-WA0019.jpg"
                  alt="Srijan team"
                  className="h-32 w-full rounded-lg object-cover shadow-soft"
                />
                <img
                  src="/assets/Srijan/WhatsApp Image 2025-07-16 at 18.26.26_8df164ac.jpg"
                  alt="Srijan workshop"
                  className="h-32 w-full rounded-lg object-cover shadow-soft"
                />
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {['Sustainability', 'Social Impact', 'Entrepreneurship'].map(
                  (tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ),
                )}
              </div>
              <div className="text-sm font-semibold text-primary">
                Ongoing R&D
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
