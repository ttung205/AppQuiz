// =====================
// QUIZ APP - NAVIGATION + UTILITIES + BOOTSTRAP
// =====================

function setupNavigationButtons() {
  prevBtn.addEventListener("click", () => {
    clearAutoNextTimer();
    if (currentIndex > 0) {
      currentIndex--;
      nextBtn.textContent = "Câu Tiếp Theo";
      renderQuiz();
    }
  });

  nextBtn.addEventListener("click", () => {
    goToNextQuestionOrResult();
  });

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

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      restartQuiz();
    });
  }

  optionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && confirmedAnswers[currentIndex]) {
      e.preventDefault();
    }
  });
}

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

function restartQuiz() {
  const questions = buildQuestionParts();

  let selectedQuestions;
  if (currentPart === 0) {
    selectedQuestions = questions.flat();
  } else {
    selectedQuestions = questions[currentPart - 1] ? [...questions[currentPart - 1]] : [];
  }

  selectedQuestions = shuffleArray([...selectedQuestions]);
  quizQuestions = selectedQuestions.map((q) => shuffleQuestionOptions(q));
  currentIndex = 0;
  userAnswers = Array(quizQuestions.length).fill(null);
  initQuestionTracking(quizQuestions.length);
  isAnswered = false;

  renderQuiz();
  saveQuizState();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initQuizApp();
  });
} else {
  initQuizApp();
}
