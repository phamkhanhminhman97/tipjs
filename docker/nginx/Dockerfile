# Sử dụng image Nginx chính thức làm image cơ sở
FROM nginx:1.25.1-alpine-slim

# Sao chép tệp cấu hình Nginx vào container
COPY nginx.conf /etc/nginx/nginx.conf

# Sao chép các tệp tĩnh (ví dụ: trang web của bạn) vào thư mục root của Nginx
# COPY your_static_files /usr/share/nginx/html

# Mở cổng 80 để Nginx lắng nghe
EXPOSE 80

# Khi container chạy, Nginx sẽ được tự động bắt đầu