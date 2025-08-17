import Tracker from '../modules/tracker/Tracker.jsx';
import Resume from '../modules/resume/Resume.jsx';
import Interview from '../modules/interview/Interview.jsx';
import Motivation from '../modules/motivation/Motivation.jsx';
import { useState } from 'react';

export default function Dashboard() {
  const [tab, setTab] = useState('tracker');
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
      <aside className="bg-white border-r p-4">
        {['tracker','resume','interview','motivation'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`block w-full text-left px-3 py-2 rounded mb-2 ${tab===t?'bg-indigo text-white':'hover:bg-gray-100'}`}>
            {t.charAt(0).toUpperCase()+t.slice(1)}
          </button>
        ))}
        <a href="/pay" className="block mt-4 px-3 py-2 rounded bg-teal text-white text-center">Go Pro</a>
      </aside>
      <main className="p-6 bg-gray-50">
        {tab==='tracker' && <Tracker />}
        {tab==='resume' && <Resume />}
        {tab==='interview' && <Interview />}
        {tab==='motivation' && <Motivation />}
      </main>
    </div>
  );
}