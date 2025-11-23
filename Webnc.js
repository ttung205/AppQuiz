// Quiz Webnc.js - Generated from provided question text
// Structure mirrors PLDC.js: questionsData[], then slicing.

const questionsData = [
  // Câu 1
  {
    question: "1. Trong PHP, sau khi thực hiện đoạn mã kết quả hiển thị sẽ là gì? (Nhập chính xác cả dấu cách) $a; for ($a = 1; $a <= 9; $a++) { if ($a == 5) continue; echo ($a); }",
    options: ["12346789", "123456789", "12345678", "12345679"],
    correct: 0,
  },
  // Câu 2
  {
    question: "2. Trong PHP, sau khi thực hiện đoạn mã kết quả hiển thị sẽ là gì? (Nhập chính xác cả dấu cách) $s = '13149'; $s[$s[1]] = $s[1] + $s[3]; echo($s);",
    options: ["13179", "13149", "13189", "13199"],
    correct: 0,
  },
  // Câu 3
  {
    question: "3. Toán tử ?? trong biểu thức $x = $y ?? $z có ý nghĩa gì?",
    options: ["$x nhận giá trị $y nếu $y tồn tại và có giá trị", "$x nhận giá trị $y nếu $y là đúng (true)", "$x nhận giá trị $y nếu $y > $z", "$x nhận giá trị $y nếu $y là sai (false)"],
    correct: 0,
  },
  // Câu 4
  {
    question: "4. Toán tử <=> có ý nghĩa như thế nào?",
    options: ["Trả về các giá trị nhỏ hơn không, bằng không hoặc lớn hơn không tùy thuộc vào hai đối số", "Toán tử không tồn tại trong PHP", "So sánh khác về giá trị và kiểu dữ liệu", "So sánh khác"],
    correct: 0,
  },
  // Câu 5
  {
    question: "5. Đoạn mã sau, in ra giá trị nào sau đây? $var = '0'; if ($var) { echo 'true';} else { echo 'false';}",
    options: ["true", "true false", "false", "không có giá trị"],
    correct: 2,
  },
  // Câu 6
  {
    question: "6. Which loop in PHP is specifically designed for iterating over arrays?",
    options: ["while loop", "do-while loop", "foreach loop", "for loop"],
    correct: 2,
  },
  // Câu 7
  {
    question: "7. Thành phần nào sau đây KHÔNG phải là thành phần chính của kiến trúc Laravel?",
    options: ["Middleware", "View Composers", "Event Listeners", "URL Generators", "Service Providers"],
    correct: 3,
  },
  // Câu 8 (multi)
  {
    question: "8. Điều gì cần lưu ý khi triển khai ứng dụng tới đám mây hoặc máy chủ chia sẻ? (Chọn 3)",
    options: ["Scalability and performance", "Cost and pricing plans", "User interface design", "Security measures"],
    correct: [0,1,3],
  },
  // Câu 9
  {
    question: "9. Which action cannot be performed through a successful SQL injection attack?",
    options: ["Delete a database table", "Explore field names", "Reformat the hard drive of the web application server", "Display a list of customer phone numbers"],
    correct: 2,
  },
  // Câu 10
  {
    question: "10. Which folder in a Laravel application contains the HTTP controllers?",
    options: ["app/Http/Routes", "app/Http/Controllers", "public/Controllers", "config/Controllers"],
    correct: 1,
  },
  // Câu 11
  {
    question: "11. Kiểu dữ liệu nào sau đây KHÔNG hợp lệ trong PHP?",
    options: ["Float", "Integer", "String", "Character", "Boolean"],
    correct: 3,
  },
  // Câu 12
  {
    question: "12. Kiểu dữ liệu nào phù hợp của PHP?",
    options: ["Tuple", "Integer", "Decimal", "Character"],
    correct: 1,
  },
  // Câu 13
  {
    question: "13. Mục đích chính của Controller trong mô hình MVC (Laravel)?",
    options: ["Quản lý dữ liệu và business logic", "Tạo bản ghi DB", "Định nghĩa routes và xử lý middleware", "Xử lý logic trình bày và hiển thị view"],
    correct: 0,
  },
  // Câu 14
  {
    question: "14. SQL Injection attack vectors?",
    options: ["Through user input (GET/POST) and cookies", "All are incorrect", "Through cookies", "Through user input (GET/POST)"],
    correct: 0,
  },
  // Câu 15
  {
    question: "15. Recommended practice for handling validation in a Laravel API controller?",
    options: ["Using Form Request classes", "Manually checking with isset()", "Return 500 on validation failures", "Ignore validation"],
    correct: 0,
  },
  // Câu 16
  {
    question: "16. Purpose of Composer in Laravel?",
    options: ["Configure DB connections", "Manage PHP library dependencies", "Build front-end assets", "Handle HTTP requests"],
    correct: 1,
  },
  // Câu 17 (multi)
  {
    question: "17. Advantages of Laravel? (Chọn 3)",
    options: ["Complex configuration", "Artisan CLI", "Modularity", "Eloquent ORM", "Limited library support"],
    correct: [1,2,3],
  },
  // Câu 18
  {
    question: "18. Valid use case for Artisan CLI?",
    options: ["Running React", "Generating boilerplate code", "Configuring web server settings", "Handling HTTP requests directly"],
    correct: 1,
  },
  // Câu 19
  {
    question: "19. Điều nào KHÔNG phải là tấn công DOS?",
    options: ["SYN flood", "Smurf", "Ping flood", "Push flood"],
    correct: 3,
  },
  // Câu 20
  {
    question: "20. HTML attribute for form submission URL?",
    options: ["target", "method", "action", "enctype"],
    correct: 2,
  },
  // Câu 21
  {
    question: "21. Feature of Laravel's Artisan CLI?",
    options: ["Handling HTTP requests", "Managing front-end UI components", "Controlling user authentication", "Automating repetitive tasks"],
    correct: 3,
  },
  // Câu 22 (multi)
  {
    question: "22. Best practices for organizing Laravel apps (Chọn 2)",
    options: ["Descriptive names", "Ignoring PSR standards", "Avoiding built-in features", "Documenting code"],
    correct: [0,3],
  },
  // Câu 23
  {
    question: "23. Blade directive KHÔNG hợp lệ?",
    options: ["@foreach", "@extend", "@middleware", "@if"],
    correct: 2,
  },
  // Câu 24
  {
    question: "24. Laravel command tạo migration mới?",
    options: ["php artisan make:model", "php artisan make:controller", "php artisan make:request", "php artisan make:migration"],
    correct: 3,
  },
  // Câu 25
  {
    question: "25. Purpose of store() in RESTful controller?",
    options: ["Save new resource", "Fetch all resources", "Delete resource", "Update resource"],
    correct: 0,
  },
  // Câu 26
  {
    question: "26. Đoạn mã: $var = 'a'; $VAR = 'b'; echo \"$var$VAR\"; in ra?",
    options: ["aa", "ab", "bb", "error"],
    correct: 1,
  },
  // Câu 27
  {
    question: "27. Variable variables: $father = 'mother'; $mother = 'son'; echo $$father;",
    options: ["son", "mother", "father", "error"],
    correct: 0,
  },
  // Câu 28
  {
    question: "28. $check='false'; if($check){ echo 'true'; } else { echo 'false'; }",
    options: ["true", "false", "Không có giá trị", "true false"],
    correct: 0,
  },
  // Câu 29
  {
    question: "29. if (null === false) { echo 'true'; } else { echo 'false'; }",
    options: ["không in", "true", "false", "lỗi"],
    correct: 2,
  },
  // Câu 30 (multi)
  {
    question: "30. Key responsibilities of an API controller? (Chọn 2)",
    options: [
      "Implement business logic directly",
      "Defining routes within controller",
      "Managing DB schema and migrations",
      "Handling HTTP requests and responses",
      "Interacting with models for CRUD",
    ],
    correct: [3,4],
  },
  // Câu 31
  {
    question: "31. Actual Artisan CLI function?",
    options: ["Managing DB transactions automatically", "Running scheduled tasks", "Serving web pages", "Handling user authentication"],
    correct: 1,
  },
  // Câu 32 (only one)
  {
    question: "32. Blade directives for template inheritance? (Chọn 2 - danh sách thiếu @section/@yield)",
    options: ["@foreach", "@route", "@extends", "@inject"],
    correct: 2,
  },
  // Câu 33
  {
    question: "33. Primary role of Eloquent ORM?",
    options: ["Handle HTTP", "Interface for DB interaction", "Define routes", "Manage schema & migrations"],
    correct: 1,
  },
  // Câu 34
  {
    question: "34. Bản chất của một cuộc tấn công SQL injection?",
    options: ["Máy chủ SQL tấn công trình duyệt", "Hiển thị mã SQL để kiểm tra", "Liên kết SQL servers thành botnet", "Chèn câu lệnh SQL qua input chưa lọc"],
    correct: 3,
  },
  // Câu 35
  {
    question: "35. Purpose of a Blade template?",
    options: ["Định nghĩa cấu trúc bảng DB", "Sinh HTML động cho view", "Tương tác DB bằng Eloquent", "Xử lý HTTP request"],
    correct: 1,
  },
  // Câu 36
  {
    question: "36. Command tạo dự án Laravel mới?",
    options: ["composer new-project laravel/laravel projectname", "laravel new projectname", "composer create-project –prefer-dist laravel/laravel projectname", "composer install laravel/laravel projectname"],
    correct: 2,
  },
  // Câu 37
  {
    question: "37. Casting chuỗi: $str = '5.5dollars'; (double)$str; (int)$str; (string)$str; echo $str;",
    options: ["5.5dollars", "15", "5.5", "'5.5dollars'"],
    correct: 0,
  },
  // Câu 38
  {
    question: "38. $num = '1'; $ber = '2'; echo $num + $ber;",
    options: ["3", "12", "'12'", "1"],
    correct: 0,
  },
  // Câu 39
  {
    question: "39. Lệnh nào xuất nội dung ra trình duyệt?",
    options: ["cout<<", "echo", "write", "say"],
    correct: 1,
  },
  // Câu 40
  {
    question: "40. Actual Artisan CLI function?",
    options: ["Serving web pages", "Running scheduled tasks", "Handling auth logic", "Managing DB transactions automatically"],
    correct: 1,
  },
  // Câu 41
  {
    question: "41. Task accomplishable with Laravel?",
    options: ["Building RESTful APIs", "Developing mobile games", "Running ML models", "Creating desktop apps"],
    correct: 0,
  },
  // Câu 42
  {
    question: "42. Cookie không được tạo bởi trang web đang xem gọi là?",
    options: ["Fourth-party cookie", "Second-party cookie", "First-party cookie", "Third-party cookie"],
    correct: 3,
  },
  // Câu 43 (multi)
  {
    question: "43. Tasks với Eloquent ORM? (Chọn 2)",
    options: ["Deleting records", "Serving static assets", "Defining routes", "Creating records"],
    correct: [0,3],
  },
  // Câu 44
  {
    question: "44. Valid route syntax sử dụng controller action?",
    options: ["Route::get('/user', 'UserController@show');", "Route::action('/user', 'UserController@show');", "Route::post('/user', 'UserController');", "Route::controller('/user', 'UserController@show');"],
    correct: 0,
  },
  // Câu 45
  {
    question: "45. Nested loops output? for x=1..2, y=1..3 skip when x==y",
    options: ["x = 1 y = 2x = 1 y = 3x = 2 y = 1x = 2 y = 3", "x=1y=2 x=1y=3", "x=1y=2x=2y=3", "x=2y=1x=2y=3"],
    correct: 0,
  },
  // Câu 46
  {
    question: "46. Toán tử nào sau đây không tồn tại trong PHP?",
    options: ["<=>", "><", "<>", "!=="],
    correct: 1,
  },
  // Câu 47
  {
    question: "47. Mặc định của một biến không có giá trị là?",
    options: ["none", "null", "Không có khái niệm như vậy", "undef"],
    correct: 1,
  },
  // Câu 48
  {
    question: "48. switch(1){case1:print('Book Details');case2:print('Book Author');default:print('Missing Book');}",
    options: ["Book DetailsBook AuthorMissing Book", "Book Details", "Book Author", "Missing Book"],
    correct: 0,
  },
  // Câu 49
  {
    question: "49. Essential part of Laravel architecture?",
    options: ["URL Generators", "Middleware", "REST API Controllers", "XML Parsers"],
    correct: 1,
  },
  // Câu 50
  {
    question: "50. $a = array(); if ($a == null) echo?",
    options: ["lỗi", "không in", "false", "true"],
    correct: 2,
  },
  // Câu 51
  {
    question: "51. Tên biến không đúng?",
    options: ["$number_in_class", "$number-in-class", "$nic", "$NumberInClass"],
    correct: 1,
  },
  // Câu 52
  {
    question: "52. Giá trị $var = 1 / 2;",
    options: ["0,5", "2", "0", "1"],
    correct: 0,
  },
  // Câu 53
  {
    question: "53. Đoạn mã nào dùng chú thích PHP?",
    options: ["# you are pretty", "// you are handsome", "/* commented code here */", "Tất cả đều đúng"],
    correct: 3,
  },
  // Câu 54
  {
    question: "54. Truy cập phần tử 'd' trong $a = array('a', 3=>'b', 1=>'c', 'd');",
    options: ["$a[4]", "$a[3]", "$a[2]", "$a[1]"],
    correct: 0,
  },
  // Câu 55
  {
    question: "55. $foo='bar'; echo '$foo\\'' . \"$foo\\'\";",
    options: ["$foo\\'bar\\'", "$foo'bar\\'", "$foo bar", "bar$foo"],
    correct: 0,
  },
  // Câu 56
  {
    question: "56. PHP viết tắt của?",
    options: ["Hypertext Markup Language", "Hypertext Transfer Protocol", "Preprocessed Hypertext Page", "PHP: Hypertext Preprocessor"],
    correct: 3,
  },
  // Câu 57
  {
    question: "57. $RESULT = 11 + 011 + 0x11;",
    options: ["39", "22", "11", "37"],
    correct: 3,
  },
  // Câu 58
  {
    question: "58. Chuỗi nối: 'ab' + 'cd' + 'abc' =>?",
    options: ["abcdabc", "abcdbc", "abdcabc", "abccdab"],
    correct: 0,
  },
  // Câu 59
  {
    question: "59. Kiểu dữ liệu gán cho $x = 50.0?",
    options: ["Float", "Integer", "String", "Double"],
    correct: 0,
  },
  // Câu 60
  {
    question: "60. Giá trị $e = ($a*$b)+$c*$d/$a với a=5,b=12,c=10,d=7?",
    options: ["74", "70", "60", "84"],
    correct: 0,
  },
  // Câu 61
  {
    question: "61. Ký hiệu dùng khi sử dụng biến PHP?",
    options: ["$", "@", "&", "#"],
    correct: 0,
  },
  // Câu 62
  {
    question: "62. Kiểu dữ liệu của $z = $x % $y?",
    options: ["Integer", "Float", "String", "Boolean"],
    correct: 0,
  },
  // Câu 63
  {
    question: "63. while ($x < 10) { $x--; } với $x=25 ban đầu; echo $x;",
    options: ["25", "24", "10", "Không in"],
    correct: 0,
  },
  // Câu 64
  {
    question: "64. echo (int) '1235Jason';",
    options: ["1235", "Jason", "0", "Error"],
    correct: 0,
  },
];

