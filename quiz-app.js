// =====================
// QUIZ APP - LOGIC CHUNG
// =====================

// BIẾN TOÀN CỤC
let currentSubject = null; // Môn học hiện tại
let currentPart = null; // 0: all, 1-5: part index+1
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isAnswered = false;
// questionsData sẽ được gán từ allSubjectsData khi chọn môn

// =====================
// DOM ELEMENTS
// =====================
const subjectMenu = document.getElementById("subject-menu");
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
const backToSubjectBtn = document.getElementById("back-to-subject");
const currentSubjectTitle = document.getElementById("current-subject-title");

// =====================
// KHỞI TẠO APP
// =====================
function initQuizApp() {
  console.log('🚀 Initializing Quiz App...');
  console.log('Available subjects:', Object.keys(allSubjectsData));
  
  // Kiểm tra xem allSubjectsData có tồn tại không
  if (typeof allSubjectsData === 'undefined') {
    console.error('❌ allSubjectsData không được định nghĩa.');
    return;
  }

  // Gắn sự kiện cho các nút chọn môn học
  const subjectButtons = document.querySelectorAll(".subject-btn");
  console.log(`📚 Found ${subjectButtons.length} subject buttons`);
  
  subjectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const subject = btn.getAttribute("data-subject");
      console.log(`🎯 Subject clicked: ${subject}`);
      selectSubject(subject);
    });
  });

  // Gắn sự kiện cho nút quay lại chọn môn
  if (backToSubjectBtn) {
    backToSubjectBtn.addEventListener("click", () => {
      mainMenu.classList.add("hidden");
      subjectMenu.classList.remove("hidden");
    });
  }

  // Gắn sự kiện cho các nút menu
  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const part = btn.getAttribute("data-part");
      startQuiz(part);
    });
  });

  // Gắn sự kiện cho các nút điều hướng
  setupNavigationButtons();
  
  console.log('✅ Quiz App initialized successfully!');
}

// =====================
// CHỌN MÔN HỌC
// =====================
function selectSubject(subject) {
  currentSubject = subject;
  questionsData = allSubjectsData[subject] || [];
  
  if (questionsData.length === 0) {
    alert(`Chưa có dữ liệu cho môn ${subject}`);
    return;
  }

  // Cập nhật tiêu đề
  const subjectNames = {
    'DTDM': 'Điện toán đám mây',
    'ATTT': 'An toàn thông tin',
    'KTPM': 'Kiểm thử phần mềm',
    'PLDC': 'Phát triển ứng dụng',
    'Webnc': 'Web nâng cao',
    'Hoa': 'Hóa học',
    'Duoc': 'Dược học'
  };
  
  currentSubjectTitle.textContent = `Môn: ${subjectNames[subject]}`;
  
  // Ẩn menu môn học, hiện menu phần
  subjectMenu.classList.add("hidden");
  mainMenu.classList.remove("hidden");
}

// =====================
// KHỞI ĐỘNG QUIZ
// =====================
function startQuiz(part) {
  // Chia câu hỏi thành các phần
  const questions = [
    questionsData.slice(0, 50),   // Phần 1: Câu 1-50
    questionsData.slice(50, 100),  // Phần 2: Câu 51-100
    questionsData.slice(100, 150), // Phần 3: Câu 101-150
    questionsData.slice(150, 200), // Phần 4: Câu 151-200
    questionsData.slice(200, 250), // Phần 5: Câu 201-250
  ];

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
  quizProgress.textContent = `Câu ${currentIndex + 1} / ${quizQuestions.length}`;

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
        if (i === userAnswers[currentIndex] && userAnswers[currentIndex] !== q.answer)
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

// =====================
// THÊM NÚT XÁC NHẬN
// =====================
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
      if (i === userAnswers[currentIndex] && userAnswers[currentIndex] !== q.answer) {
        li.classList.add("incorrect");
      }
    }
  });
}

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
// THIẾT LẬP NAVIGATION
// =====================
function setupNavigationButtons() {
  // Nút câu trước
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      nextBtn.textContent = "Câu Tiếp Theo";
      renderQuiz();
    }
  });

  // Nút câu tiếp theo
  nextBtn.addEventListener("click", () => {
    if (currentIndex < quizQuestions.length - 1) {
      currentIndex++;
      renderQuiz();
    } else if (currentIndex === quizQuestions.length - 1) {
      showResult();
    }
  });

  // Nút quay lại từ kết quả
  backBtn.addEventListener("click", () => {
    resultView.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  });

  // Nút quay lại từ quiz view
  if (backToMenuBtn) {
    backToMenuBtn.addEventListener("click", () => {
      quizView.classList.add("hidden");
      mainMenu.classList.remove("hidden");
      resetQuizState();
    });
  }

  // Nút bắt đầu lại
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      restartQuiz();
    });
  }

  // Ngăn chọn lại đáp án
  optionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && userAnswers[currentIndex] !== null) {
      e.preventDefault();
    }
  });
}

// =====================
// RESET TRẠNG THÁI QUIZ
// =====================
function resetQuizState() {
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
}

// =====================
// BẮT ĐẦU LẠI QUIZ
// =====================
function restartQuiz() {
  // Chia câu hỏi thành các phần
  const questions = [
    questionsData.slice(0, 50),
    questionsData.slice(50, 100),
    questionsData.slice(100, 150),
    questionsData.slice(150, 200),
    questionsData.slice(200, 250),
  ];

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
}

// =====================
// UTILITY FUNCTIONS
// =====================

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
// KHỞI ĐỘNG KHI LOAD TRANG
// =====================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM Content Loaded');
    initQuizApp();
  });
} else {
  // DOM already loaded
  console.log('📄 DOM Already Loaded');
  initQuizApp();
}
