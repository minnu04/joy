import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function LiveTelemetryModal({ isOpen, onClose }) {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen, search, selectedTrack]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await api.getAllRegistrations(search, selectedTrack);
      if (res.success && res.data) {
        setRegistrations(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl bg-surface-deep border border-border-subtle rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-space-md bg-surface-container-high border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-telemetry-emerald animate-pulse"></span>
            <h3 className="font-headline-sm text-headline-sm text-text-primary uppercase font-bold">
              Symposium Live Telemetry Console
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-space-md bg-surface-container border-b border-border-subtle flex flex-col sm:flex-row gap-2 justify-between items-center">
          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-text-muted text-[18px]">search</span>
            <input
              type="text"
              placeholder="Search by name, pass ID, college..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border border-border-subtle focus:border-electric-cyan rounded font-body-sm text-text-primary focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="font-label-telemetry text-text-secondary text-label-telemetry">Filter:</span>
            <select
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
              className="px-3 py-2 bg-surface-container-lowest border border-border-subtle rounded font-body-sm text-text-primary focus:outline-none"
            >
              <option value="all">All Tracks</option>
              <option value="Paper">Paper/Poster</option>
              <option value="CAD">CAD Modelling</option>
              <option value="Quiz">Technical Quiz</option>
              <option value="Photography">Photography</option>
              <option value="Expo">Auto Expo</option>
              <option value="Fashion">Fashion Styling</option>
            </select>
          </div>
        </div>

        {/* Table View */}
        <div className="flex-1 overflow-y-auto p-space-md">
          {loading ? (
            <div className="p-8 text-center text-text-muted font-mono">Querying database records...</div>
          ) : registrations.length === 0 ? (
            <div className="p-8 text-center text-text-muted">No registration records found for this query.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-body-sm border-collapse">
                <thead>
                  <tr className="border-b border-border-subtle text-text-muted font-label-telemetry uppercase text-[11px]">
                    <th className="py-2 px-3">Pass ID</th>
                    <th className="py-2 px-3">Participant</th>
                    <th className="py-2 px-3">Track Event</th>
                    <th className="py-2 px-3">Institution</th>
                    <th className="py-2 px-3">Contact</th>
                    <th className="py-2 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle/50">
                  {registrations.map((reg) => (
                    <tr key={reg.passId || reg._id} className="hover:bg-surface-container/60 transition-colors">
                      <td className="py-2.5 px-3 font-mono text-electric-cyan font-bold whitespace-nowrap">
                        {reg.passId}
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-text-primary">
                        {reg.name}
                      </td>
                      <td className="py-2.5 px-3 text-text-secondary whitespace-nowrap">
                        {reg.event}
                      </td>
                      <td className="py-2.5 px-3 text-text-muted truncate max-w-[150px]">
                        {reg.college}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-[12px] text-text-muted whitespace-nowrap">
                        {reg.phone}
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded font-label-badge text-telemetry-emerald bg-telemetry-emerald/10 font-bold">
                          {reg.status || 'Confirmed'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-space-md bg-surface-container-lowest border-t border-border-subtle flex items-center justify-between">
          <span className="font-label-telemetry text-label-telemetry text-text-muted">
            Total Displayed: <strong className="text-text-primary font-mono">{registrations.length} Records</strong>
          </span>
          <button
            onClick={onClose}
            className="px-space-md py-1.5 bg-surface-container hover:bg-surface-raised text-text-primary rounded font-label-badge uppercase cursor-pointer"
          >
            Close Feed
          </button>
        </div>

      </div>
    </div>
  );
}
