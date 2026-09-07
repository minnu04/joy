import React, { useState, useEffect } from 'react';

export default function Hero({ targetDateString = '2026-09-21T09:00:00+05:30' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const target = new Date(targetDateString).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateString]);

  return (
    <section className="relative w-full overflow-hidden bg-chassis-dark text-on-surface min-h-[92vh] flex flex-col justify-between items-center pt-space-2xl pb-space-2xl" id="home">
      {/* Hypercar Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          alt="Ferrari futuristic hypercar matte concept prototype backdrop"
          className="w-full h-full object-cover object-center opacity-40 transform scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8gFyKEaNSWJw0rcAyb-pKl-6umMMLiKNKVnFmW5Seey9DJqcvRql95dak5oTLBWSD-0e98JoB9q3zJe8CMnn2lbNGW4EuPxiIZwJI2duOYMvS8_47EU6RR7OibkUPy1i7R2c8pNj3IUTmWQlhoIfrtr-ahYWc1IdxZEnwOSzpA5XIHJ9UCJtrnRlu7JrGjHnFUkiUnB67El-6I_Tvfb-sa1SZ16xBvvrB2t8S6cJw_0c6-WdGGcE"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chassis-dark via-chassis-dark/60 to-chassis-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_#070D18_85%)]"></div>
      </div>

      {/* Centered Content Stack */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-gutter-desktop flex flex-col items-center text-center my-auto w-full">
        
        {/* Top Badge Pill */}
        <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-lowest/90 border border-border-subtle backdrop-blur-md shadow-lg mb-space-md">
          <span className="w-2.5 h-2.5 rounded-full bg-corsa-red animate-pulse shadow-[0_0_10px_rgba(235,35,35,0.9)]"></span>
          <span className="font-label-badge text-label-badge text-text-primary tracking-widest uppercase font-bold">
            1ST ANNUAL SYMPOSIUM • 2026
          </span>
        </div>

        {/* Monumental Typography */}
        <div className="flex flex-col items-center tracking-tight select-none">
          <h1 className="font-display-hero text-[52px] sm:text-[80px] lg:text-[108px] leading-[0.9] font-bold text-text-primary uppercase tracking-tight">
            JOYMECH
          </h1>
          <div className="font-display-hero text-[52px] sm:text-[80px] lg:text-[108px] leading-[0.9] font-bold uppercase tracking-tight flex items-center justify-center">
            <span className="text-text-primary">FORG</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF4D4D] via-corsa-red to-[#900000] drop-shadow-[0_0_35px_rgba(235,35,35,0.7)]">
              EX
            </span>
          </div>
          <div className="font-display-hero text-[26px] sm:text-[36px] lg:text-[46px] leading-tight font-bold tracking-[0.38em] text-corsa-red mt-2 sm:mt-3 drop-shadow-[0_0_18px_rgba(235,35,35,0.5)]">
            2 0 2 6
          </div>
        </div>

        {/* Subtitles */}
        <div className="mt-space-md flex flex-col items-center gap-1">
          <span className="font-headline-sm text-[16px] sm:text-[20px] font-bold uppercase tracking-[0.2em] text-text-primary">
            JOY UNIVERSITY
          </span>
          <span className="font-label-telemetry text-[11px] sm:text-[13px] uppercase tracking-[0.25em] text-text-muted">
            SCHOOL OF ENGINEERING AND TECHNOLOGY
          </span>
        </div>

        {/* Live Countdown Telemetry Unit */}
        <div className="mt-space-lg flex items-center justify-center gap-2 sm:gap-4 bg-surface-deep/80 border border-border-subtle/80 px-space-md py-space-sm rounded-xl backdrop-blur-md shadow-2xl">
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[65px]">
            <span className="font-mono font-bold text-[22px] sm:text-[30px] text-electric-cyan">{timeLeft.days}</span>
            <span className="font-label-badge text-[9px] uppercase tracking-widest text-text-muted">DAYS</span>
          </div>
          <span className="text-corsa-red font-mono text-xl font-bold">:</span>
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[65px]">
            <span className="font-mono font-bold text-[22px] sm:text-[30px] text-text-primary">{timeLeft.hours}</span>
            <span className="font-label-badge text-[9px] uppercase tracking-widest text-text-muted">HRS</span>
          </div>
          <span className="text-corsa-red font-mono text-xl font-bold">:</span>
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[65px]">
            <span className="font-mono font-bold text-[22px] sm:text-[30px] text-text-primary">{timeLeft.minutes}</span>
            <span className="font-label-badge text-[9px] uppercase tracking-widest text-text-muted">MINS</span>
          </div>
          <span className="text-corsa-red font-mono text-xl font-bold">:</span>
          <div className="flex flex-col items-center min-w-[50px] sm:min-w-[65px]">
            <span className="font-mono font-bold text-[22px] sm:text-[30px] text-corsa-red">{timeLeft.seconds}</span>
            <span className="font-label-badge text-[9px] uppercase tracking-widest text-text-muted">SECS</span>
          </div>
        </div>

        {/* Dual Info Pill Card */}
        <div className="mt-space-lg grid grid-cols-1 sm:grid-cols-2 border border-border-subtle/70 rounded-xl bg-surface-deep/85 backdrop-blur-md overflow-hidden max-w-2xl w-full shadow-2xl divide-y sm:divide-y-0 sm:divide-x divide-border-subtle/60">
          <div className="flex items-center gap-space-md p-space-md text-left">
            <div className="w-11 h-11 rounded-lg bg-surface-container-high/80 border border-border-subtle flex items-center justify-center text-corsa-red shrink-0">
              <span className="material-symbols-outlined text-[24px]">calendar_today</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted">SYMPOSIUM DATES</span>
              <span className="font-body-md text-text-primary font-bold text-[14px] sm:text-[15px] font-mono tracking-tight">21 / 09 / 2026 — 22 / 09 / 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-space-md p-space-md text-left">
            <div className="w-11 h-11 rounded-lg bg-surface-container-high/80 border border-border-subtle flex items-center justify-center text-corsa-red shrink-0">
              <span className="material-symbols-outlined text-[24px]">location_on</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-text-muted">SYMPOSIUM VENUE</span>
              <span className="font-body-md text-text-primary font-bold text-[14px] sm:text-[15px]">Joy University, SET Campus</span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md w-full max-w-md">
          <a
            className="flex-1 min-w-[170px] inline-flex items-center justify-between px-space-lg py-space-sm bg-surface-container-low/90 hover:bg-surface-container border border-border-subtle text-text-primary font-headline-sm text-body-sm uppercase font-bold tracking-wider rounded-lg backdrop-blur-md transition-all group"
            href="#events"
          >
            <span className="truncate">EXPLORE ARENAS</span>
            <span className="material-symbols-outlined text-[18px] text-text-muted group-hover:text-primary transition-colors ml-1">chevron_right</span>
          </a>
          <a
            className="flex-1 min-w-[170px] inline-flex items-center justify-between px-space-lg py-space-sm bg-corsa-red hover:bg-[#c91919] text-text-primary font-headline-sm text-body-sm uppercase font-bold tracking-wider rounded-lg shadow-[0_0_24px_rgba(235,35,35,0.45)] transition-all transform hover:-translate-y-0.5 group"
            href="#quick-register"
          >
            <span className="truncate">REGISTER NOW</span>
            <span className="material-symbols-outlined text-[20px] text-text-primary ml-1 group-hover:animate-pulse">bolt</span>
          </a>
        </div>
      </div>

      {/* Base Scroll Indicator */}
      <a href="#keynotes" className="relative z-10 flex flex-col items-center gap-1.5 pt-space-md pb-space-xs text-text-muted hover:text-primary transition-colors cursor-pointer">
        <span className="font-label-telemetry text-label-badge uppercase tracking-[0.25em] text-text-secondary">SCROLL TO EXPLORE ↓</span>
        <span className="w-1.5 h-1.5 rounded-full bg-corsa-red animate-ping"></span>
      </a>
    </section>
  );
}
