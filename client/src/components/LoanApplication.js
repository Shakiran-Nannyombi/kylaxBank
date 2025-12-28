import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  CheckCircle,
  User,
  DollarSign,
  Link as LinkIcon,
  Upload,
  Shield,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const LoanApplication = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ssn: '',
    dateOfBirth: '',

    // Loan Info
    loanAmount: '',
    loanPurpose: '',

    // Income & Employment
    employmentStatus: '',
    employer: '',
    jobTitle: '',
    monthlyIncome: '',
    employmentLength: '',

    // Additional Info
    monthlyRent: '',
    bankConnected: false,

    // Legal & Consent
    consentAIAssessment: false,
    agreeToTerms: false,
    consentDataPrivacy: false
  });

  const steps = [
    { number: 1, title: 'Personal & Loan Information', icon: User },
    { number: 2, title: 'Income & Employment', icon: DollarSign },
    { number: 3, title: 'Financial Snapshot', icon: LinkIcon },
    { number: 4, title: 'Consent & Legal', icon: Shield }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitApplication = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/applications', formData);
      navigate(`/track/${response.data.applicationId}`);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const connectBank = async () => {
    // Mock bank connection
    setLoading(true);
    try {
      // Simulate Plaid-like connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormData(prev => ({ ...prev, bankConnected: true }));
    } catch (error) {
      console.error('Error connecting bank:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col relative overflow-hidden">
      {/* AI Background Decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[120px]"></div>
        {/* Dot Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <Navbar className="bg-transparent border-b border-white/5" />

      <main className="relative z-10 flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Stepper Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight leading-tight">Apply for a Loan</h1>
                <p className="text-blue-300 font-medium">Powered by AI Holisti-Score™ Technology</p>
              </div>
            </div>

            {/* Stepper Steps */}
            <div className="flex items-center justify-between">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border-2 transition-all duration-500 shadow-lg ${currentStep >= step.number
                        ? 'bg-blue-600 border-blue-400 text-white scale-110'
                        : 'bg-white/5 border-white/10 text-gray-400'
                        }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="mt-3 text-center hidden md:block">
                        <p className={`text-[10px] font-black uppercase tracking-widest ${currentStep >= step.number ? 'text-blue-400' : 'text-gray-500'}`}>Step {step.number}</p>
                        <p className={`text-xs font-bold ${currentStep >= step.number ? 'text-white' : 'text-gray-500'}`}>{step.title}</p>
                      </div>
                    </div>
                    {step.number < steps.length && (
                      <div className="flex-grow mx-4 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                        <div className={`h-full bg-blue-500 transition-all duration-1000 ${currentStep > step.number ? 'w-full' : 'w-0'}`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-8 sm:p-12 border border-white/20">
            {/* Step 1: Personal & Loan Information */}
            {
              currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Personal & Loan Information
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Let's start with some basic information about you and your loan needs.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount *
                      </label>
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleInputChange}
                        placeholder="$"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Purpose *
                      </label>
                      <select
                        name="loanPurpose"
                        value={formData.loanPurpose}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select purpose</option>
                        <option value="debt_consolidation">Debt Consolidation</option>
                        <option value="home_improvement">Home Improvement</option>
                        <option value="auto">Auto Purchase</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                      </select>
                    </div>
                  </div>
                </div>
              )
            }

            {/* Step 2: Income & Employment */}
            {
              currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Income & Employment Verification
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Help us understand your employment and income situation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employment Status *
                      </label>
                      <select
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select status</option>
                        <option value="employed">Employed</option>
                        <option value="self_employed">Self-Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="retired">Retired</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Income *
                      </label>
                      <input
                        type="number"
                        name="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={handleInputChange}
                        placeholder="$"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Employer
                      </label>
                      <input
                        type="text"
                        name="employer"
                        value={formData.employer}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Rent/Mortgage
                      </label>
                      <input
                        type="number"
                        name="monthlyRent"
                        value={formData.monthlyRent}
                        onChange={handleInputChange}
                        placeholder="$"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Document Upload Section */}
                  <div className="mt-8 p-6 border-2 border-dashed border-gray-300 rounded-lg">
                    <div className="text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Upload Documents (Optional)
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Upload pay stubs, tax returns, or employment verification letters
                      </p>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Choose Files
                      </button>
                    </div>
                  </div>
                </div>
              )
            }

            {/* Step 3: Financial Snapshot */}
            {
              currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get a Fairer Assessment by Connecting Your Bank Account
                  </h2>
                  <p className="text-gray-600 mb-8">
                    By securely linking your account, our AI can see your real-time financial health,
                    like consistent rent payments and stable cash flow, giving you credit for financial
                    habits that traditional scores miss.
                  </p>

                  {!formData.bankConnected ? (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                          <LinkIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          Connect Your Bank Account
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                          We use bank-level security to safely connect to your account.
                          This helps us verify your income, see your payment history,
                          and give you credit for responsible financial behavior.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                          <div className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-700">Bank-level encryption</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-700">Read-only access</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-700">Never store credentials</span>
                          </div>
                        </div>

                        <button
                          onClick={connectBank}
                          disabled={loading}
                          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                        >
                          {loading ? 'Connecting...' : 'Connect Bank Account'}
                        </button>

                        <p className="text-sm text-gray-500 mt-4">
                          You can also choose to skip this step, but connecting your bank account
                          significantly improves your chances of approval.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-green-50 p-8 rounded-xl border border-green-200 text-center">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        Bank Account Connected!
                      </h3>
                      <p className="text-gray-600">
                        Your account has been securely connected. This will help us provide
                        a more accurate assessment of your creditworthiness.
                      </p>
                    </div>
                  )}

                  <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What we analyze from your bank account:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Consistent income deposits</li>
                      <li>• On-time rent and utility payments</li>
                      <li>• Responsible spending patterns</li>
                      <li>• Account balance stability</li>
                      <li>• Overdraft frequency</li>
                    </ul>
                  </div>
                </div>
              )
            }

            {/* Step 4: Consent & Legal */}
            {
              currentStep === 4 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Consent & Legal Acknowledgement
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Please review the follow terms and provide your consent to proceed with the AI-powered credit assessment.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                        Terms & Conditions
                      </label>
                      <div className="h-48 overflow-y-scroll bg-gray-50 p-4 rounded-xl border-2 border-gray-100 text-sm text-gray-600 space-y-4">
                        <p className="font-bold text-gray-900">1. AI-Powered Credit Assessment</p>
                        <p>
                          By applying for a loan with Kylax Bank, you acknowledge and agree that your creditworthiness will be assessed using our proprietary AI Holisti-Score™ technology. This system analyzes both traditional credit data and alternative financial insights, including bank transaction history if provided.
                        </p>
                        <p className="font-bold text-gray-900">2. Data Privacy & Security</p>
                        <p>
                          We take your privacy seriously. All data provided is encrypted using industry-standard protocols. Your financial information is used solely for the purpose of credit assessment and loan servicing. We do not sell your personal data to third parties.
                        </p>
                        <p className="font-bold text-gray-900">3. Accuracy of Information</p>
                        <p>
                          You certify that all information provided in this application is true, complete, and accurate to the best of your knowledge. Providing false information may result in the denial of your application or legal action.
                        </p>
                        <p className="font-bold text-gray-900">4. Electronic Signature</p>
                        <p>
                          Checking the boxes below constitutes your electronic signature and agreement to these terms.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <label className="flex items-start bg-white p-4 rounded-xl border-2 border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="ml-4 text-sm">
                          <span className="font-bold text-gray-900">I agree to the Terms & Conditions</span>
                          <p className="text-gray-500">I have read and understood the loan agreement terms.</p>
                        </div>
                      </label>

                      <label className="flex items-start bg-white p-4 rounded-xl border-2 border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="consentAIAssessment"
                            checked={formData.consentAIAssessment}
                            onChange={handleInputChange}
                            className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            required
                          />
                        </div>
                        <div className="ml-4 text-sm">
                          <span className="font-bold text-gray-900">Consent to AI Holisti-Score™ Assessment</span>
                          <p className="text-gray-500">I authorize Kylax Bank to use AI for my credit evaluation.</p>
                        </div>
                      </label>

                      <label className="flex items-start bg-white p-4 rounded-xl border-2 border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="consentDataPrivacy"
                            checked={formData.consentDataPrivacy}
                            onChange={handleInputChange}
                            className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="ml-4 text-sm">
                          <span className="font-bold text-gray-900">Data Privacy Acknowledgment</span>
                          <p className="text-gray-500">I consent to the collection and processing of my personal data.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )
            }

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={submitApplication}
                  disabled={loading || !formData.agreeToTerms || !formData.consentAIAssessment || !formData.consentDataPrivacy}
                  className="flex items-center space-x-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:grayscale"
                >
                  <span>{loading ? 'Submitting...' : 'Complete & Submit'}</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
};

export default LoanApplication;


