import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const InfoLayout = ({ children, title, subtitle, backgroundImage }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 py-24 text-center text-white overflow-hidden">
                {backgroundImage && (
                    <div
                        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                )}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">{title}</h1>
                    {subtitle && <p className="text-xl text-blue-100 font-medium max-w-2xl mx-auto">{subtitle}</p>}
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
