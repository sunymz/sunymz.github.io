import { useEffect, useRef, useState } from 'react';
import {
  BarChart3,
  Code2,
  Database,
  Github,
  GitBranch,
  Globe,
  Layers,
  Server,
} from 'lucide-react';

const GitHubWork = () => {
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

  const notableProjects = [
    {
      name: 'Earthquake Data Visualizer',
      link: 'https://github.com/schkj/earthquake-data-visualizer',
      summary:
        'Interactive map visualizing USGS earthquake locations and magnitudes from the past month.',
      tags: ['JavaScript', 'Maps', 'Firebase'],
    },
    {
      name: 'LCSAQ API (private)',
      link: 'https://github.com/schkj/lcsaq-api',
      summary:
        'Backend API supporting the low-cost sensor air quality (LCSAQ) measurement system.',
      tags: ['Backend', 'API', 'Air Quality'],
    },
    {
      name: 'bamdata',
      link: 'https://github.com/gawbkt-org/bamdata',
      summary: 'Dashboard for fetching, analyzing, and managing BAM1020 data for PM2.5 and PM10.',
      tags: ['Dashboard', 'Air Quality', 'PM2.5 / PM10'],
    },
    {
      name: 'komputer-kaia',
      link: 'https://github.com/Wargavi48/komputer-kaia',
      summary: 'Fan site graduation project for Kanaia Asa (JKT48V).',
      tags: ['Fan Site', 'Graduation', 'Community'],
    },
    {
      name: 'KTPVisualNovel',
      link: 'https://github.com/Wargavi48/KTPVisualNovel',
      steam: 'https://store.steampowered.com/app/3037900/WGV_Dreamcatcher/',
      summary: 'Visual novel project, released on Steam as WGV Dreamcatcher.',
      tags: ['Visual Novel', 'Steam', 'Interactive'],
    },
    {
      name: 'Wargavi48 Website',
      link: 'https://github.com/Wargavi48/wargavi48.github.io',
      summary: 'Community website for the Wargavi48 fanbase, published on GitHub Pages.',
      tags: ['GitHub Pages', 'Web'],
    },
  ];

  const orgWork = [
    {
      icon: Layers,
      org: 'air-quality-org',
      detail:
        'Data platform, dashboard, and synchronization projects supporting atmospheric monitoring — including MDB-to-SQL tooling, the LCSAQ system, and shared organization configuration.',
    },
    {
      icon: BarChart3,
      org: 'air-quality-dashboard',
      detail:
        'Experimental meteorological dashboards, PM2.5 air-quality forecasting, and observation systems.',
    },
    {
      icon: Globe,
      org: 'Wargavi48',
      detail:
        'Backend services and community web platforms supporting fan-based events and engagement tools.',
    },
  ];

  const areasOfExperience = [
    'JavaScript Web Apps',
    'Backend & API Development',
    'Python & Data Processing',
    'Dashboard Development',
    'Data Visualization',
    'Data Synchronization',
    'Maps & Geospatial',
    'GitHub Pages & Static Sites',
    'Firebase Deployment',
    'Administrative Systems',
    'Air-Quality & Met Data',
    'Invitation & Event Apps',
    'Interactive & Entertainment',
    'Organization-Level Shared Config',
  ];

  const technicalProfile = [
    { label: 'Frontend', detail: 'JavaScript, static websites, and interactive interfaces' },
    { label: 'Backend', detail: 'APIs, application backends, and data services' },
    { label: 'Data Engineering', detail: 'Data conversion, synchronization, and processing' },
    { label: 'Visualization', detail: 'Maps, dashboards, charts, and word clouds' },
    { label: 'Deployment', detail: 'GitHub Pages and Firebase' },
    { label: 'Collaboration', detail: 'Personal, private, organization, and shared projects' },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          <span className="text-accent font-mono text-xl mr-2">02.</span>
          Software Engineering
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mb-6" />
        <p className="text-muted-foreground max-w-3xl">
          GitHub work summary as a software engineer — covering personal projects,
          private development repositories, organization work, dashboards, web applications, and
          data visualization tools.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Focus', value: 'Software Engineering' },
          { label: 'Scope', value: 'Personal · Org · Collaborative' },
          { label: 'Repositories', value: '~40 across projects' },
        ].map((item, index) => (
          <div
            key={item.label}
            className={`p-6 bg-card border border-border rounded-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${100 + index * 100}ms` }}
          >
            <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
            <p className="text-lg font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Notable Projects */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center gap-2">
          <Github size={20} className="text-accent" />
          Notable Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {notableProjects.map((project, index) => (
            <article
              key={project.name}
              className={`p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                >
                  <Code2 size={18} className="text-accent" />
                  {project.name}
                </a>
                {project.steam && (
                  <a
                    href={project.steam}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap"
                  >
                    Steam
                  </a>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.name}-${tag}`}
                    className="px-2 py-1 text-xs font-mono rounded bg-accent/10 text-accent border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Organization & Private Work */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center gap-2">
          <GitBranch size={20} className="text-accent" />
          Organization & Private Work
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {orgWork.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.org}
                className={`p-6 bg-card border border-border rounded-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-accent" />
                </div>
                <p className="text-xs font-mono text-accent mb-1">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Areas of Experience */}
      <article
        className={`p-6 bg-card border border-border rounded-xl mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center gap-2">
          <Server size={20} className="text-accent" />
          Areas of Experience
        </h3>
        <div className="flex flex-wrap gap-2">
          {areasOfExperience.map((area) => (
            <span
              key={area}
              className="px-3 py-1.5 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/30"
            >
              {area}
            </span>
          ))}
        </div>
      </article>

      {/* Technical Profile */}
      <article
        className={`p-6 bg-card border border-border rounded-xl transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center gap-2">
          <Database size={20} className="text-accent" />
          Technical Profile
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {technicalProfile.map((item) => (
            <div key={item.label} className="flex items-start gap-2 text-sm">
              <span className="w-28 flex-shrink-0 font-mono text-accent">{item.label}</span>
              <span className="text-muted-foreground">{item.detail}</span>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default GitHubWork;
