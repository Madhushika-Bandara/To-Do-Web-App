# Use Node.js official image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose port for frontend
EXPOSE 5173

# Command to start the application
CMD ["npm", "run", "dev"]
