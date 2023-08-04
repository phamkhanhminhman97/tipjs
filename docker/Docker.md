docker build . -t <your username>/node-web-app

# Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container

docker run -p 49160:8080 -d <your username>/node-web-app
docker run -it -d --name name_container -p 3000:3000 phamminhman10/base-nestjs

# Enter the container
$ docker exec -it <container id> /bin/bash | sh

# Tag
$ docker tag phamminhman10/base-nestjs:latest phamminhman10/base-nestjs:v1

# Push
$ docker push phamminhman10/qweqwe:tagname 

$ docker network create your_network_name


$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container1

$ docker exec -it container1 ping container2

$ docker exect -it container1 sh

$ apk add curl

$ curl container2:port



Cấp độ cơ bản:

Docker là gì và tại sao nó được sử dụng?
Docker Image và Docker Container khác nhau như thế nào?
Làm thế nào để tạo một Docker Container từ một Docker Image?
Tại sao chúng ta sử dụng Docker Compose và những lợi ích của nó?
Cách tạo một Docker Image từ một Dockerfile?
Cấp độ trung bình:
6. Để gỡ bỏ một Docker Container, bạn sẽ sử dụng lệnh nào?

Làm thế nào để ánh xạ cổng của máy chủ vào container?
Docker Volume là gì và tại sao chúng ta nên sử dụng nó?
Docker Networking cho phép các container giao tiếp như thế nào?
Tại sao chúng ta nên sử dụng Docker Swarm hoặc Kubernetes để quản lý các container phức tạp hơn?
Cấp độ nâng cao:
11. Cách sử dụng Docker Hub để lưu trữ và chia sẻ Docker Images?

Làm thế nào để ghi nhật ký (logs) của container và truy cập vào chúng?
Docker Layer là gì và tại sao chúng quan trọng trong quá trình xây dựng Docker Image?
Tối ưu hóa kích thước của Docker Image: Bạn sẽ làm gì để giảm kích thước của một Docker Image?
Điều gì xảy ra khi bạn chạy lệnh docker run?

Cấp độ cơ bản:

Docker là gì và tại sao nó được sử dụng?

Docker là một nền tảng ảo hóa dựa trên container cho phép bạn tạo, triển khai và chạy ứng dụng một cách dễ dàng và bảo đảm tính di động giữa các môi trường. Nó giúp tiết kiệm thời gian và giảm sự phụ thuộc vào hạ tầng vật lý.
Docker Image và Docker Container khác nhau như thế nào?

Docker Image là một mẫu chỉ định (template) dùng để tạo Docker Container. Nó bao gồm mã nguồn ứng dụng, các thư viện cần thiết, biến môi trường và các tùy chọn cấu hình khác.
Docker Container là một thể hiện thực tế (instance) của Docker Image. Nó là môi trường chạy ứng dụng và hoạt động độc lập với các container khác.
Làm thế nào để tạo một Docker Container từ một Docker Image?

Để tạo Docker Container từ Docker Image, bạn sử dụng lệnh docker run. Ví dụ: docker run -d --name my-container my-image:latest.
Tại sao chúng ta sử dụng Docker Compose và những lợi ích của nó?

Docker Compose giúp quản lý và triển khai nhiều container cùng một lúc, đồng thời định nghĩa các phụ thuộc và cài đặt môi trường. Nó giúp đơn giản hóa quá trình triển khai ứng dụng phức tạp và xác định cấu hình trong một tệp duy nhất.
Cách tạo một Docker Image từ một Dockerfile?

Để tạo Docker Image từ Dockerfile, bạn sử dụng lệnh docker build. Ví dụ: docker build -t my-image:latest ..
Cấp độ trung bình:
6. Để gỡ bỏ một Docker Container, bạn sẽ sử dụng lệnh nào?

Để gỡ bỏ một Docker Container, bạn sử dụng lệnh docker rm <container_id_or_name>.
Làm thế nào để ánh xạ cổng của máy chủ vào container?

Bạn có thể ánh xạ cổng của máy chủ vào container bằng cách sử dụng tùy chọn -p khi chạy lệnh docker run. Ví dụ: docker run -d -p 8080:80 my-image:latest ánh xạ cổng 80 của container vào cổng 8080 của máy chủ.
Docker Volume là gì và tại sao chúng ta nên sử dụng nó?

Docker Volume là một cơ chế để lưu trữ dữ liệu bên ngoài container, cho phép bạn giữ dữ liệu giữa các lần chạy container. Chúng hỗ trợ sao lưu dữ liệu, chia sẻ dữ liệu giữa các container và đảm bảo dữ liệu không bị mất khi container bị xóa.
Docker Networking cho phép các container giao tiếp như thế nào?

Docker Networking cho phép các container giao tiếp thông qua mạng cùng một host hoặc qua mạng ảo riêng tư. Docker cung cấp một số loại mạng như bridge, host, overlay, và macvlan để hỗ trợ việc giao tiếp giữa các container.
Tại sao chúng ta nên sử dụng Docker Swarm hoặc Kubernetes để quản lý các container phức tạp hơn?

Docker Swarm và Kubernetes đều là các công cụ quản lý container cho phép bạn triển khai và quản lý các ứng dụng phức tạp chạy trên nhiều container. Chúng cung cấp tự động hóa, thống nhất và mở rộng để giải quyết các yêu cầu phức tạp của ứng dụng trong môi trường sản xuất.
Cấp độ nâng cao:
11. Cách sử dụng Docker Hub để lưu trữ và chia sẻ Docker Images?
- Docker Hub là một dịch vụ lưu trữ Docker Image trực tuyến. Bạn có thể sử dụng lệnh docker push để đưa Docker Image lên Docker Hub và docker pull để tải về Image từ Docker Hub.

Làm thế nào để ghi nhật ký (logs) của container và truy cập vào chúng?

Bạn có thể sử dụng lệnh docker logs <container_id_or_name> để xem nhật ký của container. Nếu bạn muốn ghi nhật ký vào một tệp, bạn có thể sử dụng tùy chọn -a và định tuyến đầu ra vào một tệp.
Docker Layer là gì và tại sao chúng quan trọng trong quá trình xây dựng Docker Image?

Docker Image được hình thành từ nhiều lớp (layer) khác nhau, mỗi lớp đại diện cho một phần của Docker Image. Docker sử dụng lớp này để tối ưu hóa việc lưu trữ và cập nhật Image. Các lớp làm cho việc xây dựng và cập nhật Image trở nên hiệu quả hơn.
Tối ưu hóa kích thước của Docker Image: Bạn sẽ làm gì để giảm kích thước của một Docker Image?

Để giảm kích thước của Docker Image, bạn có thể sử dụng alpine base image thay vì ubuntu hay debian, xóa các file tạm thời và cache trong quá trình build, sử dụng multi-stage build, và làm sạch các gói phụ thuộc không cần thiết.
Điều gì xảy ra khi bạn chạy lệnh docker run?

Khi bạn chạy lệnh docker run, Docker Engine sẽ tạo một instance mới của Docker Container từ Docker Image tương ứng. Docker Engine sẽ tạo một môi trường riêng cho container và chạy ứng dụng bên trong nó. Container sẽ chạy trong trạng thái tách biệt và hoạt động độc lập với các container khác trên cùng một host.   