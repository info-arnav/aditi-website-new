import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#extracurricular', label: 'Leadership' },
  { href: '#creator', label: 'Creator' },
  { href: '#resume', label: 'Resume' },
];

type NavigationProps = {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
};

const Navigation = ({
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-foreground sm:text-xl">
            Aditi Gupta
          </h1>

          <div className="hidden space-x-4 md:flex lg:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary lg:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button className="p-2 md:hidden" onClick={onToggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full z-40 border-b bg-background backdrop-blur-md md:hidden">
            <div className="container mx-auto px-4 py-4 sm:px-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    onClick={onCloseMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navigation };
