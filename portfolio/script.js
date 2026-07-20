// =============================================================
//  Portfolio behaviour: render content, interactions, effects.
// =============================================================

/* ---------- Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Reveal on scroll (declared first — used by renderers below) ---------- */
let revealObserver;
function observeReveals() {
  const supported = "IntersectionObserver" in window;
  if (!supported) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            revealObserver.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
}
// Safety net: if anything prevents the observer from firing, show everything.
window.addEventListener("load", () => {
  setTimeout(() => document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible")), 1500);
});

/* ---------- Typed role rotator ---------- */
(function typeLoop() {
  const el = document.getElementById("typed");
  if (!el) return;
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = ROLES[ri];
    el.textContent = word.slice(0, ci);
    if (!deleting) {
      if (ci < word.length) { ci++; return setTimeout(tick, 70); }
      deleting = true;
      return setTimeout(tick, 1600);
    } else {
      if (ci > 0) { ci--; return setTimeout(tick, 35); }
      deleting = false;
      ri = (ri + 1) % ROLES.length;
      return setTimeout(tick, 300);
    }
  }
  tick();
})();

/* ---------- Skills ---------- */
(function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-card reveal">
      <div class="skill-card__head">
        <i class="${s.icon}"></i>
        <h3>${s.group}</h3>
      </div>
      <div class="skill-card__tags">
        ${s.items.map((i) => `<span>${i}</span>`).join("")}
      </div>
    </div>`
  ).join("");
})();

/* ---------- Projects + filters ---------- */
(function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const filters = document.getElementById("projectFilters");

  const tagSet = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))];
  filters.innerHTML = tagSet
    .map(
      (t, i) =>
        `<button class="chip ${i === 0 ? "chip--active" : ""}" data-tag="${t}">${t}</button>`
    )
    .join("");

  function card(p) {
    return `
    <article class="project ${p.featured ? "project--featured" : ""} reveal" data-tags="${p.tags.join(",")}">
      ${p.featured ? '<span class="project__badge"><i class="fa-solid fa-star"></i> Featured</span>' : ""}
      <div class="project__top">
        <div class="project__tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        <span class="project__year">${p.year}</span>
      </div>
      <h3 class="project__title">${p.title}</h3>
      <p class="project__subtitle">${p.subtitle}</p>
      <p class="project__desc">${p.description}</p>
      <div class="project__tech">${p.tech.map((t) => `<code>${t}</code>`).join("")}</div>
      <div class="project__links">
        ${
          p.links.length
            ? p.links
                .map(
                  (l) =>
                    `<a href="${l.url}" target="_blank" rel="noopener"><i class="${l.icon}"></i> ${l.label}</a>`
                )
                .join("")
            : '<span class="project__nolink"><i class="fa-solid fa-lock"></i> Private / coursework</span>'
        }
      </div>
    </article>`;
  }

  function paint(tag) {
    const list = tag === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(tag));
    grid.innerHTML = list.map(card).join("");
    observeReveals();
  }

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("chip--active"));
    btn.classList.add("chip--active");
    paint(btn.dataset.tag);
  });

  paint("All");
})();

/* ---------- Experience timeline ---------- */
(function renderTimeline() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = EXPERIENCE.map(
    (e) => `
    <div class="tl-item reveal">
      <div class="tl-item__dot ${e.kind === "training" ? "tl-item__dot--alt" : ""}"></div>
      <div class="tl-item__card">
        <div class="tl-item__head">
          <h3>${e.role}</h3>
          <span class="tl-item__kind ${e.kind === "training" ? "is-training" : "is-work"}">
            ${e.kind === "training" ? "Training / Cert" : "Work"}
          </span>
        </div>
        <p class="tl-item__meta">
          <strong>${e.org}</strong>${e.place ? ` · ${e.place}` : ""} · ${e.date}
        </p>
        <ul>${e.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>
    </div>`
  ).join("");
})();

/* ---------- Kick off reveals for statically-present elements ---------- */
observeReveals();

/* ---------- Stat counters ---------- */
(function counters() {
  const stats = document.querySelectorAll(".stat__num");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = +el.dataset.target;
        const suffix = el.dataset.suffix || "";
        let cur = 0;
        const step = Math.max(1, Math.round(target / 40));
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(t); }
          el.textContent = cur + suffix;
        }, 28);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  stats.forEach((s) => obs.observe(s));
})();

/* ---------- Scroll progress + nav state ---------- */
(function scrollFx() {
  const bar = document.getElementById("scrollProgress");
  const nav = document.getElementById("nav");
  const links = [...document.querySelectorAll(".nav__links a")];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function onScroll() {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.transform = `scaleX(${scrolled})`;
    nav.classList.toggle("nav--solid", h.scrollTop > 40);

    let active = sections[0];
    for (const s of sections) {
      if (s.getBoundingClientRect().top <= 120) active = s;
    }
    links.forEach((l) =>
      l.classList.toggle("is-active", l.getAttribute("href") === "#" + active?.id)
    );
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- Mobile menu ---------- */
(function mobileMenu() {
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => links.classList.toggle("nav__links--open"));
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") links.classList.remove("nav__links--open");
  });
})();

/* ---------- Theme toggle (persists) ---------- */
(function theme() {
  const btn = document.getElementById("themeToggle");
  const icon = btn.querySelector("i");
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.documentElement.classList.add("light");
  syncIcon();
  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("light") ? "light" : "dark"
    );
    syncIcon();
  });
  function syncIcon() {
    const light = document.documentElement.classList.contains("light");
    icon.className = light ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
})();

/* ---------- Smooth anchor scroll ---------- */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
