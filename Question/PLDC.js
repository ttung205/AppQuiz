// Dữ liệu câu hỏi từ đề bài
var questionsData = [
      {
        question: "Câu 1: Nguyên nhân cốt lõi của sự ra đời nhà nước là gì?",
        options: [
            "Kết quả của 03 lần phân công lao động trong lịch sử.",
            "Sự hình thành chế độ tư hữu, giai cấp và lợi ích giai cấp đối lập nhau.",
            "Nhu cầu về sự cần thiết phải có một tổ chức thay thế thị tộc - bộ lạc.",
            "Kết quả của nền sản xuất hàng hoá cùng những hoạt động thương nghiệp."
        ],
        answer: "Sự hình thành chế độ tư hữu, giai cấp và lợi ích giai cấp đối lập nhau.",
        chapter: 1
    },
    {
        question: "Câu 2: Khi nghiên cứu về nguồn gốc Nhà nước, học thuyết cho rằng sự ra đời của nhà nước là kết quả của một hợp đồng được ký kết giữa những con người sống trong trạng thái tự nhiên không có nhà nước là quan điểm của học thuyết nào?",
        options: [
            "Thuyết gia trưởng.",
            "Học thuyết Mác - Lênin.",
            "Thuyết thần học.",
            "Thuyết khế ước xã hội."
        ],
        answer: "Thuyết khế ước xã hội.",
        chapter: 1
    },
    {
        question: "Câu 3: Nhà nước do giai cấp thống trị lập nên để bảo vệ quyền và lợi ích của giai cấp mình là quan điểm của học thuyết nào?",
        options: [
            "Thuyết gia trưởng.",
            "Học thuyết Mác - Lênin.",
            "Thuyết khế ước xã hội.",
            "Thuyết thần học."
        ],
        answer: "Học thuyết Mác - Lênin.",
        chapter: 1
    },
    {
        question: "Câu 4: Hình thức cấu trúc nhà nước liên bang có đặc điểm nào dưới đây?",
        options: [
            "Có một hệ thống cơ quan nhà nước và một hệ thống pháp luật.",
            "Có một hệ thống cơ quan nhà nước và hai hệ thống pháp luật.",
            "Có hai hệ thống cơ quan nhà nước và một hệ thống pháp luật.",
            "Có hai hệ thống cơ quan nhà nước và hai hệ thống pháp luật."
        ],
        answer: "Có hai hệ thống cơ quan nhà nước và hai hệ thống pháp luật.",
        chapter: 1
    },
    {
        question: "Câu 5: Khi nghiên cứu về nguồn gốc Nhà nước, học thuyết quan niệm quyền lực nhà nước về bản chất cũng giống như quyền lực của người đứng đầu gia đình là quan điểm của học thuyết nào?",
        options: [
            "Thuyết khế ước xã hội.",
            "Học thuyết Mác - Lênin.",
            "Thuyết thần học.",
            "Thuyết gia trưởng."
        ],
        answer: "Thuyết gia trưởng.",
        chapter: 1
    },
    {
        question: "Câu 6: Chính thể cộng hòa đại nghị còn được gọi là gì?",
        options: [
            "Chính thể cộng hòa lưỡng tính.",
            "Chính thể cộng hòa nghị viện.",
            "Chính thể quân chủ đại nghị.",
            "Chính thể cộng hòa tổng thống."
        ],
        answer: "Chính thể cộng hòa nghị viện.",
        chapter: 1
    },
    {
        question: "Câu 7: Trong bộ máy nhà nước CHXHCN Việt Nam, cơ quan nào có quyền tư pháp?",
        options: [
            "Viện kiểm sát nhân dân và Chính phủ.",
            "Tòa án nhân dân và Viện kiểm sát nhân dân.",
            "Chính phủ và Quốc hội.",
            "Quốc hội và Tòa án."
        ],
        answer: "Tòa án nhân dân và Viện kiểm sát nhân dân.",
        chapter: 1
    },
    {
        question: "Câu 8: Hình thức chính thể cộng hòa dân chủ được hiểu như thế nào?",
        options: [
            "Quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử nhưng chỉ tầng lớp quý tộc mới được tham gia bầu cử.",
            "Quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử phổ thông.",
            "Toàn bộ quyền lực nhà nước tập trung vào tay một người đứng đầu là vua hoặc nữ hoàng.",
            "Bên cạnh nhà vua (nữ hoàng) có một cơ quan được thành lập theo quy định của hiến pháp để hạn chế quyền lực của nhà vua (nữ hoàng)."
        ],
        answer: "Quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử phổ thông.",
        chapter: 1
    },
    {
        question: "Câu 9: Chức năng của nhà nước nhằm làm gì?",
        options: [
            "Thực hiện chính sách của nhà nước.",
            "Thực hiện những nhiệm vụ đặt ra trước nhà nước.",
            "Đảm bảo thực hiện những mục đích của nhà nước.",
            "Duy trì đường lối của Đảng."
        ],
        answer: "Thực hiện những nhiệm vụ đặt ra trước nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 10: Xác định tiền đề dẫn đến sự xuất hiện của Nhà nước theo quan điểm của chủ nghĩa Mác - Lênin?",
        options: [
            "Xuất hiện chế độ tư hữu và có sự phân công lao động giữa các thành viên trong xã hội.",
            "Xuất hiện chế độ công hữu và phân chia giai cấp mà mâu thuẫn giai cấp đối kháng không thể điều hòa được.",
            "Xuất hiện chế độ tư hữu và phân chia giai cấp mà mâu thuẫn giai cấp đối kháng không thể điều hòa được.",
            "Xuất hiện chế độ công hữu và có sự phân công lao động giữa các thành viên trong xã hội."
        ],
        answer: "Xuất hiện chế độ tư hữu và phân chia giai cấp mà mâu thuẫn giai cấp đối kháng không thể điều hòa được.",
        chapter: 1
    },
    {
        question: "Câu 11: Người đứng đầu cơ quan lập pháp trong bộ máy nhà nước của Việt Nam là:",
        options: [
            "Thủ tướng Chính phủ.",
            "Chủ tịch nước.",
            "Chủ tịch Quốc hội.",
            "Tổng bí thư."
        ],
        answer: "Chủ tịch Quốc hội.",
        chapter: 1
    },
    {
        question: "Câu 12: Cách thức và trình tự thành lập ra các cơ quan quyền lực tối cao của nhà nước được gọi là gì?",
        options: [
            "Hình thức cấu trúc.",
            "Hình thức nhà nước.",
            "Chế độ chính trị.",
            "Hình thức chính thể."
        ],
        answer: "Hình thức chính thể.",
        chapter: 1
    },
    {
        question: "Câu 13: Sự thống trị của nhà nước được thể hiện ở các mặt nào sau đây?",
        options: [
            "Quyền lực chính trị, quyền lực kinh tế, quyền lực tư tưởng.",
            "Quyền lực nhà nước, quyền lực tự nhiên, quyền lực xã hội.",
            "Quyền lực chính trị, quyền lực kinh tế, quyền lực xã hội.",
            "Quyền lực nhà nước, quyền lực chính trị, quyền lực xã hội."
        ],
        answer: "Quyền lực chính trị, quyền lực kinh tế, quyền lực tư tưởng.",
        chapter: 1
    },
    {
        question: "Câu 14: Khi nghiên cứu về chức năng, nhiệm vụ của các cơ quan trong bộ máy nhà nước thì khẳng định nào sau đây là SAI?",
        options: [
            "Quốc hội là cơ quan duy nhất có quyền ban hành văn bản quy phạm pháp luật.",
            "Tòa án là cơ quan duy nhất có quyền xét xử.",
            "Viện kiểm sát là cơ quan duy nhất có quyền buộc tội người phạm tối.",
            "Chính phủ là cơ quan hành pháp."
        ],
        answer: "Quốc hội là cơ quan duy nhất có quyền ban hành văn bản quy phạm pháp luật.",
        chapter: 1
    },
    {
        question: "Câu 15: Việc tổ chức, thực hiện quyền lực nhà nước ở nước CHXHCN Việt Nam theo nguyên tắc nào?",
        options: [
            "Phân công, phân nhiệm và phối hợp trong việc thực hiện quyền lực nhà nước.",
            "Tam quyền phân lập.",
            "Tập quyền.",
            "Phân quyền."
        ],
        answer: "Phân công, phân nhiệm và phối hợp trong việc thực hiện quyền lực nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 16: Nhà nước Nhật Bản thuộc hình thức cấu trúc nào?",
        options: [
            "Nhà nước liên minh.",
            "Nhà nước xã hội chủ nghĩa.",
            "Nhà nước liên bang.",
            "Nhà nước đơn nhất."
        ],
        answer: "Nhà nước đơn nhất.",
        chapter: 1
    },
    {
        question: "Câu 17: Quốc hội nước CNXHCN Việt Nam được bầu bởi:",
        options: [
            "công dân Việt Nam.",
            "công dân Việt Nam từ đủ 21 tuổi trở lên.",
            "công dân Việt Nam từ 18 tuổi trở lên.",
            "công dân Việt Nam từ đủ 18 tuổi trở lên."
        ],
        answer: "công dân Việt Nam từ đủ 18 tuổi trở lên.",
        chapter: 1
    },
    {
        question: "Câu 18: Khi nghiên cứu về nguồn gốc Nhà nước, học thuyết cho rằng sự ra đời của nhà nước là do nhu cầu tâm lý của con người nguyên thủy luôn luôn mong muốn phụ thuộc vào thủ lĩnh, giáo sĩ,… là quan điểm của học thuyết nào?",
        options: [
            "Thuyết tâm lý.",
            "Thuyết bạo lực.",
            "Thuyết khế ước xã hội.",
            "Thuyết thần học."
        ],
        answer: "Thuyết tâm lý.",
        chapter: 1
    },
    {
        question: "Câu 19: Quyền lực của vua trong hình thức chính thể quân chủ tuyệt đối luôn như thế nào?",
        options: [
            "Không có quyền hạn.",
            "Bị hạn chế.",
            "Vô hạn.",
            "Cao nhất trong các cơ quan nhà nước."
        ],
        answer: "Vô hạn.",
        chapter: 1
    },
    {
        question: "Câu 20: Ủy ban nhân dân trong bộ máy nhà nước Việt Nam là cơ quan:",
        options: [
            "Do Chính phủ bầu ra.",
            "Do Quốc hội bầu ra.",
            "Do nhân dân địa phương bầu ra.",
            "Do Hội đồng nhân dân bầu ra."
        ],
        answer: "Do Hội đồng nhân dân bầu ra.",
        chapter: 1
    },
    {
        question: "Câu 21: Chức năng nào dưới đây không phải là chức năng chính của Quốc hội?",
        options: [
            "Chức năng lập pháp.",
            "Chức năng giám sát tối cao.",
            "Chức năng quyết định các vấn đề quan trọng của đất nước.",
            "Chức năng công tố."
        ],
        answer: "Chức năng công tố.",
        chapter: 1
    },
    {
        question: "Câu 22: Vận dụng kiến thức đã học lựa chọn: Nhà nước nào dưới đây là nhà nước đơn nhất?",
        options: [
            "Nga.",
            "Singapore.",
            "Australia.",
            "Đức."
        ],
        answer: "Singapore.",
        chapter: 1
    },
    {
        question: "Câu 23: Ủy ban thường vụ quốc hội là cơ quan thuộc hệ thống nào trong bộ máy nhà nước CHXHCN Việt Nam?",
        options: [
            "Hệ thống cơ quan xét xử.",
            "Hệ thống cơ quan quyền lực nhà nước.",
            "Hệ thống cơ quan quản lý hành chính nhà nước.",
            "Hệ thống cơ quan kiểm sát."
        ],
        answer: "Hệ thống cơ quan quyền lực nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 24: Cơ quan thực hành quyền công tố trong bộ máy nhà nước của Việt Nam là:",
        options: [
            "Viện kiểm sát nhân dân.",
            "Tòa án nhân dân.",
            "Ủy ban nhân dân.",
            "Hội đồng nhân dân."
        ],
        answer: "Viện kiểm sát nhân dân.",
        chapter: 1
    },
    {
        question: "Câu 25: Theo quan điểm của Chủ nghĩa Mác - Lênin thì nguyên nhân chủ yếu làm xuất hiện Nhà nước là?",
        options: [
            "Do địa hình, khí hậu không thuận lợi nên con người phải hợp sức lại để phát triển sản xuất.",
            "Do các thành viên trong xã hội có mong muốn lập ra.",
            "Do có sự phân hóa lao động trong xã hội.",
            "Do có sự phân chia giai cấp và đấu tranh giai cấp trong xã hội."
        ],
        answer: "Do có sự phân chia giai cấp và đấu tranh giai cấp trong xã hội.",
        chapter: 1
    },
    {
        question: "Câu 26: Trong một quốc gia, xác định tổ chức có quyền thu thuế?",
        options: [
            "Nhà nước.",
            "Tổ chức chính trị.",
            "Tổ chức xã hội.",
            "Tổ chức kinh tế."
        ],
        answer: "Nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 27: Tòa án nhân dân trong bộ máy nhà nước Việt Nam là cơ quan thuộc:",
        options: [
            "Hệ thống cơ quan Xét xử.",
            "Hệ thống cơ quan Hành chính nhà nước.",
            "Hệ thống cơ quan Kiểm sát.",
            "Hệ thống cơ quan Quyền lực nhà nước."
        ],
        answer: "Hệ thống cơ quan Xét xử.",
        chapter: 1
    },
    {
        question: "Câu 28: Tổ chức nào trong số các tổ chức sau có quyền phân chia lãnh thổ thành các đơn vị hành chính?",
        options: [
            "Công đoàn.",
            "Mặt trận Tổ quốc.",
            "Nhà nước."
        ],
        answer: "Nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 29: Đề cập về mối quan hệ giữa các chức năng của Nhà nước, thì khẳng định nào sau đây là SAI?",
        options: [
            "Chức năng đối nội và chức năng đối ngoại không liên quan đến nhau.",
            "Kết quả của việc thực hiện chức năng đối ngoại có tác động đến việc thực hiện chức năng đối nội.",
            "Chức năng đối nội là cơ sở cho việc thực hiện chức năng đối ngoại.",
            "Chức năng đối nội có vai trò quan trọng hơn chức năng đối ngoại."
        ],
        answer: "Chức năng đối nội và chức năng đối ngoại không liên quan đến nhau.",
        chapter: 1
    },
    {
        question: "Câu 30: Chế độ chính trị của nhà nước Việt Nam là chế độ:",
        options: [
            "Phương pháp phản dân chủ.",
            "Phương pháp dân chủ trực tiếp.",
            "Phương pháp dân chủ.",
            "Phương pháp dân chủ đại diện."
        ],
        answer: "Phương pháp dân chủ.",
        chapter: 1
    },
    {
        question: "Câu 31: Khẳng định nào dưới đây là ĐÚNG?",
        options: [
            "Nhà nước khác biệt so với các tổ chức khác vì nhà nước thiết lập một quyền lực công đặc biệt không hòa nhập với xã hội.",
            "Nhà nước khác biệt so với các tổ chức khác vì nhà nước phân chia và quản lý dân cư theo dân tộc.",
            "Nhà nước khác biệt so với các tổ chức khác vì nhà nước phân chia và quản lý dân cư theo huyết thống.",
            "Nhà nước khác biệt so với các tổ chức khác vì nhà nước thiết lập một quyền lực công gắn liền với xã hội."
        ],
        answer: "Nhà nước khác biệt so với các tổ chức khác vì nhà nước thiết lập một quyền lực công đặc biệt không hòa nhập với xã hội.",
        chapter: 1
    },
    {
        question: "Câu 32: Chế độ chính trị được hiểu như thế nào?",
        options: [
            "Là toàn bộ đường lối, chính sách mà Đảng chính trị cầm quyền đề ra.",
            "Là tổng thể các phương pháp và biện pháp để thực hiện quyền lực nhà nước.",
            "Là tất cả các thiết chế chính trị trong xã hội.",
            "Là đường lối, chính sách của Đảng đã được nhà nước thể chế hóa thành pháp luật."
        ],
        answer: "Là tổng thể các phương pháp và biện pháp để thực hiện quyền lực nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 33: Người đứng đầu cơ quan kiểm sát trong bộ máy nhà nước của Việt Nam là:",
        options: [
            "Viện trưởng Viện kiểm sát nhân dân tối cao.",
            "Chủ tịch Quốc hội.",
            "Chánh án Tòa án nhân dân tối cao.",
            "Chủ tịch nước."
        ],
        answer: "Viện trưởng Viện kiểm sát nhân dân tối cao.",
        chapter: 1
    },
    {
        question: "Câu 34: Cơ quan quyền lực cao nhất của nhà nước CHXHCN Việt Nam là:",
        options: [
            "Chính phủ.",
            "Quốc hội.",
            "Tòa án nhân dân tối cao.",
            "Chủ tịch nước."
        ],
        answer: "Quốc hội.",
        chapter: 1
    },
    {
        question: "Câu 35: Bản chất chung của nhà nước gồm bản chất nào?",
        options: [
            "Tính giai cấp và tính quốc tế.",
            "Tính giai cấp và tính xã hội.",
            "Tính xã hội và tính dân tộc.",
            "Tính nhân dân và tính dân tộc."
        ],
        answer: "Tính giai cấp và tính xã hội.",
        chapter: 1
    },
    {
        question: "Câu 36: Người đứng đầu cơ quan hành pháp trong bộ máy nhà nước của Việt Nam là:",
        options: [
            "Tổng bí thư.",
            "Thủ tướng Chính phủ.",
            "Chủ tịch nước.",
            "Chủ tịch Quốc hội."
        ],
        answer: "Thủ tướng Chính phủ.",
        chapter: 1
    },
    {
        question: "Câu 37: Hội đồng nhân dân trong bộ máy nhà nước Việt Nam là cơ quan:",
        options: [
            "Do Chính phủ bầu ra.",
            "Do nhân dân địa phương bầu ra.",
            "Do Quốc hội bầu ra.",
            "Do Ủy ban nhân dân bầu ra."
        ],
        answer: "Do nhân dân địa phương bầu ra.",
        chapter: 1
    },
    {
        question: "Câu 38: Xem xét yếu tố nào dưới đây là đặc trưng của Nhà nước?",
        options: [
            "Tiến hành thu các loại thuế.",
            "Phân phối bình đẳng của cải làm ra.",
            "Phân chia và quản lý dân cư theo huyết thống.",
            "Thiết lập quyền lực công gắn liền với xã hội."
        ],
        answer: "Tiến hành thu các loại thuế.",
        chapter: 1
    },
    {
        question: "Câu 39: Việc phối hợp với lực lượng an ninh các quốc gia trong khu vực giải quyết vấn đề tội phạm xuyên quốc gia, là hoạt động thể hiện điều gì của nhà nước?",
        options: [
            "Bản chất của Nhà nước.",
            "Chức năng đối ngoại của Nhà nước.",
            "Chức năng đối nội của Nhà nước.",
            "Nhiệm vụ của Nhà nước."
        ],
        answer: "Chức năng đối ngoại của Nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 40: Quyền hành pháp được hiểu là quyền làm gì?",
        options: [
            "Bảo vệ pháp luật.",
            "Soạn thảo và ban hành pháp luật.",
            "Tổ chức thực hiện pháp luật.",
            "Ban hành và triển khai thực hiện pháp luật."
        ],
        answer: "Tổ chức thực hiện pháp luật.",
        chapter: 1
    },
    {
        question: "Câu 41: Chế độ chính trị của nhà nước Việt Nam là chế độ nào sau đây?",
        options: [
            "Phản dân chủ.",
            "Dân chủ xã hội chủ nghĩa.",
            "Dân chủ chủ nô.",
            "Dân chủ quý tộc."
        ],
        answer: "Dân chủ xã hội chủ nghĩa.",
        chapter: 1
    },
    {
        question: "Câu 42: Khi nghiên cứu về bản chất nhà nước thì khẳng định nào sau đây là ĐÚNG?",
        options: [
            "Bất cứ nhà nước nào cũng thể hiện bản chất xã hội rõ nét hơn bản chất giai cấp.",
            "Bất cứ nhà nước nào cũng chỉ là bộ máy dùng để duy trì sự thống trị của giai cấp này đối với giai cấp khác.",
            "Bất cứ nhà nước nào cũng đều thể hiện bản chất giai cấp và bản chất xã hội.",
            "Bất cứ nhà nước nào cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội."
        ],
        answer: "Bất cứ nhà nước nào cũng đều thể hiện bản chất giai cấp và bản chất xã hội.",
        chapter: 1
    },
    {
        question: "Câu 43: Chủ tịch nước CHXHCN Việt Nam có quyền:",
        options: [
            "lập hiến và lập pháp.",
            "công bố Hiến pháp, luật và pháp lệnh.",
            "thay mặt nhà nước để quyết định mọi vấn đề đối nội và đối ngoại.",
            "quyết định mọi vấn đề quan trọng của đất nước."
        ],
        answer: "công bố Hiến pháp, luật và pháp lệnh.",
        chapter: 1
    },
    {
        question: "Câu 44: Khi nghiên cứu về tổ chức thị tộc thì khẳng định nào sau đây là ĐÚNG?",
        options: [
            "Trong thị tộc đã có sự phân công lao động chuyên môn hóa ngành nghề.",
            "Thị tộc là đơn vị kinh tế đầu tiên của xã hội cộng sản nguyên thủy.",
            "Thị tộc là gia đình trong xã hội Cộng sản nguyên thủy.",
            "Tổ chức thị tộc gắn liền với nền kinh tế sản xuất."
        ],
        answer: "Thị tộc là đơn vị kinh tế đầu tiên của xã hội cộng sản nguyên thủy.",
        chapter: 1
    },
    {
        question: "Câu 45: Khi nghiên cứu về bộ máy nhà nước Việt Nam thì khẳng định nào sau đây là đúng?",
        options: [
            "Quốc hội là cơ quan nắm giữ và thực hiện cả ba quyền: lập pháp, hành pháp và tư pháp.",
            "Ủy ban nhân dân do nhân dân trực tiếp bầu ra.",
            "Chính phủ có quyền giám sát toàn bộ hoạt động của nhà nước.",
            "Hội đồng nhân dân do nhân dân trực tiếp bầu ra."
        ],
        answer: "Hội đồng nhân dân do nhân dân trực tiếp bầu ra.",
        chapter: 1
    },
    {
        question: "Câu 46: Đẩy mạnh cải cách thủ tục hành chính, tăng cường hiệu quả hoạt động của bộ máy nhà nước là hoạt động thể hiện điều gì của nhà nước?",
        options: [
            "Bản chất của Nhà nước.",
            "Chức năng đối nội của Nhà nước.",
            "Quyền hạn của Nhà nước.",
            "Chức năng đối ngoại của Nhà nước."
        ],
        answer: "Chức năng đối nội của Nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 47: Quyền lực trong xã hội Cộng sản nguyên thủy có đặc điểm nào?",
        options: [
            "Đứng trên xã hội, tách khỏi xã hội và phục vụ lợi ích cho các thành viên trong xã hội.",
            "Đứng trên xã hội, tách khỏi xã hội và phục vụ lợi ích cho Hội đồng thị tộc, tù trưởng.",
            "Hòa nhập vào xã hội và phục vụ lợi ích cho các thành viên trong xã hội.",
            "Hòa nhập vào xã hội và phục vụ cho lợi ích của Hội đồng thị tộc, tù trưởng."
        ],
        answer: "Hòa nhập vào xã hội và phục vụ lợi ích cho các thành viên trong xã hội.",
        chapter: 1
    },
    {
        question: "Câu 48: Hình thức chính thể quân chủ chuyên chế được hiểu như thế nào?",
        options: [
            "Toàn bộ quyền lực nhà nước tập trung vào tay một người đứng đầu là vua hoặc nữ hoàng.",
            "Bên cạnh nhà vua (nữ hoàng) có một cơ quan được thành lập theo quy định của hiến pháp để hạn chế quyền lực của nhà vua (nữ hoàng).",
            "Quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử phổ thông.",
            "Quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử nhưng chỉ tầng lớp quý tộc mới được tham gia bầu cử."
        ],
        answer: "Toàn bộ quyền lực nhà nước tập trung vào tay một người đứng đầu là vua hoặc nữ hoàng.",
        chapter: 1
    },
    {
        question: "Câu 49: Cơ quan nhà nước nào sau đây là cơ quan xét xử cao nhất của nước CHXHCN Việt Nam?",
        options: [
            "Chủ tịch nước.",
            "Quốc hội.",
            "Tòa án nhân dân tối cao.",
            "Chính phủ."
        ],
        answer: "Tòa án nhân dân tối cao.",
        chapter: 1
    },
    {
        question: "Câu 50: Đâu là khẳng định đúng khi nói về quyền hạn của Quốc hội?",
        options: [
            "Lập pháp, lập quy.",
            "Lập hiến, lập pháp.",
            "Lập hiến, lập quy.",
            "Lập quy, giám sát."
        ],
        answer: "Lập hiến, lập pháp.",
        chapter: 1
    },
    {
        question: "Câu 51: Bộ Giáo dục và Đào tạo trong bộ máy nhà nước Việt Nam là cơ quan thuộc:",
        options: [
            "Hệ thống cơ quan Kiểm sát.",
            "Hệ thống cơ quan Quyền lực nhà nước.",
            "Hệ thống cơ quan Xét xử.",
            "Hệ thống cơ quan Hành chính nhà nước."
        ],
        answer: "Hệ thống cơ quan Hành chính nhà nước.",
        chapter: 1
    },
    {
        question: "Câu 52: Việc tổ chức, thực hiện quyền lực nhà nước Cộng hòa XHCN Việt Nam theo nguyên tắc nào?",
        options: [
            "Quyền lực nhà nước tập trung, có sự phân công, phối hợp.",
            "Tam quyền phân lập.",
            "Tập quyền XHCN.",
            "Quyền lực nhà nước tập trung, có sự phân quyền, đối trọng."
        ],
        answer: "Quyền lực nhà nước tập trung, có sự phân công, phối hợp.",
        chapter: 1
    },
    {
        question: "Câu 1: Pháp luật được hiểu là gì?",
        options: [
            "Những quy định mang tính cưỡng chế đối với các cơ quan, tổ chức trong xã hội.",
            "Những quy định mang tính định hướng cho mọi người trong xã hội lựa chọn.",
            "Những quy tắc xử sự mang tính bắt buộc chung do nhà nước đặt ra hoặc thừa nhận, được nhà nước bảo đảm thực hiện.",
            "Những quy định do cơ quan nhà nước ban hành để giải quyết các tranh chấp cụ thể."
        ],
        answer: "Những quy tắc xử sự mang tính bắt buộc chung do nhà nước đặt ra hoặc thừa nhận, được nhà nước bảo đảm thực hiện.",
        chapter: 2
    },
    {
        question: "Câu 2: Pháp luật được hình thành bằng cách nhà nước sáng tạo ra các quy phạm pháp luật mới được gọi là hình thức pháp luật gì?",
        options: [
            "Văn bản quy phạm pháp luật.",
            "Tiền lệ pháp.",
            "Tập quán pháp.",
            "Án lệ."
        ],
        answer: "Văn bản quy phạm pháp luật.",
        chapter: 2
    },
    {
        question: "Câu 3: Kiểu pháp luật tư sản thể hiện ý chí của chủ thể nào?",
        options: [
            "Giai cấp tư sản.",
            "Giai cấp chủ nô.",
            "Giai cấp nông nô.",
            "Giai cấp địa chủ."
        ],
        answer: "Giai cấp tư sản.",
        chapter: 2
    },
    {
        question: "Câu 4: Hình thái kinh tế - xã hội nào không có pháp luật?",
        options: [
            "Hình thái kinh tế - xã hội tư bản chủ nghĩa.",
            "Hình thái kinh tế - xã hội xã hội chủ nghĩa.",
            "Hình thái kinh tế - xã hội chiếm hữu nô lệ.",
            "Hình thái kinh tế - xã hội cộng sản nguyên thủy."
        ],
        answer: "Hình thái kinh tế - xã hội cộng sản nguyên thủy.",
        chapter: 2
    },
    {
        question: "Câu 5: Kiểu pháp luật phong kiến thể hiện ý chí của chủ thể nào?",
        options: [
            "Giai cấp nông nô.",
            "Giai cấp tư sản.",
            "Giai cấp địa chủ phong kiến.",
            "Giai cấp chủ nô."
        ],
        answer: "Giai cấp địa chủ phong kiến.",
        chapter: 2
    },
    {
        question: "Câu 6: Trong lịch sử loài người, đã có các hình thức pháp luật nào?",
        options: [
            "Tập quán pháp, tiền lệ pháp, văn bản quy phạm pháp luật.",
            "Tập quán pháp, tiền lệ pháp.",
            "Tập quán pháp, tiền lệ pháp, điều lệ pháp, văn bản quy phạm pháp luật.",
            "Tập quán pháp, văn bản quy phạm pháp luật."
        ],
        answer: "Tập quán pháp, tiền lệ pháp, văn bản quy phạm pháp luật.",
        chapter: 2
    },
    {
        question: "Câu 7: Pháp luật là phương tiện để khẳng định vai trò của giai cấp thống trị đối với toàn xã hội, đây là nội dung thể hiện yếu tố nào của pháp luật?",
        options: [
            "Hình thức của pháp luật.",
            "Bản chất xã hội của pháp luật.",
            "Bản chất giai cấp của pháp luật.",
            "Thuộc tính của pháp luật."
        ],
        answer: "Bản chất giai cấp của pháp luật.",
        chapter: 2
    },
    {
        question: "Câu 8: Đâu là bản chất của pháp luật Việt Nam?",
        options: [
            "Tính giai cấp và tính chính trị.",
            "Tính kinh tế và tính chính trị.",
            "Tính giai cấp và tính xã hội.",
            "Tính xã hội và tính kinh tế."
        ],
        answer: "Tính giai cấp và tính xã hội.",
        chapter: 2
    },
    {
        question: "Câu 9: Nhận định nào sau đây là SAI khi đề cập về tập quán pháp?",
        options: [
            "Hình thức pháp luật xuất hiện sớm nhất là tập quán pháp.",
            "Nhà nước Việt Nam có thừa nhận tập quán pháp.",
            "Các tập quán tồn tại phổ biến đều trở thành pháp luật.",
            "Hiện nay tập quán pháp được sử dụng hạn chế tại một số nước."
        ],
        answer: "Các tập quán tồn tại phổ biến đều trở thành pháp luật.",
        chapter: 2
    },
    {
        question: "Câu 10: Đề cập về mối quan hệ giữa pháp luật và kinh tế, khẳng định nào sau đây là SAI?",
        options: [
            "Pháp luật có thể tác động đến kinh tế theo hướng tích cực hoặc tiêu cực.",
            "Pháp luật giữ vai trò quyết định đối với kinh tế.",
            "Kinh tế giữ vai trò quyết định đối với pháp luật.",
            "Pháp luật có tính độc lập tương đối đối với kinh tế."
        ],
        answer: "Pháp luật giữ vai trò quyết định đối với kinh tế.",
        chapter: 2
    },
    {
        question: "Câu 11: Khi nghiên cứu về bản chất của pháp luật, thì khẳng định nào sau đây là SAI?",
        options: [
            "Pháp luật là ý chí giai cấp thống trị được đề lên thành luật.",
            "Pháp luật bao giờ cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội.",
            "Pháp luật là hiện tượng vừa mang tính giai cấp vừa mang tính xã hội.",
            "Pháp luật vừa mang tính chủ quan lại vừa mang tính khách quan."
        ],
        answer: "Pháp luật bao giờ cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội.",
        chapter: 2
    },
    {
        question: "Câu 12: Kiểu pháp luật XHCN thể hiện ý chí của chủ thể nào?",
        options: [
            "Giai cấp địa chủ.",
            "Giai cấp công nhân.",
            "Giai cấp tư sản.",
            "Giai cấp chủ nô."
        ],
        answer: "Giai cấp công nhân.",
        chapter: 2
    },
    {
        question: "Câu 13: Pháp luật và kinh tế có mối quan hệ như thế nào?",
        options: [
            "Pháp luật tác động tiêu cực vào kinh tế.",
            "Pháp luật tác động tích cực vào kinh tế.",
            "Kinh tế quyết định pháp luật.",
            "Pháp luật quyết định đến kinh tế."
        ],
        answer: "Kinh tế quyết định pháp luật.",
        chapter: 2
    },
    {
        question: "Câu 14: Luật giáo dục do cơ quan nào sau đây ban hành?",
        options: [
            "Chính phủ.",
            "Ủy ban thường vụ Quốc hội.",
            "Quốc hội.",
            "Bộ Giáo dục và Đào tạo."
        ],
        answer: "Quốc hội.",
        chapter: 2
    },
    {
        question: "Câu 15: Trong các đạo luật/bộ luật sau, luật nào không thuộc kiểu pháp luật chủ nô?",
        options: [
            "Luật mười hai bảng của nhà nước Hy Lạp.",
            "Bộ luật Hammurabi của nhà nước Babilon.",
            "Bộ luật Manu của nhà nước Ấn Độ.",
            "Quốc triều hình luật của nhà nước Đại Việt."
        ],
        answer: "Quốc triều hình luật của nhà nước Đại Việt.",
        chapter: 2
    },
    {
        question: "Câu 16: Pháp luật xuất hiện là do yếu tố nào?",
        options: [
            "Xuất phát từ những phong tục, tập quán, tín điều tôn giáo trong xã hội.",
            "Xuất phát từ ý chí của giai cấp thống trị trong xã hội.",
            "Nhà nước đặt ra.",
            "Nhà nước đặt ra hoặc thừa nhận."
        ],
        answer: "Nhà nước đặt ra hoặc thừa nhận.",
        chapter: 2
    },
    {
        question: "Câu 17: Theo quan điểm của Chủ nghĩa Mác- Lênin thì nguyên nhân chủ yếu làm xuất hiện Pháp luật là?",
        options: [
            "Do có thị tộc mạnh hơn xâm chiếm thị tộc yếu hơn và đặt ra quy tắc để thống trị thị tộc bị xâm chiếm đó.",
            "Do có sự phân chia giai cấp và đấu tranh giai cấp trong xã hội.",
            "Do có sự phân hóa lao động trong xã hội.",
            "Do các thành viên trong xã hội có mong muốn lập ra."
        ],
        answer: "Do có sự phân chia giai cấp và đấu tranh giai cấp trong xã hội.",
        chapter: 2
    },
    {
        question: "Câu 18: Khi nghiên cứu về nguồn gốc pháp luật, học thuyết nào quan niệm Pháp luật là do giai cấp thống trị lập nên để bảo vệ quyền và lợi ích của giai cấp mình?",
        options: [
            "Thuyết pháp luật tự nhiên.",
            "Thuyết tâm lý.",
            "Học thuyết Mác - Lênin.",
            "Thuyết thần học."
        ],
        answer: "Học thuyết Mác - Lênin.",
        chapter: 2
    },
    {
        question: "Câu 19: Đề cập về mối quan hệ giữa pháp luật và nhà nước, khẳng định nào sau đây là SAI?",
        options: [
            "Nhà nước đứng trên pháp luật vì nhà nước ban hành ra pháp luật.",
            "Pháp luật là phương tiện để tổ chức và thực hiện quyền lực nhà nước.",
            "Pháp luật và nhà nước đều là hai yếu tố thuộc kiến trúc thượng tầng.",
            "Pháp luật và nhà nước có mối quan hệ tác động qua lại lẫn nhau."
        ],
        answer: "Nhà nước đứng trên pháp luật vì nhà nước ban hành ra pháp luật.",
        chapter: 2
    },
    {
        question: "Câu 20: Pháp luật phát sinh và tồn tại trong xã hội như thế nào?",
        options: [
            "Xã hội không có giai cấp.",
            "Xã hội không có nhà nước.",
            "Xã hội có nhà nước.",
            "Xã hội có quy phạm xã hội."
        ],
        answer: "Xã hội có nhà nước.",
        chapter: 2
    },
    {
        question: "Câu 21: Pháp luật ghi nhận các quan hệ xã hội chủ yếu và xác định quyền, nghĩa vụ pháp lý của các chủ thể trong quan hệ đó, thể hiện chức năng nào của pháp luật?",
        options: [
            "Chức năng giáo dục.",
            "Chức năng bảo vệ.",
            "Chức năng điều chỉnh các quan hệ xã hội.",
            "Chức năng giao tiếp."
        ],
        answer: "Chức năng điều chỉnh các quan hệ xã hội.",
        chapter: 2
    },
    {
        question: "Câu 22: Tính cưỡng chế của pháp luật được thể hiện như thế nào?",
        options: [
            "Những hành vi vi phạm pháp luật đều bị xử phạt hành chính.",
            "Những hành vi vi phạm pháp luật đều bị xử lý kỷ luật.",
            "Những hành vi vi phạm pháp luật đều bị áp dụng hình phạt.",
            "Những hành vi vi phạm pháp luật đều có nguy cơ bị áp dụng biện pháp chế tài."
        ],
        answer: "Những hành vi vi phạm pháp luật đều có nguy cơ bị áp dụng biện pháp chế tài.",
        chapter: 2
    },
    {
        question: "Câu 23: Chức năng nào sau đây không phải là chức năng của pháp luật?",
        options: [
            "Chức năng lập hiến và lập pháp.",
            "Chức năng giáo dục.",
            "Chức năng bảo vệ các quan hệ xã hội.",
            "Chức năng điều chỉnh các quan hệ xã hội."
        ],
        answer: "Chức năng lập hiến và lập pháp.",
        chapter: 2
    },
    {
        question: "Câu 24: Kiểu pháp luật và hình thức pháp luật là hai khái niệm:",
        options: [
            "đối lập nhau.",
            "giống nhau.",
            "khác nhau.",
            "tương tự nhau."
        ],
        answer: "khác nhau.",
        chapter: 2
    },
    {
        question: "Câu 25: Xác định tiền đề dẫn đến sự xuất hiện của Pháp luật theo quan điểm của chủ nghĩa Mác - Lênin?",
        options: [
            "Xuất hiện chế độ tư hữu và có sự phân công lao động giữa các thành viên trong xã hội.",
            "Xuất hiện chế độ công hữu và phân chia giai cấp mà mâu thuẫn giai cấp đối kháng không thể điều hòa được.",
            "Xuất hiện chế độ tư hữu và phân chia giai cấp mà mâu thuẫn giai cấp đối kháng không thể điều hòa được.",
            "Xuất hiện chế độ công hữu và có sự phân công lao động giữa các thành viên trong xã hội."
        ],
        answer: "Xuất hiện chế độ tư hữu và phân chia giai cấp mà mâu thuẫn giai cấp đối kháng không thể điều hòa được.",
        chapter: 2
    },
    {
        question: "Câu 26: Pháp luật được hình thành bằng cách nhà nước thừa nhận các bản án, quyết định của Tòa án trước đó được gọi là hình thức pháp luật gì?",
        options: [
            "Án lệ.",
            "Tiền lệ pháp.",
            "Tập quán pháp.",
            "Văn bản quy phạm pháp luật."
        ],
        answer: "Tiền lệ pháp.",
        chapter: 2
    },
    {
        question: "Câu 27: Xác định đặc điểm chung của pháp luật và đạo đức?",
        options: [
            "Đều tồn tại ở dạng thành văn.",
            "Đều do nhà nước đặt ra hoặc thừa nhận.",
            "Đều mang tính bắt buộc chung.",
            "Đều mang tính quy phạm."
        ],
        answer: "Đều mang tính quy phạm.",
        chapter: 2
    },
    {
        question: "Câu 28: Chỉ ra nhận định nào sau đây Sai khi nói về Án lệ?",
        options: [
            "Án lệ là bản án.",
            "Án lệ do cơ quan lập pháp ban hành.",
            "Án lệ được áp dụng trong các lần xét xử tiếp theo.",
            "Án lệ là phương thức làm luật của Thẩm phán."
        ],
        answer: "Án lệ do cơ quan lập pháp ban hành.",
        chapter: 2
    },
    {
        question: "Câu 29: Pháp luật quy định những phương tiện nhằm mục đích bảo vệ các quan hệ xã hội, thể hiện chức năng nào của pháp luật?",
        options: [
            "Chức năng giáo dục.",
            "Chức năng bảo vệ.",
            "Chức năng điều chỉnh các quan hệ xã hội.",
            "Chức năng giao tiếp."
        ],
        answer: "Chức năng bảo vệ.",
        chapter: 2
    },
    {
        question: "Câu 30: Trong lịch sử đã xuất hiện những kiểu pháp luật nào?",
        options: [
            "Pháp luật chủ nô, pháp luật phong kiến.",
            "Pháp luật chủ nô, pháp luật phong kiến, pháp luật tư sản.",
            "Pháp luật cộng sản nguyên thủy.",
            "Pháp luật chủ nô, pháp luật phong kiến, pháp luật tư sản, pháp luật xã hội chủ nghĩa."
        ],
        answer: "Pháp luật chủ nô, pháp luật phong kiến, pháp luật tư sản, pháp luật xã hội chủ nghĩa.",
        chapter: 2
    },
    {
        question: "Câu 31: Khi nghiên cứu về bản chất pháp luật thì khẳng định nào sau đây là ĐÚNG?",
        options: [
            "Bất cứ pháp luật nào cũng chỉ là hệ thống quy tắc xử sự dùng để duy trì sự thống trị của giai cấp này đối với giai cấp khác.",
            "Bất cứ pháp luật nào cũng đều thể hiện bản chất giai cấp và bản chất xã hội.",
            "Bất cứ pháp luật nào cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội.",
            "Bất cứ pháp luật nào cũng thể hiện bản chất xã hội rõ nét hơn bản chất giai cấp."
        ],
        answer: "Bất cứ pháp luật nào cũng đều thể hiện bản chất giai cấp và bản chất xã hội.",
        chapter: 2
    },
    {
        question: "Câu 32: Căn cứ nào để phân chia các kiểu pháp luật trong lịch sử?",
        options: [
            "Hình thái kinh tế - xã hội.",
            "Kiểu nhà nước.",
            "Bản chất nhà nước.",
            "Hình thức nhà nước."
        ],
        answer: "Hình thái kinh tế - xã hội.",
        chapter: 2
    },
    {
        question: "Câu 33: Hình thức pháp luật nào xuất hiện sớm nhất và được sử dụng nhiều trong nhà nước chủ nô?",
        options: [
            "Điều lệ pháp.",
            "Tập quán pháp.",
            "Văn bản quy phạm pháp luật.",
            "Tiền lệ pháp."
        ],
        answer: "Tập quán pháp.",
        chapter: 2
    },
    {
        question: "Câu 34: Xác định điểm chung của pháp luật và tín điều tôn giáo?",
        options: [
            "Đều mang tính bắt buộc chung.",
            "Đều tồn tại ở dạng thành văn.",
            "Đều mang tính quy phạm.",
            "Đều do nhà nước đặt ra hoặc thừa nhận."
        ],
        answer: "Đều mang tính quy phạm.",
        chapter: 2
    },
    {
        question: "Câu 35: Khi nghiên cứu về các thuộc tính của pháp luật, chỉ ra khẳng định nào sau đây là SAI?",
        options: [
            "Pháp luật và đạo đức đều mang tính quy phạm.",
            "Bất kỳ cá nhân, tổ chức nào khi vi phạm pháp luật đều bị áp dụng biện pháp chế tài.",
            "Pháp luật là thước đo cho hành vi xử sự của con người.",
            "Việc tuân theo pháp luật thường phụ thuộc vào ý muốn chủ quan của con người."
        ],
        answer: "Việc tuân theo pháp luật thường phụ thuộc vào ý muốn chủ quan của con người.",
        chapter: 2
    },
    {
        question: "Câu 36: Xác định điểm chung của pháp luật và tín điều tôn giáo?",
        options: [
            "Đều mang tính bắt buộc chung.",
            "Đều mang tính quy phạm.",
            "Đều do nhà nước đặt ra hoặc thừa nhận.",
            "Đều tồn tại ở dạng thành văn."
        ],
        answer: "Đều mang tính quy phạm.",
        chapter: 2
    },
    {
        question: "Câu 37: Bộ phận nào của quy phạm pháp luật nhằm bảo đảm cho pháp luật được thực hiện nghiêm chỉnh?",
        options: [
            "Quy định.",
            "Chế định.",
            "Chế tài.",
            "Giả định."
        ],
        answer: "Chế tài.",
        chapter: 2
    },
    {
        question: "Câu 38: Xác định cơ quan có thẩm quyền ban hành Lệnh.",
        options: [
            "Chính phủ.",
            "Chủ tịch nước.",
            "Thanh tra Chính phủ.",
            "Quốc hội."
        ],
        answer: "Chủ tịch nước.",
        chapter: 2
    },
    {
        question: "Câu 39: Trong xã hội có giai cấp, quy phạm nào sau đây có vai trò quan trọng nhất đối với việc duy trì trật tự xã hội?",
        options: [
            "Quy phạm pháp luật.",
            "Quy phạm tôn giáo.",
            "Quy phạm đạo đức.",
            "Quy phạm tập quán."
        ],
        answer: "Quy phạm pháp luật.",
        chapter: 2
    },
    {
        question: "Câu 40: Xác định cơ quan có thẩm quyền ban hành Nghị định.",
        options: [
            "Ủy ban thường vụ Quốc hội.",
            "Chính phủ.",
            "Bộ Nội vụ.",
            "Quốc hội."
        ],
        answer: "Chính phủ.",
        chapter: 2
    },
    {
        question: "Câu 41: Trong các văn bản sau, văn bản nào không phải là văn bản quy phạm pháp luật?",
        options: [
            "Nghị quyết của Quốc hội.",
            "Nghị quyết của Hội đồng nhân dân.",
            "Thông tư của Bộ Giáo dục - Đào tạo.",
            "Nghị quyết Hội nghị Trung ương Đảng."
        ],
        answer: "Nghị quyết Hội nghị Trung ương Đảng.",
        chapter: 2
    },
    {
        question: "Câu 42: Luật doanh nghiệp số 59/2020/QH14 được Quốc hội thông qua ngày 17/6/2020 có hiệu lực từ ngày 01/01/2021. Vậy hiệu lực của Nghị định số 96/2015/NĐ-CP quy định chi tiết một số điều của Luật doanh nghiệp năm 2014 sẽ như thế nào?",
        options: [
            "Ngưng hiệu lực.",
            "Có hiệu lực đến khi ban hành Nghị định mới.",
            "Tiếp tục có hiệu lực, chỉ các điều được sửa đổi, bổ sung thì hết hiệu lực.",
            "Chấm dứt hiệu lực."
        ],
        answer: "Chấm dứt hiệu lực.",
        chapter: 2
    },
    {
        question: "Câu 43: Trường hợp Quốc hội ban hành Luật số 42/2019/QH14 sửa đổi, bổ sung một số điều của Luật kinh doanh bảo hiểm, Luật Sở hữu trí tuệ, có hiệu lực kể từ ngày 01/11/2019, vậy từ ngày 02/11/2019, hiệu lực của Luật sở hữu trí tuệ năm 2005 sẽ như thế nào?",
        options: [
            "Tiếp tục có hiệu lực đến khi ban hành Luật mới.",
            "Tiếp tục có hiệu lực, chỉ các điều được sửa đổi, bổ sung thì hết hiệu lực.",
            "Ngưng hiệu lực.",
            "Chấm dứt hiệu lực."
        ],
        answer: "Tiếp tục có hiệu lực, chỉ các điều được sửa đổi, bổ sung thì hết hiệu lực.",
        chapter: 2
    },
    {
        question: "Câu 44: Khẳng định nào dưới đây là SAI khi nói về Văn bản quy phạm pháp luật:",
        options: [
            "Được ban hành theo đúng thẩm quyền.",
            "Chỉ được ban hành tại kỳ họp Quốc hội hàng năm.",
            "Có chứa quy phạm pháp luật.",
            "Được ban hành theo đúng hình thức, trình tự, thủ tục."
        ],
        answer: "Chỉ được ban hành tại kỳ họp Quốc hội hàng năm.",
        chapter: 2
    },
    {
        question: "Câu 45: A thực hiện hành vi giết B ngày 01/02/1987. Xác định văn bản pháp luật áp dụng để xử lý hành vi của A?",
        options: [
            "Bộ luật hình sự năm 2015 được thông qua ngày 27/11/2015, có hiệu lực từ ngày 01/01/2018.",
            "Luật sửa đổi, bổ sung một số điều của Bộ luật hình sự năm 2015, được thông qua ngày 20/6/2017, có hiệu lực từ 01/01/2018.",
            "Bộ luật hình sự năm 1999 được thông qua ngày 21/12/1999, có hiệu lực từ ngày 01/7/2000.",
            "Bộ luật hình sự năm 1985 được thông qua ngày 27/6/1985, có hiệu lực từ ngày 01/01/1986."
        ],
        answer: "Bộ luật hình sự năm 1985 được thông qua ngày 27/6/1985, có hiệu lực từ ngày 01/01/1986.",
        chapter: 2
    },
    {
        question: "Câu 46: Quy phạm pháp luật do chủ thể nào ban hành?",
        options: [
            "Do các cơ quan Nhà nước ban hành.",
            "Cơ quan Nhà nước có thẩm quyền ban hành.",
            "Do cơ quan Nhà nước có thẩm quyền ban hành hoặc phối hợp ban hành.",
            "Do tổ chức chính trị xã hội ban hành."
        ],
        answer: "Do cơ quan Nhà nước có thẩm quyền ban hành hoặc phối hợp ban hành.",
        chapter: 2
    },
    {
        question: "Câu 47: Doanh nghiệp A thực hiện hành vi cạnh tranh không lành mạnh ngày 01/02/2019. Xác định văn bản áp dụng để xử lý hành vi của A?",
        options: [
            "Luật cạnh tranh năm 2018 được thông qua ngày 12/6/2018, có hiệu lực từ ngày 01/7/2019.",
            "Nghị định số 35/2020/NĐ-CP ngày 24/3/2020 quy định chi tiết một số điều của Luật cạnh tranh.",
            "Nghị định số 75/2019/NĐ-CP ngày 26/9/2019 quy định về xử phạt vi phạm hành chính trong lĩnh vực cạnh tranh.",
            "Luật cạnh tranh năm 2004 được thông qua ngày 03/12/2004, có hiệu lực từ ngày 01/7/2005."
        ],
        answer: "Luật cạnh tranh năm 2004 được thông qua ngày 03/12/2004, có hiệu lực từ ngày 01/7/2005.",
        chapter: 2
    },
    {
        question: "Câu 48: Trường hợp Quốc hội ban hành Luật bảo vệ môi trường năm 2020 thay thế Luật bảo vệ môi trường năm 2005 thì hiệu lực của Nghị định 25/2008/NĐ-CP về sửa đổi, bổ sung một số điều của Nghị định 80/2006/NĐ-CP ngày 09/8/2006 về việc quy định chi tiết và hướng dẫn thi hành một số điều của Luật bảo vệ môi trường sẽ như thế nào?",
        options: [
            "Ngưng hiệu lực.",
            "Tiếp tục có hiệu lực.",
            "Chấm dứt hiệu lực.",
            "Có hiệu lực đến khi ban hành Nghị định mới."
        ],
        answer: "Chấm dứt hiệu lực.",
        chapter: 2
    },
    {
        question: "Câu 49: \"Phải chịu trách nhiệm hình sự\" trong Điều 13 Bộ luật hình sự năm 2015 \"Người phạm tội trong tình trạng mất khả năng nhận thức hoặc khả năng điều khiển hành vi của mình do dùng rượu, bia hoặc chất kích thích mạnh khác, thì vẫn phải chịu trách nhiệm hình sự.\" là bộ phận nào của quy phạm pháp luật?",
        options: [
            "Quy phạm pháp luật.",
            "Quy định.",
            "Chế tài.",
            "Giả định."
        ],
        answer: "Quy định.",
        chapter: 2
    },
    {
        question: "Câu 50: Xác định bộ phận quy định trong quy phạm pháp luật sau (Khoản 1 Điều 27 Bộ luật dân sự năm 2015) \"Cá nhân có quyền yêu cầu cơ quan nhà nước có thẩm quyền công nhận việc thay đổi họ trong trường hợp sau đây: Thay đổi họ cho con đẻ từ họ của cha đẻ sang họ của mẹ đẻ hoặc ngược lại;\"",
        options: [
            "Cá nhân có quyền yêu cầu cơ quan nhà nước có thẩm quyền.",
            "Có quyền yêu cầu cơ quan nhà nước có thẩm quyền công nhận việc thay đổi họ.",
            "Cá nhân có quyền yêu cầu cơ quan nhà nước có thẩm quyền công nhận việc thay đổi họ.",
            "Thay đổi họ cho con đẻ từ họ của cha đẻ sang họ của mẹ đẻ hoặc ngược lại;"
        ],
        answer: "Cá nhân có quyền yêu cầu cơ quan nhà nước có thẩm quyền công nhận việc thay đổi họ.",
        chapter: 2
    },
    {
        question: "Câu 51: Văn bản quy phạm pháp luật không bị hết hiệu lực toàn bộ kể từ thời điểm nào sau đây?",
        options: [
            "Hết thời hạn có hiệu lực được quy định trong văn bản.",
            "Được sửa đổi, bổ sung bằng văn bản quy phạm pháp luật mới của cơ quan đã ban hành văn bản đó.",
            "Được thay thế bằng văn bản quy phạm pháp luật mới của cơ quan đã ban hành văn bản đó.",
            "Bị bãi bỏ bằng một văn bản của cơ quan nhà nước có thẩm quyền."
        ],
        answer: "Được sửa đổi, bổ sung bằng văn bản quy phạm pháp luật mới của cơ quan đã ban hành văn bản đó.",
        chapter: 2
    },
    {
        question: "Câu 52: Xác định cơ quan có thẩm quyền ban hành Thông tư.",
        options: [
            "Chính phủ.",
            "Chủ tịch nước.",
            "Chủ nhiệm văn phòng chính phủ.",
            "Ủy ban thường vụ Quốc hội."
        ],
        answer: "Chủ nhiệm văn phòng chính phủ.",
        chapter: 2
    },
    {
        question: "Câu 53: Xác định cơ quan có thẩm quyền ban hành Thông tư.",
        options: [
            "Viện trưởng Viện kiểm sát nhân dân tối cao.",
            "Chủ tịch nước.",
            "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
            "Ủy ban nhân dân"
        ],
        answer: "Viện trưởng Viện kiểm sát nhân dân tối cao.",
        chapter: 2
    },
    {
        question: "Câu 54: Lựa chọn loại Văn bản quy phạm pháp luật do Tổng kiểm toán nhà nước ban hành?",
        options: [
            "Nghị định.",
            "Thông tư.",
            "Chỉ thị.",
            "Quyết định."
        ],
        answer: "Quyết định.",
        chapter: 2
    },
    {
        question: "Câu 55: Lựa chọn loại Văn bản quy phạm pháp luật do Quốc hội ban hành?",
        options: [
            "Thông tư.",
            "Nghị quyết.",
            "Quyết định.",
            "Nghị định."
        ],
        answer: "Nghị quyết.",
        chapter: 2
    },
    {
        question: "Câu 56: Văn bản quy phạm pháp luật có giá trị pháp lý cao nhất?",
        options: [
            "Bộ luật hình sự.",
            "Luật thương mại.",
            "Hiến pháp.",
            "Bộ luật dân sự."
        ],
        answer: "Hiến pháp.",
        chapter: 2
    },
    {
        question: "Câu 57: Xác định bộ phận chế tài trong quy phạm pháp luật sau (Khoản 1 Điều 147 Bộ luật hình sự năm 2015): Người nào đủ 18 tuổi trở lên mà lôi kéo, dụ dỗ, ép buộc người dưới 16 tuổi trình diễn khiêu dâm hoặc trực tiếp chứng kiến việc trình diễn khiêu dâm dưới mọi hình thức, thì bị phạt tù từ 06 tháng đến 03 năm.",
        options: [
            "Người nào đủ 18 tuổi trở lên.",
            "Người nào đủ 18 tuổi trở lên mà lôi kéo, dụ dỗ, ép buộc người dưới 16 tuổi trình diễn khiêu dâm hoặc trực tiếp chứng kiến việc trình diễn khiêu dâm dưới mọi hình thức.",
            "Bị phạt tù từ 06 tháng đến 03 năm.",
            "Người nào đủ 18 tuổi trở lên mà lôi kéo, dụ dỗ, ép buộc người dưới 16 tuổi."
        ],
        answer: "Bị phạt tù từ 06 tháng đến 03 năm.",
        chapter: 2
    },
    {
        question: "Câu 58: Nếu 2 văn bản do 2 cơ quan ban hành về cùng 1 vấn đề nhưng có nội dung mâu thuẫn nhau thì áp dụng văn bản nào?",
        options: [
            "Văn bản ra đời sau.",
            "Văn bản quy định chi tiết hơn.",
            "Văn bản có hiệu lực pháp lý cao hơn.",
            "Văn bản ra đời trước."
        ],
        answer: "Văn bản có hiệu lực pháp lý cao hơn.",
        chapter: 2
    },
    {
        question: "Câu 59: Xác định thời điểm có hiệu lực của văn bản quy phạm pháp luật của Hội đồng nhân dân, Ủy ban nhân dân cấp tỉnh?",
        options: [
            "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn bảy ngày, kể từ ngày công bố hoặc ký ban hành.",
            "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn mười ngày, kể từ ngày công bố hoặc ký ban hành.",
            "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn bốn mươi lăm ngày, kể từ ngày công bố hoặc ký ban hành.",
            "Được quy định trong văn bản quy phạm pháp luật."
        ],
        answer: "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn bảy ngày, kể từ ngày công bố hoặc ký ban hành.",
        chapter: 2
    },
    {
        question: "Câu 60: Bộ phận nào của quy phạm pháp luật nêu lên những điều kiện, hoàn cảnh và chủ thể dự kiến chịu sự tác động của quy phạm pháp luật?",
        options: [
            "Chế định.",
            "Chế tài.",
            "Quy định.",
            "Giả định."
        ],
        answer: "Giả định.",
        chapter: 2
    },
    {
        question: "Câu 61: Xác định cơ quan có thẩm quyền ban hành Quyết định quy phạm pháp luật.",
        options: [
            "Thủ tướng Chính phủ.",
            "Chủ tịch Ủy ban nhân dân.",
            "Chánh thanh tra chính phủ.",
            "Bộ trưởng."
        ],
        answer: "Thủ tướng Chính phủ.",
        chapter: 2
    },
    {
        question: "Câu 62: Các bộ phận của quy phạm pháp luật được trình bày theo trình tự như thế nào?",
        options: [
            "Giả định - Quy định - Chế tài.",
            "Không nhất thiết phải theo trình tự nào.",
            "Quy định - Chế tài - Giả định.",
            "Giả định - Chế tài - Quy định."
        ],
        answer: "Không nhất thiết phải theo trình tự nào.",
        chapter: 2
    },
    {
        question: "Câu 63: Trường hợp Quốc hội ban hành Luật cạnh tranh năm 2018 thay thế Luật cạnh tranh năm 2004 thì hiệu lực của Nghị định 116/2005/NĐ-CP hướng dẫn Luật cạnh tranh sẽ như thế nào?",
        options: [
            "Chấm dứt hiệu lực.",
            "Ngưng hiệu lực.",
            "Tiếp tục có hiệu lực.",
            "Có hiệu lực đến khi ban hành Nghị định mới."
        ],
        answer: "Chấm dứt hiệu lực.",
        chapter: 2
    },
    {
        question: "Câu 64: A thực hiện hành vi giết B ngày 01/02/2018. Chọn phương án áp dụng để xử lý hành vi của A?",
        options: [
            "Bộ luật hình sự năm 1985 được thông qua ngày 27/6/1985, có hiệu lực từ ngày 01/01/1986.",
            "Bộ luật hình sự năm 1999 được thông qua ngày 21/12/1999, có hiệu lực từ ngày 01/7/2000.",
            "Không áp dụng được Bộ luật hình sự năm 1985, Bộ luật hình sự năm 1999, Bộ luật hình sự năm 2015.",
            "Bộ luật hình sự năm 2015 được thông qua ngày 27/11/2015, có hiệu lực từ ngày 01/01/2018."
        ],
        answer: "Bộ luật hình sự năm 2015 được thông qua ngày 27/11/2015, có hiệu lực từ ngày 01/01/2018.",
        chapter: 2
    },
    {
        question: "Câu 65: Lựa chọn loại Văn bản quy phạm pháp luật do Chủ tịch nước ban hành?",
        options: [
            "Lệnh.",
            "Chỉ thị.",
            "Thông tư.",
            "Nghị định."
        ],
        answer: "Lệnh.",
        chapter: 2
    },
    {
        question: "Câu 66: Luật doanh nghiệp số 59/2020/QH14 được Quốc hội thông qua ngày 17/6/2020 có hiệu lực từ ngày 01/01/2021. Vậy hiệu lực của Nghị định số 78/2015/NĐ-CP về đăng ký doanh nghiệp sẽ như thế nào?",
        options: [
            "Ngưng hiệu lực.",
            "Có hiệu lực đến khi ban hành Nghị định mới.",
            "Chấm dứt hiệu lực.",
            "Tiếp tục có hiệu lực, chỉ các điều được sửa đổi, bổ sung thì hết hiệu lực."
        ],
        answer: "Có hiệu lực đến khi ban hành Nghị định mới.",
        chapter: 2
    },
    {
        question: "Câu 67: Chọn phương án ĐÚNG khi nói về thời điểm có hiệu lực của Văn bản QPPL được ban hành theo thủ tục rút gọn.",
        options: [
            "Ngày ký.",
            "Ngày ký hoặc ban hành.",
            "Ngày thông qua.",
            "Ngày ban hành."
        ],
        answer: "Ngày ký hoặc ban hành.",
        chapter: 2
    },
    {
        question: "Câu 68: Khẳng định nào sau đây là SAI khi nói về quy phạm pháp luật?",
        options: [
            "Quy phạm phạm pháp luật là quy tắc xử sự chung.",
            "Quy phạm phạm pháp luật được áp dụng lặp đi lặp lại nhiều lần.",
            "Quy phạm phạm pháp luật là quy tắc xử sự riêng.",
            "Quy phạm phạm pháp luật có hiệu lực bắt buộc chung."
        ],
        answer: "Quy phạm phạm pháp luật là quy tắc xử sự riêng.",
        chapter: 2
    },
    {
        question: "Câu 69: Xác định cơ quan có thẩm quyền ban hành Quyết định quy phạm pháp luật.",
        options: [
            "Ủy ban nhân dân.",
            "Bộ trưởng.",
            "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
            "Chính phủ."
        ],
        answer: "Bộ trưởng.",
        chapter: 2
    },
    {
        question: "Câu 70: Xác định cơ quan có thẩm quyền ban hành Nghị quyết quy phạm pháp luật",
        options: [
            "Bộ trưởng.",
            "Ủy ban nhân dân.",
            "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
            "Chính phủ."
        ],
        answer: "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
        chapter: 2
    },
    {
        question: "Câu 71: A thực hiện hành vi giết B ngày 01/02/2016. Xác định văn bản pháp luật áp dụng để xử lý hành vi của A?",
        options: [
            "Bộ luật hình sự năm 1985 được thông qua ngày 27/6/1985, có hiệu lực từ ngày 01/01/1986.",
            "Bộ luật hình sự năm 2015 được thông qua ngày 27/11/2015, có hiệu lực từ ngày 01/01/2018.",
            "Luật sửa đổi, bổ sung một số điều của Bộ luật hình sự năm 2015, được thông qua ngày 20/6/2017, có hiệu lực từ 01/01/2018.",
            "Bộ luật hình sự năm 1999 được thông qua ngày 21/12/1999, có hiệu lực từ ngày 01/7/2000."
        ],
        answer: "Bộ luật hình sự năm 1999 được thông qua ngày 21/12/1999, có hiệu lực từ ngày 01/7/2000.",
        chapter: 2
    },
    {
        question: "Câu 72: Lựa chọn loại Văn bản quy phạm pháp luật do Viện trưởng Viện kiểm sát nhân dân tối cao ban hành?",
        options: [
            "Chỉ thị.",
            "Quyết định.",
            "Thông tư.",
            "Nghị định."
        ],
        answer: "Thông tư.",
        chapter: 2
    },
    {
        question: "Câu 73: Xác định bộ phận quy định trong quy phạm pháp luật sau (Khoản 1 Điều 25 Luật giao thông đường bộ năm 2008) \"Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt, phương tiện giao thông đường sắt được quyền ưu tiên đi trước\".",
        options: [
            "Phương tiện giao thông đường sắt.",
            "Được quyền ưu tiên đi trước.",
            "Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt, phương tiện giao thông đường sắt.",
            "Trên đoạn đường bộ giao nhau cùng mức với đường sắt, cầu đường bộ đi chung với đường sắt."
        ],
        answer: "Được quyền ưu tiên đi trước.",
        chapter: 2
    },
    {
        question: "Câu 74: Xác định cơ quan có thẩm quyền ban hành Thông tư.",
        options: [
            "Chủ tịch nước.",
            "Ủy ban nhân dân.",
            "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
            "Viện trưởng Viện kiểm sát nhân dân tối cao."
        ],
        answer: "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
        chapter: 2
    },
    {
        question: "Câu 75: Lựa chọn loại Văn bản quy phạm pháp luật do Thủ tướng Chính phủ ban hành?",
        options: [
            "Thông tư.",
            "Nghị định.",
            "Chỉ thị.",
            "Quyết định."
        ],
        answer: "Quyết định.",
        chapter: 2
    },
    {
        question: "Câu 76: Trường hợp Quốc hội ban hành Luật cạnh tranh năm 2018 thay thế Luật cạnh tranh năm 2004 thì hiệu lực của Luật cạnh tranh năm 2004 sẽ như thế nào?",
        options: [
            "Có hiệu lực đến khi ban hành Nghị định mới.",
            "Chấm dứt hiệu lực.",
            "Ngưng hiệu lực.",
            "Tiếp tục có hiệu lực."
        ],
        answer: "Chấm dứt hiệu lực.",
        chapter: 2
    },
    {
        question: "Câu 77: Xác định bộ phận giả định trong quy phạm pháp luật sau (Khoản 1 Điều 27 Luật giao thông đường bộ năm 2008) \"Người điều khiển phương tiện trong hầm đường bộ ngoài việc tuân thủ các quy tắc giao thông quy định tại Luật này còn phải thực hiện các quy định sau đây: … 2. Chỉ được dừng xe, đỗ xe ở nơi quy định.\"",
        options: [
            "Chỉ được dừng xe, đỗ xe ở nơi quy định.",
            "tuân thủ các quy tắc giao thông quy định tại Luật này.",
            "Người điều khiển phương tiện trong hầm đường bộ.",
            "Người điều khiển phương tiện."
        ],
        answer: "Người điều khiển phương tiện trong hầm đường bộ.",
        chapter: 2
    },
    {
        question: "Câu 78: Xác định bộ phận giả định trong quy phạm pháp luật sau: \"Người nào dùng vũ lực, đe dọa dùng vũ lực hoặc lợi dụng tình trạng không thể tự vệ được của nạn nhân hoặc thủ đoạn khác giao cấu hoặc thực hiện hành vi quan hệ tình dục khác trái với ý muốn của nạn nhân, thì bị phạt tù từ 02 năm đến 07 năm. (Khoản 1, Điều 141 Bộ luật Hình sự 2015 (sửa đổi, bổ sung 2017).",
        options: [
            "Người nào dùng vũ lực, đe dọa dùng vũ lực.",
            "Người nào lợi dụng tình trạng không thể tự vệ được của nạn nhân.",
            "Người nào dùng thủ đoạn khác giao cấu hoặc thực hiện hành vi quan hệ tình dục khác trái với ý muốn của nạn nhân.",
            "Người nào dùng vũ lực, đe dọa dùng vũ lực hoặc lợi dụng tình trạng không thể tự vệ được của nạn nhân hoặc thủ đoạn khác giao cấu hoặc thực hiện hành vi quan hệ tình dục khác trái với ý muốn của nạn nhân."
        ],
        answer: "Người nào dùng vũ lực, đe dọa dùng vũ lực hoặc lợi dụng tình trạng không thể tự vệ được của nạn nhân hoặc thủ đoạn khác giao cấu hoặc thực hiện hành vi quan hệ tình dục khác trái với ý muốn của nạn nhân.",
        chapter: 2
    },
    {
        question: "Câu 79: Xác định thời điểm có hiệu lực của văn bản quy phạm pháp luật của cơ quan nhà nước ở trung ương?",
        options: [
            "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn bốn mươi lăm ngày, kể từ ngày công bố hoặc ký ban hành.",
            "Được quy định trong văn bản quy phạm pháp luật.",
            "Kể từ ngày công bố văn bản quy phạm pháp luật.",
            "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn mười ngày, kể từ ngày công bố hoặc ký ban hành."
        ],
        answer: "Được quy định trong văn bản quy phạm pháp luật nhưng không sớm hơn mười ngày, kể từ ngày công bố hoặc ký ban hành.",
        chapter: 2
    },
    {
        question: "Câu 80: Trong hệ thống pháp luật Việt Nam để được coi là một ngành luật độc lập, thì phải thỏa mãn điều kiện gì?",
        options: [
            "Phải có đối tượng điều chỉnh riêng.",
            "Phải có hệ thống chế tài riêng.",
            "Phải có đối tượng điều chỉnh và phương pháp điều chỉnh riêng.",
            "Phải có phương pháp điều chỉnh riêng."
        ],
        answer: "Phải có đối tượng điều chỉnh và phương pháp điều chỉnh riêng.",
        chapter: 2
    },
    {
        question: "Câu 81: Xác định bộ phận giả định trong quy phạm pháp luật sau (Điều 13 Bộ luật hình sự năm 2015): \"Người phạm tội trong tình trạng mất khả năng nhận thức hoặc khả năng điều khiển hành vi của mình do dùng rượu, bia hoặc chất kích thích mạnh khác, thì vẫn phải chịu trách nhiệm hình sự.\"",
        options: [
            "Người phạm tội trong tình trạng mất khả năng nhận thức.",
            "Phải chịu trách nhiệm hình sự.",
            "Người phạm tội trong tình trạng mất khả năng khả năng điều khiển hành vi của mình.",
            "Người phạm tội trong tình trạng mất khả năng nhận thức hoặc khả năng điều khiển hành vi của mình do dùng rượu, bia hoặc chất kích thích mạnh khác."
        ],
        answer: "Người phạm tội trong tình trạng mất khả năng nhận thức hoặc khả năng điều khiển hành vi của mình do dùng rượu, bia hoặc chất kích thích mạnh khác.",
        chapter: 2
    },
    {
        question: "Câu 82: Lựa chọn loại Văn bản quy phạm pháp luật do Hội đồng nhân dân ban hành?",
        options: [
            "Chỉ thị.",
            "Thông tư.",
            "Nghị định.",
            "Nghị quyết."
        ],
        answer: "Nghị quyết.",
        chapter: 2
    },
    {
        question: "Câu 83: Khẳng định nào sau đây là đúng?",
        options: [
            "Trong mọi trường hợp đều không áp dụng hiệu lực hồi tố của văn bản quy phạm pháp luật.",
            "Hiệu lực hồi tố của văn bản quy phạm pháp luật được nhà nước thừa nhận và áp dụng phổ biến.",
            "Trong những trường hợp thật cần thiết, phù hợp với nguyên tắc nhân đạo XHCN, nhà nước cho phép sử dụng hiệu lực hồi tố trong một số quy phạm cụ thể.",
            "Hiệu lực hồi tố của văn bản quy phạm pháp luật cho phép quy định trách nhiệm pháp lý mới đối với hành vi mà vào thời điểm thực hiện hành vi đó pháp luật không quy định trách nhiệm pháp lý."
        ],
        answer: "Trong những trường hợp thật cần thiết, phù hợp với nguyên tắc nhân đạo XHCN, nhà nước cho phép sử dụng hiệu lực hồi tố trong một số quy phạm cụ thể.",
        chapter: 2
    },
    {
        question: "Câu 84: Trong các nghĩa vụ sau đây, nghĩa vụ nào không phải là nghĩa vụ pháp lý?",
        options: [
            "Thanh niên đủ 18 tuổi phải thực hiện nghĩa vụ quân sự.",
            "Người kinh doanh phải thực hiện nghĩa vụ nộp thuế.",
            "Đoàn viên thanh niên phải chấp hành Điều lệ Đoàn.",
            "Con cái có nghĩa vụ phụng dưỡng cha mẹ."
        ],
        answer: "Đoàn viên thanh niên phải chấp hành Điều lệ Đoàn.",
        chapter: 3
    },
    {
        question: "Câu 85: Người thành niên là người:",
        options: [
            "từ đủ 18 tuổi trở lên.",
            "từ đủ 16 tuổi trở lên.",
            "từ 16 tuổi trở lên.",
            "từ 18 tuổi trở lên."
        ],
        answer: "từ đủ 18 tuổi trở lên.",
        chapter: 3
    },
    {
        question: "Câu 86: Năng lực hành vi của chủ thể trong quan hệ pháp luật được hiểu là gì?",
        options: [
            "Khả năng của chủ thể bằng chính hành vi của mình để tham gia vào quan hệ pháp luật đó.",
            "Khả năng chủ thể có thể tham gia vào quan hệ pháp luật với tư cách là một chủ thể và tự mình thực hiện các quyền, nghĩa vụ phát sinh từ mối quan hệ pháp luật đã tham gia.",
            "Khả năng của chủ thể được pháp luật quy định để được tham gia quan hệ pháp luật đó.",
            "Khả năng của chủ thể được pháp luật quy định và bằng chính hành vi của mình tham gia vào quan hệ đó."
        ],
        answer: "Khả năng của chủ thể bằng chính hành vi của mình để tham gia vào quan hệ pháp luật đó.",
        chapter: 3
    },
    {
        question: "Câu 87: Chủ thể của quan hệ pháp luật là gì?",
        options: [
            "Những giá trị mà các chủ thể quan hệ pháp luật mong muốn đạt được.",
            "Đối tượng mà các chủ thể tác động đến khi tham gia vào quan hệ pháp luật.",
            "Các bên tham gia vào quan hệ pháp luật.",
            "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật."
        ],
        answer: "Các bên tham gia vào quan hệ pháp luật.",
        chapter: 3
    },
    {
        question: "Câu 88: Chỉ ra đâu không phải là yếu tố cấu thành quan hệ pháp luật?",
        options: [
            "Khách thể.",
            "Sự kiện pháp lý.",
            "Chủ thể.",
            "Nội dung."
        ],
        answer: "Sự kiện pháp lý.",
        chapter: 3
    },
    {
        question: "Câu 89: Giao dịch dân sự của người từ đủ 18 tuổi:",
        options: [
            "phải được sự đồng ý của người đại diện theo pháp luật, trừ trường hợp giao dịch phục vụ nhu cầu sinh hoạt hàng ngày.",
            "do người đại diện theo pháp luật xác lập, thực hiện.",
            "họ có thể tự mình xác lập, thực hiện.",
            "phải được sự đồng ý của người đại diện theo pháp luật."
        ],
        answer: "họ có thể tự mình xác lập, thực hiện.",
        chapter: 3
    },
    {
        question: "Câu 90: Giao dịch dân sự của chủ thể nào sau đây phải do người đại diện theo pháp luật xác lập, thực hiện:",
        options: [
            "người từ đủ 6 tuổi đến dưới 15 tuổi.",
            "người từ 0 đến 6 tuổi.",
            "người từ đủ 15 tuổi đến dưới 18 tuổi.",
            "người từ đủ 18 tuổi trở lên."
        ],
        answer: "người từ 0 đến 6 tuổi.",
        chapter: 3
    },
    {
        question: "Câu 91: Pháp nhân có năng lực hành vi từ khi nào?",
        options: [
            "Từ khi góp tài sản vào thành lập.",
            "Từ khi nộp hồ sơ xin thành lập tại cơ quan nhà nước có thẩm quyền.",
            "Từ khi được thành lập hợp pháp.",
            "Từ khi các thành viên thống nhất việc thành lập."
        ],
        answer: "Từ khi được thành lập hợp pháp.",
        chapter: 3
    },
    {
        question: "Câu 92: Xác định khách thể trong quan hệ pháp luật sau: A đăng ký kết hôn với B",
        options: [
            "Giấy đăng ký kết hôn.",
            "Cán bộ tư pháp xã.",
            "Tài sản chung của vợ chồng.",
            "Việc đăng ký kết hôn."
        ],
        answer: "Việc đăng ký kết hôn.",
        chapter: 3
    },
    {
        question: "Câu 93: Nội dung của quan hệ pháp luật là gì?",
        options: [
            "Đối tượng mà các chủ thể tác động đến khi tham gia vào quan hệ pháp luật.",
            "Những giá trị mà các chủ thể quan hệ pháp luật mong muốn đạt được.",
            "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật.",
            "Các bên tham gia vào quan hệ pháp luật."
        ],
        answer: "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật.",
        chapter: 3
    },
    {
        question: "Câu 94: Giao dịch dân sự của người dưới 6 tuổi:",
        options: [
            "do người đại diện theo pháp luật xác lập, thực hiện.",
            "phải được sự đồng ý của người đại diện theo pháp luật.",
            "họ có thể tự mình xác lập, thực hiện.",
            "phải được sự đồng ý của người đại diện theo pháp luật, trừ trường hợp giao dịch phục vụ nhu cầu sinh hoạt hàng ngày."
        ],
        answer: "do người đại diện theo pháp luật xác lập, thực hiện.",
        chapter: 3
    },
    {
        question: "Câu 95: Khẳng định nào sau đây là SAI?",
        options: [
            "Năng lực pháp luật của pháp nhân mất đi khi pháp nhân chấm dứt sự tồn tại.",
            "Mọi tổ chức có con dấu đều có tư cách pháp nhân.",
            "Pháp nhân có năng lực pháp luật từ khi được thành lập hợp pháp.",
            "Pháp nhân phải là tổ chức."
        ],
        answer: "Mọi tổ chức có con dấu đều có tư cách pháp nhân.",
        chapter: 3
    },
    {
        question: "Câu 96: Khi nghiên cứu về năng lực hành vi thì khẳng định nào sau đây là SAI?",
        options: [
            "Năng lực pháp luật là tiền đề cho năng lực hành vi.",
            "Năng lực hành vi là khả năng có quyền và nghĩa vụ pháp lý mà nhà nước quy định cho cá nhân tổ chức.",
            "Năng lực pháp luật là điều kiện cần, năng lực hành vi là điều kiện đủ để chủ thể tham gia quan hệ pháp luật.",
            "Năng lực hành vi là khả năng chủ thể bằng hành vi của mình thực hiện các quyền và nghĩa vụ pháp lý."
        ],
        answer: "Năng lực hành vi là khả năng có quyền và nghĩa vụ pháp lý mà nhà nước quy định cho cá nhân tổ chức.",
        chapter: 3
    },
    {
        question: "Câu 97: Đâu là chủ thể không có tư cách pháp nhân?",
        options: [
            "Công ty hợp danh.",
            "Ủy ban nhân dân quận Hà Đông.",
            "Văn phòng đại diện của doanh nghiệp.",
            "Hội liên hiệp phụ nữ Việt Nam."
        ],
        answer: "Văn phòng đại diện của doanh nghiệp.",
        chapter: 3
    },
    {
        question: "Câu 98: Cho quan hệ pháp luật sau: Ông Phạm Ngọc (35 tuổi, công nhân công ty X) mua của ông Trần Tình (75 tuổi, cán bộ nghỉ hưu) chiếc xe máy SH Mode trị giá 50 triệu đồng. Xác định khách thể trong quan hệ pháp luật trên?",
        options: [
            "quyền sử dụng xe máy SH Mode.",
            "tiền, xe máy.",
            "50 triệu đồng.",
            "xe máy SH Mode."
        ],
        answer: "xe máy SH Mode.",
        chapter: 3
    },
    {
        question: "Câu 99: Trong các nghĩa vụ sau đây, nghĩa vụ nào không phải là nghĩa vụ pháp lý?",
        options: [
            "Nghĩa vụ cấp dưỡng của cha, mẹ đối với con dưới 18 tuổi khi cha, mẹ ly hôn.",
            "Nghĩa vụ đóng thuế thu nhập cá nhân.",
            "Nghĩa vụ của chồng phải đưa tiền lương cho vợ.",
            "Nghĩa vụ giải quyết tố cáo của người giải quyết tố cáo."
        ],
        answer: "Nghĩa vụ của chồng phải đưa tiền lương cho vợ.",
        chapter: 3
    },
    {
        question: "Câu 100: Quan hệ xã hội nào sau đây là quan hệ pháp luật?",
        options: [
            "Quan hệ đồng nghiệp.",
            "Quan hệ bạn bè.",
            "Quan hệ đồng hương.",
            "Quan hệ vợ chồng."
        ],
        answer: "Quan hệ vợ chồng.",
        chapter: 3
    },
    {
        question: "Câu 101: Đâu không phải là điều kiện để 1 tổ chức có tư cách pháp nhân?",
        options: [
            "Được thành lập hợp pháp.",
            "Nhân danh mình tham gia các quan hệ pháp luật một cách độc lập.",
            "Có tài sản.",
            "Có cơ cấu tổ chức chặt chẽ."
        ],
        answer: "Có cơ cấu tổ chức chặt chẽ.",
        chapter: 3
    },
    {
        question: "Câu 102: Ông A lái xe sau khi uống rượu đâm vào xe khác làm cho 2 người bị chết thuộc loại sự kiện pháp lý nào?",
        options: [
            "Sự biến tương đối.",
            "Hành vi không hành động.",
            "Sự biến tuyệt đối.",
            "Hành vi hành động."
        ],
        answer: "Hành vi hành động.",
        chapter: 3
    },
    {
        question: "Câu 103: Chủ thể bị hạn chế năng lực hành vi dân sự là trường hợp nào sau đây?",
        options: [
            "Người chưa đủ 18 tuổi.",
            "Mắc bệnh tâm thần hoặc các bệnh khác dẫn tới không thể nhận thức và làm chủ hành vi.",
            "Say rượu bia hoặc các chất gây nghiện khác.",
            "Nghiện ma túy hoặc các chất kích thích khác dẫn tới phá tán tài sản."
        ],
        answer: "Nghiện ma túy hoặc các chất kích thích khác dẫn tới phá tán tài sản.",
        chapter: 3
    },
    {
        question: "Câu 104: Xác định chủ thể trong quan hệ pháp luật sau: A cho B và C vay 200 triệu đồng",
        options: [
            "A, B và C.",
            "A.",
            "B, C.",
            "C."
        ],
        answer: "A, B và C.",
        chapter: 3
    },
    {
        question: "Câu 105: Đâu là chủ thể không có tư cách pháp nhân?",
        options: [
            "Công ty trách nhiệm hữu hạn.",
            "Đội thiếu niên tiền phong HCM.",
            "Viện kiểm sát nhân dân tỉnh Cao Bằng.",
            "Tổ hợp tác."
        ],
        answer: "Đội thiếu niên tiền phong HCM.",
        chapter: 3
    },
    {
        question: "Câu 106: Năng lực hành vi của chủ thể trong quan hệ pháp luật phụ thuộc vào yếu tố nào dưới đây",
        options: [
            "Hoàn cảnh kinh tế của chủ thể.",
            "Độ tuổi, tình trạng sức khỏe, trình độ của chủ thể.",
            "Pháp luật của từng quốc gia.",
            "Truyền thống văn hóa dân tộc của từng quốc gia."
        ],
        answer: "Độ tuổi, tình trạng sức khỏe, trình độ của chủ thể.",
        chapter: 3
    },
    {
        question: "Câu 107: Việc \"A đăng ký kết hôn với B\" được thuộc loại sự kiện nào?",
        options: [
            "Sự kiện pháp lý làm phát sinh quan hệ pháp luật.",
            "Sự kiện pháp lý làm chấm dứt quan hệ pháp luật.",
            "Sự biến pháp lý.",
            "Sự kiện pháp lý làm thay đổi quan hệ pháp luật."
        ],
        answer: "Sự kiện pháp lý làm phát sinh quan hệ pháp luật.",
        chapter: 3
    },
    {
        question: "Câu 108: Năng lực pháp luật của cá nhân mất đi khi nào?",
        options: [
            "Khi cá nhân chết.",
            "Khi cá nhân bị mất tích.",
            "Khi cá nhân trên 60 tuổi.",
            "Khi cá nhân bị mất trí nhớ."
        ],
        answer: "Khi cá nhân chết.",
        chapter: 3
    },
    {
        question: "Câu 109: Khả năng của chủ thể có những quyền và nghĩa vụ do pháp luật quy định được gọi là gì?",
        options: [
            "Năng lực pháp luật.",
            "Năng lực hành vi.",
            "Năng lực trách nhiệm pháp lý.",
            "Năng lực chủ thể."
        ],
        answer: "Năng lực pháp luật.",
        chapter: 3
    },
    {
        question: "Câu 110: Đâu là chủ thể của quan hệ pháp luật bầu cử đại biểu quốc hội?",
        options: [
            "Công dân Việt Nam.",
            "Hộ gia đình.",
            "Người không quốc tịch.",
            "Người nước ngoài."
        ],
        answer: "Công dân Việt Nam.",
        chapter: 3
    },
    {
        question: "Câu 111: Một cá nhân trở thành chủ thể của quan hệ pháp luật cần phải thỏa mãn điều kiện nào sau đây?",
        options: [
            "Thực hiện nghĩa vụ do pháp luật quy định.",
            "Không mắc bệnh tâm thần.",
            "Thực hiện quyền do pháp luật quy định.",
            "Có năng lực chủ thể."
        ],
        answer: "Có năng lực chủ thể.",
        chapter: 3
    },
    {
        question: "Câu 112: Quan hệ pháp luật nào sau đây là quan hệ có tính chất mệnh lệnh?",
        options: [
            "Quan hệ thừa kế tài sản.",
            "Quan hệ hợp đồng trong kinh doanh, thương mại.",
            "Quan hệ tặng cho tài sản.",
            "Quan hệ về cấp giấy chứng nhận đăng ký kinh doanh."
        ],
        answer: "Quan hệ về cấp giấy chứng nhận đăng ký kinh doanh.",
        chapter: 3
    },
    {
        question: "Câu 113: Đâu là chủ thể có tư cách pháp nhân?",
        options: [
            "Chi nhánh công ty cổ phần dược phẩm.",
            "Tổ hợp tác.",
            "Viện kiểm sát nhân dân huyện Chương Mỹ.",
            "Văn phòng đại diện của doanh nghiệp."
        ],
        answer: "Viện kiểm sát nhân dân huyện Chương Mỹ.",
        chapter: 3
    },
    {
        question: "Câu 114: Năng lực pháp luật của pháp nhân không bị chấm dứt trong trường hợp nào sau đây?",
        options: [
            "Hợp nhất pháp nhân.",
            "Tách pháp nhân.",
            "Giải thể pháp nhân.",
            "Cho thuê pháp nhân."
        ],
        answer: "Cho thuê pháp nhân.",
        chapter: 3
    },
    {
        question: "Câu 115: Năng lực pháp luật của chủ thể trong quan hệ pháp luật phụ thuộc vào yếu tố nào dưới đây?",
        options: [
            "Độ tuổi, tình trạng sức khỏe, trình độ của chủ thể.",
            "Pháp luật của từng quốc gia.",
            "Truyền thống văn hóa dân tộc của từng quốc gia.",
            "Hoàn cảnh kinh tế của chủ thể."
        ],
        answer: "Pháp luật của từng quốc gia.",
        chapter: 3
    },
    {
        question: "Câu 116: Đâu là yếu tố cấu thành quan hệ pháp luật?",
        options: [
            "Sự kiện pháp lý.",
            "Mặt chủ quan.",
            "Khách thể.",
            "Mặt khách quan"
        ],
        answer: "Khách thể.",
        chapter: 3
    },
    {
        question: "Câu 117: Đâu là chủ thể không có tư cách pháp nhân?",
        options: [
            "Doanh nghiệp tư nhân.",
            "Đảng cộng sản Việt Nam.",
            "Trường đại học Phenikaa.",
            "Ủy ban nhân dân thành phố Hà Nội."
        ],
        answer: "Đảng cộng sản Việt Nam.",
        chapter: 3
    },
    {
        question: "Câu 118: Khi nghiên cứu về năng lực chủ thể thì khẳng định nào sau đây là SAI?",
        options: [
            "Năng lực pháp luật là tiền đề cho năng lực hành vi.",
            "Năng lực pháp luật là điều kiện cần, năng lực hành vi là điều kiện đủ để chủ thể tham gia quan hệ pháp luật.",
            "Cá nhân có năng lực pháp luật cũng có thể không có năng lực hành vi.",
            "Cá nhân có năng lực pháp luật thì cũng có năng lực hành vi."
        ],
        answer: "Cá nhân có năng lực pháp luật thì cũng có năng lực hành vi.",
        chapter: 3
    },
    {
        question: "Câu 119: Khách thể của quan hệ pháp luật được hiểu là gì?",
        options: [
            "Các bên tham gia vào quan hệ pháp luật.",
            "Những giá trị mà các chủ thể quan hệ pháp luật muốn đạt được.",
            "Là đối tượng mà các chủ thể quan tâm khi tham gia vào quan hệ pháp luật.",
            "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật."
        ],
        answer: "Là đối tượng mà các chủ thể quan tâm khi tham gia vào quan hệ pháp luật.",
        chapter: 3
    },
    {
        question: "Câu 120: Nội dung của quan hệ pháp luật được hiểu là gì?",
        options: [
            "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật.",
            "Là đối tượng mà các chủ thể quan tâm khi tham gia vào quan hệ pháp luật.",
            "Các bên tham gia vào quan hệ pháp luật.",
            "Những giá trị mà các chủ thể quan hệ pháp luật muốn đạt được."
        ],
        answer: "Quyền và nghĩa vụ của các chủ thể trong quan hệ pháp luật.",
        chapter: 3
    },
    {
        question: "Câu 121: Khi nghiên cứu về nghĩa vụ chủ thể thì khẳng định nào sau đây là SAI?",
        options: [
            "Chủ thể phải chịu trách nhiệm pháp lý khi không thực hiện theo cách xử sự bắt buộc mà pháp luật đã quy định.",
            "Chủ thể phải tự kiềm chế, không được thực hiện một số hành vi nhất định.",
            "Chủ thể phải tiến hành một số hành vi nhất định do pháp luật quy định.",
            "Chủ thể phải yêu cầu cơ quan nhà nước có thẩm quyền xử phạt chủ thể xâm phạm đến quyền và lợi ích của mình."
        ],
        answer: "Chủ thể phải yêu cầu cơ quan nhà nước có thẩm quyền xử phạt chủ thể xâm phạm đến quyền và lợi ích của mình.",
        chapter: 3
    },
    {
        question: "Câu 122: Đâu không phải là điều kiện để 1 tổ chức có tư cách pháp nhân?",
        options: [
            "Có điều lệ tổ chức và hoạt động.",
            "Có tài sản độc lập với cá nhân, tổ chức khác.",
            "Nhân danh mình tham gia các quan hệ pháp luật một cách độc lập.",
            "Được thành lập hợp pháp."
        ],
        answer: "Có điều lệ tổ chức và hoạt động.",
        chapter: 3
    },
    {
        question: "Câu 123: Sự kiện pháp lý bao gồm những yếu tố nào?",
        options: [
            "Các hành vi pháp lý và sự biến pháp lý.",
            "Các hành vi và sự kiện thực tế.",
            "Các sự biến pháp lý.",
            "Các hành vi thực tế."
        ],
        answer: "Các hành vi pháp lý và sự biến pháp lý.",
        chapter: 3
    },
    {
        question: "Câu 124: Sạt lở đất làm cho 2 người bị chết thuộc loại sự kiện pháp lý nào?",
        options: [
            "Sự biến tương đối.",
            "Sự biến tuyệt đối.",
            "Hành vi không hành động.",
            "Hành vi hành động."
        ],
        answer: "Sự biến tuyệt đối.",
        chapter: 3
    },
    {
        question: "Câu 125: Công dân Việt Nam là người?",
        options: [
            "Có cha hoặc mẹ là người Việt Nam.",
            "Sinh ra trên lãnh thổ Việt Nam.",
            "Mang quốc tịch Việt Nam.",
            "Có căn cước công dân ở Việt Nam."
        ],
        answer: "Mang quốc tịch Việt Nam.",
        chapter: 3
    },
    {
        question: "Câu 126: Đâu là phương án sai khi nói về hành vi vi phạm pháp luật?",
        options: [
            "Phải xâm phạm đến các quan hệ xã hội được pháp luật bảo vệ.",
            "Phải ở dạng hành động.",
            "Phải có lỗi.",
            "Phải là hành vi trái pháp luật."
        ],
        answer: "Phải ở dạng hành động.",
        chapter: 4
    },
    {
        question: "Câu 127: Đâu không là yếu tố cấu thành của vi phạm pháp luật?",
        options: [
            "Mặt chủ quan.",
            "Mặt khách quan.",
            "Sự kiện pháp lý.",
            "Chủ thể."
        ],
        answer: "Sự kiện pháp lý.",
        chapter: 4
    },
    {
        question: "Câu 128: Trách nhiệm pháp lý được áp dụng với các chủ thể nào sau đây?",
        options: [
            "Chỉ những người từ đủ 18 tuổi trở lên.",
            "Người có hành vi không hợp đạo đức.",
            "Mọi người.",
            "Chủ thể vi phạm pháp luật."
        ],
        answer: "Chủ thể vi phạm pháp luật.",
        chapter: 4
    },
    {
        question: "Câu 129: Hành vi vi phạm pháp luật nào là hành vi nguy hiểm nhất cho xã hội?",
        options: [
            "Vi phạm kỷ luật.",
            "Vi phạm hành chính.",
            "Vi phạm dân sự.",
            "Vi phạm hình sự."
        ],
        answer: "Vi phạm hình sự.",
        chapter: 4
    },
    {
        question: "Câu 130: Đâu không phải là yếu tố cấu thành của vi phạm pháp luật?",
        options: [
            "Mặt khách thể.",
            "Mặt khách quan.",
            "Mặt chủ quan.",
            "Chủ thể."
        ],
        answer: "Mặt khách thể.",
        chapter: 4
    },
    {
        question: "Câu 131: Quan hệ xã hội được pháp luật bảo vệ nhưng bị hành vi vi phạm pháp luật xâm hại gọi là gì?",
        options: [
            "Khách thể của vi phạm pháp luật.",
            "Hậu quả nguy hiểm cho xã hội của vi phạm pháp luật.",
            "Đối tượng của vi phạm pháp luật.",
            "Nạn nhân của vi phạm pháp luật."
        ],
        answer: "Khách thể của vi phạm pháp luật.",
        chapter: 4
    },
    {
        question: "Câu 132: Bồi thường thiệt hại thuộc loại chế tài nào?",
        options: [
            "Chế tài dân sự.",
            "Chế tài hành chính.",
            "Chế tài hình sự.",
            "Chế tài kỷ luật."
        ],
        answer: "Chế tài dân sự.",
        chapter: 4
    },
    {
        question: "Câu 133: Hành vi nào sau đây là vi phạm kỷ luật?",
        options: [
            "Sử dụng tài liệu khi làm bài thi.",
            "Đi vào đường cấm, đường ngược chiều.",
            "Lừa đảo chiếm đoạt tài sản trị giá 2.500.000 đồng.",
            "Vượt đèn đỏ gây tai nạn nghiêm trọng."
        ],
        answer: "Sử dụng tài liệu khi làm bài thi.",
        chapter: 4
    },
    {
        question: "Câu 134: Đâu là dấu hiệu thuộc về Khách thể của Vi phạm pháp luật?",
        options: [
            "Lỗi của chủ thể.",
            "Quan hệ sở hữu.",
            "Động cơ thực hiện hành vi vi phạm pháp luật.",
            "Hành vi trái pháp luật."
        ],
        answer: "Quan hệ sở hữu.",
        chapter: 4
    },
    {
        question: "Câu 135: Đâu không là dấu hiệu trong Mặt chủ quan của Vi phạm pháp luật?",
        options: [
            "Mục đích thực hiện hành vi vi phạm pháp luật.",
            "Động cơ thực hiện hành vi vi phạm pháp luật.",
            "Chủ thể có năng lực trách nhiệm pháp lý.",
            "Lỗi của chủ thể."
        ],
        answer: "Chủ thể có năng lực trách nhiệm pháp lý.",
        chapter: 4
    },
    {
        question: "Câu 136: Hành vi nào sau đây là vi phạm pháp luật dân sự?",
        options: [
            "Điều khiển xe gắn máy không đội mũ bảo hiểm.",
            "Bán hàng lấn chiếm lòng đường, vỉa hè.",
            "Chứa chấp hoạt động mại dâm.",
            "Không giao hàng đúng thời hạn trên hợp đồng."
        ],
        answer: "Không giao hàng đúng thời hạn trên hợp đồng.",
        chapter: 4
    },
    {
        question: "Câu 137: Đâu không là dấu hiệu trong Mặt khách quan của Vi phạm pháp luật?",
        options: [
            "Mối quan hệ giữa hành vi trái pháp luật và hậu quả nguy hiểm cho xã hội.",
            "Hậu quả nguy hiểm cho xã hội .",
            "Hành vi trái pháp luật.",
            "Quan hệ xã hội được pháp luật bảo vệ nhưng bị hành vi vi phạm xâm hại tới."
        ],
        answer: "Quan hệ xã hội được pháp luật bảo vệ nhưng bị hành vi vi phạm xâm hại tới.",
        chapter: 4
    },
    {
        question: "Câu 138: Chỉ ra yếu tố bắt buộc có trong mặt chủ quan của vi phạm pháp luật?",
        options: [
            "Động cơ.",
            "Lỗi.",
            "Nhu cầu.",
            "Mục đích."
        ],
        answer: "Lỗi.",
        chapter: 4
    },
    {
        question: "Câu 139: Anh C thường xuyên đi làm muộn và nhiều lần tự ý nghỉ việc không lý do, đã bị quản lý trực tiếp lập biên bản, nhắc nhở nhiều lần. Hành vi của anh C thuộc vi phạm pháp luật nào?",
        options: [
            "Vi phạm hình sự.",
            "Vi phạm dân sự.",
            "Vi phạm hành chính.",
            "Vi phạm kỷ luật."
        ],
        answer: "Vi phạm kỷ luật.",
        chapter: 4
    },
    {
        question: "Câu 140: Khẳng định nào sau đây là SAI khi nghiên cứu về mặt chủ quan của vi phạm pháp luật?",
        options: [
            "Tùy thuộc vào trách nhiệm pháp lý áp dụng đối với chủ thể để xác định lỗi của chủ thể vi phạm pháp luật.",
            "Mặt chủ quan là yếu tố bắt buộc phải xem xét khi xác định hành vi vi phạm pháp luật.",
            "Mục đích là cái chủ thể hướng tới khi thực hiện hành vi vi phạm pháp luật.",
            "Động cơ là cái thúc đẩy chủ thể thực hiện hành vi vi phạm pháp luật."
        ],
        answer: "Tùy thuộc vào trách nhiệm pháp lý áp dụng đối với chủ thể để xác định lỗi của chủ thể vi phạm pháp luật.",
        chapter: 4
    },
    {
        question: "Câu 141: Xác định chủ thể của vi phạm pháp luật trong trường hợp: A trộm ti vi của B và C?",
        options: [
            "A và B.",
            "A.",
            "A, B và C.",
            "B và C."
        ],
        answer: "A.",
        chapter: 4
    },
    {
        question: "Câu 142: Đâu không là dấu hiệu của vi phạm pháp luật?",
        options: [
            "Tính trái phong tục tập quán.",
            "Tính xác định của hành vi.",
            "Tính phải chịu trách nhiệm.",
            "Tính có lỗi."
        ],
        answer: "Tính trái phong tục tập quán.",
        chapter: 4
    },
    {
        question: "Câu 143: Xác định đâu không phải là hành vi vi phạm pháp luật?",
        options: [
            "Đang yêu người này nhưng kết hôn với người khác.",
            "Đang có vợ nhưng sống như vợ chồng với người khác.",
            "Vượt đèn đỏ.",
            "Gây thương tích cho người khác."
        ],
        answer: "Đang yêu người này nhưng kết hôn với người khác.",
        chapter: 4
    },
    {
        question: "Câu 144: Hành vi nào sau đây là hành vi trái pháp luật ở dạng không hành động?",
        options: [
            "Không tố giác tội phạm.",
            "Môi giới mại dâm.",
            "Không giúp người khác tự sát.",
            "Không vượt đèn đỏ."
        ],
        answer: "Không tố giác tội phạm.",
        chapter: 4
    },
    {
        question: "Câu 145: Hành vi nào sau đây không trái pháp luật?",
        options: [
            "Không bật xi nhan khi rẽ phải.",
            "Không cho bạn mượn xe.",
            "Không nộp thuế đúng thời hạn.",
            "Không thực hiện nghĩa vụ quân sự."
        ],
        answer: "Không cho bạn mượn xe.",
        chapter: 4
    },
    {
        question: "Câu 146: Đâu không là dấu hiệu trong Mặt chủ quan của Vi phạm pháp luật?",
        options: [
            "Hậu quả nguy hiểm cho xã hội.",
            "Động cơ thực hiện hành vi vi phạm pháp luật.",
            "Lỗi của chủ thể.",
            "Mục đích thực hiện hành vi vi phạm pháp luật."
        ],
        answer: "Hậu quả nguy hiểm cho xã hội.",
        chapter: 4
    },
    {
        question: "Câu 147: Xác định công cụ, phương tiện của vi phạm pháp luật trong trường hợp: A và B dùng dao đâm chết C?",
        options: [
            "C.",
            "Quan hệ sở hữu.",
            "Con dao.",
            "Quan hệ nhân thân."
        ],
        answer: "Con dao.",
        chapter: 4
    },
    {
        question: "Câu 148: Hành vi nào sau đây là vi phạm kỷ luật?",
        options: [
            "Vi phạm điều lệ Đoàn TNCS Hồ Chí Minh.",
            "Trộm cắp ti vi của người khác.",
            "Gây mất trật tự trong phòng thi.",
            "Sử dụng trái phép chất ma túy."
        ],
        answer: "Gây mất trật tự trong phòng thi.",
        chapter: 4
    },
    {
        question: "Câu 149: Đâu không là dấu hiệu trong Mặt khách quan của Vi phạm pháp luật?",
        options: [
            "Hành vi trái pháp luật.",
            "Hậu quả nguy hiểm cho xã hội.",
            "Mối quan hệ nhân quả giữa hành vi và hậu quả nguy hiểm cho xã hội.",
            "Động cơ thực hiện vi phạm pháp luật."
        ],
        answer: "Động cơ thực hiện vi phạm pháp luật.",
        chapter: 4
    },
    {
        question: "Câu 150: Khẳng định nào sau đây là ĐÚNG khi nói về trách nhiệm pháp lý?",
        options: [
            "Mọi hành vi vi phạm pháp luật đều có thể bị áp dụng trách nhiệm pháp lý.",
            "Mọi hành vi vi phạm pháp luật đều bị áp dụng trách nhiệm pháp lý hình sự.",
            "Mọi hành vi vi phạm pháp luật đều bị áp dụng trách nhiệm pháp lý kỷ luật.",
            "Mọi hành vi vi phạm pháp luật đều bị áp dụng trách nhiệm pháp lý hành chính."
        ],
        answer: "Mọi hành vi vi phạm pháp luật đều có thể bị áp dụng trách nhiệm pháp lý.",
        chapter: 4
    },
    {
        question: "Câu 151: Xác định khách thể của vi phạm pháp luật trong trường hợp: A sử dụng tài liệu không được phép mang vào trong kỳ thi tốt nghiệp trung học phổ thông quốc gia và bị giám thị B và C phát hiện và lập biên bản?",
        options: [
            "Trật tự, kỷ luật.",
            "Quan hệ nhân thân.",
            "Kết quả thi.",
            "Quan hệ sở hữu."
        ],
        answer: "Trật tự, kỷ luật.",
        chapter: 4
    },
    {
        question: "Câu 152: Một công ty xả chất thải ra sông làm cá chết hàng loạt, gây ô nhiễm môi trường. Trách nhiệm pháp lý có thể áp dụng đối với công ty này là gì?",
        options: [
            "Trách nhiệm hình sự.",
            "Trách nhiệm hành chính.",
            "Trách nhiệm kỷ luật.",
            "Trách nhiệm hình sự và trách nhiệm dân sự."
        ],
        answer: "Trách nhiệm hình sự và trách nhiệm dân sự.",
        chapter: 4
    },
    {
        question: "Câu 153: Đâu không là dấu hiệu của vi phạm pháp luật?",
        options: [
            "Tính phải chịu trách nhiệm.",
            "Tính có lỗi.",
            "Tính xác định của hành vi.",
            "Tính trái đạo đức xã hội."
        ],
        answer: "Tính trái đạo đức xã hội.",
        chapter: 4
    },
    {
        question: "Câu 154: Đâu là dấu hiệu thuộc về Khách thể của Vi phạm pháp luật?",
        options: [
            "Quyền được bảo vệ về sức khỏe bị xâm phạm.",
            "Lỗi của chủ thể.",
            "Hành vi trái pháp luật.",
            "Động cơ thực hiện hành vi vi phạm pháp luật."
        ],
        answer: "Quyền được bảo vệ về sức khỏe bị xâm phạm.",
        chapter: 4
    },
    {
        question: "Câu 155: Đâu không là dấu hiệu trong Mặt khách quan của Vi phạm pháp luật?",
        options: [
            "Mối quan hệ nhân quả giữa hành vi và hậu quả nguy hiểm cho xã hội.",
            "Hành vi trái pháp luật.",
            "Động cơ thực hiện vi phạm pháp luật.",
            "Hậu quả nguy hiểm cho xã hội."
        ],
        answer: "Động cơ thực hiện vi phạm pháp luật.",
        chapter: 4
    },
    {
        question: "Câu 156: Chủ thể có năng lực trách nhiệm pháp lý khi có đủ điều kiện nào sau đây?",
        options: [
            "Đạt độ tuổi do pháp luật quy định, có khả năng nhận thức và điều khiển hành vi.",
            "Từ đủ 18 tuổi trở lên và có nhân thân tốt.",
            "Có năng lực pháp luật và năng lực hành vi.",
            "Đạt độ tuổi do pháp luật quy định, có năng lực pháp luật."
        ],
        answer: "Đạt độ tuổi do pháp luật quy định, có khả năng nhận thức và điều khiển hành vi.",
        chapter: 4
    },
    {
        question: "Câu 157: Xác định đối tượng của vi phạm pháp luật trong trường hợp: A trộm ti vi của B và C?",
        options: [
            "B.",
            "Ti vi.",
            "Quan hệ nhân thân.",
            "Quan hệ sở hữu."
        ],
        answer: "Ti vi.",
        chapter: 4
    },
    {
        question: "Câu 158: Trong các chủ thể sau, chủ thể nào có thẩm quyền áp dụng trách nhiệm pháp lý dân sự?",
        options: [
            "Tòa án.",
            "Nhà nước.",
            "Công an.",
            "Viện kiểm sát."
        ],
        answer: "Tòa án.",
        chapter: 4
    },
    {
        question: "Câu 159: Xác định khẳng định sai trong các trường hợp sau?",
        options: [
            "Chủ thể thực hiện hành vi trái pháp luật phải có năng lực trách nhiệm pháp lý.",
            "Lỗi thuộc về mặt chủ quan của vi phạm pháp luật.",
            "Chủ thể thực hiện hành vi trái pháp luật phải có lỗi.",
            "Vi phạm pháp luật là hành động xác định của con người."
        ],
        answer: "Vi phạm pháp luật là hành động xác định của con người.",
        chapter: 4
    },
    {
        question: "Câu 160: A và B dùng dao đâm chết C. Con dao được xác định là gì trong cấu thành vi phạm pháp luật của A & B?",
        options: [
            "Khách thể.",
            "Chủ thể.",
            "Công cụ, phương tiện vi phạm.",
            "Đối tượng."
        ],
        answer: "Công cụ, phương tiện vi phạm.",
        chapter: 4
    },
    {
        question: "Câu 161: Khẳng định nào sau đây là SAI khi nghiên cứu về trách nhiệm pháp lý?",
        options: [
            "Chỉ các cơ quan Nhà nước mới có thẩm quyền áp dụng trách nhiệm pháp lý đối với chủ thể vi phạm pháp luật.",
            "Trong mọi trường hợp, trách nhiệm pháp lý luôn gắn liền với những biện pháp cưỡng chế nhà nước đối với chủ thể đã vi phạm pháp luật.",
            "Cơ sở của trách nhiệm pháp lý là vi phạm pháp luật.",
            "Truy cứu trách nhiệm pháp lý là một quá trình hoạt động phức tạp của các cơ quan nhà nước, chủ thể có thẩm quyền."
        ],
        answer: "Trong mọi trường hợp, trách nhiệm pháp lý luôn gắn liền với những biện pháp cưỡng chế nhà nước đối với chủ thể đã vi phạm pháp luật.",
        chapter: 4
    },
    {
        question: "Câu 162: Những biểu hiện ra bên ngoài của vi phạm pháp luật gọi là gì?",
        options: [
            "Mặt khách quan của vi phạm pháp luật.",
            "Khách thể của vi phạm pháp luật.",
            "Mặt chủ quan của vi phạm pháp luật.",
            "Chủ thể của vi phạm pháp luật."
        ],
        answer: "Mặt khách quan của vi phạm pháp luật.",
        chapter: 4
    },
    {
        question: "Câu 163: Trong các chủ thể sau, chủ thể nào không có thẩm quyền áp dụng trách nhiệm pháp lý kỷ luật?",
        options: [
            "Bộ trưởng.",
            "Chủ tịch nước.",
            "Thủ trưởng cơ quan, đơn vị, trường học, bệnh viện, xí nghiệp.",
            "Chánh tòa hình sự Tòa án nhân dân huyện."
        ],
        answer: "Chủ tịch nước.",
        chapter: 4
    },
    {
        question: "Câu 164: Hành vi nào sau đây là hành vi trái pháp luật ở dạng không hành động?",
        options: [
            "Không cứu giúp người khác đang trong tình trạng nguy hiểm đến tính mạng, tuy có điều kiện để cứu giúp.",
            "Dừng xe trước đèn đỏ khi tham gia giao thông.",
            "Tàng trữ vũ khí.",
            "Không đi quá tốc độ cho phép."
        ],
        answer: "Không cứu giúp người khác đang trong tình trạng nguy hiểm đến tính mạng, tuy có điều kiện để cứu giúp.",
        chapter: 4
    },
    {
        question: "Câu 165: Hành vi nào sau đây là vi phạm pháp luật dân sự?",
        options: [
            "Lạm dụng tín nhiệm chiếm đoạt tài sản.",
            "Không thực hiện nghĩa vụ trả tiền trong hợp đồng thuê nhà.",
            "Xây nhà trái phép.",
            "Cướp giật tài sản."
        ],
        answer: "Không thực hiện nghĩa vụ trả tiền trong hợp đồng thuê nhà.",
        chapter: 4
    },
    {
        question: "Câu 166: Trong các chủ thể sau, chủ thể nào có thẩm quyền áp dụng trách nhiệm pháp lý hình sự?",
        options: [
            "Nhà nước.",
            "Tòa án.",
            "Công an.",
            "Viện kiểm sát."
        ],
        answer: "Tòa án.",
        chapter: 4
    },
    {
        question: "Câu 167: A trộm ti vi của B và C. A được xác định là yếu tố nào trong cấu thành vi phạm pháp luật của A và B?",
        options: [
            "Chủ mưu.",
            "Khách thể.",
            "Đối tượng.",
            "Chủ thể."
        ],
        answer: "Chủ thể.",
        chapter: 4
    },
    {
        question: "Câu 168: Vi phạm pháp luật hành chính là hành vi xâm phạm đến quy định nào sau đây?",
        options: [
            "Quy tắc quản lý nhà nước.",
            "Quy định pháp luật.",
            "Quy phạm pháp luật.",
            "Quy tắc xử sự."
        ],
        answer: "Quy tắc quản lý nhà nước.",
        chapter: 4
    },
    {
        question: "Câu 169: Ông A vận chuyển gia cầm bị bệnh, bị cơ quan có thẩm quyền phát hiện và buộc phải tiêu hủy hết số gia cầm bị bệnh này. Xác định loại chế tài này.",
        options: [
            "Chế tài hành chính.",
            "Chế tài dân sự.",
            "Công đoàn.",
            "Chế tài hình sự."
        ],
        answer: "Chế tài hành chính.",
        chapter: 4
    },
    {
        question: "Câu 170: Hành vi nào sau đây là vi phạm pháp luật hình sự?",
        options: [
            "Hủy hoại tài sản của người khác trị giá 2.500.000 đồng.",
            "Điều khiển xe gắn máy không đội mũ bảo hiểm.",
            "Không trả tiền thuê nhà.",
            "Bán hàng lấn chiếm lòng đường, vỉa hè."
        ],
        answer: "Hủy hoại tài sản của người khác trị giá 2.500.000 đồng.",
        chapter: 4
    },
    {
        question: "Câu 171: Trong các chủ thể sau, chủ thể nào không có thẩm quyền áp dụng trách nhiệm pháp lý hành chính?",
        options: [
            "Chủ tịch Hội đồng nhân dân.",
            "Công an.",
            "Viện kiểm sát.",
            "Tòa án."
        ],
        answer: "Viện kiểm sát.",
        chapter: 4
    },
    {
        question: "Câu 172: Đâu không là dấu hiệu trong Mặt chủ quan của Vi phạm pháp luật?",
        options: [
            "Mục đích thực hiện hành vi vi phạm pháp luật.",
            "Lỗi của chủ thể.",
            "Hậu quả nguy hiểm cho xã hội.",
            "Động cơ thực hiện hành vi vi phạm pháp luật."
        ],
        answer: "Hậu quả nguy hiểm cho xã hội.",
        chapter: 4
    },
    {
        question: "Câu 173: Đâu không là dấu hiệu trong Mặt khách quan của Vi phạm pháp luật?",
        options: [
            "Mối quan hệ giữa hành vi trái pháp luật và hậu quả nguy hiểm cho xã hội.",
            "Hành vi trái pháp luật.",
            "Công cụ, phương tiện thực hiện vi phạm pháp luật.",
            "Chủ thể có năng lực trách nhiệm pháp lý."
        ],
        answer: "Chủ thể có năng lực trách nhiệm pháp lý.",
        chapter: 4
    },
    {
        question: "Câu 174: Trong các hành vi sau đây, hành vi nào không phải là vi phạm pháp luật?",
        options: [
            "Đoàn viên thanh niên không đóng đoàn phí.",
            "Con cái ngược đãi cha mẹ.",
            "Người kinh doanh chậm thực hiện nghĩa vụ nộp thuế.",
            "Thanh niên đủ 18 tuổi trốn thực hiện nghĩa vụ quân sự."
        ],
        answer: "Đoàn viên thanh niên không đóng đoàn phí.",
        chapter: 4
    },
    {
        question: "Câu 175: A trộm ti vi của B và C. Ti vi được xác định là gì trong cấu thành vi phạm pháp luật của A?",
        options: [
            "Đối tượng.",
            "Khách thể.",
            "Chủ thể.",
            "Công cụ, phương tiện vi phạm."
        ],
        answer: "Đối tượng.",
        chapter: 4
    },
    {
        question: "Câu 176: Khẳng định nào sau đây là ĐÚNG?",
        options: [
            "Chủ thể của vi phạm pháp luật có thể chịu đồng thời nhiều trách nhiệm pháp lý.",
            "Mọi hậu quả do vi phạm pháp luật gây ra đều phải thể hiện dưới dạng vật chất.",
            "Không thấy trước hành vi của mình là nguy hiểm cho xã hội thì không bị xem là có lỗi.",
            "Sự thiệt hại thực tế xảy ra cho xã hội là dấu hiệu bắt buộc trong mặt khách quan của vi phạm pháp luật."
        ],
        answer: "Chủ thể của vi phạm pháp luật có thể chịu đồng thời nhiều trách nhiệm pháp lý.",
        chapter: 4
    },
    {
        question: "Câu 177: Xác định khách thể của vi phạm pháp luật trong trường hợp: A và B dùng dao đâm chết C?",
        options: [
            "Quan hệ nhân thân.",
            "Quan hệ sở hữu.",
            "Con dao.",
            "C."
        ],
        answer: "Quan hệ nhân thân.",
        chapter: 4
    },
    {
        question: "Câu 178: Đâu không là dấu hiệu trong Mặt chủ quan của Vi phạm pháp luật?",
        options: [
            "Hậu quả nguy hiểm cho xã hội.",
            "Động cơ thực hiện hành vi vi phạm pháp luật.",
            "Lỗi của chủ thể.",
            "Mục đích thực hiện hành vi vi phạm pháp luật."
        ],
        answer: "Hậu quả nguy hiểm cho xã hội.",
        chapter: 4
    },
    {
        question: "Câu 179: Anh A đốt nến, lửa bắt vào rèm cửa gây cháy nhà anh A và một số nhà hàng xóm. Xác định loại sự kiện pháp lý này?",
        options: [
            "Hành vi hành động.",
            "Sự biến tuyệt đối.",
            "Hành vi không hành động.",
            "Sự biến tương đối."
        ],
        answer: "Sự biến tương đối.",
        chapter: 4
    }
];

