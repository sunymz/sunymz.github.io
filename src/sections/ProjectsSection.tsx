import { useEffect, useRef, useState } from 'react';

const ProjectsSection = () => {
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
          <span className="text-accent font-mono text-xl mr-2">04.</span>
          Selected Projects
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mb-6" />
        <p className="text-muted-foreground max-w-3xl">
          Anonymized project highlights at the intersection of environmental science and
          technology. Identity, formal employment history, workplace names, and education
          timeline are intentionally omitted.
        </p>
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

export default ProjectsSection;
