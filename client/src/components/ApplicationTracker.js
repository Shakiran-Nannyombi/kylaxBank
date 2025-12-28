import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Sparkles,
  TrendingUp,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Brain
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollReveal from './ScrollReveal';

const ApplicationTracker = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    loadApplication();

    // WebSocket connection for real-time updates
    const ws = new WebSocket(config.WS_URL);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'application_update' || data.type === 'application_complete') {
        if (data.application.id === id) {
          setApplication(data.application);
        }
      }
    };

    return () => ws.close();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <RefreshCw className="h-12 w-12 text-blue-500 animate-spin" />
          <p className="text-blue-200 font-medium animate-pulse">Running AI Holisti-Score™ Diagnostics...</p>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col">
        <Navbar className="bg-transparent" />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl max-w-md w-full text-center border border-white/20">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assessment Data Unavailable</h2>
            <p className="text-gray-600 mb-8">We could not find the assessment record for this ID.</p>
            <Link to="/" className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Return to Command Center
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <Navbar className="bg-transparent border-b border-white/5" />

      <main className="relative z-10 flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <div className="mb-8 flex items-center justify-between">
            <Link to="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
              <div className="p-2 rounded-full border border-blue-400/20 group-hover:bg-blue-400/10 mr-3 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-bold">Back to Platform</span>
            </Link>
            <div className="flex items-center space-x-2 text-xs font-black text-blue-400 tracking-[0.2em] uppercase bg-blue-400/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
              Assessment Live
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden mb-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 sm:p-12 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-blue-100 font-bold tracking-widest uppercase text-xs mb-2">Application Tracking</p>
                  <h1 className="text-3xl sm:text-4xl font-black mb-2">
                    Welcome back, {application.personalInfo?.firstName}
                  </h1>
                  <div className="flex items-center text-blue-100 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Ref: {id.slice(0, 8).toUpperCase()}
                    </span>
                    <span className="h-4 w-px bg-white/20"></span>
                    <span className="flex items-center">
                      <div className={`px-3 py-1 rounded-full text-xs font-black uppercase border ${getStatusColor(application.status)}`}>
                        {application.status}
                      </div>
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-1">Applied Range</p>
                    <p className="text-2xl font-black">${Number(application.loanInfo?.amount || application.loanAmount).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Progress Tracker */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center">
                    <Brain className="w-6 h-6 mr-3 text-purple-600" />
                    AI Analysis Roadmap
                  </h2>

                  <div className="space-y-8 relative">
                    <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100"></div>

                    {[
                      { title: 'Data Ingestion', desc: 'Securely receiving and decrypting application data.', status: 'completed' },
                      { title: 'Holisti-Score™ Scan', desc: 'Running deep-learning algorithms on financial history.', status: 'current' },
                      { title: 'Pattern Recognition', desc: 'Identifying responsible financial behaviors.', status: 'pending' },
                      { title: 'Final Aggregation', desc: 'Combining all data points for final assessment.', status: 'pending' }
                    ].map((step, idx) => {
                      const isCurrentProgress = application.progress === step.title || (idx === 1 && application.progress.includes('Verifying'));
                      return (
                        <div key={idx} className="relative flex items-start group">
                          <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl border-2 transition-all duration-500 ${step.status === 'completed' || isCurrentProgress ? 'bg-blue-600 border-blue-400 text-white shadow-lg' : 'bg-white border-gray-200 text-gray-300'
                            }`}>
                            {step.status === 'completed' ? <CheckCircle className="w-6 h-6" /> :
                              isCurrentProgress ? <RefreshCw className="w-6 h-6 animate-spin" /> :
                                <Clock className="w-6 h-6" />}
                          </div>
                          <div className="ml-6">
                            <h3 className={`font-black uppercase tracking-wider text-sm ${!isCurrentProgress && step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>{step.title}</h3>
                            <p className="text-gray-500 text-sm font-medium">{step.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI Insights Sidebar */}
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-[2rem] p-6 border border-blue-100">
                    <div className="flex items-center space-x-3 mb-4 text-blue-600">
                      <Sparkles className="w-5 h-5" />
                      <h3 className="font-black uppercase tracking-widest text-xs">Live Insights</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      Our AI has analyzed <span className="text-blue-600 font-bold">2,400+</span> alternative data points. Your consistent utility payments are positively impacting your score.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-[2rem] p-6 border border-purple-100">
                    <div className="flex items-center space-x-3 mb-4 text-purple-600">
                      <TrendingUp className="w-5 h-5" />
                      <h3 className="font-black uppercase tracking-widest text-xs">Stability Index</h3>
                    </div>
                    <div className="h-2 w-full bg-purple-200 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-purple-600 w-3/4"></div>
                    </div>
                    <p className="text-[10px] font-black text-purple-600 uppercase">Strong Stability Detected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Score Results (if available) */}
          {application.aiScore && (
            <div className="bg-white/95 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border border-white/20 p-8 sm:p-12 mb-8">
              <div className="flex items-center space-x-4 mb-10">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-gray-900">AI Holisti-Score™ Results</h2>
                  <p className="text-gray-500 font-medium">Advanced Multi-Factor Assessment</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-[2rem] border border-purple-100">
                  <div className="text-5xl font-black text-purple-600 mb-2">{application.aiScore.score}</div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500">Holisti-Score™</p>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[2rem] border border-blue-100">
                  <div className={`text-3xl font-black mb-2 ${application.aiScore.riskLevel === 'Low' ? 'text-green-600' : 'text-yellow-600'}`}>{application.aiScore.riskLevel}</div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500">Risk Assessment</p>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2rem] border border-green-100">
                  <div className={`text-2xl font-black mb-2 flex items-center justify-center gap-2 ${application.aiScore.recommendation === 'Approve' ? 'text-green-600' : 'text-red-600'}`}>
                    {application.aiScore.recommendation === 'Approve' ? <ThumbsUp className="w-6 h-6" /> : <ThumbsDown className="w-6 h-6" />}
                    {application.aiScore.recommendation}
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500">AI Recommendation</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-green-50/50 p-8 rounded-[2rem] border border-green-100">
                  <h3 className="text-sm font-black uppercase tracking-widest text-green-700 mb-6 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" /> Positive Intelligence
                  </h3>
                  <ul className="space-y-4">
                    {application.aiScore.positiveFactors.map((f, i) => (
                      <li key={i} className="flex items-start text-gray-700 font-medium text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50/50 p-8 rounded-[2rem] border border-red-100">
                  <h3 className="text-sm font-black uppercase tracking-widest text-red-700 mb-6 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" /> Growth Areas
                  </h3>
                  <ul className="space-y-4">
                    {application.aiScore.negativeFactors.map((f, i) => (
                      <li key={i} className="flex items-start text-gray-700 font-medium text-sm">
                        <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Final Decision Step */}
          {application.status !== 'processing' && (
            <div className={`rounded-[2.5rem] shadow-2xl p-10 sm:p-16 border-2 text-center transition-all ${application.status === 'approved' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${application.status === 'approved' ? 'bg-green-100' : 'bg-red-100'}`}>
                {application.status === 'approved' ? <CheckCircle className="w-12 h-12 text-green-600" /> : <AlertCircle className="w-12 h-12 text-red-600" />}
              </div>
              <h2 className={`text-4xl font-black mb-6 ${application.status === 'approved' ? 'text-green-900' : 'text-red-900'}`}>
                {application.status === 'approved' ? 'Mission Success: Approved!' : 'Assessment Concluded'}
              </h2>
              <p className={`text-lg max-w-2xl mx-auto mb-10 font-medium ${application.status === 'approved' ? 'text-green-800/80' : 'text-red-800/80'}`}>
                {application.status === 'approved'
                  ? `Your digital loan of $${Number(application.loanAmount).toLocaleString()} is ready for disbursement. Our team will finalize the wire transfer within 24 hours.`
                  : "We're currently unable to proceed with this configuration. We recommend addressing the identified factors and reapplying in 90 days."}
              </p>
              {application.status === 'approved' && (
                <button className="bg-green-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-green-700 transition-all shadow-xl shadow-green-200 hover:-translate-y-1">
                  Access Funds
                </button>
              )}
            </div>
          )}
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationTracker;


