import React from 'react';
import InfoLayout from '../InfoLayout';
import { Lock, Eye, CheckCircle, Scale } from 'lucide-react';

export const PrivacyPolicy = () => (
    <InfoLayout
        title="Privacy Policy"
        subtitle="Your data is your property. We treat it with the utmost respect."
    >
        <div className="prose prose-blue max-w-none">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-start mb-10">
                <Eye className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-blue-800 m-0">
                    <strong>TL;DR:</strong> We only access data you explicitly authorize. We never sell your personal information.
                    We use bank-level encryption to keep everything secure.
                </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">1. Data Collection</h2>
            <p className="text-gray-600 mb-6">
                We collect information that helps our AI provide a better credit assessment. This includes basic identifying
                information and, with your permission, financial transaction data from your connected bank accounts.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Use of AI</h2>
            <p className="text-gray-600 mb-6">
                Our proprietary AI models process your data to calculate your Kylax Holisti-Score™. This process is designed
                to be objective and remove the inherent biases found in traditional human-led lending.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
            <p className="text-gray-600 mb-6">
                We do not sell your data to third-party advertisers. We only share information with partners
                required to process your loan application or when mandated by law.
            </p>
        </div>
    </InfoLayout>
);

export const TermsOfService = () => (
    <InfoLayout
        title="Terms of Service"
        subtitle="The fine print, made clear."
    >
        <div className="prose prose-blue max-w-none">
            <h2 className="text-2xl font-bold mb-4 flex items-center"><Scale className="w-6 h-6 mr-2 text-gray-500" /> Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
                By using the Kylax Bank platform, you agree to provide accurate information and to use our
                services only for lawful purposes. Loan approval is not guaranteed and is subject to our
                AI-driven risk assessment process.
            </p>

            <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircle className="w-6 h-6 mr-2 text-gray-500" /> Your Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Maintain accurate account information.</li>
                <li>Protect your login credentials.</li>
                <li>Notify us immediately of any unauthorized access.</li>
                <li>Repay your loans according to the agreed schedule.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 flex items-center"><Lock className="w-6 h-6 mr-2 text-gray-500" /> Account Termination</h2>
            <p className="text-gray-600 mb-10">
                We reserve the right to suspend or terminate accounts that violate our terms or engage in
                fraudulent activities.
            </p>
        </div>
    </InfoLayout>
);

export const Security = () => (
    <InfoLayout
        title="Security at Kylax"
        subtitle="Bank-level protection for the modern era."
    >
        <div className="prose prose-blue max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fortress-Level Protection</h2>
            <p className="text-lg text-gray-600 mb-12">
                Security isn't just a feature at Kylax Bank; it's the foundation of everything we build.
                We use the same encryption standards as the world's leading financial institutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-8 bg-black text-white rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Lock className="w-24 h-24" /></div>
                    <h3 className="text-xl font-bold mb-4">Encryption in Transit</h3>
                    <p className="text-gray-400 text-sm">
                        All data moving between your device and our servers is protected by 256-bit AES encryption.
                    </p>
                </div>
                <div className="p-8 bg-blue-900 text-white rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><CheckCircle className="w-24 h-24" /></div>
                    <h3 className="text-xl font-bold mb-4">Read-Only Access</h3>
                    <p className="text-blue-200 text-sm">
                        When you connect your bank, we only receive read-only transaction history. We can never move money or change your settings.
                    </p>
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Security Certifications</h3>
            <div className="flex flex-wrap gap-4 mb-10 opacity-60">
                <div className="px-6 py-2 border border-gray-300 rounded-full font-bold text-gray-500">SOC2 Type II</div>
                <div className="px-6 py-2 border border-gray-300 rounded-full font-bold text-gray-500">PCI DSS Compliant</div>
                <div className="px-6 py-2 border border-gray-300 rounded-full font-bold text-gray-500">ISO 27001</div>
            </div>
        </div>
    </InfoLayout>
);
