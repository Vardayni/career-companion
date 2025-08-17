import { useState, useEffect } from 'react';
import { getJobs } from './services/jobService';
import './App.css';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getJobs();
        setJobs(Array.isArray(data) ? data : []);
      } catch (err) {
        setError('Unable to load jobs — check backend/API URL.');
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Career Companion ⚡</h1>
        <h2>Avinash</h2>
      </header>

      <main>
        {loading && <p>Loading job listings…</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && jobs.length === 0 && (
          <p>No jobs available at the moment.</p>
        )}
        {!loading && jobs.length > 0 && (
          <ul>
            {jobs.map((job, idx) => (
              <li key={idx}>{job.title}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}