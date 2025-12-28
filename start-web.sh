#!/bin/bash

echo "Starting Kylax Bank AI-Powered Loan Platform..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo " npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing server dependencies..."
    npm install
fi

if [ ! -d "client/node_modules" ]; then
    echo "Installing client dependencies..."
    cd client
    npm install
    cd ..
fi

echo "Building client..."
cd client
# Build with warnings suppressed for the useEffect dependency warning
DISABLE_ESLINT_PLUGIN=true npm run build
cd ..

echo "Starting Kylax Bank platform..."
echo "Client Portal: http://localhost:3001"
echo "Loan Officer Dashboard: http://localhost:3001/dashboard"
echo "Press Ctrl+C to stop"

node server/index.js