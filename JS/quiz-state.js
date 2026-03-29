// =====================
// QUIZ APP - SHARED STATE
// =====================

let currentSubject = null;
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

const SUBJECT_NAMES = {
  DTDM: "Điện toán đám mây",
  ATTT: "An toàn thông tin",
  KTPM: "Kiểm thử phần mềm",
  PLDC: "Phát triển ứng dụng",
  Webnc: "Web nâng cao",
};

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
