import React, { useState } from 'react';

export default function EventTracks({ events = [], activeDayTab, setActiveDayTab, onSelectTrackForRegistration }) {
  const currentEvents = events.filter((e) => e.day === activeDayTab);

  return (
    <section className="w-full bg-chassis-dark text-on-surface py-space-3xl" id="events">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-2xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-label-badge text-label-badge text-corsa-red px-2 py-0.5 bg-corsa-red/10 rounded uppercase font-bold">
                High Precision Competitions
              </span>
              <span className="font-label-badge text-label-badge text-text-muted uppercase">
                6 Arena Disciplines
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold uppercase tracking-tight">
              Symposium Arena Tracks
            </h2>
          </div>

          {/* Tab Toggle Trigger */}
          <div className="flex items-center p-1 bg-surface-deep rounded-lg border border-border-subtle">
            <button
              onClick={() => setActiveDayTab('day1')}
              className={`px-space-md py-space-xs rounded font-headline-sm text-body-sm uppercase font-bold transition-all cursor-pointer ${
                activeDayTab === 'day1'
                  ? 'bg-primary text-on-primary shadow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Technical (Day 01)
            </button>
            <button
              onClick={() => setActiveDayTab('day2')}
              className={`px-space-md py-space-xs rounded font-headline-sm text-body-sm uppercase font-bold transition-all cursor-pointer ${
                activeDayTab === 'day2'
                  ? 'bg-corsa-red text-text-primary shadow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Non-Technical (Day 02)
            </button>
          </div>
        </div>

        {/* Dynamic Event Grid */}
        {currentEvents.length === 0 ? (
          <div className="p-space-2xl bg-surface-deep border border-border-subtle rounded-xl text-center flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-text-muted text-[40px]">filter_alt_off</span>
            <h3 className="font-headline-sm text-text-primary font-bold">No Arena Matches Filter Query</h3>
            <p className="font-body-sm text-text-secondary">Try switching discipline filters or resetting to view all tracks.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg transition-all duration-300">
            {currentEvents.map((evt) => (
              <div
                key={evt.id}
                className="event-card bg-surface-deep p-space-xl rounded-xl shadow-xl flex flex-col justify-between hover:bg-surface-raised transition-all border border-border-subtle/60 hover:border-primary/50 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="w-10 h-10 rounded bg-primary/20 text-primary flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[22px]">{evt.icon}</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-badge text-label-badge text-electric-cyan uppercase px-2 py-0.5 bg-surface-container rounded border border-border-subtle">
                        {evt.venueName?.split('/')[0]?.trim() || 'Joy Univ'}
                      </span>
                      <span className="font-label-badge text-label-badge text-corsa-red uppercase font-bold px-2 py-1 bg-corsa-red/10 rounded">
                        {evt.badgeText}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-headline-md text-headline-md text-text-primary font-bold uppercase">
                    {evt.title}
                  </h3>
                  
                  <p className="font-body-md text-body-md text-text-secondary mt-2 mb-space-md">
                    {evt.description}
                  </p>

                  <div className="flex flex-col gap-1.5 pt-space-xs">
                    <span className="font-label-badge text-label-badge text-text-muted uppercase tracking-wider">
                      Evaluation Scope &amp; Topics:
                    </span>
                    <ul className="space-y-1 font-body-sm text-body-sm text-text-primary">
                      {evt.topics?.map((topic, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-space-lg">
                  <div className="pt-space-sm bg-surface-container px-space-md py-space-sm rounded flex items-center justify-between border border-border-subtle/40 mb-3">
                    <div>
                      <span className="font-label-badge text-label-badge text-text-muted uppercase">Evaluation Panel</span>
                      <div className="font-headline-sm text-body-md text-text-primary font-bold truncate max-w-[150px]">
                        {evt.evaluator}
                      </div>
                    </div>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase font-mono">
                      {evt.hall}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectTrackForRegistration?.(evt.title.replace(/^\d+\.\s*/, ''))}
                    className="w-full py-2 bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-text-primary border border-border-subtle rounded font-label-telemetry text-label-telemetry uppercase font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Accredit For This Track</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
