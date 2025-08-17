import { useState } from 'react';
import { api } from '../../lib/apiClient';

export default function Resume() {
  const [content, setContent] = useState({ name:'Avinash', summary:'...' });
  const [result, setResult] = useState(null);
  const [provider, setProvider] = useState('openai');

  async function score() {
    const { data } = await api.post('/api/resume/score', { content, provider, targetRole:'Product Consultant' });
    setResult(data);
  }

  return (
    <div>
      <div className="flex gap-3 items-center mb-4">
        <select value={provider} onChange={e=>setProvider(e.target.value)} className="input">
          <option value="openai">OpenAI</option>
          <option value="gemini">Gemini</option>
          <option value="claude">Claude</option>
        </select>
        <button onClick={score} className="btn">Score Resume</button>
      </div>
      <textarea className="w-full h-40 p-3 border rounded"
        value={JSON.stringify(content, null, 2)}
        onChange={e=>setContent(JSON.parse(e.target.value))}/>
      {result && (
        <div className="mt-4 bg-white rounded p-4 shadow">
          <div className="font-semibold">Score: {result.score}/10</div>
          <ul className="list-disc ml-6 mt-2">
            {result.tips.map((t,i)=><li key={i}>{t}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}