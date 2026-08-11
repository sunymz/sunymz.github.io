import { useEffect, useRef, useState } from 'react';
import { BarChart3, FlaskConical, Radar } from 'lucide-react';

const EnvironmentSection = () => {
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

  const envFocus = [
    'AOD',
    'PM2.5 / PM10',
    'Black Carbon',
    'CO & Ozone',
    'UV Index',
    'Low-Cost Sensors',
    'QA/QC & Calibration',
    'Time-Series Data',
  ];

  const envHighlights = [
    {
      icon: Radar,
      title: 'Atmospheric Observations',
      description:
        'Sun-photometer AOD measurements with continuous QA/QC for reliable monitoring data.',
    },
    {
      icon: FlaskConical,
      title: 'Air Quality Analysis',
      description:
        'PM, black carbon, CO, and ozone trends examined against meteorological variables.',
    },
    {
      icon: BarChart3,
      title: 'Data & Visualization',
      description:
        'Time-series processing, dashboards, and reporting that make monitoring data readable.',
    },
  ];

  const projectHighlights = [
    {
      title: 'Pandemic-Era Air Quality Trend Mapping',
      summary:
        'Analyzed regional air quality shifts during the pandemic period to identify major pattern changes and reporting insights.',
      tags: ['Air Quality', 'Time Series', 'Reporting'],
      period: 'Research Topic',
    },
    {
      title: 'Black Carbon and Meteorological Coupling (2013-2021)',
      summary:
        'Studied black carbon concentration variability and its relationship with meteorological factors across long-range observations.',
      tags: ['Black Carbon', 'Meteorology', 'Longitudinal Study'],
      period: 'Research Topic',
    },
    {
      title: 'Low-Cost Sensor Performance Evaluation for PM2.5 and PM10',
      summary:
        'Evaluated prototype low-cost sensors against quality expectations for particulate matter measurements and field practicality.',
      tags: ['PM2.5', 'PM10', 'Instrumentation'],
      period: 'Applied Project',
    },
    {
      title: 'CO and Ozone Analysis on Biomass Burning Influence (2014-2023)',
      summary:
        'Investigated carbon monoxide and ozone concentration responses related to biomass burning events over a decade.',
      tags: ['CO', 'Ozone', 'Biomass Burning'],
      period: 'Research Topic',
    },
    {
      title: 'Ultraviolet Index Prediction with Machine Learning',
      summary:
        'Built a predictive exploration workflow for UV index behavior using machine learning methods and atmospheric context.',
      tags: ['Machine Learning', 'UV Index', 'Forecasting'],
      period: 'Modeling Project',
    },
    {
      title: 'Sun-Photometer AOD Data Pipeline',
      summary:
        'Automated processing and quality control for Aerosol Optical Depth observations from sun-photometer networks.',
      tags: ['AOD', 'Sun-Photometer', 'QA/QC'],
      period: 'Data Engineering',
    },
    {
      title: 'Low-Cost Sensor Calibration vs Reference',
      summary:
        'Compared low-cost PM sensor responses against reference-grade instruments to assess accuracy and long-term drift.',
      tags: ['Calibration', 'PM', 'Reference'],
      period: 'Applied Project',
    },
    {
      title: 'Air Mass Back-Trajectory & Pollutant Transport',
      summary:
        'Used back-trajectory analysis to trace potential pollutant transport routes behind local concentration events.',
      tags: ['Back-Trajectory', 'Transport', 'Source Analysis'],
      period: 'Research Topic',
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          <span className="text-accent font-mono text-xl mr-2">03.</span>
          Environmental Science & Technology
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mb-6" />
        <p className="text-muted-foreground max-w-3xl">
          Bridging atmospheric monitoring with practical software: instrument QA/QC,
          long-term air quality analysis, low-cost sensor validation, and data-driven
          tools for environmental reporting — with anonymized project highlights across
          the same scientific and data scope.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {envFocus.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent border border-accent/30"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {envHighlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className={`p-5 bg-card border border-border rounded-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Icon size={18} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          );
        })}
      </div>

      {/* Selected Projects */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground inline-flex items-center gap-2">
          <BarChart3 size={20} className="text-accent" />
          Selected Projects
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projectHighlights.map((project, index) => (
          <article
            key={project.title}
            className={`p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${120 + index * 80}ms` }}
          >
            <p className="text-xs font-mono text-accent mb-3">{project.period}</p>
            <h4 className="text-lg font-semibold text-foreground mb-3">{project.title}</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.title}-${tag}`}
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
  );
};

export default EnvironmentSection;
