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
  Eye,
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Applications List */}
          <div className="lg:col-span-2">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
                    <p className="text-sm text-gray-600">Total Applications</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-yellow-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {applications.filter(app => app.status === 'processing' || app.status === 'submitted').length}
                    </p>
                    <p className="text-sm text-gray-600">Pending Review</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {applications.filter(app => app.status === 'approved').length}
                    </p>
                    <p className="text-sm text-gray-600">Approved</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {applications.filter(app => app.aiScore && app.aiScore.riskLevel === 'High').length}
                    </p>
                    <p className="text-sm text-gray-600">High Risk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="flex space-x-1 p-1">
                {[
                  { key: 'all', label: 'All Applications', count: applications.length },
                  { key: 'pending', label: 'Pending', count: applications.filter(app => app.status === 'processing' || app.status === 'submitted').length },
                  { key: 'needs_review', label: 'Needs Review', count: applications.filter(app => app.aiScore && app.aiScore.riskLevel === 'High').length },
                  { key: 'approved', label: 'Approved', count: applications.filter(app => app.status === 'approved').length },
                  { key: 'denied', label: 'Denied', count: applications.filter(app => app.status === 'denied').length }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setFilter(tab.key)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${filter === tab.key
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Loan Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        AI Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Risk Level
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {app.firstName} {app.lastName}
                            </div>
                            <div className="text-sm text-gray-500">ID: {app.id}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${app.loanAmount?.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {app.aiScore ? (
                            <div className="flex items-center space-x-2">
                              <Brain className="w-4 h-4 text-purple-600" />
                              <span className="text-sm font-semibold text-gray-900">
                                {app.aiScore.score}
                              </span>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400">Pending</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {app.aiScore ? (
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(app.aiScore.riskLevel)}`}>
                              {app.aiScore.riskLevel}
                            </span>
                          ) : (
                            <span className="text-sm text-gray-400">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(app.status)}
                            <span className="text-sm text-gray-900 capitalize">{app.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(app.submittedAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedApplication(app)}
                            className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Application Detail Panel */}
          <div className="lg:col-span-1">
            {selectedApplication ? (
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Application Details
                  </h3>
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                {/* Applicant Info */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Applicant Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {selectedApplication.firstName} {selectedApplication.lastName}</p>
                    <p><span className="font-medium">Email:</span> {selectedApplication.email}</p>
                    <p><span className="font-medium">Phone:</span> {selectedApplication.phone}</p>
                    <p><span className="font-medium">Loan Amount:</span> ${selectedApplication.loanAmount?.toLocaleString()}</p>
                    <p><span className="font-medium">Purpose:</span> {selectedApplication.loanPurpose}</p>
                    <p><span className="font-medium">Monthly Income:</span> ${selectedApplication.monthlyIncome?.toLocaleString()}</p>
                  </div>
                </div>

                {/* AI Score Breakdown */}
                {selectedApplication.aiScore && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-purple-600" />
                      <span>AI Holisti-Score™ Breakdown</span>
                    </h4>

                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-purple-600 mb-1">
                        {selectedApplication.aiScore.score}
                      </div>
                      <div className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getRiskColor(selectedApplication.aiScore.riskLevel)}`}>
                        {selectedApplication.aiScore.riskLevel} Risk
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-green-700 mb-2 flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>Positive Factors</span>
                        </h5>
                        <ul className="space-y-1">
                          {selectedApplication.aiScore.positiveFactors.map((factor, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start space-x-1">
                              <span className="text-green-600">+</span>
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-red-700 mb-2 flex items-center space-x-1">
                          <TrendingDown className="w-4 h-4" />
                          <span>Negative Factors</span>
                        </h5>
                        <ul className="space-y-1">
                          {selectedApplication.aiScore.negativeFactors.map((factor, index) => (
                            <li key={index} className="text-xs text-gray-600 flex items-start space-x-1">
                              <span className="text-red-600">-</span>
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-900">AI Recommendation:</span>
                          <span className={`inline-flex items-center space-x-1 text-sm font-semibold ${selectedApplication.aiScore.recommendation === 'Approve' ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {selectedApplication.aiScore.recommendation === 'Approve' ? (
                              <ThumbsUp className="w-4 h-4" />
                            ) : (
                              <ThumbsDown className="w-4 h-4" />
                            )}
                            <span>{selectedApplication.aiScore.recommendation}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {selectedApplication.status === 'processing' && selectedApplication.aiScore && (
                  <div className="space-y-3">
                    <button
                      onClick={() => updateApplicationStatus(selectedApplication.id, { status: 'approved' })}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Approve</span>
                    </button>

                    <button
                      onClick={() => updateApplicationStatus(selectedApplication.id, { status: 'denied' })}
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <ThumbsDown className="w-4 h-4" />
                      <span>Deny</span>
                    </button>

                    <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Flag for Follow-up
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6 text-center text-gray-500 border border-gray-100">
                <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Select an application to view details</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoanOfficerDashboard;
