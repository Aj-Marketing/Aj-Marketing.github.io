(() => {
  const S = window.SITE;
  const DICT = window.I18N;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

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

  function render() {
    const C = S.cvPage;
    document.documentElement.lang = lang;
    document.title = `${t("cv.title")} · ${S.name}`;
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $("#homeLink").href = $("#backLink").href = `index.html?lang=${lang}`;

    $("#cvRole").textContent = L(C.role);
    $("#cvEmail").textContent = S.email;
    $("#cvEmail").href = `mailto:${S.email}`;
    $("#cvLocation").textContent = L(S.location);
    $("#cvLinks").innerHTML = S.socials.filter(s => s.url)
      .map(s => `<span aria-hidden="true">·</span><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
    $("#cvSummary").textContent = L(C.summary);

    $("#cvExperience").innerHTML = S.experience.map(x => `
      <div class="job">
        <div class="job__top">
          <span class="job__role">${esc(L(x.role))}${x.tag ? `<span class="job__tag">${esc(L(x.tag))}</span>` : ""}</span>
          <span class="job__dates">${esc(L(x.dates))}</span>
        </div>
        <p class="job__org">${esc(L(x.org))}</p>
        <ul>${L(x.points).map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>`).join("");

    $("#cvEducation").innerHTML = S.education.map(e => `
      <div class="job">
        <div class="job__top">
          <span class="job__role">${esc(L(e.title))}</span>
          <span class="job__dates">${esc(L(e.dates))}</span>
        </div>
        <p class="job__org">${esc(L(e.org))}</p>
      </div>`).join("");

    $("#cvSkills").innerHTML = C.skills.map(s => `<dt>${esc(L(s.label))}</dt><dd>${esc(L(s.value))}</dd>`).join("");
    $("#cvLanguages").textContent = L(C.languages);
    $("#cvGear").textContent = (S.gear || []).map(L).join(" · ");

    const pdf = L(S.cv);
    $("#cvDownload").href = pdf;
    $("#cvDownload").setAttribute("download", pdf.split("/").pop());
    $("#cvDownload").hidden = !pdf;
    // Flag when the English page offers the Spanish PDF.
    $("#cvNote").hidden = !(lang === "en" && /ES\.pdf$/.test(pdf));

    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }

  $$(".lang button").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    store.set("lang", lang);
    render();
  }));
  const track = name => { try { window.goatcounter && window.goatcounter.count && window.goatcounter.count({ path: name, title: name, event: true }); } catch {} };
  $("#cvDownload").addEventListener("click", () => track(`CV downloaded (${lang.toUpperCase()})`));
  $("#cvPrint").addEventListener("click", () => { track("CV printed"); print(); });

  render();
})();
