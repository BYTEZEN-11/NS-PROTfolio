import * as D from "./data.js";
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getPath = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), D);
function bindData() {
  $$("[data-bind]").forEach((el) => {
    const v = getPath(el.dataset.bind);
    if (v != null) el.textContent = v;
  });
  $$("[data-bind-href]").forEach((el) => {
    const v = getPath(el.dataset.bindHref);
    if (v != null) el.setAttribute("href", v.startsWith("http") ? v : "mailto:" + v);
  });
  $$("[data-bind-tel]").forEach((el) => {
    const v = getPath(el.dataset.bindTel);
    if (v != null) el.textContent = v;
  });
}
function splitWords(el) {
  if (!el) return;
  const text = el.textContent.trim();
  if (!text) return;
  el.textContent = "";
  text.split(/\s+/).forEach((w, i) => {
    const wrap = document.createElement("span");
    wrap.className = "rw";
    const inner = document.createElement("span");
    inner.textContent = w;

    if (el.dataset.accentMap) {
      try {
        const map = JSON.parse(el.dataset.accentMap);
        if (map[i]) wrap.classList.add(map[i]);
      } catch {}
    }
    wrap.appendChild(inner);
    el.appendChild(wrap);
  });
}
function buildWordHeading(el, words) {
  if (!el) return;
  el.textContent = "";
  const accentMap = {};
  words.forEach((w, i) => {
    const wrap = document.createElement("span");
    wrap.className = "rw" + (w.accent ? " " + w.accent : "");
    const inner = document.createElement("span");
    inner.textContent = w.text;
    wrap.appendChild(inner);
    el.appendChild(wrap);
  });
}
function buildSectionHeadings() {
  buildWordHeading($("#heroH1"),        D.profile.heroWords);
  buildWordHeading($("#aboutH2"),       D.sectionTitles.about.words);
  buildWordHeading($("#demoH2"),        D.sectionTitles.demo.words);
  buildWordHeading($("#ossH2"),         D.sectionTitles.openSource.words);
  buildWordHeading($("#projectsH2"),    D.sectionTitles.projects.words);
  buildWordHeading($("#skillsH2"),      D.sectionTitles.skills.words);
  buildWordHeading($("#galleryH2"),     D.sectionTitles.gallery.words);
  buildWordHeading($("#interestsH2"),   D.sectionTitles.interests.words);
  buildWordHeading($("#goalsH2"),       D.sectionTitles.goals.words);
  buildWordHeading($("#contactH2"),     D.sectionTitles.contact.words);
}
function setupReveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");

          if (e.target.classList.contains("reveal-words")) {
            const rws = e.target.querySelectorAll(".rw");
            rws.forEach((rw, i) => {
              const inner = rw.querySelector("span");
              if (inner) inner.style.transitionDelay = (i * 70) + "ms";
            });
          }
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "-10% 0px" }
  );

  $$(".reveal-words, .reveal, .hero__underline").forEach((el) => io.observe(el));
}
function setupHeader() {
  const hdr = $("#hdr");
  const onScroll = () => hdr.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
function setupMobileMenu() {
  const btn  = $("#menuBtn");
  const menu = $("#mobileMenu");
  if (!btn || !menu) return;

  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
    menu.hidden = true;
  };
  const open = () => {
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
    menu.hidden = false;
  };
  btn.addEventListener("click", () => {
    if (btn.getAttribute("aria-expanded") === "true") close(); else open();
  });

  $$("#drawerList a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") close();
  });
}
function buildNav() {
  const make = (root) => {
    if (!root) return;
    D.navLinks.forEach((l) => {
      const li = document.createElement("li");
      const a  = document.createElement("a");
      a.href = l.href;
      a.textContent = l.label;
      li.appendChild(a);
      root.appendChild(li);
    });
  };
  make($("#navList"));
  make($("#drawerList"));
  make($("#ftrNav"));
}
function buildSocials(targetSel, dark = false) {
  const t = $(targetSel);
  if (!t) return;
  D.socials.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.href;
    a.className = "social-chip" + (dark ? " social-chip--dark" : "");
    a.setAttribute("aria-label", s.aria);
    a.textContent = s.label;
    t.appendChild(a);
  });
}
function buildStats() {
  const t = $("#heroStats");
  if (!t) return;
  D.stats.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = "reveal";
    card.innerHTML = `
      <div class="stat__val">${s.value}</div>
      <div class="stat__lbl">${s.label}</div>
      <div class="stat__sub">${s.sub}</div>
    `;
    card.style.transitionDelay = (i * 50) + "ms";
    t.appendChild(card);
    revealIO.observe(card);
  });
}
function buildAbout() {
  const track = $("#aboutMarquee");
  if (track) {

    const list = [...D.aboutMarquee, ...D.aboutMarquee];
    list.forEach((c) => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = c;
      track.appendChild(span);
    });
  }
  const q = $("#aboutQuote");
  if (q) {
    D.aboutQuote.forEach((part) => {
      if (part.accent) {
        const s = document.createElement("span");
        s.className = part.accent;
        s.textContent = part.text;
        q.appendChild(s);
      } else {
        q.appendChild(document.createTextNode(part.text));
      }
    });
  }
}
function setupDemo() {
  const body  = $("#demoBody");
  const btn   = $("#demoPlay");
  const lbl   = $("#demoPlayLabel");
  if (!body || !btn) return;

  let lineIdx = 0;
  let playing = false;
  let timer   = null;

  const reset = () => {
    body.innerHTML = '<p class="demo__hint">click play to run</p>';
    lineIdx = 0;
    lbl.textContent = "▶ PLAY";
  };

  const nextLine = () => {
    if (lineIdx >= D.demoScript.length) {
      playing = false;
      lbl.textContent = "↻ REPLAY";
      return;
    }
    const step = D.demoScript[lineIdx++];
    const p = document.createElement("p");
    p.className = "demo__line";
    if (step.p) {
      p.innerHTML =
        `<span class="demo__p">${step.p}</span>` +
        `<span class="demo__c">${step.c}</span>$ ` +
        `<span class="demo__cmd">${step.cmd}</span>`;
    } else {
      p.innerHTML = `<span class="demo__out">${step.out}</span>`;
    }
    body.appendChild(p);
    requestAnimationFrame(() => p.classList.add("is-in"));
    body.scrollTop = body.scrollHeight;
    timer = setTimeout(nextLine, reducedMotion() ? 0 : 700);
  };

  btn.addEventListener("click", () => {
    if (playing) return;
    if (lineIdx >= D.demoScript.length) reset();
    playing = true;
    nextLine();
  });
}
function buildOSS() {
  const grid = $("#ossGrid");
  if (!grid) return;
  D.ossContribs.forEach((org) => {
    const card = document.createElement("article");
    card.className = "oss-card reveal";
    const prs = org.prs
      .map((pr) => {
        const color = D.prCategoryColors[pr.category] || "var(--muted-2)";
        return `
          <div class="oss-pr">
            <span class="oss-pr__id">${pr.id}</span>
            <span class="oss-pr__desc">${pr.desc}</span>
            <span class="oss-pr__cat" style="color:${color}">${pr.category}</span>
          </div>`;
      })
      .join("");
    card.innerHTML = `
      <div class="oss-card__head">
        <div>
          <div class="oss-card__org">${org.org}</div>
          <div class="oss-card__sub">${org.project}</div>
        </div>
        <div class="oss-card__pills">
          <span class="oss-pill">${org.context}</span>
          <span class="oss-pill oss-pill--amber">${org.mergedLabel}</span>
        </div>
      </div>
      <div class="oss-card__prs">${prs}</div>
    `;
    grid.appendChild(card);
    revealIO.observe(card);
  });
}
const projState = {
  category: "all",
  query: "",
  sort: "latest"
};

