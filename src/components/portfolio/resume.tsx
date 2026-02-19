import { Download, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResumeSection = () => {
  return (
    <section id="resume" className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          Resume
        </h2>

        <Card className="shadow-soft transition-shadow hover:shadow-hover">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="text-center md:w-1/3">
                <div className="mb-4 inline-block rounded-xl bg-gradient-primary p-6">
                  <FileText className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Download Resume</h3>
                <p className="text-sm text-muted-foreground">
                  View my complete professional profile
                </p>
              </div>

              <div className="md:w-2/3">
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Get a comprehensive overview of my experience, skills, and
                  achievements across work, projects, leadership, and technical
                  expertise in data analysis and product strategy.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    variant="default"
                    className="shadow-soft"
                    onClick={() => window.open('/docs/resume.pdf', '_blank')}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="shadow-soft"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/docs/resume.pdf';
                      link.download = 'Aditi_Gupta_Resume.pdf';
                      link.click();
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ResumeSection };
