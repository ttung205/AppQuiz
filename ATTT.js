// Dữ liệu câu hỏi từ đề bài
const questionsData = [
  //đề 02
  {
    question: "Mã Caesar là một loại mã hóa:",
    options: ["Đồng bộ", "Thay thế đơn", "Đa bảng", "Dịch chuyển XOR"],
    correct: 1,
  },
  {
    question: "Kết quả của mã Caesar với khóa = 3 khi mã hóa từ 'HELLO' là:",
    options: ["KHOOR", "IFMMP", "JGNNQ", "LIPPS"],
    correct: 0,
  },
  {
    question: "Giải mã 'JGNNQ' bằng Caesar với khóa = 2 được:",
    options: ["HELLO", "IFMMP", "GDKKN", "HFNNS"],
    correct: 0,
  },
  {
    question:
      "Với bảng chữ cái A=0,...,Z=25, mã Vigenère với khóa 'KEY' mã hóa từ 'HELLO' thành:",
    options: ["RIJVS", "IGOPT", "HFNOS", "LFSOT"],
    correct: 0,
  },
  {
    question: "Playfair là một kỹ thuật mã hóa:",
    options: [
      "Thay thế từng ký tự",
      "Thay thế theo cặp ký tự",
      "Mã hóa luồng",
      "Mã hóa khóa công khai",
    ],
    correct: 1,
  },
  {
    question: "Mã Hill là mã hóa dựa trên:",
    options: ["Xoay vòng", "XOR", "Phép nhân ma trận", "Bảng thay thế"],
    correct: 2,
  },
  {
    question: "Trong mã Hill bậc 2, để mã hóa, cần một ma trận:",
    options: ["1x2", "2x1", "2x2", "3x3"],
    correct: 2,
  },
  {
    question: "Giải mã mã Hill cần:",
    options: [
      "Ma trận đảo của khóa",
      "Bảng dịch chuyển",
      "Khóa bí mật",
      "Bảng XOR",
    ],
    correct: 0,
  },
  {
    question: "Mã hóa Affine dùng công thức:",
    options: [
      "E(x) = (ax + b) mod 26",
      "E(x) = ax^b mod 26",
      "E(x) = x + b",
      "E(x) = a mod x",
    ],
    correct: 0,
  },
  {
    question: "Với Affine: a = 5, b = 8, mã hóa 'C' (C=2) được:",
    options: ["18 (R)", "10 (K)", "12 (M)", "4 (E)"],
    correct: 0,
  },
  {
    question:
      "Trong mã hóa cổ điển, sự khác biệt giữa mã Caesar và Vigenère là:",
    options: [
      "Caesar dùng khóa dài hơn",
      "Vigenère dùng khóa lặp",
      "Caesar không mã hóa",
      "Vigenère chỉ mã hóa số",
    ],
    correct: 1,
  },
  {
    question: "Mã hóa cổ điển KHÔNG bao gồm:",
    options: ["Caesar", "Vigenère", "RSA", "Affine"],
    correct: 2,
  },
  {
    question: "Công cụ phổ biến nhất để phá mã cổ điển là:",
    options: [
      "Phân tích tần số",
      "Tấn công brute-force",
      "Hàm băm",
      "Chữ ký số",
    ],
    correct: 0,
  },
  {
    question: "Với Caesar, tổng số khóa có thể thử là:",
    options: ["13", "25", "26", "52"],
    correct: 1,
  },
  {
    question: "Để giải mã Caesar, cần:",
    options: ["Hàm băm", "Khóa đối xứng", "Khóa dịch ngược", "Bảng S-box"],
    correct: 2,
  },
  {
    question: "DES là viết tắt của:",
    options: [
      "Digital Encryption Standard",
      "Data Encryption Standard",
      "Dynamic Encryption Scheme",
      "Dual Encryption Service",
    ],
    correct: 1,
  },
  {
    question: "DES sử dụng độ dài khóa:",
    options: ["56-bit", "64-bit", "128-bit", "192-bit"],
    correct: 0,
  },
  {
    question: "AES hỗ trợ các độ dài khóa sau:",
    options: [
      "64, 128, 256",
      "128, 192, 256",
      "128, 160, 192",
      "192, 224, 256",
    ],
    correct: 1,
  },
  {
    question: "RSA là một thuật toán:",
    options: ["Mã hóa đối xứng", "Băm", "Mã hóa công khai", "Mã hóa luồng"],
    correct: 2,
  },
  {
    question: "Cặp khóa trong RSA gồm:",
    options: [
      "Khóa công khai và khóa riêng",
      "Hai khóa riêng",
      "Hai khóa công khai",
      "Khóa và mật khẩu",
    ],
    correct: 0,
  },
  {
    question: "Trong RSA, hàm φ(n) với n = p * q là:",
    options: ["(p−1)(q−1)", "p+q", "n−1", "(p+1)(q+1)"],
    correct: 0,
  },
  {
    question: "RSA: n = 55, e = 3, bản rõ M = 10, mã hóa C = M^e mod n =",
    options: ["100", "1000 mod 55 = 10", "10^3 mod 55 = 1000 mod 55 = ?", "20"],
    correct: 1,
  },
  {
    question: "RSA: Giải mã C = 35 với d = 27, n = 55. M = ?",
    options: [
      "M = 35^27 mod 55 (Dùng Casio để tính)",
      "M = 55^27 mod 35",
      "M = 27^35 mod 55",
      "M = 35^27 mod 35",
    ],
    correct: 0,
  },
  {
    question: "AES hoạt động theo:",
    options: [
      "Thay thế và hoán vị",
      "XOR liên tục",
      "Phép cộng modulo",
      "Ma trận nghịch đảo",
    ],
    correct: 0,
  },
  {
    question: "Thuật toán hiện đại nào sau đây KHÔNG phải là mã hóa đối xứng:",
    options: ["AES", "DES", "Blowfish", "RSA"],
    correct: 3,
  },
  {
    question: "RSA được xem là an toàn vì:",
    options: [
      "Dễ thực hiện",
      "Không thể bị phá",
      "Khó phân tích nhân tử số lớn",
      "Không dùng khóa",
    ],
    correct: 2,
  },
  {
    question: "RSA yêu cầu p và q là:",
    options: [
      "Hai số nguyên bất kỳ",
      "Hai số lẻ",
      "Hai số nguyên tố lớn",
      "Hai số chẵn",
    ],
    correct: 2,
  },
  {
    question: "AES sử dụng bao nhiêu vòng lặp cho khóa 128-bit?",
    options: ["10", "12", "14", "16"],
    correct: 0,
  },
  {
    question: "Thuật toán mã hóa hiện đại đầu tiên được công nhận rộng rãi là:",
    options: ["AES", "RSA", "DES", "IDEA"],
    correct: 2,
  },
  {
    question: "Một ưu điểm của mã hóa đối xứng là:",
    options: ["Bảo mật cao", "Khó chia sẻ khóa", "Tốc độ nhanh", "Dễ hiểu"],
    correct: 2,
  },
  {
    question: "Hàm băm là một hàm:",
    options: ["Một chiều", "Hai chiều", "Tuyến tính", "Phân kỳ"],
    correct: 0,
  },
  {
    question: "Đặc điểm của hàm băm tốt:",
    options: [
      "Dễ đoán kết quả",
      "Tạo cùng đầu ra cho đầu vào gần giống",
      "Khó đảo ngược",
      "Có thể giải mã",
    ],
    correct: 2,
  },
  {
    question: "MD5 tạo ra đầu ra bao nhiêu bit?",
    options: ["128", "160", "256", "512"],
    correct: 0,
  },
  {
    question: "SHA-256 tạo ra bao nhiêu bit?",
    options: ["128", "160", "256", "512"],
    correct: 2,
  },
  {
    question: "Hàm băm dùng để:",
    options: [
      "Mã hóa",
      "Kiểm tra tính toàn vẹn",
      "Tăng tốc mạng",
      "Giải mã dữ liệu",
    ],
    correct: 1,
  },
  {
    question: "Hàm băm tốt phải có tính chất:",
    options: [
      "Không đụng độ (collision-resistant)",
      "Dễ tính",
      "Có thể đảo ngược",
      "Sinh ra khóa",
    ],
    correct: 0,
  },
  {
    question: "Thuật toán nào sau đây là hàm băm:",
    options: ["RSA", "SHA-1", "DES", "AES"],
    correct: 1,
  },
  {
    question: "SHA-1 tạo ra bao nhiêu bit?",
    options: ["128", "160", "256", "512"],
    correct: 1,
  },
  {
    question: "Chữ ký số dùng để:",
    options: [
      "Mã hóa văn bản",
      "Xác minh nguồn gốc và tính toàn vẹn",
      "Mã hóa file nhị phân",
      "Phát hiện virus",
    ],
    correct: 1,
  },
  {
    question: "Chữ ký số sử dụng thuật toán:",
    options: [
      "Mã hóa đối xứng",
      "Mã hóa công khai",
      "Hàm XOR",
      "Thuật toán luồng",
    ],
    correct: 1,
  },

  {
    question: "Quy trình tạo chữ ký số gồm:",
    options: [
      "Mã hóa văn bản",
      "Mã hóa khóa",
      "Băm thông điệp và mã hóa băm",
      "So sánh khóa",
    ],
    correct: 2,
  },
  {
    question: "Chữ ký số được tạo bằng:",
    options: [
      "Khóa công khai của người nhận",
      "Khóa riêng của người gửi",
      "Khóa đối xứng",
      "Hàm ngẫu nhiên",
    ],
    correct: 1,
  },
  {
    question: "Để xác minh chữ ký số, người nhận dùng:",
    options: [
      "Khóa riêng của mình",
      "Khóa công khai của người gửi",
      "Hàm băm",
      "Mật khẩu",
    ],
    correct: 1,
  },
  {
    question: "Tính toán: Mã hóa băm bằng MD5 của 'abc' có độ dài đầu ra là:",
    options: ["16 byte", "20 byte", "32 byte", "64 byte"],
    correct: 0,
  },
  {
    question: "Thuật toán băm yếu hiện nay là:",
    options: ["MD5", "SHA-2", "SHA-256", "SHA-3"],
    correct: 0,
  },
  {
    question: "Tấn công sinh hai đầu vào cho cùng giá trị băm gọi là:",
    options: ["Brute force", "Collision", "Pre-image", "Post-image"],
    correct: 1,
  },
  {
    question: "Mã hóa văn bản trước khi ký số có cần thiết không?",
    options: ["Có", "Không", "Tùy hệ thống", "Không bao giờ"],
    correct: 1,
  },
  {
    question: "Hàm băm có đảm bảo tính bảo mật không?",
    options: ["Có", "Không", "Một phần", "Tùy độ dài"],
    correct: 1,
  },
  {
    question: "Digital Signature Algorithm (DSA) là:",
    options: [
      "Thuật toán mã hóa khóa",
      "Thuật toán tạo chữ ký số",
      "Hàm băm",
      "Chuẩn nén dữ liệu",
    ],
    correct: 1,
  },
  {
    question: "Nếu chữ ký số không khớp sau xác minh, điều đó có thể do:",
    options: [
      "Văn bản đã bị thay đổi",
      "Sai khóa công khai",
      "Hàm băm sai",
      "Tất cả đều đúng",
    ],
    correct: 3,
  },
  //đề 01
  {
    question: "Mã hóa Caesar là gì?",
    options: [
      "Mã hóa thay thế mỗi chữ cái bằng chữ cái khác theo một khóa cố định.",
      "Mã hóa thay thế mỗi chữ cái bằng chữ cái khác theo chiều đảo ngược.",
      "Mã hóa mỗi ký tự bằng một số ngẫu nhiên.",
      "Mã hóa thay thế các ký tự theo bảng chữ cái ngẫu nhiên.",
    ],
    correct: 0,
  },
  {
    question: "Mã hóa Affine là một dạng mã hóa nào?",
    options: [
      "Mã hóa thay thế",
      "Mã hóa đối xứng",
      "Mã hóa không đối xứng",
      "Mã hóa Vigenere",
    ],
    correct: 0,
  },
  {
    question: "Kỹ thuật nào sau đây dùng trong mã hóa Vigenère?",
    options: [
      "Sử dụng một bảng chữ cái để thay thế",
      "Sử dụng các khóa tuần hoàn",
      "Sử dụng phép toán số học để thay thế",
      "Sử dụng phép toán ma trận",
    ],
    correct: 1,
  },
  {
    question: "Trong mã hóa Caesar, khóa có thể có giá trị nào?",
    options: ["Từ 1 đến 25", "Từ 0 đến 25", "Từ 0 đến 26", "Từ 1 đến 26"],
    correct: 1,
  },
  {
    question:
      "Khi sử dụng mã hóa Vigenère, chuỗi khóa dài hơn thông điệp, điều này có tác dụng gì?",
    options: [
      "Tăng độ bảo mật của mã hóa",
      "Giảm độ bảo mật của mã hóa",
      "Không ảnh hưởng đến độ bảo mật",
      "Làm mã hóa trở nên khó giải mã",
    ],
    correct: 0,
  },
  {
    question: "Thuật toán mã hóa DES là loại mã hóa gì?",
    options: [
      "Mã hóa không đối xứng",
      "Mã hóa đối xứng",
      "Mã hóa hàm băm",
      "Mã hóa chữ ký số",
    ],
    correct: 1,
  },
  {
    question: "Thuật toán mã hóa AES là mã hóa loại gì?",
    options: [
      "Mã hóa đối xứng",
      "Mã hóa công khai",
      "Mã hóa thay thế",
      "Mã hóa ma trận",
    ],
    correct: 0,
  },
  {
    question: "Sự khác biệt giữa DES và AES là gì?",
    options: [
      "AES có khóa dài hơn và an toàn hơn DES",
      "DES sử dụng khóa dài hơn AES",
      "AES không phải là mã hóa đối xứng",
      "DES có tốc độ mã hóa nhanh hơn AES",
    ],
    correct: 0,
  },
  {
    question: "Kích thước của khóa trong AES có thể là bao nhiêu?",
    options: [
      "128 bit, 192 bit, 256 bit",
      "64 bit, 128 bit, 256 bit",
      "128 bit, 256 bit",
      "256 bit, 512 bit",
    ],
    correct: 0,
  },
  {
    question:
      "Thuật toán mã hóa AES sử dụng bao nhiêu vòng lặp trong quá trình mã hóa?",
    options: ["10 vòng", "12 vòng", "14 vòng", "16 vòng"],
    correct: 0,
  },
  {
    question: "RSA là thuật toán mã hóa nào?",
    options: [
      "Mã hóa đối xứng",
      "Mã hóa công khai",
      "Mã hóa thay thế",
      "Mã hóa không đối xứng",
    ],
    correct: 3,
  },
  {
    question: "RSA sử dụng hai khóa nào?",
    options: [
      "Khóa công khai và khóa riêng",
      "Hai khóa đối xứng",
      "Khóa duy nhất",
      "Khóa chung",
    ],
    correct: 0,
  },
  {
    question: "Khóa riêng trong RSA được dùng để làm gì?",
    options: [
      "Mã hóa thông điệp",
      "Giải mã thông điệp",
      "Xác thực chữ ký số",
      "Chuyển đổi giữa các thuật toán",
    ],
    correct: 1,
  },
  {
    question: "Quá trình tạo ra khóa công khai trong RSA dựa trên điều gì?",
    options: ["Số nguyên tố", "Hàm băm", "Mã hóa Vigenère", "Chữ ký số"],
    correct: 0,
  },
  {
    question: "Trong RSA, bảo mật của hệ thống phụ thuộc vào điều gì?",
    options: [
      "Việc giải yếu số nguyên tố",
      "Việc mã hóa chữ ký số",
      "Khóa công khai",
      "Thuật toán AES",
    ],
    correct: 0,
  },
  {
    question: "MD5 là thuật toán hàm băm nào?",
    options: [
      "Mã hóa đối xứng",
      "Mã hóa công khai",
      "Hàm băm",
      "Thuật toán mã hóa",
    ],
    correct: 2,
  },
  {
    question: "MD5 tạo ra một giá trị băm có độ dài bao nhiêu bit?",
    options: ["128 bit", "256 bit", "512 bit", "1024 bit"],
    correct: 0,
  },
  {
    question: "SHA-512 tạo ra một giá trị băm có độ dài bao nhiêu bit?",
    options: ["256 bit", "512 bit", "128 bit", "1024 bit"],
    correct: 1,
  },
  {
    question: "Điều nào sau đây là một đặc điểm của hàm băm SHA1?",
    options: [
      "Không có va chạm",
      "Được sử dụng trong chữ ký số",
      "Dễ dàng bị bẻ khóa",
      "Không thể sinh ngược từ giá trị băm",
    ],
    correct: 1,
  },
  {
    question: "Hàm băm nào dưới đây được xem là an toàn nhất hiện nay?",
    options: ["MD5", "SHA-1", "SHA-256", "SHA-512"],
    correct: 3,
  },
  {
    question: "Chữ ký số là gì?",
    options: [
      "Một phương pháp mã hóa thông điệp",
      "Một phương pháp xác thực danh tính người gửi",
      "Mã hóa thông tin tài chính",
      "Đảm bảo độ bảo mật của dữ liệu",
    ],
    correct: 1,
  },
  {
    question: "Mục đích của chữ ký số là gì?",
    options: [
      "Bảo vệ quyền riêng tư của thông điệp",
      "Đảm bảo tính toàn vẹn và xác thực thông điệp",
      "Mã hóa dữ liệu",
      "Chống lại các cuộc tấn công mạng",
    ],
    correct: 1,
  },
  {
    question: "Thuật toán nào được sử dụng trong chữ ký số RSA?",
    options: [
      "Thuật toán đối xứng",
      "Thuật toán không đối xứng",
      "Thuật toán băm",
      "Thuật toán xác thực",
    ],
    correct: 1,
  },
  {
    question: "Mã hóa công khai giúp giải quyết vấn đề nào?",
    options: [
      "Bảo mật thông điệp",
      "Xác thực danh tính",
      "Cả A và B",
      "Không có tác dụng gì",
    ],
    correct: 2,
  },
  {
    question: "Trong quá trình tạo chữ ký số, ai tạo ra khóa riêng?",
    options: [
      "Người gửi",
      "Người nhận",
      "Cả người gửi và người nhận",
      "Tổ chức chứng thực",
    ],
    correct: 0,
  },
  {
    question:
      "Điều nào dưới đây không phải là hành vi vi phạm đạo đức trong an toàn thông tin?",
    options: [
      "Sử dụng mật khẩu mạnh",
      "Xâm nhập vào hệ thống mà không có sự cho phép",
      "Đảm bảo tính toàn vẹn của thông tin",
      "Tiết lộ thông tin cá nhân mà không có sự đồng ý",
    ],
    correct: 0,
  },
  {
    question: "Pháp luật an toàn thông tin tại Việt Nam quy định về gì?",
    options: [
      "Bảo vệ thông tin cá nhân",
      "Cấm các hành vi xâm phạm dữ liệu",
      "Cả A và B",
      "Không có luật an toàn thông tin",
    ],
    correct: 2,
  },
  {
    question:
      "Cái gì là cơ sở của các quy định bảo mật thông tin trong pháp luật?",
    options: [
      "Chính sách công ty",
      "Quyền lợi của người sử dụng",
      "Quyền lợi của tổ chức",
      "Quy định của cơ quan nhà nước",
    ],
    correct: 1,
  },
  {
    question:
      "Việc bảo vệ thông tin cá nhân trong không gian mạng có ý nghĩa gì?",
    options: [
      "Đảm bảo an ninh quốc gia",
      "Bảo vệ quyền lợi cá nhân",
      "Cả A và B",
      "Không quan trọng",
    ],
    correct: 2,
  },
  {
    question:
      "Để đảm bảo bảo mật thông tin trong môi trường làm việc, doanh nghiệp nên làm gì?",
    options: [
      "Đảm bảo chỉ người quản trị có quyền truy cập vào hệ thống",
      "Cung cấp cho nhân viên mật khẩu mặc định",
      "Khuyến khích nhân viên chia sẻ mật khẩu",
      "Không cần đào tạo nhân viên về bảo mật",
    ],
    correct: 0,
  },
  {
    question: "Mã hóa đối xứng có điểm yếu gì?",
    options: [
      "Khóa có thể bị lộ",
      "Tốc độ chậm",
      "Không thể sử dụng cho các giao dịch lớn",
      "Tất cả các câu trên",
    ],
    correct: 0,
  },
  {
    question: "RSA được xem là an toàn vì lý do gì?",
    options: [
      "Sự khó khăn của việc phân tích các số nguyên tố lớn",
      "Tính đơn giản trong quá trình mã hóa",
      "Không cần phải sử dụng khóa",
      "Tốc độ mã hóa nhanh",
    ],
    correct: 0,
  },
  {
    question: "Thuật toán AES có ưu điểm nào?",
    options: [
      "Mã hóa nhanh và an toàn",
      "Chỉ có thể dùng cho dữ liệu nhỏ",
      "Dễ bị giải mã nếu không có khóa",
      "Dùng cho mã hóa đối xứng và công khai",
    ],
    correct: 0,
  },
  {
    question:
      "Trong hệ thống RSA, thông điệp được mã hóa bằng khóa công khai có thể giải mã bằng gì?",
    options: ["Khóa công khai", "Khóa riêng", "Mã băm", "Thuật toán SHA"],
    correct: 1,
  },
  {
    question:
      "Kỹ thuật nào dùng để đảm bảo tính toàn vẹn của dữ liệu trong an toàn thông tin?",
    options: ["Mã hóa", "Hàm băm", "Chữ ký số", "Xác thực hai yếu tố"],
    correct: 1,
  },
  {
    question: "Tại sao việc sử dụng mật khẩu mạnh lại quan trọng?",
    options: [
      "Giúp dễ dàng ghi nhớ",
      "Giảm thiểu nguy cơ bị tấn công từ các phương pháp thử mật khẩu",
      "Làm tăng tốc độ hệ thống",
      "Tất cả các câu trên",
    ],
    correct: 1,
  },
  {
    question: "Thuật toán nào được sử dụng trong quá trình mã hóa DES?",
    options: [
      "Mã hóa đối xứng",
      "Mã hóa công khai",
      "Mã hóa ma trận",
      "Mã hóa RSA",
    ],
    correct: 0,
  },
  {
    question:
      "Phương thức nào dưới đây giúp bảo vệ thông tin khi truyền qua mạng?",
    options: [
      "Mã hóa SSL/TLS",
      "Đảm bảo mật khẩu mạnh",
      "Sử dụng tường lửa",
      "Cả A và B",
    ],
    correct: 3,
  },
  {
    question: "Điều nào là chính sách bảo mật hợp lý trong tổ chức?",
    options: [
      "Quản lý quyền truy cập thông tin rõ ràng",
      "Cung cấp quyền truy cập không giới hạn",
      "Không cần xác thực danh tính",
      "Phớt lờ cập nhật phần mềm bảo mật",
    ],
    correct: 0,
  },
  {
    question: "Chữ ký số sử dụng gì để xác nhận tính hợp lệ của thông điệp?",
    options: [
      "Khóa công khai",
      "Khóa riêng",
      "Chứng thư số",
      "Tất cả các câu trên",
    ],
    correct: 0,
  },
  {
    question: "Mã hóa DES không còn được sử dụng rộng rãi vì lý do gì?",
    options: [
      "Chìa khóa quá ngắn (56 bit)",
      "Không thể mã hóa các dữ liệu lớn",
      "Quá chậm khi mã hóa",
      "Độ bảo mật rất cao",
    ],
    correct: 0,
  },
  {
    question: "Mục tiêu chính của bảo mật thông tin là gì?",
    options: [
      "Đảm bảo tính toàn vẹn, bảo mật và khả dụng của thông tin",
      "Giảm chi phí bảo mật",
      "Tăng khả năng chia sẻ thông tin",
      "Đảm bảo các quy định pháp lý",
    ],
    correct: 0,
  },
  {
    question:
      "Bảo mật thông tin trong môi trường điện toán đám mây cần chú ý đến yếu tố gì?",
    options: [
      "Quyền truy cập và kiểm soát dữ liệu",
      "Chi phí lưu trữ dữ liệu",
      "Đảm bảo tốc độ truyền tải dữ liệu",
      "Phân quyền sử dụng phần mềm",
    ],
    correct: 0,
  },
  {
    question:
      "Để tạo ra một môi trường an toàn trong tổ chức, cần bắt đầu từ đâu?",
    options: [
      "Cập nhật phần mềm liên tục",
      "Đào tạo nhân viên về bảo mật",
      "Kiểm tra hệ thống bảo mật thường xuyên",
      "Tất cả các câu trên",
    ],
    correct: 3,
  },
  {
    question: "Các cuộc tấn công kiểu 'phishing' thường lợi dụng yếu tố nào?",
    options: [
      "Lỗi trong mã hóa",
      "Lỗi người sử dụng",
      "Lỗ hổng phần mềm",
      "Tấn công từ xa",
    ],
    correct: 1,
  },
  {
    question: "Mã hóa trong giao tiếp qua mạng giúp gì?",
    options: [
      "Giảm chi phí bảo mật",
      "Bảo vệ thông tin khỏi các cuộc tấn công",
      "Tăng độ trễ trong việc truyền tải",
      "Giảm tính toàn vẹn của thông tin",
    ],
    correct: 1,
  },
  {
    question: "Việc sử dụng chữ ký số giúp gì cho người dùng?",
    options: [
      "Đảm bảo tính toàn vẹn và xác thực thông điệp",
      "Giúp tiết kiệm chi phí giao dịch",
      "Cung cấp quyền truy cập không giới hạn",
      "Tăng tốc độ truyền tải thông tin",
    ],
    correct: 0,
  },
  {
    question:
      "Để đảm bảo an toàn thông tin, mỗi tổ chức nên có chính sách bảo mật như thế nào?",
    options: [
      "Quy trình rõ ràng và thường xuyên đánh giá bảo mật",
      "Đưa ra mật khẩu mặc định cho tất cả nhân viên",
      "Không cần đào tạo nhân viên về bảo mật",
      "Không cần áp dụng phần mềm bảo mật",
    ],
    correct: 0,
  },
  {
    question:
      "Cách thức nào dưới đây có thể giúp ngăn chặn các cuộc tấn công DDoS?",
    options: [
      "Sử dụng tường lửa mạnh",
      "Dùng mã hóa SSL",
      "Sử dụng phần mềm chống virus",
      "Sử dụng bộ lọc nội dung",
    ],
    correct: 3,
  },
  {
    question:
      "Phương pháp nào dưới đây không liên quan đến việc bảo vệ dữ liệu cá nhân?",
    options: [
      "Mã hóa dữ liệu",
      "Xác thực người dùng mạnh",
      "Đảm bảo sao lưu thường xuyên",
      "Chia sẻ thông tin cá nhân qua email",
    ],
    correct: 3,
  },
  {
  question: "Mã Caesar là loại mã hóa nào?",
  options: [
    "Mã hóa thay thế",
    "Mã hóa hoán vị",
    "Mã hóa khối",
    "Mã hóa công khai",
  ],
  correct: 0,
},
{
  question: "Trong mã hóa Vigenère, khóa có tính chất gì?",
  options: [
    "Cố định",
    "Lặp lại",
    "Ngẫu nhiên",
    "Khóa đối xứng",
  ],
  correct: 1,
},
{
  question: "Mã hóa Playfair sử dụng bảng kích thước bao nhiêu?",
  options: [
    "4x4",
    "5x5",
    "6x6",
    "8x8",
  ],
  correct: 1,
},
{
  question: "Mã hóa cổ điển sử dụng thuật toán nào trong các lựa chọn sau?",
  options: [
    "Mã hóa công khai",
    "Mã hóa đối xứng",
    "Mã hóa khối",
    "Mã hóa tuần tự",
  ],
  correct: 1,
},
{
  question: "Điều nào sau đây là không đúng về mã hóa thay thế?",
  options: [
    "Các ký tự được thay thế bằng các ký tự khác",
    "Tất cả các ký tự đều được dịch chuyển theo cùng một quy tắc",
    "Mã hóa này dễ dàng bị phá bằng phân tích tần số",
    "Khóa là một dãy số nguyên",
  ],
  correct: 3,
},
{
  question: "RSA là gì?",
  options: [
    "Một thuật toán mã hóa đối xứng",
    "Một thuật toán mã hóa công khai",
    "Một hàm băm",
    "Một thuật toán mã hóa cổ điển",
  ],
  correct: 1,
},
{
  question: "RSA dựa trên vấn đề toán học nào?",
  options: [
    "Phân tích số nguyên",
    "Tính toán logarithm rời rạc",
    "Đa thức mật mã",
    "Chuỗi Fibonacci",
  ],
  correct: 0,
},
{
  question: "Để tạo khóa công khai trong RSA, cần thực hiện phép tính nào?",
  options: [
    "Tính tích của hai số nguyên tố",
    "Tính tổng của hai số nguyên tố",
    "Tính lũy thừa modulo",
    "Giải phương trình tuyến tính",
  ],
  correct: 0,
},
{
  question: "Trong RSA, khóa công khai gồm hai thành phần nào?",
  options: [
    "N và d",
    "N và e",
    "p và q",
    "d và e",
  ],
  correct: 1,
},
{
  question: "Để mã hóa một thông điệp bằng RSA, ta sử dụng khóa nào?",
  options: [
    "Khóa công khai của người gửi",
    "Khóa riêng của người nhận",
    "Khóa công khai của người nhận",
    "Khóa riêng của người gửi",
  ],
  correct: 2,
},
{
  question: "DES sử dụng khóa có độ dài bao nhiêu bit?",
  options: [
    "128",
    "64",
    "56",
    "256",
  ],
  correct: 2,
},
{
  question: "Thuật toán DES thực hiện bao nhiêu vòng lặp mã hóa?",
  options: [
    "8",
    "10",
    "12",
    "16",
  ],
  correct: 3,
},
{
  question: "AES sử dụng kích thước khối dữ liệu là bao nhiêu bit?",
  options: [
    "64",
    "128",
    "192",
    "256",
  ],
  correct: 1,
},
{
  question: "AES có thể sử dụng khóa có kích thước nào?",
  options: [
    "64 bit, 128 bit, 192 bit",
    "128 bit, 192 bit, 256 bit",
    "256 bit, 512 bit, 1024 bit",
    "128 bit, 256 bit, 512 bit",
  ],
  correct: 1,
},
{
  question: "AES thực hiện bao nhiêu vòng lặp mã hóa đối với khóa 128 bit?",
  options: [
    "10",
    "12",
    "14",
    "16",
  ],
  correct: 0,
},
{
  question: "Điều nào không đúng về AES?",
  options: [
    "AES có cấu trúc mã hóa kiểu Feistel",
    "AES là một thuật toán mã hóa khối",
    "AES được sử dụng rộng rãi trong các giao thức bảo mật",
    "AES an toàn hơn DES",
  ],
  correct: 0,
},
{
  question: "Hàm băm tạo ra đầu ra có kích thước như thế nào?",
  options: [
    "Biến đổi",
    "Cố định",
    "Ngẫu nhiên",
    "Tăng dần theo đầu vào",
  ],
  correct: 1,
},
{
  question: "Điều nào sau đây không đúng về hàm băm?",
  options: [
    "Đầu ra của hàm băm là duy nhất cho mỗi đầu vào",
    "Hàm băm có tính bất khả nghịch",
    "Có thể tính được đầu vào từ đầu ra của hàm băm",
    "Hàm băm được sử dụng để kiểm tra tính toàn vẹn dữ liệu",
  ],
  correct: 2,
},
{
  question: "Hàm băm nào sau đây được coi là an toàn hơn?",
  options: [
    "MD5",
    "SHA-1",
    "SHA-256",
    "CRC32",
  ],
  correct: 2,
},
{
  question: "Điều nào đúng về hàm băm MD5?",
  options: [
    "Tạo ra chuỗi băm dài 128 bit",
    "Được coi là an toàn với các ứng dụng hiện tại",
    "Tạo ra chuỗi băm dài 256 bit",
    "Có độ phức tạp tính toán cao hơn SHA-256",
  ],
  correct: 0,
},
{
  question: "Thuật toán SHA-256 tạo ra giá trị băm có độ dài bao nhiêu bit?",
  options: [
    "128",
    "160",
    "256",
    "512",
  ],
  correct: 2,
},
{
  question: "Mã hóa đối xứng sử dụng bao nhiêu khóa?",
  options: [
    "1",
    "2",
    "3",
    "4",
  ],
  correct: 0,
},
{
  question: "Mã hóa công khai khác mã hóa đối xứng ở điểm nào?",
  options: [
    "Sử dụng 2 khóa, một khóa công khai và một khóa riêng",
    "Chỉ sử dụng một khóa",
    "Khóa được chia sẻ công khai",
    "Không sử dụng khóa",
  ],
  correct: 0,
},
{
  question: "Xác thực (authentication) là gì?",
  options: [
    "Quá trình mã hóa thông điệp",
    "Quá trình đảm bảo tính toàn vẹn của thông tin",
    "Quá trình xác nhận danh tính của người gửi/nhận",
    "Quá trình bảo mật thông tin",
  ],
  correct: 2,
},
{
  question: "SSL/TLS là giao thức được sử dụng để bảo mật trong các ứng dụng nào?",
  options: [
    "Giao thức HTTP",
    "Giao thức FTP",
    "Giao thức DNS",
    "Giao thức DHCP",
  ],
  correct: 0,
},
{
  question: "Kiểu tấn công nào thường nhắm đến lỗ hổng mã hóa?",
  options: [
    "Tấn công từ chối dịch vụ (DoS)",
    "Tấn công trung gian (MITM)",
    "Tấn công dò mật khẩu",
    "Tấn công tiêm mã SQL (SQL injection)",
  ],
  correct: 1,
},
{
  question: "Điều nào sau đây là đúng về mã hóa đối xứng?",
  options: [
    "Đòi hỏi ít tính toán hơn so với mã hóa công khai",
    "Đảm bảo tính toàn vẹn của thông tin",
    "Dễ bị tấn công MITM hơn mã hóa công khai",
    "Tạo ra các cặp khóa riêng tư và công khai",
  ],
  correct: 0,
},
{
  question: "Chữ ký số là gì?",
  options: [
    "Một loại mã hóa khóa đối xứng",
    "Một phương pháp mã hóa cổ điển",
    "Một kỹ thuật sử dụng khóa công khai để xác thực dữ liệu",
    "Một loại tấn công mạng",
  ],
  correct: 2,
},
{
  question: "Hình thức tấn công nào sau đây nhắm vào tính toàn vẹn của thông tin?",
  options: [
    "Tấn công từ chối dịch vụ (DoS)",
    "Tấn công sửa đổi dữ liệu",
    "Tấn công trộm mật khẩu",
    "Tấn công phân tích mã",
  ],
  correct: 1,
},
{
  question: "Điều nào không đúng về tường lửa (firewall)?",
  options: [
    "Tường lửa giúp ngăn chặn các tấn công từ bên ngoài",
    "Tường lửa bảo vệ toàn bộ mạng khỏi tất cả các loại tấn công",
    "Tường lửa có thể chặn lưu lượng truy cập dựa trên quy tắc",
    "Tường lửa có thể lọc lưu lượng dựa trên địa chỉ IP",
  ],
  correct: 1,
},
{
  question: "Điều nào đúng về phương pháp mã hóa ECDSA (Elliptic Curve Digital Signature Algorithm)?",
  options: [
    "Là một hàm băm",
    "Sử dụng đường cong Elliptic để tạo chữ ký số",
    "Sử dụng các khóa đối xứng",
    "Sử dụng thuật toán DES để mã hóa",
  ],
  correct: 1,
},
{
  question: "Nguyên lý của thuật toán Diffie-Hellman là gì?",
  options: [
    "Dùng để trao đổi khóa bí mật trên một kênh không an toàn",
    "Dùng để tạo hàm băm",
    "Dùng để mã hóa bằng khóa đối xứng",
    "Dùng để tấn công mật mã",
  ],
  correct: 0,
},
{
  question: "Trong tấn công Man-in-the-Middle (MITM), kẻ tấn công làm gì?",
  options: [
    "Đánh chặn và sửa đổi thông tin giữa hai bên giao tiếp",
    "Đoán mật khẩu của người dùng",
    "Mã hóa thông tin của người dùng",
    "Phá vỡ tính bảo mật của hàm băm",
  ],
  correct: 0,
},
{
  question: "Phương thức tấn công Brute-force là gì?",
  options: [
    "Dò mật khẩu bằng cách thử tất cả các tổ hợp khả thi",
    "Tấn công từ chối dịch vụ (DoS)",
    "Tấn công phân tích mã",
    "Tấn công trung gian (MITM)",
  ],
  correct: 0,
},
{
  question: "Công cụ nào thường được sử dụng để giám sát và phân tích lưu lượng mạng?",
  options: [
    "Wireshark",
    "Notepad++",
    "Firefox",
    "Photoshop",
  ],
  correct: 0,
},
{
  question: "Điều nào đúng về thuật toán mã hóa Blowfish?",
  options: [
    "Sử dụng khóa có độ dài cố định",
    "Là một thuật toán mã hóa khối đối xứng",
    "Là một thuật toán công khai",
    "Chỉ sử dụng cho các ứng dụng không cần bảo mật",
  ],
  correct: 1,
},
{
  question: "PGP (Pretty Good Privacy) được sử dụng để làm gì?",
  options: [
    "Mã hóa email và tệp tin",
    "Kiểm tra tính toàn vẹn của dữ liệu",
    "Phát hiện tấn công mạng",
    "Xác thực người dùng",
  ],
  correct: 0,
},
{
  question: "Mật khẩu nào sau đây có độ an toàn cao nhất?",
  options: [
    "123456",
    "password",
    "Abc@123",
    "yA!9u$wP3Z",
  ],
  correct: 3,
},
{
  question: "VPN (Virtual Private Network) giúp:",
  options: [
    "Tăng cường quyền riêng tư và bảo mật thông tin khi truy cập internet",
    "Phát hiện virus và phần mềm độc hại",
    "Mã hóa tệp tin trên ổ cứng",
    "Tăng tốc độ mạng",
  ],
  correct: 0,
},
{
  question: "Để bảo mật hệ thống, người quản trị cần làm gì khi phát hiện lỗ hổng bảo mật trong phần mềm?",
  options: [
    "Chờ nhà phát triển cung cấp bản vá",
    "Vô hiệu hóa phần mềm đó",
    "Cập nhật bản vá bảo mật ngay khi có",
    "Khôi phục hệ thống về trạng thái trước đó",
  ],
  correct: 2,
},
{
  question: "Tấn công Phishing là gì?",
  options: [
    "Một hình thức tấn công lừa đảo qua email hoặc website giả mạo",
    "Tấn công dò mật khẩu",
    "Tấn công từ chối dịch vụ (DoS)",
    "Tấn công thông qua mã hóa",
  ],
  correct: 0,
},
{
  question: "Mã độc Ransomware thường:",
  options: [
    "Khóa dữ liệu của người dùng và yêu cầu tiền chuộc",
    "Đánh cắp mật khẩu",
    "Phát tán virus",
    "Lây lan qua email",
  ],
  correct: 0,
},
{
  question: "Tấn công từ chối dịch vụ (DoS) là:",
  options: [
    "Làm quá tải hệ thống mục tiêu để ngăn chặn dịch vụ hoạt động",
    "Đánh cắp thông tin người dùng",
    "Mã hóa dữ liệu của người dùng",
    "Phát tán phần mềm độc hại",
  ],
  correct: 0,
},
{
  question:
    "Điều nào sau đây là biện pháp tốt nhất để bảo vệ dữ liệu khỏi tấn công Ransomware?",
  options: [
    "Sử dụng phần mềm diệt virus",
    "Thường xuyên sao lưu dữ liệu",
    "Cài đặt tường lửa mạnh",
    "Sử dụng mật khẩu mạnh",
  ],
  correct: 1,
},
{
  question: "SQL Injection là hình thức tấn công nhằm vào:",
  options: [
    "Lỗ hổng trong câu lệnh SQL của ứng dụng web",
    "Lỗ hổng trong giao thức HTTPS",
    "Hệ thống mạng không được bảo mật",
    "Lỗ hổng trong thuật toán mã hóa",
  ],
  correct: 0,
},
{
  question:
    "XSS (Cross-site Scripting) là một hình thức tấn công mà kẻ tấn công có thể:",
  options: [
    "Tiêm mã độc vào trang web và thực thi mã trên trình duyệt của người dùng",
    "Đánh cắp mật khẩu người dùng thông qua email",
    "Phát tán virus qua mạng LAN",
    "Mã hóa thông tin của người dùng",
  ],
  correct: 0,
},
{
  question: "Điều nào đúng về tường lửa (firewall)?",
  options: [
    "Kiểm soát luồng dữ liệu vào và ra mạng dựa trên các quy tắc bảo mật",
    "Mã hóa dữ liệu của người dùng",
    "Kiểm tra mật khẩu của người dùng",
    "Phát hiện phần mềm độc hại",
  ],
  correct: 0,
},
{
  question: "Phần mềm diệt virus có chức năng gì?",
  options: [
    "Phát hiện và loại bỏ virus, phần mềm độc hại",
    "Bảo mật kết nối mạng",
    "Mã hóa email",
    "Kiểm tra và sửa lỗi hệ thống",
  ],
  correct: 0,
},
{
  question: "Zero-day exploit là gì?",
  options: [
    "Một lỗ hổng bảo mật chưa được phát hiện và khắc phục",
    "Một loại mã hóa khóa công khai",
    "Một kỹ thuật mã hóa an toàn",
    "Một tấn công sử dụng mật mã đối xứng",
  ],
  correct: 0,
},
{
  question: "Tấn công Social Engineering là tấn công vào:",
  options: [
    "Tâm lý và hành vi của người dùng để lừa đảo hoặc đánh cắp thông tin",
    "Lỗ hổng trong phần mềm hệ thống",
    "Dữ liệu được mã hóa",
    "Cơ sở dữ liệu SQL",
  ],
  correct: 0,
},
{
  question: "Mã hóa Caesar là gì?",
  options: [
    "Mã hóa thay thế mỗi chữ cái bằng chữ cái khác theo một khóa cố định.",
    "Mã hóa thay thế mỗi chữ cái bằng chữ cái khác theo chiều đảo ngược.",
    "Mã hóa mỗi ký tự bằng một số ngẫu nhiên.",
    "Mã hóa thay thế các ký tự theo bảng chữ cái ngẫu nhiên.",
  ],
  correct: 0,
},
{
  question: "Mã hóa Affine là một dạng mã hóa nào?",
  options: [
    "Mã hóa thay thế",
    "Mã hóa đối xứng",
    "Mã hóa không đối xứng",
    "Mã hóa Vigenere",
  ],
  correct: 0,
},
{
  question: "Kỹ thuật nào sau đây dùng trong mã hóa Vigenère?",
  options: [
    "Sử dụng một bảng chữ cái để thay thế",
    "Sử dụng các khóa tuần hoàn",
    "Sử dụng phép toán số học để thay thế",
    "Sử dụng phép toán ma trận",
  ],
  correct: 1,
},
{
  question: "Trong mã hóa Caesar, khóa có thể có giá trị nào?",
  options: ["Từ 1 đến 25", "Từ 0 đến 25", "Từ 0 đến 26", "Từ 1 đến 26"],
  correct: 0,
},
{
  question:
    "Khi sử dụng mã hóa Vigenère, chuỗi khóa dài hơn thông điệp, điều này có tác dụng gì?",
  options: [
    "Tăng độ bảo mật của mã hóa",
    "Giảm độ bảo mật của mã hóa",
    "Không ảnh hưởng đến độ bảo mật",
    "Làm mã hóa trở nên khó giải mã",
  ],
  correct: 0,
},
{
  question: "Thuật toán mã hóa DES là loại mã hóa gì?",
  options: [
    "Mã hóa không đối xứng",
    "Mã hóa đối xứng",
    "Mã hóa hàm băm",
    "Mã hóa chữ ký số",
  ],
  correct: 1,
},
{
  question: "Thuật toán mã hóa AES là mã hóa loại gì?",
  options: [
    "Mã hóa đối xứng",
    "Mã hóa công khai",
    "Mã hóa thay thế",
    "Mã hóa ma trận",
  ],
  correct: 0,
},
{
  question: "Sự khác biệt giữa DES và AES là gì?",
  options: [
    "AES có khóa dài hơn và an toàn hơn DES",
    "DES sử dụng khóa dài hơn AES",
    "AES không phải là mã hóa đối xứng",
    "DES có tốc độ mã hóa nhanh hơn AES",
  ],
  correct: 0,
},
{
  question: "Kích thước của khóa trong AES có thể là bao nhiêu?",
  options: [
    "128 bit, 192 bit, 256 bit",
    "64 bit, 128 bit, 256 bit",
    "128 bit, 256 bit",
    "256 bit, 512 bit",
  ],
  correct: 0,
},
{
  question: "Thuật toán mã hóa AES sử dụng bao nhiêu vòng lặp trong quá trình mã hóa?",
  options: ["10 vòng", "12 vòng", "14 vòng", "16 vòng"],
  correct: 0,
},
{
  question: "RSA là thuật toán mã hóa nào?",
  options: [
    "Mã hóa đối xứng",
    "Mã hóa công khai",
    "Mã hóa thay thế",
    "Mã hóa không đối xứng",
  ],
  correct: 1,
},
{
  question: "RSA sử dụng hai khóa nào?",
  options: [
    "Khóa công khai và khóa riêng",
    "Hai khóa đối xứng",
    "Khóa duy nhất",
    "Khóa chung",
  ],
  correct: 0,
},
{
  question: "Khóa riêng trong RSA được dùng để làm gì?",
  options: [
    "Mã hóa thông điệp",
    "Giải mã thông điệp",
    "Xác thực chữ ký số",
    "Chuyển đổi giữa các thuật toán",
  ],
  correct: 2,
},
{
  question: "Quá trình tạo ra khóa công khai trong RSA dựa trên điều gì?",
  options: [
    "Số nguyên tố",
    "Hàm băm",
    "Mã hóa Vigenère",
    "Chữ ký số",
  ],
  correct: 0,
},
{
  question: "Trong RSA, bảo mật của hệ thống phụ thuộc vào điều gì?",
  options: [
    "Việc giải yếu số nguyên tố",
    "Việc mã hóa chữ ký số",
    "Khóa công khai",
    "Thuật toán AES",
  ],
  correct: 0,
},
{
  question: "MD5 là thuật toán hàm băm nào?",
  options: [
    "Mã hóa đối xứng",
    "Mã hóa công khai",
    "Hàm băm",
    "Thuật toán mã hóa",
  ],
  correct: 2,
},
{
  question: "MD5 tạo ra một giá trị băm có độ dài bao nhiêu bit?",
  options: ["128 bit", "256 bit", "512 bit", "1024 bit"],
  correct: 0,
},
{
  question: "SHA-512 tạo ra một giá trị băm có độ dài bao nhiêu bit?",
  options: ["256 bit", "512 bit", "128 bit", "1024 bit"],
  correct: 1,
},
{
  question: "Điều nào sau đây là một đặc điểm của hàm băm SHA1?",
  options: [
    "Không có va chạm",
    "Được sử dụng trong chữ ký số",
    "Dễ dàng bị bẻ khóa",
    "Không thể sinh ngược từ giá trị băm",
  ],
  correct: 1,
},
{
  question: "Hàm băm nào dưới đây được xem là an toàn nhất hiện nay?",
  options: ["MD5", "SHA-1", "SHA-256", "SHA-512"],
  correct: 3,
},
{
  question: "Chữ ký số là gì?",
  options: [
    "Một phương pháp mã hóa thông điệp",
    "Một phương pháp xác thực danh tính người gửi",
    "Mã hóa thông tin tài chính",
    "Đảm bảo độ bảo mật của dữ liệu",
  ],
  correct: 1,
},
{
  question: "Mục đích của chữ ký số là gì?",
  options: [
    "Bảo vệ quyền riêng tư của thông điệp",
    "Đảm bảo tính toàn vẹn và xác thực thông điệp",
    "Mã hóa dữ liệu",
    "Chống lại các cuộc tấn công mạng",
  ],
  correct: 1,
},
{
  question: "Thuật toán nào được sử dụng trong chữ ký số RSA?",
  options: [
    "Thuật toán đối xứng",
    "Thuật toán không đối xứng",
    "Thuật toán băm",
    "Thuật toán xác thực",
  ],
  correct: 1,
},
{
  question: "Mã hóa công khai giúp giải quyết vấn đề nào?",
  options: [
    "Bảo mật thông điệp",
    "Xác thực danh tính",
    "Cả A và B",
    "Không có tác dụng gì",
  ],
  correct: 2,
},
{
  question: "Trong quá trình tạo chữ ký số, ai tạo ra khóa riêng?",
  options: ["Người gửi", "Người nhận", "Cả người gửi và người nhận", "Tổ chức chứng thực"],
  correct: 0,
},
{
  question: "Điều nào dưới đây không phải là hành vi vi phạm đạo đức trong an toàn thông tin?",
  options: [
    "Sử dụng mật khẩu mạnh",
    "Xâm nhập vào hệ thống mà không có sự cho phép",
    "Đảm bảo tính toàn vẹn của thông tin",
    "Tiết lộ thông tin cá nhân mà không có sự đồng ý",
  ],
  correct: 0,
},
{
  question: "Pháp luật an toàn thông tin tại Việt Nam quy định về gì?",
  options: [
    "Bảo vệ thông tin cá nhân",
    "Cấm các hành vi xâm phạm dữ liệu",
    "Cả A và B",
    "Không có luật an toàn thông tin",
  ],
  correct: 2,
},
{
  question: "Cái gì là cơ sở của các quy định bảo mật thông tin trong pháp luật?",
  options: [
    "Chính sách công ty",
    "Quyền lợi của người sử dụng",
    "Quyền lợi của tổ chức",
    "Quy định của cơ quan nhà nước",
  ],
  correct: 3,
},
{
  question: "Việc bảo vệ thông tin cá nhân trong không gian mạng có ý nghĩa gì?",
  options: [
    "Đảm bảo an ninh quốc gia",
    "Bảo vệ quyền lợi cá nhân",
    "Cả A và B",
    "Không quan trọng",
  ],
  correct: 2,
},
{
  question: "Để đảm bảo bảo mật thông tin trong môi trường làm việc, doanh nghiệp nên làm gì?",
  options: [
    "Đảm bảo chỉ người quản trị có quyền truy cập vào hệ thống",
    "Cung cấp cho nhân viên mật khẩu mặc định",
    "Khuyến khích nhân viên chia sẻ mật khẩu",
    "Không cần đào tạo nhân viên về bảo mật",
  ],
  correct: 0,
},
{
  question: "Mã hóa đối xứng có điểm yếu gì?",
  options: [
    "Khóa có thể bị lộ",
    "Tốc độ chậm",
    "Không thể sử dụng cho các giao dịch lớn",
    "Tất cả các câu trên",
  ],
  correct: 0,
},
{
  question: "RSA được xem là an toàn vì lý do gì?",
  options: [
    "Sự khó khăn của việc phân tích các số nguyên tố lớn",
    "Tính đơn giản trong quá trình mã hóa",
    "Không cần phải sử dụng khóa",
    "Tốc độ mã hóa nhanh",
  ],
  correct: 0,
},
{
  question: "Thuật toán AES có ưu điểm nào?",
  options: [
    "Mã hóa nhanh và an toàn",
    "Chỉ có thể dùng cho dữ liệu nhỏ",
    "Dễ bị giải mã nếu không có khóa",
    "Dùng cho mã hóa đối xứng và công khai",
  ],
  correct: 0,
},
{
  question:
    "Trong hệ thống RSA, thông điệp được mã hóa bằng khóa công khai có thể giải mã bằng gì?",
  options: ["Khóa công khai", "Khóa riêng", "Mã băm", "Thuật toán SHA"],
  correct: 1,
},
{
  question:
    "Kỹ thuật nào dùng để đảm bảo tính toàn vẹn của dữ liệu trong an toàn thông tin?",
  options: ["Mã hóa", "Hàm băm", "Chữ ký số", "Xác thực hai yếu tố"],
  correct: 1,
},
{
  question: "Tại sao việc sử dụng mật khẩu mạnh lại quan trọng?",
  options: [
    "Giúp dễ dàng ghi nhớ",
    "Giảm thiểu nguy cơ bị tấn công từ các phương pháp thử mật khẩu",
    "Làm tăng tốc độ hệ thống",
    "Tất cả các câu trên",
  ],
  correct: 1,
},
{
  question: "Thuật toán nào được sử dụng trong quá trình mã hóa DES?",
  options: ["Mã hóa đối xứng", "Mã hóa công khai", "Mã hóa ma trận", "Mã hóa RSA"],
  correct: 0,
},
{
  question: "Phương thức nào dưới đây giúp bảo vệ thông tin khi truyền qua mạng?",
  options: [
    "Mã hóa SSL/TLS",
    "Đảm bảo mật khẩu mạnh",
    "Sử dụng tường lửa",
    "Cả A và B",
  ],
  correct: 0,
},
{
  question: "Điều nào là chính sách bảo mật hợp lý trong tổ chức?",
  options: [
    "Quản lý quyền truy cập thông tin rõ ràng",
    "Cung cấp quyền truy cập không giới hạn",
    "Không cần xác thực danh tính",
    "Phớt lờ cập nhật phần mềm bảo mật",
  ],
  correct: 0,
},
{
  question: "Chữ ký số sử dụng gì để xác nhận tính hợp lệ của thông điệp?",
  options: ["Khóa công khai", "Khóa riêng", "Chứng thư số", "Tất cả các câu trên"],
  correct: 3,
},
{
  question: "Mã hóa DES không còn được sử dụng rộng rãi vì lý do gì?",
  options: [
    "Chìa khóa quá ngắn (56 bit)",
    "Không thể mã hóa các dữ liệu lớn",
    "Quá chậm khi mã hóa",
    "Độ bảo mật rất cao",
  ],
  correct: 0,
},
{
  question: "Mục tiêu chính của bảo mật thông tin là gì?",
  options: [
    "Đảm bảo tính toàn vẹn, bảo mật và khả dụng của thông tin",
    "Giảm chi phí bảo mật",
    "Tăng khả năng chia sẻ thông tin",
    "Đảm bảo các quy định pháp lý",
  ],
  correct: 0,
},
{
  question: "Bảo mật thông tin trong môi trường điện toán đám mây cần chú ý đến yếu tố gì?",
  options: [
    "Quyền truy cập và kiểm soát dữ liệu",
    "Chi phí lưu trữ dữ liệu",
    "Đảm bảo tốc độ truyền tải dữ liệu",
    "Phân quyền sử dụng phần mềm",
  ],
  correct: 0,
},
{
  question: "Để tạo ra một môi trường an toàn trong tổ chức, cần bắt đầu từ đâu?",
  options: [
    "Cập nhật phần mềm liên tục",
    "Đào tạo nhân viên về bảo mật",
    "Kiểm tra hệ thống bảo mật thường xuyên",
    "Tất cả các câu trên",
  ],
  correct: 3,
},
{
  question: "Các cuộc tấn công kiểu 'phishing' thường lợi dụng yếu tố nào?",
  options: ["Lỗi trong mã hóa", "Lỗi người sử dụng", "Lỗ hổng phần mềm", "Tấn công từ xa"],
  correct: 1,
},
{
  question: "Mã hóa trong giao tiếp qua mạng giúp gì?",
  options: [
    "Giảm chi phí bảo mật",
    "Bảo vệ thông tin khỏi các cuộc tấn công",
    "Tăng độ trễ trong việc truyền tải",
    "Giảm tính toàn vẹn của thông tin",
  ],
  correct: 1,
},
{
  question: "Việc sử dụng chữ ký số giúp gì cho người dùng?",
  options: [
    "Đảm bảo tính toàn vẹn và xác thực thông điệp",
    "Giúp tiết kiệm chi phí giao dịch",
    "Cung cấp quyền truy cập không giới hạn",
    "Tăng tốc độ truyền tải thông tin",
  ],
  correct: 0,
},
{
  question: "Để đảm bảo an toàn thông tin, mỗi tổ chức nên có chính sách bảo mật như thế nào?",
  options: [
    "Quy trình rõ ràng và thường xuyên đánh giá bảo mật",
    "Đưa ra mật khẩu mặc định cho tất cả nhân viên",
    "Không cần đào tạo nhân viên về bảo mật",
    "Không cần áp dụng phần mềm bảo mật",
  ],
  correct: 0,
},
{
  question: "Cách thức nào dưới đây có thể giúp ngăn chặn các cuộc tấn công DDoS?",
  options: [
    "Sử dụng tường lửa mạnh",
    "Dùng mã hóa SSL",
    "Sử dụng phần mềm chống virus",
    "Sử dụng bộ lọc nội dung",
  ],
  correct: 0,
},
{
  question: "Phương pháp nào dưới đây không liên quan đến việc bảo vệ dữ liệu cá nhân?",
  options: [
    "Mã hóa dữ liệu",
    "Xác thực người dùng mạnh",
    "Đảm bảo sao lưu thường xuyên",
    "Chia sẻ thông tin cá nhân qua email",
  ],
  correct: 3,
},
{
  question: "DES là viết tắt của gì?",
  options: [
    "Data Encryption System",
    "Data Encoding Standard",
    "Data Encryption Standard",
    "Digital Encryption Service",
  ],
  correct: 2,
},
{
  question: "Chiều dài khóa của DES là bao nhiêu bit?",
  options: ["56 bit", "64 bit", "128 bit", "256 bit"],
  correct: 0,
},
{
  question: "DES thuộc loại mã hóa nào?",
  options: [
    "Mã hóa bất đối xứng",
    "Mã hóa đối xứng",
    "Băm dữ liệu",
    "Mã hóa khóa công khai",
  ],
  correct: 1,
},
{
  question: "Kích thước khối dữ liệu trong DES là bao nhiêu?",
  options: ["32 bit", "64 bit", "128 bit"],
  correct: 1,
},
{
  question: "DES sử dụng bao nhiêu vòng lặp trong quá trình mã hóa?",
  options: ["8", "10", "12", "16"],
  correct: 3,
},
{
  question: "Thuật toán DES sử dụng phương pháp nào để tăng cường bảo mật?",
  options: [
    "Mã hóa tuyến tính",
    "Mã hóa phi tuyến tính",
    "Thay thế và hoán vị",
    "Mã hóa lượng tử",
  ],
  correct: 2,
},
{
  question: "Chức năng F trong DES là gì?",
  options: [
    "Kết hợp khóa phụ với dữ liệu đầu vào",
    "Giải mã dữ liệu",
    "Sinh khóa chính",
    "Mã hóa dữ liệu trực tiếp",
  ],
  correct: 0,
},
{
  question: "DES sử dụng bao nhiêu khóa phụ trong quá trình mã hóa?",
  options: ["8", "10", "12", "16"],
  correct: 3,
},
{
  question: "Loại tấn công nào thường được sử dụng để phá vỡ DES?",
  options: ["Tấn công từ chối dịch vụ", "Tấn công từ điển", "Tấn công vét cạn"],
  correct: 2,
},
{
  question: "Cấu trúc của DES dựa trên nguyên tắc nào?",
  options: [
    "Cấu trúc vòng lặp Feistel",
    "Cấu trúc khối tuyến tính",
    "Mã hóa khối AES",
    "Cấu trúc ma trận",
  ],
  correct: 0,
},
{
  question: "Lý do chính khiến DES không còn an toàn là gì?",
  options: ["Số vòng lặp quá ít", "Khóa quá ngắn", "Dữ liệu không được băm", "Không có kiểm tra lỗi"],
  correct: 1,
},
{
  question: "Quá trình giải mã trong DES có giống quá trình mã hóa không?",
  options: [
    "Giống hoàn toàn",
    "Khác hoàn toàn",
    "Giống nhưng khóa phụ ngược lại",
    "Giống nhưng giảm số vòng lặp",
  ],
  correct: 2,
},
{
  question: "DES được phát triển bởi công ty nào?",
  options: ["IBM", "Microsoft", "Google", "Intel"],
  correct: 0,
},
{
  question: "Khóa ban đầu của DES có chiều dài bao nhiêu bit trước khi loại bỏ các bit kiểm tra chẵn lẻ?",
  options: ["48 bit", "56 bit", "64 bit", "128 bit"],
  correct: 2,
},
{
  question: "Trong DES, bước nào diễn ra đầu tiên?",
  options: ["Sinh khóa phụ", "Hoán vị ban đầu (IP)", "Áp dụng hàm F", "Hoán vị cuối (FP)"],
  correct: 1,
},
{
  question: "DES sử dụng bao nhiêu bảng S-box?",
  options: ["2", "4", "6", "8"],
  correct: 3,
},
{
  question: "Loại chế độ hoạt động nào thường được sử dụng với DES để tăng cường bảo mật?",
  options: ["ECB", "CBC", "CFB", "OFB"],
  correct: 1,
},
{
  question: "Trong DES, 'Feistel Structure' có vai trò gì?",
  options: [
    "Chia nhỏ dữ liệu và khóa",
    "Hoán vị khóa phụ",
    "Kết hợp dữ liệu và khóa theo vòng lặp",
    "Kiểm tra dữ liệu đầu vào",
  ],
  correct: 2,
},
{
  question: "DES sử dụng bao nhiêu phép toán XOR trong mỗi vòng lặp?",
  options: ["1", "2", "4", "8"],
  correct: 0,
},
{
  question: "DES đã được thay thế bởi thuật toán nào an toàn hơn?",
  options: ["RSA", "AES", "SHA-256", "MD5"],
  correct: 1,
}

];

