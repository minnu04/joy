import express from 'express';
import {
  registerParticipant,
  getRegistrations,
  getRegistrationByPassId
} from '../controllers/registrationController.js';

const router = express.Router();

router.route('/')
  .post(registerParticipant)
  .get(getRegistrations);

router.route('/:passId')
  .get(getRegistrationByPassId);

export default router;