function projectCategoryLabel(key) {
  const c = D.projectCategories.find((x) => x.key === key);
  return c ? c.label : "All";
}

function projectMatchesSearch(p, q) {
  if (!q) return true;
  const hay = [
    p.title,
    p.type,
    p.description,
    projectCategoryLabel(p.category),
    ...(p.stack || [])
  ].join(" ").toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((tok) => hay.includes(tok));
}

function projectSorted(list, sort) {
  const arr = [...list];
  switch (sort) {
    case "oldest":
      arr.sort((a, b) => (a.year - b.year) || ((a.month || 0) - (b.month || 0)));
      break;
    case "featured":
      arr.sort((a, b) => (b.featured - a.featured) || (b.year - a.year));
      break;
    case "alpha":
      arr.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "latest":
    default:
      arr.sort((a, b) => (b.year - a.year) || ((b.month || 0) - (a.month || 0)));
  }
  return arr;
}

function projectStatusBadge(status) {
  if (status === "in-progress") {
    return `<span class="badge badge--status-prog">● in progress</span>`;
  }
  return `<span class="badge badge--status-done">✓ completed</span>`;
}

function projectCard(p) {
  const cat = D.projectCategories.find((c) => c.key === p.category) || { label: p.category };
  const featured = p.featured
    ? `<span class="badge badge--feat">★ featured</span>`
    : "";
  const repoBtn = p.repo
    ? `<a class="pbtn pbtn--gh" href="${p.repo}" target="_blank" rel="noopener">
         <span class="pbtn__ic">${ghIcon()}</span><span>github</span>
       </a>`
    : `<span class="pbtn pbtn--soon" aria-disabled="true">
         <span class="pbtn__ic">${ghIcon()}</span><span>github soon</span>
       </span>`;
  const demoBtn = p.demo
    ? `<a class="pbtn pbtn--demo" href="${p.demo}" target="_blank" rel="noopener">
         <span class="pbtn__ic">${extIcon()}</span><span>live demo</span>
       </a>`
    : `<span class="pbtn pbtn--soon" aria-disabled="true">
         <span class="pbtn__ic">${extIcon()}</span><span>demo soon</span>
       </span>`;
  const caseBtn = p.caseStudy
    ? `<a class="pbtn pbtn--case" href="${p.caseStudy}">
         <span class="pbtn__ic">${docIcon()}</span><span>case study</span>
       </a>`
    : "";
  const stack = (p.stack || []).slice(0, 6).map((s) => `<span class="chip">${s}</span>`).join("");
  const thumb = p.thumb
    ? `<img src="${p.thumb}" alt="" loading="lazy" onerror="this.style.display='none'" />`
    : "";
  return `
    <article class="proj-card${p.featured ? " proj-card--featured" : ""}" data-id="${p.id}">
      <div class="proj-card__thumb">
        <div class="proj-card__badges">
          <span class="badge badge--cat">${cat.label}</span>
          ${featured}
        </div>
        ${thumb}
      </div>
      <div class="proj-card__body">
        <div class="proj-card__head">
          <h3 class="proj-card__title">${p.title}</h3>
          <span class="proj-card__type">${p.type} · ${p.year}</span>
        </div>
        <p class="proj-card__desc">${p.description || ""}</p>
        <div class="proj-card__stack">${stack}</div>
      </div>
      <div class="proj-card__foot">
        ${repoBtn}
        ${demoBtn}
        ${caseBtn}
        ${projectStatusBadge(p.status)}
      </div>
    </article>`;
}

