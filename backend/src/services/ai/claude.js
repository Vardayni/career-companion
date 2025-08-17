import Anthropic from '@anthropic-ai/sdk';
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function claudeComplete(prompt) {
  const res = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 800,
    messages: [{ role: 'user', content: prompt }]
  });
  return res.content?.[0]?.text || '';
}