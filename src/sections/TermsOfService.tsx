import { useEffect, useRef, useState } from 'react';
import {
  ClipboardCheck,
  ClipboardList,
  Copyright,
  CreditCard,
  FileText,
  Info,
  RotateCcw,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import type { ModalKey } from '../lib/modals';

type TermsOfServiceProps = {
  onNavigate: (key: ModalKey) => void;
};

const TermsOfService = ({ onNavigate }: TermsOfServiceProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const generalTerms = [
    {
      icon: ClipboardList,
      title: 'Scope of Service',
      body: 'Commissions cover tech support tasks and Discord server creation or rework, as described on the Commission Board. Services are limited to what is explicitly agreed before starting.',
    },
    {
      icon: Copyright,
      title: 'Asset Ownership',
      body: 'All images, logos, emojis, and other assets supplied to complete a server remain the sole property and responsibility of the commissioner. The server is built on top of those assets and does not transfer their ownership.',
    },
    {
      icon: CreditCard,
      title: 'Payments & Donations',
      body: 'Payments are made through supported tipping platforms (for example Trakteer, Sociabuzz or PayPal). Amounts sent as tips or donations are considered donations and cannot be refunded.',
    },
    {
      icon: ShieldCheck,
      title: 'Warranty & Management',
      body: 'Packages that include a management period come with warranty and updates for the stated duration (such as 6 months or 1 month). Packages without a management period are delivered as-is with no warranty or updates.',
    },
    {
      icon: ClipboardCheck,
      title: 'Order Process',
      body: 'Orders are placed by contacting the creator, then agreeing on the package and scope. Confirmation happens before any work begins, and questions can be raised during a consultation step.',
    },
    {
      icon: RotateCcw,
      title: 'Revision Policy',
      body: 'Reasonable adjustments may be requested within an active management or warranty period. Major redesigns outside the agreed scope may be treated as a new order.',
    },
    {
      icon: ShieldAlert,
      title: 'Acceptable Use',
      body: 'The creator reserves the right to decline or stop work on requests that are unlawful, abusive, or outside the stated service scope.',
    },
    {
      icon: Scale,
      title: 'General Applicability',
      body: 'These terms apply to every package. By ordering a service, the commissioner agrees to the full terms listed here and on the Commission Board.',
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-accent font-mono text-2xl mr-2">06.</span>
              Terms of Service
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl">
              General terms that apply to all commissions. Please read them carefully
              before placing an order.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {generalTerms.map((term, index) => {
              const Icon = term.icon;
              return (
                <article
                  key={term.title}
                  className={`p-6 bg-card border border-border rounded-xl transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${120 + index * 80}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{term.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{term.body}</p>
                </article>
              );
            })}
          </div>

          {/* Summary note */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-card border border-border rounded-xl flex items-start gap-3">
              <FileText size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Full pricing and package details are on the Commission Board.
              </p>
            </div>
            <div className="p-5 bg-card border border-border rounded-xl flex items-start gap-3">
              <ShieldCheck size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Management packages include warranty and updates for their stated period.
              </p>
            </div>
            <div className="p-5 bg-card border border-border rounded-xl flex items-start gap-3">
              <Info size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Unsure about anything? Ask during a free consultation first.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button type="button" onClick={() => onNavigate('commission')} className="btn-primary">
              Back to Commission Board
            </button>
            <a href="https://discord.com/users/518666205343514624" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Contact to Place an Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