// =====================
// BIẾN TOÀN CỤC
// =====================
let currentPart = null; // 0: all, 1-2: part index+1
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isAnswered = false;

// =====================
// DOM ELEMENTS
// =====================
const mainMenu = document.getElementById("main-menu");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");
const questionContent = document.getElementById("question-content");
const optionsList = document.getElementById("options-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const quizPart = document.getElementById("quiz-part");
const quizProgress = document.getElementById("quiz-progress");
const resultSummary = document.getElementById("result-summary");
const backBtn = document.getElementById("back-btn");
const backToMenuBtn = document.getElementById("quiz-back-btn");
const restartBtn = document.getElementById("restart-btn");

// =====================
// SỰ KIỆN MENU
// =====================
document.querySelectorAll(".menu-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const part = btn.getAttribute("data-part");
    startQuiz(part);
  });
});

// =====================
// KHỞI ĐỘNG QUIZ
// =====================
function startQuiz(part) {
  // Xác định phần
  let selectedQuestions;
  if (part === "all") {
    selectedQuestions = questions.flat();
    currentPart = 0;
  } else {
    const idx = parseInt(part, 10) - 1;
    selectedQuestions = questions[idx] ? [...questions[idx]] : [];
    currentPart = idx + 1;
  }
  // Random thứ tự câu hỏi
  selectedQuestions = shuffleArray([...selectedQuestions]);
  // Random options cho từng câu và cập nhật answer
  quizQuestions = selectedQuestions.map((q) => shuffleQuestionOptions(q));
  currentIndex = 0;
  userAnswers = Array(quizQuestions.length).fill(null);
  isAnswered = false;
  // Ẩn menu, hiện quiz
  mainMenu.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  // Nếu không có câu hỏi thì báo luôn
  if (quizQuestions.length === 0) {
    questionContent.textContent = "Chưa có câu hỏi cho phần này.";
    optionsList.innerHTML = "";
    quizPart.textContent = currentPart === 0 ? "Tất Cả" : `Phần ${currentPart}`;
    quizProgress.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }
  renderQuiz();
}

