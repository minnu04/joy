import React from 'react';

export default function About() {
  const highlights = [
    {
      icon: 'speed',
      title: 'Motorsport Dynamics',
      desc: 'Exploring high-velocity fluid behaviors, ground-effect aerodynamics, and telemetry analytics.'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Advanced Engineering',
      desc: 'Hands-on CAD surfacing, computational modeling, and novel composite materials testing.'
    },
    {
      icon: 'smart_toy',
      title: 'Autonomous Systems',
      desc: 'Edge computing, sensor fusion, and AI-driven control architectures in modern mobility.'
    },
    {
      icon: 'military_tech',
      title: '₹1,00,000+ Prize Pool',
      desc: 'Prestigious national championship trophies, cash awards, and international accreditation.'
    }
  ];

  return (
    <section className="w-full bg-surface-deep text-on-surface py-space-3xl border-t border-border-subtle/30" id="about">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest font-bold">
                About The Symposium
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold uppercase tracking-tight">
              JoyMech ForgeX 2026
            </h2>
          </div>
          <div className="font-label-telemetry text-label-telemetry text-text-secondary max-w-md">
            <span>Organized by the Department of Mechanical &amp; Aerospace Engineering, Joy University.</span>
          </div>
        </div>

        {/* Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center mb-space-2xl">
          <div className="lg:col-span-7 flex flex-col gap-4 text-text-secondary text-body-lg">
            <p>
              <strong className="text-text-primary font-semibold">JoyMech ForgeX 2026</strong> is the premier national symposium uniting future motorsport engineers, aerodynamic researchers, and automobile enthusiasts.
            </p>
            <p className="text-body-md">
              Over two action-packed days on <span className="text-electric-cyan font-mono font-bold">September 21–22, 2026</span>, participants compete in intensive technical arenas including CFD analysis, live parametric CAD design, and high-speed buzzer quizzes, followed by non-technical showcases like the flagship Auto Expo and creative automotive styling.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-surface-container p-space-md rounded-xl border border-border-subtle text-center">
              <span className="font-display-hero text-[36px] font-black text-electric-cyan block">48+</span>
              <span className="font-label-badge text-label-badge uppercase text-text-muted">Hours of Innovation</span>
            </div>
            <div className="bg-surface-container p-space-md rounded-xl border border-border-subtle text-center">
              <span className="font-display-hero text-[36px] font-black text-corsa-red block">₹1L+</span>
              <span className="font-label-badge text-label-badge uppercase text-text-muted">Total Cash Awards</span>
            </div>
            <div className="bg-surface-container p-space-md rounded-xl border border-border-subtle text-center">
              <span className="font-display-hero text-[36px] font-black text-primary block">6+</span>
              <span className="font-label-badge text-label-badge uppercase text-text-muted">Arena Tracks</span>
            </div>
            <div className="bg-surface-container p-space-md rounded-xl border border-border-subtle text-center">
              <span className="font-display-hero text-[36px] font-black text-telemetry-emerald block">100%</span>
              <span className="font-label-badge text-label-badge uppercase text-text-muted">Hands-on Experience</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {highlights.map((h, i) => (
            <div key={i} className="bg-surface-container p-space-lg rounded-xl border border-border-subtle hover:border-primary/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[24px]">{h.icon}</span>
                </div>
                <h3 className="font-headline-sm text-title-card text-text-primary font-bold uppercase mb-1">
                  {h.title}
                </h3>
                <p className="font-body-sm text-text-secondary text-body-sm">
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
