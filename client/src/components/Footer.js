import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
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
                    <p>© 2025 Kylax Bank. All rights reserved. Revolutionizing lending with AI-powered credit assessments.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
