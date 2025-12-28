import React from 'react';
import InfoLayout from '../InfoLayout';
import { Target, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export const PersonalLoans = () => (
    <InfoLayout
        title="Personal Loans"
        subtitle="Fairer rates based on your real financial health, not just a score."
    >
        <div className="prose prose-blue max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Your Personal Financial Goals</h2>
            <p className="text-lg text-gray-600 mb-8">
                Traditional personal loans rely heavily on static credit scores that often tell an incomplete story.
                At Kylax Bank, our AI Holisti-Score™ analyzes your real-time cash flow, rent payment history,
                and savings habits to unlock better rates and higher approval chances.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <Target className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Targeted Approval</h3>
                    <p className="text-gray-600 italic">"We see the potential that traditional banks miss."</p>
                </div>
                <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                    <Zap className="w-10 h-10 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Instant Funding</h3>
                    <p className="text-gray-600">Once approved, funds can be in your account in as little as 24 hours.</p>
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">Why our Personal Loans are different:</h3>
            <ul className="space-y-4">
                <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1"><ShieldCheck className="w-4 h-4 text-green-600" /></div>
                    <span><strong>No Hidden Fees:</strong> No origination fees or prepayment penalties.</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1"><ShieldCheck className="w-4 h-4 text-green-600" /></div>
                    <span><strong>Fixed Rates:</strong> Your rate is locked in from day one.</span>
                </li>
                <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1"><ShieldCheck className="w-4 h-4 text-green-600" /></div>
                    <span><strong>AI-Powered Insights:</strong> We help you understand exactly why you qualified for your rate.</span>
                </li>
            </ul>
        </div>
    </InfoLayout>
);

export const BusinessLoans = () => (
    <InfoLayout
        title="Business Loans"
        subtitle="Fuel your growth with intelligent capital."
    >
        <div className="prose prose-blue max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Capital for the Next Generation of Business</h2>
            <p className="text-lg text-gray-600 mb-8">
                Small businesses are the backbone of the economy, yet they face the most hurdles when seeking capital.
                Kylax Bank uses AI to understand your business's true performance by analyzing sales trends,
                inventory turnover, and market positioning.
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl mb-12 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                    Growth-Focused Lending
                </h3>
                <p className="text-gray-600 mb-6">
                    We offer flexible terms designed to match your business's unique cycle. Whether you're scaling operations,
                    hiring new staff, or stocking up for peak season, our AI-driven assessment ensures we provide
                    the right amount of capital at the right time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">$5k - $500k</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Loan Amounts</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">6 - 36 Mos</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Flexible Terms</div>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">48 Hours</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Time to Fund</div>
                    </div>
                </div>
            </div>
        </div>
    </InfoLayout>
);

export const AutoLoans = () => (
    <InfoLayout
        title="Auto Loans"
        subtitle="The smartest way to get behind the wheel."
    >
        <div className="prose prose-blue max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Drive Your Future Forward</h2>
            <p className="text-lg text-gray-600 mb-8">
                Don't let an outdated credit score keep you from the vehicle you need. Our AI-driven Auto Loans
                consider your complete financial journey, providing competitive rates for new, used, or refinanced vehicles.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                    <h3 className="text-xl font-bold mb-4">Why Kylax for Auto?</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span>Pre-approvals that last for 30 days</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span>Rates as low as 3.49% APR</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span>Gap insurance options available</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                    <h4 className="text-xl font-bold mb-2">AI-Refi Advantage</h4>
                    <p className="text-blue-100 text-sm mb-4">
                        Already have a car loan? Our AI can scan market rates and your recent financial improvements
                        to see if you can save $100+ on your monthly payment.
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                        Try Refinance Calculator
                    </button>
                </div>
            </div>
        </div>
    </InfoLayout>
);
