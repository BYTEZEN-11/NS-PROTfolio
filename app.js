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
