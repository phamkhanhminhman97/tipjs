1. Người dùng tạo yêu cầu merge (merge request): Người dùng sẽ tạo một yêu cầu để đưa các thay đổi từ một nhánh (branch) vào nhánh chính (main branch) hoặc nhánh khác. Điều này thường xảy ra sau khi người dùng đã hoàn thành các thay đổi trong code và muốn kiểm tra tích hợp (integration) trước khi đưa vào nhánh chính.

2. Triggers CI/CD pipeline: Khi yêu cầu merge được tạo, GitLab sẽ tự động kích hoạt CI/CD pipeline. Pipeline này sẽ chạy các bước kiểm tra, xây dựng (build), và triển khai (deploy) tự động dựa trên các tệp cấu hình được định nghĩa trong mã nguồn dự án (ví dụ: tệp .gitlab-ci.yml).

3. GitLab Runner chạy các job: GitLab Runner là phần mềm chạy trên máy tính vật lý hoặc ảo được cài đặt sẵn trên môi trường CI/CD. GitLab Runner sẽ lấy mã nguồn từ yêu cầu merge và thực hiện các bước công việc (job) trong pipeline.

4. Kiểm tra và xây dựng ứng dụng: Trong quá trình pipeline chạy, GitLab Runner sẽ kiểm tra mã nguồn, xây dựng ứng dụng, chạy các bài kiểm tra (tests), và tạo các tệp kết quả như bản cài đặt ứng dụng hoặc mã nguồn đã được biên dịch.

5. Triển khai (deploy) và kiểm tra tích hợp: Nếu quá trình kiểm tra thành công, ứng dụng có thể được triển khai tự động lên môi trường thử nghiệm (staging environment) để kiểm tra tích hợp. Điều này giúp đảm bảo rằng các thay đổi mới không gây ra sự cố trên môi trường thực tế.

6. Báo cáo kết quả: Khi pipeline hoàn thành, GitLab sẽ tạo báo cáo về kết quả của quá trình CI/CD. Người dùng và các thành viên trong nhóm phát triển có thể xem kết quả, thông báo lỗi (nếu có) và xác nhận tích hợp thành công trước khi hợp nhất (merge) thay đổi vào nhánh chính.

Như vậy, quá trình CI/CD trên GitLab Runner giúp đảm bảo rằng các thay đổi được kiểm tra kỹ lưỡng và tích hợp một cách tự động, giúp nâng cao chất lượng phần mềm và tăng tốc độ phát triển.