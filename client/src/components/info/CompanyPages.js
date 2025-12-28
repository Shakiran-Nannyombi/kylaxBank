import React from 'react';
import InfoLayout from '../InfoLayout';
import { Mail, Phone, MapPin, Users, Rocket, Heart } from 'lucide-react';
import heroImage from '../../assets/ai_banking_hero_1766910006641.png';

export const AboutUs = () => (
    <InfoLayout
        title="About Kylax Bank"
        subtitle="Our mission is to make credit accessible to everyone through intelligent technology."
        backgroundImage={heroImage}
    >
        <div className="prose prose-blue max-w-none">
            <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8 font-serif italic border-l-4 border-blue-600 pl-6 py-2">
                "Kylax was founded on a simple realization: the traditional credit scoring system is a relics of the past.
                It rewards those who already have access and punishes those who are just starting or facing unique life circumstances."
            </p>

            <p className="text-gray-600 mb-8">
                We built Kylax Bank to provide a holistic view of financial health. By leveraging cutting-edge AI and
                secure open banking, we can see the person behind the number. We're not just a bank; we're a financial
                ally dedicated to transparency, fairness, and speed.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 grayscale hover:grayscale-0 transition-all duration-500 bg-gray-50 rounded-xl">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold">Human-Centric</h3>
                </div>
                <div className="text-center p-6 grayscale hover:grayscale-0 transition-all duration-500 bg-gray-50 rounded-xl">
                    <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold">AI-Optimized</h3>
                </div>
                <div className="text-center p-6 grayscale hover:grayscale-0 transition-all duration-500 bg-gray-50 rounded-xl">
                    <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-bold">Fairness-First</h3>
                </div>
            </div>
        </div>
    </InfoLayout>
);

export const Careers = () => (
    <InfoLayout
        title="Join the Future"
        subtitle="Help us redefine the global financial system."
    >
        <div className="prose prose-blue max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work at Kylax?</h2>
            <p className="text-lg text-gray-600 mb-8">
                We're a team of AI researchers, fintech enthusiasts, and empathetic builders working to solve one
                of the hardest problems in finance: accurate and fair credit assessment.
            </p>

            <div className="space-y-6 mb-12">
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 transition-colors shadow-sm group cursor-pointer">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">Senior AI Research Engineer</h3>
                            <p className="text-sm text-gray-500">Remote / Full-time</p>
                        </div>
                        <div className="text-blue-600 font-bold">Apply →</div>
                    </div>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 transition-colors shadow-sm group cursor-pointer">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">Frontend Lead (React)</h3>
                            <p className="text-sm text-gray-500">London, UK / Hybrid</p>
                        </div>
                        <div className="text-blue-600 font-bold">Apply →</div>
                    </div>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 transition-colors shadow-sm group cursor-pointer">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-xl group-hover:text-blue-600 transition-colors">Compliance & Risk Officer</h3>
                            <p className="text-sm text-gray-500">New York, US / Full-time</p>
                        </div>
                        <div className="text-blue-600 font-bold">Apply →</div>
                    </div>
                </div>
            </div>
        </div>
    </InfoLayout>
);

export const Contact = () => (
    <InfoLayout
        title="Contact Us"
        subtitle="We're here to help you on your financial journey."
    >
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-10">
                    Have questions about your application or curious how our AI works?
                    Our support team and financial advisors are ready to assist.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Mail className="w-6 h-6" /></div>
                        <div>
                            <div className="font-bold">Email</div>
                            <div className="text-gray-600">support@kylaxbank.ai</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-purple-100 p-3 rounded-full text-purple-600"><Phone className="w-6 h-6" /></div>
                        <div>
                            <div className="font-bold">Phone</div>
                            <div className="text-gray-600">+1 (888) KYLAX-AI</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600"><MapPin className="w-6 h-6" /></div>
                        <div>
                            <div className="font-bold">Headquarters</div>
                            <div className="text-gray-600">123 Fintech Way, San Francisco, CA 94105</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-inner">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white h-32" placeholder="How can we help?"></textarea>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </InfoLayout>
);
