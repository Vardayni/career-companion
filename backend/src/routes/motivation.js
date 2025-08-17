import { Router } from 'express';
import { generateText } from '../services/ai/index.js';
const router = Router();

router.get('/quote', async (_req, res) => {
  const text = await generateText('gemini', 'Give a short, original motivational quote for job seekers (<= 20 words).');
  res.json({ quote: text.trim() });
});

export default router;