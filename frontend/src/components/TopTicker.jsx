import React from 'react';

export default function TopTicker({ stats }) {
  return (
    <section className="w-full bg-surface-container-lowest text-text-secondary px-gutter-desktop py-space-xs border-b border-border-subtle/30">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-telemetry text-label-telemetry">
        <div className="flex items-center gap-space-md flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-electric-cyan font-semibold">
            <span className="w-2 h-2 rounded-full bg-electric-cyan animate-ping"></span>
            GRID STATUS: OFFICIAL REGISTRATION OPEN
          </span>
          <span className="text-border-subtle hidden sm:inline">|</span>
          <span className="text-text-primary">JOY UNIVERSITY • SCHOOL OF ENGINEERING &amp; TECHNOLOGY</span>
          <span className="text-border-subtle hidden sm:inline">|</span>
          <span className="text-warning-amber">LAT 8.2384° N // LON 77.4120° E</span>
        </div>
        <div className="flex items-center gap-space-md font-mono text-body-sm">
          <span className="text-text-muted hidden md:inline">
            SESSION: <strong className="text-text-primary">AUTONOMOUS &amp; AERODYNAMICS 2026</strong>
          </span>
          <span className="text-telemetry-emerald bg-surface-container-high px-2 py-0.5 rounded border border-telemetry-emerald/30">
            SYS ID: JMF26-{stats?.databaseMode?.includes('MongoDB') ? 'MONGO-LIVE' : 'CORE-ONLINE'}
          </span>
        </div>
      </div>
    </section>
  );
}