// Hàm random mảng (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Hàm random options và cập nhật answer đúng
function shuffleQuestionOptions(question) {
  const optionObjs = question.options.map((opt, idx) => ({ opt, idx }));
  shuffleArray(optionObjs);
  const newOptions = optionObjs.map((o) => o.opt);

  // Xử lý cả single và multiple answers
  let newAnswer;
  if (Array.isArray(question.correct)) {
    newAnswer = question.correct.map((correctIdx) =>
      optionObjs.findIndex((o) => o.idx === correctIdx)
    );
  } else {
    newAnswer = optionObjs.findIndex((o) => o.idx === question.correct);
  }

  return {
    ...question,
    options: newOptions,
    answer: newAnswer,
    isMultiple: Array.isArray(question.correct),
  };
}

// =====================
// HIỂN THỊ CÂU HỎI
// =====================
function renderQuiz() {
  if (quizQuestions.length === 0) {
    questionContent.textContent = "Chưa có câu hỏi cho phần này.";
    optionsList.innerHTML = "";
    quizPart.textContent = "";
    quizProgress.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    return;
  }
  const q = quizQuestions[currentIndex];
  quizPart.textContent = currentPart === 0 ? "Tất Cả" : `Phần ${currentPart}`;
  quizProgress.textContent = `Câu ${currentIndex + 1} / ${
    quizQuestions.length
  }`;

  // Hiển thị câu hỏi với ghi chú về multiple choice
  if (q.isMultiple) {
    questionContent.textContent = q.question + " (Chọn nhiều đáp án)";
  } else {
    questionContent.textContent = q.question;
  }

  optionsList.innerHTML = "";
  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.classList.add("option-item");

    if (userAnswers[currentIndex] !== null) {
      li.classList.add("disabled");

      if (q.isMultiple) {
        if (q.answer.includes(i)) li.classList.add("correct");
        if (userAnswers[currentIndex].includes(i) && !q.answer.includes(i))
          li.classList.add("incorrect");
        if (userAnswers[currentIndex].includes(i)) li.classList.add("selected");
      } else {
        if (i === q.answer) li.classList.add("correct");
        if (
          i === userAnswers[currentIndex] &&
          userAnswers[currentIndex] !== q.answer
        )
          li.classList.add("incorrect");
        if (i === userAnswers[currentIndex]) li.classList.add("selected");
      }
    }

    li.addEventListener("click", () => handleOptionClick(i));
    optionsList.appendChild(li);
  });

  prevBtn.disabled = currentIndex === 0;

  // Logic nút Next
  if (currentIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Xem kết quả";
    nextBtn.disabled = userAnswers[currentIndex] === null;
  } else {
    nextBtn.textContent = "Câu Tiếp Theo";
    nextBtn.disabled = userAnswers[currentIndex] === null;
  }

  // Thêm nút xác nhận cho multiple choice nếu chưa trả lời
  if (q.isMultiple && userAnswers[currentIndex] === null) {
    addConfirmButton();
  }
}

