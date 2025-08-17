import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './index.css';
import App from './App.jsx';


const router = createBrowserRouter([
  // in main.jsx routes
  { path: '/pay', element: <Pay /> },
  { path: '/', element: <Landing /> },
  { path: '/app', element: <Dashboard /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