function projectSkeleton() {
  return `
    <article class="proj-card proj-card--skeleton" aria-hidden="true">
      <div class="proj-card__thumb"><span class="skel skel--thumb"></span></div>
      <div class="proj-card__body">
        <div class="skel skel--title"></div>
        <div class="skel skel--type"></div>
        <div class="skel skel--desc"></div>
        <div class="skel skel--desc2"></div>
        <div class="skel skel--stack"></div>
      </div>
      <div class="proj-card__foot">
        <span class="skel skel--btn"></span>
        <span class="skel skel--btn"></span>
      </div>
    </article>`;
}

function ghIcon()    { return `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.6.5 12c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.5 4.5-1.5 7.8-5.8 7.8-10.8C23.5 5.6 18.3.5 12 .5z"/></svg>`; }
function extIcon()   { return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M20 14v6H4V4h6"/></svg>`; }
function docIcon()   { return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 13h8M8 17h6"/></svg>`; }

function buildProjectFilters() {
  const wrap = $("#projFilters");
  if (!wrap) return;
  const allCount = D.projects.length;
  const counts = { all: allCount };
  D.projectCategories.forEach((c) => {
    counts[c.key] = D.projects.filter((p) => p.category === c.key).length;
  });
  const pills = [{ key: "all", label: "All", num: counts.all }]
    .concat(D.projectCategories.map((c) => ({ key: c.key, label: c.label, num: counts[c.key] })));

  wrap.innerHTML = pills.map((p) => `
    <button class="filt ${p.key === projState.category ? "is-on" : ""}"
            data-cat="${p.key}" role="tab" aria-selected="${p.key === projState.category}">
      <span>${p.label}</span>
      <span class="filt__num">${p.num}</span>
    </button>
  `).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filt");
    if (!btn) return;
    const cat = btn.dataset.cat;
    if (cat === projState.category) return;
    projState.category = cat;
    wrap.querySelectorAll(".filt").forEach((f) => {
      const on = f.dataset.cat === cat;
      f.classList.toggle("is-on", on);
      f.setAttribute("aria-selected", on ? "true" : "false");
    });
    updateProjectBlurb();
    renderProjects( true);
  });
}

function buildProjectSort() {
  const sel = $("#projSort");
  if (!sel) return;
  sel.innerHTML = D.projectSorts.map((s) => `<option value="${s.key}">${s.label}</option>`).join("");
  sel.value = projState.sort;
  sel.addEventListener("change", () => {
    projState.sort = sel.value;
    renderProjects(true);
  });
}

