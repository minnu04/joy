import express from 'express';
import { getEvents, getSchedule } from '../controllers/eventController.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/schedule', getSchedule);

export default router;
