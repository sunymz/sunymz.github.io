import { useEffect, useRef, useState } from 'react';
import { Calendar, Crown, Users } from 'lucide-react';
import DiscordIcon from '../components/DiscordIcon';

type GuildStats = { online: number };

const STATS_KEY_PREFIX = 'discord-guild-stats';
const REFRESH_MS = 60 * 1000; // re-fetch every minute

const getCachedStats = (guildId: string): GuildStats | null => {
  try {
    const raw = localStorage.getItem(`${STATS_KEY_PREFIX}-${guildId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GuildStats & { fetchedAt: number };
    if (Date.now() - parsed.fetchedAt > REFRESH_MS) return null;
    return { online: parsed.online };
  } catch {
    return null;
  }
};

const saveCachedStats = (guildId: string, stats: GuildStats) => {
  try {
    localStorage.setItem(
      `${STATS_KEY_PREFIX}-${guildId}`,
      JSON.stringify({ ...stats, fetchedAt: Date.now() })
    );
  } catch {
    // storage unavailable - ignore
  }
};

const servers = [
  {
    name: 'WARGAVI48',
    subtitle: 'JKT48V Fanbase Server',
    est: 'Est. Dec 2023',
    members: '934',
    online: '146',
    guildId: '1183711571222986772',
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
    members: '512',
    online: '80',
    guildId: '1255086653324660736',
    role: 'Admin (Server Manager)',
    link: 'https://rizuka-miku.github.io/discord',
    description:
      'Community server supporting Rizuka Miku. Long-term server management, community building, and a warm member experience.',
    tags: ['Vtuber', 'Community', 'Indie Vtuber'],
  },
  {
    name: 'Shinna BMKG Gowa',
    subtitle: 'Shinna Faultline\'s Discord Server',
    est: 'Est. 2024',
    role: 'Admin (Server Manager)',
    description:
      'Small-scale private Discord server built for the board of Shinna Faultline\'s staff.',
    tags: ['Vtuber', 'Community'],
  },
];

const CommunityExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [guildStats, setGuildStats] = useState<Record<string, GuildStats>>({});

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

  const handleJoin = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Fetch online stats via the Discord Server Widget API, refreshing every minute.
  useEffect(() => {
    const guildIds = servers.filter((srv) => srv.guildId).map((srv) => srv.guildId!);
    let cancelled = false;

    const loadStats = async (guildId: string, useCache = true) => {
      if (useCache) {
        const cached = getCachedStats(guildId);
        if (cached) {
          if (!cancelled) setGuildStats((prev) => ({ ...prev, [guildId]: cached }));
          return;
        }
      }
      try {
        const res = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const stats: GuildStats = { online: data.presence_count };
        saveCachedStats(guildId, stats);
        if (!cancelled) setGuildStats((prev) => ({ ...prev, [guildId]: stats }));
      } catch {
        // Widget disabled or unreachable - fall back to the hardcoded values.
      }
    };

    // Immediate load (respects the 1-minute cache).
    guildIds.forEach((id) => loadStats(id));
    // Every minute, force a fresh fetch from the widget API.
    const interval = setInterval(() => guildIds.forEach((id) => loadStats(id, false)), REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

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
        {servers.map((srv, index) => {
          const live = srv.guildId ? guildStats[srv.guildId] : null;
          const memberCount = srv.members;
          const onlineCount = live ? String(live.online) : srv.online;
          return (
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
                <DiscordIcon size={22} className="text-accent" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
              {memberCount && (
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-accent" />
                  {memberCount} members
                </span>
              )}
              {onlineCount && (
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  {onlineCount} online
                </span>
              )}
              {srv.est && (
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-accent" />
                  {srv.est}
                </span>
              )}
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{srv.description}</p>

            <p className="text-xs font-mono text-accent mb-3 flex items-center gap-1.5">
              <Crown size={14} />
              {srv.role}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {srv.tags?.map((tag, i) => (
                <span
                  key={`${srv.name}-${i}`}
                  className="px-2 py-1 text-xs font-mono rounded bg-accent/10 text-accent border border-accent/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {srv.link && (
              <div className="mt-2">
                <button
                  type="button"
                  onClick={() => handleJoin(srv.link!)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-accent/40 bg-accent/10 text-accent text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <DiscordIcon size={16} />
                  Join the Server
                </button>
              </div>
            )}
          </article>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityExperience;
