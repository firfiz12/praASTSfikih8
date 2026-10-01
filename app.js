// ========================================================
// TRY OUT UJIAN FIQIH KELAS 8 - APPLICATION LOGIC
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Global State
  const state = {
    student: {
      name: '',
      class: '8-A',
      durationMinutes: 90
    },
    answers: {},       // questionId -> selectedKey ('A', 'B', 'C', 'D')
    flagged: new Set(),// Set of flagged questionIds
    currentIndex: 0,
    startTime: null,
    endTime: null,
    timerInterval: null,
    remainingSeconds: 0,
    elapsedSeconds: 0,
    isExamRunning: false,
    currentFilter: 'all',
    theme: localStorage.getItem('cbt_fiqih_theme') || 'light'
  };

  // DOM Elements
  const screenIntro = document.getElementById('screen-intro');
  const screenExam = document.getElementById('screen-exam');
  const screenResult = document.getElementById('screen-result');

  // Theme Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Intro Elements
  const startExamForm = document.getElementById('startExamForm');
  const studentNameInput = document.getElementById('studentName');
  const studentClassInput = document.getElementById('studentClass');
  const examDurationInput = document.getElementById('examDuration');

  // Exam Screen Elements
  const avatarLetter = document.getElementById('avatarLetter');
  const examCurrentStudentName = document.getElementById('examCurrentStudentName');
  const examCurrentStudentClass = document.getElementById('examCurrentStudentClass');
  const timerBox = document.getElementById('timerBox');
  const timerCountdown = document.getElementById('timerCountdown');
  const badgeQNum = document.getElementById('badgeQNum');
  const badgeQType = document.getElementById('badgeQType');
  const badgeQTopic = document.getElementById('badgeQTopic');
  const btnFlagQuestion = document.getElementById('btnFlagQuestion');
  const flagText = document.getElementById('flagText');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const btnPrevQuestion = document.getElementById('btnPrevQuestion');
  const btnNextQuestion = document.getElementById('btnNextQuestion');
  const btnToggleFlag = document.getElementById('btnToggleFlag');
  const paletteGrid = document.getElementById('paletteGrid');
  const answeredCountBadge = document.getElementById('answeredCountBadge');
  const sidebarAnsweredText = document.getElementById('sidebarAnsweredText');
  const sidebarFlaggedText = document.getElementById('sidebarFlaggedText');
  const sidebarRemainingText = document.getElementById('sidebarRemainingText');
  const btnOpenFinishModal = document.getElementById('btnOpenFinishModal');

  // Modal Elements
  const finishModal = document.getElementById('finishModal');
  const modalDescText = document.getElementById('modalDescText');
  const modalAnsweredCount = document.getElementById('modalAnsweredCount');
  const modalFlaggedCount = document.getElementById('modalFlaggedCount');
  const modalUnansweredCount = document.getElementById('modalUnansweredCount');
  const btnCancelFinish = document.getElementById('btnCancelFinish');
  const btnConfirmFinish = document.getElementById('btnConfirmFinish');

  // Result Elements
  const scoreCirclePath = document.getElementById('scoreCirclePath');
  const resultScoreNum = document.getElementById('resultScoreNum');
  const resultSyariGrade = document.getElementById('resultSyariGrade');
  const resultGradeText = document.getElementById('resultGradeText');
  const resultStudentName = document.getElementById('resultStudentName');
  const resultStudentClass = document.getElementById('resultStudentClass');
  const resultTimeSpent = document.getElementById('resultTimeSpent');
  const resultDate = document.getElementById('resultDate');
  const statCorrect = document.getElementById('statCorrect');
  const statWrong = document.getElementById('statWrong');
  const statUnanswered = document.getElementById('statUnanswered');
  const statAccuracy = document.getElementById('statAccuracy');
  const btnRetakeExam = document.getElementById('btnRetakeExam');
  const topicAnalysisContainer = document.getElementById('topicAnalysisContainer');
  const reviewQuestionsList = document.getElementById('reviewQuestionsList');

  // Filter Tabs
  const tabFilterAll = document.getElementById('tabFilterAll');
  const tabFilterWrong = document.getElementById('tabFilterWrong');
  const tabFilterCorrect = document.getElementById('tabFilterCorrect');
  const tabFilterUnanswered = document.getElementById('tabFilterUnanswered');

  // ========================================================
  // 1. THEME TOGGLE
  // ========================================================
  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    state.theme = theme;
    localStorage.setItem('cbt_fiqih_theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  applyTheme(state.theme);

  themeToggleBtn.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // ========================================================
  // 2. HELPER FUNCTIONS: ARABIC FORMATTING & TIME
  // ========================================================
  function formatArabicContent(text) {
    if (!text) return '';
    // Highlight Arabic quotes or phrases
    const arabicRegex = /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s\.\,\(\)]+)/g;
    return text.replace(arabicRegex, (match) => {
      // Avoid wrapping single spaces or small punctuation
      if (match.trim().length <= 1 && !/[\u0600-\u06FF]/.test(match)) {
        return match;
      }
      return `<span class="ar-text" dir="rtl">${match}</span>`;
    });
  }

  function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // ========================================================
  // 3. START EXAM
  // ========================================================
  startExamForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = studentNameInput.value.trim();
    if (!name) {
      alert('Silakan masukkan nama lengkap Anda terlebih dahulu.');
      studentNameInput.focus();
      return;
    }

    state.student.name = name;
    state.student.class = studentClassInput.value;
    state.student.durationMinutes = parseInt(examDurationInput.value, 10);
    state.answers = {};
    state.flagged = new Set();
    state.currentIndex = 0;
    state.startTime = new Date();
    state.isExamRunning = true;

    // Display student info in exam topbar
    examCurrentStudentName.textContent = state.student.name;
    examCurrentStudentClass.textContent = state.student.class;
    avatarLetter.textContent = state.student.name.charAt(0).toUpperCase();

    // Setup Timer
    if (state.student.durationMinutes > 0) {
      state.remainingSeconds = state.student.durationMinutes * 60;
      state.elapsedSeconds = 0;
      updateTimerDisplay();
      state.timerInterval = setInterval(handleTimerTick, 1000);
    } else {
      // Untimed mode
      state.elapsedSeconds = 0;
      timerCountdown.textContent = 'Mode Santai (Tanpa Batas)';
      state.timerInterval = setInterval(() => {
        state.elapsedSeconds++;
      }, 1000);
    }

    // Initialize Question Palette
    initPalette();

    // Switch views
    screenIntro.style.display = 'none';
    screenExam.style.display = 'block';
    screenResult.style.display = 'none';

    // Render first question
    renderQuestion(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function handleTimerTick() {
    if (state.remainingSeconds > 0) {
      state.remainingSeconds--;
      state.elapsedSeconds++;
      updateTimerDisplay();

      // Visual warning when <= 5 minutes
      if (state.remainingSeconds <= 300) {
        timerBox.classList.add('warning');
      } else {
        timerBox.classList.remove('warning');
      }

      if (state.remainingSeconds === 0) {
        clearInterval(state.timerInterval);
        alert('Waktu pengerjaan try out telah habis! Jawaban Anda akan otomatis dikumpulkan.');
        finishExam();
      }
    }
  }

  function updateTimerDisplay() {
    timerCountdown.textContent = formatTime(state.remainingSeconds);
  }

  // Prevent accidental tab close during exam
  window.addEventListener('beforeunload', (e) => {
    if (state.isExamRunning) {
      e.preventDefault();
      e.returnValue = 'Ujian sedang berlangsung! Yakin ingin meninggalkan halaman?';
    }
  });

  // ========================================================
  // 4. PALETTE GRID
  // ========================================================
  function initPalette() {
    paletteGrid.innerHTML = '';
    QUESTIONS.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'palette-btn';
      btn.id = `palette-btn-${q.id}`;
      btn.textContent = q.id;
      btn.title = `Soal ${q.id} (${q.type === 'mcq' ? 'Pilihan Ganda' : 'Benar/Salah'})`;
      btn.addEventListener('click', () => {
        goToQuestion(idx);
      });
      paletteGrid.appendChild(btn);
    });
    updateSidebarStats();
  }

  function updatePaletteBtnStatus(qId) {
    const btn = document.getElementById(`palette-btn-${qId}`);
    if (!btn) return;

    btn.className = 'palette-btn';
    const isAnswered = state.answers[qId] !== undefined;
    const isFlagged = state.flagged.has(qId);
    const isCurrent = QUESTIONS[state.currentIndex].id === qId;

    if (isAnswered) btn.classList.add('answered');
    if (isFlagged) btn.classList.add('flagged');
    if (isCurrent) btn.classList.add('current');
  }

  function updateAllPaletteButtons() {
    QUESTIONS.forEach((q) => {
      updatePaletteBtnStatus(q.id);
    });
    updateSidebarStats();
  }

  function updateSidebarStats() {
    const answeredCount = Object.keys(state.answers).length;
    const flaggedCount = state.flagged.size;
    const remainingCount = QUESTIONS.length - answeredCount;

    answeredCountBadge.textContent = `${answeredCount}/${QUESTIONS.length}`;
    sidebarAnsweredText.textContent = answeredCount;
    sidebarFlaggedText.textContent = flaggedCount;
    sidebarRemainingText.textContent = remainingCount;
  }

  // ========================================================
  // 5. RENDER CURRENT QUESTION
  // ========================================================
  function renderQuestion(index) {
    if (index < 0 || index >= QUESTIONS.length) return;
    state.currentIndex = index;
    const q = QUESTIONS[index];

    // Meta Badges
    badgeQNum.textContent = `Soal #${q.id} dari ${QUESTIONS.length}`;
    badgeQType.textContent = q.type === 'mcq' ? 'Pilihan Ganda' : 'Benar / Salah';
    badgeQTopic.textContent = q.topic;

    // Flag Button status
    const isFlagged = state.flagged.has(q.id);
    if (isFlagged) {
      btnFlagQuestion.classList.add('flagged');
      btnToggleFlag.classList.add('active');
      flagText.textContent = 'Ditandai Ragu';
    } else {
      btnFlagQuestion.classList.remove('flagged');
      btnToggleFlag.classList.remove('active');
      flagText.textContent = 'Tandai Ragu';
    }

    // Question Text with Arabic parser
    questionText.innerHTML = formatArabicContent(q.question);

    // Render Options
    optionsContainer.innerHTML = '';
    const currentAnswer = state.answers[q.id];

    q.options.forEach((opt) => {
      const optItem = document.createElement('div');
      optItem.className = 'option-item';
      if (currentAnswer === opt.key) {
        optItem.classList.add('selected');
      }

      optItem.innerHTML = `
        <div class="option-key">${opt.key}</div>
        <div class="option-label">${formatArabicContent(opt.text)}</div>
      `;

      optItem.addEventListener('click', () => {
        selectOption(q.id, opt.key);
      });

      optionsContainer.appendChild(optItem);
    });

    // Navigation buttons state
    btnPrevQuestion.disabled = index === 0;
    btnPrevQuestion.style.opacity = index === 0 ? '0.5' : '1';

    if (index === QUESTIONS.length - 1) {
      btnNextQuestion.innerHTML = `<span>Selesaikan Ujian</span> <span>🏁</span>`;
      btnNextQuestion.className = 'btn btn-primary';
    } else {
      btnNextQuestion.innerHTML = `<span>Soal Berikutnya →</span>`;
      btnNextQuestion.className = 'btn btn-primary';
    }

    // Update Palette active indicator
    updateAllPaletteButtons();

    // Scroll active palette button into view inside drawer
    const activePalBtn = document.getElementById(`palette-btn-${q.id}`);
    if (activePalBtn) {
      activePalBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function goToQuestion(index) {
    renderQuestion(index);
  }

  function selectOption(qId, key) {
    state.answers[qId] = key;
    renderQuestion(state.currentIndex);
  }

  function toggleFlagCurrentQuestion() {
    const qId = QUESTIONS[state.currentIndex].id;
    if (state.flagged.has(qId)) {
      state.flagged.delete(qId);
    } else {
      state.flagged.add(qId);
    }
    renderQuestion(state.currentIndex);
  }

  btnFlagQuestion.addEventListener('click', toggleFlagCurrentQuestion);
  btnToggleFlag.addEventListener('click', toggleFlagCurrentQuestion);

  btnPrevQuestion.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      goToQuestion(state.currentIndex - 1);
    }
  });

  btnNextQuestion.addEventListener('click', () => {
    if (state.currentIndex < QUESTIONS.length - 1) {
      goToQuestion(state.currentIndex + 1);
    } else {
      openFinishModal();
    }
  });

  // Keyboard navigation support
  window.addEventListener('keydown', (e) => {
    if (!state.isExamRunning || finishModal.classList.contains('open')) return;

    // Left/Right Arrow
    if (e.key === 'ArrowLeft' && state.currentIndex > 0) {
      goToQuestion(state.currentIndex - 1);
    } else if (e.key === 'ArrowRight' && state.currentIndex < QUESTIONS.length - 1) {
      goToQuestion(state.currentIndex + 1);
    }

    // Shortcut A, B, C, D
    const key = e.key.toUpperCase();
    const currentQ = QUESTIONS[state.currentIndex];
    const availableKeys = currentQ.options.map(o => o.key);
    if (availableKeys.includes(key)) {
      selectOption(currentQ.id, key);
    }
  });

  // ========================================================
  // 6. FINISH MODAL
  // ========================================================
  function openFinishModal() {
    const answeredCount = Object.keys(state.answers).length;
    const flaggedCount = state.flagged.size;
    const unansweredCount = QUESTIONS.length - answeredCount;

    modalAnsweredCount.textContent = answeredCount;
    modalFlaggedCount.textContent = flaggedCount;
    modalUnansweredCount.textContent = unansweredCount;

    if (unansweredCount > 0) {
      modalDescText.innerHTML = `Masih terdapat <strong style="color: var(--danger);">${unansweredCount} soal yang belum Anda jawab</strong>! Apakah Anda yakin ingin tetap mengumpulkan ujian ini sekarang?`;
    } else if (flaggedCount > 0) {
      modalDescText.innerHTML = `Anda telah menjawab seluruh soal, namun masih ada <strong style="color: var(--accent);">${flaggedCount} soal yang bertanda ragu-ragu</strong>. Yakin ingin mengumpulkan?`;
    } else {
      modalDescText.textContent = 'Alhamdulillah! Anda telah menjawab seluruh 80 soal dengan tuntas. Siap melihat skor dan hasil evaluasi?';
    }

    finishModal.classList.add('open');
  }

  btnOpenFinishModal.addEventListener('click', openFinishModal);

  btnCancelFinish.addEventListener('click', () => {
    finishModal.classList.remove('open');
  });

  btnConfirmFinish.addEventListener('click', () => {
    finishModal.classList.remove('open');
    finishExam();
  });

  // Close modal on click outside
  finishModal.addEventListener('click', (e) => {
    if (e.target === finishModal) {
      finishModal.classList.remove('open');
    }
  });

  // ========================================================
  // 7. FINISH EXAM & EVALUATION CALCULATION
  // ========================================================
  function finishExam() {
    state.isExamRunning = false;
    clearInterval(state.timerInterval);
    state.endTime = new Date();

    // 1. Calculate Results
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;

    const topicStats = {};
    // Initialize topic tracker
    Object.values(TOPICS).forEach((tName) => {
      topicStats[tName] = { total: 0, correct: 0, wrong: 0, unanswered: 0 };
    });

    QUESTIONS.forEach((q) => {
      const studentAns = state.answers[q.id];
      const isCorrect = studentAns === q.correctAnswer;
      const isUnanswered = studentAns === undefined;

      // Update topic counter
      if (topicStats[q.topic]) {
        topicStats[q.topic].total++;
        if (isCorrect) topicStats[q.topic].correct++;
        else if (isUnanswered) topicStats[q.topic].unanswered++;
        else topicStats[q.topic].wrong++;
      }

      if (isCorrect) {
        correctCount++;
      } else if (isUnanswered) {
        unansweredCount++;
      } else {
        wrongCount++;
      }
    });

    // Score out of 100
    const finalScore = Number(((correctCount / QUESTIONS.length) * 100).toFixed(1));
    const accuracy = Number(((correctCount / QUESTIONS.length) * 100).toFixed(0));

    // Syari Grade Evaluation
    let gradeTitle = '';
    let gradeSub = '';
    let gradeBadgeColor = 'var(--primary)';

    if (finalScore >= 90) {
      gradeTitle = 'Mumtaz (ممتاز)';
      gradeSub = 'Istimewa / Sangat Memuaskan';
    } else if (finalScore >= 80) {
      gradeTitle = 'Jayyid Jiddan (جيد جداً)';
      gradeSub = 'Baik Sekali / Di Atas Rata-rata';
    } else if (finalScore >= 70) {
      gradeTitle = 'Jayyid (جيد)';
      gradeSub = 'Baik / Memenuhi Standar KKM';
    } else if (finalScore >= 60) {
      gradeTitle = 'Maqbul (مقبول)';
      gradeSub = 'Cukup / Perlu Penguatan Materi';
      gradeBadgeColor = 'var(--accent)';
    } else {
      gradeTitle = 'Rasib / Perlu Remedial (راسب)';
      gradeSub = 'Belum Tuntas / Wajib Pendalaman Fiqih';
      gradeBadgeColor = 'var(--danger)';
    }

    // Time spent calculation
    const totalDurationSeconds = Math.max(state.elapsedSeconds, 1);
    const minsSpent = Math.floor(totalDurationSeconds / 60);
    const secsSpent = totalDurationSeconds % 60;
    const timeSpentStr = minsSpent > 0 ? `${minsSpent} Menit ${secsSpent} Detik` : `${secsSpent} Detik`;

    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // 2. Render Score Card
    resultScoreNum.textContent = finalScore;
    resultSyariGrade.textContent = gradeTitle;
    resultSyariGrade.style.color = gradeBadgeColor;
    resultGradeText.textContent = gradeSub;

    resultStudentName.textContent = state.student.name;
    resultStudentClass.textContent = state.student.class;
    resultTimeSpent.textContent = timeSpentStr;
    resultDate.textContent = dateStr;

    statCorrect.textContent = correctCount;
    statWrong.textContent = wrongCount;
    statUnanswered.textContent = unansweredCount;
    statAccuracy.textContent = `${accuracy}%`;

    // Animate Circular Progress (circumference = 2 * PI * 42 ≈ 263.89)
    const circumference = 263.89;
    const offset = circumference - (finalScore / 100) * circumference;
    setTimeout(() => {
      scoreCirclePath.style.strokeDashoffset = offset;
      if (finalScore >= 75) {
        scoreCirclePath.style.stroke = 'var(--primary)';
      } else if (finalScore >= 60) {
        scoreCirclePath.style.stroke = 'var(--accent)';
      } else {
        scoreCirclePath.style.stroke = 'var(--danger)';
      }
    }, 150);

    // 3. Render Topic Diagnostic Evaluation
    renderTopicEvaluation(topicStats);

    // 4. Render All 80 Questions Review & Correction
    renderQuestionsReview('all');

    // Update Tab Counters
    tabFilterAll.textContent = `Semua (${QUESTIONS.length})`;
    tabFilterWrong.textContent = `Hanya Salah (${wrongCount})`;
    tabFilterCorrect.textContent = `Hanya Benar (${correctCount})`;
    tabFilterUnanswered.textContent = `Tidak Dijawab (${unansweredCount})`;

    // Switch view
    screenIntro.style.display = 'none';
    screenExam.style.display = 'none';
    screenResult.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ========================================================
  // 8. TOPIC EVALUATION RENDERER
  // ========================================================
  function renderTopicEvaluation(topicStats) {
    topicAnalysisContainer.innerHTML = '';

    Object.keys(topicStats).forEach((topicName) => {
      const stats = topicStats[topicName];
      const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

      let scoreClass = 'score-high';
      let progressColor = 'var(--primary)';
      let statusLabel = 'Sangat Baik';

      if (pct < 60) {
        scoreClass = 'score-low';
        progressColor = 'var(--danger)';
        statusLabel = 'Perlu Perbaikan Mendalam';
      } else if (pct < 75) {
        scoreClass = 'score-med';
        progressColor = 'var(--accent)';
        statusLabel = 'Cukup / Perlu Pengulangan';
      }

      const adviceText = TOPIC_RECOMMENDATIONS[topicName] || 'Pelajari kembali materi ini melalui buku teks atau bimbingan guru.';

      const row = document.createElement('div');
      row.className = 'topic-row';
      row.innerHTML = `
        <div class="topic-header">
          <div class="topic-name">
            <span>📚 ${topicName}</span>
            <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted); margin-left: 0.5rem;">
              (${stats.correct} benar dari ${stats.total} soal)
            </span>
          </div>
          <div class="topic-badge-score ${scoreClass}">
            ${pct}% • ${statusLabel}
          </div>
        </div>

        <div class="topic-progress-track">
          <div class="topic-progress-fill" style="width: 0%; background: ${progressColor};"></div>
        </div>

        <div class="topic-advice-box">
          <div class="topic-advice-icon">💡</div>
          <div>
            <strong>Rekomendasi Belajar:</strong> ${adviceText}
          </div>
        </div>
      `;

      topicAnalysisContainer.appendChild(row);

      // Animate progress bar fill
      setTimeout(() => {
        const fill = row.querySelector('.topic-progress-fill');
        if (fill) fill.style.width = `${pct}%`;
      }, 100);
    });
  }

  // ========================================================
  // 9. REVIEW & CORRECTION RENDERER
  // ========================================================
  function renderQuestionsReview(filter) {
    state.currentFilter = filter;
    reviewQuestionsList.innerHTML = '';

    const filteredQuestions = QUESTIONS.filter((q) => {
      const studentAns = state.answers[q.id];
      const isCorrect = studentAns === q.correctAnswer;
      const isUnanswered = studentAns === undefined;

      if (filter === 'wrong') return !isCorrect && !isUnanswered;
      if (filter === 'correct') return isCorrect;
      if (filter === 'unanswered') return isUnanswered;
      return true; // 'all'
    });

    if (filteredQuestions.length === 0) {
      reviewQuestionsList.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 1.05rem;">
          Tidak ada soal pada kategori filter ini. 👍
        </div>
      `;
      return;
    }

    filteredQuestions.forEach((q) => {
      const studentAns = state.answers[q.id];
      const isCorrect = studentAns === q.correctAnswer;
      const isUnanswered = studentAns === undefined;

      let itemClass = 'is-correct';
      let tagHtml = '<span class="review-status-tag correct">✓ Jawaban Anda Benar</span>';

      if (isUnanswered) {
        itemClass = 'is-unanswered';
        tagHtml = '<span class="review-status-tag unanswered">⚠️ Tidak Dijawab</span>';
      } else if (!isCorrect) {
        itemClass = 'is-wrong';
        tagHtml = '<span class="review-status-tag wrong">✕ Jawaban Anda Salah</span>';
      }

      const card = document.createElement('div');
      card.className = `review-item ${itemClass}`;

      let optionsHtml = '';
      q.options.forEach((opt) => {
        let optStateClass = '';
        let iconSuffix = '';

        const isThisKeyCorrect = opt.key === q.correctAnswer;
        const isThisKeyStudent = studentAns === opt.key;

        if (isThisKeyCorrect) {
          optStateClass += ' is-key-correct';
          iconSuffix = ' <span style="margin-left: auto; font-weight: 700; color: var(--success); font-size: 0.85rem;">[Kunci Benar ✓]</span>';
        }
        if (isThisKeyStudent) {
          optStateClass += ' is-student-choice';
          if (!isThisKeyCorrect) {
            iconSuffix = ' <span style="margin-left: auto; font-weight: 700; color: var(--danger); font-size: 0.85rem;">[Jawaban Anda ✕]</span>';
          }
        }

        optionsHtml += `
          <div class="review-option ${optStateClass}">
            <strong style="width: 28px; text-align: center;">${opt.key}.</strong>
            <span>${formatArabicContent(opt.text)}</span>
            ${iconSuffix}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="review-item-header">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="badge badge-qnum">Soal #${q.id}</span>
            <span class="badge badge-topic">${q.topic}</span>
            <span class="badge badge-type">${q.type === 'mcq' ? 'Pilihan Ganda' : 'Benar / Salah'}</span>
          </div>
          <div>${tagHtml}</div>
        </div>

        <div class="review-q-text">
          ${formatArabicContent(q.question)}
        </div>

        <div class="review-options-grid">
          ${optionsHtml}
        </div>

        <div class="review-explanation">
          <strong>📖 Pembahasan & Dalil Kaidah Fiqih:</strong>
          <div>${formatArabicContent(q.explanation)}</div>
        </div>
      `;

      reviewQuestionsList.appendChild(card);
    });
  }

  // Filter Tab Click Handlers
  [tabFilterAll, tabFilterWrong, tabFilterCorrect, tabFilterUnanswered].forEach((btn) => {
    btn.addEventListener('click', () => {
      [tabFilterAll, tabFilterWrong, tabFilterCorrect, tabFilterUnanswered].forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderQuestionsReview(btn.dataset.filter);
    });
  });

  // Retake Exam Button
  btnRetakeExam.addEventListener('click', () => {
    if (confirm('Apakah Anda ingin mengulang try out ini dari awal?')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      screenResult.style.display = 'none';
      screenExam.style.display = 'none';
      screenIntro.style.display = 'block';
    }
  });

});
