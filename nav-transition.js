(function () {
  const body = document.body;
  if (!body) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetSelector = [
    "main h1",
    "main h2",
    "main h3",
    "main p",
    "main li",
    "main .orbit-group__count",
    "main .orbit-group__index",
    "main .orbit-group__progress",
  ].join(", ");

  const ignoredSelector = [
    ".mobile-chrome",
    ".rail",
    ".works-topbar",
    ".heart-fullscreen",
    ".detail-layer",
    ".panel-layer",
    ".works-detail",
    ".exhibition-carousel__count",
    ".orbit-group__hint",
    ".viewer__cta",
  ].join(", ");

  function collectTargets() {
    return Array.from(document.querySelectorAll(targetSelector)).filter(function (node) {
      if (!node || !node.textContent || !node.textContent.trim()) {
        return false;
      }

      if (node.closest(ignoredSelector)) {
        return false;
      }

      if (node.hasAttribute("aria-hidden") && node.getAttribute("aria-hidden") === "true") {
        return false;
      }

      return true;
    });
  }

  function clearRevealState(targets) {
    body.classList.remove("is-content-revealing");
    targets.forEach(function (target) {
      target.classList.remove("reveal-text-block");
      target.style.removeProperty("--content-delay");
    });
  }

  function applyReveal() {
    if (prefersReducedMotion) {
      return;
    }

    const targets = collectTargets();
    if (!targets.length) {
      return;
    }

    clearRevealState(targets);

    targets.forEach(function (target, index) {
      const band = Math.floor(index / 2);
      const jitter = Math.round(Math.random() * 170);
      const delay = Math.min(1700, band * 96 + jitter);
      target.classList.add("reveal-text-block");
      target.style.setProperty("--content-delay", String(delay) + "ms");
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        body.classList.add("is-content-revealing");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyReveal, { once: true });
  } else {
    applyReveal();
  }

  window.addEventListener("pageshow", function () {
    applyReveal();
  });
})();
