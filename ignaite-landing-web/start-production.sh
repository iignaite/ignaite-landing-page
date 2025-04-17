#!/bin/bash

# Start-production script for Ignaite landing page
echo "Starting Ignaite Landing Page in production mode..."

# Set production environment
export NODE_ENV=production

# Set port (default to 3000 if not specified)
PORT=${PORT:-3000}
echo "Server will run on port $PORT"

# Run Next.js in production mode
npm run start -- -p $PORT

# Error handling
if [ $? -ne 0 ]; then
  echo "Error: Failed to start the production server"
  exit 1
fi 