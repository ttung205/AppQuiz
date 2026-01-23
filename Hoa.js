// Dữ liệu câu hỏi từ đề bài
// Định dạng: { question, options, correct, explanation }
// Lưu ý: correct là chỉ số 0-based; nếu có nhiều đáp án đúng, dùng mảng chỉ số (isMultiple sẽ tự nhận)
var questionsData = [
  // Câu 1 - 13: Chuyển hóa acid amin, bilirubin
  {
    question:
      "Câu 1: Các loại phản ứng có thể gặp trong quá trình thoái hóa các acid amin là:",
    options: [
      "Khử carboxyl",
      "Khử amin oxy hóa",
      "Chuyển amin",
      "Tất cả các phản ứng trên",
    ],
    correct: 3,
    explanation:
      "Thoái hóa acid amin bao gồm khử carboxyl (tạo amin sinh học), chuyển amin (trao đổi nhóm NH2) và khử amin oxy hóa (giải phóng NH3).",
  },
  {
    question:
      "Câu 2: Trong chuyển hóa acid amin, acid α-cetonic tương ứng với aspartat là:",
    options: ["Pyruvat", "Oxaloacetat", "α-cetoglutarat", "Alanin"],
    correct: 1,
    explanation:
      "Aspartat chuyển amin với α-cetoglutarat cho ra oxaloacetat và glutamat; do đó α-cetonic tương ứng của aspartat là oxaloacetat.",
  },
  {
    question:
      "Câu 3: Chất nào là chất trung gian giữa phản ứng chuyển amin và khử amin?",
    options: ["Pyruvat", "Fumarat", "α-cetoglutarat", "Oxaloacetat"],
    correct: 2,
    explanation:
      "α-Cetoglutarat nhận nhóm amin (tạo glutamat) trong chuyển amin; glutamat sau đó khử amin oxy hóa để giải phóng NH3, nên α-cetoglutarat/glutamat là cặp trung gian then chốt.",
  },
  {
    question: "Câu 4: NH3 di chuyển trong máu chủ yếu dưới dạng nào:",
    options: ["α-cetoglutarat", "Pyruvat", "Urê", "Glutamin"],
    correct: 3,
    explanation:
      "NH3 độc được 'bắt' thành glutamin (glutamat + NH3) để vận chuyển an toàn trong máu đến gan/thận.",
  },
  {
    question: "Câu 5: Phân tử urê:",
    options: [
      "Được tổng hợp ở gan từ ammoniac",
      "Là một hợp chất chứa Nitơ",
      "Là sản phẩm thoái hóa chính của protein",
      "Tất cả đúng",
    ],
    correct: 3,
    explanation:
      "Chu trình urê xảy ra chủ yếu ở gan, biến NH3 độc thành urê để thải; urê là sản phẩm chứa N chính trong nước tiểu.",
  },
  {
    question: "Câu 6: Chọn câu đúng:",
    options: [
      "GOT và GPT là enzym xúc tác phản ứng khử amin",
      "Alanin có thể được tổng hợp từ pyruvat",
      "Oxaloacetat là acid amin cần thiết",
      "Cơ thể tổng hợp được treonin và tryptophan",
    ],
    correct: 1,
    explanation:
      "AST (GOT), ALT (GPT) xúc tác chuyển amin (không phải khử amin). Alanin được tạo từ pyruvat qua ALT; threonin, tryptophan là acid amin thiết yếu không tự tổng hợp.",
  },
  {
    question: "Câu 7: Những acid amin cần thiết",
    options: [
      "Không thể tổng hợp trong cơ thể, phải cung cấp bởi thức ăn",
      "Tổng hợp được ở thận nhưng không ở mô khác",
      "Chỉ cần khi có thai",
      "Chỉ cần trong giai đoạn phát triển",
    ],
    correct: 0,
    explanation:
      "Định nghĩa acid amin thiết yếu: cơ thể không tổng hợp được với tốc độ đáp ứng nhu cầu, phải lấy từ khẩu phần.",
  },
  {
    question:
      "Câu 8: Nitơ của acid amin được thải ra trong nước tiểu chủ yếu dưới dạng:",
    options: ["Acid uric", "NH3", "Creatinin", "Urê"],
    correct: 3,
    explanation:
      "Urê chiếm phần lớn nitơ bài xuất; acid uric chủ yếu từ thoái hóa purin, creatinin từ cơ. NH3 tự do rất ít do độc tính.",
  },
  {
    question: "Câu 9: Chọn câu đúng về các acid α-cetonic:",
    options: [
      "Chỉ được tạo ra nhờ khử amin oxy hóa",
      "Khi chuyển amin hoặc amin hóa sẽ tổng hợp nên các acid amin tương ứng",
      "Không được tạo ra trong quá trình chuyển amin",
      "Không đi vào được chu trình acid citric",
    ],
    correct: 1,
    explanation:
      "α-Cetonic có thể sinh ra bởi chuyển amin hoặc khử amin; nhiều chất (như oxaloacetat, pyruvat) đi vào TCA hoặc các đường chuyển hóa khác.",
  },
  {
    question: "Câu 10: Chọn câu sai",
    options: [
      "Một số acid amin có thể được dùng để tạo đường và chất béo",
      "Adrenalin là sản phẩm chuyển hóa của tyrosin",
      "Hormon giáp trạng là sản phẩm chuyển hóa của tryptophan",
      "Creatinin được tổng hợp từ glycin, arginin và methionin",
    ],
    correct: 2,
    explanation:
      "Hormon tuyến giáp (T3/T4) có nguồn gốc tyrosin (không phải tryptophan). Adrenalin từ tyrosin; nhiều AA sinh đường/ketogenic; creatine/creatinin từ Gly, Arg, Met.",
  },
  {
    question: "Câu 11: Bilirubin tự do:",
    options: [
      "Tan trong nước",
      "Không tan trong nước, độc với cơ thể",
      "Là sản phẩm thoái hóa của muối mật",
      "Còn gọi là bilirubin trực tiếp",
    ],
    correct: 1,
    explanation:
      "Bilirubin tự do (gián tiếp, không liên hợp) không tan trong nước, gắn albumin, có độc tính thần kinh ở trẻ sơ sinh.",
  },
  {
    question: "Câu 12: Chọn câu đúng:",
    options: [
      "Bilirubin trực tiếp không tan trong nước",
      "Bilirubin liên hợp là bilirubin liên hợp với albumin",
      "Bilirubin tự do phần lớn được tạo thành ở gan",
      "Bilirubin trực tiếp sau khi tạo thành được thải xuống ruột qua đường mật",
    ],
    correct: 3,
    explanation:
      "Bilirubin trực tiếp (liên hợp acid glucuronic) tan trong nước, bài tiết vào mật xuống ruột. Bilirubin tự do chủ yếu tạo ở hệ liên võng nội mô khi thoái hóa heme.",
  },
  {
    question: "Câu 13: Sản phẩm thoái hóa hemoglobin ở người là:",
    options: ["Sắc tố mật", "Muối mật", "Acid mật", "Cholesterol"],
    correct: 0,
    explanation:
      "Thoái hóa heme tạo bilirubin (sắc tố mật). Muối/acid mật và cholesterol thuộc chuyển hóa lipid, không phải từ hemoglobin.",
  },

  // Câu 19 - 33: Vàng da, lipid, thể ceton, acetyl-CoA
  {
    question:
      "Câu 19: Vàng da viêm gan và vàng da tắc mật giống nhau ở điểm nào:",
    options: [
      "Bilirubin gián tiếp tăng cao trong máu",
      "Có sắc tố mật và muối mật trong nước tiểu",
      "Không có stercobilinogen trong phân",
      "Không có urobilinogen trong nước tiểu",
    ],
    correct: 1,
    explanation:
      "Cả hai có tăng bilirubin liên hợp → sắc tố mật (bilirubin) xuất hiện trong nước tiểu. Tắc mật làm mất stercobilin ở phân và giảm urobilin niệu, còn viêm gan thì không nhất thiết.",
  },
  {
    question:
      "Câu 20: Xét nghiệm nào giúp phân biệt vàng da tan huyết và vàng da viêm gan:",
    options: [
      "Bilirubin toàn phần",
      "Sắc tố mật (bilirubin) trong nước tiểu",
      "Urobilinogen trong nước tiểu",
      "Stercobilinogen trong phân",
    ],
    correct: 1,
    explanation:
      "Vàng da tan huyết: bilirubin tự do tăng, không có bilirubin niệu; viêm gan: có bilirubin liên hợp niệu. Urobilinogen tăng ở cả hai nên ít đặc hiệu.",
  },
  {
    question:
      "Câu 21: Thể ceton là tên gọi của 3 chất nào sau đây:",
    options: [
      "Acid acetic, aceton, acid β-hydroxybutyric",
      "Aceton, acid acetoacetic, acid butyric",
      "Aceton, acid acetoacetic, acid β-hydroxybutyric",
      "Acid acetic, acid butyric, aceton",
    ],
    correct: 2,
    explanation:
      "Ba thể ceton: acetoacetat, β-hydroxybutyrat, aceton (sản phẩm phụ khử carboxyl).",
  },
  {
    question:
      "Câu 22: Cholesterol là tiền chất của các chất sau đây, ngoại trừ:",
    options: ["Aldosterol", "Corticosterol", "Testosterol", "ADH"],
    correct: 3,
    explanation:
      "Các hormon steroid (vỏ thượng thận, sinh dục) đều từ cholesterol; ADH (vasopressin) là peptid, không từ cholesterol.",
  },
  {
    question: "Câu 23: Vai trò của muối mật:",
    options: [
      "Nhũ tương hóa chất béo",
      "Giúp hấp thu vitamin tan trong dầu mỡ",
      "Tăng hoạt tính hệ enzym β-oxy hóa acid béo",
      "A và B đúng",
    ],
    correct: 3,
    explanation:
      "Muối mật giúp nhũ tương hóa lipid và tạo mixen hỗ trợ hấp thu lipid/vitamin tan trong mỡ; không làm tăng trực tiếp β-oxy hóa.",
  },
  {
    question: "Câu 24: Sự sinh tổng hợp acid béo no xảy ra chủ yếu ở:",
    options: [
      "Trong ty thể",
      "Trong và ngoài ty thể",
      "Trong bào tương",
      "Ở nhân tế bào",
    ],
    correct: 2,
    explanation:
      "Tổng hợp acid béo (FASN) diễn ra ở bào tương; ngược lại β-oxy hóa ở ty thể/peroxisome.",
  },
  {
    question:
      "Câu 25: Nguồn cung cấp NADPH,H+ cho sinh tổng hợp acid béo chủ yếu là:",
    options: [
      "Con đường HDP (glycolysis)",
      "Con đường HMP (pentose phosphat)",
      "Chu trình acid citric",
      "Chuỗi hô hấp tế bào",
    ],
    correct: 1,
    explanation:
      "NADPH chủ yếu từ HMP (G6PD) và enzyme malic; glycolysis/TCA không tạo NADPH cho sinh tổng hợp.",
  },
  {
    question: "Câu 26: Chất nào KHÔNG phải là sản phẩm chuyển hóa cholesterol:",
    options: [
      "Vitamin D",
      "Muối mật",
      "Sắc tố mật",
      "Hormon vỏ thượng thận",
    ],
    correct: 2,
    explanation:
      "Sắc tố mật (bilirubin) từ heme; các lựa chọn còn lại là dẫn xuất từ cholesterol.",
  },
  {
    question: "Câu 27: Chylomicron vận chuyển chủ yếu chất gì:",
    options: ["Apoprotein", "Phospholipid", "Cholesterol", "Triglycerid"],
    correct: 3,
    explanation:
      "Chylomicron mang triglycerid ngoại sinh từ ruột đến mô (cơ, mỡ) và gan; thành phần chính là TG.",
  },
  {
    question:
      "Câu 28: Năng lượng tạo thành do β-oxy hóa hoàn toàn 1 phân tử acid palmitic là:",
    options: ["129 ATP", "146 ATP", "148 ATP", "38 ATP"],
    correct: 0,
    explanation:
      "Theo cách tính cổ điển: palmitat → 129 ATP. Cách tính hiện đại ~106 ATP nhưng trong đáp án cổ điển chọn 129.",
  },
  {
    question: "Câu 29: Chọn câu sai:",
    options: [
      "Quá trình β-oxy hóa acid béo xảy ra mạnh ở gan",
      "Acetyl-CoA được dùng để tổng hợp thể ceton",
      "Acetyl-CoA khi tạo nhiều ở gan sẽ được đưa vào máu đến mô để sử dụng",
      "Acetyl-CoA là chất trung gian quan trọng của chuyển hóa glucid, lipid",
    ],
    correct: 2,
    explanation:
      "Acetyl-CoA không thể vận chuyển trực tiếp trong máu; gan chuyển thành thể ceton để phân phối.",
  },
  {
    question: "Câu 30: Chọn câu sai",
    options: [
      "Lipid được vận chuyển trong máu dưới dạng lipoprotein",
      "HDL là lipoprotein tỷ trọng thấp, chứa nhiều phospholipid, khi tăng sẽ giảm nguy cơ xơ vữa",
      "Chylomicron và VLDL chứa nhiều triglycerid",
      "LDL tăng cao là yếu tố nguy cơ xơ vữa động mạch",
    ],
    correct: 1,
    explanation:
      "HDL là lipoprotein tỷ trọng cao (High-Density). Nhận định 'tỷ trọng thấp' là sai.",
  },
  {
    question: "Câu 31: Chọn câu đúng: Thể ceton",
    options: [
      "Là sản phẩm từ Acetyl-CoA ở gan đưa đến các mô",
      "Xuất hiện trong nước tiểu ở đái tháo đường nặng",
      "Gồm aceton, acetoacetat, β-hydroxybutyrat",
      "Tất cả đều đúng",
    ],
    correct: 3,
    explanation:
      "Cả ba mệnh đề đầu đều chính xác về nguồn gốc, thành phần và biểu hiện lâm sàng của thể ceton.",
  },
  {
    question: "Câu 32: Chọn câu sai: Acetyl-CoA",
    options: [
      "Được dùng để tổng hợp acid béo, cholesterol",
      "Tạo năng lượng khi oxy hóa qua chu trình acid citric",
      "Là sản phẩm của con đường HMP",
      "Được dùng để tạo thể ceton",
    ],
    correct: 2,
    explanation:
      "HMP (pentose phosphat) tạo NADPH và pentose, không tạo Acetyl-CoA.",
  },
  {
    question:
      "Câu 33: Thực chất của quá trình tiêu hóa lipid ở ruột non là gì?",
    options: [
      "Nhũ tương hóa lipid thành các hạt nhỏ",
      "Thủy phân lipid hoàn toàn trong dạ dày",
      "Tổng hợp triglycerid mới tại ruột non",
      "Oxy hóa acid béo tạo năng lượng",
    ],
    correct: 0,
    explanation:
      "Muối mật nhũ tương hóa làm tăng diện tích tiếp xúc để lipase tụy thủy phân; tiêu hóa chủ yếu diễn ra ở ruột non.",
  },

  // Câu 41 - 46: Cholesterol, gan nhiễm mỡ, cấu trúc lipoprotein, tiêu hóa glucid
  {
    question:
      "Câu 41: Tập hợp các chất nào sau đây trực tiếp tham gia vào quá trình tổng hợp cholesterol:",
    options: [
      "Acetyl-CoA, NADPH,H+, ATP",
      "Glucose, acid béo, HMG-CoA synthetase",
      "Glycerolphosphat, Acetyl-CoA, HMG-CoA synthetase",
      "Acid béo, cholin, H2PO4-",
    ],
    correct: 0,
    explanation:
      "Tổng hợp cholesterol cần nguồn carbon từ Acetyl-CoA, khử bằng NADPH và năng lượng ATP; HMG-CoA reductase là enzyme giới hạn tốc độ.",
  },
  {
    question: "Câu 42: Nguyên nhân nào làm gan nhiễm mỡ:",
    options: [
      "Ăn nhiều glucid",
      "Nghiện rượu",
      "Thiếu ApoB, thiếu phospholipid và acid béo cần thiết",
      "Tất cả các nguyên nhân trên",
    ],
    correct: 3,
    explanation:
      "Tất cả đều gây rối loạn tổng hợp/vận chuyển VLDL hoặc tăng tổng hợp TG tại gan → tích mỡ.",
  },
  {
    question: "Câu 43: Tìm câu đúng về cấu trúc hạt lipoprotein:",
    options: [
      "Phospholipid nằm ở trong nhân của hạt lipoprotein",
      "Cholesterol ester nằm ở phần vỏ của hạt lipoprotein",
      "Apoprotein tạo thành lớp vỏ bọc lipoprotein",
      "Chuỗi hydrocarbon của acid béo của phospholipid quay ra ngoài",
    ],
    correct: 2,
    explanation:
      "Lõi (core) chứa TG và cholesteryl ester; vỏ (shell) gồm phospholipid, cholesterol tự do và apoprotein. Đuôi kỵ nước quay vào trong.",
  },
  {
    question: "Câu 44: Tìm câu đúng",
    options: [
      "Bình thường sau ăn huyết tương đục do nhiễm chylomicron",
      "VLDL vận chuyển triglycerid ngoại sinh từ ruột đến gan",
      "Sau bữa ăn 5 giờ chylomicron bị loại hết khỏi máu",
      "Chylomicron vận chuyển mỡ từ gan đến các tế bào ngoại vi",
    ],
    correct: 0,
    explanation:
      "Sau ăn, chylomicron tăng gây đục huyết tương. VLDL mang TG nội sinh từ gan; thời gian sạch chylomicron thay đổi (thường 6–9 giờ), nên mệnh đề C không chuẩn.",
  },
  {
    question: "Câu 45: Để đánh giá nguy cơ xơ vữa động mạch cần làm xét nghiệm gì:",
    options: [
      "Cholesterol toàn phần",
      "Triglycerid",
      "HDL-C, LDL-C",
      "Tất cả",
    ],
    correct: 3,
    explanation:
      "Đánh giá nguy cơ cần toàn diện: TC, TG, HDL-C, LDL-C; đặc biệt LDL-C và HDL-C có giá trị tiên lượng mạnh.",
  },
  {
    question: "Câu 46: Các enzyme tiêu hóa glucid ở cơ thể gồm:",
    options: [
      "Amylase, saccarase (sucrase)",
      "Pyruvat kinase, saccarase",
      "Cellulase, lipase",
      "Amylase, invertase",
    ],
    correct: 0,
    explanation:
      "Amylase (nước bọt/tụy) và sucrase (saccarase/invertase) là enzym tiêu hóa carbohydrat. Pyruvat kinase thuộc chuyển hóa nội bào; người không có cellulase.",
  },

  // Câu 47 - 53: Glycogen, đường phân, Cori
  {
    question: "Câu 47: Tổ chức chứa glycogen cao nhất là:",
    options: ["Não", "Thận", "Gan", "Cơ"],
    correct: 2,
    explanation:
      "Tính theo nồng độ (g/100 g mô), gan chứa glycogen cao nhất; tổng lượng tuyệt đối lại lớn nhất ở cơ (xem Câu 53).",
  },
  {
    question: "Câu 48: Enzym amylase có đặc điểm:",
    options: [
      "Xúc tác phản ứng phân giải glucid (tinh bột, glycogen)",
      "Xúc tác phản ứng phân giải glucose",
      "Chỉ có ở thực vật",
      "Chỉ có ở động vật",
    ],
    correct: 0,
    explanation:
      "Amylase thủy phân liên kết α-1,4-glucosid trong tinh bột/glycogen; không phân giải glucose đơn. Có ở cả động vật và thực vật.",
  },
  {
    question: "Câu 49: Lactat được chuyển hóa trong chu trình nào:",
    options: ["Chu trình Urê", "Chu trình Cori", "Chu trình β-oxy hóa", "Chu trình Krebs"],
    correct: 1,
    explanation:
      "Chu trình Cori: lactat từ cơ → gan chuyển thành glucose (tân tạo), rồi đưa lại cho cơ.",
  },
  {
    question: "Câu 50: Thành phần chính tham gia tân tạo glucose là:",
    options: ["Glycogen", "Lactat", "Acid amin", "B và A"],
    correct: [1, 2],
    explanation:
      "Tiền chất chính của tân tạo glucose: lactat, glycerol, các acid amin (glucogenic). Glycogen thuộc dự trữ (glycogenolysis), không phải tân tạo.",
  },
  {
    question: "Câu 51: Acetyl-CoA được chuyển hóa trong chu trình nào:",
    options: ["Chu trình Urê", "Chu trình Cori", "Chu trình β-oxy hóa", "Chu trình Krebs"],
    correct: 3,
    explanation:
      "Acetyl-CoA vào chu trình acid citric (Krebs) để tạo năng lượng, hoặc chuyển thành thể ceton/chất béo.",
  },
  {
    question: "Câu 52: Các enzyme tiêu hóa glucid ở cơ thể gồm:",
    options: [
      "β-Amylase, saccarase",
      "Pyruvat kinase, saccarase",
      "Cellulase, lipase",
      "Amylase, lactase",
    ],
    correct: 3,
    explanation:
      "Ở người: amylase, lactase, sucrase, maltase... β-Amylase đặc trưng thực vật; cellulase không có ở người.",
  },
  {
    question: "Câu 53: Mô chứa tổng lượng glycogen cao nhất là:",
    options: ["Não", "Thận", "Gan", "Cơ"],
    correct: 3,
    explanation:
      "Do khối lượng lớn, cơ xương chứa tổng lượng glycogen nhiều nhất toàn cơ thể, dù nồng độ/gram thấp hơn gan.",
  },

  // Câu 62 - 73: HMP, điều hòa đường huyết, lấy/bảo quản mẫu
  {
    question: "Câu 62: Ý nghĩa của con đường HMP là:",
    options: [
      "Cung cấp 60% tổng năng lượng cho cơ thể",
      "Cung cấp acid lactic",
      "Cung cấp các pentose-5-phosphat và NADPH,H+",
      "Cung cấp glucose-6-phosphat",
    ],
    correct: 2,
    explanation:
      "HMP (pentose phosphat) cung cấp ribose-5-P cho tổng hợp nucleotid và NADPH cho sinh tổng hợp, khử ROS.",
  },
  {
    question: "Câu 63: Chọn câu sai:",
    options: [
      "Cơ có thể dự trữ glycogen và cung cấp glucose tự do vào máu",
      "Gan dự trữ glycogen cho toàn cơ thể",
      "Nhờ chức năng glycogen, gan giữ vai trò quan trọng trong điều hòa đường huyết",
      "Não sử dụng nguồn đường tự do từ máu",
    ],
    correct: 0,
    explanation:
      "Cơ thiếu glucose-6-phosphatase nên không nhả glucose tự do vào máu; gan có enzym này và điều hòa đường huyết.",
  },
  {
    question:
      "Câu 64: Phản ứng Glycogen → Glucose-1-phosphat → Glucose-6-phosphat được xúc tác bởi:",
    options: [
      "Glucokinase, isomerase",
      "Phosphorylase, phosphoglucoisomerase",
      "Hexokinase, phosphoglucomutase",
      "Phosphorylase, phosphoglucomutase",
    ],
    correct: 3,
    explanation:
      "Glycogen phosphorylase: glycogen → G1P; phosphoglucomutase: G1P ↔ G6P.",
  },
  {
    question:
      "Câu 65: Quá trình chuyển hóa glucose tạo acid lactic ở mô được gọi là:",
    options: [
      "Sự đường phân hiếu khí",
      "Sự lên men lactat",
      "Sự oxy hóa",
      "Sự đường phân yếm khí",
    ],
    correct: 3,
    explanation:
      "Trong điều kiện yếm khí/thiếu oxy, pyruvat khử thành lactat: đường phân yếm khí (còn gọi lên men lactat ở vi sinh vật).",
  },
  {
    question: "Câu 66: NaF có tác dụng gì trong bảo quản mẫu máu:",
    options: [
      "Là tên gọi khác của Natri florua",
      "Là chất chống đông tốt nhất cho xét nghiệm sinh hóa",
      "Là chất chống phân hủy đường (ức chế glycolysis)",
      "Là chất sát khuẩn",
    ],
    correct: 2,
    explanation:
      "Natri fluoride ức chế enolase, chống tiêu hao glucose sau lấy máu; không phải chất chống đông chuyên dụng (thường dùng cùng oxalat).",
  },
  {
    question:
      "Câu 67: Máu sau khi lấy ra khỏi cơ thể sẽ bị đông lại do các thành phần sau:",
    options: [
      "Sợi fibrin",
      "Không có chất chống đông",
      "Ion Ca2+",
      "Có nhiều ion trên màng hồng cầu",
    ],
    correct: 2,
    explanation:
      "Đông máu cần Ca2+ cho hoạt hóa yếu tố đông máu. 'Không có chất chống đông' là điều kiện, không phải thành phần; sợi fibrin là sản phẩm cuối.",
  },
  {
    question: "Câu 68: Mẫu máu bị nhiễm EDTA sẽ cho kết quả:",
    options: [
      "Na+, Cl-, K+ bình thường",
      "Na+, Cl-, K+ rất thấp",
      "Các xét nghiệm ion đồ không bị ảnh hưởng",
      "K+ rất cao; Ca2+, Mg2+ rất thấp",
    ],
    correct: 3,
    explanation:
      "EDTA thường ở dạng K2/K3-EDTA → tăng giả K+; đồng thời tạo phức mạnh với Ca2+, Mg2+ → giảm giả.",
  },
  {
    question:
      "Câu 69: Thứ tự cho máu vào các ống nghiệm theo chuẩn (Order of Draw) là:",
    options: [
      "Chai cấy máu, EDTA, Sodium fluoride, Heparin, Serum, Sodium citrate",
      "Chai cấy máu, Sodium citrate, Serum, Heparin, EDTA, Sodium fluoride",
      "Chai cấy máu, Sodium fluoride, Heparin, Serum, Sodium citrate",
      "Serum, Sodium citrate, Chai cấy máu, Heparin, Sodium fluoride",
    ],
    correct: 1,
    explanation:
      "Chuẩn thường dùng: Cấy máu → Citrate (xanh dương) → Serum (đỏ/vàng) → Heparin (xanh lá) → EDTA (tím) → Fluoride oxalat (xám).",
  },
  {
    question:
      "Câu 70: Với huyết thanh/huyết tương đục như sữa và vượt ngưỡng đo, xử lý thế nào?",
    options: [
      "Pha loãng mẫu, chạy lại và nhân hệ số",
      "Ly tâm lạnh/siêu ly tâm tách lớp mỡ, dùng phần trong để xét nghiệm",
      "Cả hai cách đều cho kết quả chuẩn xác",
      "Trao đổi với bác sĩ để bệnh nhân kiêng mỡ rồi xét nghiệm lại",
    ],
    correct: 1,
    explanation:
      "Nhiễu đục do lipid xử lý tốt nhất bằng (siêu) ly tâm loại bỏ lipid; pha loãng chỉ giảm đục nhưng có thể sai lệch do phi tuyến/ma trận.",
  },
  {
    question:
      "Câu 71: Sau khi lấy máu, nên tách huyết tương/huyết thanh trong bao lâu?",
    options: [
      "Tách ngay càng sớm càng tốt",
      "Sau 1 giờ",
      "Trong vòng 30 phút",
      "Sau 2 giờ",
    ],
    correct: 0,
    explanation:
      "Nguyên tắc: tách sớm để hạn chế biến đổi tiền phân tích (glycolysis, rò rỉ ion...). Thực hành: không quá 2 giờ; nhiều xét nghiệm yêu cầu <1 giờ.",
  },
  {
    question:
      "Câu 72: Dung dịch thuốc thử bền vững tới ngày hết hạn khi bảo quản ở:",
    options: ["2–8°C", "0°C", "Nhiệt độ phòng", "15–25°C"],
    correct: 0,
    explanation:
      "Đa số thuốc thử sinh hóa bảo quản 2–8°C theo nhãn; một số loại chuyên biệt có điều kiện khác, nhưng phương án chung nhất là 2–8°C.",
  },
  {
    question:
      "Câu 73: Trong thao tác lấy máu, khi kim đã vào tĩnh mạch thì:",
    options: [
      "Vẫn cột garo để máu chảy dễ dàng",
      "Kéo bơm tiêm và siết thêm garo",
      "Giữ garo và kéo bơm chậm hơn 2 phút",
      "Cởi garo ngay sau khi vào tĩnh mạch để tránh ứ máu, sai lệch xét nghiệm",
    ],
    correct: 3,
    explanation:
      "Garo >1 phút gây ứ trệ, tăng K+, Ca2+, Mg2+, lactat, giảm pH... nên phải tháo garo sớm khi đã vào tĩnh mạch và máu chảy đều.",
  },
];
