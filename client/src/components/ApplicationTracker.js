import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Sparkles,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Brain
} from 'lucide-react';
import Footer from './Footer';

const ApplicationTracker = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadApplication();

    // WebSocket connection for real-time updates
    const ws = new WebSocket(`ws://localhost:3001`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'application_update' || data.type === 'application_complete') {
        if (data.application.id == id) {
          setApplication(data.application);
        }
      }
    };

    return () => ws.close();
  }, [id]);

  const loadApplication = async () => {
    try {
      const response = await axios.get(`/api/applications/${id}`);
      setApplication(response.data);
    } catch (error) {
      console.error('Error loading application:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStepStatus = (stepName) => {
    if (!application) return 'pending';

    const steps = [
      'Application Submitted',
      'Verifying Traditional Credit',
      'Analyzing Financial Snapshot',
      'AI Holisti-Score™ Assessment',
      'Final Decision'
    ];

    const currentIndex = steps.indexOf(application.progress);
    const stepIndex = steps.indexOf(stepName);

    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'pending';
  };

  const getStatusMessage = () => {
    if (!application) return '';

    switch (application.progress) {
      case 'Verifying Traditional Credit':
        return 'We\'re pulling your credit report and analyzing your traditional credit data.';
      case 'Analyzing Financial Snapshot':
        return 'Our system is now reviewing your day-to-day financial patterns, such as on-time utility payments and consistent income, to build a complete picture of your creditworthiness.';
      case 'AI Holisti-Score™ Assessment':
        return 'Our AI is now analyzing thousands of data points—from your credit history to your cash flow—to identify patterns and provide the most accurate decision possible. This is where the magic happens!';
      case 'Final Decision':
        return application.status === 'approved'
          ? 'Congratulations! Your loan application has been approved.'
          : 'We\'re sorry, but your loan application has been denied.';
      default:
        return 'Your application has been received and is being processed.';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your application...</p>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Not Found</h1>
          <p className="text-gray-600 mb-4">We couldn't find an application with ID {id}</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 kylax-gradient rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Kylax Bank</span>
            </Link>
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Application Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Application #{application.id}
              </h1>
              <p className="text-gray-600">
                Loan Amount: ${application.loanAmount?.toLocaleString()}
              </p>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${application.status === 'approved'
                ? 'bg-green-100 text-green-800'
                : application.status === 'denied'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
              {application.status === 'approved' ? 'Approved' :
                application.status === 'denied' ? 'Denied' : 'Processing'}
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Application Progress</h2>

            {['Application Submitted', 'Verifying Traditional Credit', 'Analyzing Financial Snapshot', 'AI Holisti-Score™ Assessment', 'Final Decision'].map((step, index) => {
              const status = getStepStatus(step);
              return (
                <div key={step} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${status === 'completed'
                      ? 'bg-green-500 text-white'
                      : status === 'current'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}>
                    {status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : status === 'current' ? (
                      <RefreshCw className="w-5 h-5 animate-spin" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium ${status === 'current' ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                      {step}
                    </h3>
                    {status === 'current' && (
                      <p className="text-sm text-gray-600 mt-1">
                        {getStatusMessage()}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Score Results (if available) */}
        {application.aiScore && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                AI Holisti-Score™ Results
              </h2>
            </div>

            {/* Score Display */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {application.aiScore.score}
                </div>
                <p className="text-gray-600">Holisti-Score™</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className={`text-2xl font-bold mb-2 ${application.aiScore.riskLevel === 'Low' ? 'text-green-600' :
                    application.aiScore.riskLevel === 'Medium' ? 'text-yellow-600' :
                      'text-red-600'
                  }`}>
                  {application.aiScore.riskLevel}
                </div>
                <p className="text-gray-600">Risk Level</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className={`text-xl font-bold mb-2 flex items-center justify-center space-x-2 ${application.aiScore.recommendation === 'Approve' ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {application.aiScore.recommendation === 'Approve' ? (
                    <ThumbsUp className="w-6 h-6" />
                  ) : (
                    <ThumbsDown className="w-6 h-6" />
                  )}
                  <span>{application.aiScore.recommendation}</span>
                </div>
                <p className="text-gray-600">AI Recommendation</p>
              </div>
            </div>

            {/* Decision Factors */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Positive Factors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Positive Factors</span>
                </h3>
                <div className="space-y-3">
                  {application.aiScore.positiveFactors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{factor}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Negative Factors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  <span>Areas for Improvement</span>
                </h3>
                <div className="space-y-3">
                  {application.aiScore.negativeFactors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{factor}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final Decision */}
        {application.status !== 'processing' && (
          <div className={`rounded-xl shadow-lg p-8 ${application.status === 'approved'
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
            }`}>
            <div className="text-center">
              {application.status === 'approved' ? (
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              ) : (
                <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              )}

              <h2 className={`text-3xl font-bold mb-4 ${application.status === 'approved' ? 'text-green-900' : 'text-red-900'
                }`}>
                {application.status === 'approved'
                  ? 'Congratulations! Your loan is approved!'
                  : 'Application Decision'}
              </h2>

              <p className={`text-lg mb-6 ${application.status === 'approved' ? 'text-green-700' : 'text-red-700'
                }`}>
                {application.status === 'approved'
                  ? `You've been approved for a loan of $${application.loanAmount?.toLocaleString()}. A loan specialist will contact you within 24 hours to finalize the details.`
                  : 'While we weren\'t able to approve your application at this time, we encourage you to work on the areas for improvement identified by our AI and reapply in the future.'
                }
              </p>

              {application.status === 'approved' && (
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                  Next Steps
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationTracker;


