(() => {
  const S = window.SITE;
  const DICT = window.I18N;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- language ---------- */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };
  const urlLang = new URLSearchParams(location.search).get("lang");
  let lang = [urlLang, store.get("lang"), (navigator.language || "en").slice(0, 2)]
    .find(l => l === "en" || l === "es") || "en";

  const t = key => DICT[lang][key] ?? DICT.en[key] ?? key;
  const L = v => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.en) : v;
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function setLang(next) {
    lang = next;
    store.set("lang", lang);
    document.documentElement.lang = lang;
    document.title = t("meta.title");
    $('meta[name="description"]').content = t("meta.desc");
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $("#modalClose").setAttribute("aria-label", t("modal.close"));
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    renderConfig();
    renderWork();
    renderExperience();
  }

  /* ---------- config-driven content ---------- */
  function renderConfig() {
    $$('[data-config="name"]').forEach(el => el.textContent = S.name);
    $$('[data-config="email"]').forEach(el => el.textContent = S.email);
    $$('[data-config="location"]').forEach(el => el.textContent = L(S.location));
    $("#mailLink").href = `mailto:${S.email}`;
    const cv = $("#cvLink");
    cv.href = $("#navCv").href = `cv.html?lang=${lang}`;
    if (S.photo) {
      $("#photo").innerHTML = `<img src="${esc(S.photo)}" alt="${esc(S.name)}" loading="lazy">`;
    }
    const hasReel = S.showreel && (S.showreel.youtube || S.showreel.vimeo || S.showreel.drive || S.showreel.file);
    $("#playReel span").textContent = t(hasReel ? "hero.reel" : "hero.seeWork");
    $("#playReel").hidden = S.showreel && S.showreel.visible === false;
    cv.classList.toggle("btn--primary", $("#playReel").hidden);
    cv.classList.toggle("btn--ghost", !$("#playReel").hidden);
    $("#socials").innerHTML = S.socials.filter(s => s.url)
      .map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("");
  }

  function renderStatic() {
    const items = S.tools.map(x => `<span>${esc(x)}</span><i aria-hidden="true">✦</i>`).join("");
    $("#marquee").innerHTML = items + `<span aria-hidden="true" class="dup">${items}</span>`;
    $("#tools").innerHTML = S.tools.map(x => `<span class="chip">${esc(x)}</span>`).join("");
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- work grid ---------- */
  let filter = "all";
  const hasVideo = w => w.youtube || w.vimeo || w.drive || w.file || w.audio;
  const thumbFor = w => w.thumb || (w.youtube ? `https://i.ytimg.com/vi/${encodeURIComponent(w.youtube)}/hqdefault.jpg` : "");

  function renderWork() {
    const grid = $("#workGrid");
    const hidden = S.hiddenTypes || [];
    const list = S.work.map((w, i) => ({ ...w, i }))
      .filter(w => !hidden.includes(w.type))
      .filter(w => filter === "all" || w.type === filter);
    if (!list.length) { grid.innerHTML = `<p class="empty">${esc(t("work.empty"))}</p>`; return; }
    grid.innerHTML = list.map((w, n) => {
      const thumb = thumbFor(w);
      const tc = `00:0${n}:${String((n * 17) % 60).padStart(2, "0")}:${String((n * 7) % 24).padStart(2, "0")}`;
      const typeLabel = t(`work.${w.type}`);
      return `
      <article class="card card--${w.type}${w.featured ? " card--featured" : ""} reveal is-in" data-i="${w.i}">
        <button class="card__media${w.type === "sound" ? " card__media--sound" : ""}" type="button" ${hasVideo(w) ? "" : "data-empty"} aria-label="${esc(t("work.play"))}: ${esc(L(w.title))}">
          ${w.loop && !reduceMotion
            ? `<video src="${esc(w.loop)}" poster="${esc(thumb)}" muted loop autoplay playsinline preload="metadata" aria-hidden="true"></video>`
            : thumb ? `<img src="${esc(thumb)}" alt="" loading="lazy">` : `<span class="ph ph--${w.i % 4}"></span>`}
          <span class="card__tc mono">${tc}</span>
          <span class="card__type mono">${esc(typeLabel)}</span>
          <span class="card__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
          ${w.featured ? `<span class="card__badge mono">${esc(t("work.featured"))}</span>` : ""}
          ${w.placeholder ? `<span class="card__soon mono">${esc(t("work.soon"))}</span>` : ""}
        </button>
        <div class="card__body">
          <h3>${esc(L(w.title))}</h3>
          <p class="mono card__meta">${esc(L(w.meta))}</p>
        </div>
      </article>`;
    }).join("");
  }

  $$(".filters button").forEach(b => { b.hidden = (S.hiddenTypes || []).includes(b.dataset.filter); });
  $$(".filters button").forEach(b => b.addEventListener("click", () => {
    filter = b.dataset.filter;
    $$(".filters button").forEach(x => x.setAttribute("aria-selected", String(x === b)));
    renderWork();
  }));

  $("#workGrid").addEventListener("click", e => {
    const card = e.target.closest(".card__media");
    if (!card) return;
    openModal(S.work[+card.closest(".card").dataset.i]);
  });

  /* ---------- modal player ---------- */
  const modal = $("#modal");
  function embed(v, vertical) {
    if (v.youtube) return `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="Video"></iframe>`;
    if (v.vimeo) return `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(v.vimeo)}?autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Video"></iframe>`;
    if (v.drive && (S.useDrive !== false || !v.file)) return `<iframe src="https://drive.google.com/file/d/${encodeURIComponent(v.drive)}/preview" allow="autoplay; fullscreen" allowfullscreen title="Video"></iframe>`;
    if (v.audio) return `<div class="modal__audio"><img src="${esc(v.thumb)}" alt=""><audio src="${esc(v.audio)}" controls autoplay></audio></div>`;
    if (v.file) return `<video src="${esc(v.file)}" ${v.thumb ? `poster="${esc(v.thumb)}"` : ""} controls autoplay playsinline></video>`;
    return `<div class="modal__empty"><span class="rec"></span><p class="mono">${esc(t(vertical === "reel" ? "reel.missing" : "work.placeholder"))}</p></div>`;
  }
  function openModal(w, isReel) {
    const vertical = w.type === "short";
    modal.classList.toggle("is-vertical", vertical);
    $("#modalPlayer").innerHTML = embed(w, isReel ? "reel" : "");
    $("#modalInfo").innerHTML = isReel ? "" :
      `<h3>${esc(L(w.title))}</h3><p class="mono">${esc(L(w.meta))}</p><p>${esc(L(w.desc))}</p>`;
    modal.showModal();
  }
  function closeModal() { modal.close(); }
  modal.addEventListener("close", () => { $("#modalPlayer").innerHTML = ""; });
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  $("#playReel").addEventListener("click", () => {
    const r = S.showreel || {};
    if (r.youtube || r.vimeo || r.drive || r.file) openModal(r, true);
    else $("#work").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- hero background loop ---------- */
  const bg = $("#heroBg");
  if (S.heroLoop && S.heroLoop.video && !reduceMotion) {
    bg.poster = S.heroLoop.poster || "";
    bg.src = S.heroLoop.video;
    bg.play().catch(() => {});
    bg.addEventListener("playing", () => bg.classList.add("is-on"), { once: true });
  } else {
    bg.remove();
  }

  /* ---------- experience ---------- */
  function renderExperience() {
    $("#timeline").innerHTML = S.experience.map(x => `
      <li class="reveal is-in">
        <span class="mono label">${esc(L(x.dates))}</span>
        <h3>${esc(L(x.role))} ${x.tag ? `<span class="tag mono">${esc(L(x.tag))}</span>` : ""}</h3>
        <p class="org">${esc(L(x.org))}</p>
        <ul>${L(x.points).map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      </li>`).join("");
    $("#gear").innerHTML = (S.gear || []).map(g => `<span class="chip chip--gear">${esc(L(g))}</span>`).join("");
    $("#education").innerHTML = S.education.map(e => `
      <li><strong>${esc(L(e.title))}</strong><span>${esc(L(e.org))}</span><span class="mono">${esc(L(e.dates))}</span></li>`).join("");
  }

  /* ---------- copy email ---------- */
  $("#copyMail").addEventListener("click", async e => {
    const btn = e.currentTarget;
    try { await navigator.clipboard.writeText(S.email); } catch { return; }
    btn.textContent = t("contact.copied");
    setTimeout(() => btn.textContent = t("contact.copy"), 1800);
  });

  /* ---------- nav ---------- */
  const nav = $("#nav"), toggle = $("#navToggle");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }));
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 20), { passive: true });
  // Expose the real menu height so the hero and anchor jumps clear it on any screen size.
  const setNavH = () => document.documentElement.style.setProperty("--nav-h", nav.offsetHeight + "px");
  addEventListener("resize", setNavH);
  if (document.fonts) document.fonts.ready.then(setNavH);
  setNavH();
  $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- timecode (24 fps) ---------- */
  const tcEl = $("#timecode");
  const start = performance.now();
  const pad = n => String(n).padStart(2, "0");
  function tick(now) {
    const f = Math.floor((now - start) / (1000 / 24));
    const s = Math.floor(f / 24);
    tcEl.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f % 24)}`;
    if (!reduceMotion) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  /* ---------- reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    $$(".reveal:not(.is-in)").forEach(el => io.observe(el));
  } else {
    $$(".reveal").forEach(el => el.classList.add("is-in"));
  }

  renderStatic();
  setLang(lang);
})();
