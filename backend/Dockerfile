# Use Node.js official image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose port for backend
EXPOSE 8081

# Command to start the backend server
CMD ["npm", "start"]
