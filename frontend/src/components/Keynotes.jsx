import React from 'react';

export default function Keynotes() {
  return (
    <section className="w-full bg-surface-container-low text-on-surface py-space-3xl border-t border-border-subtle/30" id="speakers">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest font-bold">
                World-Class Academics &amp; Research
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold uppercase tracking-tight">
              Keynote Speakers
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          {/* Speaker 1: Yutaka Hara */}
          <div className="bg-surface-deep p-space-xl rounded-xl border border-border-subtle shadow-xl hover:border-primary/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-space-md">
                <span className="px-2.5 py-1 bg-corsa-red/20 text-corsa-red font-label-badge text-label-badge rounded uppercase font-bold border border-corsa-red/30">
                  Keynote 01 // Fluid Mechanics
                </span>
                <span className="font-mono text-body-sm text-text-muted">Tottori Univ, Japan</span>
              </div>
              <div className="flex items-center gap-space-lg mb-space-md">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-container shrink-0 border border-border-subtle">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt="Professor Yutaka Hara"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJVH03zb_kgDd6BIVtK-XJR-KCIIStEt7DqfSJqGLzYABj3RhnLnMcOy_WmmHqMP3eS6xvOOaH7LidMB8ed1wVlBAdgEynsizjlCNTqzEFNXwspwIzxvdKXBiXDp0NLvtYu3rno0KUYsmuZL5salz9vFmkA1A7A8V3TdghlUFOGmCji0HVPOzBI9urRgYU7bGZb67Y_svLn8AknRkGu9iIuTzr_3JVgqzCltAgEL-Vo0GOrSvjCXs"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md text-text-primary font-bold">YUTAKA HARA</h3>
                  <span className="font-body-md text-body-md text-primary font-semibold">Tottori University, Japan</span>
                  <span className="font-label-badge text-label-badge text-text-secondary uppercase mt-1">Chair of Advanced Fluid Mechanics &amp; CFD</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-text-secondary">
                Pioneering researcher in vortex dynamics, boundary-layer transitions, and next-generation aero-propulsion design. Delivering an exclusive address on high-velocity fluid behaviors in Formula aerodynamics.
              </p>
            </div>
            <div className="mt-space-lg pt-space-md bg-surface-container/50 px-space-md py-space-sm rounded flex items-center justify-between font-label-telemetry text-label-telemetry border border-border-subtle/40">
              <span className="text-text-muted">SESSION DATE: DAY 1 — 10:00 AM</span>
              <span className="text-primary font-bold">MAIN AUDITORIUM /// TECH TRACK</span>
            </div>
          </div>

          {/* Speaker 2: Prof. Santanu Mitra */}
          <div className="bg-surface-deep p-space-xl rounded-xl border border-border-subtle shadow-xl hover:border-electric-cyan/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-space-md">
                <span className="px-2.5 py-1 bg-electric-cyan/20 text-electric-cyan font-label-badge text-label-badge rounded uppercase font-bold border border-electric-cyan/30">
                  Keynote 02 // Emerging Technologies
                </span>
                <span className="font-mono text-body-sm text-text-muted">SNIoE, New Delhi</span>
              </div>
              <div className="flex items-center gap-space-lg mb-space-md">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface-container shrink-0 border border-border-subtle">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt="Prof. Santanu Mitra"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOrfG6yZKnwvdd6r4S5-bmXhBzEN-tKjHSIFBBdT7QZs9R-k2ZEDRrmldofJHemKet0-SUqPdXqzEqyDMBGvWPg5ckGnpFtbmkcrzWkXH69dkgQTsYjY6A8Qzn4wZJmr1pdu9v7YQr7uibK28oX8N0TJDAqscXU13Ahg7UHTjHvSOT9jkWCLqzGfBHB4pip6nztmrS9gDIT-YgG8XfMbBCMdMlNZvCcwxE1wwfbvEkoj4zga8FxB8"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-headline-md text-headline-md text-text-primary font-bold">PROF. SANTANU MITRA</h3>
                  <span className="font-body-md text-body-md text-primary font-semibold">Shiv Nadar Institute of Eminence, New Delhi</span>
                  <span className="font-label-badge text-label-badge text-text-secondary uppercase mt-1">Autonomous Systems &amp; Computational Mechanics</span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-text-secondary">
                Leader in AI-driven structural mechanics and computational modeling for rapid prototyping. Addressing automated telemetry analytics and emerging robotics architectures in automotive sectors.
              </p>
            </div>
            <div className="mt-space-lg pt-space-md bg-surface-container/50 px-space-md py-space-sm rounded flex items-center justify-between font-label-telemetry text-label-telemetry border border-border-subtle/40">
              <span className="text-text-muted">SESSION DATE: DAY 2 — 09:30 AM</span>
              <span className="text-electric-cyan font-bold">MAIN AUDITORIUM /// AUTO EXPO STAGE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
