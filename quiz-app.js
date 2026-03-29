// =====================
// QUIZ APP - LOGIC CHUNG
// =====================

// BIẾN TOÀN CỤC
let currentSubject = null; // Môn học hiện tại
let currentPart = null; // 0: all, 1-n: part index+1
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isAnswered = false;
const QUESTIONS_PER_PART = 50;
const QUIZ_STATE_KEY = "appquiz_state_v1";
const AUTO_NEXT_CORRECT_MS = 1000;
let autoNextTimeoutId = null;
let autoNextIntervalId = null;
let autoNextStartedAt = 0;
let confirmedAnswers = [];
let visitedQuestions = [];
let pendingSelections = [];
let currentMapFilter = "all";
// questionsData sẽ được gán từ allSubjectsData khi chọn môn

const SUBJECT_NAMES = {
  DTDM: "Điện toán đám mây",
  ATTT: "An toàn thông tin",
  KTPM: "Kiểm thử phần mềm",
  PLDC: "Phát triển ứng dụng",
  Webnc: "Web nâng cao",
  Hoa: "Hóa học",
  Duoc: "Dược học",
};

// =====================
// DOM ELEMENTS
// =====================
const subjectMenu = document.getElementById("subject-menu");
const mainMenu = document.getElementById("main-menu");
const questionPanelContainer = document.getElementById("question-panel-container");
const questionPanel = document.getElementById("question-panel");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");
const questionContent = document.getElementById("question-content");
const optionsList = document.getElementById("options-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const quizPart = document.getElementById("quiz-part");
const quizProgress = document.getElementById("quiz-progress");
const answerFeedback = document.getElementById("answer-feedback");
const autoNextTimer = document.getElementById("auto-next-timer");
const autoNextBar = document.getElementById("auto-next-bar");
const questionFilters = document.getElementById("question-filters");
const currentScoreBadge = document.getElementById("current-score-badge");
const questionMap = document.getElementById("question-map");
const resultSummary = document.getElementById("result-summary");
const backBtn = document.getElementById("back-btn");
const resultBackMenuBtn = document.getElementById("result-back-menu-btn");
const backToMenuBtn = document.getElementById("quiz-back-btn");
const restartBtn = document.getElementById("restart-btn");
const backToSubjectBtn = document.getElementById("back-to-subject");
const currentSubjectTitle = document.getElementById("current-subject-title");

function updateSubjectTitle(subject) {
  currentSubjectTitle.textContent = `Môn: ${SUBJECT_NAMES[subject] || subject}`;
}

function getCurrentView() {
  if (!quizView.classList.contains("hidden")) return "quiz";
  if (!resultView.classList.contains("hidden")) return "result";
  if (!mainMenu.classList.contains("hidden")) return "menu";
  return "subject";
}

function updateQuestionPanelVisibility() {
  if (questionPanelContainer) {
    const showPanelContainer = !quizView.classList.contains("hidden");
    questionPanelContainer.classList.toggle("hidden", !showPanelContainer);
  }

  if (!questionPanel) return;
  const showPanel = !quizView.classList.contains("hidden");
  questionPanel.classList.toggle("hidden", !showPanel);
}

function initQuestionTracking(total) {
  confirmedAnswers = Array(total).fill(false);
  visitedQuestions = Array(total).fill(false);
  pendingSelections = Array.from({ length: total }, () => []);
  currentMapFilter = "all";
}

function isAnswerCorrectAt(index) {
  const q = quizQuestions[index];
  const userAnswer = userAnswers[index];
  if (!q || !confirmedAnswers[index]) return false;

  if (q.isMultiple) {
    if (!Array.isArray(userAnswer) || !Array.isArray(q.answer)) return false;
    const sortedUser = [...userAnswer].sort((a, b) => a - b);
    const sortedCorrect = [...q.answer].sort((a, b) => a - b);
    return (
      sortedUser.length === sortedCorrect.length &&
      sortedUser.every((val, i) => val === sortedCorrect[i])
    );
  }

  return userAnswer === q.answer;
}

function calculateCurrentCorrectCount() {
  let correct = 0;
  for (let i = 0; i < quizQuestions.length; i++) {
    if (confirmedAnswers[i] && isAnswerCorrectAt(i)) {
      correct++;
    }
  }
  return correct;
}

function updateCurrentScoreBadge() {
  if (!currentScoreBadge) return;
  const total = quizQuestions.length;
  const correct = calculateCurrentCorrectCount();
  currentScoreBadge.textContent = `${correct}/${total}`;
}

function getQuestionStatus(index) {
  if (confirmedAnswers[index] && !isAnswerCorrectAt(index)) return "wrong";
  if (confirmedAnswers[index]) return "done";
  return "unanswered";
}

function shouldShowByFilter(index) {
  if (currentMapFilter === "all") return true;
  if (currentMapFilter === "wrong") return confirmedAnswers[index] && !isAnswerCorrectAt(index);
  return true;
}

function renderQuestionMap() {
  if (!questionMap) return;
  questionMap.innerHTML = "";

  for (let i = 0; i < quizQuestions.length; i++) {
    if (!shouldShowByFilter(i)) continue;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "question-map-item";
    btn.textContent = String(i + 1);

    const status = getQuestionStatus(i);
    btn.classList.add(`status-${status}`);
    if (i === currentIndex) btn.classList.add("current");

    btn.addEventListener("click", () => {
      clearAutoNextTimer();
      currentIndex = i;
      renderQuiz();
    });

    questionMap.appendChild(btn);
  }
}

function applyFilterButtonState() {
  if (!questionFilters) return;
  const buttons = questionFilters.querySelectorAll(".question-filter-btn");
  buttons.forEach((btn) => {
    const filter = btn.getAttribute("data-filter");
    btn.classList.toggle("active", filter === currentMapFilter);
  });
}

function clearAutoNextTimer() {
  if (autoNextTimeoutId !== null) {
    clearTimeout(autoNextTimeoutId);
    autoNextTimeoutId = null;
  }

  if (autoNextIntervalId !== null) {
    clearInterval(autoNextIntervalId);
    autoNextIntervalId = null;
  }

  autoNextStartedAt = 0;

  if (autoNextTimer) {
    autoNextTimer.classList.add("hidden");
    autoNextTimer.classList.remove("correct-timer", "incorrect-timer");
  }

  if (autoNextBar) {
    autoNextBar.style.width = "0%";
  }

}

function isCurrentAnswerCorrect() {
  return isAnswerCorrectAt(currentIndex);
}

function goToNextQuestionOrResult() {
  clearAutoNextTimer();
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuiz();
  } else {
    showResult();
  }
}

