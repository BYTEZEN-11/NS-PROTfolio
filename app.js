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
