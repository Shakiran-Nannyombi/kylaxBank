#!/bin/bash

echo "🚀 Starting NVM Web Interface in Development Mode..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing server dependencies..."
    npm install
fi

if [ ! -d "client/node_modules" ]; then
    echo "📦 Installing client dependencies..."
    cd client && npm install && cd ..
fi

echo "🌐 Starting development servers..."
echo "📱 Frontend will open at http://localhost:3000"
echo "📱 Backend API at http://localhost:3001"
echo "🛑 Press Ctrl+C to stop both servers"

# Start both frontend and backend in development mode
npm run dev


