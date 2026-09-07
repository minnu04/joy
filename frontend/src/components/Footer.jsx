import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface border-t border-border-subtle/50">
      <div className="w-full max-w-[1440px] px-gutter-desktop mx-auto pt-space-3xl pb-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-2xl mb-space-3xl">
          
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-2xs">
              <span className="font-headline-md text-headline-md uppercase tracking-tight text-text-primary">JoyMech</span>
              <span className="font-headline-md text-headline-md uppercase tracking-tight text-primary">ForgeX</span>
              <span className="font-label-badge text-label-badge text-corsa-red px-1 bg-corsa-red/10 rounded">2026</span>
            </div>
            <p className="font-body-sm text-body-sm text-text-secondary">
              Joy University — School of Engineering and Technology. International Automotive &amp; Aerospace Engineering Symposium. Semper Paratus.
            </p>
            <div className="flex items-center gap-space-xs pt-space-2xs">
              <span className="font-label-badge text-label-badge text-primary px-space-xs py-space-2xs bg-surface-container rounded uppercase tracking-widest border border-border-subtle">
                Build • Connect • Create
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-badge text-label-badge text-text-muted uppercase tracking-widest">
              Emergency Hotline ///
            </span>
            <div className="flex flex-col gap-space-2xs">
              <span className="font-body-sm text-body-sm text-text-secondary">
                Symposium Desk: <strong className="text-text-primary font-mono">+91 89770 91574</strong>
              </span>
              <span className="font-body-sm text-body-sm text-text-secondary">
                Logistics Control: <strong className="text-text-primary font-mono">+91 93458 74088</strong>
              </span>
              <span className="font-body-sm text-body-sm text-text-secondary">
                Dispatch: <strong className="text-primary font-mono">Joymechforgex2026@gmail.com</strong>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-badge text-label-badge text-text-muted uppercase tracking-widest">
              Coordinators HQ ///
            </span>
            <div className="flex flex-col gap-space-2xs font-body-sm text-body-sm text-text-secondary">
              <span>Faculty Advisor: <strong className="text-text-primary">Dr. Praveen Laws</strong></span>
              <span>Student Lead: <strong className="text-text-primary">Kasinth NA</strong></span>
              <span>Technical Secretary: <strong className="text-text-primary">C. Divakar</strong></span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-label-badge text-label-badge text-text-muted uppercase tracking-widest">
              Symposium Tracks ///
            </span>
            <ul className="flex flex-col gap-space-2xs font-body-sm text-body-sm text-text-secondary">
              <li><a className="hover:text-primary transition-colors" href="#events">Aerodynamics &amp; CFD Simulation</a></li>
              <li><a className="hover:text-primary transition-colors" href="#events">Parametric CAD Modelling</a></li>
              <li><a className="hover:text-primary transition-colors" href="#events">Auto Expo &amp; Vehicle Showcase</a></li>
              <li><a className="hover:text-primary transition-colors" href="#keynotes">Pinnacle Engineering Keynotes</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container/30 px-space-lg py-space-md rounded border border-border-subtle/30">
          <div className="flex items-center gap-space-md">
            <span className="font-label-telemetry text-label-telemetry text-text-muted">
              © 2026 JOY UNIVERSITY • SCHOOL OF ENGINEERING &amp; TECHNOLOGY. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex items-center gap-space-lg font-label-telemetry text-label-telemetry text-text-secondary">
            <span>SEMPER PARATUS</span>
            <span>///</span>
            <span className="text-telemetry-emerald">TELEMETRY NOMINAL</span>
            <span>///</span>
            <span className="text-primary">MARANELLO AERO-GRID V4.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