// =====================
// XỬ LÝ CHỌN ĐÁP ÁN
// =====================
function handleOptionClick(selectedIdx) {
  const q = quizQuestions[currentIndex];

  if (q.isMultiple) {
    // Xử lý multiple choice
    if (userAnswers[currentIndex] === null) {
      userAnswers[currentIndex] = [];
    }

    const currentAnswers = userAnswers[currentIndex];
    const optionElement = optionsList.children[selectedIdx];

    if (currentAnswers.includes(selectedIdx)) {
      // Bỏ chọn nếu đã chọn
      const index = currentAnswers.indexOf(selectedIdx);
      currentAnswers.splice(index, 1);
      optionElement.classList.remove("selected");
    } else {
      // Thêm vào danh sách chọn
      currentAnswers.push(selectedIdx);
      optionElement.classList.add("selected");
    }

    // Enable nút Next nếu đã chọn ít nhất 1 đáp án
    if (currentIndex === quizQuestions.length - 1) {
      nextBtn.disabled = currentAnswers.length === 0;
    } else {
      nextBtn.disabled = currentAnswers.length === 0;
    }
  } else {
    // Xử lý single choice
    if (userAnswers[currentIndex] !== null) return;

    userAnswers[currentIndex] = selectedIdx;
    isAnswered = true;

    // Hiển thị đúng/sai sau 0.5s
    setTimeout(() => {
      showAnswerResult();
      renderQuiz();
    }, 500);

    // Ngăn chọn lại
    Array.from(optionsList.children).forEach((li) =>
      li.classList.add("disabled")
    );
  }
}

