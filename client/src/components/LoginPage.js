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
            <div className="grid gap-4">
                <button
                    onClick={() => setRole('applicant')}
                    className="w-full group flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-300 text-left shadow-sm hover:shadow-md"
                >
                    <div className="flex items-center space-x-5">
                        <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <User className="w-7 h-7" />
                        </div>
                        <div>
                            <div className="font-bold text-xl text-gray-900 mb-0.5">Applicant Portal</div>
                            <div className="text-sm text-gray-500">Track and manage your loans</div>
                        </div>
                    </div>
                    <div className="p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                        <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                </button>

                <button
                    onClick={() => setRole('officer')}
                    className="w-full group flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-purple-500 hover:bg-purple-50/30 transition-all duration-300 text-left shadow-sm hover:shadow-md"
                >
                    <div className="flex items-center space-x-5">
                        <div className="p-4 bg-purple-100 text-purple-600 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <div>
                            <div className="font-bold text-xl text-gray-900 mb-0.5">Officer Dashboard</div>
                            <div className="text-sm text-gray-500">Review and process applications</div>
                        </div>
                    </div>
                    <div className="p-2 rounded-full group-hover:bg-purple-100 transition-colors">
                        <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-purple-500 transition-colors" />
                    </div>
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
