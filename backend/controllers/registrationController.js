import Registration from '../models/Registration.js';
import { isConnectedToMongo } from '../config/db.js';
import { memoryRegistrations } from '../data/seedData.js';

// Helper to determine track info
const categorizeEvent = (eventName) => {
  const day2Events = ['Photography', 'Auto Expo 2026', 'Fashion Styling'];
  const isDay2 = day2Events.some(e => eventName.toLowerCase().includes(e.toLowerCase()));
  return {
    day: isDay2 ? 'Day 2' : 'Day 1',
    trackType: isDay2 ? 'Non-Technical' : 'Technical'
  };
};

// Generate unique JMF26 ID code
const generatePassId = async () => {
  let passId = '';
  let exists = true;
  let attempts = 0;

  while (exists && attempts < 15) {
    attempts++;
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    passId = `JMF26-${randomCode}`;

    if (isConnectedToMongo) {
      const found = await Registration.findOne({ passId });
      if (!found) exists = false;
    } else {
      const found = memoryRegistrations.find(r => r.passId === passId);
      if (!found) exists = false;
    }
  }

  return passId;
};

// @desc Create new participant registration
// @route POST /api/registrations
export const registerParticipant = async (req, res) => {
  try {
    const { name, email, phone, college, event } = req.body;

    if (!name || !email || !phone || !college || !event) {
      return res.status(400).json({
        success: false,
        message: 'All fields (Name, Email, Phone, College, Event) are required.'
      });
    }

    const passId = await generatePassId();
    const { day, trackType } = categorizeEvent(event);

    const newRecord = {
      passId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      college: college.trim(),
      event: event.trim(),
      day,
      trackType,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    if (isConnectedToMongo) {
      const savedDoc = await Registration.create(newRecord);
      return res.status(201).json({
        success: true,
        message: 'Accreditation generated successfully.',
        data: savedDoc
      });
    } else {
      memoryRegistrations.unshift(newRecord);
      return res.status(201).json({
        success: true,
        message: 'Accreditation generated successfully (Saved to server in-memory store).',
        data: newRecord
      });
    }
  } catch (error) {
    console.error('Error creating registration:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error creating registration.',
      error: error.message
    });
  }
};

// @desc Get all registrations (Telemetry view)
// @route GET /api/registrations
export const getRegistrations = async (req, res) => {
  try {
    const { search, track } = req.query;

    if (isConnectedToMongo) {
      let query = {};
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { passId: { $regex: search, $options: 'i' } },
          { college: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } }
        ];
      }
      if (track && track !== 'all') {
        query.event = { $regex: track, $options: 'i' };
      }

      const registrations = await Registration.find(query).sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: registrations.length,
        data: registrations
      });
    } else {
      let filtered = [...memoryRegistrations];
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          r => r.name.toLowerCase().includes(s) ||
               r.passId.toLowerCase().includes(s) ||
               r.college.toLowerCase().includes(s) ||
               r.email.toLowerCase().includes(s)
        );
      }
      if (track && track !== 'all') {
        filtered = filtered.filter(r => r.event.toLowerCase().includes(track.toLowerCase()));
      }

      return res.status(200).json({
        success: true,
        count: filtered.length,
        data: filtered
      });
    }
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error retrieving registrations.',
      error: error.message
    });
  }
};

// @desc Get single registration by Pass ID
// @route GET /api/registrations/:passId
export const getRegistrationByPassId = async (req, res) => {
  try {
    const { passId } = req.params;
    const cleanId = passId.trim().toUpperCase();

    if (isConnectedToMongo) {
      const reg = await Registration.findOne({ passId: { $regex: `^${cleanId}$`, $options: 'i' } });
      if (!reg) {
        return res.status(404).json({
          success: false,
          message: `Pass ID '${cleanId}' not found in the symposium database.`
        });
      }
      return res.status(200).json({ success: true, data: reg });
    } else {
      const reg = memoryRegistrations.find(r => r.passId.toUpperCase() === cleanId);
      if (!reg) {
        return res.status(404).json({
          success: false,
          message: `Pass ID '${cleanId}' not found in the symposium database.`
        });
      }
      return res.status(200).json({ success: true, data: reg });
    }
  } catch (error) {
    console.error('Error finding pass:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error validating pass.',
      error: error.message
    });
  }
};
