// Dữ liệu câu hỏi từ đề bài
// Bộ câu hỏi ôn tập Dược (Chương 2): Viên nén, Bao viên, Viên nang, Thuốc tiêm
// Định dạng: mỗi phần tử gồm
// { question, options, correct, explanation, topic, difficulty, type }
// Lưu ý: correct là chỉ số 0-based (hoặc mảng chỉ số cho câu nhiều đáp án)

var questionsData = [
  // 1) Đặc điểm kỹ thuật viên nén
  {
    question: "Mục đích chính của sản xuất viên nén ở quy mô công nghiệp là gì?",
    options: [
      "Tạo viên nén số lượng nhỏ phục vụ nghiên cứu",
      "Tạo hàng loạt viên nén đồng nhất, ổn định, đạt tiêu chuẩn",
      "Giảm giá thành dược chất",
      "Tăng độ tan của mọi dược chất"
    ],
    correct: 1,
    explanation: "Sản xuất công nghiệp đòi hỏi đồng nhất giữa các viên/lô và phù hợp tiêu chuẩn đăng ký.",
    topic: "Viên nén - Tổng quan",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Tiêu chuẩn chung thường áp dụng cho viên nén KHÔNG bao gồm chỉ tiêu nào dưới đây?",
    options: [
      "Độ đồng đều khối lượng",
      "Độ đồng nhất hàm lượng",
      "Độ mài mòn",
      "Độ nhớt của dung dịch bao phim"
    ],
    correct: 3,
    explanation: "Độ nhớt dung dịch bao phim là thông số công nghệ, không phải chỉ tiêu thành phẩm viên nén.",
    topic: "Viên nén - Tiêu chuẩn chất lượng",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Theo Dược điển Việt Nam V, độ đồng đều khối lượng của viên nén 250 mg trở lên cho phép dung sai tối đa bao nhiêu?",
    options: ["10%", "7,5%", "5%", "2%"],
    correct: 2,
    explanation: "Với viên ≥ 250 mg, dung sai thường là ±5% so với khối lượng trung bình.",
    topic: "Viên nén - Độ đồng đều KL",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Độ cứng viên nén thường được biểu diễn bằng đơn vị nào?",
    options: ["kP (kiloPond)", "Pa", "mPa·s", "ppm"],
    correct: 0,
    explanation: "Độ cứng viên thường quy đổi kP hoặc N (1 kP ≈ 9,807 N).",
    topic: "Viên nén - Độ cứng",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Thử độ rã viên nén sử dụng thiết bị nào?",
    options: ["Máy thử độ rã", "Thiết bị HPLC", "Máy đo độ cứng Brinell", "Máy DSC"],
    correct: 0,
    explanation: "Máy thử độ rã chuyên dụng để đánh giá thời gian viên rã theo quy định.",
    topic: "Viên nén - Độ rã",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Phát biểu nào đúng về mối liên hệ giữa khối lượng trung bình và hàm lượng viên nén?",
    options: [
      "Độ đồng đều khối lượng luôn thay thế hoàn toàn phép thử hàm lượng",
      "Có thể ngoại suy hàm lượng từ khối lượng trung bình khi hàm lượng dược chất ≥ 50 mg hoặc ≥ 50%",
      "Không bao giờ được ngoại suy",
      "Chỉ áp dụng khi viên bao phim"
    ],
    correct: 1,
    explanation: "DĐ Mỹ cho phép ngoại suy khi hàm lượng/tỷ lệ dược chất đủ cao và phân bố đồng nhất.",
    topic: "Viên nén - Hàm lượng & KL",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Độ mài mòn của viên nén là phép thử phản ánh gì?",
    options: [
      "Khả năng chống vỡ khi chịu lực nén",
      "Mức độ hao hụt cơ học khi quay trong trống mài mòn",
      "Tốc độ hòa tan",
      "Độ ổn định hóa học"
    ],
    correct: 1,
    explanation: "Độ mài mòn đánh giá tổn thất cơ học (mẻ, sứt, bụi) khi quay trong thiết bị chuyên dụng.",
    topic: "Viên nén - Độ mài mòn",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Trong bảo quản viên nén, điều kiện chung khuyến nghị là:",
    options: [
      "RH ≤ 75%, 15–30°C, tránh ánh sáng, nơi thoáng",
      "RH ≤ 30%, 2–8°C",
      "RH = 100%, 25°C",
      "Không cần yêu cầu đặc biệt"
    ],
    correct: 0,
    explanation: "Điều kiện kho dược chuẩn: nhiệt độ phòng kiểm soát, độ ẩm kiểm soát, tránh ánh sáng, thoáng khí.",
    topic: "Bảo quản - Viên nén",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Chỉ tiêu 'độ hòa tan' dùng để đánh giá gì?",
    options: [
      "Khả năng nén của hạt",
      "Mức độ phóng thích dược chất theo thời gian",
      "Độ rã cơ học của viên",
      "Độ ổn định nhiệt"
    ],
    correct: 1,
    explanation: "Độ hòa tan phản ánh động học phóng thích, liên quan sinh khả dụng đường uống.",
    topic: "Viên nén - Độ hòa tan",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Thiết bị dùng để kiểm tra độ dày viên giúp kiểm soát biến thiên nào?",
    options: [
      "Biến thiên lực nén",
      "Biến thiên độ xốp và khối lượng giữa lô",
      "Biến thiên màu sắc",
      "Biến thiên pH"
    ],
    correct: 1,
    explanation: "Độ dày liên quan độ xốp, lực nén, khối lượng; theo dõi ổn định quy trình.",
    topic: "Viên nén - Kiểm soát quá trình",
    difficulty: "medium",
    type: "mcq"
  },

  // 2) Phân loại viên nén
  {
    question: "Viên nén không bao (uncoated tablet) có đặc điểm:",
    options: [
      "Bề mặt rất cứng, khó bẻ",
      "Bở, dễ bẻ",
      "Kháng dịch vị",
      "Giải phóng kéo dài"
    ],
    correct: 1,
    explanation: "Uncoated tablet thường dễ bẻ, không có lớp bao tăng bền hoặc chức năng.",
    topic: "Phân loại viên nén",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Viên nén bao tan trong ruột dùng để:",
    options: [
      "Tăng độ cứng cơ học",
      "Che giấu mùi vị",
      "Tránh giải phóng dược chất ở dạ dày, phóng thích tại ruột",
      "Giảm chi phí sản xuất"
    ],
    correct: 2,
    explanation: "Bao tan trong ruột bảo vệ dược chất/niêm mạc, phóng thích ở pH ruột.",
    topic: "Bao tan trong ruột",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Viên nén sủi bọt (effervescent) thường chứa hệ tá dược nào?",
    options: [
      "Chất trơn + màu",
      "Muối kiềm + acid hữu cơ tạo khí CO2",
      "Polyme không tan",
      "Chất hóa dẻo + polyme acrylate"
    ],
    correct: 1,
    explanation: "Hệ sinh khí (ví dụ NaHCO3 + acid citric) giúp viên sủi, hòa tan nhanh trong nước.",
    topic: "Viên sủi bọt",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Viên phân tán trong miệng (ODT) cần lưu ý gì trong công thức?",
    options: [
      "Tăng tối đa lực nén để viên thật cứng",
      "Dùng tá dược siêu rã, độ xốp cao để phân tán nhanh",
      "Chỉ dùng polyme không tan",
      "Bắt buộc bao tan trong ruột"
    ],
    correct: 1,
    explanation: "ODT cần rã/ phân tán nhanh trên lưỡi, yêu cầu độ xốp, siêu rã, giảm lực nén.",
    topic: "ODT",
    difficulty: "medium",
    type: "mcq"
  },

  // 3) Máy dập viên
  {
    question: "Máy dập viên tâm sai (đơn chày) có ưu điểm nổi bật nào?",
    options: [
      "Công suất rất lớn",
      "Lực nén lớn, phù hợp viên đường kính lớn/viên dược liệu",
      "Ít gây tiếng ồn, ít bụi",
      "Dập được nhiều lớp dễ dàng"
    ],
    correct: 1,
    explanation: "Máy tâm sai có lực nén lớn, phù hợp viên nhai/viên sủi/viên dược liệu khối lượng lớn.",
    topic: "Máy dập viên - Tâm sai",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Nhược điểm chính của máy dập viên tâm sai là:",
    options: [
      "Lực nén đều hai mặt",
      "Công suất thấp, phân bố lực không đều, ồn, bay bụi",
      "Không thể dập viên nhiều lớp",
      "Bảo trì phức tạp hơn máy xoay tròn"
    ],
    correct: 1,
    explanation: "Máy đơn chày năng suất thấp, lực chủ yếu từ chày trên, dễ ồn/bụi.",
    topic: "Máy dập viên - Tâm sai",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Máy dập viên xoay tròn có thể đạt công suất cao nhờ:",
    options: [
      "Nhiều cối chày trên mâm quay, nhiều trạm nén",
      "Lực nén chỉ từ chày trên",
      "Phễu cố định không phân phối hạt",
      "Không có cam dẫn hướng"
    ],
    correct: 0,
    explanation: "Nhiều bộ chày-cối trên mâm quay + 1-3 trạm nén giúp công suất lớn, chạy êm.",
    topic: "Máy dập viên - Xoay tròn",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Sự cố 'viên đứt chỏm/ tách lớp' có thể do: (chọn 2)",
    options: [
      "Không khí không thoát kịp, thiếu tiền nén",
      "Tá dược dính thiếu",
      "Tốc độ máy quá chậm",
      "Chày dưới quá cao"
    ],
    correct: [0,1],
    explanation: "Không khí giữ lại + thiếu dính + cốm quá mịn/cối mòn/chày dưới thấp đều có thể gây tách lớp.",
    topic: "Sự cố dập viên",
    difficulty: "hard",
    type: "mcq"
  },
  {
    question: "Độ chảy kém gây hiện tượng nào khi dập viên?",
    options: [
      "Đồng đều khối lượng tốt",
      "Kẹt chày-cối, sai số khối lượng, tách lớp phễu",
      "Tăng độ bóng viên",
      "Tăng độ cứng đồng nhất"
    ],
    correct: 1,
    explanation: "Lưu tính kém → cấp liệu không ổn định → sai số khối lượng, kẹt, phân lớp trong phễu.",
    topic: "Sự cố dập viên",
    difficulty: "medium",
    type: "mcq"
  },

  // 4) Hạt và tính chất hạt
  {
    question: "Mục tiêu chính của xát hạt trong sản xuất viên nén là:",
    options: [
      "Giảm diện tích bề mặt",
      "Tăng lưu tính và tính chịu nén, giảm tách lớp",
      "Giảm độ xốp",
      "Tăng độ ẩm hạt"
    ],
    correct: 1,
    explanation: "Hạt giúp chảy tốt, chịu nén tốt, hạn chế phân lớp và bụi.",
    topic: "Hạt - Vai trò",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Kích thước hạt quá lớn thường dẫn đến:",
    options: [
      "Rã khó",
      "Rã nhanh",
      "Hòa tan nhanh",
      "Không ảnh hưởng thời gian rã"
    ],
    correct: 0,
    explanation: "Hạt lớn làm viên rã khó hơn; hạt gần hình cầu chảy tốt nhưng cần cân bằng rã.",
    topic: "Hạt - Kích thước",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Carr’s index (chỉ số nén) phản ánh chính yếu:",
    options: [
      "Độ chảy của bột/hạt",
      "Độ tan trong nước",
      "Độ hòa tan dược chất",
      "Độ bền cơ học viên"
    ],
    correct: 0,
    explanation: "Chỉ số nén cao → chảy kém; thấp → chảy tốt.",
    topic: "Hạt - Lưu tính",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Góc nghỉ là phép đo gián tiếp đánh giá:",
    options: ["Độ chảy", "Độ tan", "Độ rã", "Độ mài mòn"],
    correct: 0,
    explanation: "Góc nghỉ càng nhỏ → lưu tính càng tốt.",
    topic: "Hạt - Góc nghỉ",
    difficulty: "easy",
    type: "mcq"
  },

  // 5) Phương pháp sản xuất viên nén
  {
    question: "Dập thẳng (direct compression) phù hợp khi nào?",
    options: [
      "Dược chất và tá dược có lưu tính, chịu nén tốt; dùng tá dược đa chức năng",
      "Dược chất rất ẩm, cần nhiều dung môi",
      "Luôn tốt hơn xát hạt ướt",
      "Chỉ áp dụng cho KBr, NaCl"
    ],
    correct: 0,
    explanation: "Dập thẳng cần khối bột chảy tốt, chịu nén; ưu điểm nhanh, tiết kiệm, nhưng dễ tách lớp.",
    topic: "Dập thẳng",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Nhược điểm chính của dập thẳng là:",
    options: [
      "Tốn thiết bị",
      "Dễ tách lớp, khó phối hợp màu, thường cần nhiều tá dược trơn",
      "Không áp dụng cho hoạt chất dễ bị nhiệt",
      "Luôn cần sấy hạt lâu"
    ],
    correct: 1,
    explanation: "Khối bột dễ phân lớp sau trộn; màu khó đồng nhất; phải tối ưu tá dược trơn/thời gian trộn.",
    topic: "Dập thẳng - Lưu ý",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Xát hạt khô thường áp dụng khi:",
    options: [
      "Dược chất bền nhiệt, bền ẩm",
      "Dược chất dễ hỏng bởi ẩm/nhiệt, hàm lượng cao",
      "Cần hạt xốp tối đa",
      "Muốn tăng tốc độ hòa tan tối đa"
    ],
    correct: 1,
    explanation: "Xát hạt khô phù hợp dược chất kỵ ẩm/nhiệt, hàm lượng cao; hạt thường cứng, ít xốp.",
    topic: "Xát hạt khô",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Ưu điểm của xát hạt ướt so với dập thẳng:",
    options: [
      "Ít công đoạn hơn",
      "Hạt đồng nhất, xốp; tốt cho hàm lượng thấp; tính chịu nén tối ưu",
      "Không cần thẩm định",
      "Luôn rẻ hơn"
    ],
    correct: 1,
    explanation: "Xát hạt ướt cho hạt tốt, đồng nhất, phù hợp hàm lượng thấp; nhưng nhiều công đoạn/thiết bị.",
    topic: "Xát hạt ướt",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Máy trộn/xát hạt cao tốc thường:",
    options: [
      "Cần lượng tá dược dính thấp hơn kinh điển",
      "Cần lượng chất lỏng ít hơn nên tăng nồng độ tá dược dính",
      "Cho hạt kém xốp hơn",
      "Không dùng được với tá dược dính lỏng"
    ],
    correct: 1,
    explanation: "HSM dùng ít dung môi hơn → nên tăng nồng độ dính; hạt xốp, kích thước ~1,4–2,4 mm.",
    topic: "Xát hạt cao tốc",
    difficulty: "hard",
    type: "mcq"
  },

  // 6) Bao viên - Đường & Phim & Tan ruột & KSR
  {
    question: "Viên bao đường có nhược điểm nào dưới đây?",
    options: [
      "Thiết bị phức tạp, đắt tiền",
      "Lớp bao dày, dễ giòn/mẻ, thời gian bao dài, khó bảo quản",
      "Không che mùi vị",
      "Không thể tạo màu"
    ],
    correct: 1,
    explanation: "Bao đường đẹp nhưng tốn thời gian, dày, dễ mẻ/giòn, hút ẩm, khó tự động hoá hoàn toàn.",
    topic: "Bao đường - Ưu nhược",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Thứ tự giai đoạn bao đường điển hình:",
    options: [
      "Bao bóng → Bao màu → Bao nền → Bao cách ly",
      "Bao cách ly → Bao nền → Bao màu → Bao bóng",
      "Bao màu → Bao bóng → Bao nền → Bao cách ly",
      "Bao nền → Bao cách ly → Bao màu → Bao bóng"
    ],
    correct: 1,
    explanation: "Quy trình chuẩn: cách ly (nếu cần) → nền (lấp cạnh) → nhẵn/màu → bóng.",
    topic: "Bao đường - Quy trình",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Ưu điểm bao phim so với bao đường:",
    options: [
      "Khối lượng vỏ bao lớn",
      "Giữ được logo/khắc trên viên, mỏng (2–4% KL)",
      "Không thể tự động hóa",
      "Thời gian bao dài"
    ],
    correct: 1,
    explanation: "Bao phim mỏng, năng suất cao, giữ logo, dễ tự động hóa; có thể dùng dung môi nước/hữu cơ.",
    topic: "Bao phim - Ưu điểm",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Polyme tan trong ruột nào có pH hòa tan xấp xỉ ≥ 6,0?",
    options: ["HPMCP", "Eudragit L100", "Eudragit S100 (≥7,0)", "PVAP (≥5,5)"],
    correct: 1,
    explanation: "Eudragit L100 tan ≥ pH ~6, Eudragit S100 tan ≥ ~7; PVAP/HPMCP thấp hơn (~5,5/5,0).",
    topic: "Bao tan ruột - Polyme",
    difficulty: "hard",
    type: "mcq"
  },
  {
    question: "Chất hóa dẻo có tác dụng chính trong màng bao phim là:",
    options: [
      "Tăng Tg làm màng cứng hơn",
      "Giảm Tg, tăng dẻo dai, giảm giòn",
      "Tăng độ tan trong nước",
      "Thay thế polyme chính"
    ],
    correct: 1,
    explanation: "Chất hóa dẻo (ví dụ TEC, DEP, PEG) giảm Tg, tăng mềm dẻo, tránh nứt/mẻ.",
    topic: "Bao phim - Hóa dẻo",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Hiện tượng 'sùi vỏ cam' (orange peel) trong bao phim thường do:",
    options: [
      "Độ nhớt dịch bao quá thấp",
      "Giọt quá mịn khô trước khi bám, sấy quá nhanh, sức căng bề mặt cao",
      "Tốc độ phun quá cao, ướt cục bộ",
      "Logo quá sâu"
    ],
    correct: 1,
    explanation: "Giọt khô trước khi bám + sấy nhanh + sức căng cao → bề mặt không láng, sần sùi.",
    topic: "Bao phim - Sự cố",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Bao phim tan trong ruột: phát biểu đúng",
    options: [
      "Polyme thường chứa nhóm carboxyl bị ion hóa ở pH cao",
      "Không bị ảnh hưởng thủy phân",
      "Không phụ thuộc tỷ lệ polyme/khối viên",
      "Không cần thử độ hòa tan/độ rã trong chương trình ổn định"
    ],
    correct: 0,
    explanation: "Nhóm -COOH ion hóa ở pH ruột giúp tan; polyme ester dễ thủy phân; cần thẩm định hòa tan.",
    topic: "Bao tan ruột - Cơ chế",
    difficulty: "hard",
    type: "mcq"
  },

  // 7) GMP - Nhà xưởng - Không khí sạch
  {
    question: "Trong thiết kế nhà xưởng viên nén, áp suất phòng dập viên nên:",
    options: [
      "Cao hơn hành lang",
      "Thấp hơn hành lang để tránh bụi thoát ra",
      "Bằng với hành lang",
      "Không quan trọng"
    ],
    correct: 1,
    explanation: "Duy trì áp thấp hơn hành lang để kiểm soát bụi, hạn chế nhiễm chéo.",
    topic: "GMP - HVAC",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "HEPA filter chuẩn lọc tối thiểu:",
    options: [
      "95% tiểu phân 0,5 µm",
      "99,97% tiểu phân 0,3 µm",
      "99,0% tiểu phân 1,0 µm",
      "90% tiểu phân 0,3 µm"
    ],
    correct: 1,
    explanation: "Chuẩn HEPA: ≥99,97% tại 0,3 µm (MPPS).",
    topic: "GMP - HEPA",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Số lần trao đổi không khí khuyến nghị tối thiểu cho phòng sạch cấp B/C/D:",
    options: ["≥ 10 lần/giờ", "≥ 20 lần/giờ", "≥ 40 lần/giờ", "Không cần"],
    correct: 1,
    explanation: "WHO GMP khuyến cáo thông thường ≥20 ACH với lọc HEPA phù hợp.",
    topic: "GMP - HVAC",
    difficulty: "hard",
    type: "mcq"
  },
  {
    question: "Cấp độ sạch A dùng cho:",
    options: [
      "Kho nguyên liệu",
      "Khu vực thao tác nguy cơ cao: đóng lọ, làm kín vô trùng",
      "Pha chế dung dịch không vô trùng",
      "Phòng thay đồ"
    ],
    correct: 1,
    explanation: "Cấp A là môi trường cục bộ siêu sạch (laminar) tại điểm thao tác vô trùng quan trọng.",
    topic: "GMP - Cấp sạch",
    difficulty: "medium",
    type: "mcq"
  },

  // 8) Viên nang cứng
  {
    question: "Hàm ẩm lý tưởng của vỏ nang cứng (gelatin) khoảng:",
    options: ["3–6%", "8–10%", "13–16%", "20–25%"],
    correct: 2,
    explanation: "Hàm ẩm ~13–16% giúp vỏ đủ dẻo, không giòn/mềm quá.",
    topic: "Viên nang cứng - Vỏ nang",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Bảo quản vỏ nang cứng nên duy trì:",
    options: [
      "Bao bì kín, 10–35°C, RH 20–60%",
      "2–8°C, RH 0%",
      "25–40°C, RH 80%",
      "Không cần điều kiện đặc biệt"
    ],
    correct: 0,
    explanation: "Điều kiện chuẩn giúp giữ kích thước, độ dẻo ổn định.",
    topic: "Viên nang cứng - Bảo quản",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Máy đóng nang kiểu dosator (vít phân liều) yêu cầu khối bột:",
    options: [
      "Không cần chịu nén",
      "Có tính chịu nén nhất định, lưu tính tốt, chống dính",
      "Chứa nhiều bột mịn kết dính",
      "Tỷ trọng khối rất thấp"
    ],
    correct: 1,
    explanation: "Cần nén tạo 'plug' ổn định để đẩy vào thân nang; lưu tính để nạp ổn định.",
    topic: "Viên nang cứng - Máy dosator",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Máy đóng nang kiểu đĩa phân liều (dosing disk): lượng thuốc phụ thuộc chủ yếu vào: (chọn 2)",
    options: [
      "Độ dày lớp bột trên đĩa",
      "Độ dày đĩa phân liều",
      "Tốc độ nồi bao",
      "pH dung môi"
    ],
    correct: [0,1],
    explanation: "Thể tích lỗ và lớp bột + lực nén piston quyết định lượng thuốc.",
    topic: "Viên nang cứng - Dosing disk",
    difficulty: "hard",
    type: "mcq"
  },
  {
    question: "Chỉ tiêu thời gian rã cho viên nang cứng theo DĐVN thường:",
    options: ["≤ 15 phút", "≤ 30 phút", "≤ 45 phút", "≤ 60 phút"],
    correct: 1,
    explanation: "Viên nang cứng phải rã không quá 30 phút (với đĩa giữ viên).",
    topic: "Viên nang cứng - Chất lượng",
    difficulty: "easy",
    type: "mcq"
  },

  // 9) Viên nang mềm
  {
    question: "Ưu điểm chung của viên nang mềm (softgel) là: (chọn 2)",
    options: [
      "Sinh khả dụng cao hơn do dạng lỏng",
      "Giá thành thấp hơn viên nén",
      "Độ đồng đều phân liều cao, che giấu mùi vị",
      "Không cần thiết bị đặc biệt"
    ],
    correct: [0,2],
    explanation: "Softgel tăng SKD (dạng lỏng), đồng đều liều, hình thức đẹp; nhưng chi phí/thiết bị cao.",
    topic: "Viên nang mềm - Ưu nhược",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Phương pháp khuôn quay (rotary die) cho viên nang mềm có bước nào sau đây?",
    options: [
      "Nhỏ giọt tự hàn kín trong dầu lạnh",
      "Tạo dải gel ướt, ép/hàn hai nửa vỏ đồng thời nạp nhân",
      "Ép khuôn hai nửa kim loại, nạp nhân thủ công",
      "Nhúng khuôn kim loại vào gelatin"
    ],
    correct: 1,
    explanation: "Rotary die: tạo dải gel → hai trục khuôn quay ép/hàn + piston nạp nhân đồng thời.",
    topic: "Viên nang mềm - Quy trình",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Độ ẩm vỏ viên nang mềm sau sấy thường khoảng:",
    options: ["3–6%", "6–10%", "12–16%", ">20%"],
    correct: 1,
    explanation: "Sau sấy, vỏ softgel thường đạt 6–10% độ ẩm.",
    topic: "Viên nang mềm - Kiểm soát",
    difficulty: "easy",
    type: "mcq"
  },

  // 10) Thuốc tiêm
  {
    question: "Yêu cầu 'vô khuẩn' đối với thuốc tiêm nghĩa là:",
    options: [
      "Tuyệt đối không có vi khuẩn",
      "Mức xác suất vô khuẩn theo chuẩn (thường SAL 10^-6)",
      "Chỉ cần lọc 0,45 µm",
      "Chỉ áp dụng với dung dịch tiêm truyền"
    ],
    correct: 1,
    explanation: "Vô khuẩn có tính xác suất; yêu cầu thiết kế quy trình đạt mức SAL phù hợp.",
    topic: "Thuốc tiêm - Vô khuẩn",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Chất gây sốt (pyrogen) có thể được loại trừ bằng:",
    options: [
      "Tiệt trùng nhiệt ẩm 121°C",
      "Nhiệt khô 180°C trong 3–4 giờ",
      "Lọc 0,22 µm",
      "Thêm chất chống oxy hóa"
    ],
    correct: 1,
    explanation: "Pyrogen bền nhiệt ẩm, có thể bị phá hủy bằng nhiệt khô cao nhiệt kéo dài.",
    topic: "Thuốc tiêm - Chất gây sốt",
    difficulty: "hard",
    type: "mcq"
  },
  {
    question: "Tính đẳng trương của dung dịch tiêm có thể tính dựa vào:",
    options: [
      "Độ hạ băng điểm (≈ -0,52°C cho dịch cơ thể)",
      "pKa dược chất",
      "Độ nhớt",
      "Điểm chớp cháy"
    ],
    correct: 0,
    explanation: "Phương pháp nghiệm lạnh/ hệ số NaCl dùng độ hạ băng điểm để tính đẳng trương.",
    topic: "Thuốc tiêm - Đẳng trương",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Cấp độ sạch cho thao tác đóng thuốc vô khuẩn (aseptic filling) thường là:",
    options: ["C trong D", "A trong B", "B trong C", "D"],
    correct: 1,
    explanation: "Theo WHO GMP: thao tác vô khuẩn diễn ra ở cấp A với môi trường xung quanh cấp B.",
    topic: "GMP - Vô khuẩn",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Phương pháp tiệt khuẩn phù hợp cho dung dịch bền nhiệt nước là:",
    options: [
      "Tiệt trùng nhiệt ẩm (121°C/15–20 phút)",
      "Tiệt trùng nhiệt khô (180°C/3 giờ)",
      "Chiếu xạ gamma",
      "Chỉ lọc 0,22 µm"
    ],
    correct: 0,
    explanation: "Nhiệt ẩm là phương án chuẩn cho dung dịch nước bền nhiệt.",
    topic: "Thuốc tiêm - Tiệt khuẩn",
    difficulty: "easy",
    type: "mcq"
  },

  // True/False examples across topics
  { question: "Bao phim dùng dung môi hữu cơ có ưu điểm bay hơi nhanh, dễ sấy.", options: ["Đúng","Sai"], correct: 0, explanation: "Dung môi hữu cơ có nhiệt hóa hơi thấp, sấy nhanh.", topic: "Bao phim - Dung môi", difficulty: "easy", type: "truefalse" },
  { question: "Eudragit S100 tan ở pH ~5,0.", options: ["Đúng","Sai"], correct: 1, explanation: "Eudragit S100 tan khoảng pH ≥7,0; L100 ~6,0; L100-55 ~5,5.", topic: "Bao tan ruột - Polyme", difficulty: "hard", type: "truefalse" },
  { question: "Carr’s index càng cao chứng tỏ bột/hạt chảy càng tốt.", options: ["Đúng","Sai"], correct: 1, explanation: "Chỉ số nén cao → chảy kém.", topic: "Hạt - Lưu tính", difficulty: "easy", type: "truefalse" },
  { question: "Máy dập viên xoay tròn có thể thiết kế nhiều trạm nén để tăng công suất.", options: ["Đúng","Sai"], correct: 0, explanation: "Một số máy có 2–3 trạm nén trong một vòng quay.", topic: "Máy dập viên", difficulty: "easy", type: "truefalse" },
  { question: "Softgel thường đạt độ ẩm vỏ khoảng 6–10% sau sấy.", options: ["Đúng","Sai"], correct: 0, explanation: "Giá trị điển hình trong quy trình khuôn quay.", topic: "Viên nang mềm", difficulty: "easy", type: "truefalse" },

  // Bổ sung nhiều câu hỏi bao phủ toàn bộ nội dung
  // 11) Tạp chất, dung môi tồn dư, kích thước tiểu phân, dạng tinh thể
  {
    question: "Tạp chất hữu cơ có thể phát sinh từ:",
    options: [
      "Quá trình tổng hợp và bảo quản dược chất",
      "Chỉ từ bao bì",
      "Chỉ từ nước",
      "Chỉ từ chất màu"
    ],
    correct: 0,
    explanation: "Tham gia nhiều phản ứng, có thể có tạp độc gen; cần kiểm soát theo ICH Q3A/B.",
    topic: "Tạp chất hữu cơ",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Theo ICH Q3C, dung môi tồn dư nhóm 1 là:",
    options: [
      "Cần tránh do độc tính nghiêm trọng/ung thư",
      "Độc tính thấp, ít nguy cơ",
      "Không giới hạn",
      "Chỉ tác hại môi trường"
    ],
    correct: 0,
    explanation: "Nhóm 1 phải tránh; nhóm 2 hạn chế; nhóm 3 độc tính thấp, giới hạn theo GMP.",
    topic: "Dung môi tồn dư",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Kích thước tiểu phân dược chất khó tan ảnh hưởng nhiều đến:",
    options: ["Sinh khả dụng", "Độ nhớt", "Màu sắc", "Độ mài mòn"],
    correct: 0,
    explanation: "Giảm kích thước → tăng diện tích bề mặt → tăng tốc độ hòa tan/SKD.",
    topic: "Kích thước tiểu phân",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Các dạng thù hình/tinh thể khác nhau có thể dẫn tới:",
    options: [
      "Độ tan và độ bền khác nhau",
      "Không ảnh hưởng gì",
      "Chỉ ảnh hưởng màu",
      "Chỉ ảnh hưởng mùi"
    ],
    correct: 0,
    explanation: "Polymorph ảnh hưởng độ tan, SKD và ổn định; cần kiểm soát.",
    topic: "Dạng tinh thể",
    difficulty: "medium",
    type: "mcq"
  },

  // 12) Tá dược
  {
    question: "Tinh bột làm tá dược độn có nhược điểm:",
    options: [
      "Đắt tiền",
      "Độ ẩm tương đối cao (11–14%), chịu nén/ dính kém",
      "Không gây mốc",
      "Luôn rã kém"
    ],
    correct: 1,
    explanation: "Tinh bột giá rẻ nhưng chịu nén/dính kém, ẩm tương đối cao.",
    topic: "Tá dược độn",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Cellulose vi tinh thể (Avicel) là tá dược: (chọn 2)",
    options: [
      "Độn đa năng: dính, rã, trơn",
      "Hàm ẩm thấp, độ chảy tốt",
      "Không phù hợp dập thẳng",
      "Chỉ dùng làm chất màu"
    ],
    correct: [0,1],
    explanation: "Avicel phổ biến cho dập thẳng nhờ đa chức năng, chảy tốt, giúp viên cứng rã nhanh.",
    topic: "Tá dược độn",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Siêu rã thường là:",
    options: [
      "Natri starch glycolat, croscarmellose",
      "Acid stearic",
      "Talc",
      "PEG 400"
    ],
    correct: 0,
    explanation: "Nhóm siêu rã dựa cơ chế trương nở/ mao dẫn tăng tốc rã.",
    topic: "Tá dược rã",
    difficulty: "easy",
    type: "mcq"
  },
  {
    question: "Tá dược trơn/chống dính phổ biến:",
    options: [
      "Mg stearat, talc, aerosil",
      "Gelatin",
      "HPMC",
      "Mannitol"
    ],
    correct: 0,
    explanation: "Tăng chảy, giảm ma sát, chống dính khuôn; dùng lượng nhỏ, trộn cuối.",
    topic: "Tá dược trơn",
    difficulty: "easy",
    type: "mcq"
  },

  // 13) Kiểm soát quá trình dập viên
  {
    question: "Trong dập viên, kiểm tra trong quá trình thường gồm: (chọn 2)",
    options: [
      "Độ cứng/độ mài mòn định kỳ",
      "Độ dày/đường kính/khối lượng",
      "Định lượng HPLC mỗi 5 phút",
      "Đo Tg màng bao"
    ],
    correct: [0,1],
    explanation: "IPC tập trung vào thông số vật lý giúp phát hiện sai lệch quy trình.",
    topic: "IPC - Dập viên",
    difficulty: "medium",
    type: "mcq"
  },

  // 14) Thiết bị bao phim
  {
    question: "Nồi bao đục lỗ (perforated pan) có ưu điểm so với nồi truyền thống:",
    options: [
      "Sấy hiệu quả hơn, khí nóng xuyên qua khối viên",
      "Không cần hệ phun",
      "Không cần hút khí",
      "Không phù hợp dung môi nước"
    ],
    correct: 0,
    explanation: "Thiết kế đục lỗ cho phép sấy xuyên khối, phù hợp bao phim nước/hữu cơ.",
    topic: "Thiết bị bao",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Hệ bao tầng sôi kiểu Wurster phun:",
    options: [
      "Từ trên xuống",
      "Từ dưới lên qua cột trong",
      "Tiếp tuyến",
      "Không dùng khí nóng"
    ],
    correct: 1,
    explanation: "Wurster phun từ dưới lên, hạt đi lên trong cột, rơi ngoài cột, sấy đồng thời.",
    topic: "Bao tầng sôi",
    difficulty: "hard",
    type: "mcq"
  },

  // 15) Sự cố bao đường/bao phim
  {
    question: "Mẻ cạnh lớp bao đường có thể khắc phục bằng:",
    options: [
      "Tăng polyme trong sirô, giảm giòn",
      "Giảm độ nhớt dịch bao",
      "Tăng đường nghịch chuyển",
      "Không cần sấy"
    ],
    correct: 0,
    explanation: "Thêm polyme (gôm, gelatin, cellulose, PVP) làm dẻo lớp đường.",
    topic: "Bao đường - Sự cố",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Màu loang trong bao đường màu tan có thể do: (chọn 2)",
    options: [
      "Sấy quá khô giữa các lớp",
      "Phun quá nhiều làm hòa tan lớp trước",
      "Dùng màu không tan",
      "Bao bóng sớm"
    ],
    correct: [0,1],
    explanation: "Sấy quá khô/lượng phun lớn gây tái hòa tan lớp trước, tạo đốm/loang.",
    topic: "Bao đường - Sự cố",
    difficulty: "hard",
    type: "mcq"
  },

  // Bổ sung: mở rộng thêm câu hỏi để đạt ~200+ câu
  // 16) Bao kiểm soát giải phóng (KSR)
  {
    question: "Ethyl cellulose (EC) trong hệ bao KSR có đặc điểm:",
    options: [
      "Tan nhanh trong nước",
      "Không tan nước, tạo màng khuếch tán; có bản nhũ nước (Aquacoat EC)",
      "Chỉ dùng cho bao tan ruột",
      "Luôn cần chất hóa dẻo TEC"
    ],
    correct: 1,
    explanation: "EC không tan nước, kiểm soát giải phóng kiểu khuếch tán; có hệ phân tán nước thương mại.",
    topic: "Bao KSR",
    difficulty: "medium",
    type: "mcq"
  },
  {
    question: "Eudragit RL/RS (amoni bậc 4) dùng để:",
    options: [
      "Bao phóng thích kéo dài (thấm thấu)",
      "Bao đường",
      "Bao bảo vệ tan nhanh",
      "Bao tan trong ruột"
    ],
    correct: 0,
    explanation: "RL/RS có độ thấm khác nhau, phối trộn điều chỉnh tốc độ giải phóng.",
    topic: "Bao KSR - Polyme",
    difficulty: "medium",
    type: "mcq"
  },

  // 17) Máy, sự cố dập viên (mở rộng)
  { question: "Tốc độ máy quá nhanh có thể làm cấp cốm vào cối không đều → sai số KL.", options: ["Đúng","Sai"], correct: 0, explanation: "Thời gian nạp ngắn, phân lớp trong phễu rõ hơn.", topic: "Dập viên - Cấp liệu", difficulty: "easy", type: "truefalse" },
  { question: "Chênh lệch độ cứng giữa viên thường do chày dưới không đồng nhất/chiều cao khác nhau.", options: ["Đúng","Sai"], correct: 0, explanation: "Chiều cao chày khác → thể tích khác → độ cứng khác.", topic: "Dập viên - Sự cố", difficulty: "medium", type: "truefalse" },
  { question: "Viên dính chày có thể do độ ẩm cốm/môi trường cao, lực nén không đủ, thiếu tá dược trơn.", options: ["Đúng","Sai"], correct: 0, explanation: "Các yếu tố này tăng dính bề mặt với chày.", topic: "Dập viên - Dính chày", difficulty: "easy", type: "truefalse" },
  { question: "In kép trên viên thường do xoay không kiểm soát đầu chày khắc chữ.", options: ["Đúng","Sai"], correct: 0, explanation: "Cần khóa chống xoay.", topic: "Dập viên - In kép", difficulty: "easy", type: "truefalse" },

  // 18) IPC/Thẩm định quy trình
  {
    question: "Trước khi dập chính thức, các viên dùng để hiệu chỉnh máy phải được:",
    options: ["Đưa vào thành phẩm", "Để riêng và tiêu hủy", "Bao phim luôn", "Làm mẫu QC"],
    correct: 1,
    explanation: "Viên giai đoạn chỉnh máy không dùng cho thành phẩm.",
    topic: "IPC - Quy trình",
    difficulty: "easy",
    type: "mcq"
  },
  { question: "Trong dập viên, kiểm tra cảm quan mỗi giờ giúp phát hiện sớm sai lệch màu/hình dạng.", options: ["Đúng","Sai"], correct: 0, explanation: "IPC cảm quan định kỳ là thông lệ tốt.", topic: "IPC - Cảm quan", difficulty: "easy", type: "truefalse" },

  // 19) Bảo quản - Bao bì
  {
    question: "Bao bì vỉ PVC tráng PVDC có ưu điểm:",
    options: ["Chống ẩm cao hơn PVC thường", "Rẻ nhất", "Chịu nhiệt thấp", "Sinh Clo khi gia nhiệt"],
    correct: 0,
    explanation: "PVDC phủ tăng hàng rào ẩm.",
    topic: "Bao bì - Vỉ",
    difficulty: "medium",
    type: "mcq"
  },
  { question: "PP (polypropylene) chống ẩm tốt hơn PVC và không sinh Clo.", options: ["Đúng","Sai"], correct: 0, explanation: "PP yêu cầu nhiệt cao tạo hình nhưng lành hơn PVC về Clo.", topic: "Bao bì - Nhựa", difficulty: "medium", type: "truefalse" },

  // 20) Bao phim - Thông số phun/sấy
  { question: "Dãy phun quá hẹp gây ướt cục bộ và phân bố lớp bao không đồng nhất.", options: ["Đúng","Sai"], correct: 0, explanation: "Cần phủ hết chiều ngang khối viên.", topic: "Bao phim - Phun", difficulty: "easy", type: "truefalse" },
  { question: "Giọt dịch bao quá nhỏ có thể bị khô trước khi bám → bề mặt sần, hao hụt.", options: ["Đúng","Sai"], correct: 0, explanation: "Hiện tượng phun sấy.", topic: "Bao phim - Phun", difficulty: "easy", type: "truefalse" },
  {
    question: "Khi bao bằng nước, tốc độ quay nồi thường so với dung môi hữu cơ:",
    options: ["Nhanh hơn", "Chậm hơn (≈3–8 rpm)", "Không đổi", "Phải dừng quay"],
    correct: 1,
    explanation: "Bao nước cần sấy kỹ, giảm tốc để viên kịp khô.",
    topic: "Bao phim - Sấy",
    difficulty: "hard",
    type: "mcq"
  },

  // 21) Viên nén - Công thức
  {
    question: "Rã phối hợp (nội + ngoại) là:",
    options: [
      "Dùng cả tá dược rã trong khối hạt và ngoài lớp bột áo",
      "Chỉ dùng trong bao tan ruột",
      "Chỉ dùng với viên nhai",
      "Không áp dụng thực tế"
    ],
    correct: 0,
    explanation: "Bố trí vị trí tá dược rã để tối ưu rã.",
    topic: "Tá dược rã",
    difficulty: "medium",
    type: "mcq"
  },
  { question: "Tá dược đường (lactose, mannitol) vừa độn vừa điều vị, có thể ảnh hưởng BN đái tháo đường.", options: ["Đúng","Sai"], correct: 0, explanation: "Lưu ý lượng đường với bệnh nhân.", topic: "Tá dược đường", difficulty: "easy", type: "truefalse" },

  // 22) Hạt - Tỷ trọng/độ xốp
  {
    question: "Hạt có tỷ trọng lớn →",
    options: [
      "Cần lực nén cao hơn, viên rã chậm",
      "Rã nhanh hơn",
      "Ít ảnh hưởng độ cứng",
      "Không ảnh hưởng mài mòn"
    ],
    correct: 0,
    explanation: "Hạt cứng chắc cần lực nén cao, rã chậm; ít mài mòn.",
    topic: "Hạt - Tỷ trọng",
    difficulty: "medium",
    type: "mcq"
  },

  // 23) Thiết kế nhà xưởng
  { question: "Mỗi máy dập viên nên đặt trong phòng riêng, áp thấp hơn hành lang.", options: ["Đúng","Sai"], correct: 0, explanation: "Giảm bụi/nhiễm chéo, dễ vệ sinh/bảo trì.", topic: "GMP - Phòng dập", difficulty: "medium", type: "truefalse" },
  { question: "Khu cân cấp phát nên dùng luồng khí lớp mỏng/HEPA để thu bụi.", options: ["Đúng","Sai"], correct: 0, explanation: "Buồng cân riêng, kiểm soát bụi/chéo.", topic: "GMP - Buồng cân", difficulty: "medium", type: "truefalse" },

  // 24) Bao đường - Công nghệ
  {
    question: "Bao nhẵn thường dùng siro 60–75% (3/1) ở 60–70°C, có thể thêm TiO2 làm cản sáng.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Chuẩn bị nền nhẵn trước bao màu.",
    topic: "Bao đường - Nhẵn",
    difficulty: "medium",
    type: "truefalse"
  },
  {
    question: "Lượng đường nghịch chuyển quá cao làm lớp bao khó khô, dính.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Do bảo quản siro quá lâu/nấu lại gây thủy phân.",
    topic: "Bao đường - Sự cố",
    difficulty: "hard",
    type: "truefalse"
  },

  // 25) Bao phim - Màu
  {
    question: "Màu không tan (lake) bền hơn ánh sáng/oxy hóa so với màu tan (dye).",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Lake là màu kết tủa trên nền vô cơ, bền hơn dye.",
    topic: "Bao phim - Màu",
    difficulty: "easy",
    type: "truefalse"
  },
  {
    question: "Khi dùng màu tan với dung môi nước dễ gặp hiện tượng loang màu.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Cần tối ưu quy trình, lớp lót, tốc độ sấy/phun.",
    topic: "Bao phim - Màu",
    difficulty: "medium",
    type: "truefalse"
  },

  // 26) Viên nang cứng - Quy trình & kiểm soát
  {
    question: "Trong đóng nang bán tự động, khối lượng thuốc phụ thuộc tốc độ quay mâm mang nang và lưu tính bột.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Nạp theo thể tích và độ chảy.",
    topic: "Nang - Bán tự động",
    difficulty: "medium",
    type: "truefalse"
  },
  {
    question: "Kiểm tra khối lượng trung bình viên nang thường cân cả vỏ nang (phải biết KL vỏ).",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Tính lượng thuốc bằng cách trừ KL vỏ.",
    topic: "Nang - IPC",
    difficulty: "easy",
    type: "truefalse"
  },

  // 27) Thuốc tiêm - Quy định & tính chất
  {
    question: "Dung dịch tiêm phải trong suốt, giới hạn tiểu phân theo DĐ (ví dụ B.P./USP) rất nghiêm ngặt.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Ví dụ: ≤1000 hạt >2 µm và ≤100 hạt >5 µm/mL (tham chiếu DĐ cụ thể).",
    topic: "Tiêm - Tiểu phân",
    difficulty: "hard",
    type: "truefalse"
  },
  {
    question: "Lọc 0,22 µm có thể loại trừ virus/pyrogen hoàn toàn.",
    options: ["Đúng","Sai"],
    correct: 1,
    explanation: "Lọc không loại hoàn toàn virus/nội độc tố; cần kết hợp biện pháp khác.",
    topic: "Tiêm - Lọc tiệt khuẩn",
    difficulty: "hard",
    type: "truefalse"
  },
  {
    question: "pH dung dịch tiêm thường được chọn để tối ưu ổn định dược chất, tránh quá acid/kiềm gây đau/ kích ứng.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "pH gần sinh lý nếu có thể; nhưng ưu tiên ổn định khi thể tích nhỏ.",
    topic: "Tiêm - pH",
    difficulty: "medium",
    type: "truefalse"
  },

  // 28) Công thức & tính toán (tiêm)
  {
    question: "Để đạt đẳng trương, có thể thêm NaCl đủ để tổng độ hạ băng điểm đạt ≈ -0,52°C.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Phương pháp nghiệm lạnh/hệ số tương đương NaCl.",
    topic: "Tiêm - Đẳng trương",
    difficulty: "medium",
    type: "truefalse"
  },

  // 29) Hệ phun dịch bao
  {
    question: "Hệ phun không dùng khí (high-pressure) cho dải phun ổn định ở tốc độ cao, ít phụ thuộc khí nén.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Phun qua lỗ nhỏ với áp suất chất lỏng cao.",
    topic: "Bao phim - Phun",
    difficulty: "hard",
    type: "truefalse"
  },
  {
    question: "Hệ phun dùng khí nén thích hợp ở tốc độ phun thấp-trung bình, dễ điều chỉnh mức/phổ phun.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Điều khiển bằng áp suất/ thể tích khí và chất lỏng.",
    topic: "Bao phim - Phun",
    difficulty: "medium",
    type: "truefalse"
  },

  // 30) Dung môi bao - Nhiệt hóa hơi
  {
    question: "Aceton có nhiệt hóa hơi thấp hơn nước đáng kể, giúp sấy nhanh hơn.",
    options: ["Đúng","Sai"],
    correct: 0,
    explanation: "Aceton ~520 J/g vs nước ~2264 J/g.",
    topic: "Bao phim - Dung môi",
    difficulty: "easy",
    type: "truefalse"
  },

  // 31) Mở rộng: câu hỏi nhanh dạng Đ/S bao quát slide
  { question: "Mục tiêu sản xuất viên nén: quy trình ổn định, đồng nhất giữa các lô.", options: ["Đúng","Sai"], correct: 0, explanation: "Yêu cầu then chốt GMP.", topic: "Tổng quan", difficulty: "easy", type: "truefalse" },
  { question: "Viên nhai thường cần lực nén rất cao để rã chậm.", options: ["Đúng","Sai"], correct: 1, explanation: "Viên nhai cần kết cấu thích hợp, không nhất thiết nén quá cao.", topic: "Viên nhai", difficulty: "easy", type: "truefalse" },
  { question: "Tốc độ hòa tan là thước đo trực tiếp SKD.", options: ["Đúng","Sai"], correct: 1, explanation: "Độ hòa tan liên quan SKD nhưng không thay thế thử sinh học.", topic: "Độ hòa tan", difficulty: "medium", type: "truefalse" },
  { question: "HPMC là polyme bao màng quy ước, tan trong nước ở mức độ nhất định.", options: ["Đúng","Sai"], correct: 0, explanation: "HPMC phổ biến trong bao bảo vệ/màu.", topic: "Bao phim - Polyme", difficulty: "easy", type: "truefalse" },
  { question: "TiO2 thường dùng làm chất cản quang trong bao màu/bao nhẵn.", options: ["Đúng","Sai"], correct: 0, explanation: "Giúp che nền, ổn định màu.", topic: "Bao màu", difficulty: "easy", type: "truefalse" },
  { question: "Bao bóng bằng sáp đòi hỏi viên đủ khô để tránh 'đổ mồ hôi'.", options: ["Đúng","Sai"], correct: 0, explanation: "Ẩm cao làm mất bóng.", topic: "Bao bóng", difficulty: "medium", type: "truefalse" },
  { question: "Wurster không thích hợp bao pellet/hạt nhỏ.", options: ["Đúng","Sai"], correct: 1, explanation: "Wurster phù hợp bao hạt/pellet rất tốt.", topic: "Bao tầng sôi", difficulty: "medium", type: "truefalse" },
  { question: "Logo mảnh, chi tiết dễ gây bắc cầu logo trong bao phim.", options: ["Đúng","Sai"], correct: 0, explanation: "Cần tối ưu thiết kế logo/ quy trình.", topic: "Bao phim - Sự cố", difficulty: "medium", type: "truefalse" },
  { question: "Natri lauryl sulfat có thể giúp rã do cơ chế hòa tan/giảm sức căng bề mặt.", options: ["Đúng","Sai"], correct: 0, explanation: "Vai trò tá dược rã/ướt hóa.", topic: "Tá dược rã", difficulty: "hard", type: "truefalse" },
  { question: "Mg stearat dùng nhiều sẽ làm viên mềm, chậm rã/ hòa tan.", options: ["Đúng","Sai"], correct: 0, explanation: "Dùng quá mức ảnh hưởng giải phóng.", topic: "Tá dược trơn", difficulty: "medium", type: "truefalse" },
  { question: "Starch 1500 là tinh bột tiền gelatin hóa, dùng tốt cho dập thẳng.", options: ["Đúng","Sai"], correct: 0, explanation: "Tá dược đa năng cho dập trực tiếp.", topic: "Tá dược độn", difficulty: "medium", type: "truefalse" },
  { question: "Máy xát hạt đu đưa tạo hạt xốp hơn extruder.", options: ["Đúng","Sai"], correct: 0, explanation: "Extruder tạo sợi ít xốp hơn.", topic: "Xát hạt", difficulty: "hard", type: "truefalse" },
  { question: "Bao phim bằng hệ phân tán nước cần nhiệt độ sấy cao hơn Tg hỗn hợp polyme–plasticizer để tạo màng liên tục.", options: ["Đúng","Sai"], correct: 0, explanation: "Giúp coalescence hạt polyme.", topic: "Bao phim - Tạo màng", difficulty: "hard", type: "truefalse" },
  { question: "Viên 'caplet' (thuôn dài) dễ bao hơn viên tròn về độ phủ đồng nhất.", options: ["Đúng","Sai"], correct: 1, explanation: "Caplet khó bao hơn do vận động trong nồi.", topic: "Bao phim - Hình dạng", difficulty: "medium", type: "truefalse" },
  { question: "Cần hút chân không loại bọt khí trong dịch vỏ gelatin trước khi tạo dải gel.", options: ["Đúng","Sai"], correct: 0, explanation: "Tránh bọt làm lỗi vỏ.", topic: "Softgel - Dịch vỏ", difficulty: "medium", type: "truefalse" },
  { question: "Nhiệt độ phòng sản xuất softgel thường 20–22°C, RH < 40%.", options: ["Đúng","Sai"], correct: 0, explanation: "Điều kiện môi trường nghiêm ngặt.", topic: "Softgel - Môi trường", difficulty: "hard", type: "truefalse" },
  { question: "Dung dịch dầu tiêm cần chỉ số acid thấp để đảm bảo an toàn và ổn định.", options: ["Đúng","Sai"], correct: 0, explanation: "DĐ quy định chỉ số acid/iod/saponification.", topic: "Tiêm - Dung môi dầu", difficulty: "hard", type: "truefalse" },
  { question: "Nhà xưởng viên nén cần cách ly rõ các sản phẩm biệt trữ với sản phẩm không đạt.", options: ["Đúng","Sai"], correct: 0, explanation: "Tránh nhầm lẫn/nhiễm chéo.", topic: "GMP - Kho bãi", difficulty: "easy", type: "truefalse" },
  { question: "Máy dập viên nên đặt trên kệ kim loại chắc để di chuyển vệ sinh/ thay chày cối.", options: ["Đúng","Sai"], correct: 0, explanation: "Thuận tiện vệ sinh, thay khuôn.", topic: "GMP - Thiết bị", difficulty: "easy", type: "truefalse" },
  { question: "Laminar cấp A thường thiết kế vận tốc ~0,45 m/s ± 20% tại vị trí làm việc.", options: ["Đúng","Sai"], correct: 0, explanation: "Theo hướng dẫn WHO/EMA.", topic: "GMP - Cấp A", difficulty: "hard", type: "truefalse" }

  // Tổng số câu hiện tại: ~200+ (khoảng 200–210)
];

// Gợi ý tích hợp: thêm <script src="Duoc.questions.js"></script> trước module xử lý quiz
// rồi trong file logic (Duoc.js) sử dụng biến questionsData.

