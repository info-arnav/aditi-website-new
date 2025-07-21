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
  FileText,
  Download,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold text-foreground">Aditi Gupta</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                Projects
              </a>
              <a
                href="#extracurricular"
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                Leadership
              </a>
              <a
                href="#creator"
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                Creator
              </a>
              <a
                href="#resume"
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#extracurricular"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Leadership
                </a>
                <a
                  href="#creator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Creator
                </a>
                <a
                  href="#resume"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative mx-auto lg:mx-0 w-fit">
                <img
                  src="/static/polaroid.png"
                  alt="Aditi Gupta"
                  className="w-64 sm:w-80 h-80 sm:h-100 object-cover rounded-2xl shadow-soft"
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-primary p-3 sm:p-4 rounded-xl shadow-hover">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aditi
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                B.Tech student at NSUT Delhi with a creative lens — I see shapes
                in numbers and stories in data. Director of Nalum, VP at
                Enactus, and digital content creator passionate about driving
                meaningful change.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
                <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  Data Analyst
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  Product Strategy
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  Content Creator
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
                  Social Impact
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  variant="default"
                  className="shadow-soft w-full sm:w-auto"
                  onClick={() =>
                    window.open("mailto:aditi.gupta1109@gmail.com", "_blank")
                  }
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <div className="flex gap-3 sm:gap-4">
                  <Button
                    variant="outline"
                    className="shadow-soft flex-1 sm:flex-none"
                    onClick={() =>
                      window.open(
                        "https://in.linkedin.com/in/aditi-gupta-379ab624a",
                        "_blank"
                      )
                    }
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    className="shadow-soft flex-1 sm:flex-none"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/aditi.c0re/",
                        "_blank"
                      )
                    }
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
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
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Work Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
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
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Transformed overwhelming 1.7M row datasets into actionable
                      insights. Built forecasting models using PyTorch and
                      created Tableau dashboards that improved decision-making
                      across teams.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">
                          98.8%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Model Accuracy
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">
                          71%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Time Reduction
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-center">
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
                      className="w-full h-32 object-cover rounded-lg shadow-soft"
                    />
                    <img
                      src="/assets/Zopper/Self.jpg"
                      alt="At Zopper office"
                      className="w-full h-32 object-cover rounded-lg shadow-soft"
                    />
                    <img
                      src="/assets/Zopper/Ambience.jpg"
                      alt="Zopper office ambience"
                      className="w-full h-32 object-cover rounded-lg shadow-soft col-span-2"
                    />
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
                <div className="bg-gradient-primary p-4 rounded-lg mb-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Award className="w-8 h-8 text-primary-foreground mr-2" />
                    <span className="text-primary-foreground font-semibold">
                      Fraud Detection System
                    </span>
                  </div>
                  <div className="text-primary-foreground text-sm">
                    Real-time surveillance integration with video analysis
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
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
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">75K+</div>
                    <div className="text-sm text-muted-foreground">
                      Data Rows Processed
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
      <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="shadow-soft hover:shadow-hover transition-shadow">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">
                  FairPlay in Online Money Games
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Research project analyzing fairness in real-money gaming
                  platforms with 300+ participants. Co-authored published
                  research with Prof. Ritu Sibal and Mr. Sanjaya Baru.
                </p>
                <div className="bg-gradient-primary p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center mb-2 sm:mb-3">
                    <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground mb-2 sm:mb-0 sm:mr-3" />
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-primary-foreground">
                        Published Research
                      </div>
                      <div className="text-primary-foreground text-xs sm:text-sm">
                        Gaming Ethics & Fairness Analysis
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">300+</div>
                    <div className="text-sm text-muted-foreground">
                      Participants
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">
                      Co-Authors
                    </div>
                  </div>
                </div>
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
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">
                      Orders Analyzed
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">
                      KPI Dashboards
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-primary p-6 rounded-lg mb-6 text-center">
                  <TrendingUp className="w-16 h-16 text-primary-foreground mx-auto mb-3" />
                  <div className="text-primary-foreground text-sm font-medium">
                    Interactive Business Intelligence Dashboard
                  </div>
                </div>
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
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <img
                    src="/assets/Clair/IMG-20250716-WA0011.jpg"
                    alt="Project Clair development"
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Clair/IMG-20250716-WA0012.jpg"
                    alt="Clair product design"
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Clair/IMG-20250716-WA0013.jpg"
                    alt="Team working on Clair"
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Clair/IMG-20250716-WA0014.jpg"
                    alt="Clair prototype"
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Clair/IMG-20250716-WA0015.jpg"
                    alt="Clair testing phase"
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Clair/IMG-20250716-WA0016.jpg"
                    alt="Clair final presentation"
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                  />
                </div>
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
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <img
                    src="/assets/Srijan/IMG-20250716-WA0017.jpg"
                    alt="Srijan paper recycling process"
                    className="w-full h-32 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Srijan/IMG-20250716-WA0018.jpg"
                    alt="Seed paper creation"
                    className="w-full h-32 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Srijan/IMG-20250716-WA0019.jpg"
                    alt="Team working on Srijan"
                    className="w-full h-32 object-cover rounded-lg shadow-soft"
                  />
                  <img
                    src="/assets/Srijan/WhatsApp Image 2025-07-16 at 18.26.26_8df164ac.jpg"
                    alt="Srijan sustainability workshop"
                    className="w-full h-32 object-cover rounded-lg shadow-soft"
                  />
                </div>
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
      <section id="extracurricular" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Leadership & Extracurricular
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
      <section id="creator" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
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

      {/* Dance Performance Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Performance & Arts
          </h2>
          <Card className="shadow-soft hover:shadow-hover transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  Performer | Mirage Dance Crew | Resonanz'24
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Dance has always been my creative outlet. In my first year at NSUT, I cleared all 3 rounds of auditions to join Mirage, the university's premier dance crew. However, a lower back injury just before the performing season forced me to step back and rest for two months — and ultimately step away from the crew.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    But the stage found me again. In my third year, I performed in Resonanz, the university's intra-college fest, where I competed in the Battle of Branches competition — and won first place.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The experience reminded me that while setbacks may pause passion, they don't have to end it.
                  </p>
                </div>
                <div>
                  <img
                    src="/assets/Reso/WhatsApp Image 2025-07-16 at 21.03.57_159e5dd1.jpg"
                    alt="Resonanz'24 dance performance"
                    className="w-full h-64 object-cover rounded-lg shadow-soft"
                  />
                  <div className="mt-4 bg-gradient-primary p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary-foreground mb-1">
                      1st Place
                    </div>
                    <div className="text-primary-foreground text-sm">
                      Battle of Branches - Resonanz'24
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Dance</Badge>
                <Badge variant="outline">Performance</Badge>
                <Badge variant="outline">Mirage Crew</Badge>
                <Badge variant="outline">Resilience</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            Resume
          </h2>
          <Card className="shadow-soft hover:shadow-hover transition-shadow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 text-center">
                  <div className="bg-gradient-primary p-6 rounded-xl mb-4 inline-block">
                    <FileText className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Download Resume
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    View my complete professional profile
                  </p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Get a comprehensive overview of my experience, skills, and
                    achievements. My resume includes detailed information about
                    my work experience, projects, leadership roles, and
                    technical expertise in data analysis and product strategy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="default"
                      className="shadow-soft"
                      onClick={() => window.open("/docs/resume.pdf", "_blank")}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      View Resume
                    </Button>
                    <Button
                      variant="outline"
                      className="shadow-soft"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/docs/resume.pdf";
                        link.download = "Aditi_Gupta_Resume.pdf";
                        link.click();
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
            Let's Connect
          </h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Always open to discussing data, collaborations, or creative
            projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="shadow-soft"
              onClick={() =>
                window.open("mailto:aditi.gupta1109@gmail.com", "_blank")
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button
              variant="outline"
              className="shadow-soft"
              onClick={() =>
                window.open(
                  "https://in.linkedin.com/in/aditi-gupta-379ab624a",
                  "_blank"
                )
              }
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="shadow-soft"
              onClick={() =>
                window.open("https://www.instagram.com/aditi.c0re/", "_blank")
              }
            >
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
