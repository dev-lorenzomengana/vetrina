# Use the official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy environment file
COPY .env.local ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3003

# Start the application
CMD ["npm", "start"]