// ===================== Shared quiz engine (same as PLDC.js) =====================
let currentPart = null; // 0: all, 1..n part index+1
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isAnswered = false;

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

if (document.querySelectorAll(".menu-btn").length) {
  document.querySelectorAll(".menu-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const part = btn.getAttribute("data-part");
      startQuiz(part);
    });
  });
}

function startQuiz(part) {
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
  isAnswered = false;
  if (mainMenu) mainMenu.classList.add("hidden");
  if (resultView) resultView.classList.add("hidden");
  if (quizView) quizView.classList.remove("hidden");
  if (!quizQuestions.length) {
    if (questionContent) questionContent.textContent = "Chưa có câu hỏi.";
    if (optionsList) optionsList.innerHTML = "";
    if (quizPart) quizPart.textContent = currentPart === 0 ? "Tất Cả" : `Phần ${currentPart}`;
    if (quizProgress) quizProgress.textContent = "";
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }
  renderQuiz();
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
  const newOptions = optionObjs.map((o) => o.opt);
  let newAnswer;
  if (Array.isArray(question.correct)) {
    newAnswer = question.correct.map((correctIdx) => optionObjs.findIndex((o) => o.idx === correctIdx));
  } else {
    newAnswer = optionObjs.findIndex((o) => o.idx === question.correct);
  }
  return { ...question, options: newOptions, answer: newAnswer, isMultiple: Array.isArray(question.correct) };
}

