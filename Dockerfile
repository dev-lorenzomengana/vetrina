# Use the official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Copy environment file and set environment variables
COPY .env.local ./
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_h3pu3m6
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_k3l9uxk
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=9vybYH-J8tVEUy2zZ

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3003

# Start the application
CMD ["npm", "start"]