(function () {
  const site = window.SITE_CONTENT;

  if (!site) {
    return;
  }

  const allWorks =
    Array.isArray(site.workGroups) && site.workGroups.length
      ? site.workGroups.flatMap((group) => group.works || []).filter(Boolean)
      : site.works;

  if (!allWorks || !allWorks.length) {
    return;
  }

  const workMap = new Map(allWorks.map((work) => [work.id, work]));
  const panelKeys = site.nav.map((item) => item.key);
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const defaultViewerTone = "rgba(204, 118, 132, 0.34)";
  const state = {
    activeWorkId: getInitialWorkId(),
    hoveredWorkId: null,
    openPanel: null,
    isDetailOpen: false,
    detailWorkId: null,
    viewerExpanded: false,
    isHeartFullscreenOpen: false,
    fullscreenWorkId: null,
    mobileTapStage: "idle",
  };

  const elements = {
    body: document.body,
    mobileChrome: document.querySelector(".mobile-chrome"),
    rail: document.querySelector(".rail"),
    stage: document.getElementById("stage"),
    viewer: document.getElementById("viewer"),
    stageTone: document.getElementById("stage-tone"),
    stageGhost: document.getElementById("stage-ghost"),
    stageKicker: document.getElementById("stage-kicker"),
    stageSubtitle: document.getElementById("stage-subtitle"),
    railNote: document.getElementById("rail-note"),
    railPortfolio: document.getElementById("rail-portfolio"),
    collage: document.getElementById("collage"),
    viewerButton: document.getElementById("viewer-button"),
    viewerFrame: document.querySelector(".viewer__frame"),
    viewerImageHeart: document.getElementById("viewer-image-heart"),
    viewerLabel: document.getElementById("viewer-label"),
    viewerTitle: document.getElementById("viewer-title"),
    viewerTitleZh: document.getElementById("viewer-title-zh"),
    viewerLine: document.getElementById("viewer-line"),
    viewerPrompt: document.getElementById("viewer-prompt"),
    viewerCta: document.getElementById("viewer-cta"),
    heartFullscreen: document.getElementById("heart-fullscreen"),
    heartFullscreenBackdrop: document.getElementById("heart-fullscreen-backdrop"),
    heartFullscreenFrame: document.getElementById("heart-fullscreen-frame"),
    heartFullscreenImage: document.getElementById("heart-fullscreen-image"),
    panelLayer: document.getElementById("panel-layer"),
    panelBackdrop: document.getElementById("panel-backdrop"),
    paintingsIndex: document.getElementById("paintings-index"),
    exhibitionRecords: document.getElementById("exhibition-records"),
    exhibitionNote: document.getElementById("exhibition-note"),
    contactDossier: document.getElementById("contact-dossier"),
    cvDossier: document.getElementById("cv-dossier"),
    detailLayer: document.getElementById("detail-layer"),
    detailImage: document.getElementById("detail-image"),
    detailLabel: document.getElementById("detail-label"),
    detailTitle: document.getElementById("detail-title"),
    detailTitleZh: document.getElementById("detail-title-zh"),
    detailLine: document.getElementById("detail-line"),
    detailCount: document.getElementById("detail-count"),
  };

  init();

  function getInitialWorkId() {
    const currentHash = window.location.hash.replace("#", "");
    if (panelKeys.includes(currentHash) && site.stage.defaultWorkId && workMap.has(site.stage.defaultWorkId)) {
      return site.stage.defaultWorkId;
    }

    const randomWork = allWorks[Math.floor(Math.random() * allWorks.length)];
    if (randomWork) {
      return randomWork.id;
    }

    if (site.stage.defaultWorkId && workMap.has(site.stage.defaultWorkId)) {
      return site.stage.defaultWorkId;
    }

    return allWorks[0].id;
  }

  function init() {
    applySharedAssets();
    renderStageCopy();
    renderCollage();
    renderPanels();
    bindEvents();
    applyHashState();
    focusWork(state.activeWorkId, { preserveMobile: true, preserveHover: true });
    document.body.classList.add("is-ready");
  }

  function applySharedAssets() {
    document.querySelectorAll("[data-site-logo]").forEach((image) => {
      image.src = site.assets.logo;
      image.alt = "Yiqin Shao logo";
    });

    document.querySelectorAll("[data-site-name]").forEach((node) => {
      node.textContent = site.shortTitle;
    });

    if (elements.railPortfolio) {
      elements.railPortfolio.href = site.assets.portfolioPdf;
      elements.railPortfolio.textContent = site.labels.portfolio;
    }

    if (elements.viewerLabel) {
      elements.viewerLabel.textContent = site.labels.currentWork;
    }

    if (elements.viewerCta) {
      elements.viewerCta.textContent = site.labels.enterDetail;
    }

    if (elements.detailLabel) {
      elements.detailLabel.textContent = site.labels.currentWork;
    }
  }

  function renderStageCopy() {
    if (elements.stageGhost) {
      elements.stageGhost.textContent = site.stage.ghost;
    }

    if (elements.stageKicker) {
      elements.stageKicker.textContent = site.stage.kicker;
    }

    if (elements.stageSubtitle) {
      elements.stageSubtitle.textContent = site.stage.subtitle;
    }

    if (elements.railNote) {
      elements.railNote.textContent = site.stage.railNote;
    }

    site.nav.forEach((item) => {
      const titleNode = document.getElementById("panel-" + item.key + "-title");
      const introNode = document.getElementById("panel-" + item.key + "-intro");
      const panelData = site.panels[item.key];
      if (titleNode && panelData) {
        titleNode.textContent = panelData.title;
      }
      if (introNode && panelData) {
        introNode.textContent = panelData.intro;
      }
    });

    if (elements.exhibitionNote) {
      elements.exhibitionNote.textContent = site.exhibition.note;
    }
  }

  function renderCollage() {
    if (!elements.collage) {
      return;
    }

    elements.collage.innerHTML = "";
  }

  function createStagePiece(work, index) {
    const style =
      "--desktop-top:" +
      work.stageDesktop.top +
      ";--desktop-left:" +
      work.stageDesktop.left +
      ";--desktop-width:" +
      work.stageDesktop.width +
      ";--mobile-top:" +
      work.stageMobile.top +
      ";--mobile-left:" +
      work.stageMobile.left +
      ";--mobile-width:" +
      work.stageMobile.width +
      ";--rotation:" +
      work.rotation +
      ";--depth:" +
      String(work.depth) +
      ";--drift-delay:" +
      String(index * -1.2) +
      "s;";

    return (
      '<button class="stage-piece" type="button" data-work-trigger="' +
      escapeHtml(work.id) +
      '" style="' +
      style +
      '" aria-label="' +
      escapeHtml(work.hoverCaption) +
      '">' +
      '<span class="stage-piece__pin"></span>' +
      '<span class="stage-piece__shell">' +
      '<img src="' +
      escapeHtml(work.image) +
      '" alt="' +
      escapeHtml(work.alt) +
      '" loading="lazy" decoding="async">' +
      "</span>" +
      '<span class="stage-piece__tag">' +
      escapeHtml(work.title) +
      "</span>" +
      "</button>"
    );
  }

  function renderPanels() {
    renderPaintingsIndex();
    renderExhibitionRecords();
    renderContactDossier();
    renderCvDossier();
  }

  function renderPaintingsIndex() {
    if (!elements.paintingsIndex) {
      return;
    }

    elements.paintingsIndex.innerHTML = allWorks
      .map((work, index) => {
        return (
          '<button class="paintings-index__row" type="button" data-index-work="' +
          escapeHtml(work.id) +
          '">' +
          '<span class="paintings-index__thumb">' +
          '<img src="' +
          escapeHtml(work.image) +
          '" alt="' +
          escapeHtml(work.alt) +
          '" loading="lazy" decoding="async">' +
          "</span>" +
          '<span class="paintings-index__body">' +
          '<span class="paintings-index__title">' +
          escapeHtml(work.title) +
          "</span>" +
          '<span class="paintings-index__zh">' +
          escapeHtml(work.titleZh) +
          "</span>" +
          '<span class="paintings-index__line">' +
          escapeHtml(work.medium) +
          " / " +
          escapeHtml(work.size) +
          " / " +
          escapeHtml(work.year) +
          "</span>" +
          "</span>" +
          '<span class="paintings-index__count">' +
          String(index + 1).padStart(2, "0") +
          "</span>" +
          "</button>"
        );
      })
      .join("");
  }

  function renderExhibitionRecords() {
    if (!elements.exhibitionRecords) {
      return;
    }

    elements.exhibitionRecords.innerHTML = site.exhibition.items
      .map((item) => {
        return (
          '<article class="record-list__item">' +
          '<p class="record-list__year">' +
          escapeHtml(item.year) +
          "</p>" +
          '<div class="record-list__body">' +
          '<p class="record-list__type">' +
          escapeHtml(item.type) +
          "</p>" +
          '<h3 class="record-list__title">' +
          escapeHtml(item.title) +
          "</h3>" +
          '<p class="record-list__venue">' +
          escapeHtml(item.venue) +
          ", " +
          escapeHtml(item.city) +
          "</p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderContactDossier() {
    if (!elements.contactDossier) {
      return;
    }

    const links = [site.contact.instagram, site.contact.email, site.contact.xiaohongshu]
      .map((item) => {
        const valueMarkup = item.href
          ? '<a class="dossier-links__value" href="' +
            escapeHtml(item.href) +
            '" target="' +
            (item.href.startsWith("http") ? "_blank" : "_self") +
            '" rel="noreferrer">' +
            escapeHtml(item.value) +
            "</a>"
          : '<span class="dossier-links__value">' + escapeHtml(item.value) + "</span>";

        return (
          '<div class="dossier-links__row">' +
          '<p class="dossier-links__label">' +
          escapeHtml(item.label) +
          "</p>" +
          '<div class="dossier-links__actions">' +
          valueMarkup +
          '<button class="dossier-links__copy" type="button" data-copy-text="' +
          escapeHtml(item.value) +
          '">Copy</button>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");

    elements.contactDossier.innerHTML =
      '<div class="dossier-card">' +
      '<div class="dossier-card__portrait">' +
      '<img src="' +
      escapeHtml(site.assets.portrait) +
      '" alt="' +
      escapeHtml(site.artist.name + " portrait") +
      '">' +
      "</div>" +
      '<div class="dossier-card__content">' +
      '<p class="dossier-card__name">' +
      escapeHtml(site.artist.name) +
      " / " +
      escapeHtml(site.artist.nameZh) +
      "</p>" +
      '<p class="dossier-card__facts">' +
      escapeHtml(site.artist.birth) +
      "<br>" +
      escapeHtml(site.artist.study) +
      "</p>" +
      '<p class="dossier-card__copy">' +
      escapeHtml(site.artist.bioEn) +
      "</p>" +
      '<div class="dossier-links">' +
      links +
      "</div>" +
      '<a class="dossier-card__portfolio" href="' +
      escapeHtml(site.assets.portfolioPdf) +
      '" target="_blank" rel="noreferrer">' +
      escapeHtml(site.labels.portfolio) +
      "</a>" +
      "</div>" +
      "</div>";
  }

  function renderCvDossier() {
    if (!elements.cvDossier) {
      return;
    }

    const entries = site.cv.entries
      .map((item) => {
        return (
          '<li class="cv-dossier__entry">' +
          '<span class="cv-dossier__entry-year">' +
          escapeHtml(item.year) +
          "</span>" +
          '<div class="cv-dossier__entry-body">' +
          '<p class="cv-dossier__entry-title">' +
          escapeHtml(item.title) +
          "</p>" +
          '<p class="cv-dossier__entry-meta">' +
          escapeHtml(item.type) +
          " / " +
          escapeHtml(item.venue) +
          ", " +
          escapeHtml(item.city) +
          "</p>" +
          "</div>" +
          "</li>"
        );
      })
      .join("");

    elements.cvDossier.innerHTML =
      '<div class="cv-dossier__facts">' +
      '<p><span>Name</span><strong>' +
      escapeHtml(site.artist.name) +
      " / " +
      escapeHtml(site.artist.nameZh) +
      "</strong></p>" +
      '<p><span>Born</span><strong>' +
      escapeHtml(site.artist.birth) +
      "</strong></p>" +
      '<p><span>Study</span><strong>' +
      escapeHtml(site.artist.study) +
      "</strong></p>" +
      "</div>" +
      '<div class="cv-dossier__bios">' +
      '<div class="cv-dossier__bio">' +
      '<h3>English</h3>' +
      '<p>' +
      escapeHtml(site.artist.bioEn) +
      "</p>" +
      "</div>" +
      '<div class="cv-dossier__bio">' +
      '<h3>中文</h3>' +
      '<p>' +
      escapeHtml(site.artist.bioZh) +
      "</p>" +
      "</div>" +
      "</div>" +
      '<a class="dossier-card__portfolio dossier-card__portfolio--inline" href="' +
      escapeHtml(site.assets.portfolioPdf) +
      '" target="_blank" rel="noreferrer">' +
      escapeHtml(site.labels.portfolio) +
      "</a>" +
      '<ul class="cv-dossier__list">' +
      entries +
      "</ul>";
  }

  function bindEvents() {
    document.querySelectorAll("[data-work-trigger]").forEach((piece) => {
      const workId = piece.getAttribute("data-work-trigger");
      if (!workId) {
        return;
      }

      piece.addEventListener("click", () => {
        handleStagePieceActivation(workId);
      });

      piece.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleStagePieceActivation(workId);
        }
      });

      if (supportsHover) {
        piece.addEventListener("mouseenter", () => {
          if (isCompactViewport() || state.openPanel || state.isDetailOpen) {
            return;
          }
          state.hoveredWorkId = workId;
          focusWork(workId, { preserveHover: true, preserveMobile: true });
        });

        piece.addEventListener("mouseleave", () => {
          if (state.hoveredWorkId === workId) {
            state.hoveredWorkId = null;
            renderStageState();
            updateViewerPrompt();
          }
        });
      }
    });

    document.querySelectorAll("[data-panel-link]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const panelKey = link.getAttribute("data-panel-link");
        if (!panelKey) {
          return;
        }

        if (state.openPanel === panelKey) {
          clearHash();
        } else {
          setHash(panelKey);
        }
      });
    });

    document.querySelectorAll("[data-close-panel]").forEach((button) => {
      button.addEventListener("click", () => {
        clearHash();
      });
    });

    if (elements.viewerButton) {
      elements.viewerButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (state.openPanel || state.isDetailOpen) {
          return;
        }

        if (state.hoveredWorkId) {
          state.hoveredWorkId = null;
        }

        if (state.isHeartFullscreenOpen) {
          closeHeartFullscreen({ skipFocusRestore: true });
        }

        focusAdjacentWork(1);
        replayViewerIntro();
      });
    }

    document.querySelectorAll("[data-detail-nav]").forEach((button) => {
      button.addEventListener("click", () => {
        navigateDetail(Number(button.getAttribute("data-detail-nav") || "0"));
      });
    });

    document.querySelectorAll("[data-close-detail]").forEach((button) => {
      button.addEventListener("click", closeDetail);
    });

    if (elements.paintingsIndex) {
      elements.paintingsIndex.addEventListener("click", (event) => {
        const row = event.target.closest("[data-index-work]");
        if (!row) {
          return;
        }

        const workId = row.getAttribute("data-index-work");
        if (!workId) {
          return;
        }

        focusWork(workId, { preserveHover: false, preserveMobile: false });
        clearHash();
      });
    }

    document.addEventListener("click", async (event) => {
      if (
        state.viewerExpanded &&
        !event.target.closest("#viewer") &&
        !event.target.closest("[data-panel-link]")
      ) {
        setViewerExpanded(false);
      }

      const copyTrigger = event.target.closest("[data-copy-text]");
      if (!copyTrigger) {
        return;
      }

      const text = copyTrigger.getAttribute("data-copy-text");
      if (!text) {
        return;
      }

      const original = copyTrigger.textContent;

      try {
        await navigator.clipboard.writeText(text);
        copyTrigger.textContent = "Copied";
        window.setTimeout(() => {
          copyTrigger.textContent = original;
        }, 1200);
      } catch (error) {
        copyTrigger.textContent = original;
      }
    });

    window.addEventListener("hashchange", applyHashState);

    window.addEventListener("resize", () => {
      if (!isCompactViewport()) {
        state.mobileTapStage = "idle";
      }

      renderStageState();
      updateViewerPrompt();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (state.isHeartFullscreenOpen) {
          closeHeartFullscreen();
          return;
        }

        if (state.isDetailOpen) {
          closeDetail();
          return;
        }

        if (state.openPanel) {
          clearHash();
          return;
        }

        if (state.viewerExpanded) {
          setViewerExpanded(false);
          return;
        }
      }

      if (state.isDetailOpen && event.key === "ArrowRight") {
        navigateDetail(1);
      }

      if (state.isDetailOpen && event.key === "ArrowLeft") {
        navigateDetail(-1);
      }
    });
  }

  function handleStagePieceActivation(workId) {
    if (!workMap.has(workId) || state.openPanel) {
      return;
    }

    if (isCompactViewport()) {
      if (state.activeWorkId !== workId || state.mobileTapStage !== "focused") {
        focusWork(workId, { preserveHover: false, preserveMobile: false });
        return;
      }

      openDetail(workId);
      return;
    }

    focusWork(workId, { preserveHover: false, preserveMobile: true });
    openDetail(workId);
  }

  function focusWork(workId, options) {
    if (!workMap.has(workId)) {
      return;
    }

    const workChanged = state.activeWorkId !== workId;
    state.activeWorkId = workId;

    if (!options || !options.preserveHover) {
      state.hoveredWorkId = null;
    }

    if ((!options || !options.preserveMobile) && isCompactViewport()) {
      state.mobileTapStage = "focused";
    }

    if (workChanged && state.isHeartFullscreenOpen) {
      closeHeartFullscreen({ skipFocusRestore: true });
    }

    if (workChanged && state.viewerExpanded) {
      state.viewerExpanded = false;
    }

    renderViewer();
    renderStageState();
    renderPaintingsIndexState();

    if (state.isDetailOpen) {
      state.detailWorkId = workId;
      renderDetail();
    }
  }

  function focusAdjacentWork(step) {
    const currentIndex = allWorks.findIndex((item) => item.id === state.activeWorkId);
    if (currentIndex === -1) {
      return;
    }

    const nextIndex = (currentIndex + step + allWorks.length) % allWorks.length;
    const nextWork = allWorks[nextIndex];
    if (!nextWork) {
      return;
    }

    focusWork(nextWork.id, { preserveHover: false, preserveMobile: true });
  }

  function replayViewerIntro() {
    if (!elements.viewer || !elements.viewerImageHeart || !elements.viewerFrame) {
      return;
    }

    elements.viewer.classList.remove("is-replaying");
    elements.viewer.classList.add("is-replay-reset");

    void elements.viewer.offsetWidth;
    elements.viewer.classList.remove("is-replay-reset");
    elements.viewer.classList.add("is-replaying");
  }

  function renderViewer() {
    const work = workMap.get(state.activeWorkId);
    if (!work) {
      return;
    }

    if (elements.viewerImageHeart) {
      elements.viewerImageHeart.src = work.previewImage || work.image;
      elements.viewerImageHeart.alt = work.alt;
    }

    if (elements.viewerTitle) {
      elements.viewerTitle.textContent = work.title;
    }

    if (elements.viewerTitleZh) {
      elements.viewerTitleZh.textContent = work.titleZh;
    }

    if (elements.viewerLine) {
      elements.viewerLine.textContent = work.medium + " / " + work.size + " / " + work.year;
    }

    if (elements.stageKicker) {
      elements.stageKicker.textContent = "";
    }

    if (elements.stageSubtitle) {
      elements.stageSubtitle.textContent = work.titleZh + " / " + work.medium + " / " + work.size + " / " + work.year;
    }

    if (elements.stageTone) {
      elements.stageTone.style.setProperty("--viewer-tone", work.viewerTone || defaultViewerTone);
    }

    if (elements.detailLayer) {
      elements.detailLayer.style.setProperty("--viewer-tone", work.viewerTone || defaultViewerTone);
    }

    if (elements.heartFullscreen) {
      elements.heartFullscreen.style.setProperty("--fullscreen-tone", work.viewerTone || defaultViewerTone);
    }

    updateViewerPrompt();
    updateDocumentTitle();
  }

  function updateViewerPrompt() {
    if (!elements.viewerPrompt) {
      return;
    }

    elements.viewerPrompt.textContent = "";
  }

  function renderStageState() {
    const emphasis =
      !state.openPanel &&
      !state.isDetailOpen &&
      Boolean(state.hoveredWorkId || (isCompactViewport() && state.mobileTapStage === "focused"));

    elements.body.classList.toggle("has-panel-open", Boolean(state.openPanel));
    elements.body.classList.toggle("has-detail-open", state.isDetailOpen);
    elements.body.classList.toggle("is-heart-fullscreen", state.isHeartFullscreenOpen);
    elements.stage.classList.toggle("has-emphasis", emphasis);
    elements.stage.classList.toggle("is-muted", Boolean(state.openPanel || state.isDetailOpen));
    if (elements.viewer) {
      elements.viewer.classList.toggle("is-expanded", state.viewerExpanded);
    }
    if (elements.viewerButton) {
      elements.viewerButton.setAttribute("aria-pressed", state.viewerExpanded ? "true" : "false");
    }
    if (elements.heartFullscreen) {
      elements.heartFullscreen.classList.toggle("is-open", state.isHeartFullscreenOpen);
      elements.heartFullscreen.setAttribute("aria-hidden", state.isHeartFullscreenOpen ? "false" : "true");
    }
    document.querySelectorAll("[data-work-trigger]").forEach((piece) => {
      const workId = piece.getAttribute("data-work-trigger");
      piece.classList.toggle("is-active", workId === state.activeWorkId);
      piece.classList.toggle("is-hovered", workId === state.hoveredWorkId);
      piece.classList.toggle("is-dimmed", emphasis && workId !== state.activeWorkId);
    });
  }

  function renderPaintingsIndexState() {
    document.querySelectorAll("[data-index-work]").forEach((row) => {
      row.classList.toggle("is-active", row.getAttribute("data-index-work") === state.activeWorkId);
    });
  }

  function openDetail(workId, options) {
    if (!workMap.has(workId) || !elements.detailLayer) {
      return;
    }

    if (state.isHeartFullscreenOpen) {
      closeHeartFullscreen({ skipFocusRestore: true });
    }

    const fromHeart = Boolean(options && options.fromHeart);
    state.viewerExpanded = false;
    state.isDetailOpen = true;
    state.detailWorkId = workId;
    state.hoveredWorkId = null;

    if (state.openPanel) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      state.openPanel = null;
      renderPanelState();
    }

    renderDetail();
    renderStageState();
    elements.detailLayer.classList.toggle("is-heart-opening", fromHeart);
    elements.detailLayer.classList.add("is-open");
    elements.detailLayer.setAttribute("aria-hidden", "false");

    const closeButton = elements.detailLayer.querySelector(".detail-layer__close");
    if (closeButton) {
      window.requestAnimationFrame(() => {
        closeButton.focus();
      });
    }
  }

  function closeDetail() {
    if (!state.isDetailOpen || !elements.detailLayer) {
      return;
    }

    state.isDetailOpen = false;
    elements.detailLayer.classList.remove("is-heart-opening");
    elements.detailLayer.classList.remove("is-open");
    elements.detailLayer.setAttribute("aria-hidden", "true");
    renderStageState();
    updateDocumentTitle();

    if (elements.viewerButton) {
      elements.viewerButton.focus();
    }
  }

  function openHeartFullscreen(workId) {
    if (!workMap.has(workId) || !elements.heartFullscreen) {
      return;
    }

    state.viewerExpanded = false;
    state.isHeartFullscreenOpen = true;
    state.fullscreenWorkId = workId;
    state.hoveredWorkId = null;

    if (isCompactViewport()) {
      state.mobileTapStage = "focused";
    }

    renderHeartFullscreen();
    renderStageState();
    updateDocumentTitle();
  }

  function closeHeartFullscreen(options) {
    if (!state.isHeartFullscreenOpen || !elements.heartFullscreen) {
      return;
    }

    state.isHeartFullscreenOpen = false;
    state.fullscreenWorkId = null;
    renderStageState();
    updateDocumentTitle();

    if (!options || !options.skipFocusRestore) {
      if (elements.viewerButton) {
        elements.viewerButton.focus();
      }
    }
  }

  function renderHeartFullscreen() {
    const work = workMap.get(state.fullscreenWorkId || state.activeWorkId);
    if (!work || !elements.heartFullscreenImage || !elements.heartFullscreen) {
      return;
    }

    elements.heartFullscreenImage.src = work.image;
    elements.heartFullscreenImage.alt = work.alt;
    elements.heartFullscreen.style.setProperty("--fullscreen-tone", work.viewerTone || defaultViewerTone);
  }

  function renderDetail() {
    const work = workMap.get(state.detailWorkId);
    if (!work) {
      return;
    }

    elements.detailImage.src = work.image;
    elements.detailImage.alt = work.alt;
    elements.detailTitle.textContent = work.title;
    elements.detailTitleZh.textContent = work.titleZh;
    elements.detailLine.textContent = work.medium + " / " + work.size + " / " + work.year;

    const index = allWorks.findIndex((item) => item.id === work.id);
    elements.detailCount.textContent =
      String(index + 1).padStart(2, "0") + " / " + String(allWorks.length).padStart(2, "0");

    updateDocumentTitle();
  }

  function navigateDetail(step) {
    if (!state.detailWorkId) {
      return;
    }

    const currentIndex = allWorks.findIndex((item) => item.id === state.detailWorkId);
    const nextIndex = (currentIndex + step + allWorks.length) % allWorks.length;
    const nextWork = allWorks[nextIndex];

    state.detailWorkId = nextWork.id;
    state.activeWorkId = nextWork.id;

    if (isCompactViewport()) {
      state.mobileTapStage = "focused";
    }

    renderDetail();
    renderViewer();
    renderStageState();
    renderPaintingsIndexState();
  }

  function applyHashState() {
    const hash = window.location.hash.replace("#", "");
    state.openPanel = panelKeys.includes(hash) ? hash : null;

    if (state.openPanel) {
      state.viewerExpanded = false;
      closeHeartFullscreen({ skipFocusRestore: true });
    }

    if (state.isDetailOpen) {
      closeDetail();
    }

    renderPanelState();
    renderStageState();
    updateDocumentTitle();
  }

  function setViewerExpanded(isExpanded) {
    state.viewerExpanded = Boolean(isExpanded);
    renderStageState();
  }

  function renderPanelState() {
    if (elements.panelLayer) {
      elements.panelLayer.classList.toggle("has-open-panel", Boolean(state.openPanel));
    }

    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const isOpen = panel.getAttribute("data-panel") === state.openPanel;
      panel.classList.toggle("is-open", isOpen);
      panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
    });

    document.querySelectorAll("[data-panel-link]").forEach((link) => {
      const isActive = link.getAttribute("data-panel-link") === state.openPanel;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function setHash(panelKey) {
    if (window.location.hash === "#" + panelKey) {
      applyHashState();
      return;
    }

    window.location.hash = panelKey;
  }

  function clearHash() {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    applyHashState();
  }

  function updateDocumentTitle() {
    if (state.isHeartFullscreenOpen && state.fullscreenWorkId) {
      const fullscreenWork = workMap.get(state.fullscreenWorkId);
      if (fullscreenWork) {
        document.title = fullscreenWork.title + " — " + site.siteTitle;
        return;
      }
    }

    if (state.isDetailOpen && state.detailWorkId) {
      const detailWork = workMap.get(state.detailWorkId);
      if (detailWork) {
        document.title = detailWork.title + " — " + site.siteTitle;
        return;
      }
    }

    if (state.openPanel) {
      const panel = site.nav.find((item) => item.key === state.openPanel);
      document.title = (panel ? panel.label : site.siteTitle) + " — " + site.siteTitle;
      return;
    }

    document.title = site.siteTitle;
  }

  function isCompactViewport() {
    return window.matchMedia("(max-width: 920px)").matches;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
