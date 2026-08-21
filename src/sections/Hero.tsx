import { useEffect, useRef } from 'react';
import { Github, Twitter } from 'lucide-react';
import DiscordIcon from '../components/DiscordIcon';
import type { ModalKey } from '../lib/modals';

type HeroProps = {
  onNavigate: (key: ModalKey) => void;
};

const Hero = ({ onNavigate }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollY = window.scrollY;
      const parallaxValue = scrollY * 0.3;
      contentRef.current.style.transform = `translateY(${parallaxValue}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background transition-colors duration-300">
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(100, 255, 218, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(100, 255, 218, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 section-container py-32">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Eyebrow */}
              <p
                className="text-accent font-mono text-sm mb-4 animate-fadeInUp"
                style={{ animationDelay: '300ms' }}
              >
                Hi, I'm
              </p>

              {/* Name */}
              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight animate-fadeInUp"
                style={{ animationDelay: '500ms' }}
              >
                sunny🔆
              </h1>

              {/* Title */}
              <h2
                className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-6 text-balance animate-fadeInUp"
                style={{ animationDelay: '700ms' }}
              >
              </h2>

              {/* Toggler Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fadeInUp"
                style={{ animationDelay: '1100ms' }}
              >
                <button onClick={() => onNavigate('dashboard')} className="btn-primary">
                  Explore Dashboard
                </button>
                <button onClick={() => onNavigate('commission')} className="btn-secondary">
                  Commission Board
                </button>
              </div>

              {/* Social Links */}
              <div
                className="flex gap-4 justify-center lg:justify-start animate-fadeInUp"
                style={{ animationDelay: '1300ms' }}
              >
                <a
                  href="https://github.com/schkj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://x.com/sunymz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="X"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://discord.com/users/518666205343514624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Discord"
                >
                  <DiscordIcon size={20} />
                </a>
              </div>
            </div>

            {/* Right Content - Persona Snapshot */}
            <div
              className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fadeInUp"
              style={{ animationDelay: '800ms' }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-accent/15 rounded-3xl blur-2xl" />
                <div className="relative p-8 bg-card border border-border rounded-3xl backdrop-blur-xl">
                  <p className="text-sm font-mono text-accent mb-4">Identity Snapshot</p>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">@sunymz</h3>
                  <p className="text-muted-foreground mb-6">
                    Software engineer building dashboards, APIs, data pipelines, and web apps plus professional Discord server setups.
                  </p>

                  <div className="grid grid-cols-2 gap-3 min-w-0">
                    <div className="p-3 rounded-xl bg-background border border-border min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">GitHub</p>
                      <p className="text-base sm:text-lg font-semibold text-foreground break-words">@schkj</p>
                    </div>
                    <div className="p-3 rounded-xl bg-background border border-border min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">Focus</p>
                      <p className="text-base sm:text-lg font-semibold text-foreground break-words">Backend · Data · Web</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
                      <span className="text-accent font-mono text-xs">Software Engineer</span>
                    </span>
                    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
                      <span className="text-accent font-mono text-xs">Environmental Engineer</span>
                    </span>
                    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2">
                      <span className="text-accent font-mono text-xs">IT Support</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
