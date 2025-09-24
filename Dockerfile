# Use Node base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy project files
COPY package*.json ./
COPY . .

# Install dependencies and build app
RUN npm install && npm run build

# Install static server
RUN npm install -g serve

# Expose port (match Parcel serve or your Docker run port)
EXPOSE 1234

# Start the app
CMD ["serve", "-s", "dist", "-l", "1234"]
