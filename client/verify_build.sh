#!/bin/bash
echo "Verifying production build..."
if npm run build; then
  if [ -d "build" ]; then
    echo "Build successful! The 'build' directory is ready for Vercel."
    exit 0
  else
    echo "Build command finished but 'build' directory invalid."
    exit 1
  fi
else
  echo "Build failed."
  exit 1
fi
