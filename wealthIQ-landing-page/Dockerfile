# Stage 1 - Build the app
FROM node:latest as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 - Serve the app
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./config/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
