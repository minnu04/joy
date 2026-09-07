import axios from 'axios';

const API_BASE = '/api';

export const api = {
  // Registrations
  register: async (formData) => {
    const res = await axios.post(`${API_BASE}/registrations`, formData);
    return res.data;
  },

  getAllRegistrations: async (search = '', track = 'all') => {
    const res = await axios.get(`${API_BASE}/registrations`, {
      params: { search, track }
    });
    return res.data;
  },

  getRegistrationByPassId: async (passId) => {
    const res = await axios.get(`${API_BASE}/registrations/${passId}`);
    return res.data;
  },

  // Events & Schedule
  getEvents: async (params = {}) => {
    const res = await axios.get(`${API_BASE}/events`, { params });
    return res.data;
  },

  getSchedule: async (params = {}) => {
    const res = await axios.get(`${API_BASE}/events/schedule`, { params });
    return res.data;
  },

  // Telemetry stats
  getStats: async () => {
    const res = await axios.get(`${API_BASE}/stats`);
    return res.data;
  }
};
