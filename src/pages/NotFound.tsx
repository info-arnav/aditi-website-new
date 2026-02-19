import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-subtle">
      <Helmet>
        <title>404 | Page Not Found | Aditi Gupta</title>
        <meta
          name="description"
          content="The page you are looking for does not exist on aditi-gupta.co.in."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-2xl rounded-2xl border bg-background/70 p-8 text-center shadow-soft backdrop-blur-md sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Compass className="h-8 w-8 text-primary" />
          </div>

          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Error 404
          </p>
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            We couldn&apos;t find <code>{location.pathname}</code>. The link may
            be outdated, or the page may have moved.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="min-w-44 shadow-soft">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="min-w-44"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
