import React from 'react';

export default function ArenaFilters({
  selectedTrack,
  setSelectedTrack,
  selectedVenue,
  setSelectedVenue,
  visibleCount = 6,
  totalCount = 6,
  onReset
}) {
  const tracks = [
    { id: 'all', label: 'All Tracks' },
    { id: 'aero-cfd', label: 'Aerodynamics & CFD' },
    { id: 'cad', label: 'CAD Modelling' },
    { id: 'quiz', label: 'Technical Quiz' },
    { id: 'expo', label: 'Auto Expo & Vehicles' },
    { id: 'photo', label: 'Creative Photography' },
    { id: 'fashion', label: 'Design & Styling' },
  ];

  const venues = [
    { id: 'all', label: 'All Venues' },
    { id: 'auditorium', label: 'Main Auditorium (Keynotes)' },
    { id: 'simulation-bay', label: 'Simulation Bay 04 / CAD Center' },
    { id: 'open-air-arena', label: 'Motorsport & Open Air Arena' },
    { id: 'tech-pavilion', label: 'Tech Pavilion Exhibition Hall' },
  ];

  return (
    <section className="w-full bg-surface-deep/80 border-t border-b border-border-subtle/60 py-space-lg" id="arena-filters">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        <div className="p-space-lg bg-surface-container-lowest/90 rounded-xl border border-border-subtle shadow-xl backdrop-blur-md">
          
          {/* Header Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b border-border-subtle/50 mb-space-md">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
                <span className="font-label-badge text-label-badge text-electric-cyan uppercase tracking-widest font-bold">
                  Telemetry Grid Control
                </span>
                <span className="font-label-badge text-label-badge text-text-muted uppercase">
                  /// Real-Time Query
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase font-bold tracking-tight">
                Arena &amp; Schedule Interactive Filters
              </h3>
            </div>
            
            <div className="flex items-center gap-space-sm font-label-telemetry text-label-telemetry flex-wrap">
              <span className="px-2.5 py-1 bg-surface-container rounded border border-border-subtle text-text-secondary">
                Status: <strong className="text-telemetry-emerald">Filter Synced</strong>
              </span>
              <span className="px-2.5 py-1 bg-surface-container-high rounded border border-electric-cyan/40 text-electric-cyan font-bold font-mono">
                Displaying {visibleCount} of {totalCount} Arenas
              </span>
              <button
                onClick={onReset}
                className="px-3 py-1 bg-surface-container hover:bg-surface-raised text-text-muted hover:text-text-primary rounded text-label-badge uppercase font-bold transition-all border border-border-subtle cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            {/* Filter by Track */}
            <div>
              <div className="flex items-center gap-2 mb-space-xs font-label-telemetry text-label-telemetry uppercase text-text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px] text-primary">category</span>
                <span>Filter By Track / Discipline:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {tracks.map((t) => {
                  const isActive = selectedTrack === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTrack(t.id)}
                      className={`px-space-md py-1.5 rounded-full font-label-telemetry text-label-telemetry uppercase font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-[0_0_12px_rgba(0,210,211,0.4)]'
                          : 'bg-surface-container hover:bg-surface-raised text-text-secondary hover:text-text-primary border border-border-subtle'
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter by Venue */}
            <div>
              <div className="flex items-center gap-2 mb-space-xs font-label-telemetry text-label-telemetry uppercase text-text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px] text-corsa-red">pin_drop</span>
                <span>Filter By Venue Location:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {venues.map((v) => {
                  const isActive = selectedVenue === v.id;
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVenue(v.id)}
                      className={`px-space-md py-1.5 rounded-full font-label-telemetry text-label-telemetry uppercase font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-[0_0_12px_rgba(0,210,211,0.4)]'
                          : 'bg-surface-container hover:bg-surface-raised text-text-secondary hover:text-text-primary border border-border-subtle'
                      }`}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
