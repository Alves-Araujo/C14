(() => {
  "use strict";

  /* ================= Utilidades ================= */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const LETRAS = "ABCDEFGH";
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const store = {
    get(k, d) {
      try { const v = localStorage.getItem("c14:" + k); return v == null ? d : JSON.parse(v); }
      catch (e) { return d; }
    },
    set(k, v) {
      try { localStorage.setItem("c14:" + k, JSON.stringify(v)); } catch (e) { /* armazenamento indisponível */ }
    }
  };

  const TOPICOS = Object.fromEntries(RESUMO.map((t, i) => [t.id, { ...t, n: i + 1 }]));
  const shortName = {
    fundamentos: "Fundamentos", maven: "Maven", git: "Git", testes: "Testes", unidade: "JUnit",
    mock: "Mock", tdd: "TDD", devops: "DevOps", agil: "Ágil", requisitos: "Requisitos", refactoring: "Refactoring"
  };

  const ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5v-2z"/><path d="M8 7h7M8 11h5"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 10 17l9-10"/></svg>',
    x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>'
  };

  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const pad = (n) => String(n).padStart(2, "0");

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 2600);
  }

  /* ================= Realce de sintaxe Java ================= */
  function highlight(src) {
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const re = /(\/\/.*$)|("(?:\\.|[^"\\])*")|(@\w+)|\b(public|private|protected|class|interface|void|new|return|static|final|this|int|boolean|double|float|long|char|if|else|for|while|import|package|extends|implements|throws|throw|try|catch|null|true|false)\b|\b([A-Z]\w*)\b|\b(\d+(?:\.\d+)?)\b/gm;
    let out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      const cls = m[1] ? "com" : m[2] ? "str" : m[3] ? "ann" : m[4] ? "kw" : m[5] ? "type" : "num";
      out += `<span class="tk-${cls}">${esc(m[0])}</span>`;
      last = re.lastIndex;
    }
    return out + esc(src.slice(last));
  }

  /* ================= Animações de entrada ================= */
  const io = "IntersectionObserver" in window && !reduceMotion
    ? new IntersectionObserver((entries) => {
        entries.filter((e) => e.isIntersecting).forEach((e, i) => {
          e.target.style.setProperty("--d", Math.min(i, 6) * 60 + "ms");
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 })
    : null;

  function observe(root) {
    $$(".reveal:not(.in)", root).forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  }

  function countUp(el) {
    const target = +el.dataset.count;
    if (reduceMotion) { el.textContent = target; return; }
    const t0 = performance.now(), dur = 1300;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ================= Confete ================= */
  function confetti() {
    if (reduceMotion) return;
    const c = $("#confetti"), ctx = c.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    c.width = innerWidth * dpr; c.height = innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const cores = ["#7c5cff", "#22d3ee", "#f472b6", "#34d399", "#fbbf24"];
    const parts = Array.from({ length: 160 }, () => ({
      x: innerWidth / 2 + (Math.random() - 0.5) * 120, y: innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 16, vy: Math.random() * -14 - 4,
      s: Math.random() * 7 + 4, r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
      c: cores[(Math.random() * cores.length) | 0]
    }));
    const t0 = performance.now();
    (function frame(t) {
      const el = t - t0;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach((p) => {
        p.vy += 0.38; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.globalAlpha = Math.max(0, 1 - el / 2800);
        ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        ctx.restore();
      });
      if (el < 2800) requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, innerWidth, innerHeight);
    })(t0);
  }

  /* ================= Pílulas deslizantes (nav e segmented) ================= */
  function movePill(container) {
    const pill = container.querySelector(".nav-pill, .seg-pill");
    const active = container.querySelector(".active");
    if (!pill || !active) return;
    const cr = container.getBoundingClientRect(), ar = active.getBoundingClientRect();
    pill.style.width = ar.width + "px";
    pill.style.transform = `translateX(${ar.left - cr.left - container.clientLeft + container.scrollLeft}px)`;
  }
  const refreshPills = () => $$(".nav, .seg").forEach(movePill);
  addEventListener("resize", refreshPills);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshPills);

  function segmented(el, onPick) {
    el.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b || b.classList.contains("active")) return;
      $$("button", el).forEach((x) => x.classList.toggle("active", x === b));
      movePill(el);
      onPick(b.dataset.id);
    });
    requestAnimationFrame(() => movePill(el));
  }

  /* ================= Tema ================= */
  const themeBtn = $("#themeBtn");
  themeBtn.addEventListener("click", () => {
    const atual = document.documentElement.dataset.theme
      || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const novo = atual === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = novo;
    store.set("tema", novo);
  });

  // gradiente usado pelos anéis de progresso
  document.body.insertAdjacentHTML("afterbegin",
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--accent)"/><stop offset="1" style="stop-color:var(--accent-2)"/></linearGradient></defs></svg>');

  const ring = (pct, label) =>
    `<div class="ring" data-p="${pct}"><svg viewBox="0 0 36 36"><circle class="track" cx="18" cy="18" r="15.9155"/><circle class="bar" cx="18" cy="18" r="15.9155" pathLength="100"/></svg><span>${label ?? pct + "%"}</span></div>`;
  const animateRings = (root) => requestAnimationFrame(() => requestAnimationFrame(() =>
    $$(".ring", root).forEach((r) => r.style.setProperty("--p", r.dataset.p))));

  /* ================= Componente: questão ================= */
  function questionHTML(q, num, tags) {
    return `
<article class="card q-card reveal">
  <div class="q-head">
    <span class="q-num">${pad(num)}</span>
    ${tags.map((t) => `<span class="tag${t.cls ? " " + t.cls : ""}"${t.h != null ? ` style="--h:${t.h}"` : ""}>${t.txt}</span>`).join("")}
    <span class="status"></span>
  </div>
  <div class="q-text">${q.enunciado}</div>
  ${q.codigo ? `<pre class="code"><code>${highlight(q.codigo)}</code></pre>` : ""}
  <ol class="opts">
    ${q.opcoes.map((o, k) => `<li><button class="opt" data-k="${k}"><span class="letter">${LETRAS[k]}</span><span class="txt">${o}</span></button></li>`).join("")}
  </ol>
  <div class="explain"><div>
    <div class="explain-inner">
      <span class="lbl">Gabarito: ${LETRAS[q.correta]}</span>${q.explicacao}
      ${q.atencao ? `<div class="attn"><b>Atenção:</b> ${q.atencao}</div>` : ""}
    </div>
    <div class="q-actions"><button class="link-btn" data-reset>↺ Refazer questão</button></div>
  </div></div>
</article>`;
  }

  function markAnswer(card, q, k, animate) {
    card.classList.toggle("no-anim", !animate);
    card.classList.remove("is-ok", "is-bad", "peek");
    const ok = k === q.correta;
    card.classList.add("answered", ok ? "is-ok" : "is-bad");
    $(".status", card).innerHTML = ok ? ICON.check + " Acertou" : ICON.x + " Errou";
    $$(".opt", card).forEach((b, j) => {
      b.disabled = true;
      b.classList.remove("correct", "wrong", "dim");
      if (j === q.correta) b.classList.add("correct");
      else if (j === k) b.classList.add("wrong");
      else b.classList.add("dim");
    });
  }

  function peekAnswer(card, q) {
    card.classList.add("answered", "peek", "no-anim");
    $(".status", card).textContent = "Gabarito";
    $$(".opt", card).forEach((b, j) => {
      b.disabled = true;
      b.classList.add(j === q.correta ? "correct" : "dim");
    });
  }

  function clearAnswer(card) {
    card.classList.remove("answered", "is-ok", "is-bad", "peek", "no-anim");
    $(".status", card).textContent = "";
    $$(".opt", card).forEach((b) => { b.disabled = false; b.classList.remove("correct", "wrong", "dim"); });
  }

  /* ================= INÍCIO ================= */
  function progressoListas() {
    const resp = store.get("listas", {});
    return LISTAS.map((l) => {
      const r = resp[l.id] || {};
      const feitas = Object.keys(r).length;
      const acertos = Object.entries(r).filter(([i, k]) => l.questoes[i] && l.questoes[i].correta === k).length;
      return { l, feitas, acertos, total: l.questoes.length };
    });
  }

  function renderInicio() {
    const el = $("#view-inicio");
    const totalListas = LISTAS.reduce((s, l) => s + l.questoes.length, 0);
    const prog = progressoListas();
    const ex = store.get("ex", {});
    const exFeitas = Object.keys(ex).length;
    const exAcertos = Object.entries(ex).filter(([i, k]) => EXERCICIOS[i] && EXERCICIOS[i].correta === k).length;

    const words = ["Estude", "C14", "do", "<span class='grad'>commit</span>", "ao", "<span class='grad'>deploy</span>."];
    el.innerHTML = `
<div class="hero">
  <span class="eyebrow">Inatel · Engenharia de Software</span>
  <h1>${words.map((w, i) => `<span class="word" style="--i:${i}">${w}</span>`).join(" ")}</h1>
  <p class="lead">Listas com gabarito comentado, resumo de todas as aulas, ${EXERCICIOS.length} exercícios novos, simulado e flashcards. Tudo em um lugar só.</p>
  <div class="hero-cta">
    <a class="btn primary" href="#exercicios">${ICON.bolt} Começar um simulado</a>
    <a class="btn" href="#resumo">${ICON.book} Ler o resumo</a>
  </div>
</div>

<div class="stats">
  <div class="card stat reveal"><b data-count="${totalListas}">0</b><span>questões das listas</span></div>
  <div class="card stat reveal"><b data-count="${EXERCICIOS.length}">0</b><span>exercícios inéditos</span></div>
  <div class="card stat reveal"><b data-count="${FLASHCARDS.length}">0</b><span>flashcards</span></div>
  <div class="card stat reveal"><b data-count="${RESUMO.length}">0</b><span>tópicos resumidos</span></div>
</div>

<div class="home-grid">
  <a class="card home-card reveal" href="#listas" style="--c1:#7c5cff;--c2:#a78bfa">
    <span class="ico">${ICON.list}</span>
    <h3>Listas</h3>
    <p>As 3 listas do professor (Git e testes · TDD · DevOps) com correção na hora e explicação de cada resposta.</p>
    <span class="go">Abrir listas ${ICON.arrow}</span>
  </a>
  <a class="card home-card reveal" href="#resumo" style="--c1:#0891b2;--c2:#22d3ee">
    <span class="ico">${ICON.book}</span>
    <h3>Resumo</h3>
    <p>Do Maven à refatoração: as aulas condensadas, com pegadinhas de prova destacadas e busca.</p>
    <span class="go">Ler resumo ${ICON.arrow}</span>
  </a>
  <a class="card home-card reveal" href="#exercicios" style="--c1:#db2777;--c2:#f472b6">
    <span class="ico">${ICON.bolt}</span>
    <h3>Exercícios</h3>
    <p>Pratique por tópico, faça um simulado com questões sorteadas ou revise com flashcards.</p>
    <span class="go">Praticar ${ICON.arrow}</span>
  </a>
</div>

<div class="card progress-home reveal">
  <h3>Seu progresso</h3>
  <div class="rings">
    ${prog.map((p) => `
      <div class="ring-item">${ring(Math.round((p.feitas / p.total) * 100))}
        <div><b>${p.l.titulo}</b><small>${p.feitas}/${p.total} feitas · ${p.acertos} acertos</small></div>
      </div>`).join("")}
    <div class="ring-item">${ring(Math.round((exFeitas / EXERCICIOS.length) * 100))}
      <div><b>Exercícios</b><small>${exFeitas}/${EXERCICIOS.length} feitos · ${exAcertos} acertos</small></div>
    </div>
  </div>
</div>`;

    observe(el);
    $$("[data-count]", el).forEach(countUp);
    animateRings(el);
    $$(".home-card", el).forEach((c) => c.addEventListener("pointermove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", e.clientX - r.left + "px");
      c.style.setProperty("--my", e.clientY - r.top + "px");
    }));
  }

  /* ================= LISTAS ================= */
  let listaAtual = store.get("listaAtual", "l1");
  let gabaritoAberto = false;

  function renderListas() {
    const el = $("#view-listas");
    if (!LISTAS.some((l) => l.id === listaAtual)) listaAtual = "l1";
    el.innerHTML = `
<div class="page-head reveal">
  <span class="eyebrow">Listas do professor</span>
  <h2>Listas de exercícios</h2>
  <p>Clique em uma alternativa para responder. A correção e a explicação aparecem na hora, e o progresso fica salvo neste navegador.</p>
</div>
<div class="toolbar reveal">
  <div class="seg" id="segListas">
    ${LISTAS.map((l) => `<button data-id="${l.id}" class="${l.id === listaAtual ? "active" : ""}">${l.titulo}<small>${l.questoes.length} questões</small></button>`).join("")}
    <span class="seg-pill"></span>
  </div>
  <div style="display:flex;gap:8px;flex-wrap:wrap">
    <button class="btn" id="btnGabarito">Mostrar gabarito</button>
    <button class="btn ghost" id="btnRecomecar">Recomeçar lista</button>
  </div>
</div>
<div id="listaBody"></div>`;

    segmented($("#segListas", el), (id) => {
      listaAtual = id; store.set("listaAtual", id);
      gabaritoAberto = false;
      showLista(true);
    });
    $("#btnGabarito", el).addEventListener("click", () => { gabaritoAberto = !gabaritoAberto; showLista(false); });
    $("#btnRecomecar", el).addEventListener("click", () => {
      const resp = store.get("listas", {});
      delete resp[listaAtual];
      store.set("listas", resp);
      gabaritoAberto = false;
      showLista(false);
      toast("Lista reiniciada");
    });
    showLista(false);
    observe(el);
  }

  function showLista(scrollTop) {
    const lista = LISTAS.find((l) => l.id === listaAtual);
    const body = $("#listaBody");
    $("#btnGabarito").textContent = gabaritoAberto ? "Esconder gabarito" : "Mostrar gabarito";
    body.innerHTML = `
<div class="card list-summary">
  <div class="meta"><h3>${lista.titulo}</h3><p>${lista.tema}</p></div>
  <div class="bar-wrap">
    <div class="bar-label"><span>Progresso</span><b class="js-feitas"></b></div>
    <div class="progress"><i class="js-bar"></i></div>
  </div>
  <div class="score-pill"><span class="ok js-ok"></span><span class="bad js-bad"></span></div>
</div>
<div class="q-list">
  ${lista.questoes.map((q, i) => questionHTML(q, i + 1, [{ txt: q.pts + " pts", cls: "pts" }, { txt: q.tag }])).join("")}
</div>`;

    const cards = $$(".q-card", body);
    const salvar = () => store.get("listas", {});
    const resp = salvar()[lista.id] || {};

    cards.forEach((card, i) => {
      const q = lista.questoes[i];
      if (resp[i] != null) markAnswer(card, q, resp[i], false);
      else if (gabaritoAberto) peekAnswer(card, q);

      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-reset]")) {
          const all = salvar(); if (all[lista.id]) delete all[lista.id][i]; store.set("listas", all);
          clearAnswer(card); atualizar(); return;
        }
        const b = e.target.closest(".opt");
        if (!b || b.disabled) return;
        const k = +b.dataset.k;
        const all = salvar(); (all[lista.id] = all[lista.id] || {})[i] = k; store.set("listas", all);
        markAnswer(card, q, k, true);
        atualizar(true);
      });
    });

    function atualizar(fromAnswer) {
      const r = salvar()[lista.id] || {};
      const feitas = Object.keys(r).length;
      const ok = Object.entries(r).filter(([i, k]) => lista.questoes[i].correta === k).length;
      $(".js-feitas", body).textContent = `${feitas}/${lista.questoes.length}`;
      $(".js-bar", body).style.width = (feitas / lista.questoes.length) * 100 + "%";
      $(".js-ok", body).textContent = `${ok} certas`;
      $(".js-bad", body).textContent = `${feitas - ok} erradas`;
      if (fromAnswer && feitas === lista.questoes.length) {
        const pct = Math.round((ok / feitas) * 100);
        toast(`${lista.titulo} concluída: ${ok}/${feitas} (${pct}%)`);
        if (pct >= 70) confetti();
      }
    }
    atualizar(false);
    observe(body);
    if (scrollTop) scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  /* ================= RESUMO ================= */
  function renderResumo() {
    const el = $("#view-resumo");
    el.innerHTML = `
<div class="page-head reveal">
  <span class="eyebrow">Teoria</span>
  <h2>Resumo das aulas</h2>
  <p>As 12 aulas condensadas em ${RESUMO.length} tópicos. Os quadros amarelos marcam as <b>pegadinhas</b> que mais aparecem nas listas.</p>
</div>
<div class="resumo-layout">
  <aside class="card toc" id="toc">
    <label class="search">${ICON.search}<input id="busca" type="search" placeholder="Buscar no resumo…" autocomplete="off"></label>
    ${RESUMO.map((t, i) => `<a href="#resumo" data-t="${t.id}" style="--h:${t.hue}"><span class="dot">${i + 1}</span><span class="label">${t.titulo}</span></a>`).join("")}
  </aside>
  <div class="topics">
    ${RESUMO.map((t, i) => `
    <section class="card topic reveal" id="t-${t.id}" style="--h:${t.hue}">
      <div class="topic-head">
        <div class="topic-num">${i + 1}</div>
        <div><small>${t.aula}</small><h3>${t.titulo}</h3><p>${t.intro}</p></div>
      </div>
      <div class="topic-body">${t.html}</div>
    </section>`).join("")}
    <div class="card empty" id="semResultado" hidden>Nada encontrado para essa busca.</div>
  </div>
</div>`;

    const toc = $("#toc", el);
    const links = $$("a", toc);
    const secoes = $$(".topic", el);
    const originais = secoes.map((s) => $(".topic-body", s).innerHTML);

    toc.addEventListener("click", (e) => {
      const a = e.target.closest("a[data-t]");
      if (!a) return;
      e.preventDefault();
      $("#t-" + a.dataset.t).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });

    const setActive = (id) => {
      links.forEach((a) => a.classList.toggle("active", a.dataset.t === id));
      const a = links.find((x) => x.dataset.t === id);
      if (a && toc.scrollWidth > toc.clientWidth) toc.scrollTo({ left: a.offsetLeft - 12, behavior: "smooth" });
    };
    if ("IntersectionObserver" in window) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id.slice(2)); });
      }, { rootMargin: "-25% 0px -65% 0px" });
      secoes.forEach((s) => spy.observe(s));
    }
    setActive(RESUMO[0].id);

    let timer;
    $("#busca", el).addEventListener("input", (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => buscar(e.target.value.trim()), 120);
    });

    function buscar(termo) {
      const q = norm(termo);
      let algum = false;
      secoes.forEach((s, i) => {
        const body = $(".topic-body", s);
        body.innerHTML = originais[i];
        const hit = !q || norm(s.textContent).includes(q);
        s.classList.toggle("hidden", !hit);
        links[i].classList.toggle("hidden", !hit);
        if (hit) { algum = true; s.classList.add("in"); }
        if (hit && q.length >= 2) marcar(body, q);
      });
      $("#semResultado", el).hidden = algum;
      const topo = $(".topics", el).getBoundingClientRect().top + scrollY - 90;
      if (scrollY > topo) scrollTo({ top: topo, behavior: reduceMotion ? "auto" : "smooth" });
    }

    function marcar(root, q) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((n) => {
        const txt = n.nodeValue, low = norm(txt);
        let idx = low.indexOf(q);
        if (idx < 0) return;
        const frag = document.createDocumentFragment();
        let last = 0;
        while (idx >= 0) {
          frag.append(txt.slice(last, idx));
          const m = document.createElement("mark");
          m.textContent = txt.slice(idx, idx + q.length);
          frag.append(m);
          last = idx + q.length;
          idx = low.indexOf(q, last);
        }
        frag.append(txt.slice(last));
        n.replaceWith(frag);
      });
    }

    observe(el);
  }

  /* ================= EXERCÍCIOS ================= */
  let exModo = store.get("exModo", "praticar");
  let exFiltro = store.get("exFiltro", "todos");

  function chipsTopicos(sel, contar) {
    const ids = ["todos", ...RESUMO.map((t) => t.id)];
    return ids.map((id) => {
      const n = contar(id);
      if (!n) return "";
      const h = id === "todos" ? 255 : TOPICOS[id].hue;
      return `<button class="chip${id === sel ? " active" : ""}" data-f="${id}" style="--h:${h}">${id === "todos" ? "Todos" : shortName[id]}<span class="n">${n}</span></button>`;
    }).join("");
  }
  const contarEx = (id) => id === "todos" ? EXERCICIOS.length : EXERCICIOS.filter((q) => q.topico === id).length;
  const contarFc = (id) => id === "todos" ? FLASHCARDS.length : FLASHCARDS.filter((c) => c.topico === id).length;

  function renderExercicios() {
    const el = $("#view-exercicios");
    el.innerHTML = `
<div class="page-head reveal">
  <span class="eyebrow">Feitos com base no material</span>
  <h2>Exercícios</h2>
  <p>${EXERCICIOS.length} questões inéditas no estilo das listas, cobrindo todas as aulas. Escolha um modo:</p>
</div>
<div class="toolbar reveal">
  <div class="seg" id="segModo">
    <button data-id="praticar" class="${exModo === "praticar" ? "active" : ""}">Praticar<small>por tópico</small></button>
    <button data-id="simulado" class="${exModo === "simulado" ? "active" : ""}">Simulado<small>uma por vez</small></button>
    <button data-id="flashcards" class="${exModo === "flashcards" ? "active" : ""}">Flashcards<small>${FLASHCARDS.length} cartões</small></button>
    <span class="seg-pill"></span>
  </div>
</div>
<div id="exBody"></div>`;
    segmented($("#segModo", el), (id) => { exModo = id; store.set("exModo", id); showModo(); });
    showModo();
    observe(el);
  }

  function showModo() {
    document.onkeydown = null;
    ({ praticar: modoPraticar, simulado: modoSimuladoSetup, flashcards: modoFlashcards })[exModo]();
  }

  /* ----- Praticar ----- */
  function modoPraticar() {
    const body = $("#exBody");
    const doFiltro = () => EXERCICIOS.map((q, i) => ({ q, i })).filter((x) => exFiltro === "todos" || x.q.topico === exFiltro);

    body.innerHTML = `
<div class="filters" id="filtros">${chipsTopicos(exFiltro, contarEx)}</div>
<div class="card list-summary">
  <div class="meta"><h3 class="js-titulo"></h3><p>Respostas salvas neste navegador.</p></div>
  <div class="bar-wrap">
    <div class="bar-label"><span>Progresso</span><b class="js-feitas"></b></div>
    <div class="progress"><i class="js-bar"></i></div>
  </div>
  <div class="score-pill"><span class="ok js-ok"></span><span class="bad js-bad"></span></div>
  <button class="btn ghost" id="exReset">Recomeçar</button>
</div>
<div class="q-list" id="exLista"></div>`;

    const lista = $("#exLista", body);

    function desenhar() {
      const itens = doFiltro();
      const resp = store.get("ex", {});
      $(".js-titulo", body).textContent = exFiltro === "todos" ? "Todos os tópicos" : TOPICOS[exFiltro].titulo;
      lista.innerHTML = itens.map((x, n) => {
        const t = TOPICOS[x.q.topico];
        return questionHTML(x.q, n + 1, [{ txt: shortName[x.q.topico], cls: "", h: t.hue }]);
      }).join("");
      $$(".q-card", lista).forEach((card, n) => {
        const { q, i } = itens[n];
        if (resp[i] != null) markAnswer(card, q, resp[i], false);
        card.addEventListener("click", (e) => {
          if (e.target.closest("[data-reset]")) {
            const r = store.get("ex", {}); delete r[i]; store.set("ex", r);
            clearAnswer(card); atualizar(); return;
          }
          const b = e.target.closest(".opt");
          if (!b || b.disabled) return;
          const k = +b.dataset.k;
          const r = store.get("ex", {}); r[i] = k; store.set("ex", r);
          markAnswer(card, q, k, true);
          atualizar(true);
        });
      });
      atualizar();
      observe(lista);
    }

    function atualizar(fromAnswer) {
      const itens = doFiltro();
      const r = store.get("ex", {});
      const feitas = itens.filter((x) => r[x.i] != null);
      const ok = feitas.filter((x) => r[x.i] === x.q.correta).length;
      $(".js-feitas", body).textContent = `${feitas.length}/${itens.length}`;
      $(".js-bar", body).style.width = (feitas.length / itens.length) * 100 + "%";
      $(".js-ok", body).textContent = `${ok} certas`;
      $(".js-bad", body).textContent = `${feitas.length - ok} erradas`;
      if (fromAnswer && feitas.length === itens.length) {
        toast(`Tópico concluído: ${ok}/${itens.length}`);
        if (ok / itens.length >= 0.7) confetti();
      }
    }

    $("#filtros", body).addEventListener("click", (e) => {
      const c = e.target.closest(".chip");
      if (!c) return;
      exFiltro = c.dataset.f; store.set("exFiltro", exFiltro);
      $$(".chip", body).forEach((x) => x.classList.toggle("active", x === c));
      desenhar();
    });
    $("#exReset", body).addEventListener("click", () => {
      const r = store.get("ex", {});
      doFiltro().forEach((x) => delete r[x.i]);
      store.set("ex", r);
      desenhar();
      toast("Progresso do tópico apagado");
    });
    desenhar();
  }

  /* ----- Simulado ----- */
  let simQtd = store.get("simQtd", 10);
  let simTopico = "todos";

  function modoSimuladoSetup() {
    const body = $("#exBody");
    body.innerHTML = `
<div class="card sim-setup fc-enter">
  <h3>Monte seu simulado</h3>
  <p>As questões são sorteadas e aparecem uma por vez. No final você vê a nota e revisa o que errou.</p>
  <label>Quantidade</label>
  <div class="row"><div class="seg" id="segQtd">
    ${[10, 20, 30, 0].map((n) => `<button data-id="${n}" class="${n === simQtd ? "active" : ""}">${n || "Todas"}</button>`).join("")}
    <span class="seg-pill"></span>
  </div></div>
  <label>Tópico</label>
  <div class="filters" id="simFiltro" style="justify-content:center">${chipsTopicos(simTopico, contarEx)}</div>
  <button class="btn primary" id="simStart" style="padding:14px 26px;font-size:16px">${ICON.bolt} Começar</button>
  <p style="margin:18px 0 0;font-size:13px">Atalhos: <span class="kbd">A</span>–<span class="kbd">E</span> respondem · <span class="kbd">Enter</span> avança</p>
</div>`;
    segmented($("#segQtd", body), (id) => { simQtd = +id; store.set("simQtd", simQtd); });
    $("#simFiltro", body).addEventListener("click", (e) => {
      const c = e.target.closest(".chip"); if (!c) return;
      simTopico = c.dataset.f;
      $$("#simFiltro .chip", body).forEach((x) => x.classList.toggle("active", x === c));
    });
    $("#simStart", body).addEventListener("click", () => {
      const pool = EXERCICIOS.map((q, i) => ({ q, i })).filter((x) => simTopico === "todos" || x.q.topico === simTopico);
      const qs = shuffle(pool).slice(0, simQtd || pool.length);
      rodarSimulado(qs);
    });
  }

  function rodarSimulado(qs) {
    const body = $("#exBody");
    const respostas = [];
    let atual = 0;

    body.innerHTML = `
<div class="sim-wrap">
  <div class="sim-top">
    <button class="btn ghost" id="simSair">${ICON.left} Sair</button>
    <div class="progress"><i id="simBar"></i></div>
    <span class="count" id="simCount"></span>
  </div>
  <div class="sim-stage" id="simStage"></div>
  <div class="sim-nav"><button class="btn primary" id="simNext" hidden>Próxima ${ICON.arrow}</button></div>
</div>`;
    const stage = $("#simStage", body), next = $("#simNext", body);
    $("#simSair", body).addEventListener("click", () => { document.onkeydown = null; modoSimuladoSetup(); });

    function mostrar() {
      const { q } = qs[atual];
      $("#simCount", body).textContent = `${atual + 1} / ${qs.length}`;
      $("#simBar", body).style.width = (atual / qs.length) * 100 + "%";
      stage.innerHTML = questionHTML(q, atual + 1, [{ txt: shortName[q.topico], h: TOPICOS[q.topico].hue }]);
      const card = $(".q-card", stage);
      card.classList.add("in");
      $(".q-actions", card).remove();
      next.hidden = true;
      card.addEventListener("click", (e) => {
        const b = e.target.closest(".opt");
        if (b && !b.disabled) responder(+b.dataset.k);
      });
    }

    function responder(k) {
      const { q } = qs[atual];
      if (respostas[atual] != null || k >= q.opcoes.length) return;
      respostas[atual] = k;
      markAnswer($(".q-card", stage), q, k, true);
      $("#simBar", body).style.width = ((atual + 1) / qs.length) * 100 + "%";
      next.innerHTML = atual === qs.length - 1 ? `Ver resultado ${ICON.arrow}` : `Próxima ${ICON.arrow}`;
      next.hidden = false;
      next.focus({ preventScroll: true });
    }

    function avancar() {
      if (respostas[atual] == null) return;
      if (atual === qs.length - 1) return resultado();
      const card = $(".q-card", stage);
      card.classList.add("leaving");
      setTimeout(() => { atual++; mostrar(); scrollTo({ top: 0, behavior: "smooth" }); }, reduceMotion ? 0 : 300);
    }

    next.addEventListener("click", avancar);
    document.onkeydown = (e) => {
      if (e.target.matches("input, textarea")) return;
      const idx = "abcde".indexOf(e.key.toLowerCase());
      if (idx >= 0 && respostas[atual] == null) responder(idx);
      else if (e.key === "Enter" && respostas[atual] != null) { e.preventDefault(); avancar(); }
    };

    function resultado() {
      document.onkeydown = null;
      const acertos = qs.filter((x, n) => respostas[n] === x.q.correta).length;
      const pct = Math.round((acertos / qs.length) * 100);
      const erros = qs.map((x, n) => ({ ...x, r: respostas[n] })).filter((x) => x.r !== x.q.correta);
      const msg = pct >= 90 ? "Excelente! Pode marcar a prova." : pct >= 70 ? "Muito bom! Revise os erros e fica redondo." : pct >= 50 ? "No caminho. Vale reler o resumo dos tópicos que você errou." : "Hora de voltar ao resumo e tentar de novo.";
      const r = store.get("ex", {});
      qs.forEach((x, n) => { r[x.i] = respostas[n]; });
      store.set("ex", r);

      body.innerHTML = `
<div class="card result fc-enter">
  ${ring(pct)}
  <h3>${acertos} de ${qs.length} acertos</h3>
  <p>${msg}</p>
  <div class="row">
    <button class="btn primary" id="simNovo">${ICON.shuffle} Novo simulado</button>
    ${erros.length ? `<button class="btn" id="simErros">Refazer só os erros (${erros.length})</button>` : ""}
  </div>
  ${erros.length ? `<div class="review"><h4>Revise o que errou</h4>
    ${erros.map((x) => `<div class="review-item"><span class="tag" style="margin-right:6px">${shortName[x.q.topico]}</span>${x.q.enunciado}
      <div class="ans">✓ ${LETRAS[x.q.correta]}) ${x.q.opcoes[x.q.correta]}</div></div>`).join("")}
  </div>` : ""}
</div>`;
      animateRings(body);
      if (pct >= 70) confetti();
      $("#simNovo", body).addEventListener("click", modoSimuladoSetup);
      const be = $("#simErros", body);
      if (be) be.addEventListener("click", () => rodarSimulado(shuffle(erros.map(({ q, i }) => ({ q, i })))));
      scrollTo({ top: 0, behavior: "smooth" });
    }

    mostrar();
  }

  /* ----- Flashcards ----- */
  let fcFiltro = "todos";

  function modoFlashcards() {
    const body = $("#exBody");
    let deck = [], pos = 0;

    body.innerHTML = `
<div class="filters" id="fcFiltro">${chipsTopicos(fcFiltro, contarFc)}</div>
<div class="fc-wrap">
  <div class="fc-stage" id="fcStage"></div>
  <div class="fc-controls">
    <button class="btn icon-btn" id="fcPrev" aria-label="Anterior">${ICON.left}</button>
    <span class="count" id="fcCount"></span>
    <button class="btn icon-btn" id="fcNext" aria-label="Próximo">${ICON.right}</button>
    <button class="btn icon-btn" id="fcShuffle" aria-label="Embaralhar">${ICON.shuffle}</button>
  </div>
  <p style="text-align:center;color:var(--faint);font-size:13px;margin-top:14px">Clique no cartão ou aperte <span class="kbd">Espaço</span> para virar · <span class="kbd">←</span> <span class="kbd">→</span> para navegar</p>
</div>`;

    const stage = $("#fcStage", body);

    function montar(embaralhar) {
      deck = FLASHCARDS.filter((c) => fcFiltro === "todos" || c.topico === fcFiltro);
      if (embaralhar) deck = shuffle(deck);
      pos = 0; desenhar();
    }
    function desenhar() {
      const c = deck[pos], t = TOPICOS[c.topico];
      stage.innerHTML = `
<button class="fc fc-enter" style="--h:${t.hue}" aria-label="Virar cartão">
  <div class="fc-face fc-front"><small>${shortName[c.topico]}</small><b>${c.frente}</b><span class="hint">toque para ver a resposta</span></div>
  <div class="fc-face fc-back"><small>Resposta</small><p>${c.verso}</p></div>
</button>`;
      $("#fcCount", body).textContent = `${pos + 1} / ${deck.length}`;
      const fc = $(".fc", stage);
      fc.addEventListener("click", virar);
      // a animação de entrada fixa o transform; removida ao fim para o giro funcionar
      fc.addEventListener("animationend", () => fc.classList.remove("fc-enter"), { once: true });
      if (reduceMotion) fc.classList.remove("fc-enter");
    }
    const virar = () => { const f = $(".fc", stage); if (f) f.classList.toggle("flipped"); };
    const ir = (d) => { pos = (pos + d + deck.length) % deck.length; desenhar(); };

    $("#fcPrev", body).addEventListener("click", () => ir(-1));
    $("#fcNext", body).addEventListener("click", () => ir(1));
    $("#fcShuffle", body).addEventListener("click", () => { montar(true); toast("Cartões embaralhados"); });
    $("#fcFiltro", body).addEventListener("click", (e) => {
      const c = e.target.closest(".chip"); if (!c) return;
      fcFiltro = c.dataset.f;
      $$("#fcFiltro .chip", body).forEach((x) => x.classList.toggle("active", x === c));
      montar(false);
    });

    let x0 = null;
    stage.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1);
    });

    document.onkeydown = (e) => {
      if (e.target.matches("input, textarea")) return;
      if (e.key === " ") { e.preventDefault(); virar(); }
      else if (e.key === "ArrowRight") ir(1);
      else if (e.key === "ArrowLeft") ir(-1);
    };
    montar(false);
  }

  /* ================= DEVOPS (treino de termos) ================= */
  const DV_GRUPOS = [
    { id: "todos", nome: "Tudo", h: 255 },
    { id: "rdd", nome: "Release × Deploy × Delivery", h: 160 },
    { id: "cicd", nome: "CI × CD", h: 200 },
    { id: "extras", nome: "Flags, canário, pipeline", h: 330 }
  ];
  let dvModo = store.get("dvModo", "treinar");

  function renderDevops() {
    const el = $("#view-devops");
    el.innerHTML = `
<div class="page-head reveal">
  <span class="eyebrow">Release · Deploy · Delivery · CI/CD</span>
  <h2>Treino DevOps</h2>
  <p>Questões de cenário só sobre os termos que mais se confundem. As que você errar voltam logo depois até você acertar.</p>
</div>
<div class="toolbar reveal">
  <div class="seg" id="segDv">
    <button data-id="treinar" class="${dvModo === "treinar" ? "active" : ""}">Treinar<small>${DEVOPS_QUIZ.length} questões</small></button>
    <button data-id="cola" class="${dvModo === "cola" ? "active" : ""}">Cola<small>diferenças e palavras-chave</small></button>
    <span class="seg-pill"></span>
  </div>
</div>
<div id="dvBody"></div>`;
    segmented($("#segDv", el), (id) => { dvModo = id; store.set("dvModo", id); showDevops(); });
    showDevops();
    observe(el);
  }

  function showDevops() {
    document.onkeydown = null;
    if (dvModo === "cola") dvCola(); else dvTreinar();
  }

  function dvCola() {
    const body = $("#dvBody");
    body.innerHTML = `
<div class="card dv-flow fc-enter" style="--h:200">
  <h3>Modelo mental: do commit ao cliente</h3>
  <div class="flow"><span>Commit</span><i>integra →</i><span>CI</span><i>gera →</i><span>Release</span><i>pronta, alguém autoriza →</i><span>Delivery</span><i>instala →</i><span>Deploy</span></div>
  <p>Pergunte-se: <b>gerou</b> a versão? É <b>Release</b>. Está <b>pronta esperando alguém autorizar</b>? É <b>Delivery</b>. Foi <b>instalada em produção</b> e o cliente já usa? É <b>Deploy</b>.</p>
</div>
<div class="term-grid">
  ${DEVOPS_TERMOS.map((t) => `
  <div class="card term-card reveal" style="--h:${t.hue}">
    <div class="term-head"><b>${t.nome}</b><small>${t.pt}</small></div>
    <p>${t.def}</p>
    <div class="chips">${t.chave.map((c) => `<span>${c}</span>`).join("")}</div>
    <p class="term-ex">${t.ex}</p>
  </div>`).join("")}
</div>
<div class="card dv-note reveal" style="--h:45">
  <h3>Truques para não errar</h3>
  <ul>
    <li><b>CI</b>: o <b>I</b> é de <b>Integrar</b>. "Integrar código com frequência" é sempre CI, <u>nunca</u> CD.</li>
    <li><b>CD</b> = Continuous <b>D</b>eployment ou <b>D</b>elivery: trata de levar o commit até <b>produção</b>.</li>
    <li>Deploy<b>ment</b> é automático, sem ninguém. <b>Delivery</b> tem uma pessoa autorizando.</li>
    <li>Web usa Continuous <b>Deployment</b>. Apps móveis, jogos, desktop e drivers usam Continuous <b>Delivery</b>.</li>
    <li><b>Release</b> não coloca nada no ar: só <b>gera</b> a versão. "Disponível imediatamente" é <b>Deploy</b>.</li>
    <li>Os 3 pilares do DevOps são <b>Release, Deploy e Delivery</b>, e não "CI e CD".</li>
  </ul>
</div>
<div class="card dv-note reveal" style="--h:330">
  <h3>Termos vizinhos</h3>
  <div class="grid">
    <div><b>Feature flag</b><span>Booleano que desliga código incompleto. Permite integrar no main sem branch.</span></div>
    <div><b>Release canário</b><span>Libera para um grupo pequeno de usuários primeiro; depois amplia.</span></div>
    <div><b>Teste A/B</b><span>Duas versões para grupos diferentes, para ver qual traz mais valor.</span></div>
    <div><b>TBD</b><span>Trunk Based Development: todos no main, sem branches longos. Combina com CI.</span></div>
    <div><b>Merge hell</b><span>Conflitos de branches que ficaram muito tempo isolados.</span></div>
    <div><b>Pipeline</b><span>Encanamento automático do commit à produção. Gatilho automático.</span></div>
  </div>
</div>`;
    observe(body);
  }

  /* ================= Motor de treino (abas DevOps e Código) ================= */
  // Uma questão por vez, alternativas embaralhadas; as erradas voltam 3 questões depois até serem acertadas.
  function criarTreino(cfg) {
    const st = { grupo: "todos", fila: [], atual: null, q: null, respondida: false, ok: 0, err: 0, seq: 0, total: 0 };
    const grupoDe = (id) => cfg.grupos.find((g) => g.id === id);
    const kRecorde = cfg.chave + "Recorde", kErros = cfg.chave + "Erros";

    function novaRodada() {
      const idx = cfg.quiz.map((_, i) => i).filter((i) => st.grupo === "todos" || cfg.quiz[i].grupo === st.grupo);
      Object.assign(st, { fila: shuffle(idx), total: idx.length, ok: 0, err: 0, seq: 0, atual: null, respondida: false });
    }

    function proxima() {
      st.atual = st.fila.shift();
      st.respondida = false;
      if (st.atual == null) { st.q = null; return; }
      const base = cfg.quiz[st.atual];
      // V/F fica na ordem; o resto é embaralhado a cada aparição
      const ordem = base.opcoes.length > 2 ? shuffle(base.opcoes.map((_, k) => k)) : base.opcoes.map((_, k) => k);
      st.q = { ...base, opcoes: ordem.map((k) => base.opcoes[k]), correta: ordem.indexOf(base.correta) };
    }

    return function render(body) {
      if (!st.fila.length && st.atual == null) novaRodada();
      if (st.atual == null || st.respondida) proxima();

      body.innerHTML = `
<div class="filters tr-grupos">${cfg.grupos.map((g) => `<button class="chip${g.id === st.grupo ? " active" : ""}" data-g="${g.id}" style="--h:${g.h}">${g.nome}</button>`).join("")}</div>
<div class="sim-wrap">
  <div class="card dv-stats">
    <div><b class="ok tr-ok"></b><span>acertos</span></div>
    <div><b class="bad tr-err"></b><span>erros</span></div>
    <div><b class="tr-seq"></b><span>sequência</span></div>
    <div><b class="tr-rec"></b><span>recorde</span></div>
    <div class="dv-prog"><div class="bar-label"><span>Rodada</span><b class="tr-falta"></b></div><div class="progress"><i class="tr-bar"></i></div></div>
  </div>
  <div class="tr-fraco"></div>
  <div class="sim-stage tr-stage"></div>
  <div class="sim-nav"><button class="btn primary tr-next" hidden>Próxima ${ICON.arrow}</button></div>
  <p style="text-align:center;color:var(--faint);font-size:13px;margin-top:14px">Atalhos: <span class="kbd">A</span>–<span class="kbd">E</span> respondem · <span class="kbd">Enter</span> avança</p>
</div>`;

      const stage = $(".tr-stage", body), next = $(".tr-next", body);

      function placar() {
        const feitas = Math.max(0, st.total - st.fila.length - (st.respondida || st.atual == null ? 0 : 1));
        $(".tr-ok", body).textContent = st.ok;
        $(".tr-err", body).textContent = st.err;
        $(".tr-seq", body).textContent = st.seq;
        $(".tr-rec", body).textContent = store.get(kRecorde, 0);
        $(".tr-falta", body).textContent = `${feitas}/${st.total}`;
        $(".tr-bar", body).style.width = (feitas / st.total) * 100 + "%";
        const top = Object.entries(store.get(kErros, {})).sort((a, b) => b[1] - a[1]).slice(0, 4);
        $(".tr-fraco", body).innerHTML = top.length
          ? `<div class="dv-weak"><span>Você mais erra:</span>${top.map(([t, n]) => `<em>${cfg.nomes[t] || t} <b>${n}</b></em>`).join("")}<button class="link-btn tr-zerar">zerar</button></div>`
          : "";
        const z = $(".tr-zerar", body);
        if (z) z.addEventListener("click", () => { store.set(kErros, {}); placar(); toast("Estatísticas de erro zeradas"); });
      }

      function mostrar() {
        if (st.atual == null) return fim();
        const g = grupoDe(st.q.grupo);
        stage.innerHTML = questionHTML(st.q, st.total - st.fila.length, [{ txt: g.nome, h: g.h }]);
        const card = $(".q-card", stage);
        card.classList.add("in");
        $(".q-actions", card).remove();
        next.hidden = true;
        card.addEventListener("click", (e) => {
          const b = e.target.closest(".opt");
          if (b && !b.disabled) responder(+b.dataset.k);
        });
        placar();
      }

      function responder(k) {
        if (st.respondida || st.atual == null || k >= st.q.opcoes.length) return;
        st.respondida = true;
        const certo = k === st.q.correta;
        if (certo) {
          st.ok++; st.seq++;
          if (st.seq > store.get(kRecorde, 0)) store.set(kRecorde, st.seq);
        } else {
          st.err++; st.seq = 0;
          st.fila.splice(Math.min(3, st.fila.length), 0, st.atual);
          const erros = store.get(kErros, {});
          erros[st.q.termo] = (erros[st.q.termo] || 0) + 1;
          store.set(kErros, erros);
        }
        markAnswer($(".q-card", stage), st.q, k, true);
        if (!certo) $(".explain-inner", stage).insertAdjacentHTML("beforeend", `<div class="attn"><b>Ela vai voltar</b> daqui a pouco para você fixar.</div>`);
        placar();
        next.innerHTML = st.fila.length ? `Próxima ${ICON.arrow}` : `Ver resultado ${ICON.arrow}`;
        next.hidden = false;
        next.focus({ preventScroll: true });
      }

      function avancar() {
        if (!st.respondida) return;
        $(".q-card", stage).classList.add("leaving");
        setTimeout(() => {
          proxima(); mostrar();
          const topo = body.getBoundingClientRect().top + scrollY - 90;
          if (scrollY > topo) scrollTo({ top: topo, behavior: reduceMotion ? "auto" : "smooth" });
        }, reduceMotion ? 0 : 300);
      }

      function fim() {
        document.onkeydown = null;
        next.hidden = true;
        const tentativas = st.ok + st.err;
        const pct = tentativas ? Math.round((st.total / tentativas) * 100) : 100;
        placar();
        stage.innerHTML = `
<div class="card result fc-enter">
  ${ring(pct)}
  <h3>Rodada completa!</h3>
  <p>${st.total} questões dominadas com ${st.err} erro${st.err === 1 ? "" : "s"} no caminho. ${st.err === 0 ? "Perfeito, sem errar nenhuma." : "Faça outra rodada até zerar os erros."}</p>
  <div class="row"><button class="btn primary tr-denovo">${ICON.shuffle} Nova rodada</button></div>
</div>`;
        animateRings(stage);
        if (st.err === 0) confetti();
        $(".tr-denovo", stage).addEventListener("click", () => { novaRodada(); render(body); });
      }

      $(".tr-grupos", body).addEventListener("click", (e) => {
        const c = e.target.closest(".chip");
        if (!c || c.dataset.g === st.grupo) return;
        st.grupo = c.dataset.g;
        novaRodada();
        render(body);
      });
      next.addEventListener("click", avancar);
      document.onkeydown = (e) => {
        if (e.target.matches("input, textarea")) return;
        const idx = "abcde".indexOf(e.key.toLowerCase());
        if (idx >= 0 && !st.respondida) responder(idx);
        else if (e.key === "Enter" && st.respondida) { e.preventDefault(); avancar(); }
      };
      mostrar();
    };
  }

  const treinoDevops = criarTreino({ chave: "dv", quiz: DEVOPS_QUIZ, nomes: DEVOPS_NOMES, grupos: DV_GRUPOS });
  const dvTreinar = () => treinoDevops($("#dvBody"));

  /* ================= CÓDIGO (análise de código) ================= */
  const CD_GRUPOS = [
    { id: "todos", nome: "Tudo", h: 255 },
    { id: "junit", nome: "Fluxo do teste (@Before)", h: 140 },
    { id: "asserts", nome: "Asserts", h: 200 },
    { id: "mock", nome: "Mock e injeção", h: 290 },
    { id: "tdd", nome: "Padrões do TDD", h: 0 },
    { id: "refactor", nome: "Refactoring", h: 100 },
    { id: "build", nome: "Maven e Git", h: 25 }
  ];
  let cdModo = store.get("cdModo", "treinar");
  const treinoCodigo = criarTreino({ chave: "cd", quiz: CODIGO_QUIZ, nomes: CODIGO_NOMES, grupos: CD_GRUPOS });

  function renderCodigo() {
    const el = $("#view-codigo");
    el.innerHTML = `
<div class="page-head reveal">
  <span class="eyebrow">Cai muito na prova</span>
  <h2>Análise de código</h2>
  <p>${CODIGO_QUIZ.length} questões em que você precisa ler o código: o que passa, o que falha, qual padrão, qual refactoring. As que você errar voltam logo depois.</p>
</div>
<div class="toolbar reveal">
  <div class="seg" id="segCd">
    <button data-id="treinar" class="${cdModo === "treinar" ? "active" : ""}">Treinar<small>${CODIGO_QUIZ.length} questões</small></button>
    <button data-id="refactor" class="${cdModo === "refactor" ? "active" : ""}">Qual refactoring?<small>${REFACTOR_QUIZ.length} antes → depois</small></button>
    <button data-id="roteiro" class="${cdModo === "roteiro" ? "active" : ""}">Como analisar<small>roteiro e pegadinhas</small></button>
    <span class="seg-pill"></span>
  </div>
</div>
<div id="cdBody"></div>`;
    segmented($("#segCd", el), (id) => { cdModo = id; store.set("cdModo", id); showCodigo(); });
    showCodigo();
    observe(el);
  }

  function showCodigo() {
    document.onkeydown = null;
    if (cdModo === "roteiro") cdRoteiro();
    else if (cdModo === "refactor") cdRefactor();
    else treinoCodigo($("#cdBody"));
  }

  const RF_GRUPOS = [
    { id: "todos", nome: "Tudo", h: 100 },
    { id: "extinl", nome: "Extração × Inline", h: 140 },
    { id: "mov", nome: "Movimentação · Pull Up · Push Down", h: 200 },
    { id: "classe", nome: "Extração de classe", h: 290 },
    { id: "rename", nome: "Renomeação", h: 45 },
    { id: "nao", nome: "Não é refactoring", h: 0 }
  ];
  const treinoRefactor = criarTreino({ chave: "rf", quiz: REFACTOR_QUIZ, nomes: REFACTOR_NOMES, grupos: RF_GRUPOS });

  function cdRefactor() {
    const body = $("#cdBody");
    body.innerHTML = `
<details class="card dv-note rf-dicas" style="--h:100">
  <summary>Como reconhecer cada refactoring <small>(toque para abrir)</small></summary>
  <table class="cmp">
    <tr><th>Extração de método</th><td>O DEPOIS tem um método <b>a mais</b>; o trecho sumiu de onde estava e virou uma chamada.</td></tr>
    <tr><th>Inline de método</th><td>O DEPOIS tem um método <b>a menos</b>; o corpo dele foi colado no lugar da chamada.</td></tr>
    <tr><th>Movimentação</th><td>O <b>mesmo método</b> mudou de classe, <b>sem herança</b> entre elas (geralmente para a classe cujos dados ele usa).</td></tr>
    <tr><th>Pull Up</th><td>Das <b>subclasses</b> (<code>extends</code>) para a <b>superclasse</b>. Sobe.</td></tr>
    <tr><th>Push Down</th><td>Da <b>superclasse</b> para a <b>subclasse</b> que usa. Desce.</td></tr>
    <tr><th>Extração de classe</th><td>Surgiu uma <b>classe nova</b> com um grupo de atributos/métodos que saíram de uma classe grande.</td></tr>
    <tr><th>Renomeação</th><td>Só mudaram <b>nomes</b>; a lógica é idêntica.</td></tr>
    <tr><th>Não é refactoring</th><td>Algum <b>resultado</b> mudou (bug corrigido, regra nova, funcionalidade nova).</td></tr>
  </table>
</details>
<div class="rf-treino"></div>`;
    treinoRefactor($(".rf-treino", body));
  }

  function cdRoteiro() {
    const body = $("#cdBody");
    body.innerHTML = `
<div class="card dv-note fc-enter" style="--h:140">
  <h3>Roteiro para ler um teste</h3>
  <ol class="steps">
    <li><b>Ache a fixture.</b> O <code>@Before</code> roda <b>antes de cada</b> <code>@Test</code>: todo teste começa do zero. Nada passa de um teste para o outro.</li>
    <li><b>Execute de cabeça, linha a linha</b>, anotando o valor de cada variável numa tabelinha.</li>
    <li><b>Compare com o assert.</b> <code>assertEquals(esperado, real)</code>: o esperado vem primeiro. O 3º parâmetro com <code>double</code> é a tolerância.</li>
    <li><b>Procure exceções.</b> <code>pop()</code> em pilha vazia e <code>push()</code> em pilha cheia lançam exceção, e o teste falha, a não ser que tenha <code>@Test(expected = …)</code>.</li>
    <li><b>Releia o enunciado.</b> Ele pede a <b>correta</b> ou a <b>incorreta</b>? Na Lista 1 a resposta era a única alternativa falsa.</li>
  </ol>
</div>
<div class="card dv-note reveal" style="--h:200">
  <h3>Asserts num relance</h3>
  <table class="cmp">
    <tr><th>assertEquals(a, b)</th><td>Mesmo <b>valor</b>. Dois <code>new String("C14")</code> passam.</td></tr>
    <tr><th>assertSame(a, b)</th><td>Mesmo <b>objeto</b> (referência). Dois <code>new</code> falham; <code>p2 = p1</code> passa.</td></tr>
    <tr><th>assertTrue / assertFalse</th><td>A expressão é true / false. <code>assertFalse</code> <b>não</b> torna o teste negativo.</td></tr>
    <tr><th>sem assert</th><td>Passa sempre (se não lançar exceção). <code>System.out.println</code> não é teste.</td></tr>
  </table>
</div>
<div class="card dv-note reveal" style="--h:290">
  <h3>Mock e injeção de dependência</h3>
  <ul>
    <li><code>new Servico()</code> <b>dentro do método</b> = acoplado, não testável. A saída é injetar.</li>
    <li>Recebe no <b>construtor</b> → injeção pelo construtor. Método <code>set…</code> → pelo setter. Vem como argumento → por parâmetro.</li>
    <li>Classe que <code>implements</code> a interface e devolve valor fixo = <b>mock manual</b>, em <code>src/test/java</code>.</li>
    <li>Mockito: <code>@RunWith(MockitoJUnitRunner.class)</code> + <code>@Mock</code> + <code>when(…).thenReturn(…)</code>. Sem o <code>@RunWith</code>, o mock fica <code>null</code>.</li>
    <li>O teste com mock verifica <b>a classe</b>, não o servidor. Termina em assert de resultado → <b>estado</b>; termina em <code>verify</code> → <b>interação</b>.</li>
    <li>Não mockar: POJO, código de terceiros, tudo.</li>
  </ul>
</div>
<div class="card dv-note reveal" style="--h:0">
  <h3>Qual padrão do TDD?</h3>
  <div class="patterns">
    <div><em>1</em><b>API Definition</b><span>Testa o objeto <b>logo após o <code>new</code></b> (nasce vazia, nasce desconectado) ou um retorno trivial.</span></div>
    <div><em>2</em><b>Differential Test</b><span>Muda <b>um detalhe</b> em relação ao teste anterior para forçar um pequeno incremento.</span></div>
    <div><em>3</em><b>Exceptional Limit</b><span>Cenário <b>inválido</b>: <code>expected = …Exception</code>, pilha vazia, pilha cheia, id negativo.</span></div>
    <div><em>4</em><b>Everything Working Together</b><span><b>Combina</b> várias funcionalidades num cenário. Pode nascer passando.</span></div>
  </div>
</div>
<div class="card dv-note reveal" style="--h:100">
  <h3>Qual refactoring? Compare o ANTES e o DEPOIS</h3>
  <table class="cmp">
    <tr><th>Extração de método</th><td>Trecho repetido virou um método novo e é chamado nos lugares de onde saiu.</td></tr>
    <tr><th>Inline</th><td>Um método pequeno sumiu e o corpo dele foi colado no lugar da chamada.</td></tr>
    <tr><th>Pull Up</th><td>Método das <b>subclasses</b> subiu para a <b>superclasse</b>.</td></tr>
    <tr><th>Push Down</th><td>Método da <b>superclasse</b> desceu para a subclasse que o usa.</td></tr>
    <tr><th>Renomeação</th><td>Só mudaram nomes de métodos, variáveis ou parâmetros.</td></tr>
    <tr><th>Não é refactoring</th><td>Se o <b>resultado</b> mudou para alguma entrada (ex.: 60 → 70), é manutenção, não refactoring.</td></tr>
  </table>
</div>`;
    observe(body);
  }

  /* ================= Roteador ================= */
  const VIEWS = { inicio: renderInicio, listas: renderListas, resumo: renderResumo, exercicios: renderExercicios, devops: renderDevops, codigo: renderCodigo };
  const feitos = {};
  let viewAtual = null;

  function route() {
    const v = location.hash.slice(1);
    const view = VIEWS[v] ? v : "inicio";
    if (view === viewAtual) return;
    viewAtual = view;
    document.onkeydown = null;
    $$(".view").forEach((s) => s.classList.toggle("active", s.dataset.view === view));
    $$(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.view === view));
    movePill($(".nav"));
    if (view === "inicio" || !feitos[view]) { VIEWS[view](); feitos[view] = true; }
    else if (view === "exercicios") showModo();
    else if (view === "devops") showDevops();
    else if (view === "codigo") showCodigo();
    requestAnimationFrame(refreshPills);
    scrollTo({ top: 0, behavior: "auto" });
  }

  addEventListener("hashchange", route);
  route();
})();