// Thêm nút xác nhận cho multiple choice
function addConfirmButton() {
  const q = quizQuestions[currentIndex];
  if (q.isMultiple && userAnswers[currentIndex] === null) {
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Xác nhận đáp án";
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.onclick = () => {
      if (userAnswers[currentIndex] && userAnswers[currentIndex].length > 0) {
        isAnswered = true;
        setTimeout(() => {
          showAnswerResult();
          renderQuiz();
        }, 500);
        Array.from(optionsList.children).forEach((li) =>
          li.classList.add("disabled")
        );
        confirmBtn.remove();
      }
    };
    optionsList.parentNode.insertBefore(confirmBtn, optionsList.nextSibling);
  }
}

// =====================
// HIỂN THỊ ĐÚNG/SAI
// =====================
function showAnswerResult() {
  const q = quizQuestions[currentIndex];
  Array.from(optionsList.children).forEach((li, i) => {
    li.classList.remove("selected");

    if (q.isMultiple) {
      if (q.answer.includes(i)) li.classList.add("correct");
      if (
        userAnswers[currentIndex] &&
        userAnswers[currentIndex].includes(i) &&
        !q.answer.includes(i)
      ) {
        li.classList.add("incorrect");
      }
      if (userAnswers[currentIndex] && userAnswers[currentIndex].includes(i)) {
        li.classList.add("selected");
      }
    } else {
      if (i === q.answer) li.classList.add("correct");
      if (
        i === userAnswers[currentIndex] &&
        userAnswers[currentIndex] !== q.answer
      ) {
        li.classList.add("incorrect");
      }
    }
  });
}

