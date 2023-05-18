
# Mongo DB chọn  B-TREE
 

 * ![alt](./mongo-design.png)

# Embedding vs. Referencing

* MongoDB sẽ cho ta 2 lựa chọn khi thiết kế dữ liệu. Chúng ta có thể gắn dữ liệu trực tiếp vào object, hoặc reference chúng và sử dụng $lookup operation để query. 

* *Reference  mặc dù cơ bản tương tự với Relation trong SQL, nhưng MongoDB không cung cấp các tính năng quan hệ như khóa ngoại (foreign key) hoặc các ràng buộc (constraints) tự động liên quan đến việc duy trì tính toàn vẹn tham chiếu.

* Ưu điểm của Reference:

  - **Tối ưu hóa dung lượng lưu trữ **: Sử dụng reference cho phép bạn tránh việc lặp lại thông tin trong nhiều tài liệu. Thay vì nhúng thông tin vào mỗi tài liệu, bạn chỉ cần lưu trữ một ObjectID tham chiếu đến tài liệu liên quan.
  - Dễ dàng thay đổi và cập nhật: Khi thông tin của tài liệu liên quan thay đổi, bạn chỉ cần cập nhật tài liệu đó mà không cần phải thay đổi các tài liệu khác tham chiếu tới nó. Điều này giúp giảm sự trùng lặp dữ liệu và đồng bộ dữ liệu dễ dàng hơn.
  - Quản lý quan hệ phức tạp: Nếu quan hệ giữa các tài liệu phức tạp và đa cấp đến mức nhúng trở nên khó khăn hoặc gây ra kích thước tài liệu quá lớn, thì sử dụng reference cho phép bạn quản lý các quan hệ phức tạp một cách linh hoạt và hiệu quả.