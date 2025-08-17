import { Router } from 'express';
import Resume from '../models/Resume.js';
import { generateText } from '../services/ai/index.js';
const router = Router();

router.post('/score', async (req, res) => {
  const { content, provider = 'openai', targetRole } = req.body;
  const prompt = `Score this resume for the role "${targetRole}". Provide a score /10 and 5 actionable tips. Resume JSON: ${JSON.stringify(content)}`;
  const text = await generateText(provider, prompt);
  const parsed = { score: 7, tips: text.split('\n').filter(Boolean).slice(0,5) }; // naive parse
  const doc = await Resume.create({ content, score: parsed.score, tips: parsed.tips });
  res.json(doc);
});

export default router;