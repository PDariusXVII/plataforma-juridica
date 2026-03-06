// components/topicoView.js
// Renderiza as abas: Aprender, Quiz e Progresso

// ─── APRENDER ────────────────────────────────────────────────────────
function renderAprender() {
  const d  = DA[currentTopic];
  const va = document.getElementById('view-area');

  va.innerHTML = `
    <div class="notion-header">
      <div class="notion-icon">${d.icon}</div>
      <div class="notion-title">${currentTopic}</div>
      <div class="notion-meta">
        <span class="meta-tag tag-b">Direito Administrativo</span>
        <span class="meta-tag tag-g">${d.mapa.length} subtópicos</span>
        <span class="meta-tag tag-a">${d.flashcards.length} flashcards</span>
      </div>
    </div>

    <div class="notion-section">
      <div class="ns-label">📚 Resumo</div>
      <div class="callout">${d.aprendizado}</div>
    </div>

    <div class="notion-section">
      <div class="ns-label">🗺️ Tópicos do Mapa Mental</div>
      <div class="mapa-list">
        ${d.mapa.map(m => `<div class="mapa-item" onclick="switchTab('mapa')">${m}</div>`).join('')}
      </div>
    </div>

    <div class="notion-section">
      <div class="ns-label">🤖 Explicação com IA</div>
      <div class="ai-box">
        <div class="ai-box-head">
          <div class="ai-dot"></div>
          <span>Claude IA</span>
        </div>
        <div class="ai-response" id="ai-resp">
          Clique no botão para a IA explicar este tópico de forma personalizada para concursos.
        </div>
        <button class="ai-btn" id="ai-btn" onclick="askAI()">✨ Explicar para concurso</button>
      </div>
    </div>`;

  // Marca tópico como "em progresso"
  if (studyProgress[currentTopic] < 2) {
    studyProgress[currentTopic] = 2;
    updateSidebarProgress();
    renderSidebar(document.getElementById('search-input').value);
  }
}

