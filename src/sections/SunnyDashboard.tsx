import { useEffect, useRef, useState } from 'react';
import { BarChart3, Code2, Database, Server, Users } from 'lucide-react';

const SunnyDashboard = () => {
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

  const expertise = [
    {
      icon: Server,
      title: 'Backend & API Development',
      description:
        'Designs and builds APIs, application backends, and data services.',
    },
    {
      icon: BarChart3,
      title: 'Dashboard & Data Visualization',
      description:
        'Builds dashboards, charts, maps, and interactive visualizations.',
    },
    {
      icon: Database,
      title: 'Data Engineering & Pipelines',
      description:
        'Converts, synchronizes, and processes data across systems.',
    },
    {
      icon: Code2,
      title: 'Web & Frontend Development',
      description:
        'Develops JavaScript web apps, static sites, and interactive interfaces.',
    },
  ];

  const rankedStrengths = [
    'Backend & API development across personal and organization projects',
    'Dashboard and data visualization for monitoring systems',
    'Data engineering: conversion, synchronization, and processing',
    'Air-quality and meteorological data projects',
    'Professional Discord server setup, management & branding',
  ];

  return (
    <div ref={sectionRef} className="relative">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          <span className="text-accent font-mono text-xl mr-2">01.</span>
          Persona Dashboard
        </h2>
        <div className="w-24 h-1 bg-accent rounded-full mb-6" />
        <p className="text-muted-foreground max-w-3xl">
          Software & backend engineering across dashboards, APIs, data pipelines, and web
          applications plus professional Discord server services.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Handle', value: '@sunymz' },
          { label: 'GitHub', value: '@schkj' },
          { label: 'Core Focus', value: 'Software & Backend Engineering' },
        ].map((item, index) => (
          <div
            key={item.label}
            className={`p-6 bg-card border border-border rounded-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${100 + index * 100}ms` }}
          >
            <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
            <p className="text-xl font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Expertise */}
      <div id="forensics" className="grid md:grid-cols-2 gap-4 mb-8">
        {expertise.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className={`p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${240 + index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          );
        })}
      </div>

      {/* Ranked Strengths */}
      <article className="p-6 bg-card border border-border rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-4 inline-flex items-center gap-2">
          <Users size={20} className="text-accent" />
          Ranked Strengths
        </h3>
        <ol className="space-y-2 list-decimal list-inside text-sm text-muted-foreground">
          {rankedStrengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </article>
    </div>
  );
};

export default SunnyDashboard;
