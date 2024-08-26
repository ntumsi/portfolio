# Step 1: Use an official Node.js image to build the Angular app
# Use an official Nginx image to serve the Angular application
FROM nginx:alpine

# Copy the build artifacts to Nginx's web directory
COPY /dist/portfolio /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