function setupProjectSearch() {
  const input = $("#projSearch");
  const clear = $("#projSearchClear");
  if (!input) return;
  let t = null;
  input.addEventListener("input", () => {
    clear.hidden = !input.value;
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      projState.query = input.value.trim();
      renderProjects(true);
    }, 120);
  });
  clear.addEventListener("click", () => {
    input.value = "";
    clear.hidden = true;
    projState.query = "";
    renderProjects(true);
    input.focus();
  });
}

function updateProjectBlurb() {
  const blurb = $("#projBlurb");
  if (!blurb) return;
  let text = "";
  let tag = "";
  if (projState.category === "all") {
    text = "Every project I've built — web, mobile, AI, and GenAI. Use the filters to narrow down.";
    tag = "all";
  } else {
    const c = D.projectCategories.find((x) => x.key === projState.category);
    if (c) { text = c.blurb; tag = c.label.toLowerCase(); }
  }
  blurb.classList.add("is-swapping");
  setTimeout(() => {
    blurb.textContent = text;
    $("#projFilterTag").textContent = tag ? "· " + tag : "";
    blurb.classList.remove("is-swapping");
  }, 180);
}

function renderProjects(animate = true) {
  const grid  = $("#projGrid");
  const empty = $("#projEmpty");
  const cnt   = $("#projCount");
  const lbl   = $("#projCountLbl");
  if (!grid) return;
  if (animate) {
    grid.innerHTML = "";
    for (let i = 0; i < 4; i++) grid.insertAdjacentHTML("beforeend", projectSkeleton());
  }

  setTimeout(() => {

    const filtered = D.projects
      .filter((p) => projState.category === "all" || p.category === projState.category)
      .filter((p) => projectMatchesSearch(p, projState.query));
    const sorted = projectSorted(filtered, projState.sort);
    if (cnt) cnt.textContent = sorted.length;
    if (lbl) lbl.textContent = sorted.length === 1 ? "project" : "projects";
    if (sorted.length === 0) {
      grid.innerHTML = "";
      if (empty) empty.hidden = false;
      return;
    }
    if (empty) empty.hidden = true;
    grid.innerHTML = sorted.map(projectCard).join("");
    const cards = grid.querySelectorAll(".proj-card:not(.proj-card--skeleton)");
    cards.forEach((card, i) => {
      card.style.transitionDelay = Math.min(i * 60, 480) + "ms";
      requestAnimationFrame(() => card.classList.add("is-in"));
    });
  }, animate ? 220 : 0);
}

