import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bodyParser from 'body-parser';

import aiRouter from './routes/ai.js';
import driveRouter from './routes/drives.js';
import resumeRouter from './routes/resume.js';
import interviewRouter from './routes/interview.js';
import motivationRouter from './routes/motivation.js';
import paymentsRouter, { paymentsWebhook } from './routes/payments.js';

const app = express();

// Raw body for Razorpay webhook signature verification
app.use('/api/payments/webhook', bodyParser.raw({ type: 'application/json' }));

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/ai', aiRouter);
app.use('/api/drives', driveRouter);
app.use('/api/resume', resumeRouter);
app.use('/api/interview', interviewRouter);
app.use('/api/motivation', motivationRouter);
app.post('/api/payments/webhook', paymentsWebhook);
app.use('/api/payments', paymentsRouter);

// Health
app.get('/health', (_, res) => res.json({ ok: true }));

// DB + start
(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(process.env.PORT || 8080, () =>
    console.log('API running on', process.env.PORT || 8080)
  );
})();