function startAutoNextCountdown() {
  clearAutoNextTimer();

  const duration = AUTO_NEXT_CORRECT_MS;
  answerFeedback.textContent = "";
  answerFeedback.classList.remove("correct-feedback", "incorrect-feedback");

  autoNextTimer.classList.remove("hidden");
  autoNextTimer.classList.add("correct-timer");
  autoNextTimer.classList.remove("incorrect-timer");
  autoNextBar.style.width = "0%";

  autoNextStartedAt = Date.now();
  autoNextIntervalId = setInterval(() => {
    const elapsed = Date.now() - autoNextStartedAt;
    const progress = Math.min((elapsed / duration) * 100, 100);
    autoNextBar.style.width = `${progress}%`;
  }, 80);

  autoNextTimeoutId = setTimeout(() => {
    goToNextQuestionOrResult();
  }, duration);
}

function finalizeAnswerAndScheduleNext() {
  setTimeout(() => {
    showAnswerResult();
    renderQuiz();
    const isCorrect = isCurrentAnswerCorrect();

    if (isCorrect) {
      startAutoNextCountdown();
    } else {
      clearAutoNextTimer();
      answerFeedback.textContent = "";
      answerFeedback.classList.remove("correct-feedback", "incorrect-feedback");
    }

    saveQuizState();
  }, 500);
}