function buildProjects() {
  buildProjectFilters();
  buildProjectSort();
  setupProjectSearch();
  updateProjectBlurb();

  projState.category = "all";
  projState.sort = "latest";
  renderProjects(false);

  const r = $("#projEmptyReset");
  if (r) r.addEventListener("click", () => {
    projState.category = "all";
    projState.query = "";
    const inp = $("#projSearch"); if (inp) inp.value = "";
    const clr = $("#projSearchClear"); if (clr) clr.hidden = true;
    document.querySelectorAll("#projFilters .filt").forEach((f) => {
      const on = f.dataset.cat === "all";
      f.classList.toggle("is-on", on);
      f.setAttribute("aria-selected", on ? "true" : "false");
    });
    updateProjectBlurb();
    renderProjects(true);
  });
}
function buildSkills() {
  const grid = $("#skillsGrid");
  if (!grid) return;
  D.skillGroups.forEach((g, i) => {
    const div = document.createElement("div");
    div.className = "skills__group reveal";
    div.style.transitionDelay = (i * 50) + "ms";
    div.innerHTML = `
      <h3 class="skills__group-h">${g.group}</h3>
      <div class="chips">${g.items.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
    `;
    grid.appendChild(div);
    revealIO.observe(div);
  });
}
function buildHighlights() {
  const grid = $("#hlGrid");
  if (!grid) return;
  D.highlights.forEach((h, i) => {
    const card = document.createElement("article");
    card.className = "hl-card reveal";
    card.style.transitionDelay = (i * 60) + "ms";
    const num = String(i + 1).padStart(2, "0");
    card.innerHTML = `
      <span class="hl-card__num">— ${num}</span>
      <p class="hl-card__text">${h}</p>
    `;
    grid.appendChild(card);
    revealIO.observe(card);
  });
}
function buildGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;
  D.gallery.forEach((g, i) => {
    const tile = document.createElement("a");
    tile.href = g.src;
    tile.target = "_blank";
    tile.rel = "noopener";
    tile.className = "gallery__tile reveal" + (i === 0 ? " gallery__tile--big" : "");
    tile.style.transitionDelay = (i * 50) + "ms";
    tile.innerHTML = `<img src="${g.src}" alt="${g.alt}" loading="lazy" />`;
    grid.appendChild(tile);
    revealIO.observe(tile);
  });
}
function buildInterests() {
  const f = $("#focusChips");
  if (f) D.focusAreas.forEach((c) => {
    const s = document.createElement("span");
    s.className = "chip"; s.textContent = c;
    f.appendChild(s);
  });
  const fl = $("#freeList");
  if (fl) D.freeTime.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c;
    fl.appendChild(li);
  });
  const os = $("#osChoice");
  if (os) os.textContent = D.osOfChoice;
}
function buildGoals() {
  const t = $("#goalsList");
  if (!t) return;
  D.goals.forEach((g) => {
    const div = document.createElement("article");
    div.className = "goal reveal";
    div.innerHTML = `
      <h3 class="goal__h">${g.horizon}</h3>
      <ul class="goal__list">${g.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    `;
    t.appendChild(div);
    revealIO.observe(div);
  });
}
function buildMarquee() {
  const t = $("#darkMarquee");
  if (!t) return;
  const list = [...D.marqueeDark, ...D.marqueeDark, ...D.marqueeDark, ...D.marqueeDark];
  list.forEach((w) => {
    const span = document.createElement("span");
    span.textContent = w;
    t.appendChild(span);
  });
}
function setupContact() {
  const topics = $("#topicChips");
  const hidden = $("#fTopic");
  if (topics) {
    D.contactTopics.forEach((t) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = t;
      chip.setAttribute("role", "button");
      chip.setAttribute("tabindex", "0");
      chip.addEventListener("click", () => {
        $$(".chip", topics).forEach((c) => c.classList.remove("is-on"));
        chip.classList.add("is-on");
        hidden.value = t;
      });
      chip.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); chip.click(); }
      });
      topics.appendChild(chip);
    });
  }

  const form  = $("#contactForm");
  const toast = $("#contactToast");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name    = $("#fName").value.trim();
    const email   = $("#fEmail").value.trim();
    const message = $("#fMessage").value.trim();
    const topic   = hidden.value || "General";

    if (!name || !email || !message) {
      toast.textContent = "✗ fill in name, email, and message";
      toast.style.color = "#ff8a80";
      toast.classList.add("is-in");
      setTimeout(() => toast.classList.remove("is-in"), 2500);
      return;
    }

    const subject = encodeURIComponent(`[ar.] ${topic} — ${name}`);
    const body = encodeURIComponent(
      `name:    ${name}\n` +
      `email:   ${email}\n` +
      `topic:   ${topic}\n\n` +
      `${message}\n`
    );
    window.location.href = `mailto:${D.profile.email}?subject=${subject}&body=${body}`;
    toast.textContent = "✓ opens your mail client";
    toast.style.color = "var(--amber)";
    toast.classList.add("is-in");
    setTimeout(() => toast.classList.remove("is-in"), 3000);
  });
}
function buildFooterGiant() {
  const t = $("#ftrGiant");
  if (!t) return;
  D.footerGiant.forEach((line) => {
    const span = document.createElement("span");
    span.className = line.outline
      ? "ftr__giant-out"
      : (line.dot ? "ftr__giant-dot" : "");
    span.textContent = line.text + (line.dot ? "." : "");
    t.appendChild(span);
  });
}
function setupBackToTop() {
  const btn = $("#toTop");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 800);
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
  });
}
function setupMagnetic() {
  $$("[data-magnetic]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.setProperty("--mx", x.toFixed(1) + "px");
      el.style.setProperty("--my", y.toFixed(1) + "px");
    });
    el.addEventListener("mouseleave", () => {
      el.style.setProperty("--mx", "0px");
      el.style.setProperty("--my", "0px");
    });
  });
}
function runIntro() {
  const intro = $("#intro");
  const cnt   = $("#introCounter");
  if (!intro) return;
  if (reducedMotion()) {
    setTimeout(() => done(), 200);
    return;
  }
  const start = performance.now();
  const dur = 2200;
  const tick = (t) => {
    const p = Math.min(1, (t - start) / dur);

    const e = 1 - Math.pow(1 - p, 3);
    const v = Math.round(1 + e * 99);
    if (cnt) cnt.textContent = String(v).padStart(3, "0");
    if (p < 1) requestAnimationFrame(tick);
    else done();
  };
  requestAnimationFrame(tick);

  function done() {
