# NVM Web Interface

A beautiful, modern web interface for Node Version Manager (NVM) that allows you to manage Node.js versions through your browser.

## Features

- **Visual Interface**: Modern, responsive web UI built with React and Tailwind CSS
- **Real-time Updates**: WebSocket integration for live status updates
- **Version Management**: Install, switch, and uninstall Node.js versions with one click
- **Current Status**: See which version is currently active and set defaults
- **LTS Support**: Easily identify and install Long Term Support versions
- **Installation Progress**: Real-time feedback during Node.js installations

## Quick Start

### Prerequisites
- Node.js and npm installed on your system
- NVM installed and working

### Installation & Running

1. **Navigate to the project directory:**
   ```bash
   cd /home/dev-kiran/Projects/kylaxBank
   ```

2. **Run the startup script:**
   ```bash
   ./start-web.sh
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3001`

That's it! The web interface will automatically:
- Install all dependencies
- Build the React frontend
- Start the Express backend
- Open the NVM web interface

## 🖥️ Manual Setup (Alternative)

If you prefer to set up manually:

### Backend Setup
```bash
# Install server dependencies
npm install

# Start the backend server
npm run server
```

### Frontend Setup
```bash
# Install client dependencies
cd client
npm install

# Start the React development server
npm start
```

### Production Build
```bash
# Build the React app for production
cd client
npm run build
cd ..

# Start the production server
npm start
```

## How to Use

### Installing Node.js Versions
1. Click on the **"Available Versions"** tab
2. Browse the latest LTS versions
3. Click **"Install"** on any version you want
4. Watch the real-time installation progress

### Switching Node.js Versions
1. Go to the **"Installed Versions"** tab
2. Click **"Use"** on any installed version
3. The interface will update to show the new current version

### Setting Default Version
1. In the **"Installed Versions"** tab
2. Click **"Default"** on your preferred version
3. This version will be used in new terminal sessions

### Uninstalling Versions
1. In the **"Installed Versions"** tab
2. Click **"Remove"** on versions you no longer need
3. Confirm the deletion when prompted

## 🏗️ Architecture

### Backend (Express.js)
- **API Server**: RESTful API for NVM operations
- **WebSocket**: Real-time updates and progress notifications
- **Shell Integration**: Executes NVM commands via bash
- **CORS Enabled**: Allows frontend communication

### Frontend (React)
- **Modern UI**: Built with React 18 and Tailwind CSS
- **Real-time**: WebSocket client for live updates
- **Responsive**: Works on desktop and mobile devices
- **Icons**: Beautiful Lucide React icons

### API Endpoints
- `GET /api/nvm/version` - Get NVM version
- `GET /api/nvm/list` - List installed Node.js versions
- `GET /api/nvm/list-remote` - List available versions
- `GET /api/nvm/current` - Get current Node.js version
- `POST /api/nvm/install` - Install a Node.js version
- `POST /api/nvm/use` - Switch to a Node.js version
- `DELETE /api/nvm/uninstall/:version` - Uninstall a version
- `POST /api/nvm/alias/default` - Set default version
- `GET /api/node/info` - Get Node.js and npm info

## 🔧 Configuration

### Port Configuration
The server runs on port 3001 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 node server/index.js
```

### NVM Path
The backend automatically uses the `nvm.sh` script from the project directory. If you need to use a different NVM installation, modify the `nvmPath` variable in `server/index.js`.

## 🐛 Troubleshooting

### "nvm: command not found"
Make sure NVM is properly installed and the `nvm.sh` script is in the project directory.

### Port Already in Use
If port 3001 is busy, either:
- Stop the process using that port
- Change the port using the `PORT` environment variable

### Installation Failures
- Check that you have internet connectivity
- Ensure you have sufficient disk space
- Some versions may require compilation tools (gcc, g++, make)

### WebSocket Connection Issues
- Make sure both frontend and backend are running
- Check that port 3001 is accessible
- Refresh the browser page

## 🎨 Customization

### Styling
The frontend uses Tailwind CSS. You can customize the appearance by modifying the classes in `client/src/App.js`.

### Adding Features
- Backend routes: Add to `server/index.js`
- Frontend components: Add to `client/src/components/`
- WebSocket events: Modify the WebSocket handlers in both files

## 📝 Development

### Running in Development Mode
```bash
# Install dependencies
npm run install-all

# Run both frontend and backend in development mode
npm run dev
```

This will start:
- Backend server on port 3001
- React development server on port 3000 (proxied to backend)

### Building for Production
```bash
npm run build
npm start
```

## 🤝 Contributing

This web interface is an enhancement to the original NVM project. Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📄 License

This web interface follows the same MIT license as the original NVM project.

---

**Enjoy managing your Node.js versions with style! 🎉**


