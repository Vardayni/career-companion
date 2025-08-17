import { openaiComplete } from './openai.js';
import { geminiComplete } from './gemini.js';
import { claudeComplete } from './claude.js';

export async function generateText(provider, prompt) {
  switch ((provider || 'openai').toLowerCase()) {
    case 'gemini': return geminiComplete(prompt);
    case 'claude': return claudeComplete(prompt);
    default: return openaiComplete(prompt);
  }
}