// =====================
// NÚT CÂU TRƯỚC / TIẾP THEO
// =====================
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    nextBtn.textContent = "Câu Tiếp Theo";
    renderQuiz();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuiz();
  } else if (currentIndex === quizQuestions.length - 1) {
    showResult();
  }
});

// =====================
// HIỂN THỊ KẾT QUẢ
// =====================
function showResult() {
  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");
  const total = quizQuestions.length;

  let correct = 0;
  for (let idx = 0; idx < quizQuestions.length; idx++) {
    const q = quizQuestions[idx];
    const userAnswer = userAnswers[idx];

    if (q.isMultiple) {
      // Kiểm tra multiple choice: phải chọn đúng tất cả đáp án
      if (userAnswer && Array.isArray(userAnswer) && Array.isArray(q.answer)) {
        const sortedUser = [...userAnswer].sort();
        const sortedCorrect = [...q.answer].sort();
        if (
          sortedUser.length === sortedCorrect.length &&
          sortedUser.every((val, i) => val === sortedCorrect[i])
        ) {
          correct++;
        }
      }
    } else {
      // Kiểm tra single choice
      if (userAnswer === q.answer) {
        correct++;
      }
    }
  }

  const percent = Math.round((correct / total) * 100);
  let rank = "";
  if (percent === 100) rank = "🌟 Xuất sắc!";
  else if (percent >= 80) rank = "👍 Rất tốt!";
  else if (percent >= 60) rank = "Khá!";
  else if (percent >= 40) rank = "Cố gắng thêm!";
  else rank = "Hãy luyện tập nhiều hơn nhé!";

  resultSummary.innerHTML = `
    <div><b>Số câu đúng:</b> ${correct} / ${total}</div>
    <div><b>Phần trăm đúng:</b> ${percent}%</div>
    <div><b>Đánh giá:</b> ${rank}</div>
  `;
}

