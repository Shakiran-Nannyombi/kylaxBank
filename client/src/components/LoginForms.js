import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Loader2, ArrowLeft } from 'lucide-react';

export const LoginForm = ({ role, onBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate auth
        setTimeout(() => {
            setLoading(false);
            if (role === 'officer') {
                navigate('/dashboard');
            } else {
                // Just navigate to home for now as we don't have a specific applicant dashboard yet
                navigate('/');
            }
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50/50"
                        placeholder="name@company.com"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border-2 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50/50"
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-600">
                        Remember me
                    </label>
                </div>
                <div className="text-sm">
                    <button type="button" className="font-bold text-blue-600 hover:text-blue-500">
                        Forgot password?
                    </button>
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-white transition-all ${role === 'officer'
                            ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-200'
                            : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
                        } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {loading ? (
                        <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                        `Log in as ${role === 'officer' ? 'Officer' : 'Applicant'}`
                    )}
                </button>

                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center justify-center space-x-2 text-sm text-gray-500 font-medium hover:text-gray-700"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Change Role</span>
                </button>
            </div>
        </form>
    );
};
