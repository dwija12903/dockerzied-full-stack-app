# Use the official Node.js image as base for building the React app
FROM node:16-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the built React app
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx to serve the React app
CMD ["nginx", "-g", "daemon off;"]
