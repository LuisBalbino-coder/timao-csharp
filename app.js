/* Timão C# — destaque de código, quizzes e progresso salvo no navegador */

(function () {
  'use strict';

  /* ---------------- destaque de sintaxe C# ---------------- */

  const KEYWORDS = new Set([
    'using', 'namespace', 'class', 'public', 'private', 'protected', 'internal',
    'static', 'readonly', 'const', 'sealed', 'abstract', 'virtual', 'override',
    'new', 'return', 'if', 'else', 'switch', 'case', 'default', 'break', 'continue',
    'for', 'foreach', 'while', 'do', 'in', 'out', 'ref', 'this', 'base',
    'void', 'true', 'false', 'null', 'async', 'await', 'get', 'set', 'is', 'as',
    'try', 'catch', 'throw', 'finally', 'where', 'select'
  ]);

  const TYPES = new Set([
    'string', 'int', 'double', 'decimal', 'float', 'bool', 'char', 'var',
    'long', 'object', 'List', 'Console', 'Jogador', 'Time', 'Task'
  ]);

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlight(code) {
    const re = /(\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)/g;
    let out = '';
    let last = 0;
    let m;

    while ((m = re.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));

      if (m[1]) {
        out += '<span class="tok-com">' + esc(m[1]) + '</span>';
      } else if (m[2]) {
        out += '<span class="tok-str">' + esc(m[2]) + '</span>';
      } else if (m[3]) {
        out += '<span class="tok-num">' + esc(m[3]) + '</span>';
      } else {
        const word = m[4];
        if (KEYWORDS.has(word)) {
          out += '<span class="tok-kw">' + word + '</span>';
        } else if (TYPES.has(word)) {
          out += '<span class="tok-type">' + word + '</span>';
        } else {
          out += esc(word);
        }
      }

      last = m.index + m[0].length;
    }

    out += esc(code.slice(last));
    return out;
  }

  document.querySelectorAll('pre code.csharp').forEach(function (block) {
    block.innerHTML = highlight(block.textContent);
  });

  /* ---------------- progresso ---------------- */

  const STORAGE_KEY = 'timao-csharp:progresso:v2';
  const lessons = Array.from(document.querySelectorAll('.lesson'));
  // total de módulos do site inteiro (16 fundamentos + 4 games + 3 web + 3 automação)
  const total = 26;
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');
  let done = new Set();

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(saved)) done = new Set(saved.map(String));
  } catch (err) {
    done = new Set();
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(done)));
    } catch (err) {
      /* modo privado / storage bloqueado: o site continua funcionando */
    }
  }

  function renderProgress() {
    const count = done.size;
    if (fill) fill.style.width = Math.round((count / total) * 100) + '%';
    if (label) label.textContent = count + '/' + total;

    const resumo = document.querySelector('.reset-box p');
    if (resumo) {
      resumo.textContent =
        'Seu progresso (' + count + ' de ' + total + ' m\u00f3dulos) est\u00e1 salvo neste navegador.';
    }

    lessons.forEach(function (lesson) {
      const id = lesson.dataset.lesson;
      const isDone = done.has(id);
      lesson.classList.toggle('is-done', isDone);

      const quiz = lesson.querySelector('.quiz');
      if (!quiz) return;

      const opts = Array.from(quiz.querySelectorAll('.opt'));
      const fb = quiz.querySelector('.quiz__fb');

      if (isDone) {
        opts.forEach(function (o) {
          o.disabled = true;
          o.classList.toggle('is-right', o.dataset.correct === 'true');
        });
        if (fb && !fb.textContent) {
          fb.textContent = 'Módulo concluído. Boa, Fiel!';
          fb.className = 'quiz__fb ok';
        }
      }
    });
  }

  function complete(lessonEl, fb) {
    const id = lessonEl.dataset.lesson;
    done.add(id);
    save();
    if (fb) {
      fb.textContent = 'Isso! Módulo concluído — ' + done.size + ' de ' + total + '.';
      fb.className = 'quiz__fb ok';
    }
    renderProgress();
  }

  /* ---------------- quizzes ---------------- */

  document.querySelectorAll('.quiz').forEach(function (quiz) {
    const lessonEl = quiz.closest('.lesson');
    const fb = quiz.querySelector('.quiz__fb');
    const opts = Array.from(quiz.querySelectorAll('.opt'));

    opts.forEach(function (opt) {
      opt.addEventListener('click', function () {
        if (opt.disabled) return;

        const correct = opt.dataset.correct === 'true';

        if (correct) {
          opt.classList.add('is-right');
          complete(lessonEl, fb);
        } else {
          opt.classList.add('is-wrong');
          opt.disabled = true;
          if (fb) {
            fb.textContent = 'Não é essa. Releia o exemplo acima e tente de novo.';
            fb.className = 'quiz__fb no';
          }
        }
      });
    });
  });

  /* ---------------- zerar progresso ---------------- */

  const resetBtn = document.getElementById('reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      done.clear();
      save();

      document.querySelectorAll('.quiz').forEach(function (quiz) {
        const fb = quiz.querySelector('.quiz__fb');
        if (fb) {
          fb.textContent = '';
          fb.className = 'quiz__fb';
        }
        quiz.querySelectorAll('.opt').forEach(function (o) {
          o.disabled = false;
          o.classList.remove('is-right', 'is-wrong');
        });
      });

      renderProgress();
      if (resetBtn) resetBtn.blur();
    });
  }

  renderProgress();

  /* ---------------- ano no rodapé (opcional) ---------------- */
  const foot = document.querySelector('.foot__small');
  if (foot) {
    foot.insertAdjacentHTML('beforeend', ' · ' + new Date().getFullYear());
  }
})();