function saveQuizState() {
  try {
    if (!currentSubject || !Array.isArray(quizQuestions) || quizQuestions.length === 0) {
      return;
    }

    const state = {
      currentSubject,
      currentPart,
      quizQuestions,
      currentIndex,
      userAnswers,
      confirmedAnswers,
      visitedQuestions,
      pendingSelections,
      currentMapFilter,
      isAnswered,
      view: getCurrentView(),
    };

    localStorage.setItem(QUIZ_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Không thể lưu trạng thái quiz:", error);
  }
}

function clearPersistedQuizState() {
  try {
    localStorage.removeItem(QUIZ_STATE_KEY);
  } catch (error) {
    console.warn("Không thể xóa trạng thái quiz:", error);
  }
}

function restoreQuizState() {
  try {
    const rawState = localStorage.getItem(QUIZ_STATE_KEY);
    if (!rawState) return false;

    const state = JSON.parse(rawState);
    if (!state || !state.currentSubject || !allSubjectsData[state.currentSubject]) {
      clearPersistedQuizState();
      return false;
    }

    if (!Array.isArray(state.quizQuestions) || !Array.isArray(state.userAnswers)) {
      clearPersistedQuizState();
      return false;
    }

    currentSubject = state.currentSubject;
    questionsData = allSubjectsData[currentSubject] || [];
    currentPart = typeof state.currentPart === "number" ? state.currentPart : 0;
    quizQuestions = state.quizQuestions;
    userAnswers = state.userAnswers;
    confirmedAnswers = Array.isArray(state.confirmedAnswers)
      ? state.confirmedAnswers.map((v) => Boolean(v))
      : userAnswers.map((ans) => ans !== null);
    visitedQuestions = Array.isArray(state.visitedQuestions)
      ? state.visitedQuestions.map((v) => Boolean(v))
      : Array(quizQuestions.length).fill(false);
    pendingSelections = Array.isArray(state.pendingSelections)
      ? state.pendingSelections.map((arr) => (Array.isArray(arr) ? [...arr] : []))
      : Array.from({ length: quizQuestions.length }, () => []);
    const allowedFilters = ["all", "wrong"];
    currentMapFilter =
      typeof state.currentMapFilter === "string" && allowedFilters.includes(state.currentMapFilter)
        ? state.currentMapFilter
        : "all";
    isAnswered = Boolean(state.isAnswered);

    if (quizQuestions.length === 0) {
      clearPersistedQuizState();
      return false;
    }

    // Đồng bộ lại độ dài mảng đáp án nếu dữ liệu cũ bị lệch
    if (userAnswers.length !== quizQuestions.length) {
      const fixedAnswers = Array(quizQuestions.length).fill(null);
      for (let i = 0; i < Math.min(userAnswers.length, fixedAnswers.length); i++) {
        fixedAnswers[i] = userAnswers[i];
      }
      userAnswers = fixedAnswers;
    }

    if (confirmedAnswers.length !== quizQuestions.length) {
      const fixedConfirmed = Array(quizQuestions.length).fill(false);
      for (let i = 0; i < Math.min(confirmedAnswers.length, fixedConfirmed.length); i++) {
        fixedConfirmed[i] = Boolean(confirmedAnswers[i]);
      }
      confirmedAnswers = fixedConfirmed;
    }

    if (visitedQuestions.length !== quizQuestions.length) {
      const fixedVisited = Array(quizQuestions.length).fill(false);
      for (let i = 0; i < Math.min(visitedQuestions.length, fixedVisited.length); i++) {
        fixedVisited[i] = Boolean(visitedQuestions[i]);
      }
      visitedQuestions = fixedVisited;
    }

    if (pendingSelections.length !== quizQuestions.length) {
      pendingSelections = Array.from({ length: quizQuestions.length }, () => []);
    }

    currentIndex = Number.isInteger(state.currentIndex) ? state.currentIndex : 0;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= quizQuestions.length) currentIndex = quizQuestions.length - 1;

    updateSubjectTitle(currentSubject);
    updatePartMenuButtons();
    subjectMenu.classList.add("hidden");

    if (state.view === "result") {
      mainMenu.classList.add("hidden");
      quizView.classList.add("hidden");
      resultView.classList.remove("hidden");
      updateQuestionPanelVisibility();
      showResult();
    } else if (state.view === "menu") {
      quizView.classList.add("hidden");
      resultView.classList.add("hidden");
      mainMenu.classList.remove("hidden");
      updateQuestionPanelVisibility();
    } else {
      mainMenu.classList.add("hidden");
      resultView.classList.add("hidden");
      quizView.classList.remove("hidden");
      updateQuestionPanelVisibility();
      renderQuiz();
    }

    return true;
  } catch (error) {
    console.warn("Không thể khôi phục trạng thái quiz:", error);
    clearPersistedQuizState();
    return false;
  }
}

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
      updateQuestionPanelVisibility();
      clearPersistedQuizState();
    });
  }

  // Gắn sự kiện cho các nút menu (event delegation)
  mainMenu.addEventListener("click", (event) => {
    const button = event.target.closest(".menu-btn");
    if (!button) return;
    const part = button.getAttribute("data-part");
    startQuiz(part);
  });

  // Gắn sự kiện cho các nút điều hướng
  setupNavigationButtons();

  if (questionFilters) {
    questionFilters.addEventListener("click", (event) => {
      const btn = event.target.closest(".question-filter-btn");
      if (!btn) return;
      currentMapFilter = btn.getAttribute("data-filter") || "all";
      applyFilterButtonState();
      renderQuestionMap();
      saveQuizState();
    });
  }

  // Khôi phục tiến trình đang làm quiz nếu có
  restoreQuizState();
  
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
  updateSubjectTitle(subject);
  updatePartMenuButtons();
  
  // Ẩn menu môn học, hiện menu phần
  subjectMenu.classList.add("hidden");
  mainMenu.classList.remove("hidden");
  updateQuestionPanelVisibility();
  saveQuizState();
}

