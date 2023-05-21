# PostgreSQL

* Trong PostgreSQL, có hai loại chỉ mục liên quan đến khái niệm cluster: cluster index và non-cluster index.

    - Cluster Index: Cluster index trong PostgreSQL được sử dụng để sắp xếp dữ liệu trong bảng theo thứ tự của chỉ mục. Một bảng chỉ có thể có một cluster index duy nhất. Khi bạn tạo một cluster index, dữ liệu trong bảng sẽ được tổ chức lại (reclustered) theo thứ tự của chỉ mục. Cluster index thường được sử dụng trong các trường hợp khi bạn muốn tối ưu hóa truy vấn dựa trên một trường hoặc một nhóm trường có mối quan hệ gần nhau và thường được truy vấn cùng nhau.

    - Non-cluster Index: Non-cluster index trong PostgreSQL là loại chỉ mục thông thường, không yêu cầu dữ liệu trong bảng được tổ chức lại. Non-cluster index được sử dụng để hỗ trợ truy vấn dựa trên một hoặc nhiều trường trong bảng. Một bảng có thể có nhiều non-cluster index. Non-cluster index thường được sử dụng trong các trường hợp khi bạn muốn tìm kiếm, sắp xếp hoặc thực hiện các phép so sánh trên một hoặc nhiều trường dữ liệu.

*  Khi bạn tạo chỉ mục trong PostgreSQL, bạn có thể xác định loại chỉ mục bằng cách sử dụng từ khóa CLUSTER hoặc NONCLUSTER. Nếu không xác định rõ, chỉ mục sẽ mặc định là non-cluster index.

* Vui lòng lưu ý rằng việc sử dụng cluster index hay non-cluster index phụ thuộc vào yêu cầu truy vấn và cấu trúc dữ liệu cụ thể trong hệ thống của bạn. Bạn nên xem xét và kiểm tra hiệu suất truy vấn để quyết định sử dụng loại chỉ mục phù hợp.