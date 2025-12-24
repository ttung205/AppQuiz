
const questionsData = [
  {
    question:
      "Mô hình định giá nào cho phép khách hàng AWS trả tiền cho tài nguyên theo nhu cầu sử dụng?",
    options: [
      "Trả tiền khi bạn ngừng sử dụng (Pay as you decommission)",
      "Trả tiền theo mức sử dụng (Pay as you go)",
      "Trả tiền khi bạn mua (Pay as you buy)",
      "Trả tiền khi bạn đặt trước (Pay as you reserve)",
    ],
    correct: 1,
  },
  {
    question:
      "Đặc điểm nào của điện toán đám mây cho phép tiết kiệm chi phí bằng cách phục vụ nhiều người tiêu dùng?",
    options: [
      "Gộp tài nguyên",
      "Truy cập mạng rộng",
      "Tự phục vụ theo yêu cầu",
      "Mô hình đám may cộng đồng",
    ],
    correct: 0,
  },
  {
    question:
      "Tính năng mạng nào của những năm 1950 đã giúp phát triển Máy ảo (VM)?",
    options: [
      "Truy cập mạng rộng",
      "Chia sẻ quyền truy cập vào máy tính lớn",
      "Dịch vụ đo lường",
      "Bảo mật, tuân thủ và hiệu suất",
    ],
    correct: 1,
  },
  {
    question: "Một số lợi ích điện toán đám mây là gì?",
    options: [
      "Mua phần mềm sẵn có và nâng cấp",
      "Sự đa dạng của tiêu chuẩn hóa",
      "Lợi thế cạnh tranh, tính linh hoạt và hiệu quả",
      "Khả năng ngoại tuyến và bảo mật",
    ],
    correct: 2,
  },
  {
    question:
      "Nhà cung cấp nào trong số những nhà cung cấp này được biết đến nhiều hơn với các dịch vụ SaaS của họ?",
    options: [
      "Đội ngũ bán hàng",
      "Intel",
      "Dịch vụ trang web của Amazon",
      "Đám mây Alibaba",
    ],
    correct: 0,
  },
  {
    question:
      "UBank đã tận dụng đám mây để loại bỏ các rào cản đối với sự đổi mới như thế nào?",
    options: [
      "Bằng cách áp dụng mô hình phát triển đám mây PaaS để hợp lý hóa việc phát triển và trao quyền cho các nhóm sản phẩm",
      "Bằng cách thiết lập một nền tảng lưu trữ có thể mở rộng để phân phối độ trễ thấp cho khách hàng doanh nghiệp trên toàn thế giới",
      "Bằng cách di chuyển hệ thống giao dịch của họ từ cơ sở hạ tầng tại chỗ sang các giải pháp IBM Cloud for VMware",
      "Bằng cách hiện đại hóa các ứng dụng hướng đến khách hàng của họ dựa trên mã nguyên khối thành kiến trúc vi dịch vụ dựa trên đám mây",
    ],
    correct: 0,
  },
  {
    question: "Điều nào sau đây là rủi ro mà các doanh nghiệp gặp phải nếu họ không áp dụng đám mây?",
    options: [
      "Thiếu tiêu chuẩn hóa",
      "Vấn đề tuân thủ",
      "Bảo mật dữ liệu",
      "Thiếu năng lực ra quyết định"
    ],
    correct: 3,
  },
  {
    question: "Kết nối đám mây hỗ trợ các thiết bị IoT như thế nào?",
    options: [
      "Cung cấp một vị trí vật lý cố định cho dữ liệu được thu thập từ các thiết bị IoT",
      "Tăng độ trễ trong báo cáo và phản hồi",
      "Rút ra thông tin chi tiết từ dữ liệu thu thập được từ các thiết bị và người dùng IoT",
      "Phục vụ như một điểm thu thập năng động và có thể mở rộng"
    ],
    correct: 3,
  },
  {
    question: "Mối quan hệ cộng sinh ba chiều giữa IoT, AI và Cloud là gì?",
    options: [
      "Hiểu được các luồng dữ liệu vô tận từ các thiết bị IoT",
      "Sức mạnh, quy mô, tính năng động và tính kinh tế của tài nguyên đám mây",
      "AI tiêu thụ dữ liệu được tạo ra bởi các thiết bị IoT",
      "IoT cung cấp dữ liệu, AI cung cấp thông tin chi tiết và cả hai công nghệ mới nổi đều tận dụng khả năng mở rộng và sức mạnh xử lý của Cloud"
    ],
    correct: 3,
  },
  {
    question: "Mối quan hệ ba chiều giữa blockchain, AI và đám mây là gì?",
    options: [
      "Blockchain cung cấp một mạng không thể thay đổi cho phép các thành viên chỉ xem những giao dịch có liên quan đến họ.",
      "Blockchain cung cấp nguồn sự thật đáng tin cậy, phi tập trung, AI hỗ trợ các phân tích và quyết định được đưa ra từ dữ liệu thu thập được và Cloud cung cấp các tài nguyên tính toán phân tán toàn cầu, có thể mở rộng và tiết kiệm chi phí để hỗ trợ cả hai công nghệ.",
      "Tài nguyên tính toán phân tán toàn cầu, có thể mở rộng và tiết kiệm chi phí.",
      "Mang lại sự tin tưởng và minh bạch cho AI bằng cách ghi lại dữ liệu và các biến đi vào quyết định được đưa ra trong thuật toán AI."
    ],
    correct: 1,
  },
  {
    question: "Theo định nghĩa của Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ (NIST) về “điện toán đám mây”, ý nghĩa của tuyên bố “một nhóm tài nguyên điện toán có thể định cấu hình được” là gì?",
    options: [
      "Mạng, máy chủ, lưu trữ, ứng dụng và dịch vụ.",
      "Tận dụng các dịch vụ đám mây qua internet mở trên phần cứng thuộc sở hữu của nhà cung cấp đám mây.",
      "Bảo mật dữ liệu liên quan đến mất dữ liệu hoặc không khả dụng gây gián đoạn kinh doanh.",
      "Năm đặc điểm thiết yếu, ba triển khai và ba mô hình dịch vụ."
    ],
    correct: 0
  },
  {
    question: "Hypervisor hoàn thành những nhiệm vụ nào?",
    options: [
      "Tạo điều kiện truy cập vào máy tính lớn cho nhiều người dùng truy cập vào cùng một lớp lưu trữ dữ liệu",
      "Biến động khối lượng công việc và tạo điều kiện truy cập vào máy tính lớn",
      "Cho phép nhiều hệ điều hành chạy song song với nhau và tách các máy ảo một cách hợp lý",
      "Mở rộng quy mô theo yêu cầu để hỗ trợ khối lượng công việc biến động"
    ],
    correct: 2
  },
  {
    question: "Những cân nhắc chính nào thúc đẩy sự lựa chọn điện toán đám mây của một tổ chức khi xem xét chi tiêu cho phần mềm sẵn có và đầu tư vào nâng cấp?",
    options: [
      "Tiếp xúc với rủi ro",
      "Cơ sở hạ tầng và khối lượng công việc",
      "Tốc độ và năng suất",
      "Phần mềm như một nền tảng dịch vụ và phát triển"
    ],
    correct: 2
  },
  {
    question: "Câu nào sau đây mô tả lợi ích của điện toán đám mây?",
    options: [
      "Tính liên tục kinh doanh",
      "Thiếu tiêu chuẩn hóa trong cách tích hợp các công nghệ không ngừng phát triển",
      "Lỗi phần cứng không dẫn đến mất dữ liệu do các bản sao lưu được duy trì trên mạng",
      "Bảo mật dữ liệu liên quan đến mất hoặc không có sẵn dữ liệu"
    ],
    correct: 2
  },
  {
    question: "Nhà cung cấp dịch vụ nào cung cấp một trong những nền tảng quản lý dữ liệu dựa trên đám mây lớn nhất?",
    options: [
      "đội ngũ bán hàng",
      "Đám mây Alibaba",
      "Đám mây IBM",
      "Đám mây Oracle"
    ],
    correct: 3
  },
  {
    question: "Nhà cung cấp dịch vụ nào sử dụng nền tảng đám mây của mình trong nội bộ cho các sản phẩm người dùng cuối của họ, chẳng hạn như công cụ tìm kiếm và ứng dụng tự động phân bổ và phân bổ tài nguyên để xử lý nhu cầu?",
    options: [
      "Microsoft Azure",
      "Đám mây Oracle",
      "SAP",
      "Nền tảng đám mây của Google (GCP)"
    ],
    correct: 3
  },
  {
    question: "Theo Tổng công ty Dữ liệu Quốc tế (IDC), khả năng quan trọng đó sẽ làm cho điện toán đám mây trở nên cần thiết cho các doanh nghiệp thành công, duy trì và cạnh tranh trên thị trường ngày nay là gì?",
    options: [
      "Cơ sở hạ tầng đa đám mây",
      "Ứng dụng các công nghệ cấp số nhân như AI, Tự động hóa, IoT và Blockchain",
      "Quy trình làm việc được kích hoạt nhận thức",
      "Quyết định dựa trên dữ liệu"
    ],
    correct: 3
  },
  {
    question: "Tại sao American Airlines lại yêu cầu một nền tảng công nghệ mới?",
    options: [
      "Để di chuyển các ứng dụng sang các dịch vụ vi mô gốc đám mây để có dịch vụ khách hàng nhanh hơn và đáng tin cậy hơn",
      "Để tự động hóa lịch trình và bảo trì chuyến bay",
      "Mở rộng sự hiện diện toàn cầu của họ và thúc đẩy tăng trưởng",
      "Để giảm sự phụ thuộc vào nền tảng dựa trên đám mây để phân phối có độ trễ thấp"
    ],
    correct: 0
  },
  {
    question: "Chọn câu trả lời mô tả tốt nhất Điện toán đám mây giúp các thiết bị IoT như thế nào?",
    options: [
      "Cung cấp một vị trí vật lý cố định cho dữ liệu được thu thập từ các thiết bị IoT",
      "Lưu trữ dữ liệu trên ổ đĩa vật lý được mã hóa",
      "Thu thập thông tin chi tiết từ dữ liệu thu thập được từ các thiết bị và người dùng IoT",
      "Cung cấp các tài nguyên để lưu trữ và xử lý dữ liệu được tạo ra bởi các thiết bị và người dùng IoT."
    ],
    correct: 3
  },
  {
    question: "Điều nào sau đây biểu thị mối quan hệ giữa Blockchain, AI và đám mây?",
    options: [
      "Blockchain mang lại sự tin tưởng và minh bạch cho AI bằng cách ghi lại dữ liệu và các biến đi vào quyết định được đưa ra trong thuật toán AI và đám mây cung cấp một mạng không thể thay đổi",
      "Blockchain cung cấp một nguồn sự thật phi tập trung, AI hỗ trợ phân tích và ra quyết định, và đám mây cung cấp tài nguyên tính toán phân tán trên toàn cầu",
      "Blockchain cung cấp các tài nguyên điện toán phân tán, AI hỗ trợ phân tích và đám mây ghi lại dữ liệu",
      "Blockchain cung cấp một mạng bất biến, AI cung cấp tài nguyên điện toán phân tán và đám mây cho phép ra quyết định"
    ],
    correct: 1
  },
  //Module 3
  {
    question: "Thành phần nào của Cơ sở hạ tầng toàn cầu AWS mà Amazon CloudFront sử dụng để đảm bảo phân phối có độ trễ thấp?",
    options: [
      "AWS Regions (Vùng)",
      "AWS Edge locations (Vị trí biên)",
      "AWS Availability Zone (Khu vực sẵn sàng)",
      "Amazon virtual private cloud (Amazon VPC)"
    ],
    correct: 1
  },
  {
    question: "Bạn có thể chạy các ứng dụng và khối lượng công việc từ một vùng (region) gần hơn với người dùng cuối để ______ độ trễ.",
    options: [
      "Tăng",
      "Giảm"
    ],
    correct: 1
  },
  {
    question: "Đúng hay Sai? Mạng, lưu trữ, tính toán và cơ sở dữ liệu là các ví dụ về các danh mục dịch vụ mà AWS cung cấp.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 0
  },
  {
    question: "Câu nào sau đây về Khu vực sẵn sàng (Availability Zones - AZ) là KHÔNG đúng?",
    options: [
      "AZ được thiết kế để cô lập lỗi",
      "AZ được tạo thành từ một hoặc nhiều trung tâm dữ liệu",
      "Các AZ được kết nối với nhau bằng các liên kết riêng tốc độ cao",
      "Một trung tâm dữ liệu có thể được sử dụng cho nhiều hơn một khu vực sẵn sàng"
    ],
    correct: 3
  },
  {
    question: "Điều gì là đúng về các Vùng (Regions)? (Chọn hai)",
    options: [
      "Chúng là vị trí vật lý của khách hàng của bạn",
      "Tất cả các vùng nằm trong một khu vực địa lý cụ thể",
      "Một vùng là một vị trí vật lý có nhiều khu vực sẵn sàng",
      "Vị trí vật lý có nhiều khu vực sẵn sàng",
      "Mỗi vùng nằm trong một khu vực địa lý riêng biệt"
    ],
    correct: [2, 4]
  },
  {
    question: "Các khu vực địa lý nào sau đây lưu trữ hai hoặc nhiều Khu vực sẵn sàng (Availability Zones)?",
    options: [
      "AWS Origin",
      "AWS Regions (Vùng)",
      "Compute Zones (Vùng tính toán)",
      "Edge Locations (Vị trí biên)"
    ],
    correct: 1
  },
  {
    question: "_____ nghĩa là cơ sở hạ tầng có tính năng dự phòng thành phần tích hợp và _____ nghĩa là tài nguyên tự động điều chỉnh theo yêu cầu dung lượng tăng hoặc giảm.",
    options: [
      "Không cần sự can thiệp của con người, khả năng chịu lỗi",
      "Khả năng chịu lỗi, không cần sự can thiệp của con người",
      "Đàn hồi và có thể mở rộng, khả năng chịu lỗi",
      "Đàn hồi và có thể mở rộng, không cần sự can thiệp của con người",
      "Khả năng chịu lỗi (Fault-tolerant), đàn hồi và có thể mở rộng (elastic and scalable)"
    ],
    correct: 4
  },
  {
    question: "Đúng hay Sai? Các Khu vực sẵn sàng (Availability Zones) trong cùng một vùng được kết nối thông qua các liên kết có độ trễ thấp.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 0
  },
  {
    question: "AWS đặc biệt khuyến nghị cung cấp tài nguyên tính toán của bạn trên _____ khu vực sẵn sàng.",
    options: [
      "Tất cả",
      "Không",
      "Nhiều (Multiple)",
      "Đơn lẻ"
    ],
    correct: 2
  },
  {
    question: "Đúng hay Sai? Các vị trí biên (Edge locations) chỉ nằm trong cùng khu vực chung với các vùng (regions).",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 1
  },
  //Module 4
  {
    question: "Trong mô hình trách nhiệm chung, điều nào sau đây là ví dụ về 'Bảo mật TRONG đám mây' (Security in the cloud - Trách nhiệm của khách hàng)?",
    options: [
      "Tuân thủ các quy định và tiêu chuẩn bảo mật điện toán",
      "Bảo mật vật lý của các cơ sở nơi dịch vụ hoạt động",
      "Cấu hình nhóm bảo mật (Security group configurations)",
      "Mã hóa dữ liệu khi nghỉ (at rest) và khi đang truyền (in transit)",
      "Bảo vệ cơ sở hạ tầng toàn cầu"
    ],
    correct: [2, 3]
  },
  {
    question: "Điều nào sau đây là trách nhiệm của AWS theo mô hình trách nhiệm chung của AWS?",
    options: [
      "Cấu hình các ứng dụng của bên thứ ba",
      "Bảo trì phần cứng vật lý",
      "Bảo mật quyền truy cập ứng dụng và dữ liệu",
      "Quản lý hình ảnh máy Amazon (AMI) tùy chỉnh"
    ],
    correct: 1
  },
  {
    question: "Khi tạo chính sách AWS Identity and Access Management (IAM), hai loại quyền truy cập nào có thể được cấp cho người dùng?",
    options: [
      "Quyền truy cập tổ chức (Institutional Access)",
      "Quyền truy cập được ủy quyền (Authorized Access)",
      "Quyền truy cập lập trình (Programmatic Access)",
      "Quyền truy cập bảng điều khiển quản lý AWS (AWS Management Console Access)",
      "Quyền truy cập quản trị Root (Administrative Root Access)"
    ],
    correct: [2, 3]
  },
  {
    question: "Đúng hay Sai? AWS Organizations cho phép bạn hợp nhất nhiều tài khoản AWS để bạn quản lý chúng một cách tập trung.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 0
  },
  {
    question: "Điều nào sau đây là các phương pháp hay nhất (best practices) để bảo mật tài khoản của bạn bằng AWS IAM? (Chọn 2)",
    options: [
      "Cung cấp cho người dùng các đặc quyền quản trị mặc định",
      "Để lại người dùng và thông tin xác thực không sử dụng và không cần thiết",
      "Quản lý quyền truy cập vào các tài nguyên AWS",
      "Tránh sử dụng các nhóm IAM để cấp cùng quyền truy cập cho nhiều người dùng",
      "Xác định quyền truy cập chi tiết (fine-grained access rights)"
    ],
    correct: [2, 4]
  },
  {
    question: "Việc nào sau đây nên được thực hiện bởi người dùng root tài khoản AWS (AWS account root user)?",
    options: [
      "Bảo mật quyền truy cập cho các ứng dụng",
      "Tích hợp với các dịch vụ AWS khác",
      "Thay đổi quyền hạn chi tiết",
      "Thay đổi gói hỗ trợ AWS (AWS support plan)"
    ],
    correct: 3
  },
  {
    question: "Sau lần đăng nhập đầu tiên, AWS khuyến nghị phương pháp hay nhất nào đối với người dùng root tài khoản AWS?",
    options: [
      "Xóa người dùng root tài khoản AWS",
      "Thu hồi tất cả các quyền đối với người dùng root tài khoản AWS",
      "Hạn chế quyền đối với người dùng root tài khoản AWS",
      "Xóa các khóa truy cập (access keys) của người dùng root tài khoản AWS"
    ],
    correct: 3
  },
  {
    question: "Làm thế nào quản trị viên hệ thống có thể thêm một lớp bảo mật đăng nhập bổ sung vào AWS Management Console của người dùng?",
    options: [
      "Sử dụng Amazon Cloud Directory",
      "Kiểm toán các vai trò (roles) AWS IAM",
      "Bật xác thực đa yếu tố (Multi-factor authentication - MFA)",
      "Bật AWS CloudTrail"
    ],
    correct: 2
  },
  {
    question: "Đúng hay Sai? AWS Key Management Service (AWS KMS) cho phép bạn đánh giá, kiểm toán và định giá cấu hình tài nguyên AWS của bạn.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 1
  },
  //Module 5
  {
    question: "Dịch vụ mạng AWS nào cho phép một công ty tạo ra một mạng ảo bên trong AWS?",
    options: [
      "AWS Config",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon VPC"
    ],
    correct: 3
  },
  {
    question: "Với Amazon Virtual Private Cloud (Amazon VPC), kích thước mạng con (subnet) nhỏ nhất bạn có thể có trong một VPC là bao nhiêu?",
    options: [
      "/28",
      "/30",
      "/24",
      "/26"
    ],
    correct: 0
  },
  {
    question: "Với Amazon Virtual Private Cloud (Amazon VPC), dải địa chỉ IP có kích thước tối đa bạn có thể có trong một VPC là bao nhiêu?",
    options: [
      "/28",
      "/16",
      "/30",
      "/24"
    ],
    correct: 1
  },
  {
    question: "Bạn cần cho phép các tài nguyên trong mạng con riêng tư (private subnet) truy cập internet. Thành phần nào sau đây phải có để kích hoạt quyền truy cập này?",
    options: [
      "Network access control lists (NACL)",
      "Security groups (Nhóm bảo mật)",
      "NAT gateway",
      "Route tables (Bảng định tuyến)"
    ],
    correct: 2
  },
  {
    question: "Dịch vụ mạng AWS nào cho phép một công ty tạo ra một mạng ảo bên trong AWS?",
    options: [
      "Amazon Virtual Private Cloud (Amazon VPC)",
      "AWS Direct Connect",
      "Amazon Route 53",
      "AWS Config"
    ],
    correct: 0
  },
  {
    question: "Đúng hay Sai: Các mạng con riêng tư (Private subnets) có quyền truy cập trực tiếp vào internet.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 1
  },
  {
    question: "Thành phần nào của Cơ sở hạ tầng toàn cầu AWS mà Amazon CloudFront sử dụng để đảm bảo phân phối có độ trễ thấp?",
    options: [
      "AWS Regions (Vùng)",
      "AWS Availability Zones (Khu vực sẵn sàng)",
      "AWS edge locations (Vị trí biên)",
      "Amazon Virtual Private Cloud (Amazon VPC)"
    ],
    correct: 2
  },
  {
    question: "Điều nào sau đây là biện pháp kiểm soát bảo mật tùy chọn có thể được áp dụng ở lớp mạng con (subnet layer) của một VPC?",
    options: [
      "Network ACL",
      "Security group",
      "Web application firewall",
      "Firewall"
    ],
    correct: 0
  },
  {
    question: "Điều gì xảy ra khi bạn sử dụng Amazon Virtual Private Cloud (Amazon VPC) để tạo một VPC mới?",
    options: [
      "Ba mạng con (subnets) được tạo theo mặc định trong một Khu vực sẵn sàng",
      "Một bảng định tuyến chính (main route table) được tạo theo mặc định",
      "Ba mạng con được tạo theo mặc định: một cho mỗi Khu vực sẵn sàng",
      "Một cổng internet (internet gateway) được tạo theo mặc định"
    ],
    correct: 1
  },
  {
    question: "Cái nào sau đây có thể được sử dụng để bảo vệ các phiên bản Amazon Elastic Compute Cloud (Amazon EC2) được lưu trữ trong AWS?",
    options: [
      "Internet Gateway",
      "Tất cả các ý trên",
      "AMI",
      "Security group"
    ],
    correct: 3
  },
  {
    question: "Bạn là kiến trúc sư giải pháp tại một công ty bán lẻ lớn đang di chuyển cơ sở hạ tầng hiện có sang AWS. Bạn đề xuất họ sử dụng VPC tùy chỉnh. Khi bạn tạo một VPC, bạn gán cho nó một khối IPv4 CIDR là 10.0.1.0/24 (có tổng cộng 256 địa chỉ IP). Có bao nhiêu địa chỉ IP KHẢ DỤNG?",
    options: [
      "251",
      "256",
      "246",
      "250"
    ],
    correct: 0
  },
  //Module 6
  {
    question: "Tại sao AWS tiết kiệm hơn các trung tâm dữ liệu truyền thống đối với các ứng dụng có khối lượng công việc tính toán thay đổi?",
    options: [
      "Chi phí Amazon EC2 được tính theo tháng.",
      "Khách hàng giữ toàn quyền truy cập quản trị vào các phiên bản Amazon EC2 của họ.",
      "Khách hàng có thể chạy vĩnh viễn đủ số lượng phiên bản để xử lý khối lượng công việc cao điểm.",
      "Các phiên bản Amazon EC2 có thể được khởi chạy theo nhu cầu khi cần thiết."
    ],
    correct: 3
  },
  {
    question: "Nếu dự án của bạn yêu cầu các báo cáo hàng tháng lặp lại trên lượng dữ liệu rất lớn, bạn nên xem xét tùy chọn mua Amazon Elastic Compute Cloud (EC2) nào?",
    options: [
      "Spot Instances (Phiên bản dùng ngay/giá rẻ)",
      "Scheduled Reserved Instances (Phiên bản dành riêng theo lịch trình)",
      "Dedicated Hosts (Máy chủ vật lý dành riêng)",
      "On-Demand Instances (Phiên bản theo nhu cầu)"
    ],
    correct: 1
  },
  {
    question: "Những gì được bao gồm trong Amazon Machine Image (AMI)?",
    options: [
      "Một mẫu cho phân vùng gốc (root volume) của phiên bản.",
      "Quyền khởi chạy kiểm soát tài khoản AWS nào có thể sử dụng AMI để khởi chạy các phiên bản.",
      "Ánh xạ thiết bị khối (block device mapping) chỉ định các phân vùng (volumes) sẽ gắn vào phiên bản khi nó được khởi chạy.",
      "Tất cả các ý trên."
    ],
    correct: 3
  },
  {
    question: "Tính năng nào của Amazon EC2 đảm bảo các phiên bản của bạn sẽ không chia sẻ máy chủ vật lý với các phiên bản từ bất kỳ khách hàng AWS nào khác?",
    options: [
      "Amazon VPC",
      "Placement Groups (Nhóm đặt)",
      "Dedicated Instances (Phiên bản dành riêng)",
      "Reserved Instances (Phiên bản dự trữ)"
    ],
    correct: 2
  },
  {
    question: "Dịch vụ nào sau đây là dịch vụ tính toán phi máy chủ (serverless) trong AWS?",
    options: [
      "AWS Config",
      "AWS Lambda",
      "AWS OpsWork",
      "Amazon EC2"
    ],
    correct: 1
  },
  {
    question: "Dịch vụ nào được AWS cung cấp cho phép các nhà phát triển dễ dàng triển khai và quản lý các ứng dụng trên đám mây?",
    note: "Elastic Beanstalk là một tùy chọn dịch vụ tính toán của AWS. Nó là một Nền tảng dưới dạng Dịch vụ (PaaS) hỗ trợ triển khai nhanh, mở rộng và quản lý các ứng dụng và dịch vụ web của bạn.",
    options: [
      "Amazon Elastic Container Service",
      "AWS Elastic Beanstalk",
      "AWS OpsWork",
      "AWS CloudFormation"
    ],
    correct: 1
  },
  {
    question: "Ứng dụng web của bạn cần 4 instances để hỗ trợ lưu lượng truy cập ổn định mọi lúc. Vào ngày cuối cùng của tháng, lưu lượng truy cập tăng gấp ba. Cách hiệu quả nhất về chi phí để xử lý mô hình này là gì?",
    note: "Reserved Instances giúp tiết kiệm chi phí khi bạn cam kết chạy instances toàn thời gian (cho lưu lượng cơ bản). On-Demand Instances cung cấp sự linh hoạt để xử lý các đợt tăng đột biến.",
    options: [
      "Chạy 12 Reserved Instances mọi lúc.",
      "Chạy 4 On-demand Instances liên tục, sau đó thêm 8 On-Demand vào ngày cuối cùng của mỗi tháng.",
      "Chạy 4 Reserved Instances liên tục, sau đó thêm 8 On-Demand Instances vào ngày cuối cùng của mỗi tháng.",
      "Chạy 4 On-Demand Instances liên tục, sau đó thêm 8 Reserved Instances vào ngày cuối cùng của mỗi tháng."
    ],
    correct: 2
  },
  {
    question: "Đúng hay sai? Các container chứa toàn bộ hệ điều hành.",
    note: "Container nhỏ hơn máy ảo và không chứa toàn bộ hệ điều hành (chúng chia sẻ kernel của OS máy chủ).",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 1
  },
  {
    question: "Tùy chọn Amazon EC2 nào tốt nhất cho khối lượng công việc dài hạn với các mẫu sử dụng có thể dự đoán được?",
    options: [
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances"
    ],
    correct: 2
  },
  {
    question: "Những điều nào sau đây phải được chỉ định khi khởi chạy một phiên bản Amazon EC2 Windows mới? (Chọn hai)",
    options: [
      "Amazon EC2 instance type (Loại phiên bản)",
      "Amazon Machine Image (AMI)",
      "The Amazon EC2 Instance ID (ID phiên bản - được tạo sau khi chạy)",
      "Password for the administrator account (Mật khẩu - được tạo/giải mã sau)",
      "Amazon EC2 instance type (Lặp lại)"
    ],
    correct: [0, 1]
  },
  //Module 7
  {
    question: "Đúng hay sai: Amazon Simple Storage Service (S3) là dịch vụ lưu trữ đối tượng phù hợp để lưu trữ các tệp phẳng (flat files) như tài liệu Microsoft Word, ảnh, v.v.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 0
  },
  {
    question: "Amazon S3 sao chép (replicates) tất cả các đối tượng _____.",
    options: [
      "Trên nhiều ổ đĩa trong một Khu vực sẵn sàng (Availability Zone).",
      "Tại nhiều Khu vực sẵn sàng (Availability Zones) trong cùng một Vùng (Region).",
      "Qua nhiều Vùng (Regions) để có độ bền cao hơn.",
      "Trên nhiều S3 buckets."
    ],
    correct: 1
  },
  {
    question: "Những loại nào sau đây có thể được sử dụng làm lớp lưu trữ (storage class) cho chính sách vòng đời đối tượng S3? (Chọn nhiều)",
    options: [
      "S3 Standard Access",
      "AWS Storage Gateway",
      "S3 Infrequent Access",
      "Simple Storage Service Glacier",
      "S3 Reduced Redundancy Storage",
      "Amazon Dynamo DB"
    ],
    correct: [0, 2, 3]
  },
  {
    question: "Tên của một S3 bucket phải là duy nhất ở phạm vi nào?",
    options: [
      "Trên toàn thế giới qua tất cả các tài khoản AWS.",
      "Trong một vùng (region).",
      "Qua tất cả các tài khoản AWS của bạn.",
      "Trong tài khoản AWS của bạn."
    ],
    correct: 0
  },
  {
    question: "Bạn có thể sử dụng Amazon Elastic File System (EFS) để làm gì?",
    options: [
      "Cung cấp lưu trữ tệp đơn giản, có thể mở rộng, đàn hồi chỉ để sử dụng trong nội bộ AWS.",
      "Triển khai lưu trữ cho các phiên bản Amazon EC2 mà nhiều máy ảo có thể truy cập cùng một lúc.",
      "Lưu trữ một CDN mạnh mẽ để phân phối toàn bộ trang web với nội dung động, tĩnh và phát trực tuyến.",
      "Tạo nội dung dành riêng cho người dùng."
    ],
    correct: 1
  },
  {
    question: "Amazon Elastic Block Store (Amazon EBS) được khuyến nghị khi dữ liệu _____ và ______ (Chọn hai).",
    options: [
      "Yêu cầu lưu trữ cấp đối tượng (object level storage).",
      "Phải truy cập nhanh chóng, yêu cầu sự bền vững lâu dài.",
      "Yêu cầu một giải pháp mã hóa.",
      "Cần được lưu trữ trong một Khu vực sẵn sàng (AZ) khác với khu vực của phiên bản EC2."
    ],
    correct: [1, 2]
  },
  {
    question: "Đúng hay sai: Theo mặc định, tất cả dữ liệu được lưu trữ trong Amazon S3 đều có thể được xem bởi công chúng.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 1
  },
  {
    question: "Liên quan đến Amazon S3 Glacier, một 'vault' (kho lưu trữ) là gì?",
    options: [
      "Các quy tắc xác định ai có thể (hoặc không thể) truy cập các bản lưu trữ.",
      "Một đối tượng (ảnh, video, tệp hoặc tài liệu).",
      "Một container (thùng chứa) để lưu trữ các bản lưu trữ (archives).",
      "Một chính sách xác định ai có thể truy cập nội dung được lưu trữ trong Glacier."
    ],
    correct: 2
  },
  {
    question: "Đúng hay sai: Khi bạn tạo một bucket trong Amazon S3, nó được liên kết với một vùng AWS cụ thể.",
    options: [
      "Đúng",
      "Sai"
    ],
    correct: 0
  },
  {
    question: "Những tính năng nào sau đây là của Amazon Elastic Block Store (Amazon EBS)? (Chọn hai).",
    options: [
      "Dữ liệu trên ổ đĩa Amazon EBS bị mất khi phiên bản đính kèm bị dừng (stopped).",
      "Các ổ đĩa Amazon EBS có thể được mã hóa một cách minh bạch đối với khối lượng công việc trên phiên bản đính kèm.",
      "Dữ liệu Amazon EBS được tự động sao lưu vào băng từ (tape).",
      "Dữ liệu được lưu trữ trên Amazon EBS được tự động sao chép (replicated) trong một Khu vực sẵn sàng (Availability Zone)."
    ],
    correct: [1, 3]
  },
//Module 8
  {
    "question": "Bạn đang thiết kế một ứng dụng web thương mại điện tử có thể mở rộng đến hàng trăm nghìn người dùng đồng thời. Công nghệ cơ sở dữ liệu nào phù hợp nhất để lưu trạng thái phiên (session state) trong trường hợp này?",
    "options": [
      "Amazon Relational Database Service (Amazon RDS)",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Simple Storage Service (Amazon S3)"
    ],
    "correct": 1
  },
  {
    "question": "Bạn cần tìm một item trong bảng Amazon DynamoDB bằng một thuộc tính không phải là khóa chính. Bạn nên sử dụng thao tác nào?",
    "options": [
      "PutItem",
      "Scan",
      "Query",
      "GetItem"
    ],
    "correct": 1
  },
  {
    "question": "Trong Amazon DynamoDB, thao tác Query cho phép bạn làm gì?",
    "options": [
      "Truy vấn bảng bằng Partition Key và tùy chọn lọc theo Sort Key",
      "Truy vấn các secondary index tồn tại trong bảng",
      "Truy xuất item một cách hiệu quả từ bảng hoặc secondary index",
      "Tất cả các đáp án trên"
    ],
    "correct": 3
  },
  {
    "question": "Dịch vụ AWS nào phù hợp nhất để phân tích dữ liệu bằng ngôn ngữ truy vấn có cấu trúc (SQL) tiêu chuẩn và các công cụ Business Intelligence (BI) hiện có?",
    "options": [
      "Amazon Relational Database Service (Amazon RDS)",
      "Amazon Simple Storage Service Glacier",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "correct": 3
  },
  {
    "question": "Trong Amazon DynamoDB, một attribute là gì?",
    "options": [
      "Một phần tử dữ liệu cơ bản",
      "Một tập hợp các item",
      "Một tập hợp các attribute"
    ],
    "correct": 0
  },
  {
    "question": "Trường hợp sử dụng nào sau đây phù hợp với Amazon Relational Database Service (Amazon RDS)?",
    "options": [
      "Tốc độ đọc/ghi cực lớn",
      "Các yêu cầu Get hoặc Put đơn giản",
      "Các giao dịch phức tạp",
      "Tất cả các đáp án trên"
    ],
    "correct": 2
  },
  {
    "question": "Một công ty có ứng dụng gồm tầng .NET kết nối với cơ sở dữ liệu MySQL. Họ muốn chuyển ứng dụng này lên AWS và sử dụng các tính năng như khả năng sẵn sàng cao và sao lưu tự động. Cơ sở dữ liệu nào là lựa chọn lý tưởng nhất?",
    "options": [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    "correct": 2
  },
  {
    "question": "Nếu bạn đang phát triển một ứng dụng yêu cầu cơ sở dữ liệu có hiệu năng cực nhanh, khả năng mở rộng cao và linh hoạt về schema, bạn nên chọn dịch vụ nào?",
    "options": [
      "Amazon Relational Database Service (Amazon RDS)",
      "Amazon ElastiCache",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "correct": 2
  },
  {
    "question": "Đúng hay sai? Amazon RDS tự động vá lỗi phần mềm cơ sở dữ liệu và sao lưu dữ liệu, lưu trữ bản sao lưu trong khoảng thời gian do người dùng xác định và cho phép khôi phục tại một thời điểm bất kỳ.",
    "options": [
      "Đúng",
      "Sai"
    ],
    "correct": 0
  },
  {
    "question": "Khi lựa chọn loại cơ sở dữ liệu, bạn nên cân nhắc những yếu tố nào?",
    "options": [
      "Kích thước dữ liệu",
      "Mô hình truy cập dữ liệu",
      "Tần suất truy vấn",
      "Tất cả các đáp án trên",
      "Khả năng sẵn sàng cao"
    ],
    "correct": 3
  },
//Module 9
  {
    question: "Điều nào sau đây KHÔNG phải là một trong bốn lĩnh vực của trụ cột Hiệu quả hoạt động (Performance Efficiency) trong AWS Well-Architected Framework?",
    options: [
      "Tradeoffs (Sự đánh đổi)",
      "Selection (Lựa chọn)",
      "Traceability (Khả năng truy xuất)",
      "Monitoring (Giám sát)"
    ],
    correct: 2
  },
  {
    question: "Nguyên tắc nào sau đây được áp dụng khi thiết kế các hệ thống dựa trên đám mây?",
    options: [
      "Xây dựng các thành phần kết nối chặt chẽ (tightly-coupled)",
      "Thực hiện các thay đổi lớn theo từng đợt không thường xuyên",
      "Giả định mọi thứ sẽ hỏng (Assume everything will fail)",
      "Sử dụng càng nhiều dịch vụ càng tốt"
    ],
    correct: 2
  },
  {
    question: "Những điều nào sau đây là các trụ cột của AWS Well-Architected Framework? (Chọn ba)",
    options: [
      "Security (Bảo mật)",
      "Persistence (Tính bền vững dữ liệu)",
      "Operational Excellence (Vận hành xuất sắc)",
      "Cost Optimization (Tối ưu hóa chi phí)"
    ],
    correct: [0, 2, 3]
  },
  {
    question: "Những nguyên tắc thiết kế nào được khuyến nghị khi xem xét hiệu quả hoạt động (Performance Efficiency)? (Chọn 2)",
    options: [
      "Enable traceability (Kích hoạt khả năng truy xuất)",
      "Use serverless architecture (Sử dụng kiến trúc không máy chủ)",
      "Analyze and attribute expenditure (Phân tích và quy gán chi phí)",
      "Match Supply with demand (Khớp cung với cầu)",
      "Democratize advance technologies (Dân chủ hóa các công nghệ tiên tiến)"
    ],
    correct: [1, 4]
  },
  {
    question: "AWS Trusted Advisor cung cấp thông tin chi tiết về năm danh mục nào của tài khoản AWS?",
    options: [
      "Hiệu suất, tối ưu hóa chi phí, bảo mật, khả năng chịu lỗi, giới hạn dịch vụ.",
      "Bảo mật, Khả năng chịu lỗi, tính sẵn sàng cao, kết nối, giới hạn dịch vụ",
      "Hiệu suất, tối ưu hóa chi phí, kiểm soát truy cập, kết nối, bảo mật",
      "Bảo mật, kiểm soát truy cập, tính sẵn sàng cao, hiệu suất, giới hạn dịch vụ"
    ],
    correct: 0
  },
  {
    question: "Trọng tâm của trụ cột Bền vững (Sustainability) trong Well-Architected Framework là gì?",
    options: [
      "Thiết kế khối lượng công việc phục hồi nhanh chóng sau sự cố.",
      "Giảm thiểu tác động môi trường của các mạng đám mây đang chạy.",
      "Tránh chi phí không cần thiết trong các mạng đám mây.",
      "Tự động hóa các bản cập nhật cho các mạng đám mây."
    ],
    correct: 1
  },
  {
    question: "AWS Well-Architected Framework được tổ chức thành bao nhiêu trụ cột?",
    note: "Lưu ý: Tài liệu cũ ghi là 5, nhưng hiện tại AWS đã cập nhật chính thức lên 6 trụ cột (bao gồm Sustainability).",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correct: 2
  },
  {
    question: "Sau khi chuyển sang AWS Cloud, bạn muốn đảm bảo rằng các cài đặt bảo mật phù hợp đã được áp dụng. Công cụ trực tuyến nào có thể hỗ trợ tuân thủ bảo mật?",
    options: [
      "Amazon Kinesis",
      "Amazon Support",
      "AWS Trusted Advisor",
      "Amazon CloudWatch"
    ],
    correct: 2
  },
  {
    question: "Điều nào sau đây là thước đo khả năng của hệ thống trong việc cung cấp chức năng khi người dùng mong muốn?",
    options: [
      "Availability (Tính sẵn sàng)",
      "Fault Tolerance (Khả năng chịu lỗi)",
      "Reliability (Độ tin cậy)",
      "Performance Efficiency (Hiệu quả hoạt động)"
    ],
    correct: 2
  },
  {
    question: "Điều gì được định nghĩa là khả năng duy trì hoạt động của hệ thống ngay cả khi một số thành phần của hệ thống đó bị lỗi?",
    options: [
      "High durability (Độ bền cao)",
      "Fault Tolerance (Khả năng chịu lỗi)",
      "High availability (Tính sẵn sàng cao)"
    ],
    correct: 1
  },
  {
    question: "Điều nào sau đây mô tả đúng nhất về một hệ thống có thể chịu được một số biện pháp suy giảm, trải qua thời gian ngừng hoạt động tối thiểu và yêu cầu sự can thiệp tối thiểu của con người?",
    options: [
      "Scalable (Có thể mở rộng)",
      "Fault Tolerant (Chịu lỗi)",
      "Elastic (Đàn hồi)",
      "Highly available (Tính sẵn sàng cao)"
    ],
    correct: 3
  },
//Module 10
  {
    question: "Công cụ AWS nào sau đây giúp ứng dụng của bạn mở rộng quy mô tăng hoặc giảm dựa trên nhu cầu? (Chọn hai)",
    options: [
      "Availability Zones",
      "Amazon EC2 Auto Scaling",
      "AWS CloudFormation",
      "Elastic Load Balancing",
      "AWS Config"
    ],
    correct: [1, 3]
  },
  {
    question: "Bạn sẽ sử dụng dịch vụ nào để gửi thông báo dựa trên các cảnh báo của Amazon CloudWatch?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route 53"
    ],
    correct: 0
  },
  {
    question: "Đặc điểm nào sau đây là của Amazon EC2 Auto Scaling? (Chọn ba)",
    options: [
      "Chỉ hỗ trợ mở rộng động (Dynamic Scaling)",
      "Phản ứng với các điều kiện thay đổi bằng cách thêm hoặc chấm dứt các phiên bản (instances)",
      "Gửi thông báo đẩy (Push Notifications)",
      "Khởi chạy các phiên bản từ một Amazon Machine Image (AMI) được chỉ định",
      "Thực thi số lượng tối thiểu các phiên bản Amazon EC2 đang chạy"
    ],
    correct: [1, 3, 4]
  },
  {
    question: "Thành phần nào sau đây phải được cấu hình trên bộ cân bằng tải Elastic Load Balancing để tiếp nhận lưu lượng truy cập đến?",
    options: [
      "Một cổng (Port)",
      "Một giao diện mạng (Network Interface)",
      "Một trình lắng nghe (Listener)",
      "Một phiên bản (Instance)"
    ],
    correct: 2
  },
  {
    question: "Các yếu tố nào sau đây được sử dụng để tạo một cấu hình khởi chạy (launch configuration) cho Amazon EC2 Auto Scaling? (Chọn ba)",
    options: [
      "Amazon Machine Image (AMI)",
      "Load Balancer",
      "Loại phiên bản (Instance type)",
      "Virtual Private Cloud (VPC) và Subnets",
      "Các ổ đĩa Amazon Elastic Block Store (Amazon EBS)"
    ],
    correct: [0, 2, 4]
  },
  {
    question: "Dịch vụ nào sau đây có thể giúp bạn thu thập các số liệu quan trọng từ Amazon RDS và Amazon EC2 instances?",
    note: "Lưu ý: Trong thực tế, 'metrics' (số liệu) thường liên quan đến Amazon CloudWatch. Tuy nhiên, đáp án trong tài liệu bạn cung cấp chọn CloudTrail (thường dùng cho logs/audits). Dưới đây là đáp án theo tài liệu của bạn.",
    options: [
      "Amazon CloudFront",
      "Amazon CloudSearch",
      "Amazon CloudWatch",
      "Amazon CloudTrail",
      "Amazon EC2 Scaling"
    ],
    correct: 3
  },
  {
    question: "Các yếu tố nào sau đây là thành phần của một Auto Scaling group? (Chọn ba)",
    options: [
      "Kích thước tối đa (Maximum size)",
      "Kiểm tra sức khỏe (Health Checks)",
      "Dung lượng mong muốn (Desired capacity)",
      "Kích thước tối thiểu (Minimum size)"
    ],
    correct: [0, 2, 3]
  },
  {
    question: "Có một cuộc kiểm toán (audit) tại công ty của bạn và họ cần có nhật ký lớn về tất cả các quyền truy cập vào tài nguyên AWS trong tài khoản. Dịch vụ nào sau đây có thể hỗ trợ cung cấp các chi tiết này?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "Amazon Simple Notification Service (Amazon SNS)"
    ],
    correct: 1
  },
  {
    question: "Trong Elastic Load Balancing, khi bộ cân bằng tải phát hiện một mục tiêu không lành mạnh (unhealthy target), điều nào sau đây là đúng? (Chọn ba)",
    options: [
      "Ngừng định tuyến lưu lượng đến mục tiêu đó",
      "Kích hoạt một cảnh báo (Alarm)",
      "Tiếp tục định tuyến lưu lượng khi phát hiện mục tiêu đã khỏe mạnh trở lại",
      "Tiếp tục định tuyến lưu lượng khi được khởi động lại thủ công",
      "Định tuyến lưu lượng đến một mục tiêu khỏe mạnh"
    ],
    correct: [0, 2, 4]
  },
  {
    question: "Ba loại bộ cân bằng tải mà Elastic Load Balancing cung cấp là gì? (Chọn ba)",
    options: [
      "Internet Load Balancer",
      "Application Load Balancer (ALB)",
      "Network Load Balancer (NLB)",
      "Compute Load Balancer",
      "Classic Load Balancer (CLB)",
      "Auto Scaling Load Balancer"
    ],
    correct: [1, 2, 4]
  },


  {
    question: "Mã Hill là mã hóa dựa trên:",
    options: ["Xoay vòng", "XOR", "Phép nhân ma trận", "Bảng thay thế"],
    correct: 2,
  },
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
  questionsData.slice(200, 250),
];