function buildQuestionParts() {
  const parts = [];
  for (let start = 0; start < questionsData.length; start += QUESTIONS_PER_PART) {
    parts.push(questionsData.slice(start, start + QUESTIONS_PER_PART));
  }
  return parts;
}

function updatePartMenuButtons() {
  const oldButtons = mainMenu.querySelectorAll(".menu-btn");
  oldButtons.forEach((button) => button.remove());

  const allButton = document.createElement("button");
  allButton.className = "menu-btn";
  allButton.setAttribute("data-part", "all");
  allButton.textContent = `Tất Cả (${questionsData.length} câu)`;
  mainMenu.appendChild(allButton);

  const partCount = Math.ceil(questionsData.length / QUESTIONS_PER_PART);
  for (let index = 0; index < partCount; index++) {
    const start = index * QUESTIONS_PER_PART + 1;
    const end = Math.min((index + 1) * QUESTIONS_PER_PART, questionsData.length);

    const partButton = document.createElement("button");
    partButton.className = "menu-btn";
    partButton.setAttribute("data-part", String(index + 1));
    partButton.textContent = `Phần ${index + 1} (Câu ${start}-${end})`;
    mainMenu.appendChild(partButton);
  }
}

// =====================
// KHỞI ĐỘNG QUIZ
// =====================
function startQuiz(part) {
  clearAutoNextTimer();
  const questions = buildQuestionParts();

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
  initQuestionTracking(quizQuestions.length);
  isAnswered = false;
  
  // Ẩn menu, hiện quiz
  mainMenu.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  updateQuestionPanelVisibility();
  
  // Nếu không có câu hỏi thì báo luôn
  if (quizQuestions.length === 0) {
    questionContent.textContent = "Chưa có câu hỏi cho phần này.";
    optionsList.innerHTML = "";
    quizPart.textContent = currentPart === 0 ? "Tất Cả" : `Phần ${currentPart}`;
    quizProgress.textContent = "";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    saveQuizState();
    return;
  }
  
  renderQuiz();
  saveQuizState();
}

