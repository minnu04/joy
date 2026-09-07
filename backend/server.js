import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connectDB } from './config/db.js';
import registrationRoutes from './routes/registrationRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import statsRoutes from './routes/statsRoutes.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API Routes
app.use('/api/registrations', registrationRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/stats', statsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    service: 'JoyMech ForgeX 2026 Telemetry Backend',
    timestamp: new Date().toISOString()
  });
});

// Root fallback route
app.get('/', (req, res) => {
  res.send('🏎️ JoyMech ForgeX 2026 API Server is running.');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🏁 [Server] JoyMech ForgeX 2026 API running on http://localhost:${PORT}`);
});
