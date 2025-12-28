import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/logo.png';

const InfoLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 border shadow-sm group-hover:shadow-md transition-shadow">
                                <img src={logo} alt="Kylax Bank Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">Kylax Bank</span>
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors font-medium border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 bg-white"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-center text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                    {subtitle && <p className="text-xl text-blue-100">{subtitle}</p>}
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border border-blue-100">
                    {children}
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="bg-white border-t py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                    <p>© 2025 Kylax Bank. All rights reserved. Revolutionizing lending with AI-powered credit assessments.</p>
                </div>
            </footer>
        </div>
    );
};

export default InfoLayout;