var additionalRawQuizText = `
Câu 1: Trong các ngành/lĩnh vực luật sau, đâu là ngành/lĩnh vực thuộc luật công?
Luật thương mại.
Luật dân sự.
Luật tố tụng hình sự.
Luật lao động.

Câu 2: Trong các ngành/lĩnh vực luật sau, đâu là ngành/lĩnh vực thuộc luật công?
Luật lao động.
Luật hiến pháp.
Luật dân sự.
Luật thương mại.

Câu 3: Trong các ngành luật sau, đâu là ngành luật không thuộc luật công?
Luật hành chính.
Luật lao động.
Luật tài chính.
Luật hình sự.

Câu 4: Trong các ngành luật sau, đâu là ngành luật không thuộc luật công?
Luật hiến pháp.
Luật dân sự.
Luật hình sự.
Luật hành chính.

Câu 5: Tổng thể các quy phạm pháp luật, có mối liên hệ nội tại trong một chỉnh thể thống nhất được gọi là gì?
Quy phạm pháp luật.
Chế định pháp luật.
Hệ thống pháp luật.
Ngành luật.

Câu 6: Đâu là văn bản có hiệu lực pháp lý cao nhất trong hệ thống pháp luật Việt Nam?
Hiến pháp.
Bộ luật hình sự.
Nghị quyết Hội nghị Ban chấp hành Trung ương Đảng.
Luật tổ chức Quốc hội.

Câu 7: Trong các tổ chức sau, xác định tổ chức chính trị - xã hội ở nước CHXHCN Việt Nam?
Đoàn luật sư.
Đảng cộng sản Việt Nam.
Hội làm vườn.
Hiệp hội trọng tài.

Câu 8: Trong các cơ quan sau, cơ quan nào là cơ quan tư pháp ở Nhà nước CHXHCN Việt Nam?
Chính phủ.
Tòa án nhân dân cấp huyện
Quốc hội.
Hội đồng nhân dân cấp huyện

Câu 9: Trong các cơ quan sau, cơ quan nào là cơ quan hành pháp ở Nhà nước CHXHCN Việt Nam?
Chính phủ.
Hội đồng nhân dân cấp tỉnh
Tòa án nhân dân cấp huyện
Quốc hội.

Câu 10: Vị trí của Chính phủ nước Cộng hòa XHCN Việt Nam như thế nào trong bộ máy nhà nước?
Là cơ quan chấp hành của Quốc hội, cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp.
Là cơ quan trung tâm của Nhà nước, có thẩm quyền trong cả 3 lĩnh vực lập pháp, hành pháp và tư pháp.
Là cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp và tư pháp.
Là cơ quan quản lý nhà nước trên mọi lĩnh vực của đời sống xã hội, thực hiện quyền lập pháp và hành pháp.

Câu 11: Theo Hiến pháp năm 2013, mọi người có quyền tự do kinh doanh những gì?
Hoạt động mà pháp luật không cấm.
Nghề mà pháp luật không cấm.
Ngành nghề mà pháp luật không cấm.
Dịch vụ mà pháp luật không cấm.

Câu 12: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Ủy ban Pháp luật của Quốc hội.
Bộ Y tế.
Hội đồng bầu cử quốc gia.
Cơ quan nhà nước có thẩm quyền.

Câu 13: Trong các văn bản sau đây, văn bản nào không là nguồn của Luật hành chính?
Nghị định của Chính phủ.
Nghị quyết của Hội đồng thẩm phán Tòa án nhân dân tối cao.
Điều lệ Đoàn thanh niên cộng sản Hồ Chí Minh.
Thông tư của Bộ trưởng.

Câu 14: Quan hệ xã hội nào sau đây thuộc đối tượng điều chỉnh của Luật hành chính?
Quan hệ chuyển nhượng quyền sử dụng đất giữa A và B
Quan hệ giữa người lao động A và công ty TNHH B
Quan hệ giữa Bộ y tế và Bộ Quốc phòng trong việc khám sức khỏe công dân tham gia nghĩa vụ quân sự
Quan hệ giữa luật sư bào chữa với thân chủ của mình

Câu 15: Trong các chế tài sau đây, xác định đâu là biện pháp thay thế xử lý vi phạm hành chính?
Giáo dục dựa vào cộng đồng.
Buộc nộp lại số lợi bất hợp pháp có được do thực hiện vi phạm hành chính.
Đưa vào cơ sở cai nghiện bắt buộc.
Buộc thực hiện các biện pháp khắc phục tình trạng ô nhiễm môi trường.

Câu 16: Trong các chế tài sau đây, xác định đâu là biện pháp xử phạt vi phạm hành chính?
Cảnh cáo.
Buộc loại bỏ yếu tố vi phạm trên bao bì hàng hóa.
Đưa vào cơ sở cai nghiện bắt buộc.
Buộc phá dỡ công trình xây dựng không đúng với giấy phép.

Câu 17: Thủ tục hành chính là gì?
Là trình tự thực hiện quyền lập pháp.
Là trình tự, cách thức thực hiện thẩm quyền của nhà nước.
Là trình tự thực hiện quyền tư pháp .
Là trình tự, cách thức thực hiện thẩm quyền của các chủ thể quản lý hành chính nhà nước.

Câu 18: Độ tuổi thấp nhất có thể bị áp dụng biện pháp đưa vào cơ sở giáo dục bắt buộc?
Từ đủ 18 tuổi.
Từ đủ 12 tuổi.
Từ đủ 14 tuổi.
Từ đủ 16 tuổi.

Câu 19: Luật hình sự điều chỉnh quan hệ xã hội phát sinh giữa các chủ thể nào?
Nhà nước với người thực hiện hành vi nguy hiểm cho xã hội.
Người thực hiện hành vi nguy hiểm cho xã hội và nạn nhân.
Nhà nước với người thực hiện hành vi phạm tội được quy định trong Bộ luật hình sự.
Nhà nước với người vi phạm pháp luật.

Câu 20: Trong các văn bản sau đây, văn bản nào là nguồn của Luật hình sự?
Bản án.
Quyết định của Tòa án.
Lệnh tạm giam.
Án lệ về vụ án hình sự.

Câu 21: Chủ thể nào không phải là chủ thể của tội phạm trong Luật hình sự Việt Nam?
Pháp nhân thương mại.
Tổ chức chính trị.
Công dân Việt Nam.
Cá nhân.

Câu 22: Xác định loại tội phạm cho trường hợp sau: “Người nào thấy người khác đang ở trong tình trạng nguy hiểm đến tính mạng, tuy có điều kiện mà không cứu giúp dẫn đến hậu quả người đó chết, thì bị phạt cảnh cáo, phạt cải tạo không giam giữ đến 02 năm hoặc phạt tù từ 03 tháng đến 02 năm.” Điều 132 - Bộ luật hình sự năm 2015.
Tội ít nghiêm trọng.
Tội rất nghiêm trọng.
Tội nghiêm trọng.
Tội đặc biệt nghiêm trọng.

Câu 23: Tòa án nhân dân nào chỉ có thẩm quyền xét xử sơ thẩm đối với vụ án hình sự?
Tòa án nhân dân cấp cao.
Tòa án nhân dân tối cao.
Tòa án nhân dân cấp huyện.
Tòa án nhân dân cấp tỉnh.

Câu 24: Chủ quán karaoke A đang làm hồ sơ xin thẩm duyệt phòng cháy, chữa cháy nhưng vẫn cho quán hoạt động. Trong quá trình sửa chữa quán tia lửa hàn bắn ra làm quán bị cháy, khiến 3 người bị chết. Xác định lỗi của chủ quán?
Lỗi hỗn hợp.
Lỗi cố ý trực tiếp.
Lỗi vô ý.
Lỗi cố ý gián tiếp.

Câu 25: Đứa trẻ mới sinh ra được Nhà nước công nhận là chủ thể có loại năng lực sau đây?
Năm lực chủ thể.
Năng lực hành vi.
Năng lực nhận thức và làm chủ hành vi.
Năng lực pháp luật.

Câu 26: Thừa kế được hiểu là gì?
Sự chuyển quyền sở hữu đối với tài sản của người chết cho con cháu và được lập thành văn bản theo quy định của pháp luật.
Sự chuyển quyền sở hữu đối với tài sản của người chết cho người thừa kế thông qua ý nguyện cá nhân bằng di chúc hoặc căn cứ vào quy định của pháp luật.
Sự chuyển quyền sở hữu đối với tài sản của cha mẹ, ông bà cho con, cháu.
Sự chuyển quyền sở hữu đối với tài sản của người chết cho người thừa kế không phụ thuộc vào ý chí của người để lại di sản.

Câu 27: Chủ thể nào sau đây không là người thừa kế theo quy định của pháp luật Việt Nam?
Nhà nước.
Cá nhân.
Thú cưng của người để lại di sản.
Tổ chức.

Câu 28: Bộ luật dân sự 2015 quy định người mất năng lực hành vi dân sự là người như thế nào?
Người chưa thành niên
Người bị bệnh tâm thần hoặc mắc bệnh khác mà không thể nhận thức, làm chủ hành vi
Người nghiên ma túy, nghiện các chất kích thích khác dẫn đến phá tán tài sản của gia đình
Người gặp khó khăn trong nhận thức và làm chủ hành vi

Câu 29: Thời hiệu khởi kiện về quyền thừa kế là bao nhiêu năm kể từ thời điểm mở thừa kế?
5 năm.
15 năm.
10 năm.
20 năm.

Câu 30: A kết hôn với B, có 2 con chung là C và D (C 15 tuổi, D 19 tuổi nhưng bị tâm thần). Tài sản chung của vợ chồng A trị giá 400 triệu đồng. A chết để lại di chúc hợp pháp cho bà E 200 triệu đồng. Theo quy định của pháp luật, những người nào được hưởng di sản thừa kế của A?
Chỉ 2 con của A là C và D được hưởng.
B, C, D, E đều được hưởng.
B, D, E được hưởng.
Chỉ bà E được hưởng theo di chúc.

Câu 31: Trong các ngành/lĩnh vực luật sau, đâu là ngành/lĩnh vực thuộc luật công?
Luật lao động.
Luật hôn nhân và gia đình.
Luật dân sự.
Luật Nhà nước.

Câu 32: Trong các ngành luật sau, đâu là ngành luật không thuộc luật công?
Luật hành chính.
Luật hình sự.
Luật thương mại.
Luật hiến pháp.

Câu 33: Trong các tổ chức sau, xác định tổ chức chính trị - xã hội ở nước CHXHCN Việt Nam?
Mặt trận tổ quốc Việt Nam.
Hiệp hội trọng tài.
Hội làm vườn.
Đoàn luật sư.

Câu 34: Trong các cơ quan sau, cơ quan nào là cơ quan tư pháp ở Nhà nước CHXHCN Việt Nam?
Tòa án nhân dân cấp tỉnh
Quốc hội.
Chính phủ.
Hội đồng nhân dân cấp tỉnh

Câu 35: Trong các cơ quan sau, cơ quan nào là cơ quan tư pháp ở Nhà nước CHXHCN Việt Nam?
Tòa án nhân dân.
Hội đồng nhân dân.
Hội đồng bầu cử Quốc gia.
Chính phủ.

Câu 36: Trường hợp nào sau đây vi phạm quyền bất khả xâm phạm về chỗ ở của công dân?
Giúp chủ nhà phá khóa để vào nhà.
Cảnh sát phòng cháy chữa cháy phá khóa để dập tắt đám cháy.
Hết hạn thuê nhà nhưng không chịu dọn đi.
Trèo qua tường nhà hàng xóm để lấy đồ bị rơi.

Câu 37: Theo Hiến pháp năm 2013, nhân dân sử dụng quyền lực của mình thông qua cơ quan nhà nước nào?
Chính phủ và Ủy ban nhân dân.
Quốc hội và Hội đồng nhân dân.
Chính phủ và Hội đồng nhân dân.
Quốc hội và Chính phủ.

Câu 38: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Tòa án nhân dân.
Ủy ban Tư pháp của Quốc hội.
Bộ kế hoạch và đầu tư.
Cơ quan nhà nước có thẩm quyền.

Câu 39: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Cơ quan nhà nước có thẩm quyền.
Quốc hội.
Ủy ban Tư pháp của Quốc hội.
Bộ Công an.

Câu 40: Trong các chế tài sau đây, xác định đâu là biện pháp xử phạt vi phạm hành chính?
Buộc bồi thường thiệt hại.
Tước quyền sử dụng chứng chỉ hành nghề có thời hạn.
Đưa vào cơ sở giáo dục bắt buộc.
Buộc thực hiện biện pháp khắc phục tình trạng lây lan dịch bệnh.

Câu 41: Trong các chế tài sau đây, xác định đâu là biện pháp thay thế xử lý vi phạm hành chính?
Buộc tiêu hủy hàng hóa, vật phẩm gây hại cho sức khỏe con người.
Buộc bồi thường thiệt hại.
Nhắc nhở.
Đưa vào cơ sở cai nghiện bắt buộc.

Câu 42: Trong các chế tài sau đây, xác định đâu là biện pháp xử lý vi phạm hành chính?
Đưa vào cơ sở cai nghiện bắt buộc.
Buộc bồi thường thiệt hại.
Cảnh cáo.
Buộc tiêu hủy hàng hóa, vật phẩm gây hại cho sức khỏe con người.

Câu 43: Trong quan hệ pháp luật hành chính, luôn có một bên chủ thể:
Là Nhà nước.
Mang quyền lực nhà nước.
Là công dân Việt Nam.
Là cơ quan hành chính nhà nước.

Câu 44: Cán bộ bị Tòa án kết án về hành vi tham nhũng thì đồng thời áp dụng hình thức kỷ luật nào?
Cảnh cáo.
Hạ bậc lượng.
Buộc thôi việc.
Cách chức.

Câu 45: Phạm tội với lỗi vô ý vì quá tự tin là trường hợp nào sau đây?
Người phạm tội tuy thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội nhưng cho rằng hậu quả đó sẽ không xảy ra hoặc có thể ngăn ngừa được.
Người phạm tội không thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội, mặc dù phải thấy trước và có thể thấy trước hậu quả đó.
Người phạm tội nhận thức rõ hành vi của mình là nguy hiểm cho xã hội, thấy trước hậu quả của hành vi đó có thể xảy ra, tuy không mong muốn nhưng vẫn có ý thức để mặc cho hậu quả xảy ra.
Người phạm tội nhận thức rõ hành vi của mình là nguy hiểm cho xã hội, thấy trước hậu quả của hành vi đó và mong muốn hậu quả xảy ra.

Câu 46: Xác định độ tuổi bắt đầu phải chịu trách nhiệm hình sự?
Từ 14 tuổi.
Từ đủ 14 tuổi.
Từ đủ 18 tuổi.
Từ đủ 16 tuổi.

Câu 47: Xác định loại tội phạm cho trường hợp sau: “Người mẹ nào do ảnh hưởng nặng nề của tư tưởng lạc hậu hoặc trong hoàn cảnh khách quan đặc biệt mà giết con do mình đẻ ra trong 07 ngày tuổi, thì bị phạt tù từ 06 tháng đến 03 năm.” Điều 124 - Bộ luật hình sự năm 2015.
Tội rất nghiêm trọng.
Tội nghiêm trọng.
Tội ít nghiêm trọng.
Tội đặc biệt nghiêm trọng.

Câu 48: Xác định loại tội phạm cho trường hợp sau: “Người nào trong khi thi hành công vụ mà làm chết người do dùng vũ lực ngoài những trường hợp pháp luật cho phép, thì bị phạt tù từ 05 năm đến 10 năm.” Điều 127 - Bộ luật hình sự năm 2015.
Tội ít nghiêm trọng.
Tội rất nghiêm trọng.
Tội đặc biệt nghiêm trọng.
Tội nghiêm trọng.

Câu 49: A sửa xe máy ở tiệm của B. B đã cố tình sửa một cách cẩu thả để A còn tiếp tục quay lại tiệm của B để sửa xe. Do phanh xe không an toàn nên sau đó chiếc xe đã lao xuống dốc khiến A bị chết. Xác định lỗi của B trong tình huống này?
Cố ý trực tiếp.
Vô ý vì quá tự tin.
Cố ý gián tiếp.
Vô ý do cẩu thả.

Câu 50: Luật dân sự điều chỉnh những quan hệ xã hội nào?
Quan hệ nhân thân và quan hệ tài sản.
Quan hệ nhân thân và quan hệ kinh tế.
Tất cả các quan hệ xã hội có liên quan đến tài sản.
Quan hệ tài sản và quan hệ gia đình.

Câu 51: Đâu không phải tài sản theo quy định của Bộ luật dân sự năm 2015?
Trái phiếu.
Vật.
Tiền.
Căn cước công dân.

Câu 52: Xác định năng lực hành vi dân sự của người nghiện ma túy, nghiện các chất kích thích khác dẫn đến phá tán tài sản của gia đình?
Bị hạn chế năng lực hành vi dân sự.
Không có năng lực hành vi dân sự.
Mất năng lực hành vi dân sự.
Có năng lực hành vi dân sự đầy đủ.

Câu 53: Giao dịch dân sự của chủ thể nào sau đây phải do người đại diện theo pháp luật của người đó xác lập, thực hiện?
Người bị hạn chế năng lực hành vi dân sự.
Người từ đủ 18 tuổi trở lên.
Người từ đủ 15 tuổi đến dưới 18 tuổi.
Người chưa đủ 6 tuổi.

Câu 54: Chia di chúc theo pháp luật áp dụng trong trường hợp nào?
Di chúc của người chết để lại không chia cho tất cả các con của người đó.
Di chúc của người chết để lại là di chúc bằng lời nói.
Di chúc của người chết dành lại toàn bộ di sản cho tổ chức từ thiện.
Người chết không để lại di chúc.

Câu 55: A, B, C cùng góp vốn thành lập công ty trách nhiệm hữu hạn, sở hữu của A, B, C đối với công ty thuộc hình thức sở hữu nào?
Sở hữu toàn dân.
Sở hữu chung theo phần.
Sở hữu riêng.
Sở hữu chung hợp nhất.

Câu 56: Trong các ngành/lĩnh vực luật sau, đâu là ngành/lĩnh vực thuộc luật công?
Luật lao động.
Luật tố tụng hành chính.
Luật hôn nhân và gia đình.
Luật dân sự.

Câu 57: Trong các tổ chức sau, xác định tổ chức chính trị - xã hội ở nước CHXHCN Việt Nam?
Hội cựu chiến binh Việt Nam.
Hiệp hội trọng tài.
Hội làm vườn.
Đoàn luật sư.

Câu 58: Ngành luật nào sau đây điều chỉnh các quan hệ cơ bản nhất liên quan đến việc xác định chế độ chính trị, kinh tế, văn hoá - xã hội, quốc phòng - an ninh, đối ngoại, quyền và nghĩa vụ cơ bản của công dân, tổ chức và hoạt động của bộ máy nhà nước?
Luật tổ chức Quốc hội.
Luật tổ chức Chính phủ.
Luật hiến pháp.
Luật hành chính.

Câu 59: Theo Hiến pháp năm 2013, chức danh nào dưới đây bắt buộc phải là đại biểu Quốc hội?
Viện trưởng Viện kiểm sát nhân dân tối cao.
Chủ tịch Ủy ban nhân dân cấp tỉnh.
Phó chủ tịch nước.
Chánh án Tòa án nhân dân tối cao.

Câu 60: Đặt điều nói xấu người khác là vi phạm quyền nào của công dân?
Quyền bất khả xâm phạm về thân thể của công dân.
Quyền được pháp luật bảo hộ về danh dự, nhân phẩm của công dân.
Quyền bất khả xâm phạm về chỗ ở của công dân.
Quyền được pháp luật bảo hộ về tính mạng, sức khỏe của công dân.

Câu 61: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Ủy ban Trung ương Mặt trận tổ quốc Việt Nam.
Ủy ban Pháp luật của Quốc hội.
Cơ quan nhà nước có thẩm quyền.
Bộ quốc phòng.

Câu 62: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Bộ giao thông vận tải.
Ban chấp hành Trung ương Đảng.
Ủy ban Tư pháp của Quốc hội.
Cơ quan nhà nước có thẩm quyền.

Câu 63: Quan hệ xã hội nào sau đây thuộc đối tượng điều chỉnh của Luật hành chính?
Quan hệ chuyển nhượng quyền sử dụng đất giữa A và B.
Quan hệ giữa luật sư bào chữa với thân chủ của mình.
Quan hệ giữa người lao động A và công ty TNHH B.
Quan hệ giữa Thủ tướng Chính phủ với Bộ trưởng khi Bộ trưởng kiến nghị với Thủ tướng đình chỉ việc thi hành Nghị quyết của Hội đồng nhân dân cấp tỉnh trái với văn bản pháp luật do Bộ phụ trách.

Câu 64: Trong các chế tài sau đây, xác định đâu là biện pháp xử phạt vi phạm hành chính?
Buộc bồi thường thiệt hại.
Giáo dục tại xã, phường, thị trấn.
Buộc tái xuất hàng hóa, vật phẩm, phương tiện.
Tịch thu tang vật vi phạm hành chính.

Câu 65: Trong các phương pháp điều chỉnh sau, đâu là phương pháp điều chỉnh đặc trưng của Luật hành chính?
Phương pháp bình đẳng, thỏa thuận.
Phương pháp mệnh lệnh đơn phương.
Phương pháp độc lập, tự định đoạt.
Phương pháp thông qua hoạt động của tổ chức công đoàn.

Câu 66: Phạm tội với lỗi cố ý trực tiếp là trường hợp nào sau đây?
Người phạm tội nhận thức rõ hành vi của mình là nguy hiểm cho xã hội, thấy trước hậu quả của hành vi đó và mong muốn hậu quả xảy ra.
Người phạm tội không thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội, mặc dù phải thấy trước và có thể thấy trước hậu quả đó.
Người phạm tội nhận thức rõ hành vi của mình là nguy hiểm cho xã hội, thấy trước hậu quả của hành vi đó có thể xảy ra, tuy không mong muốn nhưng vẫn có ý thức để mặc cho hậu quả xảy ra.
Người phạm tội tuy thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội nhưng cho rằng hậu quả đó sẽ không xảy ra hoặc có thể ngăn ngừa được.

Câu 67: Vi phạm pháp luật hình sự là hành vi nguy hiểm cho xã hội được quy định trong văn bản nào sau đây?
Bộ luật hình sự.
Bản án, quyết định của Tòa án .
Văn bản quy phạm pháp luật.
Pháp luật của nhà nước.

Câu 68: Trong đồng phạm, người tổ chức là người đóng vai trò như thế nào?
Người chủ mưu, cầm đầu việc thực hiện tội phạm.
Người tạo điều kiện tinh thần hoặc vật chất cho việc thực hiện tội phạm.
Người kích động, dụ dỗ người khác thực hiện tội phạm.
Người trực tiếp thực hiện tội phạm.

Câu 69: A 14 tuổi 2 tháng, A phạm tội cố ý gây thương tích. Xác định trách nhiệm pháp lý áp dụng đối với A?
A phải chịu trách nhiệm hình sự.
A không phải chịu trách nhiệm hình sự vì còn là trẻ em.
Cha mẹ hoặc người giám hộ của A phải chịu trách nhiệm thay A.
A phải chịu trách nhiệm hành chính đối với vi phạm pháp luật của mình.

Câu 70: Chủ thể nào sau đây không thuộc hàng thừa kế thứ hai theo quy định của pháp luật?
Vợ, chồng của người chết.
Ông nội, bà nội của người chết.
Em nuôi của người chết.
Anh ruột, chị ruột, em ruột của người chết.

Câu 71: Xác định đâu là quan hệ nhân thân liên quan đến tài sản?
Quyền ly hôn.
Quyền tác giả.
Quyền thay đổi họ tên.
Quyền được khai sinh.

Câu 72: Giao dịch dân sự của người mất năng lực hành vi dân sự được thực hiện như thế nào?
Do người đó xác lập, thực hiện.
Được sự đồng ý của người đại diện theo pháp luật của người đó.
Do người đó xác lập, thực hiện, trừ giao dịch dân sự liên quan đến bất động sản.
Do người đại diện theo pháp luật của người đó xác lập, thực hiện.

Câu 73: Anh, chị, em nuôi của người để lại di sản thừa kế thuộc hàng thừa kế thứ mấy?
Hàng thừa kế thứ hai.
Hàng thừa kế thứ nhất.
Hàng thừa kế thứ ba.
Không thuộc hàng thừa kế nào.

Câu 74: ài sản của vợ chồng ở Việt Nam thuộc hình thức sở hữu nào?
Sở hữu chung hợp nhất.
Sở hữu riêng.
Sở hữu chung theo phần.
Sở hữu toàn dân.

Câu 75: Trong các tổ chức sau, xác định tổ chức chính trị - xã hội ở nước CHXHCN Việt Nam?
Hội làm vườn.
Hiệp hội trọng tài.
Đoàn luật sư.
Hội nông dân Việt Nam.

Câu 76: Theo Hiến pháp năm 2013, công dân từ đủ bao nhiêu tuổi trở lên được biểu quyết khi Nhà nước tổ chức trưng cầu dân ý?
14
18
21
16

Câu 77: Trong các cơ quan sau, cơ quan nào là cơ quan tư pháp ở Nhà nước CHXHCN Việt Nam?
Viện kiểm sát nhân dân.
Hội đồng nhân dân.
Quốc hội.
Chính phủ.

Câu 78: Chỉ ra hệ thống cơ quan quản lý hành chính nhà nước gồm các cơ quan nào?
Quốc hội, Hội đồng nhân dân các cấp.
Chính phủ, Ủy ban nhân dân các cấp.
Chính phủ, Hội đồng nhân dân các cấp.
Quốc hội, Chính phủ.

Câu 79: Đi xe máy vượt đèn đỏ gây thương tích cho người khác là vi phạm quyền nào của công dân?
Quyền được pháp luật bảo hộ về danh dự, nhân phẩm của công dân.
Quyền bất khả xâm phạm về thân thể của công dân.
Quyền bất khả xâm phạm về chỗ ở của công dân.
Quyền được pháp luật bảo hộ về tính mạng, sức khỏe của công dân.

Câu 80: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Chủ tịch nước.
Ủy ban Pháp luật của Quốc hội.
Cơ quan nhà nước có thẩm quyền.
Bộ Văn hóa, Thể thao và Du lịch.

Câu 81: Trong các văn bản sau đây, văn bản nào không là nguồn của Luật hành chính?
Nghị định của Chính phủ.
Hiến pháp.
Đơn khiếu nại, tố cáo.
Thông tư của Bộ trưởng.

Câu 82: Trong các chế tài sau đây, xác định đâu là biện pháp xử lý vi phạm hành chính?
Giáo dục tại xã, phường, thị trấn.
Buộc tái xuất hàng hóa, vật phẩm, phương tiện.
Tịch thu tang vật vi phạm hành chính.
Buộc bồi thường thiệt hại.

Câu 83: Trong các chế tài sau đây, xác định đâu là biện pháp xử phạt vi phạm hành chính?
Buộc thực hiện các biện pháp khắc phục tình trạng ô nhiễm môi trường.
Buộc nộp lại số lợi bất hợp pháp có được do thực hiện vi phạm hành chính.
Tước quyền sử dụng giấy phép.
Đưa vào cơ sở cai nghiện bắt buộc.

Câu 84: Trong các chế tài sau đây, xác định đâu là biện pháp ngăn chặn và bảo đảm xử lý hành chính?
Buộc phá dỡ công trình xây dựng không có giấy phép.
Buộc cải chính thông tin gây nhầm lẫn.
Trục xuất.
Tạm giữ tang vật, phương tiện vi phạm hành chính.

Câu 85: Giám đốc Bệnh viện Bạch Mai Hà Nội thuộc đối tượng nào?
Viên chức.
Người lao động.
Công chức.
Cán bộ.

Câu 86: Thủ tục cấp giấy đăng ký doanh nghiệp thuộc loại thủ tục gì?
Là thủ tục hành chính.
Là thủ tục tư pháp.
Là thủ tục tố tụng hành chính.
Là thủ tục kinh tế .

Câu 87: Phạm tội với lỗi vô ý do cẩu thả là trường hợp nào sau đây?
Người phạm tội không thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội, mặc dù phải thấy trước và có thể thấy trước hậu quả đó.
Người phạm tội nhận thức rõ hành vi của mình là nguy hiểm cho xã hội, thấy trước hậu quả của hành vi đó có thể xảy ra, tuy không mong muốn nhưng vẫn có ý thức để mặc cho hậu quả xảy ra.
Người phạm tội tuy thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội nhưng cho rằng hậu quả đó sẽ không xảy ra hoặc có thể ngăn ngừa được.
Người phạm tội nhận thức rõ hành vi của mình là nguy hiểm cho xã hội, thấy trước hậu quả của hành vi đó và mong muốn hậu quả xảy ra.

Câu 88: Xác định loại tội phạm cho trường hợp sau: “Người nào nhằm chống chính quyền nhân dân mà phá cơ sở giam giữ, tổ chức trốn khỏi cơ sở giam giữ, đánh tháo người bị giam giữ, người bị áp giải hoặc trốn khỏi cơ sở giam giữ, thì bị phạt tù từ 10 năm đến 20 năm hoặc tù chung thân.” Điều 119 - Bộ luật hình sự năm 2015.
Tội ít nghiêm trọng.
Tội rất nghiêm trọng.
Tội nghiêm trọng.
Tội đặc biệt nghiêm trọng.

Câu 89: Xác định chủ thể của tội phạm trong Luật hình sự Việt Nam?
Chỉ có thể là công dân Việt Nam.
Chỉ có thể là cá nhân.
Cá nhân hoặc pháp nhân thương mại.
Chỉ có thể là tổ chức.

Câu 90: Không áp dụng hình phạt trục xuất đối với chủ thể nào sau đây?
Công dân Việt Nam.
Người cao tuổi.
Cá nhân.
Người nước ngoài

Câu 91: A là kế toán doanh nghiệp, khi nhập dữ liệu, A đã không may điền thừa một số 0 trong số tiền cần chuyển cho đối tác, hành vi này của A khiến công ty bị thiệt hại. Xác định lỗi của A?
Cố ý gián tiếp.
Cố ý trực tiếp.
Vô ý vì quá tự tin.
Vô ý do cẩu thả.

Câu 92: Khi nào pháp nhân có năng lực chủ thể?
Khi tổ chức có đủ thành viên.
Khi nhà nước cho phép hoặc công nhận sự thành lập của pháp nhân.
Khi các thành viên thỏa thuận thành lập pháp nhân.
Khi một tổ chức đủ vốn.

Câu 93: Quyền sử dụng đối với tài sản là một loại quyền năng của quyền nào sau đây?
Quyền chiếm hữu.
Quyền sở hữu.
Quyền định đoạt.
Quyền khai thác lợi ích từ tài sản.

Câu 94: Nhận định nào sau đây là ĐÚNG?
Các cá nhân đều có năng lực pháp luật dân sự ngoại trừ những người gặp khó khăn trong nhận thức, làm chủ hành vi.
Các cá nhân đều có năng lực pháp luật dân sự ngoại trừ những người bị tâm thần.
Tùy vào mức độ nhận thức mà nhân có năng lực pháp luật dân sự khác nhau.
Mọi cá nhân đều có năng lực pháp luật dân sự như nhau.

Câu 95: A bán cho B chiếc xe máy thuộc quyền sở hữu của mình. Hỏi A đang thực hiện quyền gì đối với tài sản mà mình sở hữu?
Quyền chiếm dụng.
Quyền sử dụng.
Quyền chiếm hữu.
Quyền định đoạt.

Câu 96: Quyền sở hữu trí tuệ thuộc loại tài sản nào theo quy định của Bộ luật dân sự năm 2015?
Tiền.
Giấy tờ có giá.
Quyền tài sản.
Vật.

Câu 97: Trong các ngành/lĩnh vực luật sau, đâu là ngành/lĩnh vực thuộc luật công?
Luật dân sự.
Luật thương mại.
Luật tố tụng dân sự.
Luật lao động.

Câu 98: Trong các tổ chức sau, xác định tổ chức chính trị - xã hội ở nước CHXHCN Việt Nam?
Hiệp hội trọng tài.
Đoàn luật sư.
Hội liên hiệp phụ nữ Việt Nam.
Hội làm vườn.

Câu 99: Trong các quyền cơ bản của công dân, quyền nào sau đây thuộc nhóm quyền dân sự, chính trị?
Quyền học tập.
Quyền được chăm sóc sức khỏe.
Quyền làm việc.
Quyền hội họp.

Câu 100: Theo Hiến pháp năm 2013, nền kinh tế của Việt Nam được quy định là nền kinh tế như thế nào?
Nền kinh tế thị trường tư bản chủ nghĩa.
Nền kinh tế thị trường định hướng xã hội chủ nghĩa.
Nền kinh tế kế hoạch hóa tập trung xã hội chủ nghĩa.
Nền kinh tế kế hoạch hóa tập trung.

Câu 101: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Cơ quan nhà nước có thẩm quyền.
Bộ nội vụ.
Ủy ban Tư pháp của Quốc hội.
Ủy ban thường vụ Quốc hội.

Câu 102: Trong các chế tài sau đây, xác định đâu là biện pháp thay thế xử lý vi phạm hành chính?
Phạt tiền.
Đưa vào cơ sở cai nghiện bắt buộc.
Quản lý tại gia đình.
Buộc khôi phục lại tình trạng ban đầu.

Câu 103: Trong các chế tài sau đây, xác định đâu là biện pháp khắc phục hậu quả áp dụng đối với vi phạm hành chính?
Giáo dục tại xã, phường, thị trấn.
Tịch thu tang vật vi phạm hành chính.
Buộc tái xuất hàng hóa, vật phẩm, phương tiện.
Buộc bồi thường thiệt hại.

Câu 104: Chính phủ và Ủy ban nhân dân các cấp là cơ quan hành chính:
Có thẩm quyền cao nhất trong bộ máy hành chính.
Có thẩm quyền chung.
có thẩm quyền do Chủ tịch nước quyết định.
Có thẩm quyền chuyên môn.

Câu 105: Tội phạm rất nghiêm trọng là tội phạm có mức hình phạt như thế nào?
Mức cao nhất của khung hình phạt đối với tội ấy là từ trên 7 năm đến 15 năm tù.
Mức trung bình của khung hình phạt đối với tội ấy là 15 năm tù.
Mức thấp nhất của khung hình phạt đối với tội ấy là 15 năm tù.
Hình phạt đối với tội ấy là 15 năm tù.

Câu 106: Trong đồng phạm, người trực tiếp thực hiện tội phạm được gọi là gì?
Người xúi giục.
Người tổ chức.
Người thực hành.
Người giúp sức.

Câu 107: Khẳng định nào sau đây là ĐÚNG?
Trách nhiệm hình sự có thể áp dụng đối với cá nhân hoặc tổ chức.
Trách nhiệm hình sự có thể áp dụng đối với cá nhân hoặc pháp nhân thương mại.
Trách nhiệm hình sự chỉ áp dụng đối với cá nhân.
Trách nhiệm hình sự chỉ áp dụng đối với tổ chức.

Câu 108: A mắc dây điện vào hàng rào để chống trộm, B là hàng xóm của A chạm vào hàng rào bị điện giật chết. Xác định lỗi của A?
Vô ý vì quá tự tin.
Cố ý gián tiếp.
Vô ý do cẩu thả.
Cố ý trực tiếp.

Câu 109: Chủ thể nào sau đây không thuộc hàng thừa kế thứ ba theo quy định của pháp luật?
Cô ruột, chú ruột của người chết.
Vợ, chồng của người chết.
Chắt ruột của người chết.
Cụ nội, cụ ngoại của người chết.

Câu 110: Trường hợp nào sau đây, quyền định đoạt tài sản của chủ sở hữu không bị hạn chế?
Bán rau củ tươi sống.
Bán vật là di tích lịch sử.
Bán vật đang cầm cố.
Bán vật đang thế chấp.

Câu 111: Cá nhân có năng lực pháp luật dân sự từ khi nào?
Khi đủ 18 tuổi.
Từ khi người đó sinh ra.
Khi đủ 6 tuổi.
Khi đủ 15 tuổi.

Câu 112: Bộ luật dân sự 2015 quy định người bị hạn chế năng lực hành vi dân sự là người như thế nào?
Người nghiên ma túy, nghiện các chất kích thích khác dẫn đến phá tán tài sản của gia đình.
Người gặp khó khăn trong nhận thức và làm chủ hành vi.
Người chưa thành niên.
Người bị bệnh tâm thần hoặc mắc bệnh khác mà không thể nhận thức, làm chủ hành vi.

Câu 113: Quyền tạo ra giống cây trồng mới thuộc loại tài sản nào theo quy định của Bộ luật dân sự năm 2015?
Vật.
Giấy tờ có giá.
Quyền tài sản.
Tiền.

Câu 114: Trong các ngành/lĩnh vực luật sau, đâu là ngành/lĩnh vực thuộc luật công?
Luật thương mại.
Luật dân sự.
Luật lao động.
Luật môi trường.

Câu 115: Khẳng định nào sau đây là SAI?
Các tôn giáo được Nhà nước công nhận đều bình đẳng trước pháp luật, có quyền hoạt động tôn giáo theo quy định của pháp luật.
Quyền hoạt động tín ngưỡng, tôn giáo của công dân trên tinh thần tôn trọng pháp luật, phát huy giá trị văn hóa, đạo đức, tôn giáo được Nhà nước bảo đảm.
Các tôn giáo được Nhà nước công nhận, được hoạt động khi đóng thuế hàng năm.
Hoạt động tín ngưỡng, tôn giáo theo quy định của pháp luật được Nhà nước bảo đảm; các cơ sở tôn giáo hợp pháp được pháp luật bảo hộ.

Câu 116: Theo Hiến pháp năm 2013, đâu là tài nguyên đặc biệt của quốc gia?
Nước.
Đất đai.
Rừng.
Biển.

Câu 117: Trong các văn bản sau đây, văn bản nào không là nguồn của Luật hành chính?
Nghị định của Chính phủ.
Thông tư của Bộ trưởng.
Quyết định xử phạt vi phạm hành chính.
Hiến pháp.

Câu 118: Trong các chế tài sau đây, xác định đâu là biện pháp xử lý vi phạm hành chính?
Đưa vào trường giáo dưỡng.
Đình chỉ hoạt động có thời hạn.
Tước quyền sử dụng chứng chỉ hành nghề có thời hạn.
Buộc đưa ra khỏi lãnh thổ nước CHXHCN Việt Nam.

Câu 119: Trong các chế tài sau đây, xác định đâu là biện pháp xử phạt vi phạm hành chính?
Nhắc nhở.
Tịch thu phương tiện được sử dụng để vi phạm hành chính.
Buộc cải chính thông tin sai sự thật.
Buộc bồi thường thiệt hại.

Câu 120: Đâu không phải là phương thức hình thành đội ngũ cán bộ giữ chức vụ trong các cơ quan nhà nước?
Bầu cử.
Tuyển dụng.
Bổ nhiệm.
Phê chuẩn.

Câu 121: A 17 tuổi, thực hiện hành vi vi phạm hành chính và có thể áp dụng hình thức phạt tiền. Trường hợp nào sau đây áp dụng đúng với A?
Mức tiền phạt của A tối đa bằng 1/2 mức phạt đối với người thành niên.
Trường hợp A không có tiền nộp phạt thì không được áp dụng hình thức phạt tiền mà chuyển sang phạt cảnh cáo.
Trong mọi trường hợp, cha mẹ hoặc người giám hộ của A phải nộp thay.
Mức tiền phạt của A giống mức phạt đối với người thành niên.

Câu 122: Hình phạt được áp dụng đối với hành vi vi phạm pháp luật nào?
Hành vi cố ý phạm tội.
Vi phạm hành chính.
Tội phạm.
Các vi phạm pháp luật.

Câu 123: Xác định loại tội phạm cho trường hợp sau: “Công dân Việt Nam nào câu kết với nước ngoài nhằm gây nguy hại cho độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Tổ quốc, chế độ xã hội chủ nghĩa và Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam, tiềm lực quốc phòng, an ninh, thì bị phạt tù từ 12 năm đến 20 năm, tù chung thân hoặc tử hình.” Điều 108 - Bộ luật hình sự năm 2015.
Tội đặc biệt nghiêm trọng.
Tội nghiêm trọng.
Tội ít nghiêm trọng.
Tội rất nghiêm trọng.

Câu 124: Trong đồng phạm, người chủ mưu, cầm đầu, chỉ huy việc thực hiện tội phạm được gọi là gì?
Người giúp sức.
Người xúi giục.
Người tổ chức.
Người thực hành.

Câu 125: Trường hợp cá nhân tìm kiếm, sửa soạn công cụ, phương tiện hoặc tạo ra những điều kiện khác để thực hiện tội phạm là giai đoạn nào của quá trình thực hiện tội phạm?
Phạm tội chưa đạt.
Tự ý nửa chừng chấm dứt việc phạm tội.
Chuẩn bị phạm tội.
Tội phạm hoàn thành.

Câu 126: A trong lúc thi công đổ mái nhà đã làm rơi một ván gỗ xuống dưới đường trúng vào người B dẫn tới B bị tử vong. Xác định lỗi của A?
Vô ý vì quá tự tin.
Cố ý trực tiếp.
Cố ý gián tiếp.
Vô ý do cẩu thả.

Câu 127: Trong các văn bản sau đây, văn bản nào là nguồn của Luật dân sự?
Bản án về vụ việc dân sự.
Quyết định của Tòa án.
Văn bản chứa đựng quy phạm pháp luật dân sự.
Hợp đồng dân sự.

Câu 128: Xác định năng lực hành vi dân sự của người mắc bệnh tâm thần hoặc các bệnh khác mà không thể nhận thức và điều khiển hành vi?
Có năng lực hành vi dân sự chưa đầy đủ.
Không có năng lực hành vi dân sự.
Mất năng lực hành vi dân sự.
Có năng lực hành vi dân sự đầy đủ.

Câu 129: Theo quy định của Bộ luật dân sự năm 2015, hình thức của di chúc không bao gồm loại nào sau đây?
Di chúc bằng hành vi cụ thể.
Di chúc bằng văn bản không có người làm chứng.
Di chúc bằng miệng.
Di chúc bằng văn bản có người làm chứng.

Câu 130: Các trường hợp chiếm hữu nào sau đây là chiếm hữu bất hợp pháp?
Chiếm hữu do chủ sở hữu vật ủy quyền.
Chiếm hữu thông qua việc thuê vật của chủ sở hữu.
Chiếm hữu của chủ sở hữu vật.
Chiếm hữu vật đánh rơi không khai báo.

Câu 131: Nhiệm kỳ của mỗi khóa Quốc hội là bao nhiêu năm?
5 năm.
7 năm.
5 năm 2 khóa.
3 năm.

Câu 132: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Bộ Nông nghiệp và phát triển nông thôn.
Hội đồng quốc phòng - an ninh.
Cơ quan nhà nước có thẩm quyền.
Ủy ban Tư pháp của Quốc hội.

Câu 133: Trong các văn bản sau đây, văn bản nào là nguồn của Luật hành chính?
Điều lệ Đảng cộng sản Việt Nam.
Văn bản chứa đựng quy phạm pháp luật hành chính.
Đơn khiếu nại, tố cáo.
Quyết định xử phạt vi phạm hành chính.

Câu 134: Quan hệ xã hội nào sau đây thuộc đối tượng điều chỉnh của Luật hành chính?
Quan hệ giữa người lao động A và công ty TNHH B.
Quan hệ giữa luật sư bào chữa với thân chủ của mình.
Quan hệ giữa cán bộ tư pháp xã phường với người dân đến làm thủ tục khai sinh cho người thân.
Quan hệ chuyển nhượng quyền sử dụng đất giữa A và B.

Câu 135: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Bộ chính trị.
Ủy ban Tư pháp của Quốc hội.
Cơ quan nhà nước có thẩm quyền.
Thanh tra Chính phủ.

Câu 136: Trong các chế tài sau đây, xác định đâu là biện pháp khắc phục hậu quả áp dụng đối với vi phạm hành chính?
Buộc bồi thường thiệt hại.
Cảnh cáo.
Quản lý tại gia đình.
Buộc thu hồi sản phẩm, hàng hóa không đảm bảo chất lượng.

Câu 137: Chánh văn phòng Sở tư pháp tỉnh thuộc đối tượng nào?
Cán bộ.
Viên chức.
Người lao động.
Công chức.

Câu 138: Xác định mức hình phạt cao nhất của tội phạm rất nghiêm trọng?
13 năm tù.
9 năm tù.
11 năm tù.
15 năm tù.

Câu 139: Trường hợp cá nhân tự mình không thực hiện tội phạm đến cùng, tuy không có gì ngăn cản là giai đoạn nào của quá trình thực hiện tội phạm?
Tự ý nửa chừng chấm dứt việc phạm tội.
Tội phạm hoàn thành.
Phạm tội chưa đạt.
Chuẩn bị phạm tội.

Câu 140: Người thừa kế tài sản là chủ thể phải thỏa mãn điều kiện nào sau đây?
Là công dân Việt Nam.
Người không có tài sản vào thời điểm mở thừa kế.
Người còn sống vào thời điểm mở thừa kế.
Người đủ 18 tuổi vào thời điểm mở thừa kế.

Câu 141: Giao dịch dân sự của người từ đủ 15 tuổi đến dưới 18 tuổi được thực hiện như thế nào?
Do người đó xác lập, thực hiện, trừ giao dịch dân sự liên quan đến bất động sản.
Do người đó xác lập, thực hiện.
Được sự đồng ý của người đại diện theo pháp luật của người đó.
Do người đại diện theo pháp luật của người đó xác lập, thực hiện.

Câu 142: Bộ luật dân sự năm 2015 quy định độ tuổi của người chưa thành niên là bao nhiêu?
Dưới 6 tuổi.
Dưới 15 tuổi.
Dưới 18 tuổi.
Dưới 20 tuổi.

Câu 143: Những người nào sau đây là người thừa kế không phụ thuộc nội dung của di chúc?
Cha mẹ đẻ, vợ, chồng, con chưa thành niên, con thành niên không còn khả năng lao động của người chết.
Cha mẹ đẻ, con đẻ của người chết.
Con chưa thành niên, cha mẹ đẻ của người chết.
Cha mẹ đẻ, vợ, chồng của người chết.

Câu 144: Người không được thừa kế di sản là chủ thể nào sau đây?
Người bị truất quyền thừa kế.
Người đã thành niên.
Người đang thi hành hình phạt tù có thời hạn.
Người chưa thành niên.

Câu 145: Trong các ngành/lĩnh vực luật sau, đâu là ngành/lĩnh vực thuộc luật công?
Luật hôn nhân và gia đình.
Luật dân sự.
Luật lao động.
Luật hành chính.

Câu 146: Đâu là nguồn cơ bản nhất của Luật Hiến pháp?
Luật tổ chức Quốc hội.
Nghị quyết của Hội đồng thẩm phán Tòa án nhân dân tối cao.
Luật tổ chức chính quyền địa phương.
Hiến pháp.

Câu 147: Trong các chế tài sau đây, xác định đâu là biện pháp ngăn chặn và bảo đảm xử lý hành chính?
Nhắc nhở.
Tịch thu phương tiện được sử dụng để vi phạm hành chính.
Buộc cải chính thông tin sai sự thật.
Tạm giữ giấy phép hành nghề.

Câu 148: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Bộ chính trị.
Cơ quan nhà nước có thẩm quyền.
Ngân hàng nhà nước Việt Nam.
Ủy ban Pháp luật của Quốc hội.

Câu 149: Trưởng khoa Quản trị kinh doanh Trường Đại học Kinh tế quốc dân thuộc đối tượng nào?
Người lao động.
Viên chức.
Công chức.
Cán bộ.

Câu 150: Thủ tục cấp giấy chứng nhận quyền sử dụng đất thuộc loại thủ tục gì?
Là thủ tục tố tụng hành chính.
Là thủ tục tư pháp.
Vừa là thủ tục hành chính vừa là thủ tục tố tụng .
Là thủ tục hành chính.

Câu 151: Xác định văn bản nào không phải là nguồn của Luật hình sự?
Hiến pháp.
Bản án.
Nghị quyết của Hội đồng thẩm phán Tòa án nhân dân tối cao về vụ án hình sự.
Bộ luật hình sự.

Câu 152: Một người bị coi là có tội khi nào?
Bị Tòa án đưa ra xét xử công khai.
Bị cơ quan công an bắt.
Bị Tòa án xét xử và bản án kết tội có hiệu lực pháp luật.
Bị cơ quan công an khởi tố, điều tra về hành vi vi phạm pháp luật.

Câu 153: Xác định loại tội phạm cho trường hợp sau: “Người nào giết người trong trạng thái tinh thần bị kích động mạnh do hành vi trái pháp luật nghiêm trọng của nạn nhân đối với người đó hoặc đối với người thân thích của người đó, thì bị phạt tù từ 06 tháng đến 03 năm.” Điều 125 - Bộ luật hình sự năm 2015.
Tội nghiêm trọng.
Tội ít nghiêm trọng.
Tội rất nghiêm trọng.
Tội đặc biệt nghiêm trọng.

Câu 154: Xác định loại tội phạm cho trường hợp sau: “Người nào sản xuất, buôn bán hàng giả là thuốc chữa bệnh, thuốc phòng bệnh, thì bị phạt tù từ 02 năm đến 07 năm.” Điều 194 - Bộ luật hình sự năm 2015.
Tội đặc biệt nghiêm trọng.
Tội ít nghiêm trọng.
Tội nghiêm trọng.
Tội rất nghiêm trọng.

Câu 155: Khi tổng hợp hình phạt đối với người phạm nhiều tội, nếu hình phạt bị tuyên cho các tội danh bao gồm: tù có thời hạn, tù chung thân và tử hình thì tổng hợp hình phạt đối với người đó là mức như thế nào?
Tù chung thân.
50 năm tù giam.
30 năm tù giam.
Tử hình.

Câu 156: Quả xoài thuộc loại tài sản nào theo quy định của Bộ luật dân sự năm 2015?
Quyền tài sản.
Tiền.
Giấy tờ có giá.
Vật.

Câu 157: Đâu không phải là yếu tố cấu thành trong hệ thống cấu trúc pháp luật?
Văn bản quy phạm pháp luật.
Ngành luật.
Chế định pháp luật.
Quy phạm pháp luật.

Câu 158: Theo Hiến pháp năm 2013, công dân từ đủ 21 tuổi trở lên có thể ứng cử vào cơ quan nào sau đây?
Ủy ban nhân dân cấp tỉnh.
Ủy ban nhân dân cấp huyện.
Chính phủ.
Hội đồng nhân dân.

Câu 159: Theo Hiến pháp năm 2013, chức danh nào dưới đây bắt buộc phải là đại biểu Quốc hội?
Phó thủ tướng chính phủ.
Thủ tướng chính phủ.
Chủ tịch Ủy ban nhân dân cấp tỉnh.
Bộ trưởng.

Câu 160: A là công chức đề nghị thủ trưởng cơ quan xem xét lại quyết định buộc thôi việc trái pháp luật đối với A. A đang thực hiện quyền gì?
Quyền ứng cử.
Quyền khiếu nại.
Quyền tố cáo.
Quyền bãi nại.

Câu 161: Cơ quan nào sau đây là cơ quan hành chính nhà nước?
Cơ quan nhà nước có thẩm quyền.
Bộ tài chính.
Ủy ban Tư pháp của Quốc hội.
Viện kiểm sát nhân dân.

Câu 162: Trong các chế tài sau đây, xác định đâu là biện pháp xử phạt vi phạm hành chính?
Buộc cải chính thông tin gây nhầm lẫn.
Buộc phá dỡ công trình xây dựng không có giấy phép.
Trục xuất.
Đưa vào cơ sở cai nghiện bắt buộc.

Câu 163: Trong các chế tài sau đây, xác định đâu là biện pháp khắc phục hậu quả áp dụng đối với vi phạm hành chính?
Buộc phá dỡ công trình xây dựng không đúng với giấy phép.
Đưa vào cơ sở cai nghiện bắt buộc.
Cảnh cáo.
Phạt tù có thời hạn.

Câu 164: Xác định hình phạt trong các biện pháp chế tài dưới đây?
Cải tạo không giam giữ.
Trả lại tài sản.
Đưa vào trường giáo dưỡng.
Buộc bồi thường thiệt hại.

Câu 165: Trong đồng phạm, người thực hành là người đóng vai trò như thế nào?
Người chủ mưu, cầm đầu việc thực hiện tội phạm.
Người tạo điều kiện tinh thần hoặc vật chất cho việc thực hiện tội phạm.
Người kích động, dụ dỗ người khác thực hiện tội phạm.
Người trực tiếp thực hiện tội phạm.

Câu 166: Quan hệ nhân thân do luật dân sự điều chỉnh được hiểu như thế nào?
Quan hệ với thân bằng cố hữu, bạn bè gần xa của một cá nhân.
Quan hệ hôn nhân giữa vợ và chồng.
Quan hệ được hình thành từ một giá trị nhân thân.
Quan hệ giữa những người thân trong gia đình.

Câu 167: Bộ luật dân sự năm 2015 quy định độ tuổi của người không có năng lực hành vi dân sự là bao nhiêu?
Dưới 20 tuổi.
Dưới 15 tuổi.
Dưới 6 tuổi.
Dưới 18 tuổi.

Câu 168: Con nuôi của người để lại di sản thừa kế thuộc hàng thừa kế thứ mấy?
Hàng thừa kế thứ nhất.
Hàng thừa kế thứ hai.
Không thuộc hàng thừa kế nào.
Hàng thừa kế thứ ba.

Câu 169: Xúc phạm người khác trước mặt nhiều người là vi phạm quyền nào của công dân?
Quyền bất khả xâm phạm về chỗ ở của công dân.
Quyền được pháp luật bảo hộ về tính mạng, sức khỏe của công dân.
Quyền được pháp luật bảo hộ về danh dự, nhân phẩm của công dân.
Quyền bất khả xâm phạm về thân thể của công dân.

Câu 170: Trong các chế tài sau đây, xác định đâu là biện pháp khắc phục hậu quả áp dụng đối với vi phạm hành chính?
Đưa vào cơ sở cai nghiện bắt buộc.
Buộc thực hiện các biện pháp khắc phục tình trạng ô nhiễm môi trường.
Đình chỉ thực hiện hợp đồng.
Tước quyền sử dụng giấy phép.

Câu 171: Chủ tịch nước thuộc đối tượng nào?
Cán bộ.
Viên chức.
Người lao động.
Công chức.

Câu 172: Hình phạt được quy định trong văn bản nào sau đây?
Bộ luật dân sự.
Hiến pháp.
Luật xử lý vi phạm hành chính.
Bộ luật hình sự.

Câu 173: Trong các trường hợp sau, hành vi nào là hành vi vi phạm pháp luật hình sự?
Đơn phương chấm dứt hợp đồng lao động mà không báo trước.
Vượt đèn đỏ.
Vay tiền không trả.
Cướp điện thoại.

Câu 174: A và B là người yêu nhưng sau đó A muốn chia tay B. B không đồng ý nên định dùng dao đâm A rồi sau đó B cũng sẽ tự tử. B đâm A chết, khi B đang tự đâm mình thì có người phát hiện được và ngăn chặn được hành vi tự sát của B nên B không chết. Xác định lỗi của B
Cố ý gián tiếp.
Vô ý vì quá tự tin.
Cố ý trực tiếp.
Vô ý do cẩu thả.

Câu 175: Trong các văn bản sau đây, văn bản nào là nguồn của Luật dân sự?
Thỏa thuận thành lập Tổ hợp tác.
Án lệ về vụ án dân sự.
Bản án về vụ việc dân sự.
Quyết định của Tòa án.

Câu 176: Giao dịch dân sự của người từ đủ 18 tuổi trở lên được thực hiện như thế nào?
Do người đó xác lập, thực hiện, trừ giao dịch dân sự liên quan đến bất động sản.
Do người đại diện theo pháp luật của người đó xác lập, thực hiện.
Do người đó xác lập, thực hiện.
Được sự đồng ý của người đại diện theo pháp luật của người đó.

Câu 177: Bộ luật dân sự năm 2015 quy định độ tuổi của người có năng lực hành vi dân sự không đầy đủ là bao nhiêu?
Dưới 20 tuổi.
Từ đủ 6 tuổi đến dưới 18 tuổi.
Dưới 15 tuổi.
Dưới 18 tuổi.

Câu 178: Công trái thuộc loại tài sản nào theo quy định của Bộ luật dân sự năm 2015?
Tiền.
Giấy tờ có giá.
Vật.
Quyền tài sản.

Câu 179: A 17 tuổi được hưởng thừa kế một ngôi nhà của cha mẹ mình. Khẳng định nào sau đây là đúng với A?
A không được bán ngôi nhà do chưa đủ 18 tuổi.
A chỉ được ký hợp đồng bán ngôi nhà nếu họ hàng của A đồng ý.
A có thể tự mình ký hợp đồng để bán ngôi nhà.
A không thể tự mình ký hợp đồng để bán ngôi nhà mà phải được người đại diện theo pháp luật đồng ý.
`;

