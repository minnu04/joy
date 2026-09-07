import express from 'express';
import { getTelemetryStats } from '../controllers/statsController.js';

const router = express.Router();

router.get('/', getTelemetryStats);

export default router;
