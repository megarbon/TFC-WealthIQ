# Stage 1: Build the Astro app
FROM node:lts AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Astro app
RUN npm run build

# Stage 2: Serve the Astro app using NGINX
FROM nginx:alpine AS runtime

# Copy the custom NGINX configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built files from the previous stage to the NGINX document root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
