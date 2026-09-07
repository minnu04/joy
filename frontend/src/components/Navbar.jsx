import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('HOME');

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EVENTS', href: '#events' },
    { label: 'SCHEDULE', href: '#schedule' },
    { label: 'SPEAKERS', href: '#speakers' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#070D18]/90 backdrop-blur-md border-b border-[#1E3557]/40 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
      <div className="h-16 w-full max-w-[1440px] px-gutter-desktop mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo matching screenshot */}
        <a href="#home" className="flex flex-col group shrink-0 select-none">
          <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase">
            <span>JOY UNIVERSITY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#EB2323]"></span>
            <span className="italic text-[#64748B] lowercase">semper paratus</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-display-hero text-[20px] font-extrabold uppercase tracking-tight text-[#F8FAFC]">
              JOYMECH
            </span>
            <span className="font-display-hero text-[20px] font-extrabold uppercase tracking-tight text-[#EB2323]">
              FORGEX
            </span>
            <span className="font-mono text-[10px] font-bold text-white px-1.5 py-0.5 bg-[#EB2323] rounded">
              2026
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`relative font-display-hero text-[13px] tracking-wider uppercase font-bold transition-colors py-1 ${
                  isActive
                    ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#EB2323]'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Register Button */}
        <div className="flex items-center gap-3">
          <a
            href="#quick-register"
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#EB2323] hover:bg-[#c91919] text-white font-display-hero text-[13px] font-bold tracking-wider uppercase rounded-lg shadow-[0_0_20px_rgba(235,35,35,0.4)] transition-all transform hover:-translate-y-0.5 shrink-0"
          >
            <span>REGISTER NOW</span>
            <span className="font-mono text-[14px]">→</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-[#10203B] flex items-center justify-center border border-[#1E3557] text-[#F8FAFC] hover:text-[#48efef] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[20px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1528]/95 border-b border-[#1E3557] px-6 py-4 flex flex-col gap-3 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveNav(item.label);
                setMobileMenuOpen(false);
              }}
              className="font-display-hero text-[14px] uppercase tracking-wider text-[#F8FAFC] hover:text-[#EB2323] py-1 border-b border-[#1E3557]/30"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