function renderQuiz() {
  if (!quizQuestions.length) return;
  const q = quizQuestions[currentIndex];
  if (quizPart) quizPart.textContent = currentPart === 0 ? "Tất Cả" : `Phần ${currentPart}`;
  if (quizProgress) quizProgress.textContent = `Câu ${currentIndex + 1} / ${quizQuestions.length}`;
  if (questionContent) questionContent.textContent = q.isMultiple ? q.question + " (Chọn nhiều đáp án)" : q.question;
  if (!optionsList) return;
  optionsList.innerHTML = "";
  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.classList.add("option-item");
    if (userAnswers[currentIndex] !== null) {
      li.classList.add("disabled");
      if (q.isMultiple) {
        if (q.answer.includes(i)) li.classList.add("correct");
        if (userAnswers[currentIndex].includes(i) && !q.answer.includes(i)) li.classList.add("incorrect");
        if (userAnswers[currentIndex].includes(i)) li.classList.add("selected");
      } else {
        if (i === q.answer) li.classList.add("correct");
        if (i === userAnswers[currentIndex] && userAnswers[currentIndex] !== q.answer) li.classList.add("incorrect");
        if (i === userAnswers[currentIndex]) li.classList.add("selected");
      }
    }
    li.addEventListener("click", () => handleOptionClick(i));
    optionsList.appendChild(li);
  });
  if (prevBtn) prevBtn.disabled = currentIndex === 0;
  if (nextBtn) {
    nextBtn.textContent = currentIndex === quizQuestions.length - 1 ? "Xem kết quả" : "Câu Tiếp Theo";
    nextBtn.disabled = userAnswers[currentIndex] === null;
  }
  if (q.isMultiple && userAnswers[currentIndex] === null) addConfirmButton();
}