// =====================
// NÚT QUAY LẠI
// =====================
backBtn.addEventListener("click", () => {
  resultView.classList.add("hidden");
  mainMenu.classList.remove("hidden");
});

// =====================
// NÚT QUAY LẠI MÀN HÌNH CHÍNH Ở QUIZ VIEW
// =====================
if (backToMenuBtn) {
  backToMenuBtn.addEventListener("click", () => {
    quizView.classList.add("hidden");
    mainMenu.classList.remove("hidden");
    // Reset trạng thái quiz nếu muốn bắt đầu lại từ đầu
    quizQuestions = [];
    currentIndex = 0;
    userAnswers = [];
    isAnswered = false;
    questionContent.textContent = "";
    optionsList.innerHTML = "";
    quizPart.textContent = "";
    quizProgress.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  });
}

// =====================
// NÚT BẮT ĐẦU LẠI QUIZ HIỆN TẠI
// =====================
if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    // Lấy lại danh sách câu hỏi phần hiện tại
    let selectedQuestions;
    if (currentPart === 0) {
      selectedQuestions = questions.flat();
    } else {
      selectedQuestions = questions[currentPart - 1]
        ? [...questions[currentPart - 1]]
        : [];
    }
    // Random lại thứ tự câu hỏi
    selectedQuestions = shuffleArray([...selectedQuestions]);
    // Random lại options cho từng câu và cập nhật answer
    quizQuestions = selectedQuestions.map((q) => shuffleQuestionOptions(q));
    currentIndex = 0;
    userAnswers = Array(quizQuestions.length).fill(null);
    isAnswered = false;
    // Hiển thị lại quiz từ đầu
    renderQuiz();
  });
}

// =====================
// NGĂN CHỌN LẠI ĐÁP ÁN
// =====================
optionsList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI" && userAnswers[currentIndex] !== null) {
    e.preventDefault();
  }
});

// Chia câu hỏi thành 3 phần
const questions = [
  // Phần 1: Câu 1-50
  questionsData.slice(0, 50),
  // Phần 2: Câu 51-100
  questionsData.slice(50, 100),
  // Phần 3: Câu 101-150
  questionsData.slice(100, 150),
  // Phần 4: Câu 151-200
  questionsData.slice(150, 200),
  // Phần 5: Câu 201-250
  questionsData.slice(200, 250)
];
