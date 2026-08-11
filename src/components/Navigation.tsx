import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import type { ModalKey } from '../lib/modals';

type NavigationProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onNavigate: (key: ModalKey) => void;
  activeModal: ModalKey | null;
};

const Navigation = ({ theme, onToggleTheme, onNavigate, activeModal }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks: { name: string; key: ModalKey }[] = [
    { name: 'Dashboard', key: 'dashboard' },
    { name: 'Experience', key: 'experience' },
    { name: 'Commission', key: 'commission' },
    { name: 'TOS', key: 'tos' },
  ];

  const handleNavigate = (key: ModalKey) => {
    onNavigate(key);
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="section-container">
          <div className="section-inner">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="text-2xl font-bold text-accent font-mono hover:scale-110 hover:rotate-3 transition-transform duration-300"
              >
                🔆
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks.map((link, index) => (
                  <button
                    key={link.key}
                    type="button"
                    onClick={() => handleNavigate(link.key)}
                    className={`nav-link text-sm font-mono ${
                      activeModal === link.key ? 'text-accent' : ''
                    }`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <span className="text-accent mr-1">0{index + 1}.</span>
                    {link.name}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={onToggleTheme}
                  className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground hover:border-accent hover:text-accent transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-accent p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-card border-l border-border shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.key}
                type="button"
                onClick={() => handleNavigate(link.key)}
                className={`text-2xl font-mono transition-colors ${
                  activeModal === link.key ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.4s ease ${index * 100}ms`,
                }}
              >
                <span className="text-accent block text-sm mb-1">0{index + 1}.</span>
                {link.name}
              </button>
            ))}

            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground hover:border-accent hover:text-accent transition-colors"
              aria-label="Toggle theme"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.4s ease 350ms',
              }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
