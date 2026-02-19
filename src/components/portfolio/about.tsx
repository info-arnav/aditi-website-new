import { GraduationCap, Lightbulb } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-card px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl">
          About Me
        </h2>

        <div className="grid gap-6 md:grid-cols-2 sm:gap-8">
          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8">
              <GraduationCap className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-xl font-semibold">Academic Journey</h3>
              <p className="leading-relaxed text-muted-foreground">
                B.Tech in Mechanical Engineering at NSUT Delhi, currently
                heading into my 7th semester. My journey into business and
                research began in Grade 11 when I won a national-level E-Summit.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft transition-shadow hover:shadow-hover">
            <CardContent className="p-8">
              <Lightbulb className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-xl font-semibold">Philosophy</h3>
              <p className="leading-relaxed text-muted-foreground">
                I have a creative lens where I see shapes in numbers and stories
                in data. I&apos;m passionate about data, design thinking, and
                driving initiatives that create meaningful change.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
