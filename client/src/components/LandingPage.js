import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TrendingUp, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import logo from '../assets/logo.png';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            <span>Powered by AI Holisti-Score™</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Fairer, Faster
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Loan Decisions
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Experience revolutionary AI-powered credit assessment that combines traditional credit data
            with alternative financial insights for more accurate, transparent loan decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/apply')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Apply for a Loan
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => {
                document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border border-gray-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kylax Bank?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform revolutionizes the lending experience with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">AI Holisti-Score™</h4>
            <p className="text-gray-600 mb-4">
              Our proprietary AI analyzes thousands of data points, combining traditional credit data
              with alternative financial insights for a complete picture.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Traditional credit analysis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Alternative data insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Explainable AI decisions</span>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Real-Time Processing</h4>
            <p className="text-gray-600 mb-4">
              Get instant decisions with live status tracking. Our platform processes applications
              in minutes, not days.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Instant application submission</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Live status updates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Fast decision notifications</span>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Secure & Transparent</h4>
            <p className="text-gray-600 mb-4">
              Bank-level security with complete transparency. Understand exactly how your
              score is calculated and what factors influence your decision.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Bank-level encryption</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Transparent AI decisions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Privacy-first approach</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Lending?
          </h3>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of satisfied customers who've received fairer, faster loan decisions
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white p-1 rounded shadow-sm">
                  <img src={logo} alt="Kylax Bank Logo" className="h-6 w-6 object-contain" />
                </div>
                <span className="text-white font-bold text-xl tracking-tight">Kylax Bank</span>
              </div>
              <p className="text-sm">
                Revolutionizing lending with AI-powered credit assessments.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Products</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products/personal" className="hover:text-white transition-colors">Personal Loans</Link></li>
                <li><Link to="/products/business" className="hover:text-white transition-colors">Business Loans</Link></li>
                <li><Link to="/products/auto" className="hover:text-white transition-colors">Auto Loans</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/company/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/company/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/company/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-3">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/legal/security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Kylax Bank. All rights reserved. Revolutionizing lending with AI-powered credit assessments.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