var additionalAnswerIndexes = [
    2,1,1,1,2,0,1,1,0,0,2,1,2,2,0,0,3,0,2,3,1,0,2,2,3,1,2,1,2,1,3,2,0,0,0,3,1,2,3,1,
    2,0,1,2,0,1,2,1,2,0,3,0,3,3,1,1,0,2,2,1,3,0,3,3,1,0,0,0,0,0,1,3,3,0,3,1,0,1,3,3,
    2,0,2,3,0,0,0,3,2,0,3,1,1,3,3,2,2,2,3,1,1,2,2,1,0,2,1,1,1,0,1,0,2,3,2,1,2,0,1,1,
    3,2,0,2,2,3,2,2,0,3,0,0,1,2,3,3,3,3,0,2,0,2,0,0,3,3,3,2,1,3,1,2,1,2,3,3,0,3,1,1,
    1,2,0,0,3,2,2,0,2,1,0,3,3,2,1,2,1,1,3
];

function parseAdditionalRawQuizText(rawText) {
    const lines = rawText
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

    const parsed = [];
    let i = 0;

    while (i < lines.length) {
        const match = lines[i].match(/^Câu\s+(\d+)\s*:\s*(.+)$/i);
        if (!match) {
            i += 1;
            continue;
        }

        const number = parseInt(match[1], 10);
        const title = match[2].trim();
        const options = [];

        i += 1;
        while (i < lines.length && options.length < 4 && !/^Câu\s+\d+\s*:/i.test(lines[i])) {
            options.push(lines[i]);
            i += 1;
        }

        if (options.length === 4) {
            const answerIndex = additionalAnswerIndexes[number - 1];
            parsed.push({
                question: `Câu ${number}: ${title}`,
                options,
                answer: (answerIndex >= 0 && answerIndex < options.length) ? options[answerIndex] : options[0],
                chapter: 5
            });
        }
    }

    return parsed;
}

questionsData = questionsData.concat(parseAdditionalRawQuizText(additionalRawQuizText));
