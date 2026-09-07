import React, { useState } from 'react';
import { api } from '../services/api';

export default function PassLookupModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const clean = query.trim();
      const res = await api.getRegistrationByPassId(clean);
      if (res.success && res.data) {
        setResult(res.data);
      } else {
        setError(`Pass ID "${clean}" was not found.`);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Pass not found or database offline.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-surface-deep border border-border-subtle rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-space-md bg-surface-container-high border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
            <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase font-bold">
              Pass Verification Terminal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-space-lg space-y-space-md">
          <p className="font-body-sm text-text-secondary">
            Enter an assigned Pass ID (e.g., <strong className="text-electric-cyan font-mono">JMF26-9842</strong>) to verify accreditation and retrieve real-time status.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. JMF26-9842"
              value={query}
              onChange={(e) => setQuery(e.target.value.toUpperCase())}
              className="flex-1 px-3 py-2 bg-surface-container-lowest border border-border-subtle focus:border-electric-cyan rounded font-mono text-text-primary uppercase focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-space-md py-2 bg-primary text-on-primary font-bold rounded uppercase text-body-sm shadow hover:bg-electric-cyan transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? 'Querying...' : 'Verify'}
            </button>
          </form>

          {error && (
            <div className="p-3 bg-corsa-red/10 border border-corsa-red/40 rounded text-corsa-red text-body-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">warning</span>
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div className="p-space-md bg-surface-container rounded-xl border border-electric-cyan/40 space-y-2">
              <div className="flex items-center justify-between border-b border-border-subtle/60 pb-2">
                <span className="font-mono text-electric-cyan font-bold text-lg">{result.passId}</span>
                <span className="px-2 py-0.5 bg-telemetry-emerald/20 text-telemetry-emerald font-label-badge rounded font-bold uppercase">
                  {result.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-body-sm pt-1">
                <div>
                  <span className="text-text-muted text-label-badge uppercase">Participant:</span>
                  <div className="font-bold text-text-primary">{result.name}</div>
                </div>
                <div>
                  <span className="text-text-muted text-label-badge uppercase">Track:</span>
                  <div className="font-bold text-electric-cyan">{result.event}</div>
                </div>
                <div className="col-span-2">
                  <span className="text-text-muted text-label-badge uppercase">Institution:</span>
                  <div className="text-text-secondary">{result.college}</div>
                </div>
                <div className="col-span-2 text-label-badge text-text-muted font-mono">
                  Accreditation Date: {new Date(result.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-space-md bg-surface-container-lowest border-t border-border-subtle flex justify-end">
          <button
            onClick={onClose}
            className="px-space-md py-1.5 bg-surface-container hover:bg-surface-raised text-text-primary rounded font-label-badge uppercase cursor-pointer"
          >
            Close Terminal
          </button>
        </div>

      </div>
    </div>
  );
}
