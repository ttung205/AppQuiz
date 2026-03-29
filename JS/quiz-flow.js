// =====================
// QUIZ APP - MAIN FLOW + RENDER
// =====================

function initQuizApp() {
  if (typeof allSubjectsData === "undefined") {
    console.error("allSubjectsData không được định nghĩa.");
    return;
  }

  const subjectButtons = document.querySelectorAll(".subject-btn");
  subjectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const subject = btn.getAttribute("data-subject");
      selectSubject(subject);
    });
  });

  if (backToSubjectBtn) {
    backToSubjectBtn.addEventListener("click", () => {
      mainMenu.classList.add("hidden");
      subjectMenu.classList.remove("hidden");
      updateQuestionPanelVisibility();
      clearPersistedQuizState();
    });
  }

  mainMenu.addEventListener("click", (event) => {
    const button = event.target.closest(".menu-btn");
    if (!button) return;
    const part = button.getAttribute("data-part");
    startQuiz(part);
  });

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

  restoreQuizState();
}

function selectSubject(subject) {
  currentSubject = subject;
  questionsData = allSubjectsData[subject] || [];

  if (questionsData.length === 0) {
    alert(`Chưa có dữ liệu cho môn ${subject}`);
    return;
  }

  updateSubjectTitle(subject);
  updatePartMenuButtons();

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

  selectedQuestions = shuffleArray([...selectedQuestions]);
  quizQuestions = selectedQuestions.map((q) => shuffleQuestionOptions(q));
  currentIndex = 0;
  userAnswers = Array(quizQuestions.length).fill(null);
  initQuestionTracking(quizQuestions.length);
  isAnswered = false;

  mainMenu.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  updateQuestionPanelVisibility();

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

function renderQuiz() {
  clearAutoNextTimer();
  removeConfirmButtons();

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

  if (q.isMultiple) {
    questionContent.textContent = `${q.question} (Chọn nhiều đáp án)`;
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
        if (Array.isArray(userAnswers[currentIndex]) && userAnswers[currentIndex].includes(i) && !q.answer.includes(i)) {
          li.classList.add("incorrect");
        }
        if (Array.isArray(userAnswers[currentIndex]) && userAnswers[currentIndex].includes(i)) {
          li.classList.add("selected");
        }
      } else {
        if (i === q.answer) li.classList.add("correct");
        if (i === userAnswers[currentIndex] && userAnswers[currentIndex] !== q.answer) {
          li.classList.add("incorrect");
        }
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

  if (currentIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Xem kết quả";
    nextBtn.disabled = !confirmedAnswers[currentIndex];
  } else {
    nextBtn.textContent = "Câu Tiếp Theo";
    nextBtn.disabled = !confirmedAnswers[currentIndex];
  }

  if (q.isMultiple && !confirmedAnswers[currentIndex]) {
    addConfirmButton();
  }

  applyFilterButtonState();
  renderQuestionMap();
  updateCurrentScoreBadge();

  saveQuizState();
}

function handleOptionClick(selectedIdx) {
  const q = quizQuestions[currentIndex];

  if (q.isMultiple) {
    if (confirmedAnswers[currentIndex]) return;

    if (!Array.isArray(pendingSelections[currentIndex])) {
      pendingSelections[currentIndex] = [];
    }

    const currentAnswers = pendingSelections[currentIndex];
    const optionElement = optionsList.children[selectedIdx];

    if (currentAnswers.includes(selectedIdx)) {
      const index = currentAnswers.indexOf(selectedIdx);
      currentAnswers.splice(index, 1);
      optionElement.classList.remove("selected");
    } else {
      currentAnswers.push(selectedIdx);
      optionElement.classList.add("selected");
    }

    syncConfirmButtonState();

    saveQuizState();
  } else {
    if (confirmedAnswers[currentIndex]) return;

    userAnswers[currentIndex] = selectedIdx;
    confirmedAnswers[currentIndex] = true;
    isAnswered = true;

    finalizeAnswerAndScheduleNext();

    Array.from(optionsList.children).forEach((li) => li.classList.add("disabled"));
  }
}

function removeConfirmButtons() {
  const existingButtons = document.querySelectorAll(".confirm-btn");
  existingButtons.forEach((btn) => btn.remove());
}

function syncConfirmButtonState() {
  const confirmBtn = document.querySelector(".confirm-btn");
  if (!confirmBtn) return;
  const pending = pendingSelections[currentIndex] || [];
  confirmBtn.disabled = pending.length === 0;
}

function addConfirmButton() {
  const q = quizQuestions[currentIndex];
  if (q.isMultiple && !confirmedAnswers[currentIndex]) {
    removeConfirmButtons();

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
        Array.from(optionsList.children).forEach((li) => li.classList.add("disabled"));
        confirmBtn.remove();
      }
    };
    optionsList.parentNode.insertBefore(confirmBtn, optionsList.nextSibling);
  }
}

function showAnswerResult() {
  const q = quizQuestions[currentIndex];
  Array.from(optionsList.children).forEach((li, i) => {
    li.classList.remove("selected");

    if (q.isMultiple) {
      if (q.answer.includes(i)) li.classList.add("correct");
      if (userAnswers[currentIndex] && userAnswers[currentIndex].includes(i) && !q.answer.includes(i)) {
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
    } else if (userAnswer === q.answer) {
      correct++;
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