function handleOptionClick(selectedIdx) {
  const q = quizQuestions[currentIndex];
  if (q.isMultiple) {
    if (userAnswers[currentIndex] === null) userAnswers[currentIndex] = [];
    const currentAnswers = userAnswers[currentIndex];
    const optionElement = optionsList.children[selectedIdx];
    if (currentAnswers.includes(selectedIdx)) {
      currentAnswers.splice(currentAnswers.indexOf(selectedIdx), 1);
      optionElement.classList.remove("selected");
    } else {
      currentAnswers.push(selectedIdx);
      optionElement.classList.add("selected");
    }
    if (nextBtn) nextBtn.disabled = currentAnswers.length === 0;
  } else {
    if (userAnswers[currentIndex] !== null) return;
    userAnswers[currentIndex] = selectedIdx;
    isAnswered = true;
    setTimeout(() => { showAnswerResult(); renderQuiz(); }, 300);
    Array.from(optionsList.children).forEach((li) => li.classList.add("disabled"));
  }
}

function addConfirmButton() {
  const q = quizQuestions[currentIndex];
  if (!q.isMultiple || userAnswers[currentIndex] !== null) return;
  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "Xác nhận đáp án";
  confirmBtn.classList.add("confirm-btn");
  confirmBtn.onclick = () => {
    if (userAnswers[currentIndex] && userAnswers[currentIndex].length > 0) {
      isAnswered = true;
      setTimeout(() => { showAnswerResult(); renderQuiz(); }, 300);
      Array.from(optionsList.children).forEach((li) => li.classList.add("disabled"));
      confirmBtn.remove();
    }
  };
  optionsList.parentNode.insertBefore(confirmBtn, optionsList.nextSibling);
}

