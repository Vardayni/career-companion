import { useState } from 'react';
import { api } from '../../lib/apiClient';

export default function Interview() {
  const [role, setRole] = useState('Product Consultant');
  const [session, setSession] = useState(null);

  async function createMock() {
    const { data } = await api.post('/api/interview/mock', { role, provider:'claude' });
    setSession(data);
  }

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <input className="input" value={role} onChange={e=>setRole(e.target.value)} />
        <button className="btn" onClick={createMock}>Generate Questions</button>
      </div>
      {session && (
        <div className="space-y-3">
          {session.questions.map((q, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="font-medium">{q}</div>
              <textarea className="w-full h-24 border rounded mt-2 p-2" placeholder="Your answer..."/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}