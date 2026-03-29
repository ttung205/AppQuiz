// =====================
// QUIZ APP - TIMER + STORAGE
// =====================

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
