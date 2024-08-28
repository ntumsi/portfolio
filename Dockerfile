# Step 1: Use an NGINX base image
FROM nginx:alpine

# Step 2: Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Step 3: Clean the NGINX html directory (optional but recommended)
RUN rm -rf ./*

# Step 4: Copy the prebuilt Angular application files into the NGINX html directory
COPY dist/portfolio/* /usr/share/nginx/html/

# Step 5: Copy the custom NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Step 6: Expose the port on which the app will run
EXPOSE 80

# Step 7: Start NGINX
CMD ["nginx", "-g", "daemon off;"]
