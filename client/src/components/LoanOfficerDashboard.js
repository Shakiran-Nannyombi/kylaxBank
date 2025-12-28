import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Brain,
  X,
  ThumbsUp,
  ThumbsDown,
  RefreshCw
} from 'lucide-react';
import Navbar from './Navbar';

const LoanOfficerDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadApplications();

    // WebSocket connection for real-time updates
    const ws = new WebSocket(`ws://localhost:3001`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'application_update' || data.type === 'application_complete') {
        loadApplications();
      }
    };

    return () => ws.close();
  }, []);

  const loadApplications = async () => {
    try {
      const response = await axios.get('/api/applications');
      setApplications(response.data);
    } catch (error) {
      console.error('Error loading applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id, updates) => {
    try {
      await axios.patch(`/api/applications/${id}`, updates);
      loadApplications();
      if (selectedApplication && selectedApplication.id === id) {
        setSelectedApplication({ ...selectedApplication, ...updates });
      }
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };

  const filteredApplications = applications.filter(app => {
    if (filter === 'all') return true;
    if (filter === 'pending') return app.status === 'processing' || app.status === 'submitted';
    if (filter === 'approved') return app.status === 'approved';
    if (filter === 'denied') return app.status === 'denied';
    if (filter === 'needs_review') return app.aiScore && app.aiScore.riskLevel === 'High';
    return true;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'denied': return <ThumbsDown className="w-5 h-5 text-red-600" />;
      case 'processing': return <Clock className="w-5 h-5 text-yellow-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const [isDetailMobileOpen, setIsDetailMobileOpen] = useState(false);

  useEffect(() => {
    if (selectedApplication) {
      setIsDetailMobileOpen(true);
    }
  }, [selectedApplication]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Applications List */}
          <div className="flex-grow">
            {/* Header & Stats Toggle for Mobile */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">Officer Dashboard</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Live Updates</span>
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Stats Cards - Horizontally scrollable on mobile */}
            <div className="flex lg:grid lg:grid-cols-4 gap-4 mb-8 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              <div className="flex-shrink-0 w-64 lg:w-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-tight">{applications.length}</p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-64 lg:w-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-tight">
                      {applications.filter(app => app.status === 'processing' || app.status === 'submitted').length}
                    </p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Pending</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-64 lg:w-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-tight">
                      {applications.filter(app => app.status === 'approved').length}
                    </p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Approved</p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-64 lg:w-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 leading-tight">
                      {applications.filter(app => app.aiScore && app.aiScore.riskLevel === 'High').length}
                    </p>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">High Risk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Tabs - Responsive scrollable */}
            <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden border border-gray-100">
              <div className="flex overflow-x-auto scrollbar-hide p-1">
                {[
                  { key: 'all', label: 'All', count: applications.length },
                  { key: 'pending', label: 'Pending', count: applications.filter(app => app.status === 'processing' || app.status === 'submitted').length },
                  { key: 'needs_review', label: 'High Risk', count: applications.filter(app => app.aiScore && app.aiScore.riskLevel === 'High').length },
                  { key: 'approved', label: 'Approved', count: applications.filter(app => app.status === 'approved').length },
                  { key: 'denied', label: 'Denied', count: applications.filter(app => app.status === 'denied').length }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setFilter(tab.key)}
                    className={`whitespace-nowrap flex-1 py-2 px-6 rounded-lg font-medium transition-all ${filter === tab.key
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    {tab.label} <span className="opacity-60 ml-1">{tab.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Applications list/table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Applicant</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">AI Score</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredApplications.map((app) => (
                      <tr key={app.id} onClick={() => setSelectedApplication(app)} className={`cursor-pointer transition-colors ${selectedApplication?.id === app.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-gray-900">{app.firstName} {app.lastName}</div>
                          <div className="text-xs text-gray-500">#{app.id.substring(0, 8)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          ${app.loanAmount?.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {app.aiScore ? (
                            <div className="flex items-center space-x-2">
                              <div className={`px-2 py-0.5 rounded text-xs font-bold ${app.aiScore.score > 70 ? 'bg-green-100 text-green-700' : app.aiScore.score > 40 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                {app.aiScore.score}
                              </div>
                              <span className="text-xs text-gray-500">{app.aiScore.riskLevel}</span>
                            </div>
                          ) : <span className="text-xs text-gray-400 italic">Processing...</span>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(app.status)}
                            <span className="text-sm font-medium capitalize">{app.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(app.submittedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button className="text-blue-600 hover:text-blue-900 font-bold text-sm">Review</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile List View */}
              <div className="md:hidden divide-y divide-gray-100">
                {filteredApplications.map((app) => (
                  <div key={app.id} onClick={() => setSelectedApplication(app)} className="p-4 active:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-gray-900">{app.firstName} {app.lastName}</div>
                      <div className="text-sm font-bold text-blue-600">${app.loanAmount?.toLocaleString()}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-black ${app.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {app.status}
                        </span>
                        {app.aiScore && (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-black ${getRiskColor(app.aiScore.riskLevel)}`}>
                            {app.aiScore.riskLevel} Risk
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        {new Date(app.submittedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Application Detail Panel - Desktop Side, Mobile Slide-over */}
          <div className={`fixed inset-0 z-[60] lg:relative lg:inset-auto lg:block lg:w-96 transform transition-transform duration-300 ease-in-out ${isDetailMobileOpen && selectedApplication ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} ${!selectedApplication ? 'lg:hidden' : ''}`}>
            {/* Mobile Backdrop */}
            <div
              className={`lg:hidden absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity ${isDetailMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={() => setIsDetailMobileOpen(false)}
            ></div>

            <div className="relative h-full lg:h-auto bg-white lg:rounded-xl shadow-2xl lg:shadow-sm flex flex-col w-full max-w-[90%] ml-auto lg:ml-0 overflow-y-auto">
              {selectedApplication && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-gray-900">Application Review</h3>
                    <button
                      onClick={() => {
                        setSelectedApplication(null);
                        setIsDetailMobileOpen(false);
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Applicant Summary */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {selectedApplication.firstName[0]}{selectedApplication.lastName[0]}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 leading-none mb-1">{selectedApplication.firstName} {selectedApplication.lastName}</div>
                        <div className="text-sm text-gray-500">{selectedApplication.email}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-1">Monthly Income</p>
                        <p className="font-bold text-gray-900">${selectedApplication.monthlyIncome?.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-bold text-[10px] uppercase tracking-widest mb-1">Loan Purpose</p>
                        <p className="font-bold text-gray-900">{selectedApplication.loanPurpose}</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Holisti-Score Breakdown */}
                  {selectedApplication.aiScore && (
                    <div className="mb-8 border-t border-gray-100 pt-8">
                      <div className="flex items-center space-x-2 mb-6">
                        <Brain className="w-5 h-5 text-purple-600" />
                        <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">AI Holisti-Score™ Breakdown</h4>
                      </div>

                      <div className="flex items-center justify-between mb-8 p-4 bg-purple-50 rounded-xl border border-purple-100">
                        <div className="text-center flex-1">
                          <div className="text-4xl font-black text-purple-600 leading-tight">{selectedApplication.aiScore.score}</div>
                          <div className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Score</div>
                        </div>
                        <div className="h-10 w-px bg-purple-200"></div>
                        <div className="text-center flex-1">
                          <div className={`text-lg font-black leading-tight ${selectedApplication.aiScore.riskLevel === 'Low' ? 'text-green-600' : selectedApplication.aiScore.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'}`}>
                            {selectedApplication.aiScore.riskLevel}
                          </div>
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Risk Level</div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center space-x-2 text-green-700 font-bold text-xs uppercase tracking-widest mb-3">
                            <TrendingUp className="w-4 h-4" />
                            <span>Positive Factors</span>
                          </div>
                          <ul className="space-y-2">
                            {selectedApplication.aiScore.positiveFactors.map((f, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start space-x-2 bg-green-50/50 p-2 rounded">
                                <span className="text-green-600 font-bold">•</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div className="flex items-center space-x-2 text-red-700 font-bold text-xs uppercase tracking-widest mb-3">
                            <TrendingDown className="w-4 h-4" />
                            <span>Negative Factors</span>
                          </div>
                          <ul className="space-y-2">
                            {selectedApplication.aiScore.negativeFactors.map((f, i) => (
                              <li key={i} className="text-xs text-gray-600 flex items-start space-x-2 bg-red-50/50 p-2 rounded">
                                <span className="text-red-600 font-bold">•</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Decision Actions */}
                  {selectedApplication.status === 'processing' && (
                    <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t border-gray-100 space-y-3">
                      <button
                        onClick={() => updateApplicationStatus(selectedApplication.id, { status: 'approved' })}
                        className="w-full bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all flex items-center justify-center space-x-2"
                      >
                        <ThumbsUp className="w-5 h-5" />
                        <span>Approve Application</span>
                      </button>
                      <button
                        onClick={() => updateApplicationStatus(selectedApplication.id, { status: 'denied' })}
                        className="w-full bg-white border-2 border-red-100 text-red-600 py-4 rounded-xl font-bold hover:bg-red-50 transition-all flex items-center justify-center space-x-2"
                      >
                        <ThumbsDown className="w-5 h-5" />
                        <span>Deny Application</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoanOfficerDashboard;
