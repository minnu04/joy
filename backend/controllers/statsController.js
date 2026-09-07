import Registration from '../models/Registration.js';
import { isConnectedToMongo } from '../config/db.js';
import { memoryRegistrations } from '../data/seedData.js';

// @desc Get real-time symposium telemetry stats
// @route GET /api/stats
export const getTelemetryStats = async (req, res) => {
  try {
    let total = 0;
    let technicalCount = 0;
    let nonTechnicalCount = 0;
    let eventBreakdown = {};

    if (isConnectedToMongo) {
      total = await Registration.countDocuments();
      technicalCount = await Registration.countDocuments({ trackType: 'Technical' });
      nonTechnicalCount = await Registration.countDocuments({ trackType: 'Non-Technical' });

      const breakdownAgg = await Registration.aggregate([
        { $group: { _id: '$event', count: { $sum: 1 } } }
      ]);
      breakdownAgg.forEach(b => {
        eventBreakdown[b._id] = b.count;
      });
    } else {
      total = memoryRegistrations.length;
      technicalCount = memoryRegistrations.filter(r => r.trackType === 'Technical').length;
      nonTechnicalCount = memoryRegistrations.filter(r => r.trackType === 'Non-Technical').length;
      memoryRegistrations.forEach(r => {
        eventBreakdown[r.event] = (eventBreakdown[r.event] || 0) + 1;
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        totalRegistrations: total,
        technicalCount,
        nonTechnicalCount,
        eventBreakdown,
        databaseMode: isConnectedToMongo ? 'MongoDB Active' : 'Resilient In-Memory Mode',
        telemetryStatus: 'NOMINAL',
        targetDate: '2026-09-21T09:00:00+05:30',
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
