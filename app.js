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
