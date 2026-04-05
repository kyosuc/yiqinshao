(function () {
  const exhibitions = [
    {
      year: "2026",
      type: "Solo Project",
      typeZh: "个人项目",
      title: "Before It Happens",
      titleZh: "在发生之前",
      venue: "Yongle 798",
      venueZh: "北京永乐798现场",
      city: "Beijing",
      cityZh: "北京",
    },
    {
      year: "2026",
      type: "Group Exhibition",
      typeZh: "群展",
      title: "Return and Tide: New Year Exhibition of Young Artists",
      titleZh: "回归与浪潮青年艺术家跨年展",
      venue: "Yongle 798",
      venueZh: "北京永乐798现场",
      city: "Beijing",
      cityZh: "北京",
    },
    {
      year: "2025",
      type: "Group Exhibition",
      typeZh: "群展",
      title: "The Rebellious Table",
      titleZh: "叛逆的餐桌",
      venue: "CoBrA Gallery",
      venueZh: "眼镜蛇画廊",
      city: "Shanghai",
      cityZh: "上海",
    },
    {
      year: "2025",
      type: "Art Fair",
      typeZh: "当代艺术博览会",
      title: "ART021 Shanghai Contemporary Art Fair",
      titleZh: "上海021当代艺术博览会",
      venue: "Bonian Space",
      venueZh: "伯年艺术空间",
      city: "Shanghai",
      cityZh: "上海",
    },
    {
      year: "2025",
      type: "Award Exhibition",
      typeZh: "青年美术奖",
      title: "Third Hong Kong Youth Art Award",
      titleZh: "第三届香港青年美术奖",
      venue: "Hong Kong Youth Art Award",
      venueZh: "香港青年美术奖",
      city: "Hong Kong",
      cityZh: "香港",
    },
    {
      year: "2025",
      type: "Annual Exhibition",
      typeZh: "国际艺术年展",
      title: "Fifth Qingdao International Art Annual",
      titleZh: "第五届青岛国际艺术年展",
      venue: "Qingdao International Art Annual",
      venueZh: "青岛国际艺术年展",
      city: "Qingdao",
      cityZh: "青岛",
    },
  ];

  const exhibitionStories = [
    {
      id: "before-it-happens-2026",
      titleDisplay: "2026，个人项目，在发生之前，北京永乐798现场",
      year: "2026",
      typeEn: "Solo Project",
      titleEn: "Before It Happens",
      titleZh: "在发生之前",
      venueEn: "Yongle 798",
      city: "Beijing",
      dates: "2026",
      copyEn:
        "This solo presentation gathered the paintings into a more focused narrative about anticipation, suspended touch, and the emotional charge of things just before they arrive. The installation keeps the works intimate even when the wall opens up, allowing small panels and concentrated images to speak to one another without losing their privacy.",
      contextEn:
        "A fuller public press text was not readily indexable online, so this English note is adapted from the project title, venue information, and your local installation documentation.",
      images: [
        "个人网站要用到的所有资料。/参考作品/2026，个人项目，在发生之前，北京永乐798现场/1.jpg",
        "个人网站要用到的所有资料。/参考作品/2026，个人项目，在发生之前，北京永乐798现场/2.jpg",
        "个人网站要用到的所有资料。/参考作品/2026，个人项目，在发生之前，北京永乐798现场/3.jpg",
        "个人网站要用到的所有资料。/参考作品/2026，个人项目，在发生之前，北京永乐798现场/4.jpg",
        "个人网站要用到的所有资料。/参考作品/2026，个人项目，在发生之前，北京永乐798现场/5.jpg",
      ],
    },
    {
      id: "return-and-tide-2026",
      titleDisplay: "2026，群展，回归与浪潮青年艺术家跨年展，北京永乐798现场",
      year: "2026",
      typeEn: "Group Exhibition",
      titleEn: "Return and Tide: New Year Exhibition of Young Artists",
      titleZh: "回归与浪潮青年艺术家跨年展",
      venueEn: "Yongle 798",
      city: "Beijing",
      dates: "2026",
      copyEn:
        "Presented at Yongle 798 in Beijing, this year-end group presentation placed smaller and mid-scale paintings into a breathing, constellation-like arrangement. Rather than forcing the works into a strict sequence, the hanging lets echoes move across the wall: recurrence, sweetness, unease, and withheld contact remain visible without becoming fixed.",
      contextEn:
        "A fuller public press text was not readily indexable online, so this English note is adapted from the project title, venue information, and your local installation documentation.",
      images: [
        "个人网站要用到的所有资料。/参考作品/2026，群展，回归与浪潮青年艺术家跨年展，北京永乐798现场/1.jpg",
        "个人网站要用到的所有资料。/参考作品/2026，群展，回归与浪潮青年艺术家跨年展，北京永乐798现场/2.jpg",
        "个人网站要用到的所有资料。/参考作品/2026，群展，回归与浪潮青年艺术家跨年展，北京永乐798现场/3.jpg",
        "个人网站要用到的所有资料。/参考作品/2026，群展，回归与浪潮青年艺术家跨年展，北京永乐798现场/4.jpg",
      ],
    },
    {
      id: "rebellious-table-2025",
      titleDisplay: "2025，群展，叛逆的餐桌，眼镜蛇画廊，上海",
      year: "2025",
      typeEn: "Group Exhibition",
      titleEn: "The Rebellious Table",
      titleZh: "叛逆的餐桌",
      venueEn: "CoBrA Gallery",
      city: "Shanghai",
      dates: "20 Dec 2025 - 28 Feb 2026",
      copyEn:
        "Public descriptions from CoBrA Gallery frame this exhibition as more than a table: an attitude that pushes against convention by placing emerging and established artists into a shared scene. Within that context, food, vessels, domestic objects, and everyday arrangements become materials for experiment rather than stable symbols.",
      contextEn:
        "The installation views extend that idea spatially. Arches, reflections, and warm interior surfaces turn the paintings into part of a larger choreographed setting, where softness and disturbance occupy the same room.",
      sourceLabel: "CoBrA Gallery — exhibition listing",
      sourceUrl: "https://www.cobragallery.cn/cn/exhibitions/",
      images: [
        "个人网站要用到的所有资料。/参考作品/2025，群展，叛逆的餐桌，眼镜蛇画廊，上海/1.jpg",
        "个人网站要用到的所有资料。/参考作品/2025，群展，叛逆的餐桌，眼镜蛇画廊，上海/2.jpg",
        "个人网站要用到的所有资料。/参考作品/2025，群展，叛逆的餐桌，眼镜蛇画廊，上海/3.jpg",
        "个人网站要用到的所有资料。/参考作品/2025，群展，叛逆的餐桌，眼镜蛇画廊，上海/4.jpg",
      ],
    },
    {
      id: "art021-bonian-space-2025",
      titleDisplay: "2025，上海021当代艺术博览会，伯年艺术空间",
      year: "2025",
      typeEn: "Art Fair",
      titleEn: "ART021 Shanghai Contemporary Art Fair",
      titleZh: "上海021当代艺术博览会",
      venueEn: "Presented with Bonian Space",
      city: "Shanghai",
      dates: "2025",
      copyEn:
        "Installed in a fair setting with Bonian Space, this presentation condensed several intimate paintings into a compact wall arrangement. The booth format sharpened the work's scale: small surfaces, charged objects, and private symbols had to hold attention inside a faster, more public rhythm of viewing.",
      contextEn:
        "The installation photographs emphasize a concentrated constellation rather than a single statement wall, allowing each panel to stay self-contained while still reading as part of one emotional field.",
      sourceLabel: "Bonian Space — fairs archive",
      sourceUrl: "https://www.bonianspace.com/art-fairs/",
      images: [
        "个人网站要用到的所有资料。/参考作品/2025，上海021当代艺术博览会，伯年艺术空间/1.jpg",
        "个人网站要用到的所有资料。/参考作品/2025，上海021当代艺术博览会，伯年艺术空间/2.jpg",
        "个人网站要用到的所有资料。/参考作品/2025，上海021当代艺术博览会，伯年艺术空间/3.jpg",
      ],
    },
  ];

  const groupedWorkSources = [
    {
      key: "1",
      label: "01",
      files: [
        "个人网站要用到的所有资料。/参考作品/1/体表温度 布面油画 120x120cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/囚果 布面油画 80x60cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/开幕 布面油画 120x180cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/暗涌 布面油画 75x50cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/浮生 木板油画棒、油画 60x40cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/珠玉 布面油画 60x60cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/窥 布面油画 60x40cm 2025 .jpg",
        "个人网站要用到的所有资料。/参考作品/1/第三视角 布面油画 45x30cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/红幕下 布面油画 25x20cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/花间私语 布面油画 50x70cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/被固定的余温 布面油画 20x15cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/1/镜核 布面油画 50x30cm 2025.jpg",
      ],
    },
    {
      key: "2",
      label: "02",
      files: [
        "个人网站要用到的所有资料。/参考作品/2/两只气球 布面油画 69x69cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/初熟 布面油画 32x32cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/圆圆 布面油画 20x20cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/旋木 布面油画 22x15cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/欲言又止 布面油画 60x60cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/温柔束缚 布面油画 20x20cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/温柔禁忌 布面油画 32x32cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/湿语 布面油画 20x20cm 2025 .jpg",
        "个人网站要用到的所有资料。/参考作品/2/爱与痛的边缘 布面油画 20x20cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/绝对占有 布面油画 18x25cm 2025.jpg",
        "个人网站要用到的所有资料。/参考作品/2/门铃 布面油画 20x20cm 2025.jpg",
      ],
    },
    {
      key: "3",
      label: "03",
      files: [
        "个人网站要用到的所有资料。/参考作品/3/不能说的秘密 木板油画 30x22cm 2025 .jpg",
        "个人网站要用到的所有资料。/参考作品/3/入口开启 木板油画 31x15cm 2025 ",
        "个人网站要用到的所有资料。/参考作品/3/圈圈圆圆圈圈木板油画 20x18cm 2025 拷贝.jpg",
        "个人网站要用到的所有资料。/参考作品/3/带刺的甜 木板油画 20x20cm 2025",
        "个人网站要用到的所有资料。/参考作品/3/幸福开始有预兆 木板油画 18x18cm 2025 ",
        "个人网站要用到的所有资料。/参考作品/3/有关甜的诱导 木板油画 25x20cm 2025 ",
        "个人网站要用到的所有资料。/参考作品/3/被点亮的心 木板油画 25x18cm 2025",
      ],
    },
    {
      key: "4",
      label: "04",
      files: [
        "个人网站要用到的所有资料。/参考作品/4/Ringo 木板油画 28x20cm 2026",
        "个人网站要用到的所有资料。/参考作品/4/夹 木板油画 22x10cm 2026",
        "个人网站要用到的所有资料。/参考作品/4/小半 木板油画 26x26cm 2026 ",
        "个人网站要用到的所有资料。/参考作品/4/枕边人木板油画 20x20cm 2026",
        "个人网站要用到的所有资料。/参考作品/4/熟透 木板油画 25x25cm 2026 ",
        "个人网站要用到的所有资料。/参考作品/4/裙摆之上 木板油画 26x28cm 2026 ",
        "个人网站要用到的所有资料。/参考作品/4/裹语 木板油画 25x35cm 2026",
        "个人网站要用到的所有资料。/参考作品/4/足下 木板油画 30x30cm 2026 ",
        "个人网站要用到的所有资料。/参考作品/4/限时奖励 木板油画 25x20cm 2026 ",
        "个人网站要用到的所有资料。/参考作品/4/飘 木板油画 30x22cm 2026 ",
      ],
    },
  ];

  const knownMediaZh = ["木板油画棒、油画", "木板油画", "布面油画"];

  function splitTitleAndMedium(prefix) {
    const normalized = prefix.replace(/\s+/g, " ").trim();
    for (const medium of knownMediaZh) {
      const position = normalized.lastIndexOf(medium);
      if (position !== -1) {
        return {
          titleZh: normalized.slice(0, position).trim() || normalized,
          mediumZh: medium,
        };
      }
    }

    return {
      titleZh: normalized,
      mediumZh: "",
    };
  }

  function deriveWebSafeName(file) {
    const fileName = file.split("/").pop() || "";
    const stem = fileName.replace(/\.[^.]+$/, "").trim();
    return stem + ".jpg";
  }

  function deriveDisplayImage(file, groupKey) {
    if (groupKey !== "3" && groupKey !== "4") {
      return file;
    }

    return "个人网站要用到的所有资料。/参考作品/.web-ready/" + groupKey + "/" + deriveWebSafeName(file);
  }

  function derivePreviewImage(file, groupKey) {
    return "个人网站要用到的所有资料。/参考作品/.orbit-previews-websafe/" + groupKey + "/" + deriveWebSafeName(file);
  }

  function createGroupedWork(file, groupKey, index) {
    const fileName = file.split("/").pop() || "";
    const cleanName = fileName.replace(/\.[^.]+$/, "").trim();
    const metaMatch = cleanName.match(/^(.*)\s+(\d+\s*x\s*\d+cm)\s+(\d{3,4})$/);
    const prefix = metaMatch ? metaMatch[1].trim() : cleanName;
    const size = metaMatch ? metaMatch[2].replace(/\s*x\s*/g, " x ") : "";
    const year = metaMatch ? metaMatch[3] : "";
    const parts = splitTitleAndMedium(prefix);

    return {
      id: "group-" + groupKey + "-" + String(index + 1).padStart(2, "0"),
      title: parts.titleZh,
      titleZh: parts.titleZh,
      medium: parts.mediumZh,
      mediumZh: parts.mediumZh,
      size,
      year,
      image: deriveDisplayImage(file, groupKey),
      previewImage: derivePreviewImage(file, groupKey),
      alt:
        parts.titleZh +
        (parts.mediumZh ? ", " + parts.mediumZh : "") +
        (size ? ", " + size : "") +
        (year ? ", " + year : ""),
    };
  }

  const workGroups = groupedWorkSources.map(function (group) {
    return {
      key: group.key,
      label: group.label,
      title: group.label,
      works: group.files.map(function (file, index) {
        return createGroupedWork(file, group.key, index);
      }),
    };
  });

  const works = [
    {
      id: "whispers-among-flowers",
      title: "Whispers Among Flowers",
      titleZh: "花间私语",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "50 x 70 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/1/花间私语 布面油画 50x70cm 2025.jpg",
      alt: "Whispers Among Flowers, oil on canvas, 50 x 70 cm, 2025",
      hoverCaption: "Whispers Among Flowers / 花间私语",
      rotation: "-7deg",
      depth: 3,
      viewerTone: "rgba(235, 177, 182, 0.42)",
      stageDesktop: {
        top: "10%",
        left: "58%",
        width: "24vw",
      },
      stageMobile: {
        top: "12%",
        left: "48%",
        width: "46vw",
      },
    },
    {
      id: "captive-fruit",
      title: "Captive Fruit",
      titleZh: "囚果",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "80 x 60 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/1/囚果 布面油画 80x60cm 2025.jpg",
      alt: "Captive Fruit, oil on canvas, 80 x 60 cm, 2025",
      hoverCaption: "Captive Fruit / 囚果",
      rotation: "5deg",
      depth: 4,
      viewerTone: "rgba(132, 35, 49, 0.44)",
      stageDesktop: {
        top: "46%",
        left: "70%",
        width: "17vw",
      },
      stageMobile: {
        top: "48%",
        left: "67%",
        width: "34vw",
      },
    },
    {
      id: "two-balloons",
      title: "Two Balloons",
      titleZh: "两只气球",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "69 x 69 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/2/两只气球 布面油画 69x69cm 2025.jpg",
      alt: "Two Balloons, oil on canvas, 69 x 69 cm, 2025",
      hoverCaption: "Two Balloons / 两只气球",
      rotation: "4deg",
      depth: 2,
      viewerTone: "rgba(224, 145, 160, 0.38)",
      stageDesktop: {
        top: "8%",
        left: "17%",
        width: "15vw",
      },
      stageMobile: {
        top: "10%",
        left: "8%",
        width: "30vw",
      },
    },
    {
      id: "tender-taboo",
      title: "Tender Taboo",
      titleZh: "温柔禁忌",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "32 x 32 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/2/温柔禁忌 布面油画 32x32cm 2025.jpg",
      alt: "Tender Taboo, oil on canvas, 32 x 32 cm, 2025",
      hoverCaption: "Tender Taboo / 温柔禁忌",
      rotation: "-8deg",
      depth: 2,
      viewerTone: "rgba(199, 122, 131, 0.34)",
      stageDesktop: {
        top: "58%",
        left: "16%",
        width: "13vw",
      },
      stageMobile: {
        top: "55%",
        left: "7%",
        width: "28vw",
      },
    },
    {
      id: "wet-whisper",
      title: "Wet Whisper",
      titleZh: "湿语",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "20 x 20 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/2/湿语 布面油画 20x20cm 2025 .jpg",
      alt: "Wet Whisper, oil on canvas, 20 x 20 cm, 2025",
      hoverCaption: "Wet Whisper / 湿语",
      rotation: "6deg",
      depth: 4,
      viewerTone: "rgba(234, 162, 167, 0.34)",
      stageDesktop: {
        top: "28%",
        left: "36%",
        width: "11vw",
      },
      stageMobile: {
        top: "34%",
        left: "71%",
        width: "22vw",
      },
    },
    {
      id: "edge-of-love-and-pain",
      title: "Edge of Love and Pain",
      titleZh: "爱与痛的边缘",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "20 x 20 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/2/爱与痛的边缘 布面油画 20x20cm 2025.jpg",
      alt: "Edge of Love and Pain, oil on canvas, 20 x 20 cm, 2025",
      hoverCaption: "Edge of Love and Pain / 爱与痛的边缘",
      rotation: "-6deg",
      depth: 1,
      viewerTone: "rgba(103, 27, 41, 0.34)",
      stageDesktop: {
        top: "74%",
        left: "38%",
        width: "12vw",
      },
      stageMobile: {
        top: "76%",
        left: "33%",
        width: "25vw",
      },
    },
    {
      id: "round-round",
      title: "Round Round",
      titleZh: "圆圆",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "20 x 20 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/2/圆圆 布面油画 20x20cm 2025.jpg",
      alt: "Round Round, oil on canvas, 20 x 20 cm, 2025",
      hoverCaption: "Round Round / 圆圆",
      rotation: "9deg",
      depth: 1,
      viewerTone: "rgba(220, 136, 158, 0.3)",
      stageDesktop: {
        top: "12%",
        left: "80%",
        width: "10vw",
      },
      stageMobile: {
        top: "20%",
        left: "82%",
        width: "20vw",
      },
    },
    {
      id: "doorbell",
      title: "Doorbell",
      titleZh: "门铃",
      medium: "Oil on canvas",
      mediumZh: "布面油画",
      size: "20 x 20 cm",
      year: "2025",
      image: "个人网站要用到的所有资料。/参考作品/2/门铃 布面油画 20x20cm 2025.jpg",
      alt: "Doorbell, oil on canvas, 20 x 20 cm, 2025",
      hoverCaption: "Doorbell / 门铃",
      rotation: "-3deg",
      depth: 1,
      viewerTone: "rgba(155, 101, 86, 0.3)",
      stageDesktop: {
        top: "76%",
        left: "80%",
        width: "11vw",
      },
      stageMobile: {
        top: "72%",
        left: "78%",
        width: "22vw",
      },
    },
  ];

  window.SITE_CONTENT = {
    siteTitle: "Yiqin Shao",
    shortTitle: "YIQIN SHAO",
    nav: [
      { key: "paintings", label: "Paintings", href: "#paintings" },
      { key: "exhibition", label: "Exhibition", href: "#exhibition" },
      { key: "contact", label: "Contact", href: "#contact" },
      { key: "cv", label: "CV", href: "#cv" },
    ],
    labels: {
      currentWork: "Current Work",
      enterDetail: "Enter Detail",
      tapFocus: "Tap a fragment to bring it to the center.",
      tapOpen: "Tap the viewer to open the full image.",
      hoverHint: "Hover a fragment to pull it closer.",
      clickHint: "Click the viewer to enter the full image.",
      menu: "Menu",
      close: "Close",
      previous: "Previous",
      next: "Next",
      portfolio: "Portfolio PDF",
      archive: "Archive",
      dossier: "CV",
    },
    stage: {
      ghost: "YIQIN SHAO",
      kicker: "",
      subtitle: "",
      railNote:
        "Oil paintings suspended between quiet realism and intimate symbols.",
      defaultWorkId: "captive-fruit",
    },
    panels: {
      paintings: {
        title: "Paintings Index",
        intro:
          "Eight works orbit the stage for now. Select one and it returns to the center, ready to open further.",
      },
      exhibition: {
        title: "Exhibition Record",
        intro:
          "A thin public record around the paintings. The full installation archive will expand later, but the stage keeps the works close for now.",
      },
      contact: {
        title: "Contact",
        intro:
          "For exhibitions, conversations, and future projects, the work remains reachable through direct channels.",
      },
      cv: {
        title: "CV",
        intro:
          "Selected exhibitions, fairs, and recent projects presented in a bilingual record.",
      },
    },
    assets: {
      logo: "个人网站要用到的所有资料。/艺术家签名的logo。.jpg",
      portrait: "个人网站要用到的所有资料。/艺术家个人照片用于在CV里面。.png",
      portfolioPdf: "个人网站要用到的所有资料。/邵怡沁作品.pdf",
    },
    artist: {
      name: "Yiqin Shao",
      nameZh: "邵怡沁",
      birth: "Born in Zhejiang, 1999",
      study: "MFA candidate in Oil Painting, Shanghai University College of Fine Arts",
      bioEn:
        "Working through a deliberate sense of estrangement, Yiqin Shao keeps measured realism in tension with intimate symbols, lifting everyday objects out of their usual context and placing them inside soft, saturated spaces. She is less interested in direct resemblance than in making a pause for the viewer: a suspended moment where time slows, sensations brush against one another, and forms meet in a restrained tremor.",
      bioZh:
        "以一种陌生的方式，将冷静的写实与暧昧象征在其中持续拉扯，把日常物象从原本的语境中抽离出来，安置在柔软且饱和的空间中。并不在意“物像或再现”，而是更想给观者制造一种停留，也许时间在画面中迟滞，亦或者在悸动中彼此碰撞、停下、遇见。",
      note:
        "The archive begins with a small group of paintings and will keep widening from here.",
    },
    contact: {
      instagram: {
        label: "Instagram",
        value: "@loopyyyii",
        href: "https://www.instagram.com/loopyyyii/",
      },
      email: {
        label: "Email",
        value: "yiqinshao329@gmail.com",
        href: "mailto:yiqinshao329@gmail.com",
      },
      xiaohongshu: {
        label: "Xiaohongshu",
        value: "loopyyyii",
        href: "https://xhslink.com/m/4BYA4qwNdAy",
      },
    },
    exhibition: {
      title: "Exhibitions / Installation Views",
      intro:
        "Selected installation views, fair presentations, and project documentation. The page pairs local exhibition photographs with concise English notes so the works can be read both as records and as spatial arrangements.",
      note:
        "Where public exhibition pages were available, they informed the short descriptions here. The two Beijing entries are written from project titles, venue information, and the local installation photographs you provided.",
      stories: exhibitionStories,
      items: exhibitions,
    },
    cv: {
      subtitle: "Selected exhibitions, fairs, and recent projects.",
      entries: exhibitions,
    },
    workGroups,
    works,
  };
})();
