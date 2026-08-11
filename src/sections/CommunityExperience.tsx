import { useEffect, useRef, useState } from 'react';
import { Calendar, Crown, Server, Users } from 'lucide-react';

const CommunityExperience = () => {
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

  const servers = [
    {
      name: 'WARGAVI48',
      subtitle: 'JKT48V Fanbase Server',
      est: 'Est. Dec 2023',
      members: '927',
      online: '146',
      role: 'Head Admin (Server & Community Manager)',
      link: 'https://wargavi48.github.io/discord',
      description:
        'Fanbase server for JKT48V. 3+ years handling community staffing, member engagement, and support across the JKT48V ecosystem.',
      tags: ['Vtuber', 'Fanbase', 'JKT48V'],
    },
    {
      name: '💖RIZUNIVERSE✨',
      subtitle: 'Rizuka Miku\'s Discord Server',
      est: 'Est. Jun 2024',
      members: '504',
      online: '80',
      role: 'Admin (Server Manager)',
      link: 'https://rizuka-miku.github.io/discord',
      description:
        'Community server supporting Rizuka Miku. Long-term server management, community building, and a warm member experience.',
      tags: ['Vtuber', 'Community', 'Indie Vtuber'],
    },
  ];

  const handleJoin = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={sectionRef} className="relative">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          <span className="text-accent font-mono text-xl mr-2">04.</span>
          Community & Server Experience
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mb-6" />
        <p className="text-muted-foreground max-w-3xl">
          3+ years managing and supporting Discord community servers — from a JKT48V
          fanbase, indie VTuber server, Shinna BMKG Gowa Discord server, and office automation Discord server.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {servers.map((srv, index) => (
          <article
            key={srv.name}
            className={`p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${120 + index * 120}ms` }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{srv.name}</h3>
                <p className="text-accent font-mono text-sm mt-1">{srv.subtitle}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Server size={22} className="text-accent" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-accent" />
                {srv.members} members
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-accent" />
                {srv.est}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{srv.description}</p>

            <p className="text-xs font-mono text-accent mb-3 flex items-center gap-1.5">
              <Crown size={14} />
              {srv.role}
            </p>

            <div className="flex flex-wrap gap-2">
              {srv.tags.map((tag) => (
                <span
                  key={`${srv.name}-${tag}`}
                  className="px-2 py-1 text-xs font-mono rounded bg-accent/10 text-accent border border-accent/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <button
                type="button"
                onClick={() => handleJoin(srv.link)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-accent/40 bg-accent/10 text-accent text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Server size={16} />
                Join the Server
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CommunityExperience;
