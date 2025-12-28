import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoanApplication from './components/LoanApplication';
import ApplicationTracker from './components/ApplicationTracker';
import LoanOfficerDashboard from './components/LoanOfficerDashboard';
import { PersonalLoans, BusinessLoans, AutoLoans } from './components/info/ProductPages';
import { AboutUs, Careers, Contact } from './components/info/CompanyPages';
import { PrivacyPolicy, TermsOfService, Security } from './components/info/LegalPages';
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

          {/* Product Routes */}
          <Route path="/products/personal" element={<PersonalLoans />} />
          <Route path="/products/business" element={<BusinessLoans />} />
          <Route path="/products/auto" element={<AutoLoans />} />

          {/* Company Routes */}
          <Route path="/company/about" element={<AboutUs />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/contact" element={<Contact />} />

          {/* Legal Routes */}
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<TermsOfService />} />
          <Route path="/legal/security" element={<Security />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;