// =====================
// HIỂN THỊ CÂU HỎI
// =====================
function renderQuiz() {
  clearAutoNextTimer();
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
  visitedQuestions[currentIndex] = true;
  answerFeedback.textContent = "";
  answerFeedback.classList.remove("correct-feedback", "incorrect-feedback");
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

    if (confirmedAnswers[currentIndex]) {
      li.classList.add("disabled");

      if (q.isMultiple) {
        if (q.answer.includes(i)) li.classList.add("correct");
        if (Array.isArray(userAnswers[currentIndex]) && userAnswers[currentIndex].includes(i) && !q.answer.includes(i))
          li.classList.add("incorrect");
        if (Array.isArray(userAnswers[currentIndex]) && userAnswers[currentIndex].includes(i)) li.classList.add("selected");
      } else {
        if (i === q.answer) li.classList.add("correct");
        if (i === userAnswers[currentIndex] && userAnswers[currentIndex] !== q.answer)
          li.classList.add("incorrect");
        if (i === userAnswers[currentIndex]) li.classList.add("selected");
      }
    } else if (q.isMultiple) {
      const pending = pendingSelections[currentIndex] || [];
      if (pending.includes(i)) li.classList.add("selected");
    }

    li.addEventListener("click", () => handleOptionClick(i));
    optionsList.appendChild(li);
  });

  prevBtn.disabled = currentIndex === 0;

  // Logic nút Next
  if (currentIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Xem kết quả";
    nextBtn.disabled = !confirmedAnswers[currentIndex];
  } else {
    nextBtn.textContent = "Câu Tiếp Theo";
    nextBtn.disabled = !confirmedAnswers[currentIndex];
  }

  // Thêm nút xác nhận cho multiple choice nếu chưa trả lời
  if (q.isMultiple && !confirmedAnswers[currentIndex]) {
    addConfirmButton();
  }

  applyFilterButtonState();
  renderQuestionMap();
  updateCurrentScoreBadge();

  saveQuizState();
}

