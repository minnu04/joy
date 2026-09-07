import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import confetti from 'canvas-confetti';
import ReceiptModal from './ReceiptModal';

export default function RegistrationTerminal({ preSelectedTrack = '', onRegistrationSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    event: preSelectedTrack || '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [receiptModalOpen, setReceiptModalOpen] = useState(false);
  
  // Current active pass preview
  const [currentPass, setCurrentPass] = useState({
    passId: 'JMF26-9842',
    name: 'Aravind S. Varma',
    email: 'aravind.varma@joyuniv.edu',
    phone: '+91 98765 43210',
    event: 'CAD Modelling',
    college: 'Joy University School of Eng.',
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  });

  useEffect(() => {
    if (preSelectedTrack) {
      setFormData(prev => ({ ...prev, event: preSelectedTrack }));
    }
  }, [preSelectedTrack]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const response = await api.register(formData);
      if (response.success && response.data) {
        const pass = {
          ...response.data,
          email: formData.email,
          phone: formData.phone,
        };
        setCurrentPass(pass);
        setReceiptModalOpen(true);
        setSuccessMsg(`Accreditation Confirmed! Pass Token: ${pass.passId}`);
        
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });

        // Clear form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          event: '',
        });

        if (onRegistrationSuccess) {
          onRegistrationSuccess(pass);
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || 'Failed to submit registration. Please check server connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-chassis-dark text-on-surface py-space-3xl border-t border-border-subtle/30" id="quick-register">
      <div className="max-w-[1440px] mx-auto px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          
          {/* Registration Form Panel */}
          <div className="lg:col-span-7 bg-surface-deep p-space-2xl rounded-xl border border-border-subtle shadow-2xl">
            <div className="flex items-center justify-between mb-space-lg">
              <div>
                <span className="font-label-badge text-label-badge uppercase text-electric-cyan font-bold tracking-wider">
                  SECURE REGISTRATION GATEWAY
                </span>
                <h3 className="font-headline-lg text-headline-md text-text-primary font-bold uppercase mt-1">
                  Participant Accreditation
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-surface-container font-mono text-label-badge text-telemetry-emerald rounded flex items-center gap-1.5 border border-telemetry-emerald/30">
                <span className="w-1.5 h-1.5 rounded-full bg-telemetry-emerald animate-pulse"></span>
                FULL-STACK DB SYNC ACTIVE
              </span>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded bg-corsa-red/20 border border-corsa-red/40 text-corsa-red text-body-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">error</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="mb-4 p-3 rounded bg-telemetry-emerald/20 border border-telemetry-emerald/40 text-telemetry-emerald text-body-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>{successMsg}</span>
              </div>
            )}

            <form className="space-y-space-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="font-label-telemetry text-label-telemetry uppercase text-text-secondary font-semibold" htmlFor="fullName">
                    Full Name *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-[18px]">person</span>
                    <input
                      className="w-full pl-10 pr-3 py-2.5 bg-surface-container-lowest text-text-primary placeholder:text-text-muted rounded font-body-md border border-border-subtle focus:border-electric-cyan focus:outline-none focus:bg-surface-container-high transition-colors"
                      id="fullName"
                      name="name"
                      placeholder="e.g. Aravind S. Varma"
                      required
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-telemetry text-label-telemetry uppercase text-text-secondary font-semibold" htmlFor="emailAddr">
                    Institutional / Personal Email *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-[18px]">mail</span>
                    <input
                      className="w-full pl-10 pr-3 py-2.5 bg-surface-container-lowest text-text-primary placeholder:text-text-muted rounded font-body-md border border-border-subtle focus:border-electric-cyan focus:outline-none focus:bg-surface-container-high transition-colors"
                      id="emailAddr"
                      name="email"
                      placeholder="name@domain.edu"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="font-label-telemetry text-label-telemetry uppercase text-text-secondary font-semibold" htmlFor="phoneNumber">
                    Phone Number (+91) *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-[18px]">call</span>
                    <input
                      className="w-full pl-10 pr-3 py-2.5 bg-surface-container-lowest text-text-primary placeholder:text-text-muted rounded font-body-md border border-border-subtle focus:border-electric-cyan focus:outline-none focus:bg-surface-container-high transition-colors"
                      id="phoneNumber"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-telemetry text-label-telemetry uppercase text-text-secondary font-semibold" htmlFor="collegeName">
                    College / University Name *
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-[18px]">account_balance</span>
                    <input
                      className="w-full pl-10 pr-3 py-2.5 bg-surface-container-lowest text-text-primary placeholder:text-text-muted rounded font-body-md border border-border-subtle focus:border-electric-cyan focus:outline-none focus:bg-surface-container-high transition-colors"
                      id="collegeName"
                      name="college"
                      placeholder="e.g. Joy University"
                      required
                      type="text"
                      value={formData.college}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-telemetry text-label-telemetry uppercase text-text-secondary font-semibold" htmlFor="eventSelect">
                  Select Symposium Track *
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-3 text-text-muted text-[18px]">emoji_events</span>
                  <select
                    className="w-full pl-10 pr-3 py-2.5 bg-surface-container-lowest text-text-primary rounded font-body-md border border-border-subtle focus:border-electric-cyan focus:outline-none focus:bg-surface-container-high transition-colors cursor-pointer"
                    id="eventSelect"
                    name="event"
                    required
                    value={formData.event}
                    onChange={handleChange}
                  >
                    <option disabled value="">Select an official event arena...</option>
                    <optgroup label="Technical Events (Day 1 - 21/09/2026)">
                      <option value="Paper/Poster Presentation">Paper/Poster Presentation (Aerodynamics / CFD)</option>
                      <option value="CAD Modelling">CAD Modelling (On-Spot Surfacing &amp; CAD Desk)</option>
                      <option value="Technical Quiz">Technical Quiz (Emerging Technologies &amp; AI)</option>
                    </optgroup>
                    <optgroup label="Non-Technical Events (Day 2 - 22/09/2026)">
                      <option value="Photography">Photography (Automotive &amp; Technical Aesthetics)</option>
                      <option value="Auto Expo 2026">Auto Expo 2026 (Car &amp; Superbike Exhibition)</option>
                      <option value="Fashion Styling">Fashion Styling (Themed &amp; Sustainable Styling)</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="pt-space-xs">
                <button
                  disabled={loading}
                  className="w-full py-space-sm bg-primary-container hover:bg-surface-tint disabled:opacity-50 text-on-primary-container font-headline-sm text-title-card font-bold uppercase rounded tracking-wider shadow-[0_0_20px_rgba(0,210,211,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  type="submit"
                >
                  <span>{loading ? 'Transmitting To Database...' : 'Submit Registration & Generate Pass'}</span>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </div>

              <p className="font-label-telemetry text-label-telemetry text-text-muted text-center pt-1">
                Records are validated &amp; persisted directly to the MongoDB backend. Instant pass issued on the right.
              </p>
            </form>
          </div>

          {/* Generated Pass Live Preview Terminal */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-deep p-space-xl rounded-xl border border-border-subtle shadow-2xl relative overflow-hidden">
              
              {/* Header bar */}
              <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-high px-space-md py-space-xs rounded border border-border-subtle/50">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-body-sm font-bold text-text-primary uppercase">Pass Telemetry</span>
                  <span className="font-label-badge text-label-badge text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/30">
                    AUTHENTICATED
                  </span>
                </div>
                <span className="font-mono text-label-badge text-text-muted">JOYMECH // FORGEX</span>
              </div>

              {/* Pass Graphic Visual Representation */}
              <div className="p-space-lg bg-surface-container-lowest rounded-lg border border-border-subtle shadow-inner flex flex-col gap-space-md relative overflow-hidden" id="printable-pass">
                <div className="absolute -right-8 -top-8 w-28 h-28 bg-electric-cyan/10 rounded-full blur-xl pointer-events-none"></div>

                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase tracking-widest">
                      OFFICIAL ENTRY TOKEN
                    </span>
                    <div className="font-display-hero text-headline-md text-primary font-bold tracking-wider font-mono">
                      {currentPass.passId}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-surface-container rounded p-1.5 flex items-center justify-center border border-border-subtle text-telemetry-emerald">
                    <span className="material-symbols-outlined text-[28px]">qr_code_2</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-body-sm">
                  <div>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">Participant</span>
                    <div className="text-text-primary font-bold truncate">{currentPass.name}</div>
                  </div>
                  <div>
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">Track Arena</span>
                    <div className="text-electric-cyan font-bold truncate">{currentPass.event}</div>
                  </div>
                  <div className="col-span-2">
                    <span className="font-label-badge text-label-badge text-text-muted uppercase">Institution</span>
                    <div className="text-text-secondary truncate">{currentPass.college}</div>
                  </div>
                </div>

                <div className="pt-space-xs flex items-center justify-between text-label-badge text-text-muted font-mono bg-surface-container/50 px-2 py-1.5 rounded border border-border-subtle/30">
                  <span>STATUS: <strong className="text-telemetry-emerald">{currentPass.status || 'CONFIRMED'}</strong></span>
                  <span className="text-text-secondary">GRID ACCESS: GRANTED</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-space-md flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setReceiptModalOpen(true)}
                  className="flex-1 py-2.5 bg-corsa-red hover:bg-[#c91919] text-white font-label-telemetry text-label-telemetry uppercase font-bold rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(235,35,35,0.4)]"
                >
                  <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                  <span>View / Download Receipt</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="py-2.5 px-4 bg-surface-container hover:bg-surface-raised border border-border-subtle text-text-primary font-label-telemetry text-label-telemetry uppercase font-bold rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  <span>Print Pass</span>
                </button>
              </div>

              {/* Hotline Details */}
              <div className="mt-space-lg flex flex-col gap-space-xs font-body-sm text-text-secondary border-t border-border-subtle/50 pt-space-md">
                <span className="font-label-badge text-label-badge text-text-muted uppercase tracking-wider">Registration Inquiries:</span>
                <div className="flex items-center justify-between text-body-sm">
                  <span>Primary Desk:</span>
                  <strong className="text-text-primary font-mono">+91 89770 91574</strong>
                </div>
                <div className="flex items-center justify-between text-body-sm">
                  <span>Logistics Helpline:</span>
                  <strong className="text-text-primary font-mono">+91 93458 74088</strong>
                </div>
                <div className="flex items-center justify-between text-body-sm">
                  <span>Direct Mailbox:</span>
                  <strong className="text-primary font-mono">Joymechforgex2026@gmail.com</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Official Receipt Modal (Printable & Downloadable) */}
      <ReceiptModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
        passData={currentPass}
      />
    </section>
  );
}
