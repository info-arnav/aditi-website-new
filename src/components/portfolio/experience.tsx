import { Award, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          Work Experience
        </h2>

        <div className="space-y-6 sm:space-y-8">
          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8">
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Data Analyst Intern
                  </h3>
                  <p className="font-semibold text-primary">
                    Zopper • Summer 2025
                  </p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  Gurugram, India
                </div>
              </div>

              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    Transformed 1.7M row datasets into actionable insights.
                    Built forecasting models using PyTorch and Tableau
                    dashboards that improved decision-making across teams.
                  </p>
                  <div className="mb-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        98.8%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Model Accuracy
                      </div>
                    </div>
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <div className="text-2xl font-bold text-primary">71%</div>
                      <div className="text-sm text-muted-foreground">
                        Time Reduction
                      </div>
                    </div>
                    <div className="rounded-lg bg-muted p-4 text-center">
                      <div className="text-2xl font-bold text-primary">
                        140K
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Optimized Rows
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/assets/Zopper/Board.jpg"
                    alt="Zopper workspace"
                    className="h-32 w-full rounded-lg object-cover shadow-soft"
                  />
                  <img
                    src="/assets/Zopper/Self.jpg"
                    alt="At Zopper office"
                    className="h-32 w-full rounded-lg object-cover shadow-soft"
                  />
                  <img
                    src="/assets/Zopper/Ambience.jpg"
                    alt="Zopper office ambience"
                    className="col-span-2 h-32 w-full rounded-lg object-cover shadow-soft"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'Tableau', 'Pandas', 'Forecasting'].map(
                  (skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8">
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Product Analyst Intern
                  </h3>
                  <p className="font-semibold text-primary">
                    Americana • Summer 2024
                  </p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  Remote
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-muted-foreground">
                Investigated fraud patterns across 150+ outlets in Abu Dhabi
                using 75K+ rows of sales data and developed a real-time
                surveillance system integrating video analysis with
                transactions.
              </p>

              <div className="mb-6 rounded-lg bg-gradient-primary p-4 text-center">
                <div className="mb-3 flex items-center justify-center">
                  <Award className="mr-2 h-8 w-8 text-primary-foreground" />
                  <span className="font-semibold text-primary-foreground">
                    Fraud Detection System
                  </span>
                </div>
                <div className="text-sm text-primary-foreground">
                  Real-time surveillance integration with video analysis
                </div>
              </div>

              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-primary">80%</div>
                  <div className="text-sm text-muted-foreground">
                    Review Time Reduced
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">
                    Outlets Analyzed
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <div className="text-2xl font-bold text-primary">75K+</div>
                  <div className="text-sm text-muted-foreground">
                    Data Rows Processed
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Excel', 'FFmpeg', 'Data Analysis', 'Fraud Detection'].map(
                  (skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { ExperienceSection };
