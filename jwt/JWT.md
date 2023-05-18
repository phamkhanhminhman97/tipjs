* How to detect jwt token theft?

Về cơ bản lý thuyết của cách này là tạo ra 1 hệ thống cực kì nhạy cảm theo 3 bước:
- Cả RT và AT đều cùng được cấp mới mỗi lần tạo mới AT, và lưu lại RT cũ.
- Một khi RT cũ bị sử dụng lại (không cần phân biệt user hay hacker) thì hủy toàn bộ RT đang hoạt động.
- User đăng nhập lại và lấy RT mới.