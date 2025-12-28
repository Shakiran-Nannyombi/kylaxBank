import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from './Footer';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex flex-col items-center">
                    <div className="bg-white p-2 rounded-2xl border shadow-sm mb-4">
                        <img src={logo} alt="Kylax Bank Logo" className="h-12 w-12 object-contain" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Kylax Bank
                    </h1>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {subtitle}
                    </p>
                </Link>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 border border-gray-100">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    </div>
                    {children}
                </div>
            </div>
            <div className="mt-12">
                <Footer />
            </div>
        </div>
    );
};

export default AuthLayout;
