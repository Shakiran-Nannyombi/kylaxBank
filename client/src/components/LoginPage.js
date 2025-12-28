import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, ShieldCheck, ArrowRight } from 'lucide-react';
import AuthLayout from './AuthLayout';
import { LoginForm } from './LoginForms';

const LoginPage = () => {
    const [role, setRole] = useState(null); // 'applicant' or 'officer'
    const navigate = useNavigate();

    if (role) {
        return (
            <AuthLayout
                title={role === 'applicant' ? 'Applicant Login' : 'Officer Portal'}
                subtitle={role === 'applicant' ? 'Access your loan applications and status' : 'Authorized personnel only'}
            >
                <LoginForm role={role} onBack={() => setRole(null)} />
            </AuthLayout>
        );
    }

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Select your portal to continue to your dashboard"
        >
            <div className="space-y-4">
                <button
                    onClick={() => setRole('applicant')}
                    className="w-full group flex items-center justify-between p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50/50 transition-all text-left"
                >
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">Applicant Portal</div>
                            <div className="text-sm text-gray-500">Track and manage your loans</div>
                        </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                </button>

                <button
                    onClick={() => setRole('officer')}
                    className="w-full group flex items-center justify-between p-4 bg-white border-2 border-gray-100 rounded-2xl hover:border-purple-500 hover:bg-purple-50/50 transition-all text-left"
                >
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">Officer Dashboard</div>
                            <div className="text-sm text-gray-500">Review and process applications</div>
                        </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-500 transition-colors" />
                </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <button
                        onClick={() => navigate('/apply')}
                        className="font-bold text-blue-600 hover:text-blue-700"
                    >
                        Apply for a loan
                    </button>
                </p>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
