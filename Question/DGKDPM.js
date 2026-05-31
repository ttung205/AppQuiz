
var questionsData = [
	{
		question:
			"Sắp xếp theo thời điểm (khi một sai lầm được tạo ra hoặc xảy ra trong hệ thống đang chạy) của các khái niệm sau: (1) an error, (2) a fault, và (3) a failure?",
		options: [
			"1,2,3",
			"1,3,2",
			"2,1,3",
			"2,3,1",
			"3,1,2",
			"3,2,1",
		],
		correct: 2,
	},
	{
		question: "Kiểm thử giúp với tiêu chí khả năng tin cậy nào?",
		options: ["fault avoidance", "fault tolerance", "error removal", "fault forecasting"],
		correct: 2,
	},
	{
		question: "Availability giống với reliability.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question: "Một hệ thống đúng (đúng theo yêu cầu) sẽ an toàn.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question: "Một hệ thống đúng sẽ đáng tin cậy.",
		options: ["True", "False"],
		correct: 0,
	},
	{
		question: "Hệ thống robust (mạnh mẽ) là đáng tin cậy.",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question: "Hệ thống an toàn là robust (mạnh mẽ).",
		options: ["True", "False"],
		correct: 1,
	},
	{
		question: "Why do floating point numbers sometimes lead to erroneous code?",
		options: [
			"Arithmetic on floating point numbers is often approximate, so it can introduce errors",
			"Floating point numbers have values that are not actually numbers, such as infinity and NaN (not a number), that can cause computations to behave strangely.",
			"In Java, floating point numbers cannot represent numbers as large as ints and longs",
			"As floating point computations are approximate, equality comparisons fail after computations that would succeed when using real numbers",
		],
		correct: [0,1,3],
	},
	{
		question: "Why do relational boundaries sometimes lead to erroneous code?",
		options: [
			"Programmers often make 'off-by-one' errors",
			"Determining strict limits on ranges is difficult in requirements engineering",
			"Relational boundaries define points of discontinuity for programs",
			"The Java compiler sometimes optimizes these expressions incorrectly",
		],
		correct: [0,1,2],
	},
	{
		question: "Why do casts sometimes lead to erroneous code?",
		options: [
			"When converting an integer to a smaller bit length (e.g. long to int), the value may be truncated.",
			"When converting to a larger bit length (e.g., int to long), the value may change from positive to negative.",
			"When converting from signed to unsigned types (e.g., int to byte), negative numbers can't be represented.",
			"When converting from a double to int, the value is truncated to a whole number.",
			"When converting from an int to double, the integer value may not be exactly representable.",
		],
		correct: [0,2,3],
	},
    {
        "question": "Tại sao chúng ta thường có thể kiểm thử nghiêm ngặt hơn ở cấp độ đơn vị (unit level) thay vì cấp độ hệ thống (system level)?",
        "options": [
        "Luôn có ít phụ thuộc cho kiểm thử đơn vị hơn so với kiểm thử hệ thống.",
        "Các bài kiểm thử có xu hướng chạy nhanh hơn, vì vậy chúng ta có thể chạy nhiều bài kiểm thử hơn.",
        "Chúng ta thường có thể quan sát được nhiều trạng thái nội bộ hơn ở cấp độ đơn vị nên có thể xây dựng các bộ dự đoán (oracles) mạnh mẽ hơn."
        ],
        "correct": [1, 2]
    },
    {
        "question": "Khi nói rằng chúng ta muốn xác minh dư thừa (redundant verification), điều đó có nghĩa là gì?",
        "options": [
        "Chúng ta muốn chạy lại các chứng minh của nhiều hệ thống con để đảm bảo nhận được cùng một câu trả lời.",
        "Chúng ta muốn có thật nhiều các bài kiểm thử tương tự hoặc giống hệt nhau.",
        "Chúng ta muốn có một vài kỹ thuật xác minh khác nhau để kiểm tra cùng một chương trình hoặc hệ thống con."
        ],
        "correct": 2
    },
    {
        "question": "Những cách nào sau đây là tốt để làm việc với các lập trình viên nhằm giảm thiểu các lỗi mang tính hệ thống (systematic errors)?",
        "options": [
        "Tạo các thư viện hoặc hàm tiện ích để đóng gói các thao tác mà lập trình viên thường làm sai.",
        "Tạo danh sách kiểm tra (checklists) cho lập trình viên dựa trên các lỗi phổ biến nhất thấy được trong kiểm thử.",
        "Sử dụng các ngôn ngữ / IDE giúp loại bỏ một số loại lỗi nhất định bằng cách kiểm tra tại thời điểm biên dịch (compile-time).",
        "Gửi email cho lập trình viên danh sách các lỗi đã tìm thấy trong vài tháng qua.",
        "Tạo các công cụ để kiểm thử/xác minh các loại lỗi phổ biến cụ thể."
        ],
        "correct": [0, 1, 2, 4]
    },
    {
        "question": "Một chương trình bị 'flakey' (không ổn định) nghĩa là gì?",
        "options": [
        "Với cùng một đầu vào, đôi khi chương trình thất bại trong một bài kiểm thử và những lúc khác thì không.",
        "Đôi khi chương trình tạo ra các đầu ra khác nhau cho cùng một đầu vào.",
        "Đôi khi chương trình kết thúc ở các trạng thái nội bộ khác nhau cho cùng một đầu vào."
        ],
        "correct": 0
    },
    {
        "question": "Tại sao khả năng quan sát (observability) là một vấn đề quan trọng trong kiểm thử?",
        "options": [
        "Thông thường các chương trình có trạng thái - một bài kiểm thử có thể kích hoạt lỗi nhưng chỉ hiển thị ở đầu ra sau một chuỗi dài các bước, trong khi nó có thể thấy ngay lập tức bằng cách kiểm tra trạng thái nội bộ.",
        "Các lập trình viên thường muốn che giấu thông tin quan trọng liên quan đến mã nguồn vì họ nghĩ điều đó giúp giữ an toàn cho công việc.",
        "Vì lập trình viên thích sử dụng mẫu thiết kế 'Observer' và điều này thường dẫn đến lỗi vì nó tách biệt đối tượng domain và giao diện đồ họa.",
        "Nếu một lỗi chương trình chỉ xảy ra nhất thời (transient) và bị các đoạn mã khác che lấp, bạn có thể không 'thấy' được nó và bài kiểm thử có thể vẫn vượt qua."
        ],
        "correct": [0, 3]
    },
    {
    "question": "Mô hình chữ V (V-Model) là:",
    "options": [
      "Một khung thử nghiệm (testing framework) để chạy các bài kiểm tra tại mỗi bước trong quá trình phát triển phần mềm.",
      "Một mô hình phát triển phần mềm kết nối các giai đoạn phát triển khác nhau với quy trình kiểm thử phù hợp. Các bài kiểm tra này sau đó được sử dụng khi kiểm tra xác minh (verification) cho từng giai đoạn.",
      "Tất cả các phương án trên."
    ],
    "correct": 1
  },
  {
    "question": "Thiết kế hệ thống (system design) được kiểm tra bằng cách sử dụng:",
    "options": [
      "Kiểm thử đơn vị (Unit Testing).",
      "Kiểm thử Module (Module Testing).",
      "Kiểm thử xác nhận (Validation Testing).",
      "Kiểm thử xác minh (Verification Testing)."
    ],
    "correct": 1
  },
  {
    "question": "Đặc tả của hệ thống (specification of the system) được kiểm tra bằng cách sử dụng:",
    "options": [
      "Kiểm thử đơn vị (Unit Testing).",
      "Kiểm thử xác nhận (Validation Testing).",
      "Kiểm thử xác minh (Verification Testing).",
      "Kiểm thử tích hợp hệ thống (System Integration Testing)."
    ],
    "correct": 2
  },
  {
    "question": "Sự khác biệt giữa xác nhận (validation) và xác minh (verification) là:",
    "options": [
      "Xác nhận khẳng định chúng ta đang xây dựng đúng sản phẩm (right product) trong khi xác minh khẳng định chúng ta đang xây dựng sản phẩm đúng cách (product right).",
      "Trong mô hình chữ V, việc xác nhận được lập kế hoạch trong giai đoạn yêu cầu người dùng (user requirement stage), còn việc xác minh được lập kế hoạch trong giai đoạn đặc tả người dùng (user specification stage).",
      "Không có phương án nào ở trên đúng.",
      "Cả A và B đều đúng."
    ],
    "correct": 3
  },
  {
    "question": "Đối với mô hình chữ V, một hệ thống đã vượt qua kiểm thử xác minh (verification testing) có nghĩa là:",
    "options": [
      "Hệ thống đã hoàn tất và không cần kiểm thử thêm.",
      "Hệ thống đã vượt qua tất cả các bài kiểm tra từ kiểm thử đơn vị đến kiểm thử xác minh và hiện đã sẵn sàng cho kiểm thử xác nhận (validation testing).",
      "Hệ thống cần được kiểm tra xuyên suốt từ kiểm thử đơn vị cho đến kiểm thử xác minh trước khi được khẳng định là đúng đắn."
    ],
    "correct": 1
  },
  {
    "question": "Trong mô hình chữ V, một hệ thống hợp lệ (valid system) ngầm định đó là một hệ thống đã được xác minh (verified system):",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "correct": 0
  },
  {
    "question": "Kiểm thử cấu trúc (Structural testing) là:",
    "options": [
      "Kiểm thử hộp trắng (White-box testing)",
      "Kiểm thử hộp đen (Black-box testing)",
      "Kiểm thử hộp xanh (Blue-box testing)"
    ],
    "correct": 0
  },
  {
    "question": "Điều nào sau đây KHÔNG đúng về kiểm thử cấu trúc?",
    "options": [
      "Trong hầu hết các trường hợp, việc đạt được độ bao phủ cấu trúc 100% là không khả thi.",
      "Mục tiêu của kiểm thử là đạt được độ bao phủ cấu trúc 100% để đảm bảo hệ thống không còn lỗi.",
      "Các tiêu chí bao phủ cấu trúc sử dụng cấu trúc của mã nguồn để đo lường mức độ đầy đủ của các bài kiểm thử.",
      "Kiểm thử cấu trúc là kiểm thử hộp trắng."
    ],
    "correct": 1
  },
  {
    "question": "Điều nào sau đây KHÔNG đúng về kiểm thử đột biến (mutation testing)?",
    "options": [
      "Với kiểm thử đột biến, bạn có thể biết mình đã bao phủ được bao nhiêu cấu trúc mã.",
      "Điểm mức độ đầy đủ của đột biến cho bạn biết chất lượng của các bài kiểm thử; điểm càng cao, chất lượng các trường hợp kiểm thử càng tốt.",
      "Một đột biến bị tiêu diệt khi tồn tại một hoặc nhiều bài kiểm thử có thể phân biệt được sự khác biệt giữa kết quả của đột biến và kết quả của chương trình gốc."
    ],
    "correct": 0
  },
  {
    "question": "Những điều nào sau đây KHÔNG đúng về kiểm thử đột biến?",
    "options": [
      "Bạn chỉ tạo ra một đột biến duy nhất cho việc kiểm thử đột biến.",
      "Toán tử đột biến đưa vào một thay đổi cú pháp cho chương trình để đột biến đó không thể biên dịch được.",
      "Một đột biến và chương trình gốc khác nhau về mặt cú pháp."
    ],
    "correct": [0, 1]
  },
  {
    "question": "Jenny đã viết một chương trình và tạo ra 10 trường hợp kiểm thử. Cô ấy cũng tạo ra 50 đột biến từ chương trình gốc để đo lường mức độ đầy đủ của các đầu vào kiểm thử. Sau khi chạy tất cả các trường hợp kiểm thử với từng đột biến, Jenny thấy rằng tất cả các trường hợp kiểm thử đều vượt qua trên tất cả các đột biến (không đột biến nào bị tiêu diệt). Trong tình huống này, bước tiếp theo phù hợp nhất mà cô ấy nên thực hiện là gì?",
    "options": [
      "Cô ấy nên viết thêm các trường hợp kiểm thử.",
      "Cô ấy có thể dừng kiểm thử vì tất cả các bài kiểm tra đều đã vượt qua.",
      "Cô ấy nên tạo thêm nhiều đột biến hơn."
    ],
    "correct": 0
  },
  {
    "question": "Tại sao kiểm thử được coi là một công nghệ xác minh 'lạc quan' (optimistic)?",
    "options": [
      "Các bài kiểm thử có thể đều vượt qua nhưng chương trình vẫn có thể sai.",
      "Bất kỳ bài kiểm thử nào thất bại đều có thể không thực sự quan trọng dưới góc nhìn của người dùng.",
      "Bạn có thể sử dụng kiểm thử trên bất kỳ loại phần mềm nào, trong khi chỉ có thể chạy phân tích tĩnh hoặc chứng minh trên các hệ thống nhỏ.",
      "Một số bài kiểm thử có thể thất bại, nhưng chương trình có thể vẫn đúng."
    ],
    "correct": 0
  },
  {
    "question": "Nếu một bài kiểm thử thất bại, điều đó có thể có nghĩa là:",
    "options": [
      "Không có vấn đề gì xảy ra.",
      "Chương trình bị sai.",
      "Chính bài kiểm thử đó bị sai."
    ],
    "correct": [1, 2]
  },
  {
    "question": "Giả sử chúng ta có hai hệ thống A và B, trong đó A được kiểm thử nghiêm ngặt hơn B. Liệu hệ thống A có đáp ứng các mục tiêu chất lượng tốt hơn hệ thống B không?",
    "options": [
      "Có",
      "Không"
    ],
    "correct": 1
  },
  {
    "question": "Kiểm thử đơn vị (Unit test) được sử dụng để kiểm tra: (chọn đáp án đúng nhất)",
    "options": [
      "Việc triển khai (Implementation) của phần mềm.",
      "Thiết kế (Design) của phần mềm.",
      "Các yêu cầu ban đầu của người dùng.",
      "Tất cả các phương án trên."
    ],
    "correct": 0
  },
  {
    "question": "'Service' (Dịch vụ) là hành vi của hệ thống được xác định bởi các yêu cầu phần mềm.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Một lỗi tiềm ẩn (latent error) trở thành một lỗi hiện hữu (effective error) khi:",
    "options": [
      "Lỗi khiến chương trình trả về kết quả không mong muốn cho người dùng.",
      "Chương trình bắt đầu thực thi.",
      "Người dùng nhập nó vào mã nguồn.",
      "Chương trình thực thi dòng mã chứa lỗi tiềm ẩn.",
      "Chương trình đạt đến một trạng thái mà lỗi đó biểu hiện ra."
    ],
    "correct": 4
  },
  {
    "question": "Một chương trình kết thúc với một lỗi (error) có luôn ám chỉ một sự thất bại (failure) không?",
    "options": [
      "Có",
      "No"
    ],
    "correct": 1
  },
  {
    "question": "Phần mềm điều khiển hành trình thích ứng (Adaptive cruise control) vẫn tiếp tục chạy khi có nhiều lỗi phần cứng và dịch vụ xảy ra, nhưng thường xuyên đánh giá sai khoảng cách giữa các xe một lượng đáng kể. Đây là ví dụ về một hệ thống ______.",
    "options": [
      "Chắc chắn đúng (certainly correct)",
      "Chắc chắn sai (certainly incorrect)",
      "Chắc chắn mạnh mẽ (certainly robust)",
      "Chắc chắn an toàn (certainly safe)",
      "Chắc chắn đáng tin cậy (certainly reliable)"
    ],
    "correct": 2
  },
  {
    "question": "Kiểm thử đột biến (Mutation testing) là một phép đo _______.",
    "options": [
      "Hộp xám (gray-box)",
      "Hộp đen (black-box)",
      "Hộp trắng (white-box)"
    ],
    "correct": 2
  },
  {
    "question": "Điều nào sau đây là đúng về kiểm thử? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Rất khó để thực hiện một cách nghiêm ngặt.",
      "Nó có thể xác định một cách chắc chắn liệu phần mềm có đúng hay không.",
      "Nó đóng vai trò là tài liệu về hành vi của hệ thống.",
      "Nó kiểm tra toàn bộ hệ thống, bao gồm cả những phần mềm mà bạn không viết.",
      "Đôi khi nó có thể tìm thấy những lỗi không được chủ động tìm kiếm, ví dụ như khi chương trình bị sập trong quá trình thực thi một trường hợp kiểm thử."
    ],
    "correct": [0, 2, 3, 4]
  },
  {
    "question": "Các nhiệm vụ có thể là một phần của giai đoạn Tear Down là (chọn hai đáp án):",
    "options": [
      "Khởi tạo các giá trị trường hợp kiểm thử.",
      "Xóa dữ liệu bạn đã thêm sau khi kiểm thử xong.",
      "Mở kết nối để kiểm thử.",
      "Đóng kết nối sau khi kiểm thử xong."
    ],
    "correct": [1, 3]
  },
  {
    "question": "Trong khung kiểm thử JUnit, chúng ta viết các trường hợp kiểm thử (chọn đáp án tốt nhất):",
    "options": [
      "Bên trong phương thức được thực thi và chúng ta chú thích rằng phần này là để kiểm thử.",
      "Bên trong lớp cần kiểm thử và chúng ta chú thích rằng phần này là để kiểm thử.",
      "Trong một lớp riêng biệt, và với mỗi phương thức trong chương trình, chúng ta liên kết (các) trường hợp kiểm thử để kiểm tra tính đúng đắn của phương thức đó.",
      "Tất cả các phương án trên."
    ],
    "correct": 2
  },
  {
    "question": "Các hệ thống đồng thời (Concurrent systems) khá khó kiểm thử vì (chọn đáp án tốt nhất):",
    "options": [
      "Để đảm bảo chỉ một luồng sử dụng một biến tại một thời điểm, mã 'synchronized' trong Java có thể dẫn đến bế tắc (deadlocks) nơi mỗi luồng bị chặn để chờ luồng khác.",
      "Sự đan xen tiềm năng khác nhau của các luồng dẫn đến 'điều kiện chạy đua' (race conditions) nơi chương trình có thể hành xử khác nhau giữa các lần thực thi.",
      "Tất cả các phương án trên.",
      "Sự đan xen tiềm năng khác nhau của các luồng có nghĩa là có thêm rất nhiều trạng thái hệ thống có thể xảy ra."
    ],
    "correct": 2
  },
  {
    "question": "Kế hoạch kiểm thử đơn vị (unit testing plan) được tạo ra luôn là một tài liệu trang trọng (formal document).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Loại kiểm thử nào sau đây xác định xem bạn có xây dựng đúng thứ mà khách hàng yêu cầu hay không?",
    "options": [
      "Kế hoạch kiểm thử đơn vị (Unit Testing Plan)",
      "Kiểm thử xác nhận hệ thống (System Validation Test)",
      "Kiểm thử chấp nhận từ khách hàng (Customer Acceptance Test)",
      "Kiểm thử đơn vị (Unit Test)"
    ],
    "correct": 2
  },
  {
    "question": "Kiểm thử xác nhận hệ thống (System validation testing) là khi hệ thống được kiểm tra các cấu trúc dễ gây lỗi và đảm bảo các chức năng cấp thấp (low level functionality).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Thành phần nào sau đây KHÔNG phải là thành phần quan trọng của một kế hoạch kiểm thử theo Viện Đảm bảo Chất lượng (Quality Assurance Institute)?",
    "options": [
      "Độ tin cậy (Reliability)",
      "Nguồn lực và môi trường kiểm thử (Resources and Testing Environment)",
      "Lịch trình (Schedule)",
      "Điều kiện bắt đầu và kết thúc (Entry and Exit Conditions)",
      "Phạm vi (Scope)"
    ],
    "correct": 0
  },
  {
    "question": "Điều nào sau đây giúp truy xuất các trường hợp kiểm thử (test cases) ngược về các yêu cầu (requirements)?",
    "options": [
      "Kế hoạch kiểm thử đơn vị (Unit Testing Plan)",
      "Báo cáo khả năng truy xuất (Traceability Report)",
      "Chuyên gia lĩnh vực (Domain Expert)",
      "Báo cáo lĩnh vực (Domain Report)"
    ],
    "correct": 1
  },
  {
    "question": "Điều nào sau đây KHÔNG đúng về ma trận truy xuất nguồn gốc (traceability/requirements matrix)?",
    "options": [
      "Nó giúp tìm ra các yêu cầu chưa được kiểm thử.",
      "Nó sẽ liệt kê bất kỳ yêu cầu nào còn thiếu (missing requirements).",
      "Nó giúp xác định các trường hợp kiểm thử không gắn liền với yêu cầu nào."
    ],
    "correct": 1
  },
  {
    "question": "Khi xem xét các mối quan ngại hoặc rủi ro trong lập kế hoạch kiểm thử, việc thực hiện hành động ngăn ngừa khi có thể là rất quan trọng.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Việc chấp nhận các yêu cầu có chứa nội dung 'cần được xác định sau' (to-be-determined) là điều bình thường.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Kiểm thử là cách duy nhất để tìm ra lỗi trong một hệ thống.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Luôn có áp lực đè nặng lên ______ trong việc chứng minh một sản phẩm chưa sẵn sàng để phát hành (đặc biệt là trong mô hình Thác nước).",
    "options": [
      "Khách hàng/Người dùng",
      "Chuyên gia lĩnh vực",
      "Nhân viên kiểm thử (Testers)",
      "Quản lý (Managers)"
    ],
    "correct": 2
  },
  {
    "question": "Kiểm thử đơn vị (Unit testing) thường là kiểm thử hộp trắng được thực hiện bởi lập trình viên trên một đoạn mã nhỏ (một hàm hoặc một lớp).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Điều nào sau đây KHÔNG nên bao gồm trong kiểm thử đơn vị?",
    "options": [
      "Kiểm tra biên của mảng (array bounds).",
      "Kiểm tra biên của vòng lặp cho các lỗi off-by-one.",
      "Các cấu trúc dễ gây lỗi (error prone constructs).",
      "Kiểm thử tích hợp module (module integration testing)."
    ],
    "correct": 3
  },
  {
    "question": "Kiểm thử xác minh thiết kế (Design Verification Testing) có hai khía cạnh: Kiểm thử tích hợp và Kiểm thử chức năng.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Việc kiểm thử các module để đảm bảo chúng hoạt động cùng nhau một cách chính xác xảy ra ở giai đoạn nào của quy trình kiểm thử phần mềm?",
    "options": [
      "Kiểm thử đơn vị (Unit Testing)",
      "Kiểm thử xác minh thiết kế (Design Verification Testing)",
      "Kiểm thử xác nhận hệ thống (System Validation Testing)",
      "Kiểm thử chức năng (Functional Testing)"
    ],
    "correct": 1
  },
  {
    "question": "Kiểm thử xác nhận hệ thống (System validation testing) xảy ra khi toàn bộ hệ thống đã hoàn tất.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Kiểm thử xác nhận hệ thống sẽ kiểm tra hệ thống về chất lượng vận hành trên nhiều khía cạnh. Điều nào sau đây KHÔNG phải là một trong những khía cạnh đó?",
    "options": [
      "Khả năng sử dụng (Usability)",
      "Khả năng di động (Portability)",
      "Khả năng mở rộng (Scalability)",
      "Hiệu suất (Performance)",
      "Bất biến vòng lặp (Loop Invariants)",
      "Bảo mật (Security)"
    ],
    "correct": 4
  },
  {
    "question": "Điều nào sau đây KHÔNG thuộc về báo cáo trạng thái kiểm thử (test status report)?",
    "options": [
      "Các lỗi còn mở (Open defects)",
      "Mã nguồn của trường hợp kiểm thử (Test case code)",
      "Những gì đã được kiểm thử",
      "Những gì chưa được kiểm thử"
    ],
    "correct": 1
  },
  {
    "question": "Báo cáo kiểm thử duy nhất là báo cáo cuối cùng và chỉ được gửi khi tất cả việc kiểm thử đã hoàn tất.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Báo cáo trạng thái kiểm thử quan trọng vì:",
    "options": [
      "Cho phép quản lý kiểm soát rủi ro tốt hơn.",
      "Cho phép bộ phận marketing cung cấp các cập nhật cho khách hàng và quản lý kỳ vọng của họ.",
      "Hỗ trợ cải tiến quy trình thông qua các đánh giá sau dự án (postmortem).",
      "Tất cả các phương án trên."
    ],
    "correct": 3
  },
  {
    "question": "Kiểm thử là _______ nhưng không _________ với quá trình phát triển.",
    "options": [
      "Độc lập (Independent); Cô lập (Isolated)",
      "Cô lập (Isolated); Độc lập (Independent)"
    ],
    "correct": 0
  },
  {
    "question": "Hành động làm giảm thiểu rủi ro được gọi là:",
    "options": [
      "Giảm thiểu rủi ro (Risk mitigation)",
      "Phân tích rủi ro (Risk analysis)",
      "Kiểm thử rủi ro (Risk testing)",
      "Phương trình rủi ro (Risk equation)"
    ],
    "correct": 0
  },
  {
    "question": "Phương trình rủi ro là:",
    "options": [
      "Rủi ro = Tác động / Khả năng xảy ra",
      "Rủi ro = Khả năng xảy ra / Tác động",
      "Rủi ro = Tác động * Khả năng xảy ra",
      "Rủi ro = Khả năng xảy ra + Tác động"
    ],
    "correct": 2
  },
  {
    "question": "Mức độ tổn thất mà ban quản lý sẵn sàng chấp nhận được gọi là:",
    "options": [
      "Giảm thiểu rủi ro (Risk mitigation)",
      "Khẩu vị rủi ro (Risk appetite)",
      "Tác động rủi ro (Risk impact)",
      "Phương trình rủi ro (Risk equation)"
    ],
    "correct": 1
  },
  {
    "question": "Xét về tác động của rủi ro, 'chiều sâu của tác động' (depth of impact) đề cập đến:",
    "options": [
      "Số lượng người hoặc hệ thống bị ảnh hưởng",
      "Chi phí thiệt hại",
      "Mức độ nghiêm trọng của thiệt hại",
      "Kích thước của module"
    ],
    "correct": 2
  },
  {
    "question": "Khi xem xét rủi ro, việc cân nhắc các loại tác động là rất quan trọng. Điều nào sau đây KHÔNG được đưa ra làm ví dụ trong các bài giảng?",
    "options": [
      "Uy tín (Reputation)",
      "Cơ sở khách hàng/người dùng",
      "Động lực (Motivation)",
      "Tài chính (Financial)",
      "Tính mạng (Lives)"
    ],
    "correct": 2
  },
  {
    "question": "Đặt câu hỏi: Bạn có thể làm gì để kiểm soát (giảm bớt) rủi ro? là một ví dụ về:",
    "options": [
      "Phân tích rủi ro (Risk analysis)",
      "Kiểm thử rủi ro (Risk testing)",
      "Tác động rủi ro (Risk Impact)",
      "Giảm thiểu rủi ro (Risk mitigation)",
      "Khẩu vị rủi ro (Risk Appetite)"
    ],
    "correct": 3
  },
  {
    "question": "Khi việc tránh rủi ro (risk avoidance) thất bại, cách tốt nhất là kiểm thử các tính năng có tác động cao nhất và các tính năng có khả năng thất bại cao nhất.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Chỉ khoảng một nửa nỗ lực kiểm thử được dành cho việc kiểm thử thực tế.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Các giai đoạn trong vòng đời lỗi phần mềm (software defect life cycle) bao gồm tất cả những điều sau đây ngoại trừ một cái. Hãy chọn giai đoạn không đúng trong danh sách dưới đây:",
    "options": [
      "Phân tích (Analyze)",
      "Báo cáo (Report)",
      "Theo dõi trạng thái (Track status)",
      "Kiểm tra lại lỗi (Retest bug)",
      "Đóng lỗi (Close bug)",
      "Bỏ qua lỗi (Ignore the bug)"
    ],
    "correct": 5
  },
  {
    "question": "Một phần của quá trình phân tích là tìm ra lỗi thực sự nằm ở đâu. Lỗi có thể nằm ở:",
    "options": [
      "Bài kiểm thử (Test)",
      "Người kiểm thử (Tester)",
      "Sản phẩm (Product)",
      "Tất cả các phương án trên"
    ],
    "correct": 3
  },
  {
    "question": "Khả năng tái lập (reproducibility) và khả năng lặp lại (repeatability) là một khi nói về các lỗi phần mềm.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Không phải tất cả các lỗi đều có mức độ quan trọng/ảnh hưởng như nhau.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Giai đoạn báo cáo gồm bốn bước chính. Điều nào sau đây KHÔNG phải là một trong những bước đó?",
    "options": [
      "Để lập trình viên quyết định có nên báo cáo lỗi hay không",
      "Đảm bảo lỗi không bị trùng lặp",
      "Đảm bảo lỗi được khắc phục",
      "Nhập lỗi vào hệ thống",
      "Trao đổi với lập trình viên"
    ],
    "correct": 0
  },
  {
    "question": "Các đặc điểm của một báo cáo lỗi hiệu quả là gì?",
    "options": [
      "Được đánh số hoặc có ID",
      "Đơn giản",
      "Được viết bằng văn bản",
      "Đầy đủ",
      "Dễ hiểu",
      "Tất cả các phương án trên"
    ],
    "correct": 5
  },
  {
    "question": "Bạn nên luôn luôn bao gồm số lượng bước tối thiểu để tái lập lỗi trong một báo cáo lỗi.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Nội dung báo cáo lỗi phần mềm gồm sáu thành phần chính. Điều nào sau đây KHÔNG phải là một trong những thành phần đó?",
    "options": [
      "Thông tin định danh (Identification Information)",
      "Mô tả vấn đề (Description of the problem)",
      "Chỉ số trạng thái (Status Indicator)",
      "Ghi chú (Comments)",
      "Thông tin hỗn hợp (Misc Information)",
      "Thông tin hỗ trợ (Supporting Information)",
      "Các báo cáo lỗi liên quan (Associated defect reports)"
    ],
    "correct": 6
  },
  {
    "question": "Thành phần nào sau đây sẽ chứa số định danh lỗi (ID)?",
    "options": [
      "Thông tin định danh (Identification Information)",
      "Mô tả vấn đề (Description of the problem)",
      "Chỉ số trạng thái (Status Indicator)",
      "Ghi chú (Comments)",
      "Thông tin hỗn hợp (Misc Information)",
      "Thông tin hỗ trợ (Supporting Information)"
    ],
    "correct": 0
  },
  {
    "question": "Thành phần nào sau đây sẽ chứa cái nhìn tổng quan về vấn đề cùng với những gì bạn đã làm và kết quả của hành động đó?",
    "options": [
      "Thông tin định danh (Identification Information)",
      "Mô tả vấn đề (Description of the problem)",
      "Chỉ số trạng thái (Status Indicator)",
      "Ghi chú (Comments)",
      "Thông tin hỗn hợp (Misc Information)",
      "Thông tin hỗ trợ (Supporting Information)"
    ],
    "correct": 1
  },
  {
    "question": "Giả sử bạn đang viết báo cáo lỗi và lỗi cụ thể này được xác định là có mức độ nghiêm trọng trung bình (medium severity). Thành phần nào sẽ chứa thông tin này?",
    "options": [
      "Thông tin định danh (Identification Information)",
      "Mô tả vấn đề (Description of the problem)",
      "Chỉ số trạng thái (Status Indicator)",
      "Ghi chú (Comments)",
      "Thông tin hỗn hợp (Misc Information)",
      "Thông tin hỗ trợ (Supporting Information)"
    ],
    "correct": 2
  },
  {
    "question": "Mức độ nghiêm trọng (Severity) và mức độ ưu tiên (Priority) về cơ bản là giống nhau xét về mặt chỉ số trạng thái.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Những báo cáo lỗi tốt nhất là những báo cáo có sự giới thiệu mới mẻ và khéo léo về các thuật ngữ và chữ viết tắt.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Giả sử có một lỗi được phát hiện là có vấn đề, nhưng về cơ bản bạn có thể bỏ qua nó. Nó nên có mức độ nghiêm trọng nào?",
    "options": [
      "Cao (High)",
      "Trung bình (Medium)",
      "Thấp (Low)",
      "Không đáng kể (Trivial)"
    ],
    "correct": 3
  },
  {
    "question": "Giả sử bạn đang làm việc trên một thiết bị bay không người lái và một lỗi được tìm thấy. Lỗi này chỉ thỉnh thoảng xảy ra, nhưng nếu xảy ra, thiết bị sẽ rơi xuống khu dân cư và gây thương vong lớn. Lỗi này nên được xếp mức độ nghiêm trọng nào?",
    "options": [
      "Cao (High)",
      "Trung bình (Medium)",
      "Thấp (Low)",
      "Không đáng kể (Trivial)"
    ],
    "correct": 0
  },
  {
    "question": "Giả sử một lỗi có độ nghiêm trọng thấp nhưng nếu sửa nó sẽ gây ra nhiều vấn đề hơn. Trạng thái cuối cùng của lỗi này nên là gì?",
    "options": [
      "Không lặp lại (Not repeatable)",
      "Không sửa (Do not fix)",
      "Trùng lặp (Duplicate)",
      "Không phải lỗi (Not a problem)",
      "Trì hoãn (Deferred)"
    ],
    "correct": 1
  },
  {
    "question": "Nếu có một giải pháp thay thế (workaround) tương đối dễ dàng cho một vấn đề, hãy GHI NÓ VÀO trong báo cáo lỗi.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Khi nói đến việc theo dõi lỗi (tracking defects), khía cạnh quan trọng nhất là phải có một quy trình và tuân thủ quy trình đó.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Điều nào sau đây KHÔNG phải là một kết luận rút ra từ giai đoạn kiểm tra lại (retesting phase)?",
    "options": [
      "Vấn đề đã được khắc phục",
      "Vấn đề không thể vượt qua",
      "Vấn đề vẫn không thay đổi",
      "Vấn đề được thay thế bằng một vấn đề mới"
    ],
    "correct": 1
  },
  {
    "question": "Các ghi chú về kiểm thử và xác minh thuộc về danh mục nào sau đây?",
    "options": [
      "Theo dõi (Track)",
      "Kiểm tra lại (Retest)",
      "Đóng (Close)"
    ],
    "correct": 2
  },
  {
    "question": "Nếu một hệ thống đang được kiểm thử (SUT) cần tương tác với các hệ thống khác để hoàn thành một bài kiểm thử đơn vị, chúng ta chỉ cần bỏ qua việc kiểm thử đó.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Bạn gọi những phiên bản thu gọn (lightweight) của các thành phần mà hệ thống đang được kiểm thử tương tác cùng, vốn cần thiết để thực hiện kiểm thử đơn vị, là gì?",
    "options": [
      "Vật thể giả (Dummy Objects)",
      "Vật thay thế kiểm thử (Test Doubles)",
      "Cuống kiểm thử (Test Stubs)",
      "Vật thể mô phỏng (Mock Objects)"
    ],
    "correct": 1
  },
  {
    "question": "Bạn gọi các giá trị giả được lấp đầy vào các đối tượng (vốn là tham số bắt buộc của hệ thống đang kiểm thử nhưng lại không liên quan đến bài test) là gì?",
    "options": [
      "Giá trị giả (Dummy Values)",
      "Cuống giả (Dummy Stubs)",
      "Mô phỏng giả (Dummy Mocks)",
      "Vật thể giả (Dummy Objects)"
    ],
    "correct": 3
  },
  {
    "question": "Các nguồn dữ liệu đầu vào giả được sử dụng bởi một hệ thống đang được kiểm thử được gọi là gì?",
    "options": [
      "Vật thể giả (Dummy Objects)",
      "Cuống kiểm thử (Test Stubs)",
      "Vật thể giả lập (Fake Objects)",
      "Vật thể gián điệp (Spy Objects)"
    ],
    "correct": 1
  },
  {
    "question": "Bạn sẽ sử dụng cái gì để kiểm tra các kết quả gián tiếp được tạo ra bởi một hệ thống đang được kiểm thử?",
    "options": [
      "Vật thể mô phỏng (Mock Objects)",
      "Vật thể bầu trời (Sky Objects)",
      "Vật thể giả lập (Fake Objects)",
      "Vật thể giả (Dummy Objects)"
    ],
    "correct": 0
  },
  {
    "question": "Về cơ bản không có sự khác biệt giữa vật thể gián điệp (spy objects) và vật thể mô phỏng (mock objects).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Mục tiêu của Mockito là để:",
    "options": [
      "Tự động tạo ra các bài kiểm thử thiếu ổn định (flakey tests)",
      "Tạo ra các vật thay thế kiểm thử (test doubles) và kiểm tra các tương tác",
      "Hỗ trợ thực hiện kiểm thử đơn vị trong môi trường cô lập hoàn toàn"
    ],
    "correct": 1
  },
  {
    "question": "Khi cung cấp đầu vào kiểm thử cho các vật thay thế kiểm thử (test doubles), chúng ta muốn sử dụng ____ và ____.",
    "options": [
      "Vật thể mô phỏng (Mock objects); Vật thể gián điệp (Spy objects)",
      "Vật thể giả (Dummy objects); Vật thể mô phỏng (Mock objects)",
      "Cuống kiểm thử (Test stubs); Vật thể gián điệp (Spy objects)",
      "Vật thể giả (Dummy objects); Cuống kiểm thử (Test stubs)"
    ],
    "correct": 3
  },
  {
    "question": "Trong quá trình xây dựng các vật thay thế kiểm thử, bạn muốn cung cấp đầu ra chỉ cho một vài giá trị nhất định. Bạn sử dụng cái gì?",
    "options": [
      "Vật thể giả (Dummy Objects)",
      "Vật thay thế kiểm thử (Test Doubles)",
      "Cuống kiểm thử (Test Stubs)",
      "Vật thể mô phỏng (Mock Objects)"
    ],
    "correct": 2
  },
  {
    "question": "Trong khi kiểm thử, bạn thấy rằng các bài kiểm thử đơn vị yêu cầu sử dụng một cơ sở dữ liệu tốn kém về tài nguyên tính toán. Bạn có thể sử dụng cái gì làm vật thay thế kiểm thử?",
    "options": [
      "Cuống kiểm thử (Test Stubs)",
      "Vật thể giả lập (Fake Objects)"
    ],
    "correct": 1
  },
  {
    "question": "Trong Mockito, có sự phân biệt giữa vai trò mà một lớp đảm nhận và cách bạn xây dựng nó. Các vai trò của một vật thay thế kiểm thử là stub, mock và dummy (hoặc cả ba). Cách bạn xây dựng chúng trong Mockito là giống nhau.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "______ cung cấp hệ sinh thái (ecosystem) cho việc kiểm thử.",
    "options": [
      "Vật thay thế kiểm thử (Test doubles)",
      "Đầu vào và đầu ra (Inputs and outputs)",
      "Tác dụng phụ (Side effects)",
      "Vật thể mô phỏng (Mock objects)"
    ],
    "correct": 0
  },
  {
    "question": "Vật thể mô phỏng (Mocks) và vật thể gián điệp (Spies) cho phép giám sát chi tiết (fine grain monitoring) hệ thống đang được kiểm thử.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Điều nào sau đây KHÔNG phải là một phần của việc kiểm thử tương tác bằng cách sử dụng vật thể mô phỏng và vật thể gián điệp?",
    "options": [
      "Các phương thức có đang được gọi (hoặc không) hay không",
      "Các giá trị lấp đầy bắt buộc đang được tạo cho hệ thống đang kiểm thử",
      "Các tham số phù hợp có đang được sử dụng cho các cuộc gọi phương thức hay không",
      "Các phương thức có đang được gọi theo đúng thứ tự hay không"
    ],
    "correct": 1
  },
  {
    "question": "Vật thể ______ cho phép chúng ta quan sát các tương tác của các đối tượng giả (fake objects). Vật thể _____ cho phép chúng ta quan sát các tương tác của các đối tượng thực (real objects).",
    "options": [
      "Mô phỏng (Mock); Giả (Dummy)",
      "Gián điệp (Spy); Mô phỏng (Mock)",
      "Giả (Dummy); Mô phỏng (Mock)",
      "Mô phỏng (Mock); Gián điệp (Spy)"
    ],
    "correct": 3
  },
  {
    "question": "Trong Mockito, không có khả năng ghi đè hành vi của các phương thức với một vật thể gián điệp (spy object).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Trong Mockito, có thể tạo ra một đối tượng vừa là cuống kiểm thử (stub) vừa là vật thể mô phỏng (mock).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Bộ dự đoán tự động (automated oracle) là:",
    "options": [
      "Một chương trình tự động tạo ra các trường hợp kiểm thử.",
      "Một chương trình tự động so khớp kết quả thực tế của chương trình với kết quả mong đợi của trường hợp kiểm thử.",
      "Một chương trình tự động tạo ra dữ liệu kiểm thử đầu vào.",
      "Tất cả các phương án trên."
    ],
    "correct": 1
  },
  {
    "question": "Bước thiết lập (setup) cho một trường hợp kiểm thử là quan trọng để thiết lập một trạng thái cụ thể cho chương trình chạy kiểm thử.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Các nhiệm vụ có thể là một phần của giai đoạn dọn dẹp (tear down) là (chọn hai đáp án):",
    "options": [
      "Khởi tạo các giá trị cho trường hợp kiểm thử",
      "Xóa dữ liệu bạn đã thêm sau khi kiểm thử xong",
      "Mở kết nối để kiểm thử",
      "Đóng kết nối sau khi kiểm thử xong"
    ],
    "correct": [2, 3]
  },
  {
    "question": "Đánh giá (Assessment) là giai đoạn mà tại đó:",
    "options": [
      "Đầu ra của phần mềm được kiểm tra bởi một bộ dự đoán (oracle).",
      "Các trường hợp kiểm thử được thực thi.",
      "Dữ liệu kiểm thử được khởi tạo."
    ],
    "correct": 0
  },
  {
    "question": "Các khung thực thi kiểm thử (ví dụ: JUnit) quan trọng vì:",
    "options": [
      "Chúng cho phép kiểm tra tự động dựa trên một bộ dự đoán (oracle) để xác định bài kiểm thử có vượt qua hay không.",
      "Chúng chạy tất cả các trường hợp kiểm thử và cung cấp phản hồi về việc trường hợp nào đạt và trường hợp nào thất bại.",
      "Chúng tự động tạo các bài kiểm thử cho bạn.",
      "Chúng cho phép lập trình viên kiểm thử đơn vị cho từng phương thức."
    ],
    "correct": [0, 1, 3]
  },
  {
    "question": "Để kiểm thử một phương thức main, bạn cần:",
    "options": [
      "Điều hướng lại đầu vào (input) để được nhập bởi trường hợp kiểm thử.",
      "Điều hướng lại đầu ra (output) để được tạo ra bởi trường hợp kiểm thử.",
      "Gọi phương thức main với các tham số phù hợp."
    ],
    "correct": [0, 1, 2]
  },
  {
    "question": "Trong một khung kiểm thử, chúng ta viết các trường hợp kiểm thử:",
    "options": [
      "Bên trong phương thức được thực thi và chúng ta chú thích rằng phần này là để kiểm thử.",
      "Bên trong lớp cần kiểm thử; chúng ta chú thích rằng phần này là để kiểm thử.",
      "Trong một lớp riêng biệt — thường là với một hoặc nhiều lớp kiểm thử cho mỗi lớp được kiểm thử.",
      "Tất cả các phương án trên."
    ],
    "correct": 2
  },
  {
    "question": "Các 'True oracles' (bộ dự đoán chuẩn) là các phiên bản trước của chương trình và luôn có thể phát hiện ra lỗi.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Loại bộ dự đoán (oracle) nào sau đây chủ yếu được sử dụng để phát hiện điểm bất thường (anomaly detection)?",
    "options": [
      "Bộ dự đoán tính nhất quán (Consistency oracle)",
      "Bộ dự đoán thống kê (Statistical oracle)",
      "Bộ dự đoán dựa trên kinh nghiệm (Heuristic oracle)",
      "Bộ dự đoán dựa trên thuộc tính (Property-based oracle)"
    ],
    "correct": 1
  },
  {
    "question": "Một bộ dự đoán dựa trên kinh nghiệm (heuristic oracle) sẽ xấp xỉ _____ chính xác của chương trình.",
    "options": [
      "Đầu vào (input)",
      "Đầu ra (output)",
      "Các bài kiểm thử (tests)"
    ],
    "correct": 1
  },
  {
    "question": "Các yêu cầu phần mềm được sử dụng như thế nào trong các bộ dự đoán dựa trên thuộc tính (property-based oracles)?",
    "options": [
      "Các yêu cầu được sử dụng để tạo ra các bài kiểm thử cho chương trình.",
      "Các thuộc tính mà bộ dự đoán kiểm tra được thể hiện trong các yêu cầu."
    ],
    "correct": 1
  },
  {
    "question": "Các kinh nghiệm (heuristics) được sử dụng như thế nào trong các bộ dự đoán dựa trên kinh nghiệm?",
    "options": [
      "Các kinh nghiệm cho phép xấp xỉ hành vi đúng đắn của chương trình.",
      "Các kinh nghiệm được sử dụng để tạo ra một bản xấp xỉ của hệ thống đang được kiểm thử."
    ],
    "correct": 0
  },
  {
    "question": "Các bộ dự đoán tự động (automated oracles) được đảm bảo là luôn chính xác.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Đột biến (Mutation) có thể là một vật thay thế hiệu quả cho các lỗi thực tế trong quá trình kiểm thử.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 1
  },
  {
    "question": "Khả năng tiếp cận (reachability) ảnh hưởng như thế nào đến hiệu quả của kiểm thử Đột biến?",
    "options": [
      "Các đột biến nằm trong các câu lệnh khó tiếp cận là không thể bị tiêu diệt.",
      "Các đột biến nằm trong các câu lệnh khó tiếp cận sẽ khó bị tiêu diệt hơn.",
      "Một đột biến không thể trở nên ngoan cố (stubborn) nếu câu lệnh đó dễ dàng tiếp cận."
    ],
    "correct": 1
  },
  {
    "question": "Khả năng quan sát (observability) ảnh hưởng như thế nào đến hiệu quả của kiểm thử Đột biến?",
    "options": [
      "Khả năng quan sát cải thiện điểm đột biến bằng cách tiêu diệt các đột biến dù đã được tiếp cận nhưng vẫn 'ngoan cố' (không biểu hiện lỗi ra ngoài).",
      "Khả năng quan sát cung cấp điểm đột biến tốt hơn khả năng tiếp cận.",
      "Các đầu ra có thể quan sát được có thể được sử dụng để xác định và tiêu diệt các đột biến khó tiếp cận."
    ],
    "correct": 0
  },
  {
    "question": "Độ bao phủ nhánh (Branch coverage) đặc biệt hiệu quả trong việc cải thiện kiểm thử đột biến thông qua khả năng quan sát mạnh mẽ.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Những điều nào sau đây là đúng về kiểm thử đột biến (mutation testing)?",
    "options": [
      "Với kiểm thử đột biến, bạn có thể biết mình đã bao phủ được bao nhiêu cấu trúc mã.",
      "Điểm đầy đủ của đột biến thể hiện chất lượng của các bài kiểm thử; điểm càng cao, chất lượng của các bài kiểm thử càng tốt.",
      "Một đột biến bị tiêu diệt khi tồn tại một hoặc nhiều bài kiểm thử có thể phân biệt được đầu ra của đột biến và chương trình gốc.",
      "Không giống như trong kiểm thử cấu trúc, độ bao phủ đột biến 100% có thể đảm bảo chương trình không có lỗi."
    ],
    "correct": [1, 2]
  },
  {
    "question": "Những điều nào sau đây là đúng về đột biến?",
    "options": [
      "Bạn chỉ tạo ra một đột biến duy nhất cho việc kiểm thử đột biến.",
      "Một toán tử đột biến đưa vào một thay đổi cú pháp cho chương trình để đột biến đó không thể biên dịch được.",
      "Một đột biến và chương trình gốc luôn khác nhau về mặt ngữ nghĩa (semantically).",
      "Một đột biến và chương trình gốc luôn khác nhau về mặt cú pháp (syntactically)."
    ],
    "correct": 3
  },
  {
    "question": "Jenny đã viết một chương trình nhỏ và tạo ra 100 trường hợp kiểm thử. Tất cả các bài kiểm thử đều vượt qua khi chạy trên chương trình gốc. Cô cũng tạo ra một bộ đột biến hoàn chỉnh để đo tính đầy đủ của bộ kiểm thử. Sau khi chạy tất cả các bài kiểm thử trên từng đột biến, Jenny thấy rằng với mỗi đột biến, ít nhất một trường hợp kiểm thử đã thất bại. Cô ấy nên làm gì tiếp theo?",
    "options": [
      "Cô ấy nên tạo thêm nhiều đột biến hơn.",
      "Cô ấy có thể ngừng viết các bài kiểm thử cho bộ đột biến này vì tất cả các đột biến đã bị tiêu diệt.",
      "Cô ấy nên viết thêm các trường hợp kiểm thử."
    ],
    "correct": 1
  },
  {
    "question": "Một đột biến (mutant) được coi là tương đương với chương trình đang được kiểm thử nếu...",
    "options": [
      "Cấu trúc của chúng tương tự nhau.",
      "Chúng có hành vi chức năng tương đương nhau đối với mọi đầu vào.",
      "Đột biến có thể được sử dụng thay thế cho chương trình mà không gây ra hậu quả tiêu cực."
    ],
    "correct": 1
  },
  {
    "question": "Một bộ dự đoán mạnh (strong oracle) có thể mang lại nhiều đột biến tương đương hơn so với một bộ dự đoán yếu.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Một bộ kiểm thử sẽ hiệu quả hơn trong việc phát hiện lỗi khi sử dụng một bộ dự đoán ____.",
    "options": [
      "Mạnh hơn (stronger)",
      "Yếu hơn (weaker)"
    ],
    "correct": 0
  },
  {
    "question": "Các bộ dự đoán yếu hơn có xu hướng dẫn đến điểm số đột biến (mutation scores) tốt hơn.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Trong kiểm thử phân vùng (Partition Testing), ý tưởng là chia nhỏ không gian ___ thành các tập con, sao cho một số trong số đó có ___ các giá trị giúp phát hiện lỗi.",
    "options": [
      "Đầu vào (input); mật độ cao (dense)",
      "Mã nguồn (code); mật độ thấp (sparse)",
      "Đầu ra (output); mật độ cao (dense)",
      "Kiểm thử (test); mật độ thấp (sparse)"
    ],
    "correct": 0
  },
  {
    "question": "Các phân vùng được xây dựng luôn phụ thuộc vào ______.",
    "options": [
      "Miền xác định (dependent)",
      "Độc lập với miền xác định (independent)"
    ],
    "correct": 0
  },
  {
    "question": "Trong thực tế, mọi lỗi chương trình đều có thể dẫn đến một phân vùng có mật độ lỗi cao.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Trong phân vùng gần đúng (Quasi-partitioning), các phân vùng chồng chéo nhau được phép tồn tại.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Một nguyên tắc tốt khi tạo các bài kiểm thử là chỉ tập trung vào việc kiểm tra các trường hợp thất bại.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Chúng ta có thể coi các trường hợp tràn bộ đệm (buffer overflow) là các trường hợp thành công.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 0
  },
  {
    "question": "Chúng ta chủ yếu thực hiện loại trường hợp nào khi sử dụng các bài kiểm thử được tạo ra trong Phát triển hướng hành vi (Behavior-Driven Development)?",
    "options": [
      "Các trường hợp thất bại (failure cases)",
      "Các trường hợp thành công (success cases)"
    ],
    "correct": 1
  },
  {
    "question": "Xét trường hợp chúng ta sử dụng kiểm thử phân vùng (Partition testing) để tạo các bài kiểm thử cho một tập hợp các yêu cầu nhất định. Để đạt được độ bao phủ yêu cầu, điều nào sau đây phải đúng?",
    "options": [
      "Các tổ hợp giá trị thuộc tính phải thực hiện các trường hợp biên.",
      "Các phân vùng có mật độ cao phải bao phủ các trường hợp thành công.",
      "Mỗi phân vùng cần bao phủ các trường hợp thành công và/hoặc thất bại."
    ],
    "correct": 2
  },
  {
    "question": "Xét trường hợp chúng ta sử dụng kiểm thử tổ hợp (Combinatorial testing) để tạo các bài kiểm thử cho một tập hợp các yêu cầu nhất định. Để đạt được độ bao phủ yêu cầu, điều nào sau đây phải đúng?",
    "options": [
      "Các tổ hợp giá trị thuộc tính cần bao phủ cả trường hợp thành công và thất bại.",
      "Các bài kiểm thử cần bao phủ mọi tổ hợp giá trị thuộc tính."
    ],
    "correct": 0
  },
  {
    "question": "Một yêu cầu tốt xác định đúng chức năng của hệ thống (system functionality).",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 1
  },
  {
    "question": "Các yêu cầu tốt nên có tính chất... (Chọn tất cả các đáp án đúng)",
    "options": [
      "Không mơ hồ (Unambiguous)",
      "Đầy đủ (Complete)",
      "Mơ hồ (Vague)",
      "Nhất quán (Consistent)",
      "Có thể sửa đổi (Modifiable)",
      "Bất biến/Cuối cùng (Final)",
      "Được ưu tiên (Prioritized)",
      "Có thể truy xuất (Traceable)",
      "Có thể kiểm chứng (Verifiable)",
      "Không thể định lượng (Unquantifiable)"
    ],
    "correct": [0, 1, 3, 4, 6, 7, 8]
  },
  {
    "question": "Nếu bạn không thể kiểm thử một yêu cầu...",
    "options": [
      "Hệ thống chắc chắn không dễ sử dụng.",
      "Các bài kiểm thử chắc chắn sai.",
      "Không có cách nào để biết bạn đã hoàn thành dự án thành công hay chưa.",
      "Khách hàng sẽ không bao giờ biết."
    ],
    "correct": 2
  },
  {
    "question": "Giả sử bạn muốn thực hiện phát triển hướng kiểm thử (TDD), ba điều nào bạn phải xác định để xây dựng các bài kiểm thử của mình?",
    "options": [
      "Đầu vào, Yêu cầu, Kết quả mong đợi",
      "Đầu vào, Quy trình kiểm thử, Kết quả mong đợi",
      "Đầu vào, Quy trình mong đợi, Kết quả thực tế",
      "Đầu vào, Quy trình, Kết quả thực tế"
    ],
    "correct": 1
  },
  {
    "question": "Đây có phải là một yêu cầu tốt không: 'Khi hiển thị thông tin người dùng, tất cả các thông tin liên quan về người dùng phải được hiển thị'?",
    "options": [
      "Có",
      "Không"
    ],
    "correct": 1
  },
  {
    "question": "Có một số từ mơ hồ và không rõ ràng sẽ tự động cảnh báo (red flag) khi đọc các yêu cầu. Một số từ đó là gì? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Cuối cùng (Eventually)",
      "Đôi khi (Sometimes)",
      "Tệ/Xấu (Bad)",
      "Rõ ràng (Clearly)",
      "Tại một thời điểm nào đó (At some point)",
      "Hiệu quả (Effective)",
      "Tương tự (Similar)",
      "Luôn luôn (Always)",
      "Không có phương án nào ở trên"
    ],
    "correct": [0, 1, 2, 3, 4, 5, 6]
  },
  {
    "question": "Các yêu cầu kém có thể được viết lại tốt hơn bằng cách viết các trường hợp kiểm thử trước.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 1
  },
  {
    "question": "Các bài kiểm thử bao gồm {Đầu vào, Quy trình kiểm thử và Kết quả mong đợi}. Thành phần nào trong ba thành phần này được sử dụng để tạo ra (induce) các điều kiện mà bạn đang muốn kiểm thử?",
    "options": [
      "Đầu ra",
      "Quy trình kiểm thử",
      "Đầu vào"
    ],
    "correct": 2
  },
  {
    "question": "Khi nói về Đầu vào, Quy trình kiểm thử và Đầu ra, thành phần nào được mô tả bởi câu sau: 'Bạn sẽ đo lường cái gì và như thế nào?'",
    "options": [
      "Quy trình kiểm thử",
      "Đầu vào",
      "Đầu ra"
    ],
    "correct": 0
  },
  {
    "question": "Khi nói về Đầu vào, Quy trình kiểm thử và Đầu ra, thành phần nào được mô tả bởi câu sau: 'Kết quả đo lường khi thực hiện đầu vào cho quy trình đó là gì?'",
    "options": [
      "Quy trình kiểm thử",
      "Đầu ra",
      "Đầu vào"
    ],
    "correct": 1
  },
  {
    "question": "Đột biến (Mutation) có thể là một vật thay thế hiệu quả cho các lỗi thực tế trong quá trình kiểm thử.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 1
  },
  {
    "question": "Khả năng tiếp cận (reachability) ảnh hưởng như thế nào đến hiệu quả của kiểm thử Đột biến?",
    "options": [
      "Các đột biến nằm trong các câu lệnh khó tiếp cận là không thể bị tiêu diệt.",
      "Các đột biến nằm trong các câu lệnh khó tiếp cận sẽ khó bị tiêu diệt hơn.",
      "Một đột biến không thể trở nên ngoan cố (stubborn) nếu câu lệnh đó dễ dàng tiếp cận."
    ],
    "correct": 1
  },
  {
    "question": "Khả năng quan sát (observability) ảnh hưởng như thế nào đến hiệu quả của kiểm thử Đột biến?",
    "options": [
      "Khả năng quan sát cải thiện điểm đột biến bằng cách tiêu diệt các đột biến dù đã được tiếp cận nhưng vẫn 'ngoan cố' (không biểu hiện lỗi ra ngoài).",
      "Khả năng quan sát cung cấp điểm đột biến tốt hơn khả năng tiếp cận.",
      "Các đầu ra có thể quan sát được có thể được sử dụng để xác định và tiêu diệt các đột biến khó tiếp cận."
    ],
    "correct": 0
  },
  {
    "question": "Độ bao phủ nhánh (Branch coverage) đặc biệt hiệu quả trong việc cải thiện kiểm thử đột biến thông qua khả năng quan sát mạnh mẽ.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Tại sao User Stories lại quan trọng trong kiểm thử phần mềm?",
    "options": [
      "Chúng cung cấp một cách để phát triển các yêu cầu phần mềm bằng cách xem xét hệ thống từ góc độ của người dùng.",
      "Chúng cho phép người dùng của hệ thống cung cấp các phản hồi quan trọng liên quan đến việc kiểm thử hệ thống."
    ],
    "correct": 0
  },
  {
    "question": "User Stories chủ yếu được diễn đạt bằng quy tắc nào?",
    "options": [
      "Với tư cách là <vai trò>, tôi muốn <tính năng> để <lý do> (As a <role>, I want <feature> so that <reason>)",
      "Khi tôi <hành động>, tôi mong đợi <kết quả> (When I <action>, I expect <result>)",
      "Các <vai trò> không được phép <tính năng> vì <lý do> (The <role> should not be able to <feature> because <reason>)"
    ],
    "correct": 0
  },
  {
    "question": "Tại sao vai trò (roles) được sử dụng trong User Stories?",
    "options": [
      "Để xác định vai trò của từng kỹ sư tham gia vào quá trình phát triển hệ thống.",
      "Để xác định vai trò của từng thành phần trong hệ thống đang được kiểm thử.",
      "Để xác định tất cả các loại người dùng khác nhau trong sản phẩm cuối cùng."
    ],
    "correct": 2
  },
  {
    "question": "Tại sao các lý do (reasons) lại hữu ích trong User Stories? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Để cải thiện việc kiểm thử bằng cách cung cấp ngữ cảnh.",
      "Để ưu tiên các tính năng.",
      "Để phát hiện các chức năng bị trùng lặp giữa các tính năng.",
      "Để thuyết phục kỹ sư trưởng về việc triển khai một tính năng.",
      "Để biện minh cho tầm quan trọng của việc kiểm thử một tính năng cụ thể."
    ],
    "correct": [0, 1, 2, 4]
  },
  {
    "question": "Epics khác với User Stories chi tiết vì...",
    "options": [
      "Chúng liên quan đến một câu chuyện áp dụng cho một phạm vi rộng người dùng.",
      "Chúng rất chi tiết trong việc mô tả cách một tính năng nên được triển khai cho một phạm vi rộng người dùng."
    ],
    "correct": 0
  },
  {
    "question": "Ngôn ngữ Gherkin là một cách hiệu quả để...",
    "options": [
      "Diễn đạt một User Story theo cách có thể được sử dụng để tạo ra các bài kiểm thử.",
      "Diễn đạt một User Story theo cách có thể được sử dụng để tạo ra bản triển khai (code) của tính năng mong muốn."
    ],
    "correct": 0
  },
  {
    "question": "Phát triển hướng hành vi (Behavior-driven development - BDD) đặt người dùng vào trung tâm của chu kỳ kiểm thử.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Yêu cầu sau đây có thể kiểm thử được đối với một máy chủ web không? 'Khi các yêu cầu đồng thời (concurrent requests) đến với số lượng lớn, máy chủ sẽ cấp phát thêm luồng (threads) và xử lý tất cả các yêu cầu thành công.' (Chọn tất cả các đáp án đúng)",
    "options": [
      "Có thể kiểm thử như hiện tại.",
      "Không thể kiểm thử. Không có chỉ dẫn về số lượng luồng sẽ được cấp phát.",
      "Không thể kiểm thử. 'Thành công' có nghĩa là gì?"
    ],
    "correct": [1, 2]
  },
  {
    "question": "Yêu cầu sau đây có thể kiểm thử được đối với một trình soạn thảo văn bản trên nền web không? 'Khi ứng dụng mất kết nối mạng trên một máy tính có đủ dung lượng hệ thống tệp cục bộ, nó sẽ lưu một bản nháp của tài liệu hiện tại vào bộ nhớ cục bộ trong thư mục gốc của người dùng.' (Chọn tất cả các đáp án đúng)",
    "options": [
      "Có thể kiểm thử như hiện tại.",
      "Không thể kiểm thử. Không có chỉ dẫn về vị trí cụ thể trên hệ thống tệp mà tài liệu sẽ được lưu trữ.",
      "Không thể kiểm thử. Không có chỉ dẫn về việc mất bao lâu để phát hiện tình trạng mất kết nối."
    ],
    "correct": [1, 2]
  },
  {
    "question": "Yêu cầu sau đây có thể kiểm thử được đối với một máy chủ web không? 'Nếu máy chủ web bị kẻ tấn công xâm nhập, nó có thể được chia thành nhiều tiến trình với các đặc quyền khác nhau để ngăn chặn cuộc tấn công lan rộng.' (Chọn tất cả các đáp án đúng)",
    "options": [
      "Có thể kiểm thử như hiện tại.",
      "Không thể kiểm thử vì chúng ta không biết hệ thống được phân chia như thế nào.",
      "Không thể kiểm thử vì không rõ các đặc quyền được cấp phát như thế nào hoặc làm thế nào chúng ngăn chặn cuộc tấn công lan rộng.",
      "Không thể kiểm thử vì bạn không thể ngăn chặn kẻ tấn công đột nhập vào hệ thống của mình."
    ],
    "correct": [1, 2]
  },
  {
    "question": "Yêu cầu sau đây có thể kiểm thử được đối với một hệ thống an ninh cửa không? 'Với một cánh cửa đang khóa, khi người dùng đưa một thẻ xác thực không hợp lệ vào cảm biến cửa, cửa sẽ vẫn khóa và một âm thanh có thể nghe thấy sẽ được phát ra từ loa báo (piezo buzzer).' (Chọn tất cả các đáp án đúng)",
    "options": [
      "Có thể kiểm thử như hiện tại.",
      "Không thể kiểm thử vì chúng ta không nêu rõ âm thanh đó lớn như thế nào.",
      "Không thể kiểm thử vì yêu cầu không mô tả điều gì xảy ra nếu cửa đang mở."
    ],
    "correct": 0
  },
  {
    "question": "Điền vào chỗ trống: Sử dụng ______, _______, và ______ để giúp xác định lại (redefine) các yêu cầu.",
    "options": [
      "Đầu vào, Quy trình kiểm thử, Kết quả mong đợi",
      "Các trường hợp kiểm thử, Yêu cầu, Quy trình kiểm thử",
      "Kết quả mong đợi, Lẽ thường (Common sense), Đầu vào"
    ],
    "correct": 0
  },
  {
    "question": "Việc phát triển các trường hợp kiểm thử cho các yêu cầu có thể...",
    "options": [
      "tăng khả năng tránh lỗi (fault avoidance).",
      "giảm khả năng chịu lỗi (fault tolerance).",
      "tạo ra các yêu cầu tồi.",
      "giúp viết các yêu cầu tốt hơn."
    ],
    "correct": 3
  },
  {
    "question": "Bạn nên phân tích các yêu cầu của mình về tính khả thử (testability).",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 1
  },
  {
    "question": "Đôi khi trong các yêu cầu, bạn phải sử dụng các 'vật giữ chỗ' (placeholders): các từ/khái niệm mà bạn giả định là đã được định nghĩa ở một nơi khác. Cho yêu cầu: 'Khi nhiệt độ đạt đến ngưỡng, một thông báo báo động sẽ được đưa ra trong vòng 2 giây', các vật giữ chỗ là gì? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Ngưỡng (Threshold)",
      "Báo động (Alarm)",
      "Giây (Seconds)",
      "Nhiệt độ (Temperature)"
    ],
    "correct": [0, 1]
  },
  {
    "question": "Khi tất cả các bài kiểm thử trong một bộ kiểm thử đều vượt qua ngay cả khi phần mềm chứa lỗi, đây là một ví dụ về xác minh ______ (verification).",
    "options": [
      "Xác minh bi quan (Pessimistic verification)",
      "Xác minh lạc quan (Optimistic verification)"
    ],
    "correct": 1
  },
  {
    "question": "Tại sao việc chuẩn hóa hoàn hảo (perfect validation) lại không khả thi trong thực tế?",
    "options": [
      "Do bài toán dừng (The halting problem); nó là một bài toán không thể quyết định (undecidable).",
      "Nó không hề bất khả thi. Việc chuẩn hóa hoàn hảo vẫn được thực hiện thường xuyên với các hệ thống quan trọng đòi hỏi độ an toàn cao."
    ],
    "correct": 0
  },
  {
    "question": "Chọn tất cả các đáp án đúng: Phân tích tĩnh (Static analysis) xác định xem một chương trình có được định hình tốt (well formed) hay không. Điều này bao gồm việc kiểm tra các lỗi nào?",
    "options": [
      "Ngoại lệ con trỏ rỗng (Null pointer exceptions)",
      "Ngoại lệ chia cho không (Divide by zero exceptions)",
      "Tràn số nguyên (Integer overflow)",
      "Kiểm thử độ bao phủ (Coverage testing)"
    ],
    "correct": [0, 1, 2]
  },
  {
    "question": "Việc thực thi kiểm thử tự động (Automated execution) là quan trọng để làm cho việc kiểm thử phần mềm đạt hiệu quả.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Điền vào chỗ trống. Để làm cho việc kiểm thử trở nên nghiêm ngặt, chúng ta cần tự động hóa việc ______________ và _______________ các bài kiểm thử.",
    "options": [
      "Thực thi (Execution); Độ nghiêm ngặt (Rigor)",
      "Tạo tự động (Generation); Thực thi (Execution)",
      "Thực thi (Execution); Tính hiệu quả (Effective)"
    ],
    "correct": 1
  },
  {
    "question": "Tạo bài kiểm thử tự động (Automated Test Generation) yêu cầu một loại bộ dự đoán (oracle) để xác định xem hành vi đúng đắn của chương trình là gì.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 1
  },
  {
    "question": "Các công cụ phân tích tĩnh (Static analysis) và kiểm tra mô hình (model checking) thường có hai đầu vào. Đó là:",
    "options": [
      "Phát biểu này sai. Các công cụ phân tích tĩnh chỉ yêu cầu mã nguồn (một đầu vào duy nhất) để thực hiện phân tích.",
      "Bộ dự đoán (Oracle) và Mã nguồn (Source code)",
      "Phát biểu này sai. Các công cụ phân tích tĩnh chỉ yêu cầu một bộ dự đoán (một đầu vào duy nhất) để thực hiện phân tích."
    ],
    "correct": 1
  },
  {
    "question": "Đầu ra của các công cụ kiểm tra mô hình (model checking) bao gồm:",
    "options": [
      "Số liệu đo lường độ bao phủ (Coverage metric)",
      "Một trường hợp kiểm thử (kịch bản phản ví dụ) trong trường hợp một thuộc tính không được thỏa mãn.",
      "Bộ dự đoán hiển thị thuộc tính nào là phù hợp nhất.",
      "Chỉ thị về các thuộc tính đã vượt qua."
    ],
    "correct": 1
  },
  {
    "question": "Phân tích tĩnh có thể tìm thấy các lỗi về tính định hình tốt (well-formedness errors) trong các chương trình. Hãy chọn các ví dụ về lỗi định hình tốt.",
    "options": [
      "Lỗ hổng bảo mật (Security Vulnerabilities)",
      "Rò rỉ tài nguyên (Resource Leaks)",
      "Tình trạng tranh chấp (Race Conditions)",
      "Lỗi bộ nhớ (Memory Errors)",
      "Vi phạm quy tắc sử dụng API hoặc Framework",
      "Ngoại lệ không được bắt (Uncaught exceptions)",
      "Tất cả các phương án trên"
    ],
    "correct": 6
  },
  {
    "question": "Chọn tất cả các phát biểu đúng liên quan đến trừu tượng hóa toàn vẹn (sound abstraction).",
    "options": [
      "Một trừu tượng hóa toàn vẹn bao gồm tất cả các trạng thái có thể tiếp cận của chương trình gốc.",
      "Một trừu tượng hóa toàn vẹn bao gồm tất cả các hành vi của chương trình gốc.",
      "Một trừu tượng hóa toàn vẹn có thể dẫn đến một số lượng lớn các cảnh báo giả (false alarms - các lỗi không thể xảy ra trong chương trình gốc).",
      "Một trừu tượng hóa toàn vẹn thường không được sử dụng trong các công cụ thực tế.",
      "Một trừu tượng hóa toàn vẹn là không thể thực hiện được."
    ],
    "correct": [0, 1, 2]
  },
  {
    "question": "Kiểm tra mô hình (Model checking) kiểm tra tính định hình tốt, nhưng nó không thể xác định xem chương trình có thực hiện đúng việc xét về mặt hành vi chức năng hay không.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 0
  },
  {
    "question": "Vì ngay cả các chương trình nhỏ cũng có hàng nghìn tỷ trạng thái, làm thế nào chúng ta có thể chứng minh các thuộc tính hoặc yêu cầu của chương trình?",
    "options": [
      "Biểu diễn các trạng thái hoặc đường dẫn của hệ thống dưới dạng một đồ thị lớn.",
      "Biểu diễn các trạng thái hoặc đường dẫn của hệ thống một cách tượng trưng (symbolically) dưới dạng các công thức logic Boolean.",
      "Máy tính hiện nay rất nhanh và có thể kiểm tra hàng nghìn tỷ trạng thái khá dễ dàng."
    ],
    "correct": 1
  },
  {
    "question": "Câu hỏi được đặt ra bởi các bộ giải SMT/SAT (SMT/SAT solvers) là: 'Cho một công thức Boolean, liệu có bất kỳ cách gán giá trị nào cho các biến để công thức đó đúng hay không?'",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 1
  },
  {
    "question": "Lựa chọn nào sau đây hoàn thành chính xác câu sau?\n\nSMT (Satisfiability Modulo Theories) bổ sung vào các bộ giải SAT các 'lý thuyết' (theories) bổ sung để có thể giải quyết các bài toán về ____________.",
    "options": [
      "Mảng (Arrays)",
      "Số học số nguyên tuyến tính (Linear integer arithmetic)",
      "Số học số thực (Real arithmetic)",
      "Tất cả các phương án trên"
    ],
    "correct": 3
  },
  {
    "question": "Chọn câu trả lời đúng nhất. Chạy kiểm thử tự động mà không có Bộ dự đoán (Oracle)...",
    "options": [
      "là cách tốt nhất để xem chương trình của bạn có hoạt động bình thường hay không.",
      "là một cách tốt để biết liệu chương trình của bạn có bị sập (crash) hay không.",
      "không cung cấp phản hồi về việc liệu chương trình của bạn có đang hoạt động chính xác hay không."
    ],
    "correct": 2
  },
  {
    "question": "Cho yêu cầu bằng ngôn ngữ tự nhiên: 'Nếu chế độ là COOKING, thì cửa phải CLOSED,' mã hóa nào sau đây trong Java là chính xác cho yêu cầu đó? (Chọn tất cả các đáp án đúng)",
    "options": [
      "assert( !(mode == COOKING) && door_closed);",
      "assert((mode == COOKING) && door_closed);",
      "assert( (mode == COOKING) || door_closed);",
      "assert( !(mode == COOKING) || door_closed);",
      "không có phương án nào ở trên"
    ],
    "correct": 3
  },
  {
    "question": "Các yêu cầu bằng ngôn ngữ tự nhiên có thể kiểm thử được thì luôn luôn có thể được hình thức hóa và sử dụng làm Bộ dự đoán (Oracle).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Chọn câu trả lời đúng nhất. Kiểm thử đơn vị (Unit tests) là một cách để kiểm thử xem hệ thống hoạt động như thế nào...",
    "options": [
      "Dưới áp lực tải cao (Under stress)",
      "Ở phạm vi nhỏ (một lớp hoặc một hàm)",
      "Trong trường hợp không có Bộ dự đoán (Oracle)"
    ],
    "correct": 1
  },
  {
    "question": "Khi tổng quát hóa các bài kiểm thử đơn vị có tham số (parameterized unit tests), việc tổng quát hóa diễn ra càng nhiều thì Bộ dự đoán (Oracle) càng trở nên phức tạp.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Bộ dự đoán (Oracle) không bao giờ có thể chứa sai sót.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Tại sao việc tìm kiếm sự cân bằng giữa tính tổng quát và độ phức tạp lại quan trọng khi viết Bộ dự đoán sử dụng các bài kiểm thử đơn vị có tham số?",
    "options": [
      "Nếu có quá nhiều sự tổng quát hóa diễn ra, Bộ dự đoán sẽ bắt đầu trở nên phức tạp ngang ngửa với chương trình gốc.",
      "Việc tìm kiếm sự cân bằng này không quan trọng. Bộ dự đoán càng được tổng quát hóa thì càng tốt trong việc tìm lỗi của chương trình đang kiểm thử.",
      "Có thể mất quá nhiều thời gian để tổng quát hóa các bài kiểm thử đơn vị nhằm tạo ra một Bộ dự đoán hoàn hảo."
    ],
    "correct": [0,2]
  },
  {
    "question": "Các công cụ phân tích tự động cố gắng tìm kiếm bất kỳ hành vi vi phạm nào có thể xảy ra đối với một thuộc tính.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Các công cụ phân tích tự động sẽ không bao giờ cố gắng tìm kiếm các hành vi vi phạm thuộc tính nằm ngoài phạm vi hoạt động (operating envelope) của hệ thống.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Một từ khác để chỉ các giả định về môi trường (environmental assumptions) là _______",
    "options": [
      "Phân tích tự động (Automated analysis)",
      "Bất biến (Invariant)",
      "Các trường dữ liệu (Data fields)"
    ],
    "correct": 1
  },
  {
    "question": "Nói một cách tổng quát, các ràng buộc cần thiết cho việc thực thi chính xác của bài kiểm thử phải được thêm vào. Điều này bao gồm:",
    "options": [
      "Các hạn chế không rỗng (Non-null restrictions)",
      "Các hạn chế về phạm vi số (Numeric range restrictions)",
      "Các ràng buộc trên các đối tượng duy nhất (singletons) hoặc các trường dữ liệu",
      "Tính định hình tốt của các cấu trúc dữ liệu (Well-formedness on data structures)",
      "Tất cả các phương án trên"
    ],
    "correct": 4
  },
  {
    "question": "Nếu chúng ta đặt ràng buộc quá mức (overconstrain) cho các giả định, hậu quả có thể là gì? Tại sao chúng ta phải cẩn thận với các giả định về môi trường?",
    "options": [
      "Chúng ta có thể bỏ sót các trường hợp kiểm thử thực tế và có sự tự tin vô căn cứ vào hệ thống.",
      "Chúng ta có thể mất quá nhiều thời gian cho việc kiểm thử.",
      "Hoàn toàn không có bất kỳ hậu quả tiêu cực nào của việc này."
    ],
    "correct": 0
  },
  {
    "question": "___________ thì nhanh, dễ triển khai và không đòi hỏi bất kỳ thông tin nào về hệ thống.",
    "options": [
      "Kiểm thử ngẫu nhiên (Random testing)",
      "Kiểm thử ngẫu nhiên thích ứng (Adaptive random testing)",
      "Thực thi tượng trưng (Symbolic execution)"
    ],
    "correct": 0
  },
  {
    "question": "Một thuật toán tìm kiếm cục bộ siêu tối ưu (metaheuristic local search) luôn rất nhanh và hiệu quả bất kể bạn đưa ra dự đoán ban đầu (initial guess) như thế nào.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Một phần tử lân cận (neighbor) là...",
    "options": [
      ": giá trị cực đại cục bộ (local maxima value)",
      ": thuật toán siêu tối ưu (metaheuristic)",
      ": các bài kiểm thử được tạo ra bằng cách thực hiện một thay đổi nhỏ đối với bài kiểm thử hiện tại."
    ],
    "correct": 2
  },
  {
    "question": "Một thuật toán được sử dụng trong tìm kiếm cục bộ được gọi là Leo núi (Hill Climbing). Với thuật toán Leo núi, vấn đề bị kẹt ở cực đại cục bộ (local maxima) sẽ được tránh khỏi.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 0
  },
  {
    "question": "Một thuật toán được sử dụng trong tìm kiếm cục bộ được gọi là Luyện kim giả lập (Simulated Annealing). Với thuật toán Luyện kim giả lập, vấn đề bị kẹt ở cực đại cục bộ KHÔNG được tránh khỏi.",
    "options": [
      "Sai",
      "Đúng"
    ],
    "correct": 0
  },
  {
    "question": "Tìm kiếm toàn cục (Global Search) sử dụng một chiến lược dựa trên các quá trình tự nhiên.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Chúng ta cần tìm một cách để xem mình đã tiến gần đến giải pháp lý tưởng như thế nào. Để làm điều này, chúng ta sử dụng các hàm thích nghi (fitness functions).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Hàm thích nghi (Fitness function) cần phải:",
    "options": [
      "Tính toán nhanh (Fast to calculate)",
      "Hội tụ nhanh (Quick to converge)",
      "Tất cả các phương án trên"
    ],
    "correct": 2
  },
  {
    "question": "Mục tiêu trong kiểm thử bảo mật (security testing) là gì?",
    "options": [
      "Tìm càng nhiều lỗi (bugs) càng tốt.",
      "Đạt được sự tin cậy chấp nhận được rằng hệ thống có khả năng phục hồi và chống lại các cuộc tấn công (resilient to attack)."
    ],
    "correct": 1
  },
  {
    "question": "Những phát biểu nào sau đây là chính xác? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Tốt nhất là thực hiện kiểm thử fuzz (fuzz testing) một cách thủ công.",
      "Ngay cả với các chiến lược kiểm thử bảo mật hiện đại cũng không thể đưa ra những tuyên bố chắc chắn tuyệt đối về tính bảo mật.",
      "Mặc dù fuzz testing không thể cung cấp sự tin tưởng hoàn toàn rằng phần mềm an toàn, nhưng nó là một phần không thể thiếu trong phát triển phần mềm hiện đại.",
      "Kiểm thử fuzz (Fuzz testing) có nghĩa là chạy chương trình trên nhiều đầu vào bình thường để tìm kiếm các lỗ hổng có thể khai thác."
    ],
    "correct": [1, 2]
  },
  {
    "question": "Những loại thất bại (failures) nào do kiểm thử fuzz tạo ra chỉ ra các lỗ hổng bảo mật? (Chọn 2 đáp án đúng)",
    "options": [
      "Lỗi chương trình (program errors)",
      "Vi phạm câu lệnh khẳng định (assertion violations)",
      "Sập hệ thống (crashes)",
      "Leo thang đặc quyền (privilege escalation)"
    ],
    "correct": [2, 3]
  },
  {
    "question": "Điều nào sau đây có thể gây ra một cuộc tấn công từ chối dịch vụ (DoS)? (Chọn 2 đáp án đúng)",
    "options": [
      "Tràn bộ đệm (buffer overflow)",
      "Không giải phóng tài nguyên (non-release of resources)",
      "Tình trạng bế tắc (deadlock)",
      "Sử dụng vùng nhớ không hợp lệ (use of invalid memory)"
    ],
    "correct": [1, 2]
  },
  {
    "question": "Điều đầu tiên cần làm trong kiểm thử bảo mật bằng phương pháp fuzzing là gì?",
    "options": [
      "Phân tích cấu trúc chương trình và các thành phần phụ thuộc của nó vào các gói không đáng tin cậy.",
      "Phân tích các dữ liệu đầu vào (inputs) để bắt các hành vi khai thác có thể xảy ra trên giao diện hiển thị cho người dùng."
    ],
    "correct": 1
  },
  {
    "question": "Chọn 2 phát biểu đúng:",
    "options": [
      "Dumb fuzzers chỉ thực hiện các thay đổi ngẫu nhiên đối với đầu vào của chương trình mà không có bất kỳ kiến thức nào về chương trình.",
      "Smart fuzzing đòi hỏi phải có một bộ phân tích cú pháp (parser) và mô hình cho định dạng đầu vào của chương trình.",
      "White-box fuzzing chạy kiểm thử fuzz ngẫu nhiên trên các chương trình đã được chèn mã giám sát (instrumented programs).",
      "Mục tiêu của việc kết hợp white-box fuzzing với việc chèn mã giám sát (instrumentation) là tìm kiếm lỗ hổng trong các đường dẫn chương trình được thực thi dưới các trường hợp kiểm thử hiện tại.",
      "Mục đích của việc sử dụng một mô hình tường minh về các kiểu đầu vào bởi smart fuzzers là tạo ra các đầu vào có thể vượt qua các bộ phát hiện lỗi cú pháp trong chương trình để đi sâu vào logic bên trong."
    ],
    "correct": [1, 4]
  },
  {
    "question": "Những phát biểu nào sau đây là đúng về kiểm thử fuzz phân tích ngẫu nhiên (dumb analytical fuzzing)? (Chọn 2 đáp án đúng)",
    "options": [
      "Nó không cần xây dựng một mô hình về các đầu vào của chương trình.",
      "Nó là một dạng kiểm thử ngẫu nhiên.",
      "Nó sử dụng một biểu diễn tượng trưng (symbolic representation) của đường dẫn và cấu trúc chương trình."
    ],
    "correct": [0, 2]
  },
  {
    "question": "Làm thế nào chúng ta có thể thực hiện fuzzing hiệu quả hơn? (Chọn 2 đáp án đúng)",
    "options": [
      "Tăng thời gian chạy fuzzing.",
      "Làm cho bộ fuzzer thông minh hơn bằng cách thu thập thêm nhiều kiến thức về hệ thống.",
      "Sử dụng song song tất cả các loại fuzzer với các kỹ thuật khác nhau.",
      "Tránh các kỹ thuật fuzzing ngẫu nhiên đơn giản (dumb techniques) như tạo test ngẫu nhiên."
    ],
    "correct": [0, 1, 2]
  },
  {
    "question": "Phát biểu nào sau đây là đúng?",
    "options": [
      "Tất cả các thất bại được ghi nhận trong quá trình kiểm thử fuzz đều quan trọng như nhau cần phân tích vì mục tiêu là đạt được sự tin cậy cao vào bảo mật chương trình.",
      "Việc phân loại kết quả kiểm thử fuzz là rất quan trọng để xác định mức độ nghiêm trọng của thất bại và nhận diện những lỗi thực sự có khả năng khai thác tấn công."
    ],
    "correct": 1
  },
  {
    "question": "Mục tiêu của kiểm thử hồi quy (regression testing) là gì?",
    "options": [
      "Để kiểm tra xem chức năng mới có hoạt động chính xác không",
      "Để xác định xem phần mềm đã phát triển trước đó có hoạt động theo cùng một cách sau khi sửa đổi hay không",
      "Để bổ sung vào các bộ kiểm thử nhằm kiểm thử nghiêm ngặt hơn phần mềm hiện có",
      "Để xác định xem một lỗi trong phiên bản trước của phần mềm đã được khắc phục hay chưa",
      "Đáp án thứ nhất và thứ hai đều đúng",
      "Tất cả các phương án trên"
    ],
    "correct": 1
  },
  {
    "question": "Tại sao kiểm thử hồi quy lại rất phù hợp cho việc xác minh tự động (automated verification)?",
    "options": [
      "Việc tạo ra nhiều bài kiểm thử bằng cách sử dụng xác minh tự động là rất đơn giản.",
      "Chi phí tạo ra các bài kiểm thử thấp nên việc bỏ các bài kiểm thử đi không hề tốn kém.",
      "Một bộ dự đoán (oracle) tốt để xác định sự thành công của các bài kiểm thử tự động luôn có sẵn."
    ],
    "correct": 2
  },
  {
    "question": "Mục tiêu của kiểm thử fuzz (fuzz testing) là gì? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Để kiểm tra xem phần mềm có hiệu năng thời gian thực tốt hay không",
      "Để kiểm tra xem phần mềm có mạnh mẽ/ổn định không (không bị sập/crash)",
      "Để kiểm tra xem phần mềm có các lỗi bảo mật hay không",
      "Để kiểm tra xem phần mềm có đáp ứng các yêu cầu chức năng của nó hay không"
    ],
    "correct": [1, 2]
  },
  {
    "question": "Kiểm thử fuzz dựa trên ngữ pháp thông minh (smart grammar-based fuzz testing) khác với kiểm thử ngẫu nhiên thích ứng (adaptive random testing) như thế nào? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Fuzzing dựa trên ngữ pháp có nhiều kiến thức hơn về các đầu vào hợp lệ",
      "Chúng không có sự khác biệt đáng kể",
      "Kiểm thử ngẫu nhiên thích ứng sử dụng các số liệu phức tạp hơn để tạo ra bài kiểm thử tiếp theo",
      "Fuzzing dựa trên ngữ pháp có nhiều khả năng tạo ra các đầu vào dị dạng nhưng 'gần như chính xác' hơn so với kiểm thử ngẫu nhiên thích ứng"
    ],
    "correct": [0, 3]
  },
  {
    "question": "Kiểm thử bảo mật Fuzz (Fuzz security testing) chỉ quan tâm đến việc tạo ra các đầu vào bị dị dạng (malformed inputs).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Nguồn nỗ lực chính của con người đối với fuzzing dựa trên ngữ pháp (grammar-based fuzzing) là gì?",
    "options": [
      "Viết các bài kiểm thử",
      "Tự tay chèn mã giám sát vào chương trình (manually instrumenting)",
      "Tạo cấu trúc ngữ pháp (grammar) để bộ fuzzer sử dụng",
      "Xác định loại lỗi nào đã được bộc lộ bởi bài kiểm thử"
    ],
    "correct": 2
  },
  {
    "question": "Những bước nào có thể được sử dụng để cải thiện hiệu suất fuzzing? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Định hướng các đầu vào (biasing inputs) cho kiểm thử ngẫu nhiên",
      "Chạy đồng thời nhiều bộ fuzzer (concurrently)",
      "Chạy mỗi bộ fuzzer trong khoảng thời gian dài hơn",
      "Bổ sung thông tin ngữ pháp vào bộ fuzzer",
      "Tất cả các phương án trên"
    ],
    "correct": 4
  },
  {
    "question": "Các bộ fuzzer là công cụ xác minh lạc quan (optimistic) hay bi quan (pessimistic)?",
    "options": [
      "Lạc quan (Optimistic) - Chúng có thể bỏ sót các vấn đề bảo mật đang tồn tại trong chương trình",
      "Bi quan (Pessimistic) - Chúng chỉ tìm thấy các lỗi sập nguồn hoặc lỗ hổng bảo mật."
    ],
    "correct": 0
  },
  {
    "question": "Điều nào sau đây có thể được thực hiện với giám sát thời gian chạy (runtime monitoring)? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Đo lường xem hiệu năng thời gian thực của ứng dụng có đầy đủ hay không",
      "Giám sát xem ứng dụng có đáp ứng các yêu cầu chức năng của nó hay không",
      "Xác định xem chương trình có chính xác hoàn toàn (correct) hay không",
      "Đo lường xem môi trường có khớp với các giả định của chương trình hay không",
      "Xác định xem chương trình có chắc chắn sẽ dừng (terminate) hay không"
    ],
    "correct": [0, 1, 3]
  },
  {
    "question": "Hệ thống 'an toàn khi lỗi' (fail-safe system) là gì?",
    "options": [
      "Hệ thống mà trong đó phần mềm hoặc hệ thống vật lý có thể bị lỗi nhưng vẫn để lại hệ thống ở một trạng thái an toàn.",
      "Hệ thống mà trong đó phần mềm làm cho hệ thống trở nên an toàn trong trường hợp xảy ra các lỗi vật lý.",
      "Hệ thống có tính dự phòng cao để bất kỳ một lỗi vật lý hoặc máy tính đơn lẻ nào cũng không làm cho toàn bộ hệ thống bị hỏng."
    ],
    "correct": 0
  },
  {
    "question": "Nếu phần mềm không phải là loại an toàn khi lỗi (not fail-safe), liệu có lý do chính đáng nào để thực hiện giám sát thời gian chạy (runtime monitoring) không? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Không - trong trường hợp này, dù sao hệ thống cũng sẽ thất bại.",
      "Có - chúng ta có thể giao lại quyền điều khiển cho người vận hành để họ có thể kiểm soát quy trình một cách thủ công.",
      "Có - chúng ta có thể cung cấp các cảnh báo cho người vận hành rằng phần mềm có thể đang hoạt động không chính xác.",
      "Có - kỹ thuật này cho phép phần mềm tự khôi phục từ các lỗi và tiếp tục chạy hoạt động bình thường.",
      "Không - nó làm chậm chương trình đi quá nhiều."
    ],
    "correct": [1, 2]
  },
  {
    "question": "Kiểm thử tự động (Automated testing) nên thay thế hoàn toàn việc viết các trường hợp kiểm thử bằng tay (by hand).",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Kỹ thuật xác minh tự động hữu ích nhất mà chúng ta đã nghiên cứu là gì?",
    "options": [
      "Kiểm thử ngẫu nhiên (Random testing)",
      "Kiểm thử ngẫu nhiên thích ứng (Adaptive random testing)",
      "Kiểm thử Fuzz (Fuzz testing)",
      "Kiểm thử dựa trên tìm kiếm (Search-based testing)",
      "Phân tích tĩnh (Static analysis)",
      "Nó còn tùy thuộc. Kỹ thuật nào hữu ích nhất phụ thuộc vào mục tiêu cụ thể của việc kiểm thử."
    ],
    "correct": 5
  },
  {
    "question": "Không có kỹ thuật xác minh tự động nào có thể mở rộng quy mô (scale) áp dụng cho các chương trình thực tế.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Chỉ cần biết một kỹ thuật kiểm thử là đủ để trở thành một kỹ sư kiểm thử hiệu quả.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 1
  },
  {
    "question": "Các vấn đề chính của kiểm thử ngẫu nhiên (random testing) là gì? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Nó không thể mở rộng quy mô cho các chương trình thực tế",
      "Nó không thể khám phá các đường dẫn phụ thuộc vào các đầu vào rất cụ thể khi có một không gian đầu vào lớn",
      "Phân phối đầu vào trong thực tế có thể không khớp với phân phối ngẫu nhiên được sử dụng trong kiểm thử, do đó khả năng thất bại có thể lớn hơn dự kiến khi sử dụng thực tế.",
      "Mất rất nhiều thời gian để tạo ra từng bài kiểm thử đơn lẻ"
    ],
    "correct": [1, 2]
  },
  {
    "question": "Các vấn đề chính của thực thi tượng trưng (symbolic execution) là gì? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Xử lý các đường dẫn chương trình có chứa toán học phi tuyến (non-linear math)",
      "Xử lý các thao tác chuỗi phức tạp (complex string operations)",
      "Chọn giá trị chính xác để giải các ràng buộc tuyến tính phức tạp",
      "Có quá nhiều đường dẫn (path explosion) trong các chương trình lớn",
      "Các thành phần phụ thuộc của chương trình (như cơ sở dữ liệu) mà bộ giải tượng trưng không biết trước"
    ],
    "correct": [0, 1, 3, 4]
  },
  {
    "question": "Kiểm thử tự động thành công luôn luôn đòi hỏi điều gì?",
    "options": [
      "Một bộ dự đoán có thể kiểm tra được bằng máy (machine-checkable oracle) để xác định sự thành công hay thất bại.",
      "Quyền truy cập vào các thành phần nội bộ của chương trình để giám sát trạng thái chương trình.",
      "Quyền truy cập vào các máy tính thực sự nhanh để tạo ra các bài kiểm thử.",
      "Tất cả các phương án trên"
    ],
    "correct": 0
  },
  {
    "question": "Chọn những phát biểu đúng trong các câu sau đây: (Chọn tất cả các đáp án đúng)",
    "options": [
      "Tự động hóa kiểm thử (Test automation) không được công nhận là một kỹ năng hữu ích trong ngành công nghiệp phần mềm.",
      "Các kiểm thử viên (Testers) cũng được kỳ vọng sẽ phát triển phần mềm (viết code) trong tương lai.",
      "Theo một cuộc khảo sát gần đây, hơn 1/2 các doanh nghiệp đang sử dụng các công cụ tạo bài kiểm thử tự động.",
      "Chúng ta đã hoàn toàn hiểu rõ và làm chủ cách kiểm thử các phần mềm học máy như mạng thần kinh nhân tạo (neural nets).",
      "Agile và DevOps là những kỹ năng quan trọng đối với các kỹ sư kiểm thử."
    ],
    "correct": [1, 2, 4]
  },
  {
    "question": "Điều nào sau đây mô tả đúng vấn đề đối với việc kiểm thử các hệ thống học máy (machine learning)? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Không có cấu trúc chương trình truyền thống để tính toán các số liệu đo lường kiểm thử (test metrics)",
      "Khó xác định các yêu cầu rõ ràng cho hành vi của chương trình",
      "Sự tiến hóa trực tuyến (Online evolution) có nghĩa là hành vi của chương trình sẽ liên tục thay đổi",
      "Tất cả các phương án trên"
    ],
    "correct": 3
  },
  {
    "question": "Những điều nào sau đây là đúng đối với các hệ thống của các hệ thống (systems of systems)? (Chọn tất cả các đáp án đúng)",
    "options": [
      "Các phần thành phần phát triển và tiến hóa một cách độc lập",
      "Không có cơ quan quản lý trung tâm duy nhất",
      "Việc thực thi tách rời (Decoupled execution) cho phép thực hiện kiểm thử riêng biệt",
      "Các giao diện (Interfaces) thay đổi và tiến hóa theo thời gian"
    ],
    "correct": [0, 1, 3]
  }

];

