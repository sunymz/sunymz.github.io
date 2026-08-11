import { useEffect, useRef, useState } from 'react';
import {
  Check,
  ChevronDown,
  CreditCard,
  Headphones,
  Info,
  MessageSquare,
  Server,
  ShieldAlert,
  Wrench,
} from 'lucide-react';
import type { ModalKey } from '../lib/modals';

type CommissionBoardProps = {
  onNavigate: (key: ModalKey) => void;
};

const CommissionBoard = ({ onNavigate }: CommissionBoardProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Packages expand in row groups so the whole row reveals features together.
  const PACKAGES_PER_ROW = 2; // matches sm:grid-cols-2
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const toggleRow = (index: number) => {
    const row = Math.floor(index / PACKAGES_PER_ROW);
    setExpandedRows((prev) => ({ ...prev, [row]: !prev[row] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Server,
      title: 'Discord Server Setup',
      description:
        'Professional Discord server setup packages from Basic to Professional. Pick the one that best fits your needs and server scale.',
      tags: ['Basic to Professional', 'Full Branding', 'Moderation & Automation'],
    },
    {
      icon: Headphones,
      title: 'Tech Support',
      description:
        'Practical help with setup, troubleshooting, software, and everyday technical issues — explained clearly and patiently.',
      tags: ['Troubleshooting', 'Setup Help', 'Bot & Tools'],
    },
    {
      icon: Wrench,
      title: 'Server Rework & Management',
      description:
        'Rearrange an existing server to a cleaner standard, with optional short management periods, warranty, and updates.',
      tags: ['Restructure', 'Maintenance', 'Warranty Options'],
    },
  ];

  const serverPackages = [
    {
      name: 'BASIC',
      price: 'Rp50.000',
      note: 'A great fit for new servers that want a clean, ready-to-use structure from day one.',
      period: 'Setup',
      features: [
        'Tidy channel & category structure (fonts + emoji)',
        'Full role setup (font + emoji)',
        'Welcome message & auto role on join',
        'Basic server activity logging',
      ],
    },
    {
      name: 'STANDARD',
      price: 'Rp100.000',
      note: 'Ideal for small communities that want their server to look more professional.',
      period: 'Setup',
      features: [
        'Everything in the Basic package',
        'Channel & role permissions configured',
        'Reaction roles & embed messages',
        'Member leveling system',
        'Music bot settings & configuration',
      ],
    },
    {
      name: 'ADVANCED',
      price: 'Rp150.000',
      note: 'For active communities that need a complete moderation and automation system.',
      period: 'Setup',
      features: [
        'Everything in the Standard package',
        'Join, leave, ban & boost message automation',
        'Live stream notifications',
        'Server security system',
        'Ticket system',
        'Activity logs',
        'Moderation logs',
        'Invite logs',
        'Optimized bots & server automation',
      ],
    },
    {
      name: 'PROFESSIONAL',
      price: 'Rp200.000',
      note: 'For creators, large communities, or brands that want a more engaging and interactive server.',
      period: 'Setup',
      features: [
        'Everything in the Advanced package',
        'Custom server aesthetic (theme colors, channel names, emoji, etc.)',
        'Advanced welcome system with auto welcome banner/image',
        'Auto response / FAQ bot',
        'Giveaway system',
        'Mini games bot',
        'Server structure redesigned for a professional look',
        'Free maintenance services for 3 months after setup',
      ],
    },
  ];

  const warnings = [
    'All assets provided to complete a server build or rework remain the property and responsibility of the commissioner.',
    'Tips and donations sent by clients are treated as donations and cannot be refunded.',
    'General terms apply to every package before you continue.',
  ];

  const otherServices = [
    {
      icon: Headphones,
      title: 'Tech Support',
      price: 'Rp50.000 – Rp200.000',
      billing: 'per task or session',
      note: 'Practical help with setup, troubleshooting, software, and everyday technical issues — priced by complexity.',
      features: [
        'Quick fixes & bot setup',
        'Troubleshooting & software help',
        'Clear, patient explanations',
        'Priority handling for complex tasks',
      ],
    },
    {
      icon: Wrench,
      title: 'Server Rework & Management',
      price: 'Rp100.000 – Rp400.000',
      billing: 'one-time · management from Rp100.000/month',
      note: 'Restructure an existing server to a clean standard, with optional ongoing management, warranty, and updates.',
      features: [
        'Full server restructure',
        '1-month management with warranty & updates',
        'Monthly plans start from Rp100.000',
        'Priority support & 1:1 consultation',
      ],
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-accent font-mono text-2xl mr-2">05.</span>
              Commission Board
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              Open commissions for tech support and Discord server creation or management.
              Check the pricing below and read the general terms before ordering.
            </p>
          </div>

          {/* Services */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className={`p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${120 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono rounded bg-accent/10 text-accent border border-accent/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Discord Setup Packages */}
          <div className="mb-12">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">Discord Setup Packages</h3>
              <p className="text-muted-foreground max-w-3xl">Choose the package that matches your server's scale — from basic setup to the most complete solution.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {serverPackages.map((pkg, index) => {
                const isExpanded = !!expandedRows[Math.floor(index / PACKAGES_PER_ROW)];
                return (
                  <article
                    key={pkg.name}
                    className={`flex flex-col bg-card border rounded-2xl overflow-hidden transition-all duration-700 ${
                      isExpanded ? 'border-accent/60' : 'border-border hover:border-accent/40'
                    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${200 + index * 80}ms` }}
                  >
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono rounded-full">{pkg.period}</div>
                        <Server size={18} className="text-accent/60" />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground mb-1">{pkg.name}</h4>
                      <p className="text-3xl font-bold text-accent mb-3">{pkg.price}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pkg.note}</p>
                    </div>

                    {/* Toggle */}
                    <div className="px-6 pb-4">
                      <button
                        type="button"
                        onClick={() => toggleRow(index)}
                        aria-expanded={isExpanded}
                        className={`w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border transition-colors ${
                          isExpanded
                            ? 'bg-accent/10 text-accent border-accent/40'
                            : 'bg-background text-muted-foreground border-border hover:border-accent/40 hover:text-accent'
                        }`}
                      >
                        <span>{isExpanded ? 'Hide Features' : `See ${pkg.features.length} Features`}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>

                    {/* Expandable feature list */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6">
                          <div className="rounded-xl bg-muted/50 border border-border p-5">
                            <p className="text-xs font-mono text-accent uppercase tracking-wide mb-3">
                              Features
                            </p>
                            <ul className="space-y-2">
                              {pkg.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <Check size={15} className="text-accent flex-shrink-0 mt-0.5" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto px-6 pb-6">
                      <button
                        type="button"
                        onClick={() => onNavigate('tos')}
                        className="w-full px-6 py-3 bg-accent text-accent-foreground font-medium rounded-xl hover:bg-accent/90 transition-colors"
                      >
                        Choose This Package
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Package Comparison (differences + value merged) */}
            <div className="mt-12 p-8 bg-card border border-accent/30 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2 text-accent">
                <Info size={20} />
                Package Comparison
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                What each tier adds on top of the previous one, and the value it brings.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <div className="font-mono text-xs text-accent mb-1">BASIC</div>
                  <div className="font-semibold mb-3">Rp50.000</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="text-accent font-medium block mb-0.5">Highlights</span>
                    Core channel, role & welcome setup
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent font-medium block mb-0.5">Value</span>
                    A clean, ready-to-use server foundation from day one.
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <div className="font-mono text-xs text-accent mb-1">STANDARD</div>
                  <div className="font-semibold mb-3">Rp100.000</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="text-accent font-medium block mb-0.5">Highlights</span>
                    Basic + permissions, reaction roles, embeds, leveling, and music
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent font-medium block mb-0.5">Value</span>
                    Adds professionalism with permissions, embeds, leveling, and music.
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <div className="font-mono text-xs text-accent mb-1">ADVANCED</div>
                  <div className="font-semibold mb-3">Rp150.000</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="text-accent font-medium block mb-0.5">Highlights</span>
                    Standard + tickets, security, automation, notifications, and full logging
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent font-medium block mb-0.5">Value</span>
                    Adds moderation, tickets, security, and automation for active communities.
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl border border-accent/50">
                  <div className="font-mono text-xs text-accent mb-1">PROFESSIONAL</div>
                  <div className="font-semibold mb-3">Rp200.000</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="text-accent font-medium block mb-0.5">Highlights</span>
                    Advanced + custom aesthetics, welcome banners, giveaways, and mini games
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-accent font-medium block mb-0.5">Value</span>
                    Focuses on aesthetics, branding, and member experience for a premium look.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services Pricing */}
          <div className="mb-12">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-2">Other Services Pricing</h3>
              <p className="text-muted-foreground max-w-3xl">
                Range pricing for tech support and server rework & management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {otherServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className={`p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${200 + index * 80}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-3xl font-bold text-accent mb-1">{service.price}</p>
                    <p className="text-sm text-muted-foreground mb-4">{service.billing}</p>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{service.note}</p>
                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={15} className="text-accent flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => onNavigate('tos')}
                      className="w-full btn-primary"
                    >
                      Order / Consult
                    </button>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Payment + Warnings */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <article className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center gap-2">
                <CreditCard size={20} className="text-accent" />
                Payment Methods
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Payments are handled through supported tipping platforms such as Trakteer and Sociabuzz.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Trakteer', 'Sociabuzz'].map((method) => (
                  <span key={method} className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/30">
                    {method}
                  </span>
                ))}
              </div>
            </article>

            <article className="p-6 bg-card border border-border rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center gap-2">
                <ShieldAlert size={20} className="text-accent" />
                Important Notes
              </h3>
              <ul className="space-y-3">
                {warnings.map((warning) => (
                  <li key={warning} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    {warning}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={() => onNavigate('tos')} className="btn-primary">
              Read Terms of Service
            </button>
            <a href="https://discord.com/users/518666205343514624" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageSquare size={18} />
              Consult Before Ordering
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionBoard;
