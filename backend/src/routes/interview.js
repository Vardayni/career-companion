import { Router } from 'express';
import InterviewSession from '../models/InterviewSession.js';
import { generateText } from '../services/ai/index.js';
const router = Router();

router.post('/mock', async (req, res) => {
  const { role, provider = 'openai' } = req.body;
  const prompt = `Generate 8 interview questions for the role: ${role}. Include behavioral and technical.`;
  const questionsText = await generateText(provider, prompt);
  const questions = questionsText.split('\n').filter(q => q.trim()).slice(0,8);
  const session = await InterviewSession.create({ role, questions, answers: [] });
  res.json(session);
});

router.post('/:id/answer', async (req, res) => {
  const { id } = req.params;
  const { answers } = req.body;
  const session = await InterviewSession.findByIdAndUpdate(id, { answers }, { new: true });
  res.json(session);
});

export default router;