function showAnswerResult() {
  const q = quizQuestions[currentIndex];
  Array.from(optionsList.children).forEach((li, i) => {
    li.classList.remove("selected");
    if (q.isMultiple) {
      if (q.answer.includes(i)) li.classList.add("correct");
      if (userAnswers[currentIndex] && userAnswers[currentIndex].includes(i) && !q.answer.includes(i)) li.classList.add("incorrect");
      if (userAnswers[currentIndex] && userAnswers[currentIndex].includes(i)) li.classList.add("selected");
    } else {
      if (i === q.answer) li.classList.add("correct");
      if (i === userAnswers[currentIndex] && userAnswers[currentIndex] !== q.answer) li.classList.add("incorrect");
    }
  });
}

if (prevBtn) prevBtn.addEventListener("click", () => { if (currentIndex > 0) { currentIndex--; renderQuiz(); } });
if (nextBtn) nextBtn.addEventListener("click", () => { if (currentIndex < quizQuestions.length - 1) { currentIndex++; renderQuiz(); } else if (currentIndex === quizQuestions.length - 1) { showResult(); } });

function showResult() {
  if (quizView) quizView.classList.add("hidden");
  if (resultView) resultView.classList.remove("hidden");
  const total = quizQuestions.length;
  let correct = 0;
  for (let idx = 0; idx < quizQuestions.length; idx++) {
    const q = quizQuestions[idx];
    const userAnswer = userAnswers[idx];
    if (q.isMultiple) {
      if (userAnswer && Array.isArray(userAnswer)) {
        const sortedUser = [...userAnswer].sort();
        const sortedCorrect = [...q.answer].sort();
        if (sortedUser.length === sortedCorrect.length && sortedUser.every((v, i) => v === sortedCorrect[i])) correct++;
      }
    } else if (userAnswer === q.answer) correct++;
  }
  const percent = Math.round((correct / total) * 100);
  let rank = percent === 100 ? "🌟 Xuất sắc!" : percent >= 80 ? "👍 Rất tốt!" : percent >= 60 ? "Khá!" : percent >= 40 ? "Cố gắng thêm!" : "Luyện tập thêm nhé!";
  if (resultSummary) resultSummary.innerHTML = `<div><b>Số câu đúng:</b> ${correct} / ${total}</div><div><b>Phần trăm đúng:</b> ${percent}%</div><div><b>Đánh giá:</b> ${rank}</div>`;
}

