import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function geminiComplete(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const res = await model.generateContent(prompt);
  return res.response.text();
}