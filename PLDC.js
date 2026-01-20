// Dữ liệu câu hỏi từ đề bài
const questionsData = [
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
