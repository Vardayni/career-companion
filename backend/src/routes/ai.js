import { Router } from 'express';
import { generateText } from '../services/ai/index.js';
const router = Router();

router.post('/generate', async (req, res) => {
  try {
    const { provider, prompt } = req.body;
    const text = await generateText(provider, prompt);
    res.json({ text });
  } catch (e) {
    res.status(500).json({ error: 'AI generation failed' });
  }
});

export default router;