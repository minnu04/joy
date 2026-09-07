import { initialEvents, initialSchedule } from '../data/seedData.js';

// @desc Get all symposium events & tracks
// @route GET /api/events
export const getEvents = async (req, res) => {
  try {
    const { day, track, venue } = req.query;
    let filteredEvents = [...initialEvents];

    if (day && day !== 'all') {
      filteredEvents = filteredEvents.filter(e => e.day === day);
    }
    if (track && track !== 'all') {
      filteredEvents = filteredEvents.filter(e => e.track === track);
    }
    if (venue && venue !== 'all') {
      filteredEvents = filteredEvents.filter(e => e.venue === venue);
    }

    return res.status(200).json({
      success: true,
      count: filteredEvents.length,
      data: filteredEvents
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get 48-Hour Itinerary Schedule
// @route GET /api/events/schedule
export const getSchedule = async (req, res) => {
  try {
    const { day, track, venue } = req.query;

    let day1 = [...initialSchedule.day1];
    let day2 = [...initialSchedule.day2];

    if (track && track !== 'all') {
      day1 = day1.filter(item => item.track === 'all' || item.track === track);
      day2 = day2.filter(item => item.track === 'all' || item.track === track);
    }
    if (venue && venue !== 'all') {
      day1 = day1.filter(item => item.venueType === 'all' || item.venueType === venue);
      day2 = day2.filter(item => item.venueType === 'all' || item.venueType === venue);
    }

    return res.status(200).json({
      success: true,
      data: {
        day1,
        day2
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
