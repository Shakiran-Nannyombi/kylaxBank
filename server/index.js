const express = require('express');
const cors = require('cors');
const path = require('path');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// WebSocket for real-time updates
wss.on('connection', (ws) => {
  console.log('Client connected to Kylax Bank system');
  ws.on('close', () => console.log('Client disconnected'));
});

// Broadcast to all connected clients
const broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

// In-memory storage for demo (in production, use a database)
let applications = [];
let applicationCounter = 1000;

// Mock AI scoring function
const calculateHolistiScore = (applicationData) => {
  // Mock AI scoring algorithm
  let score = 650; // Base score
  
  // Traditional factors
  if (applicationData.creditScore) {
    score += (applicationData.creditScore - 600) * 0.3;
  }
  if (applicationData.income) {
    score += Math.min(applicationData.income / 1000, 100);
  }
  if (applicationData.debtToIncome) {
    score -= applicationData.debtToIncome * 2;
  }
  
  // Alternative data factors (simulated)
  if (applicationData.bankConnected) {
    score += 50; // Bonus for connecting bank account
    score += Math.random() * 50; // Random bonus for "good" alternative data
  }
  
  // Ensure score is within range
  score = Math.max(300, Math.min(850, Math.round(score)));
  
  // Generate risk level
  let riskLevel = 'High';
  if (score >= 720) riskLevel = 'Low';
  else if (score >= 650) riskLevel = 'Medium';
  
  // Generate decision factors
  const positiveFactors = [
    'Consistent on-time rent payments identified from bank data',
    'Stable salary verified via bank deposits',
    'Low credit card utilization',
    'Long credit history with good payment record',
    'Regular savings pattern detected'
  ];
  
  const negativeFactors = [
    'High number of recent overdraft fees',
    'Recent late payment on auto loan',
    'Irregular income patterns detected',
    'High credit utilization ratio',
    'Recent hard credit inquiries'
  ];
  
  return {
    score,
    riskLevel,
    positiveFactors: positiveFactors.slice(0, 3),
    negativeFactors: negativeFactors.slice(0, 2),
    recommendation: score >= 650 ? 'Approve' : 'Deny'
  };
};

// API Routes

// Get system status
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'online',
    system: 'Kylax Bank AI-Powered Loan Platform',
    version: '1.0.0'
  });
});

// Submit loan application
app.post('/api/applications', (req, res) => {
  const applicationData = req.body;
  const applicationId = applicationCounter++;
  
  const application = {
    id: applicationId,
    ...applicationData,
    status: 'submitted',
    submittedAt: new Date().toISOString(),
    progress: 'Application Submitted'
  };
  
  applications.push(application);
  
  // Simulate processing stages
  setTimeout(() => {
    application.status = 'processing';
    application.progress = 'Verifying Traditional Credit';
    broadcast({ type: 'application_update', application });
  }, 1000);
  
  setTimeout(() => {
    application.progress = 'Analyzing Financial Snapshot';
    broadcast({ type: 'application_update', application });
  }, 3000);
  
  setTimeout(() => {
    application.progress = 'AI Holisti-Score™ Assessment';
    broadcast({ type: 'application_update', application });
  }, 5000);
  
  setTimeout(() => {
    const aiResult = calculateHolistiScore(applicationData);
    application.aiScore = aiResult;
    application.status = aiResult.recommendation === 'Approve' ? 'approved' : 'denied';
    application.progress = 'Final Decision';
    broadcast({ type: 'application_complete', application });
  }, 7000);
  
  res.json({ 
    success: true, 
    applicationId,
    message: 'Application submitted successfully'
  });
});

// Get application status
app.get('/api/applications/:id', (req, res) => {
  const application = applications.find(app => app.id == req.params.id);
  if (!application) {
    return res.status(404).json({ error: 'Application not found' });
  }
  res.json(application);
});

// Get all applications (for loan officer dashboard)
app.get('/api/applications', (req, res) => {
  res.json(applications);
});

// Update application status (for loan officers)
app.patch('/api/applications/:id', (req, res) => {
  const application = applications.find(app => app.id == req.params.id);
  if (!application) {
    return res.status(404).json({ error: 'Application not found' });
  }
  
  Object.assign(application, req.body);
  application.updatedAt = new Date().toISOString();
  
  broadcast({ type: 'application_update', application });
  res.json(application);
});

// Mock credit check endpoint
app.post('/api/credit-check', (req, res) => {
  const { ssn } = req.body;
  
  // Mock credit data
  const mockCreditData = {
    creditScore: 650 + Math.floor(Math.random() * 150),
    creditHistory: Math.floor(Math.random() * 15) + 1,
    creditUtilization: Math.floor(Math.random() * 80),
    hardInquiries: Math.floor(Math.random() * 5),
    delinquencies: Math.floor(Math.random() * 3)
  };
  
  setTimeout(() => {
    res.json(mockCreditData);
  }, 1500); // Simulate processing time
});

// Mock bank account connection (Plaid-like)
app.post('/api/connect-bank', (req, res) => {
  const { accountId } = req.body;
  
  // Mock bank data
  const mockBankData = {
    connected: true,
    accountId,
    balance: 5000 + Math.floor(Math.random() * 10000),
    monthlyIncome: 4000 + Math.floor(Math.random() * 3000),
    monthlyExpenses: 2500 + Math.floor(Math.random() * 1500),
    rentPayments: Math.random() > 0.2 ? 'on-time' : 'late',
    utilityPayments: Math.random() > 0.15 ? 'on-time' : 'late',
    overdraftFees: Math.floor(Math.random() * 5)
  };
  
  setTimeout(() => {
    res.json(mockBankData);
  }, 2000); // Simulate connection time
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, () => {
  console.log(`🏦 Kylax Bank AI-Powered Loan Platform running on port ${PORT}`);
  console.log(`🌐 Open http://localhost:${PORT} to access the platform`);
  console.log(`📊 Loan Officer Dashboard: http://localhost:${PORT}/dashboard`);
});