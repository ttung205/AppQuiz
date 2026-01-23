// Quiz Webnc.js - Generated from provided question text
// Structure mirrors PLDC.js: questionsData[], then slicing.

var questionsData = [
  // Câu 1
  {
    question:
      "1. Trong PHP, sau khi thực hiện đoạn mã kết quả hiển thị sẽ là gì? (Nhập chính xác cả dấu cách) $a; for ($a = 1; $a <= 9; $a++) { if ($a == 5) continue; echo ($a); }",
    options: ["12346789", "123456789", "12345678", "12345679"],
    correct: 0,
  },
  // Câu 2
  {
    question:
      "2. Trong PHP, sau khi thực hiện đoạn mã kết quả hiển thị sẽ là gì? (Nhập chính xác cả dấu cách) $s = '13149'; $s[$s[1]] = $s[1] + $s[3]; echo($s);",
    options: ["13179", "13149", "13189", "13199"],
    correct: 0,
  },
  // Câu 3
  {
    question: "3. Toán tử ?? trong biểu thức $x = $y ?? $z có ý nghĩa gì?",
    options: [
      "$x nhận giá trị $y nếu $y tồn tại và có giá trị",
      "$x nhận giá trị $y nếu $y là đúng (true)",
      "$x nhận giá trị $y nếu $y > $z",
      "$x nhận giá trị $y nếu $y là sai (false)",
    ],
    correct: 0,
  },
  // Câu 4
  {
    question: "4. Toán tử <=> có ý nghĩa như thế nào?",
    options: [
      "Trả về các giá trị nhỏ hơn không, bằng không hoặc lớn hơn không tùy thuộc vào hai đối số",
      "Toán tử không tồn tại trong PHP",
      "So sánh khác về giá trị và kiểu dữ liệu",
      "So sánh khác",
    ],
    correct: 0,
  },
  // Câu 5
  {
    question:
      "5. Đoạn mã sau, in ra giá trị nào sau đây? $var = '0'; if ($var) { echo 'true';} else { echo 'false';}",
    options: ["true", "true false", "false", "không có giá trị"],
    correct: 2,
  },
  // Câu 6
  {
    question:
      "6. Vòng lặp nào trong PHP được thiết kế đặc biệt để lặp qua các mảng?",
    options: [
      "vòng lặp while",
      "vòng lặp do-while",
      "vòng lặp foreach",
      "vòng lặp for",
    ],
    correct: 2,
  },

  // Câu 7
  {
    question:
      "7. Thành phần nào sau đây KHÔNG phải là thành phần chính của kiến trúc Laravel?",
    options: [
      "Middleware",
      "View Composers",
      "Event Listeners",
      "URL Generators",
      "Service Providers",
    ],
    correct: 3,
  },
  // Câu 8 (multi)
  {
    question:
      "8. Điều gì cần lưu ý khi triển khai ứng dụng tới đám mây hoặc máy chủ chia sẻ? (Chọn 3)",
    options: [
      "Scalability and performance",
      "Cost and pricing plans",
      "User interface design",
      "Security measures",
    ],
    correct: [0, 1, 3],
  },
  // Câu 9
  {
    question:
      "9. Hành động nào **không thể** được thực hiện thông qua một cuộc tấn công SQL injection thành công?",
    options: [
      "Xóa một bảng trong cơ sở dữ liệu",
      "Xem các tên trường",
      "Định dạng lại ổ cứng của máy chủ web ứng dụng",
      "Hiển thị danh sách số điện thoại của khách hàng",
    ],
    correct: 2,
  },

  // Câu 10
  {
    question:
      "10. Thư mục nào trong ứng dụng Laravel chứa các HTTP controller?",
    options: [
      "app/Http/Routes",
      "app/Http/Controllers",
      "public/Controllers",
      "config/Controllers",
    ],
    correct: 1,
  },
  // Câu 11
  {
    question: "11. Kiểu dữ liệu nào sau đây KHÔNG hợp lệ trong PHP?",
    options: ["Float", "Integer", "String", "Character", "Boolean"],
    correct: 3,
  },
  // Câu 12
  {
    question: "12. Kiểu dữ liệu nào phù hợp của PHP?",
    options: ["Tuple", "Integer", "Decimal", "Character"],
    correct: 1,
  },
  // Câu 13
  {
    question: "13. Mục đích chính của Controller trong mô hình MVC (Laravel)?",
    options: [
      "Quản lý dữ liệu và business logic",
      "Tạo bản ghi DB",
      "Định nghĩa routes và xử lý middleware",
      "Xử lý logic trình bày và hiển thị view",
    ],
    correct: 0,
  },
  {
    question: "14. Các vector tấn công SQL Injection?",
    options: [
      "Thông qua dữ liệu người dùng nhập (GET/POST) và cookies",
      "Tất cả đều sai",
      "Thông qua cookies",
      "Thông qua dữ liệu người dùng nhập (GET/POST)",
    ],
    correct: 0,
  },
  {
    question:
      "15. Thực hành được khuyến nghị để xử lý validation trong Laravel API controller?",
    options: [
      "Sử dụng Form Request classes",
      "Tự kiểm tra thủ công bằng isset()",
      "Trả về mã lỗi 500 khi validation thất bại",
      "Bỏ qua validation",
    ],
    correct: 0,
  },
  {
    question: "16. Mục đích của Composer trong Laravel?",
    options: [
      "Cấu hình kết nối cơ sở dữ liệu",
      "Quản lý các thư viện PHP (dependencies)",
      "Build tài nguyên front-end",
      "Xử lý HTTP request",
    ],
    correct: 1,
  },
  {
    question: "17. Ưu điểm của Laravel? (Chọn 3)",
    options: [
      "Cấu hình phức tạp",
      "Artisan CLI",
      "Tính mô-đun (Modularity)",
      "Eloquent ORM",
      "Hỗ trợ thư viện hạn chế",
    ],
    correct: [1, 2, 3],
  },
  {
    question: "18. Trường hợp sử dụng hợp lệ của Artisan CLI?",
    options: [
      "Chạy React",
      "Tạo code mẫu (boilerplate)",
      "Cấu hình web server",
      "Xử lý HTTP request trực tiếp",
    ],
    correct: 1,
  },

  // Câu 19
  {
    question: "19. Điều nào KHÔNG phải là tấn công DOS?",
    options: ["SYN flood", "Smurf", "Ping flood", "Push flood"],
    correct: 3,
  },
  // Câu 20
  {
    question: "20. Thuộc tính HTML dùng để xác định URL gửi form?",
    options: ["target", "method", "action", "enctype"],
    correct: 2,
  },
  {
    question: "21. Tính năng của Artisan CLI trong Laravel?",
    options: [
      "Xử lý HTTP requests",
      "Quản lý các thành phần giao diện front-end",
      "Kiểm soát xác thực người dùng",
      "Tự động hoá các tác vụ lặp lại",
    ],
    correct: 3,
  },
  {
    question: "22. Thực hành tốt nhất để tổ chức ứng dụng Laravel (Chọn 2)",
    options: [
      "Đặt tên mô tả, dễ hiểu",
      "Bỏ qua các tiêu chuẩn PSR",
      "Tránh sử dụng các tính năng có sẵn",
      "Viết tài liệu cho code",
    ],
    correct: [0, 3],
  },

  // Câu 23
  {
    question: "23. Blade directive KHÔNG hợp lệ?",
    options: ["@foreach", "@extend", "@middleware", "@if"],
    correct: 2,
  },
  // Câu 24
  {
    question: "24. Laravel command tạo migration mới?",
    options: [
      "php artisan make:model",
      "php artisan make:controller",
      "php artisan make:request",
      "php artisan make:migration",
    ],
    correct: 3,
  },
  // Câu 25
  {
    question: "25. Mục đích của phương thức store() trong RESTful controller?",
    options: [
      "Lưu một tài nguyên mới",
      "Lấy tất cả tài nguyên",
      "Xóa tài nguyên",
      "Cập nhật tài nguyên",
    ],
    correct: 0,
  },

  // Câu 26
  {
    question: "26. Đoạn mã: $var = 'a'; $VAR = 'b'; echo \"$var$VAR\"; in ra?",
    options: ["aa", "ab", "bb", "error"],
    correct: 1,
  },
  // Câu 27
  {
    question:
      "27. Biến biến (variable variables): $father = 'mother'; $mother = 'son'; echo $$father;",
    options: ["son", "mother", "father", "error"],
    correct: 0,
  },

  // Câu 28
  {
    question:
      "28. $check='false'; if($check){ echo 'true'; } else { echo 'false'; }",
    options: ["true", "false", "Không có giá trị", "true false"],
    correct: 0,
  },
  // Câu 29
  {
    question: "29. if (null === false) { echo 'true'; } else { echo 'false'; }",
    options: ["không in", "true", "false", "lỗi"],
    correct: 2,
  },
  // Câu 30 (multi)
  {
    question: "30. Nhiệm vụ chính của API controller? (Chọn 2)",
    options: [
      "Triển khai trực tiếp business logic",
      "Định nghĩa route trong controller",
      "Quản lý schema và migration",
      "Xử lý HTTP request và response",
      "Tương tác với model để thực hiện CRUD",
    ],
    correct: [3, 4],
  },
  {
    question: "31. Chức năng thực tế của Artisan CLI?",
    options: [
      "Tự động quản lý giao dịch DB",
      "Chạy các tác vụ theo lịch (scheduled tasks)",
      "Serve trang web",
      "Xử lý xác thực người dùng",
    ],
    correct: 1,
  },
  {
    question:
      "32. Blade directives dùng cho kế thừa template? (Chọn 2 - danh sách thiếu @section/@yield)",
    options: ["@foreach", "@route", "@extends", "@inject"],
    correct: 2,
  },
  {
    question: "33. Vai trò chính của Eloquent ORM?",
    options: [
      "Xử lý HTTP",
      "Giao tiếp với cơ sở dữ liệu",
      "Định nghĩa routes",
      "Quản lý schema và migrations",
    ],
    correct: 1,
  },

  // Câu 34
  {
    question: "34. Bản chất của một cuộc tấn công SQL injection?",
    options: [
      "Máy chủ SQL tấn công trình duyệt",
      "Hiển thị mã SQL để kiểm tra",
      "Liên kết SQL servers thành botnet",
      "Chèn câu lệnh SQL qua input chưa lọc",
    ],
    correct: 3,
  },
  // Câu 35
  {
    question: "35. Purpose of a Blade template?",
    options: [
      "Định nghĩa cấu trúc bảng DB",
      "Sinh HTML động cho view",
      "Tương tác DB bằng Eloquent",
      "Xử lý HTTP request",
    ],
    correct: 1,
  },
  // Câu 36
  {
    question: "36. Command tạo dự án Laravel mới?",
    options: [
      "composer new-project laravel/laravel projectname",
      "laravel new projectname",
      "composer create-project –prefer-dist laravel/laravel projectname",
      "composer install laravel/laravel projectname",
    ],
    correct: 2,
  },
  // Câu 37
  {
    question:
      "37. Casting chuỗi: $str = '5.5dollars'; (double)$str; (int)$str; (string)$str; echo $str;",
    options: ["5.5dollars", "15", "5.5", "'5.5dollars'"],
    correct: 0,
  },
  // Câu 38
  {
    question: "38. $num = '1'; $ber = '2'; echo $num + $ber;",
    options: ["3", "12", "'12'", "1"],
    correct: 0,
  },
  // Câu 39
  {
    question: "39. Lệnh nào xuất nội dung ra trình duyệt?",
    options: ["cout<<", "echo", "write", "say"],
    correct: 1,
  },
  {
    question: "40. Chức năng thực tế của Artisan CLI?",
    options: [
      "Serve trang web",
      "Chạy các tác vụ theo lịch (scheduled tasks)",
      "Xử lý logic xác thực",
      "Tự động quản lý giao dịch database",
    ],
    correct: 1,
  },
  {
    question: "41. Nhiệm vụ có thể thực hiện với Laravel?",
    options: [
      "Xây dựng RESTful API",
      "Phát triển game mobile",
      "Chạy mô hình Machine Learning",
      "Tạo ứng dụng desktop",
    ],
    correct: 0,
  },

  // Câu 42
  {
    question: "42. Cookie không được tạo bởi trang web đang xem gọi là?",
    options: [
      "Fourth-party cookie",
      "Second-party cookie",
      "First-party cookie",
      "Third-party cookie",
    ],
    correct: 3,
  },
  // Câu 43 (multi)
  {
    question: "43. Tasks với Eloquent ORM? (Chọn 2)",
    options: [
      "Deleting records",
      "Serving static assets",
      "Defining routes",
      "Creating records",
    ],
    correct: [0, 3],
  },
  // Câu 44
  {
    question: "44. Cú pháp route hợp lệ sử dụng controller action?",
    options: [
      "Route::get('/user', 'UserController@show');",
      "Route::action('/user', 'UserController@show');",
      "Route::post('/user', 'UserController');",
      "Route::controller('/user', 'UserController@show');",
    ],
    correct: 0,
  },
  // Câu 45
  {
    question: "45. Nested loops output? for x=1..2, y=1..3 skip when x==y",
    options: [
      "x = 1 y = 2x = 1 y = 3x = 2 y = 1x = 2 y = 3",
      "x=1y=2 x=1y=3",
      "x=1y=2x=2y=3",
      "x=2y=1x=2y=3",
    ],
    correct: 0,
  },
  // Câu 46
  {
    question: "46. Toán tử nào sau đây không tồn tại trong PHP?",
    options: ["<=>", "><", "<>", "!=="],
    correct: 1,
  },
  // Câu 47
  {
    question: "47. Mặc định của một biến không có giá trị là?",
    options: ["none", "null", "Không có khái niệm như vậy", "undef"],
    correct: 1,
  },
  // Câu 48
  {
    question:
      "48. Kết quả của đoạn code: switch(1){case1:print('Book Details');case2:print('Book Author');default:print('Missing Book');}",
    options: [
      "Book DetailsBook AuthorMissing Book",
      "Book Details",
      "Book Author",
      "Missing Book",
    ],
    correct: 0,
  },
  {
    question: "49. Phần thiết yếu trong kiến trúc Laravel?",
    options: [
      "Trình tạo URL (URL Generators)",
      "Middleware",
      "REST API Controllers",
      "XML Parsers",
    ],
    correct: 1,
  },
  // Câu 50
  {
    question: "50. $a = array(); if ($a == null) echo?",
    options: ["lỗi", "không in", "false", "true"],
    correct: 2,
  },
  // Câu 51
  {
    question: "51. Tên biến không đúng?",
    options: ["$number_in_class", "$number-in-class", "$nic", "$NumberInClass"],
    correct: 1,
  },
  // Câu 52
  {
    question: "52. Giá trị $var = 1 / 2;",
    options: ["0,5", "2", "0", "1"],
    correct: 0,
  },
  // Câu 53
  {
    question: "53. Đoạn mã nào dùng chú thích PHP?",
    options: [
      "# you are pretty",
      "// you are handsome",
      "/* commented code here */",
      "Tất cả đều đúng",
    ],
    correct: 3,
  },
  // Câu 54
  {
    question:
      "54. Truy cập phần tử 'd' trong $a = array('a', 3=>'b', 1=>'c', 'd');",
    options: ["$a[4]", "$a[3]", "$a[2]", "$a[1]"],
    correct: 0,
  },
  // Câu 55
  {
    question: "55. $foo='bar'; echo '$foo\\'' . \"$foo\\'\";",
    options: ["$foo\\'bar\\'", "$foo'bar\\'", "$foo bar", "bar$foo"],
    correct: 0,
  },
  // Câu 56
  {
    question: "56. PHP viết tắt của?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Transfer Protocol",
      "Preprocessed Hypertext Page",
      "PHP: Hypertext Preprocessor",
    ],
    correct: 3,
  },
  // Câu 57
  {
    question: "57. $RESULT = 11 + 011 + 0x11;",
    options: ["39", "22", "11", "37"],
    correct: 3,
  },
  // Câu 58
  {
    question: "58. Chuỗi nối: 'ab' + 'cd' + 'abc' =>?",
    options: ["abcdabc", "abcdbc", "abdcabc", "abccdab"],
    correct: 0,
  },
  // Câu 59
  {
    question: "59. Kiểu dữ liệu gán cho $x = 50.0?",
    options: ["Float", "Integer", "String", "Double"],
    correct: 0,
  },
  // Câu 60
  {
    question: "60. Giá trị $e = ($a*$b)+$c*$d/$a với a=5,b=12,c=10,d=7?",
    options: ["74", "70", "60", "84"],
    correct: 0,
  },
  // Câu 61
  {
    question: "61. Ký hiệu dùng khi sử dụng biến PHP?",
    options: ["$", "@", "&", "#"],
    correct: 0,
  },
  // Câu 62
  {
    question: "62. Kiểu dữ liệu của $z = $x % $y?",
    options: ["Integer", "Float", "String", "Boolean"],
    correct: 0,
  },
  // Câu 63
  {
    question: "63. while ($x < 10) { $x--; } với $x=25 ban đầu; echo $x;",
    options: ["25", "24", "10", "Không in"],
    correct: 0,
  },
  // Câu 64
  {
    question: "64. echo (int) '1235Jason';",
    options: ["1235", "Jason", "0", "Error"],
    correct: 0,
  },
  //cousera
  {
    question:
      "1. Trong bối cảnh của Laravel và PHP, phần mềm trung gian là gì và nó được sử dụng như thế nào trong các ứng dụng web?",
    options: [
      "Phần mềm trung gian cung cấp cơ chế xác thực để xác minh danh tính của người dùng truy cập ứng dụng.",
      "Middleware là một tập hợp các công cụ để trực tiếp thao tác cơ sở dữ liệu trong một ứng dụng Laravel.",
      "Middleware là một lớp chặn các yêu cầu HTTP và cho phép lọc và xử lý trước khi yêu cầu đến ứng dụng.",
      "Middleware đại diện cho một công cụ mẫu được sử dụng để hiển thị các chế độ xem HTML cho người dùng.",
    ],
    correct: 2,
  },
  {
    question:
      "2. Những lợi ích chính của kiến trúc MVC trong phát triển web là gì?",
    options: [
      "Cải thiện lưu trữ dữ liệu",
      "Triển khai dự án nhanh hơn",
      "Các tính năng bảo mật nâng cao",
      "Tách các mối quan tâm và mã có tổ chức",
    ],
    correct: 3,
  },
  {
    question: "3. Mục đích của vòng lặp 'for' trong PHP là gì?",
    options: [
      "Để thoát khỏi kịch bản",
      "Để xác định các hàm nhiều lần",
      "Để thực thi một khối mã một số lần cụ thể",
      "Để thực thi mã cho đến khi một điều kiện là sai",
    ],
    correct: 2,
  },
  {
    question: "4. Mục đích của thư mục ứng dụng trong dự án Laravel là gì?",
    options: [
      "Đóng vai trò là điểm vào cho các yêu cầu HTTP",
      "Chứa logic ứng dụng và mô hình",
      "Quản lý định tuyến và phần mềm trung gian",
      "Lưu trữ các tập tin cấu hình",
    ],
    correct: 1,
  },
  {
    question:
      "5. Thành phần nào của Laravel cho phép tương tác giao diện dòng lệnh?",
    options: [
      "Artisan CLI",
      "Định tuyến phần mềm trung gian",
      "Eloquent ORM",
      "Công cụ tạo mẫu Blade",
    ],
    correct: 0,
  },
  {
    question: "6. Mục đích của Eloquent ORM trong Laravel là gì?",
    options: [
      "Cách gửi thông báo qua email",
      "Để quản lý định tuyến ứng dụng",
      "Để cung cấp một triển khai ActiveRecord đơn giản để làm việc với cơ sở dữ liệu",
      "Để xác thực người dùng",
    ],
    correct: 2,
  },
  {
    question:
      "7. Ưu điểm chính của việc sử dụng PHP cho kịch bản phía máy chủ trong phát triển web là gì?",
    options: [
      "PHP chỉ hỗ trợ kết xuất nội dung tĩnh",
      "PHP được sử dụng độc quyền cho kịch bản phía máy khách",
      "PHP giới hạn các tùy chọn kết nối cơ sở dữ liệu",
      "PHP cho phép tạo nội dung động và tương tác cơ sở dữ liệu",
    ],
    correct: 3,
  },
  {
    question:
      "8. Ưu điểm chính của việc sử dụng công cụ dòng lệnh Artisan của Laravel khi phát triển ứng dụng là gì?",
    options: [
      "Quản lý kiểu CSS",
      "Tạo giao diện đồ họa",
      "Xử lý phản hồi JSON",
      "Tự động hóa các tác vụ lặp đi lặp lại",
    ],
    correct: 3,
  },
  {
    question:
      "9. Laravel tạo điều kiện phát triển ứng dụng web động thông qua các mẫu Blade như thế nào?",
    options: [
      "Bằng cách thực hiện lọc yêu cầu HTTP",
      "Bằng cách quản lý lược đồ cơ sở dữ liệu",
      "Bằng cách định cấu hình dịch vụ ứng dụng",
      "Bằng cách cho phép các chế độ xem có thể tái sử dụng với kế thừa mẫu",
    ],
    correct: 3,
  },
  {
    question:
      "10. Trong PHP, làm thế nào bạn có thể hiển thị văn bản 'Hello World' trên một trang web?",
    options: [
      "Sử dụng print('Xin chào thế giới');",
      "Sử dụng echo 'Hello World';",
      "Sử dụng screen('Xin chào thế giới');",
      "Sử dụng <p>Hello World</p>",
    ],
    correct: 1,
  },
  {
    question:
      "11. Tính năng Laravel nào cho phép bạn xác định đóng cửa thực thi khi một sự kiện cụ thể xảy ra trong ứng dụng của bạn?",
    options: [
      "Bộ điều khiển",
      "Phần mềm trung gian",
      "Người nghe sự kiện",
      "Nhà cung cấp dịch vụ",
    ],
    correct: 2,
  },
  {
    question:
      "12. Thư viện PHP nào có thể được tích hợp với Laravel để tăng cường khả năng bộ nhớ đệm?",
    options: ["Memcached", "Swift Mailer", "Redis", "Guzzle"],
    correct: 2,
  },
  {
    question:
      "13. Không gian tên được sử dụng để làm gì trong các ứng dụng Laravel?",
    options: [
      "Sắp xếp mã và tránh đụng độ tên",
      "Cho phép xử lý dữ liệu thời gian thực",
      "Tăng hiệu suất ứng dụng",
      "Đơn giản hóa việc di chuyển cơ sở dữ liệu",
    ],
    correct: 0,
  },
  {
    question:
      "14. Thành phần quan trọng nào trong kiến trúc của Laravel chịu trách nhiệm xử lý các yêu cầu HTTP và xác định tuyến đường cho các trang web?",
    options: [
      "Bộ điều khiển",
      "Phần mềm trung gian",
      "Nhà cung cấp dịch vụ",
      "Mô hình",
    ],
    correct: 0,
  },
  {
    question: "15. Mục đích chính của một hàm trong PHP là gì?",
    options: [
      "Để sửa đổi cài đặt máy chủ",
      "Cách đóng gói một tập hợp các hướng dẫn để tái sử dụng",
      "Để xử lý kết nối cơ sở dữ liệu",
      "Để tạo kiểu cho các trang web",
    ],
    correct: 1,
  },
  {
    question:
      "16. Tính năng nào của Laravel cung cấp cú pháp đơn giản, thanh lịch cho các tương tác cơ sở dữ liệu?",
    options: ["Artisan CLI", "Eloquent ORM", "Gói mô-đun", "Cơ chế xác thực"],
    correct: 1,
  },
  {
    question:
      "17. Loại dữ liệu nào sau đây là kiểu dữ liệu số nguyên hợp lệ trong PHP?",
    options: ["float", '"42"', "42.0", "42"],
    correct: 3,
  },
  {
    question:
      "18. Vai trò của Nhà cung cấp dịch vụ trong Laravel là gì và họ đóng góp như thế nào vào cấu trúc ứng dụng?",
    options: [
      "Nhà cung cấp dịch vụ chịu trách nhiệm quản lý các phiên người dùng và cookie trong các ứng dụng Laravel.",
      "Các nhà cung cấp dịch vụ đóng vai trò là bộ điều khiển tương tác với các mô hình và chế độ xem trong các ứng dụng Laravel.",
      "Các nhà cung cấp dịch vụ được sử dụng để xác định các tuyến đường và xử lý các yêu cầu HTTP trong các ứng dụng Laravel.",
      "Các nhà cung cấp dịch vụ là nơi trung tâm của quá trình khởi động ứng dụng trong Laravel, đăng ký dịch vụ và ràng buộc trong vùng chứa dịch vụ.",
    ],
    correct: 3,
  },
  {
    question: "19. Toán tử nào được sử dụng cho logic AND trong PHP?",
    options: ["!", "||", "==", "&&"],
    correct: 3,
  },
  {
    question:
      "20. Một lợi thế chính của việc sử dụng các thư viện PHP được tích hợp trong khuôn khổ Laravel để phát triển ứng dụng web là gì?",
    options: [
      "Giảm độ phức tạp của mã và gỡ lỗi dễ dàng hơn.",
      "Nâng cao chức năng và quy trình phát triển hợp lý.",
      "Cú pháp đơn giản hóa và đánh dấu cú pháp dễ dàng cho các nhà phát triển.",
      "Cải thiện tốc độ hiệu suất và giảm tải máy chủ.",
    ],
    correct: 1,
  },
  {
    question:
      "1. Vai trò chính của bộ điều khiển trong mẫu MVC trong Laravel là gì?",
    options: [
      "Bộ điều khiển chịu trách nhiệm tạo kiểu cho giao diện người dùng.",
      "Người kiểm soát đóng vai trò trung gian, xử lý các yêu cầu và trả lời phản hồi.",
      "Bộ điều khiển tạo HTML bằng cách sử dụng các mẫu Blade trực tiếp.",
      "Bộ điều khiển xác định lược đồ cơ sở dữ liệu và các mối quan hệ.",
    ],
    correct: 1,
  },
  {
    question:
      "2. Trong Laravel, mục đích chính của việc sử dụng phần mềm trung gian trong định nghĩa tuyến đường là gì?",
    options: [
      "Phần mềm trung gian nhóm các tuyến dựa trên các đặc điểm được chia sẻ.",
      "Phần mềm trung gian được sử dụng để xác định các tham số tuyến đường và các tuyến đường được đặt tên.",
      "Phần mềm trung gian xử lý các yêu cầu tại các điểm khác nhau trước hoặc sau khi thực hiện tuyến đường.",
      "Phần mềm trung gian phục vụ lượt xem trực tiếp cho khách hàng.",
    ],
    correct: 2,
  },
  {
    question:
      "3. Điều nào sau đây mô tả tốt nhất việc sử dụng Eloquent ORM trong Laravel?",
    options: [
      "Nó là một công cụ để quản lý các tuyến ứng dụng",
      "Nó là một công cụ mẫu để kết xuất HTML",
      "Nó cung cấp một triển khai bản ghi hoạt động để làm việc với cơ sở dữ liệu",
      "Nó cung cấp phần mềm trung gian để bảo mật các tuyến",
    ],
    correct: 2,
  },
  {
    question:
      "4. Làm thế nào để Middleware có thể được sử dụng để lọc các yêu cầu HTTP đến dựa trên vai trò người dùng trong Laravel?",
    options: [
      "Phần mềm trung gian chuyển đổi vai trò người dùng thành quyền trong quá trình chặn yêu cầu HTTP.",
      "Phần mềm trung gian mã hóa vai trò người dùng để bảo mật chúng trong quá trình xử lý yêu cầu.",
      "Phần mềm trung gian tự động gán vai trò cho người dùng dựa trên dữ liệu yêu cầu của họ.",
      "Phần mềm trung gian có thể kiểm tra vai trò của người dùng trong quá trình xử lý yêu cầu và cho phép hoặc từ chối truy cập cho phù hợp.",
    ],
    correct: 3,
  },
  {
    question:
      "5. Chỉ thị Blade nào được sử dụng để bao gồm một chế độ xem khác trong mẫu Blade?",
    options: ["@extend", "@section", "@yield", "@include"],
    correct: 3,
  },
  {
    question:
      "6. Phương pháp nào trong bộ điều khiển Laravel thường được sử dụng để truyền dữ liệu sang chế độ xem?",
    options: [
      "Phương pháp đính kèm được sử dụng để truyền dữ liệu đến chế độ xem.",
      "Phương thức trả về chuyển dữ liệu đến các chế độ xem trong Laravel.",
      "Phương thức gửi được thiết kế để truyền dữ liệu đến chế độ xem.",
      "Phương thức with được sử dụng để truyền dữ liệu đến các chế độ xem trong Laravel.",
    ],
    correct: 3,
  },
  {
    question:
      "7. Laravel Blade giúp tạo các trang HTML động và có thể tái sử dụng như thế nào?",
    options: [
      "Bằng cách quản lý các yêu cầu HTTP trực tiếp",
      "Bằng cách biên dịch mã PHP thành JavaScript",
      "Bằng cách sử dụng các chỉ thị và bố cục",
      "Bằng cách xác định lược đồ cơ sở dữ liệu",
    ],
    correct: 2,
  },
  {
    question:
      "8. Eloquent ORM cho phép tương tác với cơ sở dữ liệu bằng cách nào?",
    options: [
      "Eloquent ORM cho phép tương tác với cơ sở dữ liệu bằng cách sử dụng các lớp mô hình.",
      "Các mẫu Blade tạo điều kiện tương tác với cơ sở dữ liệu.",
      "Nhóm tuyến cho phép tương tác với cơ sở dữ liệu bằng cách sử dụng các lớp mô hình.",
      "Phần mềm trung gian cho phép tương tác cơ sở dữ liệu thông qua các lớp mô hình.",
    ],
    correct: 0,
  },
  {
    question:
      "9. Khi làm việc với Eloquent ORM của Laravel, phương pháp nào thường được sử dụng để cập nhật bản ghi trong cơ sở dữ liệu?",
    options: [
      "phương thức insert()",
      "phương thức save()",
      "phương thức delete()",
      "phương thức create()",
    ],
    correct: 1,
  },
  {
    question:
      "10. Phương pháp nào có thể được sử dụng để thực hiện xác thực bằng Laravel UI?",
    options: [
      "Sử dụng công cụ tạo mẫu Blade",
      "Sử dụng Eloquent ORM",
      "Sử dụng Laravel Mix",
      "Sử dụng lệnh artisan ui",
    ],
    correct: 3,
  },
  {
    question:
      "11. Trong Laravel, mục đích của việc sử dụng các mẫu Blade là gì?",
    options: [
      "Các mẫu Blade được sử dụng để tạo chế độ xem HTML một cách linh hoạt.",
      "Các mẫu Blade quản lý các thông số tuyến đường cho bộ điều khiển.",
      "Các mẫu Blade xác định các lớp mô hình cho Eloquent ORM.",
      "Các mẫu Blade định cấu hình cài đặt phần mềm trung gian cho các tuyến đường.",
    ],
    correct: 0,
  },
  {
    question:
      "12. Bộ điều khiển đóng vai trò gì trong mô hình MVC trong Laravel?",
    options: [
      "Bộ điều khiển chịu trách nhiệm tương tác trực tiếp với cơ sở dữ liệu và thực hiện các truy vấn SQL.",
      "Bộ điều khiển đóng vai trò trung gian giữa các mô hình và quan điểm, xử lý logic và giao tiếp.",
      "Bộ điều khiển quản lý các yếu tố giao diện người dùng và xử lý các sự kiện trong trình duyệt.",
      "Bộ điều khiển chịu trách nhiệm hiển thị HTML trong chế độ xem và quản lý bản trình bày.",
    ],
    correct: 1,
  },
  {
    question: "13. Mục đích của các tuyến đường được đặt tên ở Laravel là gì?",
    options: [
      "Để cho phép tạo URL và liên kết dễ dàng hơn trong ứng dụng",
      "Để đảm bảo các tuyến đường được tải trước bộ điều khiển",
      "Cách tự động tạo nhóm tuyến đường",
      "Để xác định phần mềm trung gian dành riêng cho tuyến đường",
    ],
    correct: 0,
  },
  {
    question: "14. Mục đích chính của Laravel Middleware là gì?",
    options: [
      "Chặn và lọc các yêu cầu HTTP",
      "Tạo di chuyển cơ sở dữ liệu",
      "Quản lý các tuyến ứng dụng",
      "Mẫu Render Blade",
    ],
    correct: 0,
  },
  {
    question:
      "15. Khi triển khai xác thực an toàn trong Laravel, gói nào có thể được sử dụng để hợp lý hóa quy trình và cung cấp các bộ điều khiển và chế độ xem được xây dựng sẵn?",
    options: [
      "Laravel an toàn",
      "Giao diện người dùng Laravel",
      "Trình xác thực Laravel",
      "Lực lượng bảo vệ Laravel",
    ],
    correct: 1,
  },
  {
    question:
      "16. Trong Laravel, công cụ tạo mẫu Blade xử lý thoát ra như thế nào để đảm bảo rằng các thực thể HTML được hiển thị chính xác trong khi bảo vệ chống lại các cuộc tấn công XSS?",
    options: [
      "Blade sử dụng thư viện JavaScript tích hợp để thoát khỏi các thực thể HTML.",
      "Blade tự động thoát khỏi các biến bằng cách sử dụng dấu ngoặc kép {{}}.",
      "Các mẫu Blade phải bao gồm một chỉ thị cụ thể để thoát khỏi tất cả các thực thể HTML.",
      "Blade yêu cầu sử dụng hàm e() để thoát khỏi các thực thể HTML theo cách thủ công.",
    ],
    correct: 1,
  },
  {
    question:
      "17. Vai trò của @yield trong hệ thống tạo mẫu Blade khi mở rộng bố cục trong Laravel là gì?",
    options: [
      "Nó tạo ra một vòng lặp trong mẫu Blade để lặp lại dữ liệu.",
      "Nó bao gồm một chế độ xem một phần vào một mẫu khác.",
      "Nó xác định một phần trong bố cục mà các mẫu con có thể đưa nội dung vào.",
      "Nó thoát khỏi các thực thể HTML trong một mẫu Blade.",
    ],
    correct: 2,
  },
  {
    question:
      "18. Bạn sẽ sử dụng phương pháp nào để đăng ký một Middleware mới trong Laravel?",
    options: [
      "Sử dụng tệp controller.php",
      "Sử dụng tệp kernel.php",
      "Sử dụng tệp routes.php",
      "Sử dụng tệp config.php",
    ],
    correct: 1,
  },
  {
    question:
      "19. Bạn sẽ sử dụng chỉ thị Blade nào để thực thi mã PHP trong một mẫu Blade mà không hiển thị nó?",
    options: [
      "Chỉ thị @exec",
      "Chỉ thị @php",
      "Chỉ thị @run",
      "Chỉ thị @perform",
    ],
    correct: 1,
  },
  {
    question:
      "20. Chức năng chính của bộ điều khiển tài nguyên trong Laravel là gì?",
    options: [
      "Để xác định các mẫu tuyến đường phức tạp",
      "Để quản lý các nhiệm vụ phần mềm trung gian",
      "Để tăng cường kết xuất mẫu Blade",
      "Để đơn giản hóa việc quản lý hoạt động CRUD",
    ],
    correct: 3,
  },
  {
    question:
      "1. Điều nào sau đây là trách nhiệm chính của bộ điều khiển API trong Laravel?",
    options: [
      "Rendering Blade mẫu.",
      "Thiết lập kết nối cơ sở dữ liệu.",
      "Xử lý các yêu cầu đến và trả lại câu trả lời thích hợp.",
      "Quản lý di chuyển cơ sở dữ liệu và hạt giống.",
    ],
    correct: 2,
  },
  {
    question:
      "2. Composer đóng vai trò gì khi tích hợp các gói PHP trong các ứng dụng Laravel?",
    options: [
      "Composer xác nhận đầu vào của người dùng cho các ứng dụng Laravel.",
      "Composer quản lý bảo mật phiên cho các ứng dụng Laravel.",
      "Composer cung cấp các tính năng thanh lọc HTML tích hợp.",
      "Composer xử lý các phụ thuộc và quản lý các phiên bản gói.",
    ],
    correct: 3,
  },
  {
    question:
      "3. Vai trò của chức năng 'hiển thị' trong bộ điều khiển API RESTful trong Laravel là gì?",
    options: [
      "Hiển thị danh sách tất cả các bản ghi",
      "Lấy một bản ghi duy nhất từ cơ sở dữ liệu",
      "Xóa bản ghi khỏi cơ sở dữ liệu",
      "Xác thực đầu vào của người dùng trước khi lưu trữ",
    ],
    correct: 1,
  },
  {
    question:
      "4. Mục đích chính của phương thức lưu trữ trong bộ điều khiển API RESTful trong Laravel là gì?",
    options: [
      "Để lưu tài nguyên mới trong cơ sở dữ liệu.",
      "Để lấy tài nguyên từ cơ sở dữ liệu.",
      "Để xóa tài nguyên khỏi cơ sở dữ liệu.",
      "Để cập nhật các tài nguyên hiện có trong cơ sở dữ liệu.",
    ],
    correct: 0,
  },
  {
    question:
      "5. Tính năng nào trong Laravel giúp thanh lọc HTML để ngăn chặn các cuộc tấn công kịch bản xuyên trang (XSS)?",
    options: [
      "Cài đặt gói Composer",
      "Máy lọc HTML",
      "Lọc phần mềm trung gian",
      "Xử lý phiên",
    ],
    correct: 1,
  },
  {
    question:
      "6. Phương pháp chính để ngăn chặn các cuộc tấn công CSRF trong các ứng dụng Laravel là gì?",
    options: [
      "Sử dụng mã thông báo CSRF trong các biểu mẫu",
      "Mã hóa dữ liệu phiên",
      "Thực hiện các quy tắc xác thực đầu vào nghiêm ngặt",
      "Sử dụng phần mềm trung gian để xác thực các yêu cầu API",
    ],
    correct: 0,
  },
  {
    question:
      "7. Lệnh artisan chính xác để tạo bộ điều khiển API RESTful trong Laravel là gì?",
    options: [
      "php artisan make: controller CourseController --api",
      "php artisan generate:controller CourseController --api",
      "php artisan create:controller CourseController --resource",
      "php artisan make: controller CourseController --rest",
    ],
    correct: 0,
  },
  {
    question:
      "8. Mục đích của phần mềm trung gian trong một ứng dụng Laravel là gì?",
    options: [
      "Phần mềm trung gian chặn và sửa đổi các yêu cầu HTTP trước khi chúng đến ứng dụng.",
      "Phần mềm trung gian được sử dụng để định cấu hình đường dẫn định tuyến trong ứng dụng.",
      "Phần mềm trung gian cung cấp các quy tắc xác thực yêu cầu tích hợp sẵn.",
      "Middleware quản lý các kết nối cơ sở dữ liệu cho tất cả các yêu cầu đến.",
    ],
    correct: 0,
  },
  {
    question:
      "9. Tính năng nào của Laravel sau đây là cần thiết để xử lý các yêu cầu và phản hồi API một cách hiệu quả?",
    options: [
      "Quản lý phiên",
      "Mẫu Blade",
      "Phần mềm trung gian",
      "ORM Eloquent",
    ],
    correct: 2,
  },
  {
    question:
      "10. Mục đích của việc sử dụng Composer khi tích hợp các thư viện PHP vào một ứng dụng Laravel là gì?",
    options: [
      "Quản lý phụ thuộc và tự động cài đặt thư viện",
      "Viết phần mềm trung gian tùy chỉnh",
      "Cấu hình kết nối cơ sở dữ liệu",
      "Tạo truy vấn SQL",
    ],
    correct: 0,
  },
  {
    question:
      "11. Phương pháp nào sau đây là cần thiết trong Laravel để bảo vệ chống lại các cuộc tấn công Cross-Site Request Forgery (CSRF)?",
    options: [
      "Sử dụng hàm csrf_token() để tạo mã thông báo CSRF",
      "Xác thực đầu vào của người dùng",
      "Sử dụng hệ thống Auth tích hợp của Laravel",
      "Triển khai mã hóa phiên",
    ],
    correct: 0,
  },
  {
    question:
      "12. Tại sao việc xác thực và vệ sinh đầu vào của người dùng trong các ứng dụng Laravel lại quan trọng?",
    options: [
      "Tạo điều kiện quản lý phiên",
      "Nâng cao thiết kế giao diện người dùng",
      "Cải thiện hiệu suất ứng dụng",
      "Ngăn chặn các cuộc tấn công SQL và XSS",
    ],
    correct: 3,
  },
  {
    question: "13. Hai cách để triển khai thư viện PHP trong Laravel là gì?",
    options: [
      "Sử dụng trình tạo truy vấn và thanh lọc HTML",
      "Sử dụng Composer và cài đặt thủ công",
      "Sử dụng phần mềm trung gian và nhà cung cấp dịch vụ",
      "Sử dụng xác thực yêu cầu và quy tắc đầu vào tùy chỉnh",
    ],
    correct: 1,
  },
  {
    question:
      "14. Bạn sẽ sử dụng lệnh thủ công nào để ánh xạ bộ điều khiển API mới được tạo thành các tuyến trong Laravel?",
    options: [
      "Php artisan route:map CourseController",
      "php artisan make: route CourseController",
      "Chỉnh sửa config/app.php để bao gồm các tuyến điều khiển API",
      "Chỉnh sửa routes/web.php để bao gồm các tuyến điều khiển API",
    ],
    correct: 3,
  },
  {
    question:
      "15. Phương pháp nào trong bộ điều khiển API RESTful được sử dụng để cập nhật một khóa học cụ thể trong ứng dụng Laravel?",
    options: ["update", "store", "create", "destroy"],
    correct: 0,
  },
  {
    question:
      "16. Laravel tạo điều kiện xác định tuyến đường cho bộ điều khiển API như thế nào?",
    options: [
      "Sử dụng phương thức Route::view",
      "Sử dụng phương thức Route::apiResource",
      "Sử dụng phương thức Route::match",
      "Sử dụng phương thức Route::group",
    ],
    correct: 1,
  },
  {
    question:
      "17. Tại sao việc triển khai bảo vệ CSRF trong các ứng dụng Laravel lại quan trọng?",
    options: [
      "Bảo vệ CSRF lọc và vệ sinh đầu vào của người dùng",
      "Bảo vệ CSRF ngăn chặn các hành động trái phép thay mặt cho người dùng được xác thực",
      "Bảo vệ CSRF mã hóa dữ liệu người dùng nhạy cảm trong quá trình truyền tải",
      "Bảo vệ CSRF đảm bảo lưu trữ phiên an toàn cho dữ liệu người dùng",
    ],
    correct: 1,
  },
  {
    question:
      "18. Trong Laravel, làm thế nào bạn có thể xác định các quy tắc xác thực dữ liệu trong bộ điều khiển API?",
    options: [
      "Sử dụng phương pháp xác thực bên trong bộ điều khiển",
      "Bằng cách sử dụng tệp JavaScript",
      "Sử dụng một biểu mẫu HTML riêng biệt",
      "Bằng cách tạo một bảng cơ sở dữ liệu tùy chỉnh",
    ],
    correct: 0,
  },
  {
    question:
      "19. Trình tạo truy vấn của Laravel hỗ trợ như thế nào trong việc bảo vệ chống lại các cuộc tấn công SQL Injection?",
    options: [
      "Trình tạo truy vấn xác nhận tất cả đầu vào của người dùng trước khi thực hiện truy vấn",
      "Trình tạo truy vấn ngăn chặn các cuộc tấn công CSRF bằng cách mã hóa dữ liệu truy vấn",
      "Trình tạo truy vấn sử dụng ràng buộc tham số để ngăn chặn thực thi SQL trực tiếp",
      "Trình tạo truy vấn mã hóa tất cả các truy vấn SQL bằng thuật toán an toàn",
    ],
    correct: 2,
  },
  {
    question:
      "20. Làm thế nào bạn có thể mở rộng chức năng của ứng dụng Laravel bằng cách sử dụng các nhà cung cấp dịch vụ?",
    options: [
      "Sử dụng Composer để quản lý phụ thuộc",
      "Định cấu hình các tuyến đường trong tệp web.php",
      "Thực hiện các quy tắc xác thực tùy chỉnh",
      "Đăng ký dịch vụ theo phương thức đăng ký",
    ],
    correct: 3,
  },
];

