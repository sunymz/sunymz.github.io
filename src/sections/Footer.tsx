import { useEffect, useState } from 'react';
import { ArrowUp, Github, Heart, MessagesSquare, Twitter } from 'lucide-react';
import type { ModalKey } from '../lib/modals';

type FooterProps = {
  onNavigate: (key: ModalKey) => void;
};

const Footer = ({ onNavigate }: FooterProps) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const links: { label: string; key?: ModalKey; isHome?: boolean }[] = [
    { label: 'Home', isHome: true },
    { label: 'Dashboard', key: 'dashboard' },
    { label: 'Engineering', key: 'github' },
    { label: 'Environment', key: 'environment' },
    { label: 'Experience', key: 'experience' },
    { label: 'Commission', key: 'commission' },
    { label: 'TOS', key: 'tos' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/sunymz', label: 'X' },
    { icon: Github, href: 'https://github.com/schkj', label: 'GitHub' },
    { icon: MessagesSquare, href: 'https://discord.com/users/518666205343514624', label: 'Discord' },
  ];

  const handleLink = (link: { label: string; key?: ModalKey; isHome?: boolean }) => {
    if (link.isHome) {
      scrollToTop();
    } else if (link.key) {
      onNavigate(link.key);
    }
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <div className="section-inner">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <button
                type="button"
                onClick={scrollToTop}
                className="text-3xl font-bold text-accent font-mono hover:scale-110 inline-block transition-transform"
              >
                SUNNY.
              </button>
              <p className="text-muted-foreground mt-4 max-w-xs mx-auto md:mx-0">
                Professional Discord Server Setup & Management Specialist.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleLink(link)}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h3 className="text-foreground font-semibold mb-4">Connect</h3>
              <div className="flex justify-center md:justify-end gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm text-center md:text-left">
                © {currentYear} sunny (@sunymz). All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-1">
                Made with <Heart size={14} className="text-accent fill-accent" /> using React & Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-accent/80 hover:-translate-y-1 transition-all duration-300 z-50 ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
