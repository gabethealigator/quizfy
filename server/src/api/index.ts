import express from 'express';
import spotify from './spotify';
import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/health', (_req, res) => {
  res.json({
    message: 'API IS UP AND RUNNING BOOOOOYS',
  });
});

router.use('/spotify', spotify);

export default router;
