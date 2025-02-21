# Use a lightweight Nginx image
FROM nginx:alpine

# Copy built Angular app into Nginx web root
COPY dist/your-angular-project /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]