// =====================
// XỬ LÝ CHỌN ĐÁP ÁN
// =====================
function handleOptionClick(selectedIdx) {
  const q = quizQuestions[currentIndex];

  if (q.isMultiple) {
    // Xử lý multiple choice
    if (confirmedAnswers[currentIndex]) return;

    if (!Array.isArray(pendingSelections[currentIndex])) {
      pendingSelections[currentIndex] = [];
    }

    const currentAnswers = pendingSelections[currentIndex];
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

    saveQuizState();
  } else {
    // Xử lý single choice
    if (confirmedAnswers[currentIndex]) return;

    userAnswers[currentIndex] = selectedIdx;
    confirmedAnswers[currentIndex] = true;
    isAnswered = true;

    // Hiển thị đúng/sai rồi tự chuyển câu
    finalizeAnswerAndScheduleNext();

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
  if (q.isMultiple && !confirmedAnswers[currentIndex]) {
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Xác nhận đáp án";
    confirmBtn.classList.add("confirm-btn");
    const pending = pendingSelections[currentIndex] || [];
    confirmBtn.disabled = pending.length === 0;
    confirmBtn.onclick = () => {
      const selected = pendingSelections[currentIndex] || [];
      if (selected.length > 0) {
        userAnswers[currentIndex] = [...selected].sort((a, b) => a - b);
        confirmedAnswers[currentIndex] = true;
        isAnswered = true;
        finalizeAnswerAndScheduleNext();
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
  clearAutoNextTimer();
  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");
  updateQuestionPanelVisibility();
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

  if (currentScoreBadge) {
    currentScoreBadge.textContent = `${correct}/${total}`;
  }

  saveQuizState();
}

// =====================
// THIẾT LẬP NAVIGATION
// =====================
function setupNavigationButtons() {
  // Nút câu trước
  prevBtn.addEventListener("click", () => {
    clearAutoNextTimer();
    if (currentIndex > 0) {
      currentIndex--;
      nextBtn.textContent = "Câu Tiếp Theo";
      renderQuiz();
    }
  });

  // Nút câu tiếp theo
  nextBtn.addEventListener("click", () => {
    goToNextQuestionOrResult();
  });

  // Nút quay lại từ kết quả
  backBtn.addEventListener("click", () => {
    clearAutoNextTimer();
    resultView.classList.add("hidden");
    quizView.classList.remove("hidden");
    currentIndex = 0;
    currentMapFilter = "all";
    updateQuestionPanelVisibility();
    renderQuiz();
    saveQuizState();
  });

  if (resultBackMenuBtn) {
    resultBackMenuBtn.addEventListener("click", () => {
      clearAutoNextTimer();
      resultView.classList.add("hidden");
      mainMenu.classList.remove("hidden");
      updateQuestionPanelVisibility();
      clearPersistedQuizState();
    });
  }

  // Nút quay lại từ quiz view
  if (backToMenuBtn) {
    backToMenuBtn.addEventListener("click", () => {
      clearAutoNextTimer();
      quizView.classList.add("hidden");
      mainMenu.classList.remove("hidden");
      updateQuestionPanelVisibility();
      resetQuizState();
      clearPersistedQuizState();
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
    if (e.target.tagName === "LI" && confirmedAnswers[currentIndex]) {
      e.preventDefault();
    }
  });
}

// =====================
// RESET TRẠNG THÁI QUIZ
// =====================
function resetQuizState() {
  clearAutoNextTimer();
  quizQuestions = [];
  currentIndex = 0;
  userAnswers = [];
  confirmedAnswers = [];
  visitedQuestions = [];
  pendingSelections = [];
  currentMapFilter = "all";
  isAnswered = false;
  questionContent.textContent = "";
  optionsList.innerHTML = "";
  quizPart.textContent = "";
  quizProgress.textContent = "";
  if (questionMap) questionMap.innerHTML = "";
  applyFilterButtonState();
  if (currentScoreBadge) currentScoreBadge.textContent = "0/0";
  updateQuestionPanelVisibility();
  answerFeedback.textContent = "";
  answerFeedback.classList.remove("correct-feedback", "incorrect-feedback");
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  clearPersistedQuizState();
}

// =====================
// BẮT ĐẦU LẠI QUIZ
// =====================
function restartQuiz() {
  const questions = buildQuestionParts();

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
  initQuestionTracking(quizQuestions.length);
  isAnswered = false;
  
  // Hiển thị lại quiz từ đầu
  renderQuiz();
  saveQuizState();
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
  const sourceOptions = Array.isArray(question.options) ? question.options : [];

  const normalizeToSourceIndex = (value) => {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      const trimmedValue = value.trim();
      return sourceOptions.findIndex((opt) => String(opt).trim() === trimmedValue);
    }
    return -1;
  };

  const rawCorrect = question.correct !== undefined ? question.correct : question.answer;
  const normalizedCorrect = Array.isArray(rawCorrect)
    ? rawCorrect.map(normalizeToSourceIndex).filter((idx) => idx >= 0)
    : normalizeToSourceIndex(rawCorrect);

  let isMultiple = Array.isArray(normalizedCorrect);
  let newAnswer;

  if (isMultiple) {
    newAnswer = normalizedCorrect
      .map((correctIdx) => optionObjs.findIndex((o) => o.idx === correctIdx))
      .filter((idx) => idx >= 0);

    if (newAnswer.length === 0) {
      isMultiple = false;
      newAnswer = 0;
    }
  } else {
    newAnswer = optionObjs.findIndex((o) => o.idx === normalizedCorrect);
    if (newAnswer < 0) {
      newAnswer = 0;
    }
  }

  const newOptions = optionObjs.map((o) => o.opt);

  return {
    ...question,
    options: newOptions,
    answer: newAnswer,
    isMultiple,
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
