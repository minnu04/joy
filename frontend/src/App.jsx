import React, { useState, useEffect } from 'react';
import { api } from './services/api';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventTracks from './components/EventTracks';
import ScheduleTimeline from './components/ScheduleTimeline';
import Keynotes from './components/Keynotes';
import Gallery from './components/Gallery';
import RegistrationTerminal from './components/RegistrationTerminal';
import OrganizingRoster from './components/OrganizingRoster';
import Footer from './components/Footer';

export default function App() {
  const [activeDayTab, setActiveDayTab] = useState('day1');

  // Backend Data State
  const [events, setEvents] = useState([]);
  const [schedule, setSchedule] = useState({ day1: [], day2: [] });
  const [stats, setStats] = useState(null);
  const [preSelectedTrack, setPreSelectedTrack] = useState('');

  useEffect(() => {
    fetchEventsAndSchedule();
    fetchStats();
  }, []);

  const fetchEventsAndSchedule = async () => {
    try {
      const [eventsRes, schedRes] = await Promise.all([
        api.getEvents(),
        api.getSchedule()
      ]);

      if (eventsRes.success) {
        setEvents(eventsRes.data);
      }
      if (schedRes.success) {
        setSchedule(schedRes.data);
      }
    } catch (err) {
      console.error('Error fetching symposium data:', err);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await api.getStats();
      if (res.success) {
        setStats(res.data);
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const handleSelectTrackForRegistration = (trackName) => {
    setPreSelectedTrack(trackName);
    const regSection = document.getElementById('quick-register');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegistrationSuccess = () => {
    fetchStats();
  };

  return (
    <div className="min-h-screen bg-chassis-dark text-on-surface flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Streamlined Navbar */}
      <Navbar />

      {/* Main Assembly mapped 1:1 to Navbar */}
      <main className="w-full pt-16 bg-chassis-dark flex-1">
        {/* 1. HOME */}
        <Hero targetDateString={stats?.targetDate || '2026-09-21T09:00:00+05:30'} />

        {/* 2. ABOUT */}
        <About />

        {/* 3. EVENTS */}
        <EventTracks
          events={events}
          activeDayTab={activeDayTab}
          setActiveDayTab={setActiveDayTab}
          onSelectTrackForRegistration={handleSelectTrackForRegistration}
        />

        {/* 4. SCHEDULE */}
        <ScheduleTimeline schedule={schedule} />

        {/* 5. SPEAKERS */}
        <Keynotes />

        {/* 6. GALLERY */}
        <Gallery />

        {/* 7. REGISTRATION */}
        <RegistrationTerminal
          preSelectedTrack={preSelectedTrack}
          onRegistrationSuccess={handleRegistrationSuccess}
        />

        {/* 8. CONTACT */}
        <OrganizingRoster />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
