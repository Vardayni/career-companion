import { useEffect, useState } from 'react';
import { api } from '../../lib/apiClient';

export default function Motivation() {
  const [quote, setQuote] = useState('');
  useEffect(() => { api.get('/api/motivation/quote').then(r=>setQuote(r.data.quote)); }, []);
  return (
    <div className="bg-white rounded p-6 shadow text-xl text-center italic">
      {quote || 'Loading…'}
    </div>
  );
}