// Dữ liệu câu hỏi từ đề bài
const questionsData = [
  // =====================
  // CHƯƠNG 1
  // =====================
  {
    question: "1. Chế độ chính trị được hiểu như thế nào?",
    options: [
      "Là tất cả các thiết chế chính trị trong xã hội.",
      "Là toàn bộ đường lối, chính sách mà Đảng chính trị cầm quyền đề ra.",
      "Là đường lối, chính sách của Đảng đã được nhà nước thể chế hóa thành pháp luật",
      "Là tổng thể các phương pháp và biện pháp để thực hiện quyền lực nhà nước.",
    ],
    correct: 3,
  },
  {
    question: "2. Nhà nước Nhật Bản thuộc hình thức cấu trúc nào?",
    options: [
      "Nhà nước xã hội chủ nghĩa.",
      "Nhà nước liên minh",
      "Nhà nước đơn nhất.",
      "Nhà nước liên bang.",
    ],
    correct: 2,
  },
  {
    question:
      "3. Nhà nước do giai cấp thống trị lập nên để bảo vệ quyền và lợi ích của giai cấp mình là quan điểm của học thuyết nào?",
    options: ["Thuyết gia trưởng.", "Thuyết thần học.", "Học thuyết Mác - Lênin.", "Thuyết khế ước xã hội."],
    correct: 2,
  },
  {
    question:
      "4. Khi nghiên cứu về nguồn gốc Nhà nước, học thuyết cho rằng sự ra đời của nhà nước là do nhu cầu tâm lý của con người nguyên thuỷ luôn luôn mong muốn phụ thuộc vào thủ lĩnh, giáo sĩ,… là quan điểm của học thuyết nào?",
    options: ["Thuyết bạo lực.", "Thuyết tâm lý.", "Thuyết khế ước xã hội.", "Thuyết thần học."],
    correct: 1,
  },
  {
    question: "5. Nguyên nhân cốt lõi của sự ra đời nhà nước là gì?",
    options: [
      "Kết quả của 03 lần phân công lao động trong lịch sử.",
      "Kết quả của nền sản xuất hàng hoá cùng những hoạt động thương nghiệp.",
      "Nhu cầu về sự cần thiết phải có một tổ chức thay thế thị tộc - bộ lạc.",
      "Sự hình thành chế độ tư hữu, giai cấp và lợi ích giai cấp đối lập nhau.",
    ],
    correct: 3,
  },
  {
    question:
      "6. Người đứng đầu cơ quan kiểm sát trong bộ máy nhà nước của Việt Nam là:",
    options: [
      "Chánh án Tòa án nhân dân tối cao.",
      "Viện trưởng Viện kiểm sát nhân dân tối cao.",
      "Chủ tịch Quốc hội.",
      "Chủ tịch nước.",
    ],
    correct: 1,
  },
  {
    question: "7. Bản chất chung của nhà nước gồm bản chất nào?",
    options: [
      "Tính nhân dân và tính dân tộc.",
      "Tính giai cấp và tính xã hội.",
      "Tính giai cấp và tính quốc tế.",
      "Tính xã hội và tính dân tộc.",
    ],
    correct: 1,
  },
  {
    question: "8. Yếu tố nào dưới đây là đặc trưng của Nhà nước?",
    options: [
      "Phân phối bình đẳng của cải làm ra.",
      "Tiến hành thu các loại thuế.",
      "Phân chia và quản lý dân cư theo huyết thống.",
      "Thiết lập quyền lực công gắn liền với xã hội.",
    ],
    correct: 3,
  },
  {
    question:
      "9. Cách thức và trình tự thành lập ra các cơ quan quyền lực tối cao của nhà nước được gọi là gì?",
    options: ["Hình thức cấu trúc.", "Hình thức nhà nước.", "Hình thức chính thể.", "Chế độ chính trị."],
    correct: 2,
  },
  {
    question: "10. Hình thức chính thể quân chủ chuyên chế được hiểu như thế nào?",
    options: [
      "Quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử phổ thông.",
      "Toàn bộ quyền lực nhà nước tập trung vào tay một người đứng đầu là vua hoặc nữ hoàng.",
      "Quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử nhưng chỉ tầng lớp quý tộc mới được tham gia bầu cử.",
      "Bên cạnh nhà vua (nữ hoàng) có một cơ quan được thành lập theo quy định của hiến pháp để hạn chế quyền lực của nhà vua (nữ hoàng).",
    ],
    correct: 1,
  },
  {
    question: "11. Chế độ chính trị của nhà nước Việt Nam là chế độ nào sau đây?",
    options: ["Phản dân chủ.", "Dân chủ xã hội chủ nghĩa.", "Dân chủ chủ nô.", "Dân chủ quý tộc."],
    correct: 1,
  },
  {
    question: "12. Cơ quan quyền lực cao nhất của nhà nước CHXHCN Việt Nam là:",
    options: ["Tòa án nhân dân tối cao.", "Quốc hội.", "Chính phủ.", "Chủ tịch nước."],
    correct: 1,
  },
  {
    question:
      "13. Đẩy mạnh cải cách thủ tục hành chính, tăng cường hiệu quả hoạt động của bộ máy nhà nước là hoạt động thể hiện điều gì của nhà nước?",
    options: [
      "Chức năng đối nội của Nhà nước.",
      "Quyền hạn của Nhà nước",
      "Bản chất của Nhà nước.",
      "Chức năng đối ngoại của Nhà nước.",
    ],
    correct: 0,
  },
  {
    question:
      "14. Kho bạc nhà nước trong bộ máy nhà nước Việt Nam là cơ quan thuộc:",
    options: [
      "Hệ thống cơ quan Quyền lực nhà nước",
      "Hệ thống cơ quan Xét xử.",
      "Hệ thống cơ quan Hành chính nhà nước.",
      "Hệ thống cơ quan Kiểm sát.",
    ],
    correct: 2,
  },
  {
    question:
      "15. Việc tổ chức, thực hiện quyền lực nhà nước ở nước CHXHCN Việt Nam theo nguyên tắc nào?",
    options: [
      "Tập quyền.",
      "Phân quyền.",
      "Tam quyền phân lập.",
      "Phân công, phân nhiệm và phối hợp trong việc thực hiện quyền lực nhà nước.",
    ],
    correct: 3,
  },

  // =====================
  // CHƯƠNG 2
  // =====================
  {
    question: "1. Pháp luật được hiểu là gì?",
    options: [
      "Những quy định mang tính định hướng cho mọi người trong xã hội lựa chọn.",
      "Những quy định mang tính cưỡng chế đối với các cơ quan, tổ chức trong xã hội.",
      "Những quy định do cơ quan nhà nước ban hành để giải quyết các tranh chấp cụ thể.",
      "Những quy tắc xử sự mang tính bắt buộc chung do nhà nước đặt ra hoặc thừa nhận, được nhà nước bảo đảm thực hiện.",
    ],
    correct: 3,
  },
  {
    question:
      "2. Pháp luật được hình thành bằng cách nhà nước sáng tạo ra các quy phạm pháp luật mới được gọi là hình thức pháp luật gì?",
    options: ["Tập quán pháp.", "Án lệ.", "Tiền lệ pháp.", "Văn bản quy phạm pháp luật."],
    correct: 3,
  },
  {
    question: "3. Pháp luật xuất hiện là do yếu tố nào?",
    options: [
      "Xuất phát từ những phong tục, tập quán, tín điều tôn giáo trong xã hội.",
      "Xuất phát từ ý chí của giai cấp thống trị trong xã hội.",
      "Nhà nước đặt ra hoặc thừa nhận.",
      "Nhà nước đặt ra.",
    ],
    correct: 2,
  },
  {
    question:
      "4. Theo quan điểm của Chủ nghĩa Mác - Lênin thì nguyên nhân chủ yếu làm xuất hiện Pháp luật là?",
    options: [
      "Do có sự phân chia giai cấp và đấu tranh giai cấp trong xã hội.",
      "Do có sự phân hóa lao động trong xã hội.",
      "Do các thành viên trong xã hội có mong muốn lập ra.",
      "Do có thị tộc mạnh hơn xâm chiếm thị tộc yếu hơn và đặt ra quy tắc để thống trị thị tộc bị xâm chiếm đó.",
    ],
    correct: 0,
  },
  {
    question: "5. Kiểu pháp luật tư sản thể hiện ý chí của chủ thể nào?",
    options: ["Giai cấp địa chủ.", "Giai cấp tư sản.", "Giai cấp nông nô.", "Giai cấp chủ nô."],
    correct: 1,
  },
  {
    question:
      "6. Khi nghiên cứu về bản chất của pháp luật, thì khẳng định nào sau đây là SAI?",
    options: [
      "Pháp luật vừa mang tính chủ quan lại vừa mang tính khách quan.",
      "Pháp luật là ý chí giai cấp thống trị được đề lên thành luật.",
      "Pháp luật bao giờ cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội.",
      "Pháp luật là hiện tượng vừa mang tính giai cấp vừa mang tính xã hội.",
    ],
    correct: 2,
  },
  {
    question: "7. Trong lịch sử đã xuất hiện những kiểu pháp luật nào?",
    options: [
      "Pháp luật chủ nô, pháp luật phong kiến.",
      "Pháp luật chủ nô, pháp luật phong kiến, pháp luật tư sản.",
      "Pháp luật chủ nô, pháp luật phong kiến, pháp luật tư sản, pháp luật xã hội chủ nghĩa.",
      "Pháp luật cộng sản nguyên thủy.",
    ],
    correct: 2,
  },
  {
    question: "8. Trong lịch sử loài người, đã có các hình thức pháp luật nào?",
    options: [
      "Tập quán pháp, văn bản quy phạm pháp luật.",
      "Tập quán pháp, tiền lệ pháp, văn bản quy phạm pháp luật.",
      "Tập quán pháp, tiền lệ pháp, điều lệ pháp, văn bản quy phạm pháp luật.",
      "Tập quán pháp, tiền lệ pháp.",
    ],
    correct: 1,
  },
  {
    question:
      "9. Hình thức pháp luật nào xuất hiện sớm nhất và được sử dụng nhiều trong nhà nước chủ nô?",
    options: ["Văn bản quy phạm pháp luật.", "Điều lệ pháp.", "Tập quán pháp.", "Tiền lệ pháp."],
    correct: 2,
  },
  {
    question:
      "10. Khi nghiên cứu về bản chất pháp luật thì khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Bất cứ pháp luật nào cũng thể hiện bản chất xã hội rõ nét hơn bản chất giai cấp.",
      "Bất cứ pháp luật nào cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội.",
      "Bất cứ pháp luật nào cũng chỉ là hệ thống quy tắc xử sự dùng để duy trì sự thống trị của giai cấp này đối với giai cấp khác.",
      "Bất cứ pháp luật nào cũng đều thể hiện bản chất giai cấp và bản chất xã hội.",
    ],
    correct: 3,
  },
  {
    question:
      "11. Đề cập về mối quan hệ giữa pháp luật và kinh tế, khẳng định nào sau đây là SAI?",
    options: [
      "Pháp luật giữ vai trò quyết định đối với kinh tế.",
      "Pháp luật có tính độc lập tương đối đối với kinh tế.",
      "Kinh tế giữ vai trò quyết định đối với pháp luật.",
      "Pháp luật có thể tác động đến kinh tế theo hướng tích cực hoặc tiêu cực.",
    ],
    correct: 0,
  },
  {
    question:
      "12. Đề cập về mối quan hệ giữa pháp luật và nhà nước, khẳng định nào sau đây là SAI?",
    options: [
      "Pháp luật và nhà nước đều là hai yếu tố thuộc kiến trúc thượng tầng.",
      "Pháp luật là phương tiện để tổ chức và thực hiện quyền lực nhà nước.",
      "Nhà nước đứng trên pháp luật vì nhà nước ban hành ra pháp luật.",
      "Pháp luật và nhà nước có mối quan hệ tác động qua lại lẫn nhau.",
    ],
    correct: 2,
  },
  {
    question: "13. Luật giáo dục do cơ quan nào sau đây ban hành?",
    options: ["Chính phủ.", "Quốc hội.", "Bộ Giáo dục và Đào tạo.", "Ủy ban thường vụ Quốc hội."],
    correct: 1,
  },
  {
    question: "14. Pháp luật và kinh tế có mối quan hệ như thế nào?",
    options: [
      "Pháp luật quyết định đến kinh tế.",
      "Pháp luật tác động tích cực vào kinh tế.",
      "Kinh tế quyết định pháp luật.",
      "Pháp luật tác động tiêu cực vào kinh tế.",
    ],
    correct: 2,
  },
  {
    question:
      "15. Trong các đạo luật/bộ luật sau, luật nào không thuộc kiểu pháp luật chủ nô?",
    options: [
      "Bộ luật Hammurabi của nhà nước Babilon.",
      "Bộ luật Manu của nhà nước Ấn Độ",
      "Luật mười hai bảng của nhà nước Hy Lạp.",
      "Quốc triều hình luật của nhà nước Đại Việt.",
    ],
    correct: 3,
  },

  // =====================
  // CHƯƠNG 3
  // =====================
  {
    question: "1. Xác định cơ quan có thẩm quyền ban hành Lệnh.",
    options: ["Quốc hội", "Thanh tra Chính phủ.", "Chính phủ.", "Chủ tịch nước."],
    correct: 3,
  },
  {
    question: "2. Xác định cơ quan có thẩm quyền ban hành Quyết định quy phạm pháp luật.",
    options: ["Ủy ban nhân dân.", "Bộ trưởng.", "Hội đồng thẩm phán Tòa án nhân dân tối cao.", "Chính phủ"],
    correct: 0,
  },
  {
    question:
      "3. Trong xã hội có giai cấp, quy phạm nào sau đây có vai trò quan trọng nhất đối với việc duy trì trật tự xã hội?",
    options: ["Quy phạm tập quán", "Quy phạm pháp luật", "Quy phạm tôn giáo.", "Quy phạm đạo đức."],
    correct: 1,
  },
  {
    question:
      "4. Bộ phận nào của quy phạm pháp luật nhằm bảo đảm cho pháp luật được thực hiện nghiêm chỉnh?",
    options: ["Chế tài.", "Chế định.", "Quy định.", "Giả định."],
    correct: 0,
  },
  {
    question: "5. Xác định cơ quan có thẩm quyền ban hành Thông tư.",
    options: [
      "Chủ tịch nước.",
      "Viện trưởng Viện kiểm sát nhân dân tối cao.",
      "Ủy ban nhân dân.",
      "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
    ],
    correct: 1,
  },
  {
    question:
      "6. A thực hiện hành vi giết B ngày 01/02/2016. Xác định văn bản pháp luật áp dụng để xử lý hành vi của A?",
    options: [
      "Bộ luật hình sự năm 1985 được thông qua ngày 27/6/1985, có hiệu lực từ ngày 01/01/1986.",
      "Bộ luật hình sự năm 1999 được thông qua ngày 21/12/1999, có hiệu lực từ ngày 01/7/2000.",
      "Bộ luật hình sự năm 2015 được thông qua ngày 27/11/2015, có hiệu lực từ ngày 01/01/2018.",
      "Luật sửa đổi, bổ sung một số điều của Bộ luật hình sự năm 2015, được thông qua ngày 20/6/2017, có hiệu lực từ 01/01/2018.",
    ],
    correct: 1,
  },
  {
    question: "7. Lựa chọn loại Văn bản quy phạm pháp luật do Chủ tịch nước ban hành?",
    options: ["Nghị định.", "Thông tư.", "Chỉ thị.", "Lệnh."],
    correct: 3,
  },
  {
    question:
      "8. Lựa chọn loại Văn bản quy phạm pháp luật do Thủ tướng Chính phủ ban hành?",
    options: ["Thông tư.", "Chỉ thị.", "Quyết định.", "Nghị định."],
    correct: 2,
  },
  {
    question: "9. Quy phạm pháp luật do chủ thể nào ban hành?",
    options: [
      "Do các cơ quan Nhà nước ban hành.",
      "Do tổ chức chính trị xã hội ban hành.",
      "Do cơ quan Nhà nước có thẩm quyền ban hành hoặc phối hợp ban hành.",
      "Cơ quan Nhà nước có thẩm quyền ban hành.",
    ],
    correct: 3,
  },
  {
    question:
      "10. Trường hợp Quốc hội ban hành Luật bảo vệ môi trường năm 2020 thay thế Luật bảo vệ môi trường năm 2005 thì hiệu lực của Nghị định 25/2008/NĐ-CP ... sẽ như thế nào?",
    options: ["Tiếp tục có hiệu lực.", "Chấm dứt hiệu lực.", "Có hiệu lực đến khi ban hành Nghị định mới.", "Ngưng hiệu lực."],
    correct: 1,
  },
  {
    question:
      "11. Luật doanh nghiệp 2020 có hiệu lực từ ngày 01/01/2021. Vậy hiệu lực của Nghị định 96/2015/NĐ-CP quy định chi tiết một số điều của Luật doanh nghiệp năm 2014 sẽ như thế nào?",
    options: ["Chấm dứt hiệu lực.", "Tiếp tục có hiệu lực, chỉ các điều được sửa đổi, bổ sung thì hết hiệu lực.", "Có hiệu lực đến khi ban hành Nghị định mới.", "Ngưng hiệu lực."],
    correct: 2,
  },
  {
    question:
      "12. Luật doanh nghiệp 2020 có hiệu lực từ ngày 01/01/2021. Vậy hiệu lực của Nghị định 78/2015/NĐ-CP về đăng ký doanh nghiệp sẽ như thế nào?",
    options: [
      "Tiếp tục có hiệu lực, chỉ các điều được sửa đổi, bổ sung thì hết hiệu lực.",
      "Ngưng hiệu lực.",
      "Có hiệu lực đến khi ban hành Nghị định mới.",
      "Chấm dứt hiệu lực.",
    ],
    correct: 2,
  },
  {
    question:
      "13. Nếu 2 văn bản do 2 cơ quan ban hành về cùng 1 vấn đề nhưng có nội dung mâu thuẫn nhau thì áp dụng văn bản nào?",
    options: [
      "Văn bản quy định chi tiết hơn.",
      "Văn bản ra đời trước.",
      "Văn bản có hiệu lực pháp lý cao hơn.",
      "Văn bản ra đời sau.",
    ],
    correct: 2,
  },
  {
    question:
      "14. Xác định bộ phận chế tài trong quy phạm pháp luật sau (Khoản 1 Điều 147 BLHS 2015): 'Người nào đủ 18 tuổi... thì bị phạt tù từ 06 tháng đến 03 năm.'",
    options: [
      "Người nào đủ 18 tuổi trở lên mà lôi kéo, dụ dỗ, ép buộc người dưới 16 tuổi trình diễn khiêu dâm hoặc trực tiếp chứng kiến việc trình diễn khiêu dâm dưới mọi hình thức.",
      "Người nào đủ 18 tuổi trở lên mà lôi kéo, dụ dỗ, ép buộc người dưới 16 tuổi.",
      "Bị phạt tù từ 06 tháng đến 03 năm.",
      "Người nào đủ 18 tuổi trở lên.",
    ],
    correct: 2,
  },
  {
    question:
      "15. Xác định thời điểm có hiệu lực của văn bản quy phạm pháp luật của cơ quan nhà nước ở trung ương?",
    options: [
      "Được quy định trong văn bản quy phạm pháp luật.",
      "Kể từ ngày công bố văn bản quy phạm pháp luật.",
      "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn mười ngày, kể từ ngày công bố hoặc ký ban hành.",
      "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn bốn mươi lăm ngày, kể từ ngày công bố hoặc ký ban hành.",
    ],
    correct: 3,
  },

  // =====================
  // CHƯƠNG 4
  // =====================
  {
    question: "1. Trong các nghĩa vụ sau đây, nghĩa vụ nào không phải là nghĩa vụ pháp lý?",
    options: [
      "Nghĩa vụ cấp dưỡng của cha, mẹ đối với con dưới 18 tuổi khi cha, mẹ ly hôn.",
      "Nghĩa vụ của chồng phải đưa tiền lương cho vợ.",
      "Nghĩa vụ đóng thuế thu nhập cá nhân",
      "Nghĩa vụ giải quyết tố cáo của người giải quyết tố cáo.",
    ],
    correct: 1,
  },
  {
    question: "2. Khách thể của quan hệ pháp luật được hiểu là gì?",
    options: [
      "Là đối tượng mà các chủ thể quan tâm khi tham gia vào quan hệ pháp luật.",
      "Các bên tham gia vào quan hệ pháp luật.",
      "Những giá trị mà các chủ thể quan hệ pháp luật muốn đạt được.",
      "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật.",
    ],
    correct: 0,
  },
  {
    question: "3. Đâu là yếu tố cấu thành quan hệ pháp luật?",
    options: ["Mặt khách quan.", "Sự kiện pháp lý.", "Khách thể.", "Mặt chủ quan."],
    correct: 2,
  },
  {
    question: "4. Người thành niên là người:",
    options: ["từ đủ 18 tuổi trở lên.", "từ 18 tuổi trở lên.", "từ 16 tuổi trở lên.", "từ đủ 16 tuổi trở lên."],
    correct: 0,
  },
  {
    question:
      "5. Năng lực pháp luật của chủ thể trong quan hệ pháp luật phụ thuộc vào yếu tố nào dưới đây?",
    options: [
      "Pháp luật của từng quốc gia.",
      "Hoàn cảnh kinh tế của chủ thể.",
      "Truyền thống văn hóa dân tộc của từng quốc gia.",
      "Độ tuổi, tình trạng sức khỏe, trình độ của chủ thể.",
    ],
    correct: 0,
  },
  {
    question:
      "6. Một cá nhân trở thành chủ thể của quan hệ pháp luật cần phải thỏa mãn điều kiện nào sau đây?",
    options: [
      "Thực hiện nghĩa vụ do pháp luật quy định.",
      "Có năng lực chủ thể.",
      "Không mắc bệnh tâm thần.",
      "Thực hiện quyền do pháp luật quy định.",
    ],
    correct: 1,
  },
  {
    question: "7. Giao dịch dân sự của người dưới 6 tuổi:",
    options: [
      "phải được sự đồng ý của người đại diện theo pháp luật, trừ trường hợp giao dịch phục vụ nhu cầu sinh hoạt hàng ngày.",
      "phải được sự đồng ý của người đại diện theo pháp luật.",
      "do người đại diện theo pháp luật xác lập, thực hiện.",
      "họ có thể tự mình xác lập, thực hiện.",
    ],
    correct: 2,
  },
  {
    question: "8. Khẳng định nào sau đây là SAI?",
    options: [
      "Pháp nhân phải là tổ chức.",
      "Năng lực pháp luật của pháp nhân mất đi khi pháp nhân chấm dứt sự tồn tại.",
      "Pháp nhân có năng lực pháp luật từ khi được thành lập hợp pháp.",
      "Mọi tổ chức có con dấu đều có tư cách pháp nhân.",
    ],
    correct: 3,
  },
  {
    question:
      "9. Ông A lái xe sau khi uống rượu đâm vào xe khác làm cho 2 người bị chết thuộc loại sự kiện pháp lý nào?",
    options: ["Hành vi không hành động.", "Sự biến tuyệt đối.", "Sự biến tương đối.", "Hành vi hành động."],
    correct: 3,
  },
  {
    question: "10. Pháp nhân có năng lực hành vi từ khi nào?",
    options: [
      "Từ khi nộp hồ sơ xin thành lập tại cơ quan nhà nước có thẩm quyền.",
      "Từ khi được thành lập hợp pháp.",
      "Từ khi các thành viên thống nhất việc thành lập.",
      "Từ khi góp tài sản vào thành lập.",
    ],
    correct: 1,
  },
  {
    question: "11. Nội dung của quan hệ pháp luật là gì?",
    options: [
      "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật.",
      "Những giá trị mà các chủ thể quan hệ pháp luật mong muốn đạt được.",
      "Các bên tham gia vào quan hệ pháp luật.",
      "Đối tượng mà các chủ thể tác động đến khi tham gia vào quan hệ pháp luật.",
    ],
    correct: 0,
  },
  {
    question:
      "12. Chủ thể bị hạn chế năng lực hành vi dân sự là trường hợp nào sau đây?",
    options: [
      "Mắc bệnh tâm thần hoặc các bệnh khác dẫn tới không thể nhận thức và làm chủ hành vi.",
      "Say rượu bia hoặc các chất gây nghiện khác.",
      "Người chưa đủ 18 tuổi.",
      "Nghiện ma túy hoặc các chất kích thích khác dẫn tới phá tán tài sản.",
    ],
    correct: 3,
  },
  {
    question: "13. Đâu là chủ thể không có tư cách pháp nhân?",
    options: [
      "Công ty hợp danh.",
      "Hội liên hiệp phụ nữ Việt Nam.",
      "Văn phòng đại diện của doanh nghiệp.",
      "Ủy ban nhân dân quận Hà Đông.",
    ],
    correct: 2,
  },
  {
    question:
      "14. Năng lực hành vi của chủ thể trong quan hệ pháp luật phụ thuộc vào yếu tố nào dưới đây",
    options: [
      "Độ tuổi, tình trạng sức khỏe, trình độ của chủ thể.",
      "Truyền thống văn hóa dân tộc của từng quốc gia.",
      "Hoàn cảnh kinh tế của chủ thể.",
      "Pháp luật của từng quốc gia.",
    ],
    correct: 0,
  },
  {
    question: "15. Việc ‘A đăng ký kết hôn với B’ được thuộc loại sự kiện nào?",
    options: [
      "Sự kiện pháp lý làm chấm dứt quan hệ pháp luật.",
      "Sự biến pháp lý.",
      "Sự kiện pháp lý làm phát sinh quan hệ pháp luật.",
      "Sự kiện pháp lý làm thay đổi quan hệ pháp luật.",
    ],
    correct: 2,
  },

  // =====================
  // CHƯƠNG 5
  // =====================
  {
    question:
      "1. Hành vi nào sau đây là hành vi trái pháp luật ở dạng không hành động?",
    options: [
      "Dừng xe trước đèn đỏ khi tham gia giao thông.",
      "Tàng trữ vũ khí.",
      "Không đi quá tốc độ cho phép.",
      "Không cứu giúp người khác đang trong tình trạng nguy hiểm đến tính mạng, tuy có điều kiện để cứu giúp.",
    ],
    correct: 3,
  },
  {
    question:
      "2. Vi phạm pháp luật hành chính là hành vi xâm phạm đến quy định nào sau đây?",
    options: ["Quy tắc quản lý nhà nước.", "Quy tắc xử sự.", "Quy định pháp luật.", "Quy phạm pháp luật."],
    correct: 0,
  },
  {
    question:
      "3. Khẳng định nào sau đây là SAI khi nghiên cứu về trách nhiệm pháp lý?",
    options: [
      "Chỉ các cơ quan Nhà nước mới có thẩm quyền áp dụng trách nhiệm pháp lý đối với chủ thể vi phạm pháp luật.",
      "Trong mọi trường hợp, trách nhiệm pháp lý luôn gắn liền với những biện pháp cưỡng chế nhà nước đối với chủ thể đã vi phạm pháp luật.",
      "Truy cứu trách nhiệm pháp lý là một quá trình hoạt động phức tạp của các cơ quan nhà nước, chủ thể có thẩm quyền.",
      "Cơ sở của trách nhiệm pháp lý là vi phạm pháp luật.",
    ],
    correct: 0,
  },
  {
    question:
      "4. Hành vi nào sau đây là hành vi trái pháp luật ở dạng không hành động?",
    options: [
      "Không giúp người khác tự sát.",
      "Không vượt đèn đỏ.",
      "Môi giới mại dâm.",
      "Không tố giác tội phạm.",
    ],
    correct: 3,
  },
  {
    question: "5. Trách nhiệm pháp lý được áp dụng với các chủ thể nào sau đây?",
    options: ["Chủ thể vi phạm pháp luật.", "Người có hành vi không hợp đạo đức", "Mọi người.", "Chỉ những người từ đủ 18 tuổi trở lên."],
    correct: 0,
  },
  {
    question: "6. Trong các hành vi sau đây, hành vi nào không phải là vi phạm pháp luật?",
    options: [
      "Con cái ngược đãi cha mẹ.",
      "Người kinh doanh chậm thực hiện nghĩa vụ nộp thuế.",
      "Đoàn viên thanh niên không đóng đoàn phí.",
      "Thanh niên đủ 18 tuổi trốn thực hiện nghĩa vụ quân sự.",
    ],
    correct: 2,
  },
  {
    question:
      "7. Chủ thể có năng lực trách nhiệm pháp lý khi có đủ điều kiện nào sau đây?",
    options: [
      "Đạt độ tuổi do pháp luật quy định, có khả năng nhận thức và điều khiển hành vi.",
      "Từ đủ 18 tuổi trở lên và có nhân thân tốt.",
      "Có năng lực pháp luật và năng lực hành vi.",
      "Đạt độ tuổi do pháp luật quy định, có năng lực pháp luật.",
    ],
    correct: 0,
  },
  {
    question:
      "8. Xác định công cụ, phương tiện của vi phạm pháp luật trong trường hợp: A và B dùng dao đâm chết C?",
    options: ["Quan hệ nhân thân.", "Quan hệ sở hữu.", "C.", "Con dao."],
    correct: 3,
  },
  {
    question: "9. Hành vi nào sau đây không trái pháp luật?",
    options: [
      "Không bật xi nhan khi rẽ phải.",
      "Không nộp thuế đúng thời hạn.",
      "Không thực hiện nghĩa vụ quân sự.",
      "Không cho bạn mượn xe.",
    ],
    correct: 3,
  },
  {
    question:
      "10. Những biểu hiện ra bên ngoài của vi phạm pháp luật gọi là gì?",
    options: [
      "Mặt khách quan của vi phạm pháp luật.",
      "Mặt chủ quan của vi phạm pháp luật.",
      "Khách thể của vi phạm pháp luật.",
      "Chủ thể của vi phạm pháp luật.",
    ],
    correct: 0,
  },
  {
    question:
      "11. Đâu không là dấu hiệu trong Mặt chủ quan của Vi phạm pháp luật?",
    options: [
      "Mục đích thực hiện hành vi vi phạm pháp luật.",
      "Lỗi của chủ thể.",
      "Chủ thể có năng lực trách nhiệm pháp lý.",
      "Động cơ thực hiện hành vi vi phạm pháp luật.",
    ],
    correct: 2,
  },
  {
    question: "12. Hành vi nào sau đây là vi phạm pháp luật dân sự?",
    options: [
      "Xây nhà trái phép.",
      "Không thực hiện nghĩa vụ trả tiền trong hợp đồng thuê nhà.",
      "Lạm dụng tín nhiệm chiếm đoạt tài sản.",
      "Cướp giật tài sản.",
    ],
    correct: 1,
  },
  {
    question:
      "13. Trong các chủ thể sau, chủ thể nào không có thẩm quyền áp dụng trách nhiệm pháp lý hành chính?",
    options: ["Công an.", "Viện kiểm sát.", "Tòa án.", "Chủ tịch Hội đồng nhân dân."],
    correct: 1,
  },
  {
    question:
      "14. Trong các chủ thể sau, chủ thể nào có thẩm quyền áp dụng trách nhiệm pháp lý dân sự?",
    options: ["Tòa án.", "Viện kiểm sát.", "Công an.", "Nhà nước."],
    correct: 0,
  },
  {
    question: "15. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Mọi hậu quả do vi phạm pháp luật gây ra đều phải thể hiện dưới dạng vật chất.",
      "Chủ thể của vi phạm pháp luật có thể chịu đồng thời nhiều trách nhiệm pháp lý.",
      "Sự thiệt hại thực tế xảy ra cho xã hội là dấu hiệu bắt buộc trong mặt khách quan của vi phạm pháp luật.",
      "Không thấy trước hành vi của mình là nguy hiểm cho xã hội thì không bị xem là có lỗi.",
    ],
    correct: 1,
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
  questionsData.slice(200, 250)
];
