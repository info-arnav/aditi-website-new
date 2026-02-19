import { Download, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getPortfolioContent } from '@/features/portfolio/services/portfolio-content.service';

const ResumeSection = () => {
  const { resume } = getPortfolioContent();

  const openResume = () => {
    window.open(resume.filePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="resume" className="px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          {resume.title}
        </h2>

        <Card className="shadow-soft transition-shadow hover:shadow-hover">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="text-center md:w-1/3">
                <div className="mb-4 inline-block rounded-xl bg-gradient-primary p-6">
                  <FileText className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{resume.heading}</h3>
                <p className="text-sm text-muted-foreground">
                  View my complete professional profile
                </p>
              </div>

              <div className="md:w-2/3">
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {resume.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    variant="default"
                    className="shadow-soft"
                    onClick={openResume}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="shadow-soft"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = resume.filePath;
                      link.download = resume.downloadName;
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
