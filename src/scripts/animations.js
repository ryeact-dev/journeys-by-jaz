(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  document.documentElement.classList.add("js");
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        el.style.transitionDelay = `${el.dataset.delay ?? 0}ms`;
        el.classList.add("in");
        io.unobserve(el);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => reduce ? el.classList.add("in") : io.observe(el));
  requestAnimationFrame(() => document.body.classList.add("loaded"));
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      cio.unobserve(el);
      const to = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      if (reduce) {
        el.textContent = to + suffix;
        continue;
      }
      const t0 = performance.now();
      const tick = (t) => {
        const p = clamp((t - t0) / 1600);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, { threshold: 0.6 });
  counters.forEach((c) => cio.observe(c));
  const wordEls = document.querySelectorAll(".words, .words-p");
  wordEls.forEach((el) => {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          (n.textContent ?? "").split(/(\s+)/).forEach((part) => {
            if (!part.trim()) {
              frag.append(part);
              return;
            }
            const s = document.createElement("span");
            s.className = "w";
            s.textContent = part;
            frag.append(s);
          });
          n.replaceWith(frag);
        } else walk(n);
      });
    };
    walk(el);
  });
  const pill = document.querySelector(".life-pill");
  const nav = document.querySelector(".nav");
  const heroBg = document.querySelector(".hero .ph");
  let ticking = false;
  function update() {
    ticking = false;
    const vh = innerHeight;
    nav?.classList.toggle("scrolled", scrollY > 40);
    if (heroBg && !reduce) heroBg.style.transform = `scale(${1 + clamp(scrollY / vh) * 0.12}) translateY(${scrollY * 0.12}px)`;
    wordEls.forEach((el) => {
      const r = el.getBoundingClientRect();
      const p = clamp((vh * 0.9 - r.top) / (vh * 0.45 + r.height * 0.4));
      const ws = el.querySelectorAll(".w");
      const n = ws.length;
      ws.forEach((w, i) => {
        const k = clamp(p * (n + 3) - i);
        w.style.opacity = String(0.22 + 0.78 * k);
      });
    });
    if (pill) {
      const r = pill.parentElement.getBoundingClientRect();
      const p = clamp((vh * 0.85 - r.top) / (vh * 0.5));
      const e = 1 - Math.pow(1 - p, 3);
      pill.style.setProperty("--p", String(e));
    }
  }
  const req = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener("scroll", req, { passive: true });
  addEventListener("resize", req);
  update();
  const parallax = document.querySelectorAll("[data-parallax]");
  if (!reduce && parallax.length) {
    addEventListener("scroll", () => {
      parallax.forEach((el) => {
        const r = el.getBoundingClientRect();
        const d = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        el.style.setProperty("--py", `${d * Number(el.dataset.parallax)}px`);
      });
    }, { passive: true });
  }
})();
