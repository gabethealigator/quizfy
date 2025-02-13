import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();

const app = express();

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-production-client-domain.com'
    : 'http://localhost:5173',
  credentials: true,
};

app.use(morgan('dev'));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
