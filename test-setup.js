#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing NVM Web Interface Setup...\n');

// Check required files
const requiredFiles = [
  'server/index.js',
  'client/package.json',
  'client/src/App.js',
  'client/public/index.html',
  'start-web.sh',
  'nvm.sh'
];

let allFilesExist = true;

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

console.log('\n🔧 Checking Node.js environment:');
console.log(`   ✅ Node.js version: ${process.version}`);
console.log(`   ✅ npm available: ${require('child_process').execSync('npm --version', {encoding: 'utf8'}).trim()}`);

if (allFilesExist) {
  console.log('\n🎉 Setup complete! You can now run the web interface:');
  console.log('   ./start-web.sh');
  console.log('\n🌐 Then open: http://localhost:3001');
} else {
  console.log('\n❌ Some files are missing. Please check the setup.');
}

console.log('\n📖 For more information, see WEB-README.md');


