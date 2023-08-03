"name": Tên của ứng dụng. Đây sẽ là tên sử dụng để quản lý và xem log của ứng dụng trong pm2.
"script": Tên tệp chính (main file) của ứng dụng.
"instances": Số lượng bản sao của ứng dụng bạn muốn chạy. max có nghĩa là pm2 sẽ chạy một bản sao cho mỗi core CPU trên máy tính của bạn.
"exec_mode": Chế độ thực thi của ứng dụng. Ở đây, sử dụng "cluster" để chạy nhiều instances.
"env": Các biến môi trường bạn muốn đặt khi chạy ứng dụng.
"log_date_format": Định dạng ngày tháng cho log.
"error_file" và "out_file": Đường dẫn đến các tệp log lỗi và log thông báo đầu ra.
"merge_logs": Có gộp log từ tất cả các instances hay không.
Lưu ý rằng "instances": "max" sẽ tự động cân bằng tải (load balancing) giữa các cores CPU, và bạn không cần phải quan tâm đến số lượng cores CPU cụ thể.