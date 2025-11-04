// Dữ liệu câu hỏi từ đề bài
const questionsData = [
  {
    question: "Product backlog là gì?",
    options: [
      "Là danh sách công việc \"cần làm\" được ưu tiên trong phát triển phần mềm.",
      "Là danh sách các lỗi cần sửa trong quá trình phát triển.",
      "Là danh sách công việc của từng thành viên trong nhóm phát triển",
      "Là danh sách các phiên bản phần mềm thử nghiệm.",
    ],
    correct: 0,
  },
  {
    question: "Đâu là phát biểu đúng về mô hình thác nước (waterfall model)?",
    options: [
      "Giai đoạn sau chỉ được thực hiện tiếp khi giai đoạn trước đã kết thúc.",
      "Có thể quay lại giai đoạn trước để xử lí các thay đổi trong yêu cầu.",
      "Có tính linh hoạt cao.",
      "Áp dụng cho các dự án thường xuyên bị thay đổi về yêu cầu.",
    ],
    correct: 0,
  },
  {
    question: "Làm thế nào để phát triển sản phẩm dựa trên nhu cầu của khách hàng?",
    options: [
      "Tương tác với khách hàng để hiểu rõ vấn đề họ gặp phải và các tính năng phần mềm mà khách hàng cần.",
      "Khảo sát dựa vào các chuyên gia thẩm định.",
      "Dựa vào các sản phẩm khác đã có sẵn để cải thiện.",
      "Cập nhật liên tục, đưa ra các tính năng mới thường xuyên",
    ],
    correct: 0,
  },
  {
    question: "Nhiệm vụ của Product Manager là gì?",
    options: [
      "Chỉ tham gia vào qúa trình kiểm thử sản phẩm.",
      "Làm việc với khách hàng và đội phát triển để làm rõ yêu cầu, lên kế hoạch, thực thi phát triển sản phẩm cho đến khi sản phẩm ra thị trường.",
      "Chỉ có nhiệm vụ đảm bảo là sản phẩm sẽ được hoàn thành đúng hạn.",
      "Tập trung vào sự phát triển của sản phẩm nhiều hơn là tiềm năng phát triển của khách hàng.",
    ],
    correct: 1,
  },
  {
    question: "Khi phát triển một sản phẩm phần mềm, ta nên xây dựng nguyên mẫu khi nào?",
    options: [
      "Khi vừa bắt đầu",
      "Khi kết thúc quá trình phát triển",
      "Khi sản phẩm đã được đưa đến tay khách hàng",
      "Không có đáp án nào đúng",
    ],
    correct: 0,
  },
  {
    question: "Mô hình phát triển phần mềm xoắn ốc?",
    options: [
      "Bao gồm việc đánh giá những rủi ro phần mềm trong mỗi vòng lặp",
      "Kết thúc với việc xuất xưởng sản phẩm phần mềm",
      "Nhiều hỗn độn hơn với mô hình gia tăng",
      "Dễ dàng điều tiết những biến đổi yêu cầu sản phẩm",
    ],
    correct: 0,
  },
  {
    question: "Công dụng chính của Persona là?",
    options: [
      "Giúp người lập trình hiểu được góc nhìn của người người dùng.",
      "Giúp người lập trình loại bỏ các tính năng không cần thiết.",
      "Giúp người lập trình tránh phức tạp hóa phần mềm.",
      "Giúp người lập trình tiết kiệm tài nguyên và chi phí.",
    ],
    correct: 0,
  },
  {
    question: "Đáp án sai khi nói đến tiêu chí về chất lượng sản phẩm phần mềm là?",
    options: [
      "Không tin cậy và an toàn",
      "Hiệu quả",
      "Bảo trì được",
      "Tính chấp nhận được",
    ],
    correct: 0,
  },
  {
    question: "Đâu không là độ đo về độ tin cậy của một hệ thống phần mềm?",
    options: [
      "Khả năng chịu tải",
      "Tính hoàn thiện",
      "Khả năng chịu lỗi",
      "Khả năng phục hồi",
    ],
    correct: 0,
  },
  {
    question: "Có thể định nghĩa kỹ nghệ (engineering) là gì?",
    options: [
      "Là việc sử dụng phối hợp các công nghệ cần thiết để sản xuất ra các sản phẩm của một ngành nào đó.",
      "Là một cách thức tiến hành một công việc để tạo ra một sản phẩm của một ngành nào đó.",
      "Dùng các công cụ để tạo ra các sản phẩm nhất định.",
      "Tập hợp các công nghệ được sắp đặt theo một quy trình nhất định.",
    ],
    correct: 0,
  },
  {
    question: "Đâu không phải nguyên nhân gây ra khủng hoảng phần mềm?",
    options: [
      "Sự phát triển của phần cứng không theo kịp sự phát triển của phần mềm.",
      "Nhu cầu phần mềm gia tăng.",
      "Các yêu cầu đòi hỏi phần mềm có kích thước ngày càng lớn và phức tạp.",
      "Năng suất của các nhà phát triển tăng trưởng chậm.",
    ],
    correct: 0,
  },
  {
    question: "Đặc điểm của quy trình phần mềm?",
    options: [
      "Tính hệ thống.",
      "Tính phức tạp.",
      "Tính đa hình.",
      "Tính rời rạc.",
    ],
    correct: 0,
  },
  {
    question: "Qui trình phát triển phần mềm lần lượt theo các giai đoạn được gọi là gì?",
    options: [
      "Qui trình thác nước.",
      "Nguyên mẫu tiến hóa",
      "Quy trình phần mềm thống nhất.",
      "Agile.",
    ],
    correct: 0,
  },
  {
    question: "Thứ tự đúng các giai đoạn của phần mềm là gì?",
    options: [
      "Thu tập và phân tích yêu cầu - Thiết kế - Viết mã - Xác minh và xác thực mã - Duy trì và bảo trì.",
      "Thiết kế - Viết mã - Xác minh và xác thực mã và bảo trì.",
      "Kỹ thuật yêu cầu - Thiết kế - Viết mã - Duy trì và bảo trì.",
      "Thiết kế - Viết mã - Xác minh và xác thực - Duy trì và bảo trì.",
    ],
    correct: 0,
  },
  {
    question: "Câu nào sau đây đúng khi nói về ngôn ngữ lập trình bậc cao?",
    options: [
      "Máy tính có thể trực tiếp hiểu được.",
      "Được viết dưới dạng mã nhị phân hoặc hexa.",
      "Là ngôn ngữ gần với ngôn ngữ tự nhiên, có tính độc lập cao, ít phụ thuộc vào loại máy.",
      "Không cần chương trình dịch.",
    ],
    correct: 2,
  },
  {
    question: "Đâu là giai đoạn cuối cùng của các phương pháp phát triển phần mềm truyền thống?",
    options: [
      "Thiết kế.",
      "Yêu cầu thiết kế.",
      "Viết code.",
      "Bảo trì.",
    ],
    correct: 3,
  },
  {
    question: "Yêu cầu phần mềm có thể chia ra thành các lọai nào sau đây?",
    options: [
      "Chức năng, phi chức năng, yêu cầu hệ thống.",
      "Chức năng, phi chức năng.",
      "Chức năng, phi chức năng, yêu cầu miền ứng dụng.",
      "Chức năng, phi chức năng, yêu cầu nghiệp vụ.",
    ],
    correct: 1,
  },
  {
    question: "Trong các giai đoạn phát triển phần mềm giai đoạn nào tiêu tốn nhiều chi phí nhất?",
    options: [
      "Thiết kế.",
      "Tạo phần mềm.",
      "Thử nghiệm.",
      "Duy trì.",
    ],
    correct: 3,
  },
  {
    question: "Đâu không phải là một bước của kỹ thuật yêu cầu?",
    options: [
      "Khơi gợi.",
      "Thiết kế.",
      "Phân tích.",
      "Viết tài liệu.",
    ],
    correct: 1,
  },
  {
    question: "Đâu là kết quả của giai đoạn kỹ thuật yêu cầu?",
    options: [
      "Bản ước tính chi phí dự án.",
      "Lược đồ use case và các lược đồ khác.",
      "Tài liệu đặc tả yêu cầu phần mềm.",
      "Tài liệu mô tả phần mềm.",
    ],
    correct: 2,
  },
  {
    question: "Điều nào sau đây không được xác định trong tài liệu đặc tả yêu cầu phần mềm tốt?",
    options: [
      "Yêu cầu về chức năng.",
      "Yêu cầu không chức năng.",
      "Thuật toán để thực hiện phần mềm.",
      "Mục tiêu thực hiện.",
    ],
    correct: 2,
  },
  {
    question: "Đâu là ý đúng về thiết kế phần mềm?",
    options: [
      "Thiết kế phần mềm là công việc đầu tiên cần thực hiện.",
      "Thiết kế phần mềm là công việc mà những yêu cầu về phần mềm được phân tích để miêu tả cấu trúc nội bộ và cách tổ chức của hệ thống.",
      "Để thiết kế chúng ta cần phác thảo những bước mà chúng ta định lập trình.",
      "Cả 4 đáp án đều đúng.",
    ],
    correct: 1,
  },
  {
    question: "Mục đích của thiết kế phần mềm?",
    options: [
      "Duy trì phần mềm.",
      "Tạo ra giao diện phần mềm.",
      "Mô tả cấu trúc, tổ chức của phần mềm.",
      "Phát triển phần mềm.",
    ],
    correct: 2,
  },
  {
    question: "Đâu không phải nguyên tắc trong lập trình phần mềm?",
    options: [
      "Giảm độ phức tạp.",
      "Dự đoán sự đa dạng.",
      "Cấu trúc để xác nhận (dễ kiểm thử).",
      "Viết ít dòng lệnh.",
    ],
    correct: 3,
  },
  {
    question: "Đâu là một trong những đặc điểm của Git?",
    options: [
      "Nguồn mở.",
      "Nguồn đóng.",
      "Không gian lưu trữ nhỏ.",
      "Khó kiểm soát.",
    ],
    correct: 0,
  },
  {
    question: "Mục đích của (Version Control System – VCS) là gì?",
    options: [
      "Để tăng tính bảo mật cho phần mềm.",
      "Để chuyển giao phần mềm cho nhiều người.",
      "Lưu trữ các phiên bản của phần mềm và cho phép nhiều người cùng tham gia dự án.",
      "Để nâng cấp phần mềm.",
    ],
    correct: 2,
  },
  {
    question: "Người dùng hệ thống quản lý phiên bản (Version Control System – VCS) không thể làm gì?",
    options: [
      "Chia sẻ tài liệu.",
      "Phục hồi sau khi xóa ngẫu nhiên.",
      "Lưu trữ các phiên bản.",
      "Tích hợp thêm các công cụ không có sẵn.",
    ],
    correct: 3,
  },
  {
    question: "Đâu không phải là lợi ích của việc dùng (Version Control System – VCS)?",
    options: [
      "Lưu trữ các phiên bản của phần mềm trong quá trình phát triển.",
      "Hỗ trợ hợp tác phát triển phần mềm từ xa.",
      "Cho phép phục hồi lại các phiên bản cũ hơn.",
      "Để chia sẻ những file thực thi (executable file).",
    ],
    correct: 3,
  },
  {
    question: "Hoạt động không thể thực hiện được thông qua hệ thống kiểm soát phiên bản (Version Control System – VCS)?",
    options: [
      "Thêm 1 tập tin mới vào kho lưu trữ và có thể cho những người khác có quyền truy cập vào kho lưu trữ.",
      "Chạy chương trình trực tiếp bằng (Version Control System – VCS).",
      "Sửa nội dung tập tin đã có ở kho lưu trữ và hiển thị cho người dùng khác những thay đổi đó.",
      "Cập nhật một tập tin từ kho lưu trữ về máy tính khi có người khác thay đổi tập tin đó.",
    ],
    correct: 1,
  },
  {
    question: "Câu trả lời nào sau đây miêu tả đúng về Git?",
    options: [
      "Chỉ có kho lưu trữ cục bộ, file sẽ được chuyển tới các cộng sự thông qua địa chỉ IP.",
      "Chỉ có kho lưu trữ trung tâm, đây là nơi lưu trữ mọi phiên bản làm việc.",
      "Có cả kho lưu trữ trung tâm và kho lưu trữ cục bộ, mọi phiên bản lưu trữ trên kho lưu trữ trung tâm.",
      "Có cả kho lưu trữ trung tâm và kho lưu trữ cục bộ.",
    ],
    correct: 3,
  },
  {
    question: "Có thể phân loại yêu cầu phần mềm thành gì?",
    options: [
      "Yêu cầu chức năng, yêu cầu phi chức năng.",
      "Yêu cầu chức năng, yêu cầu phi chức năng, yêu cầu các miền lĩnh vực.",
      "Yêu cầu chức năng, yêu cầu các miền lĩnh vực.",
      "Yêu cầu các miền lĩnh vực và các yêu cầu của người dùng.",
    ],
    correct: 1,
  },
  {
    question: "Tại sao kĩ thuật yêu cầu lại rất quan trọng?",
    options: [
      "Rất nhiều lỗi xảy ra do kĩ thuật yêu cầu không đúng cách, gây ra tăng thời gian và chi phí phát triển phần mềm.",
      "Vì rất khó để xác định rõ các yêu cầu kỹ thuật.",
      "Các yêu cầu kĩ thuật dễ gây nhầm lẫn cho người lập trình, dẫn đến đi sai hướng.",
      "Vì cần nhiều nhân lực có trình độ cao cùng xác định các yêu cầu kỹ thuật.",
    ],
    correct: 0,
  },
  {
    question: "Làm thế nào để đánh giá chất lượng phần mềm?",
    options: [
      "Dựa vào hoạt động tốt của phần mềm.",
      "Dựa vào mục đích sử dụng.",
      "Dựa vào cả mục đích sử dụng của phần mềm và hoạt động ổn định của phần mềm.",
      "Không có đáp án nào ở trên là đúng.",
    ],
    correct: 2,
  },
  {
    question: "Chất lượng phần mềm là gì?",
    options: [
      "Là khả năng đáp ứng toàn diện yêu cầu của người dùng về tính năng cũng như công dụng được nêu ra một cách tường minh hoặc không tường minh trong những ngữ cảnh xác định.",
      "Là khả năng đáp ứng toàn diện nhu cầu của người dùng về tính năng được nêu ra một cách tường minh hoặc không tường minh trong những ngữ cảnh xác định.",
      "Là khả năng đáp ứng toàn diện nhu cầu của người dùng về công dụng được nêu ra một cách tường minh hoặc không tường minh trong những ngữ cảnh xác định.",
      "Là khả năng đáp ứng không toàn diện nhu cầu của người dùng về tính năng cũng như công dụng được nêu ra một cách tường minh hoặc không tường minh trong những ngữ cảnh xác định.",
    ],
    correct: 0,
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
  // Phần 1: Câu 1-33
  questionsData.slice(0, 33),
  // Phần 2: Câu 34-66
  questionsData.slice(33, 66),
  // Phần 3: Câu 67-100
  questionsData.slice(66, 100),
];