// ─── IA ──────────────────────────────────────────────────────────────
async function askAI() {
  const btn  = document.getElementById('ai-btn');
  const resp = document.getElementById('ai-resp');
  btn.disabled  = true;
  btn.textContent = '⏳ Gerando...';
  resp.textContent = '';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Você é professor de concursos públicos, especialista em Direito Administrativo.
Explique o tópico "${currentTopic}" de forma clara, direta e focada no que mais cai em provas.
Use linguagem simples. Destaque os pontos mais cobrados em concursos.
Máximo 200 palavras. Sem markdown.`
        }]
      })
    });

    const data = await res.json();
    const txt  = data.content.map(i => i.text || '').join('');
    resp.textContent = txt;
    btn.textContent  = '🔄 Gerar novamente';
  } catch (e) {
    resp.textContent = 'Erro ao conectar com a IA. Tente novamente.';
    btn.textContent  = '✨ Tentar novamente';
  }

  btn.disabled = false;
}

// ─── QUIZ ────────────────────────────────────────────────────────────
function renderQuiz() {
  const d   = DA[currentTopic];
  const qs  = d.quiz;
  const answered = Object.keys(quizAnswered[currentTopic] || {}).length;
  const correct  = Object.values(quizAnswered[currentTopic] || {})
    .filter((v, k) => v === qs[k]?.gabarito).length;

  let html = `
    <div class="quiz-header">
      <h2>${d.icon} Questões — ${currentTopic}</h2>
      <p>Simulado no estilo de bancas como CESPE, FCC e VUNESP</p>
    </div>`;

  if (answered > 0) {
    html += `
      <div class="quiz-score">
        <div class="score-num">${correct}/${answered}</div>
        <div class="score-info">
          <p>acertos até agora</p>
          <span>${Math.round(correct / answered * 100)}% de aproveitamento</span>
        </div>
      </div>`;
  }

  qs.forEach((q, qi) => {
    const ans  = quizAnswered[currentTopic]?.[qi];
    const done = ans !== undefined;

    html += `
      <div class="qcard">
        <div class="qnum">Questão ${qi + 1}</div>
        <div class="qtext">${q.q}</div>
        <div class="qopts">`;

    q.opts.forEach((opt, oi) => {
      let cls = '';
      if (done) {
        if (oi === q.gabarito)              cls = 'correct';
        else if (oi === ans && ans !== q.gabarito) cls = 'wrong';
      }
      html += `
        <button class="qopt ${cls}" ${done ? 'disabled' : ''} onclick="answerQ(${qi}, ${oi})">
          <span>${String.fromCharCode(65 + oi)})</span>${opt}
        </button>`;
    });

    const fbClass = done ? (ans === q.gabarito ? 'ok' : 'no') : '';
    const fbText  = done
      ? (ans === q.gabarito ? '✅ Correto! ' : '❌ Errado. ') + q.exp
      : '';

    html += `
        </div>
        <div class="qfb ${done ? 'show' : ''} ${fbClass}">${fbText}</div>
      </div>`;
  });

  document.getElementById('view-area').innerHTML = html;
}

function answerQ(qi, oi) {
  if (!quizAnswered[currentTopic]) quizAnswered[currentTopic] = {};
  quizAnswered[currentTopic][qi] = oi;
  renderQuiz();
}

// ─── PROGRESSO ───────────────────────────────────────────────────────
function renderProgress() {
  const topics   = Object.keys(DA);
  const done     = topics.filter(t => studyProgress[t] >= 3).length;
  const started  = topics.filter(t => studyProgress[t] >= 1).length;
  const totalQ   = topics.reduce((s, t) => s + DA[t].quiz.length, 0);
  const doneQ    = topics.reduce((s, t) => s + Object.keys(quizAnswered[t] || {}).length, 0);
  const corrQ    = topics.reduce((s, t) =>
    s + Object.values(quizAnswered[t] || {}).filter((v, k) => v === DA[t].quiz[k]?.gabarito).length, 0);

  const va = document.getElementById('view-area');
  va.innerHTML = `
    <div style="font-family:Syne,sans-serif;font-size:20px;font-weight:700;color:var(--white);margin-bottom:20px">📊 Painel de Progresso</div>

    <div class="prog-panel">
      <div class="prog-card">
        <div class="prog-card-icon">📚</div>
        <div class="prog-card-title">Tópicos concluídos</div>
        <div class="prog-card-val">${done}</div>
        <div class="prog-card-sub">de ${topics.length} tópicos</div>
        <div class="mini-prog"><div class="mini-fill" style="width:${Math.round(done / topics.length * 100)}%"></div></div>
      </div>
      <div class="prog-card">
        <div class="prog-card-icon">🎯</div>
        <div class="prog-card-title">Em progresso</div>
        <div class="prog-card-val">${started}</div>
        <div class="prog-card-sub">tópicos iniciados</div>
        <div class="mini-prog"><div class="mini-fill" style="width:${Math.round(started / topics.length * 100)}%;background:linear-gradient(90deg,var(--acc3),var(--acc))"></div></div>
      </div>
      <div class="prog-card">
        <div class="prog-card-icon">📝</div>
        <div class="prog-card-title">Questões respondidas</div>
        <div class="prog-card-val">${doneQ}</div>
        <div class="prog-card-sub">de ${totalQ} questões</div>
        <div class="mini-prog"><div class="mini-fill" style="width:${totalQ ? Math.round(doneQ / totalQ * 100) : 0}%;background:linear-gradient(90deg,var(--acc5),var(--acc))"></div></div>
      </div>
      <div class="prog-card">
        <div class="prog-card-icon">⭐</div>
        <div class="prog-card-title">Aproveitamento</div>
        <div class="prog-card-val">${doneQ ? Math.round(corrQ / doneQ * 100) : 0}%</div>
        <div class="prog-card-sub">${corrQ} acertos no quiz</div>
        <div class="mini-prog"><div class="mini-fill" style="width:${doneQ ? Math.round(corrQ / doneQ * 100) : 0}%;background:linear-gradient(90deg,var(--acc4),var(--acc2))"></div></div>
      </div>
    </div>

    <div style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:12px;display:flex;align-items:center;gap:8px">
      Detalhes por tópico
      <span style="flex:1;height:1px;background:var(--border);display:block"></span>
    </div>

    <div class="topic-prog-list">
      ${topics.map(t => {
        const p    = studyProgress[t] || 0;
        const pct  = p >= 3 ? 100 : p >= 2 ? 60 : p >= 1 ? 20 : 0;
        const stars = p >= 3 ? '⭐⭐⭐' : p >= 2 ? '⭐⭐' : p >= 1 ? '⭐' : '☆☆☆';
        return `
          <div class="tp-row" onclick="selectTopic('${t}');switchTab('aprender')">
            <span class="tp-icon">${DA[t].icon}</span>
            <span class="tp-name">${t}</span>
            <div class="tp-bar"><div class="tp-fill" style="width:${pct}%"></div></div>
            <span class="tp-pct">${pct}%</span>
            <span class="tp-stars">${stars}</span>
          </div>`;
      }).join('')}
    </div>`;
}
