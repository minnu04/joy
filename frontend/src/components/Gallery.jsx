import React, { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      title: 'Aerodynamic Scale Model',
      tag: 'CFD Lab',
      src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      location: 'Subsonic Wind Tunnel Lab 02, SET Campus',
      description: 'High-fidelity 1:4 scale wind tunnel model undergoing boundary layer and vortex shedding diagnostics. Utilizes digital smoke flow visualization and multi-axis load cells to calculate real-time drag (Cd) and downforce (Cl) coefficients under high-speed simulation.',
      highlights: ['Boundary Layer Flow Telemetry', '1:4 Scale Aerodynamic Geometry', 'Ansys Fluent Mesh Validation', 'Multi-Axis Load Cell Array']
    },
    {
      title: 'Formula Chassis Prototyping',
      tag: 'Auto Expo',
      src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      location: 'Fabrication & Assembly Pavilion, Joy University',
      description: 'Custom lightweight tubular spaceframe chassis engineered for Formula Student endurance trials. Features optimized torsional rigidity, carbon-fiber crash box integration, and double-wishbone pushrod suspension geometry.',
      highlights: ['AISI 4130 Chromoly Steel Frame', 'FEA Torsional Rigidity Analysis', 'Custom Pushrod Kinematics', 'Direct Rack-and-Pinion Steering']
    },
    {
      title: 'Parametric CAD Workstations',
      tag: 'Sim Bay 04',
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      location: 'Design & Simulation Laboratory, SET Campus',
      description: 'High-compute GPU workstations executing generative design algorithms and finite element structural simulations for aerospace turbine blades and lightweight automotive uprights.',
      highlights: ['Siemens NX & CATIA V6 Suites', 'Generative Topology Optimization', 'Non-Linear Von Mises Stress Analysis', 'Direct CAM Toolpath Export']
    },
    {
      title: 'Superbike Tuning & Exhaust',
      tag: 'Motorsport Arena',
      src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      location: 'Dyno Tuning Arena, Pit Bay 01',
      description: 'Performance dynamometer calibration for high-output electric and ICE motorcycle powertrains. Measures torque curves, thermal dissipation, and backpressure acoustics under simulated track loads.',
      highlights: ['Rolling Chassis Dynamometer', 'ECU Fuel Map & Timing Calibration', 'Thermal Dissipation Mapping', 'Acoustic Backpressure Profiling']
    },
    {
      title: 'Robotics & AI Powertrain',
      tag: 'Tech Pavilion',
      src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      location: 'Autonomous Systems & Robotics Center, SET Campus',
      description: 'Autonomous ground vehicle perception stack and battery management test bench. Showcases humanoid assistance, ROS2-driven LiDAR SLAM navigation, and regenerative braking control loops.',
      highlights: ['ROS2 Real-time Perception', '3D LiDAR SLAM Navigation', 'BMS Thermal Balancing Loop', 'Autonomous Trajectory Planning']
    },
    {
      title: 'Championship Valedictory',
      tag: 'Main Auditorium',
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      location: 'SET Grand Hall & Auditorium',
      description: 'The culminating awards ceremony where ₹1,00,000+ in grand cash prizes, trophies, and industrial research internships are bestowed upon symposium winners across technical design and racing challenges.',
      highlights: ['₹1,00,000+ Total Prize Pool', 'Industry Internship Placements', 'Accredited Certificate Handover', 'Valedictory Keynote Address']
    },
  ];

  return (
    <section className="w-full bg-chassis-dark text-on-surface py-space-3xl border-t border-border-subtle/30" id="gallery">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-corsa-red animate-pulse"></span>
              <span className="font-label-badge text-label-badge text-corsa-red uppercase tracking-widest font-bold">
                Visual Telemetry
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-text-primary font-bold uppercase tracking-tight">
              Symposium Gallery
            </h2>
          </div>
          <div className="font-label-telemetry text-label-telemetry text-text-secondary">
            <span>SHOWCASE OF MOTORSPORT, CFD, &amp; PROTOTYPE ARENAS • CLICK ANY CARD TO INSPECT</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {images.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl bg-surface-deep border border-border-subtle aspect-[16/10] shadow-xl hover:border-electric-cyan/60 transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chassis-dark via-chassis-dark/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-space-md flex items-end justify-between">
                <div>
                  <span className="px-2 py-0.5 rounded font-label-badge text-[10px] font-mono uppercase bg-corsa-red/80 text-white">
                    {item.tag}
                  </span>
                  <h4 className="font-headline-sm text-title-card text-text-primary font-bold uppercase mt-1">
                    {item.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(item);
                  }}
                  title="View Arena Information"
                  className="w-9 h-9 rounded-full bg-surface-deep/90 border border-electric-cyan/50 flex items-center justify-center text-electric-cyan opacity-90 group-hover:opacity-100 group-hover:scale-110 hover:bg-electric-cyan hover:text-chassis-dark transition-all cursor-pointer shadow-lg"
                >
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Photo Information Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="w-full max-w-3xl bg-surface-deep border border-electric-cyan/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Control Bar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-chassis-dark border-b border-border-subtle shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse"></span>
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-electric-cyan">
                  Exhibit Telemetry /// {selectedImage.tag}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-surface-card hover:bg-corsa-red text-text-secondary hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Image Banner */}
              <div className="relative rounded-xl overflow-hidden border border-border-subtle aspect-[16/9] max-h-[320px] bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-corsa-red text-white text-xs font-mono font-bold uppercase rounded-md shadow-md">
                    {selectedImage.tag}
                  </span>
                </div>
              </div>

              {/* Title & Location */}
              <div>
                <h3 className="font-display-hero text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center gap-1.5 text-text-secondary text-xs font-mono mt-1">
                  <span className="material-symbols-outlined text-[16px] text-corsa-red">location_on</span>
                  <span>{selectedImage.location}</span>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="bg-chassis-dark/70 border border-border-subtle p-4 rounded-xl">
                <div className="text-[11px] font-mono text-electric-cyan uppercase font-bold tracking-wider mb-1.5">
                  Arena Overview &amp; Specifications
                </div>
                <p className="text-sm text-text-primary leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div>
                <div className="text-xs font-mono text-text-secondary uppercase font-bold tracking-wider mb-2.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-electric-cyan">verified</span>
                  <span>Key Technical Highlights &amp; Equipment</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedImage.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-card border border-border-subtle text-xs text-on-surface"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-chassis-dark border-t border-border-subtle flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-text-secondary">
                Joy University • JoyMech ForgeX 2026
              </span>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-1.5 bg-corsa-red hover:bg-[#c91919] text-white text-xs font-bold uppercase rounded font-mono transition-colors cursor-pointer"
              >
                Close Exhibit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

