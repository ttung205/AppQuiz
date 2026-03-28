# App Quiz

Ứng dụng quiz học tập chạy trên nền web, hỗ trợ nhiều môn học, chia phần câu hỏi, chấm điểm tức thì và tự động lưu trạng thái làm bài.

## Demo Deploy

- Link: https://app-quiz-sepia-pi.vercel.app/

## Tính năng chính

- Chọn môn học và chọn phần câu hỏi (hoặc làm toàn bộ).
- Trộn thứ tự câu hỏi và đáp án để luyện tập hiệu quả hơn.
- Hỗ trợ cả câu hỏi một đáp án và nhiều đáp án.
- Hiển thị đúng/sai trực tiếp ngay sau khi trả lời.
- Tự động chuyển câu sau 3 giây khi trả lời đúng (kèm thanh timer).
- Khi trả lời sai, giữ nguyên câu hiện tại để xem lại.
- Lưu trạng thái làm bài bằng localStorage: reload trang vẫn tiếp tục được.
- Xem kết quả cuối bài: số câu đúng, phần trăm và đánh giá.

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Cấu trúc dự án (chính)

- index.html: Giao diện chính của ứng dụng.
- style.css: Toàn bộ giao diện và màu sắc.
- quiz-app.js: Logic quiz, điều hướng, chấm điểm, lưu trạng thái.
- DTDM.js, ATTT.js, KTPM.js, PLDC.js, Webnc.js (và các file môn khác): Dữ liệu câu hỏi theo từng môn.

## Chạy dự án ở máy local

Vì đây là dự án tĩnh (static), bạn có thể chạy theo một trong các cách sau:

1. Cách nhanh nhất:
- Mở trực tiếp file index.html bằng trình duyệt.

2. Khuyến nghị khi phát triển:
- Dùng VS Code + extension Live Server.
- Chuột phải vào index.html, chọn "Open with Live Server".

## Cách sử dụng

1. Chọn môn học.
2. Chọn phần muốn làm (hoặc toàn bộ).
3. Trả lời câu hỏi và theo dõi tiến trình.
4. Xem kết quả sau khi hoàn thành.
5. Nếu reload trang giữa chừng, ứng dụng sẽ tự khôi phục trạng thái gần nhất.

## Ghi chú

- Dữ liệu câu hỏi nằm trong các file .js theo từng môn học.
- Khi thêm môn mới, cần:
  - tạo file dữ liệu môn mới,
  - import file trong index.html,
  - thêm nút môn học tương ứng trong giao diện nếu cần.

## Tác giả

- Project: App Quiz
- Deploy: Vercel