if (backBtn) backBtn.addEventListener("click", () => { if (resultView) resultView.classList.add("hidden"); if (mainMenu) mainMenu.classList.remove("hidden"); });
if (backToMenuBtn) backToMenuBtn.addEventListener("click", () => {
  if (quizView) quizView.classList.add("hidden");
  if (mainMenu) mainMenu.classList.remove("hidden");
  quizQuestions = []; currentIndex = 0; userAnswers = []; isAnswered = false;
  if (questionContent) questionContent.textContent = "";
  if (optionsList) optionsList.innerHTML = "";
  if (quizPart) quizPart.textContent = "";
  if (quizProgress) quizProgress.textContent = "";
  if (prevBtn) prevBtn.disabled = true; if (nextBtn) nextBtn.disabled = true;
});
if (restartBtn) restartBtn.addEventListener("click", () => {
  let selectedQuestions;
  if (currentPart === 0) selectedQuestions = questions.flat(); else selectedQuestions = questions[currentPart - 1] ? [...questions[currentPart - 1]] : [];
  selectedQuestions = shuffleArray([...selectedQuestions]);
  quizQuestions = selectedQuestions.map((q) => shuffleQuestionOptions(q));
  currentIndex = 0; userAnswers = Array(quizQuestions.length).fill(null); isAnswered = false; renderQuiz();
});
if (optionsList) optionsList.addEventListener("click", (e) => { if (e.target.tagName === "LI" && userAnswers[currentIndex] !== null) e.preventDefault(); });

// Partition (5 parts of up to 50 questions each for consistency, though only 64 present)
const questions = [
  questionsData.slice(0, 50),
  questionsData.slice(50, 100),
  questionsData.slice(100, 150),
  questionsData.slice(150, 200),
  questionsData.slice(200, 250),
];
