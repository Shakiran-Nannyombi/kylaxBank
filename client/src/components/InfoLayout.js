import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const InfoLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

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

            <Footer />
        </div>
    );
};

export default InfoLayout;
