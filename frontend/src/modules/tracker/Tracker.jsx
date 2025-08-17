import { useEffect, useState } from 'react';
import { api } from '../../lib/apiClient';

export default function Tracker() {
  const [drives, setDrives] = useState([]);
  const [filters, setFilters] = useState({ location: '', role: '' });

  useEffect(() => { api.get('/api/drives').then(r => setDrives(r.data)); }, []);

  async function search() {
    const params = new URLSearchParams(filters).toString();
    const { data } = await api.get(`/api/drives?${params}`);
    setDrives(data);
  }

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <input placeholder="Location" className="input" value={filters.location}
               onChange={e=>setFilters({...filters, location:e.target.value})}/>
        <input placeholder="Role" className="input" value={filters.role}
               onChange={e=>setFilters({...filters, role:e.target.value})}/>
        <button onClick={search} className="btn">Search</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {drives.map(d => (
          <div key={d._id} className="bg-white rounded p-4 shadow">
            <div className="font-semibold">{d.company} — {d.role}</div>
            <div className="text-sm text-gray-600">{d.location}</div>
            <div className="text-sm text-gray-600">{new Date(d.dateTime).toLocaleString()}</div>
            <button className="mt-3 btn-secondary">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}