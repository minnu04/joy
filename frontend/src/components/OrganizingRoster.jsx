import React from 'react';

export default function OrganizingRoster() {
  const staff = [
    { name: 'Dr. Praveen Laws', role: 'Faculty', title: 'Staff Coordinator' },
    { name: 'Dr. Prayer Riju', role: 'Faculty', title: 'Staff Coordinator' },
    { name: 'Prof. Prabhu', role: 'Faculty', title: 'Staff Coordinator' },
    { name: 'Prof. Sudha Priya', role: 'Faculty', title: 'Staff Coordinator' },
  ];

  const studentLeads = [
    { name: 'Kasinth NA', role: 'Lead Co-ord', title: 'Student Lead' },
    { name: 'C. Divakar', role: 'Lead Co-ord', title: 'Student Lead' },
  ];

  const operations = [
    { name: 'Ravi A', role: 'Operations', title: 'Event Operations' },
    { name: 'M. Thanush', role: 'Logistics', title: 'Logistics Marshal' },
    { name: 'K. Kanthi', role: 'Coordination', title: 'Arena Coordination' },
    { name: 'O. Harsha', role: 'Technical', title: 'Technical Marshal' },
  ];

  return (
    <section className="w-full bg-surface-container-lowest text-on-surface py-space-3xl border-t border-border-subtle/40" id="contact">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-sm">
          <div>
            <span className="font-label-badge text-label-badge text-corsa-red px-2 py-0.5 bg-corsa-red/10 rounded uppercase font-bold">
              Symposium Command
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold uppercase tracking-tight mt-1">
              Organizing Roster
            </h2>
          </div>
          <div className="font-label-telemetry text-label-telemetry text-text-secondary">
            <span>JOY UNIVERSITY FACULTY &amp; STUDENT COMMITTEES</span>
          </div>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          
          {/* Staff Coordinators */}
          <div className="bg-surface-deep p-space-xl rounded-xl border border-border-subtle shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-xs text-corsa-red font-label-badge text-label-badge uppercase font-bold mb-space-md">
                <span className="material-symbols-outlined text-[20px]">school</span>
                <span>Staff Coordinators</span>
              </div>
              <ul className="space-y-space-sm">
                {staff.map((item, idx) => (
                  <li key={idx} className="p-space-xs bg-surface-container rounded flex items-center justify-between border border-border-subtle/30">
                    <span className="font-body-md text-body-md text-text-primary font-semibold">{item.name}</span>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-md pt-space-xs text-label-telemetry text-text-muted font-mono">
              Joy University School of Engineering
            </div>
          </div>

          {/* Student Leads */}
          <div className="bg-surface-deep p-space-xl rounded-xl border border-border-subtle shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase font-bold mb-space-md">
                <span className="material-symbols-outlined text-[20px]">badge</span>
                <span>Student Leads</span>
              </div>
              <ul className="space-y-space-sm">
                {studentLeads.map((item, idx) => (
                  <li key={idx} className="p-space-xs bg-surface-container rounded flex items-center justify-between border border-border-subtle/30">
                    <span className="font-body-md text-body-md text-text-primary font-semibold">{item.name}</span>
                    <span className="font-label-badge text-label-badge text-primary uppercase">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-md pt-space-xs text-label-telemetry text-text-muted font-mono">
              Symposium Executive Committee
            </div>
          </div>

          {/* Event Operations */}
          <div className="bg-surface-deep p-space-xl rounded-xl border border-border-subtle shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-space-xs text-warning-amber font-label-badge text-label-badge uppercase font-bold mb-space-md">
                <span className="material-symbols-outlined text-[20px]">campaign</span>
                <span>Event Operations</span>
              </div>
              <ul className="space-y-space-sm">
                {operations.map((item, idx) => (
                  <li key={idx} className="p-space-xs bg-surface-container rounded flex items-center justify-between border border-border-subtle/30">
                    <span className="font-body-md text-body-md text-text-primary font-semibold">{item.name}</span>
                    <span className="font-label-badge text-label-badge text-warning-amber uppercase">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-space-md pt-space-xs text-label-telemetry text-text-muted font-mono">
              On-Ground Track Marshals
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
