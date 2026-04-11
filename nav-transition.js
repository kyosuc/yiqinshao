(function () {
  const body = document.body;
  if (!body) {
    return;
  }

  let hasAppliedInitialReveal = false;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetSelector = [
    "main h1",
    "main h2",
    "main h3",
    "main p",
    "main li",
    "main .dossier-card__portrait",
    "main .dossier-links__row",
    "main .orbit-group__viewport",
    "main .exhibition-carousel",
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
    ".viewer__cta",
  ].join(", ");

  function collectTargets() {
    return Array.from(document.querySelectorAll(targetSelector)).filter(function (node) {
      if (!node || !node.textContent || !node.textContent.trim()) {
        if (
          !node ||
          !node.matches ||
          !node.matches(".dossier-card__portrait, .orbit-group__viewport, .exhibition-carousel")
        ) {
          return false;
        }
      }

      if (
        node.closest(".dossier-links__row") &&
        !node.matches(".dossier-links__row")
      ) {
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
      target.classList.remove(
        "reveal-text-block",
        "reveal-text-block--from-left",
        "reveal-text-block--soft"
      );
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
      if (target.matches(".dossier-links__row")) {
        target.classList.add("reveal-text-block--from-left");
      } else if (
        target.matches(".dossier-card__portrait, .orbit-group__viewport, .exhibition-carousel")
      ) {
        target.classList.add("reveal-text-block--soft");
      } else {
        target.classList.remove("reveal-text-block--from-left", "reveal-text-block--soft");
      }
      target.style.setProperty("--content-delay", String(delay) + "ms");
    });

    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        body.classList.add("is-content-revealing");
      });
    });
  }

  function applyInitialReveal() {
    if (hasAppliedInitialReveal) {
      return;
    }
    hasAppliedInitialReveal = true;
    applyReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyInitialReveal, { once: true });
  } else {
    applyInitialReveal();
  }

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      applyReveal();
    }
  });
})();
