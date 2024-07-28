import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage';
import './index.css';

// Create a root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the application
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </Router>
);
