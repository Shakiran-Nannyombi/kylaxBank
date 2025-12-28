import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoanApplication from './components/LoanApplication';
import ApplicationTracker from './components/ApplicationTracker';
import LoanOfficerDashboard from './components/LoanOfficerDashboard';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/apply" element={<LoanApplication />} />
          <Route path="/track/:id" element={<ApplicationTracker />} />
          <Route path="/dashboard" element={<LoanOfficerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;