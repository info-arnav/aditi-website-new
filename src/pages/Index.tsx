import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Instagram,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground">Aditi Gupta</h1>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#extracurricular"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Leadership
              </a>
              <a
                href="#creator"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Creator
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/static/polaroid.png"
                  alt="Aditi Gupta"
                  className="w-80 h-100 object-cover rounded-2xl shadow-soft"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-primary p-4 rounded-xl shadow-hover">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aditi
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                B.Tech student at NSUT Delhi with a creative lens — I see shapes
                in numbers and stories in data. Director of Nalum, VP at
                Enactus, and digital content creator passionate about driving
                meaningful change.
              </p>
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                <Badge variant="secondary" className="px-4 py-2">
                  Data Analyst
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Product Strategy
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Content Creator
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  Social Impact
                </Badge>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="default" className="shadow-soft">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button variant="outline" className="shadow-soft">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Academic Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  B.Tech in Mechanical Engineering at NSUT Delhi, currently
                  heading into my 7th semester. My journey into business and
                  research began in Grade 11 when I won a national-level
                  E-Summit, sparking my fascination with problem analysis and
                  solution ideation.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I have a creative lens where I see shapes in numbers and
                  stories in data. I'm passionate about data, design thinking,
                  and driving initiatives that create meaningful change —
                  whether through a dashboard, a social project, or a reel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Work Experience
          </h2>
          <div className="space-y-8">
            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Data Analyst Intern
                    </h3>
                    <p className="text-primary font-semibold">
                      Zopper • Summer 2025
                    </p>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Gurugram, India
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Transformed overwhelming 1.7M row datasets into actionable
                  insights. Built forecasting models using PyTorch and created
                  Tableau dashboards that improved decision-making across teams.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">98.8%</div>
                    <div className="text-sm text-muted-foreground">
                      Model Accuracy
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">71%</div>
                    <div className="text-sm text-muted-foreground">
                      Time Reduction
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">140K</div>
                    <div className="text-sm text-muted-foreground">
                      Optimized Rows
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">Tableau</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">Forecasting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      Product Analyst Intern
                    </h3>
                    <p className="text-primary font-semibold">
                      Americana • Summer 2024
                    </p>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    Remote
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Investigated fraud patterns across 150+ outlets in Abu Dhabi
                  using 75K+ rows of sales data. Developed real-time
                  surveillance system integrating video analysis with
                  transaction data.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">80%</div>
                    <div className="text-sm text-muted-foreground">
                      Review Time Reduced
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">
                      Outlets Analyzed
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Excel</Badge>
                  <Badge variant="outline">FFmpeg</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                  <Badge variant="outline">Fraud Detection</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  FairPlay in Online Money Games
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Research project analyzing fairness in real-money gaming
                  platforms with 300+ participants. Co-authored published
                  research with Prof. Ritu Sibal and Mr. Sanjaya Baru.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Research</Badge>
                  <Badge variant="outline">Data Analysis</Badge>
                  <Badge variant="outline">Gaming Ethics</Badge>
                </div>
                <div className="text-sm text-primary font-semibold">
                  Published Research Paper
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  E-Commerce Analytics Dashboard
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built comprehensive BI solution analyzing 50K+ Myntra orders
                  using Excel and Power BI. Created dynamic dashboards for
                  revenue optimization and customer behavior insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Power BI</Badge>
                  <Badge variant="outline">Excel</Badge>
                  <Badge variant="outline">Business Intelligence</Badge>
                </div>
                <div className="text-sm text-primary font-semibold">
                  Full-Stack BI Solution
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Project Clair
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Co-founded affordable air purification solution using
                  SolidWorks design. Won Enactus India National Expo and secured
                  ₹2L funding.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">SolidWorks</Badge>
                  <Badge variant="outline">Product Design</Badge>
                  <Badge variant="outline">Social Impact</Badge>
                </div>
                <div className="text-sm text-primary font-semibold">
                  National Champions
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Project Srijan
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sustainable paper recycling initiative creating plantable seed
                  paper. Leading R&D phase with plans for community employment
                  and social inclusion.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Sustainability</Badge>
                  <Badge variant="outline">Social Impact</Badge>
                  <Badge variant="outline">Entrepreneurship</Badge>
                </div>
                <div className="text-sm text-primary font-semibold">
                  Ongoing R&D
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership & Extracurricular Section */}
      <section id="extracurricular" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Leadership & Extracurricular
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Director, Nalum
                </h3>
                <p className="text-muted-foreground mb-4">
                  Alumni Portal Development & User Strategy
                </p>
                <div className="text-2xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8 text-center">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Vice President
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enactus NSUT - Sustainable Ventures
                </p>
                <div className="text-2xl font-bold text-primary mb-2">₹2L</div>
                <div className="text-sm text-muted-foreground">
                  Funding Secured
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-8 text-center">
                <Briefcase className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Head of Collaborations
                </h3>
                <p className="text-muted-foreground mb-4">
                  Moksha-Innovision Festival
                </p>
                <div className="text-2xl font-bold text-primary mb-2">
                  ₹50L+
                </div>
                <div className="text-sm text-muted-foreground">
                  Sponsorships Managed
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section id="creator" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Digital Creator
          </h2>
          <Card className="shadow-soft hover:shadow-hover transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Instagram className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  @aditi.c0re
                </h3>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                What started as documenting college life turned into a thriving
                content creation journey. I create authentic content around
                fashion, travel, and lifestyle, collaborating with 50+ brands
                while maintaining genuine connections with my audience.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    3M+
                  </div>
                  <div className="text-muted-foreground">Monthly Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    30K
                  </div>
                  <div className="text-muted-foreground">Avg. Views/Reel</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7%</div>
                  <div className="text-muted-foreground">Engagement Rate</div>
                </div>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Dance Journey</h4>
                <p className="text-muted-foreground text-sm">
                  Member of Mirage Dance Crew at NSUT. Won first place in Battle
                  of Branches at Resonanz'24. While a back injury paused my crew
                  journey, it never stopped my passion for performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Let's Connect
          </h3>
          <p className="text-muted-foreground mb-8">
            Always open to discussing data, collaborations, or creative
            projects.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="shadow-soft">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button variant="outline" className="shadow-soft">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" className="shadow-soft">
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
