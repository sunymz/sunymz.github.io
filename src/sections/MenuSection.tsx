import { Briefcase, FileText, Github, LayoutDashboard, Server, Wind } from 'lucide-react';
import type { ModalKey } from '../lib/modals';

type MenuSectionProps = {
  onOpen: (key: ModalKey) => void;
};

const MenuSection = ({ onOpen }: MenuSectionProps) => {
  const items: { key: ModalKey; icon: typeof LayoutDashboard; title: string; description: string }[] = [
    {
      key: 'dashboard',
      icon: LayoutDashboard,
      title: 'Persona Dashboard',
      description: 'Overview of skills, strengths, and scope.',
    },
    {
      key: 'github',
      icon: Github,
      title: 'Software & Backend Engineering',
      description: 'GitHub work summary and notable projects.',
    },
    {
      key: 'environment',
      icon: Wind,
      title: 'Environmental Science & Tech',
      description: 'Atmospheric monitoring focus areas.',
    },
    {
      key: 'experience',
      icon: Briefcase,
      title: 'Community Experience',
      description: 'Discord server management highlights.',
    },
    {
      key: 'commission',
      icon: Server,
      title: 'Commission Board',
      description: 'Tech support & Discord server services.',
    },
    {
      key: 'tos',
      icon: FileText,
      title: 'Terms of Service',
      description: 'Rules that apply to all commissions.',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-gradient-to-r from-accent/5 to-transparent -translate-y-1/2 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Explore</h2>
            <div className="w-24 h-1 bg-accent rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything lives in toggler windows — pick a section to open it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => onOpen(item.key)}
                  className="group text-left p-6 bg-card border border-border rounded-xl hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
