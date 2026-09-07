import React, { useState } from 'react';

export default function ScheduleTimeline({ schedule = { day1: [], day2: [] } }) {
  const [activeSchedDay, setActiveSchedDay] = useState('day1');
  const items = activeSchedDay === 'day1' ? schedule.day1 : schedule.day2;

  return (
    <section className="w-full bg-surface-deep text-on-surface py-space-3xl border-t border-b border-border-subtle/40" id="schedule">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-2xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
              <span className="font-label-badge text-label-badge text-electric-cyan uppercase tracking-widest font-bold">
                High-Octane Telemetry Schedule
              </span>
              <span className="font-label-badge text-label-badge text-text-muted uppercase">
                /// 48-Hour Itinerary
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold uppercase tracking-tight">
              Event Schedule Timeline
            </h2>
            <p className="font-body-md text-body-md text-text-secondary mt-1 max-w-xl">
              Synchronized session timetable across aerodynamic labs, main auditorium, CAD workstations, and exhibition arena grounds.
            </p>
          </div>

          <div className="flex items-center p-1 bg-surface-container-lowest rounded-lg border border-border-subtle shadow-lg">
            <button
              onClick={() => setActiveSchedDay('day1')}
              className={`px-space-lg py-space-xs rounded font-headline-sm text-body-sm uppercase font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSchedDay === 'day1'
                  ? 'bg-primary text-on-primary shadow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>Day 1 (Sept 21)</span>
              <span className="font-label-badge text-label-badge bg-chassis-dark/30 px-1.5 py-0.5 rounded text-on-primary">
                Technical
              </span>
            </button>
            <button
              onClick={() => setActiveSchedDay('day2')}
              className={`px-space-lg py-space-xs rounded font-headline-sm text-body-sm uppercase font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeSchedDay === 'day2'
                  ? 'bg-corsa-red text-text-primary shadow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">event_available</span>
              <span>Day 2 (Sept 22)</span>
              <span className="font-label-badge text-label-badge bg-surface-container px-1.5 py-0.5 rounded text-text-muted">
                Non-Technical
              </span>
            </button>
          </div>
        </div>

        {/* Timeline Banner */}
        <div className="flex items-center justify-between p-space-md mb-space-lg bg-surface-container-low rounded-lg border-l-4 border-electric-cyan">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="font-headline-md text-headline-sm text-electric-cyan font-bold uppercase">
              {activeSchedDay === 'day1' ? 'Day 01 /// Monday, 21 Sept 2026' : 'Day 02 /// Tuesday, 22 Sept 2026'}
            </span>
            <span className="font-label-badge text-label-badge uppercase bg-electric-cyan/10 text-electric-cyan px-2 py-0.5 rounded font-bold">
              {activeSchedDay === 'day1' ? 'Technical Disciplines & Keynotes' : 'Non-Technical Arenas & Grand Valedictory'}
            </span>
          </div>
          <span className="font-label-telemetry text-label-telemetry text-text-muted hidden sm:inline">
            {activeSchedDay === 'day1' ? '09:00 AM — 06:00 PM IST' : '09:30 AM — 07:30 PM IST'}
          </span>
        </div>

        {/* Schedule List */}
        <div className="relative pl-6 md:pl-8 border-l border-border-subtle space-y-space-lg">
          {items.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-electric-cyan border-4 border-surface-deep shadow-[0_0_12px_rgba(0,210,211,0.6)]"></div>
              
              <div className="bg-surface-container p-space-lg rounded-xl shadow-lg hover:border-electric-cyan/50 border border-transparent transition-all flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="font-label-telemetry text-label-telemetry text-electric-cyan font-bold bg-electric-cyan/10 px-2 py-0.5 rounded font-mono">
                      {item.time}
                    </span>
                    <span className={`font-label-badge text-label-badge uppercase px-2 py-0.5 rounded font-bold ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <span className="font-label-badge text-label-badge text-text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-corsa-red">location_on</span>
                      {item.venue}
                    </span>
                  </div>

                  <h4 className="font-headline-md text-title-card text-text-primary font-bold uppercase mt-1">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-space-2xs md:pt-0">
                  <div className="text-right hidden sm:block">
                    <div className="font-body-sm text-text-primary font-bold">{item.lead}</div>
                    <div className="font-label-badge text-label-badge text-text-muted uppercase">{item.leadRole}</div>
                  </div>
                  <span className={`w-10 h-10 rounded-full bg-surface-deep border border-border-subtle flex items-center justify-center ${item.iconColor || 'text-primary'}`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon || 'flag'}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
