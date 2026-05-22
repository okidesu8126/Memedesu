const templates = [
  {
    id: "bad-good-couple",
    name: "坏情侣 / 好情侣",
    hint: "已有梗图素材",
    category: "中文梗图",
    layout: "image",
    assetUrl: "./src/assets/templates/bad-good-couple.jpg",
    texts: {
      leftTitle: "",
      leftText: "",
      rightTitle: "",
      rightText: "",
    },
  },
  {
    id: "compare",
    name: "双栏对比",
    hint: "适合 Me vs Also me",
    category: "空白模板",
    layout: "split",
    texts: {
      leftTitle: "Me",
      leftText: "认真做内容排期",
      rightTitle: "Also me",
      rightText: "凌晨三点突然想发梗图",
    },
  },
  {
    id: "before-after",
    name: "Before / After",
    hint: "适合变化对比",
    category: "空白模板",
    layout: "split",
    texts: {
      leftTitle: "Before",
      leftText: "以为今天能准点下班",
      rightTitle: "After",
      rightText: "评论区突然爆了一个新梗",
    },
  },
  {
    id: "reaction",
    name: "Reaction 图",
    hint: "适合表情反应",
    category: "反应图",
    layout: "poster",
    texts: {
      leftTitle: "My reaction",
      leftText: "当老板说这个梗很适合品牌调性",
      rightTitle: "",
      rightText: "但发布时间是五分钟前",
    },
  },
  {
    id: "pov",
    name: "POV",
    hint: "适合第一视角梗",
    category: "短视频",
    layout: "poster",
    texts: {
      leftTitle: "POV",
      leftText: "你刚打开后台，发现竞品已经蹭上了热梗",
      rightTitle: "",
      rightText: "现在轮到你了",
    },
  },
];

const platforms = ["全部", "Reddit", "X", "TikTok", "Gaming", "Anime"];
const templateCategories = ["全部", "中文梗图", "反应图", "短视频", "空白模板"];

const onlineSources = [
  {
    name: "Know Your Meme",
    type: "模板图库 / 梗百科",
    note: "适合查来源、演化、热门模板。",
    url: "https://knowyourmeme.com/photos/templates",
    searchUrl: "https://knowyourmeme.com/search?q=",
  },
  {
    name: "Imgflip",
    type: "经典英文模板库",
    note: "适合找 Drake、Distracted Boyfriend 等经典模板。",
    url: "https://imgflip.com/memetemplates",
    searchUrl: "https://imgflip.com/search?q=",
  },
  {
    name: "Kapwing",
    type: "可编辑模板集合",
    note: "适合找视频、图文、社媒格式模板。",
    url: "https://www.kapwing.com/templates",
    searchUrl: "https://www.kapwing.com/search?q=",
  },
  {
    name: "templates.meme",
    type: "按情绪 / 主题分类",
    note: "适合按表达场景找模板。",
    url: "https://templates.meme/templates?sortBy=popular",
    searchUrl: "https://templates.meme/search?q=",
  },
  {
    name: "Meme Creator",
    type: "热门模板榜",
    note: "适合浏览大量热门空白模板。",
    url: "https://www.memecreator.org/browse/templates?page=1&sort=popular",
    searchUrl: "https://www.memecreator.org/browse/templates?sort=popular&q=",
  },
];

const trends = [
  {
    title: "Weekly Roundup 风格",
    platform: "TikTok",
    heat: "高",
    prompt: "当全网都在跟同一个梗，而你的品牌号刚刚上线",
    note: "适合快速借势、热点二创、短视频标题。",
  },
  {
    title: "Millennial vs Gen Z Marketing",
    platform: "X",
    heat: "中高",
    prompt: "我们以为用户想看精致内容，用户其实只想看一句离谱真话",
    note: "适合品牌内容、运营吐槽、职场对比。",
  },
  {
    title: "This Is Fine 结构",
    platform: "Reddit",
    heat: "稳定",
    prompt: "项目进度看起来很稳，直到你打开评论区",
    note: "适合社区运营、危机感、bug 和版本发布。",
  },
  {
    title: "POV 反应句式",
    platform: "TikTok",
    heat: "高",
    prompt: "POV: 你只是想发一张图，结果它成了整个群的头像",
    note: "适合第一视角、剧情化、夸张反应。",
  },
  {
    title: "游戏社区吐槽",
    platform: "Gaming",
    heat: "中",
    prompt: "官方说只是小更新，玩家打开后发现要重新学一遍游戏",
    note: "适合版本更新、开服、抽卡、平衡性调整。",
  },
  {
    title: "二次元社区反差",
    platform: "Anime",
    heat: "中",
    prompt: "嘴上说只是随便看看，实际上已经开始考据第三集背景板",
    note: "适合角色厨、番剧讨论、社区二创。",
  },
];

const inspirationPool = [
  {
    title: "This Is Fine",
    source: "Know Your Meme",
    tag: "Reddit / 反应图",
    cue: "适合表达项目失控、社区炸锅、版本延期。",
    search: "This Is Fine meme template",
    thumb: "FINE",
  },
  {
    title: "Drake Hotline Bling",
    source: "Imgflip",
    tag: "经典对比",
    cue: "适合表达拒绝 A、选择 B 的双栏对比。",
    search: "Drake Hotline Bling meme template",
    thumb: "YES / NO",
  },
  {
    title: "Distracted Boyfriend",
    source: "Imgflip",
    tag: "注意力转移",
    cue: "适合品牌、产品、用户行为的三方关系梗。",
    search: "Distracted Boyfriend meme template",
    thumb: "LOOK",
  },
  {
    title: "Two Buttons",
    source: "Imgflip",
    tag: "选择困难",
    cue: "适合表达运营、产品、玩家两难选择。",
    search: "Two Buttons meme template",
    thumb: "A / B",
  },
  {
    title: "Always Has Been",
    source: "Know Your Meme",
    tag: "反转认知",
    cue: "适合结论反转、真相揭露、社区内梗。",
    search: "Always Has Been meme template",
    thumb: "WAIT",
  },
  {
    title: "Spiderman Pointing",
    source: "Know Your Meme",
    tag: "互相指认",
    cue: "适合竞品对比、社区互怼、同类产品吐槽。",
    search: "Spiderman Pointing meme template",
    thumb: "YOU",
  },
  {
    title: "NPC Wojak",
    source: "Know Your Meme",
    tag: "社区表情",
    cue: "适合游戏社区、二次元社区、观点吐槽。",
    search: "NPC Wojak meme template",
    thumb: "NPC",
  },
  {
    title: "They Don't Know",
    source: "Know Your Meme",
    tag: "内心戏",
    cue: "适合小众成就、圈层优越感、隐藏信息。",
    search: "They Don't Know meme template",
    thumb: "秘密",
  },
  {
    title: "POV: You...",
    source: "TikTok / Kapwing",
    tag: "短视频句式",
    cue: "适合 TikTok、Reels、小红书式场景化文案。",
    search: "POV meme template",
    thumb: "POV",
  },
  {
    title: "Me Explaining",
    source: "Know Your Meme",
    tag: "长篇解释",
    cue: "适合运营向老板解释、玩家向新人科普。",
    search: "Me Explaining meme template",
    thumb: "EXPLAIN",
  },
  {
    title: "Soyjak Pointing",
    source: "Know Your Meme",
    tag: "夸张反应",
    cue: "适合新品发布、更新公告、社区发现彩蛋。",
    search: "Soyjak Pointing meme template",
    thumb: "!!!",
  },
  {
    title: "Before / After Glow Up",
    source: "Kapwing",
    tag: "变化对比",
    cue: "适合产品改版、角色成长、活动前后效果。",
    search: "before after meme template",
    thumb: "B/A",
  },
];

const visualTemplates = [
  {
    title: "Split Compare",
    platform: "Reddit",
    templateId: "compare",
    labelA: "Me",
    labelB: "Also me",
    colorA: "#f7d760",
    colorB: "#f2755b",
  },
  {
    title: "坏情侣 / 好情侣",
    platform: "Anime",
    templateId: "bad-good-couple",
    imageUrl: "./src/assets/templates/bad-good-couple.jpg",
    labelA: "坏情侣",
    labelB: "好情侣",
    colorA: "#ffffff",
    colorB: "#17201c",
  },
  {
    title: "Before / After",
    platform: "X",
    templateId: "before-after",
    labelA: "Before",
    labelB: "After",
    colorA: "#8fd0c7",
    colorB: "#f7d760",
  },
  {
    title: "Reaction Poster",
    platform: "TikTok",
    templateId: "reaction",
    labelA: "Reaction",
    labelB: "Now",
    colorA: "#17201c",
    colorB: "#f2755b",
  },
  {
    title: "POV Scene",
    platform: "TikTok",
    templateId: "pov",
    labelA: "POV",
    labelB: "Scene",
    colorA: "#2c715f",
    colorB: "#f7d760",
  },
  {
    title: "Patch Notes",
    platform: "Gaming",
    templateId: "before-after",
    labelA: "Update",
    labelB: "Players",
    colorA: "#17201c",
    colorB: "#8fd0c7",
  },
  {
    title: "Anime Deep Dive",
    platform: "Anime",
    templateId: "reaction",
    labelA: "Casual",
    labelB: "Lore",
    colorA: "#f2755b",
    colorB: "#8fd0c7",
  },
];

const state = {
  activeTemplateId: templates[0].id,
  texts: { ...templates[0].texts },
  imageUrl: "",
  activePlatform: "全部",
  activeTemplateCategory: "全部",
  textLayers: [],
  selectedTextLayerId: "",
  eraserStrokes: [],
  activeTool: "select",
  eraserSize: 36,
  style: {
    fontSize: 46,
    textColor: "#ffffff",
    strokeColor: "#17201c",
    strokeEnabled: true,
    ratio: "1:1",
  },
};

const storageKey = "memedesu-imported-templates";
const workspaceKey = "memedesu-workspace";
const history = [];
const redoStack = [];
let isRestoring = false;
const templateList = document.querySelector("#templateList");
const templateFilters = document.querySelector("#templateFilters");
const templateImportInput = document.querySelector("#templateImportInput");
const templateUrlInput = document.querySelector("#templateUrlInput");
const importUrlTemplateButton = document.querySelector("#importUrlTemplateButton");
const deleteTemplateButton = document.querySelector("#deleteTemplateButton");
const memeCanvas = document.querySelector("#memeCanvas");
const activeTemplateName = document.querySelector("#activeTemplateName");
const imageInput = document.querySelector("#imageInput");
const clearImageButton = document.querySelector("#clearImageButton");
const exportButton = document.querySelector("#exportButton");
const exportJpgButton = document.querySelector("#exportJpgButton");
const exportProjectButton = document.querySelector("#exportProjectButton");
const projectImportInput = document.querySelector("#projectImportInput");
const undoButton = document.querySelector("#undoButton");
const redoButton = document.querySelector("#redoButton");
const clearProjectButton = document.querySelector("#clearProjectButton");
const fontSizeInput = document.querySelector("#fontSizeInput");
const textColorInput = document.querySelector("#textColorInput");
const strokeColorInput = document.querySelector("#strokeColorInput");
const strokeToggleInput = document.querySelector("#strokeToggleInput");
const ratioTabs = document.querySelector("#ratioTabs");
const addTextLayerButton = document.querySelector("#addTextLayerButton");
const deleteTextLayerButton = document.querySelector("#deleteTextLayerButton");
const duplicateTextLayerButton = document.querySelector("#duplicateTextLayerButton");
const moveLayerUpButton = document.querySelector("#moveLayerUpButton");
const moveLayerDownButton = document.querySelector("#moveLayerDownButton");
const layerTextInput = document.querySelector("#layerTextInput");
const layerXInput = document.querySelector("#layerXInput");
const layerYInput = document.querySelector("#layerYInput");
const textLayerList = document.querySelector("#textLayerList");
const selectToolButton = document.querySelector("#selectToolButton");
const eraserToolButton = document.querySelector("#eraserToolButton");
const eraserSizeInput = document.querySelector("#eraserSizeInput");
const clearEraserButton = document.querySelector("#clearEraserButton");
const platformTabs = document.querySelector("#platformTabs");
const trendList = document.querySelector("#trendList");
const visualTemplateGrid = document.querySelector("#visualTemplateGrid");
const sourceGrid = document.querySelector("#sourceGrid");
const trendQueryInput = document.querySelector("#trendQueryInput");
const searchTrendButton = document.querySelector("#searchTrendButton");
const stickerButtons = document.querySelectorAll(".sticker-button");
const inspirationGrid = document.querySelector("#inspirationGrid");
const refreshInspirationButton = document.querySelector("#refreshInspirationButton");
const inputs = {
  leftTitle: document.querySelector("#leftTitleInput"),
  leftText: document.querySelector("#leftTextInput"),
  rightTitle: document.querySelector("#rightTitleInput"),
  rightText: document.querySelector("#rightTextInput"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getActiveTemplate() {
  return templates.find((template) => template.id === state.activeTemplateId);
}

function getCanvasSize() {
  if (state.style.ratio === "4:5") {
    return { width: 960, height: 1200 };
  }

  if (state.style.ratio === "16:9") {
    return { width: 1280, height: 720 };
  }

  return { width: 1080, height: 1080 };
}

function getCssRatio() {
  return state.style.ratio.replace(":", " / ");
}

function getTextShadow() {
  return getTextShadowForStyle(state.style);
}

function getTextShadowForStyle(style) {
  if (!style.strokeEnabled) {
    return "0 4px 12px rgba(23, 32, 28, 0.35)";
  }

  return `
    -2px -2px 0 ${style.strokeColor},
    2px -2px 0 ${style.strokeColor},
    -2px 2px 0 ${style.strokeColor},
    2px 2px 0 ${style.strokeColor},
    0 4px 12px rgba(23, 32, 28, 0.35)
  `;
}

function snapshotState() {
  return JSON.stringify({
    activeTemplateId: state.activeTemplateId,
    imageUrl: state.imageUrl,
    textLayers: state.textLayers,
    selectedTextLayerId: state.selectedTextLayerId,
    eraserStrokes: state.eraserStrokes,
    activeTool: state.activeTool,
    eraserSize: state.eraserSize,
    style: state.style,
  });
}

function getProjectPayload() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    workspace: JSON.parse(snapshotState()),
    importedTemplates: templates.filter((template) => template.imported),
  };
}

function applySnapshot(snapshot) {
  const nextState = JSON.parse(snapshot);
  Object.assign(state, nextState);
}

function pushHistory() {
  if (isRestoring) {
    return;
  }

  history.push(snapshotState());
  if (history.length > 50) {
    history.shift();
  }
  redoStack.length = 0;
  syncHistoryButtons();
}

function syncHistoryButtons() {
  undoButton.disabled = history.length === 0;
  redoButton.disabled = redoStack.length === 0;
}

function undo() {
  if (!history.length) {
    return;
  }

  isRestoring = true;
  redoStack.push(snapshotState());
  applySnapshot(history.pop());
  isRestoring = false;
  render();
  syncHistoryButtons();
}

function redo() {
  if (!redoStack.length) {
    return;
  }

  isRestoring = true;
  history.push(snapshotState());
  applySnapshot(redoStack.pop());
  isRestoring = false;
  render();
  syncHistoryButtons();
}

function saveWorkspace() {
  if (isRestoring) {
    return;
  }

  localStorage.setItem(workspaceKey, snapshotState());
}

function loadWorkspace() {
  const savedWorkspace = localStorage.getItem(workspaceKey);

  if (!savedWorkspace) {
    return;
  }

  const workspace = JSON.parse(savedWorkspace);
  if (templates.some((template) => template.id === workspace.activeTemplateId)) {
    Object.assign(state, workspace);
  }
}

function exportProject() {
  const blob = new Blob([JSON.stringify(getProjectPayload(), null, 2)], {
    type: "application/json",
  });
  const link = document.createElement("a");
  link.download = `memedesu-project-${Date.now()}.json`;
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}

function importProjectFile(file) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    try {
      const project = JSON.parse(reader.result);
      const importedTemplates = Array.isArray(project.importedTemplates)
        ? project.importedTemplates
        : [];

      importedTemplates.forEach((template) => {
        if (!templates.some((item) => item.id === template.id)) {
          templates.unshift(template);
        }
      });

      pushHistory();
      Object.assign(state, project.workspace);
      saveImportedTemplates();
      projectImportInput.value = "";
      renderTemplateList();
      render();
    } catch {
      alert("项目文件无法读取，请确认它是 MemeDesu 导出的 JSON 文件。");
    }
  });

  reader.readAsText(file);
}

function saveImportedTemplates() {
  const importedTemplates = templates.filter((template) => template.imported);
  localStorage.setItem(storageKey, JSON.stringify(importedTemplates));
}

function loadImportedTemplates() {
  const savedTemplates = JSON.parse(localStorage.getItem(storageKey) || "[]");
  templates.unshift(...savedTemplates);
}

function createTemplateButton(template) {
  const button = document.createElement("button");
  button.className = "template-card";
  button.type = "button";
  button.dataset.templateId = template.id;
  const previewMarkup = template.assetUrl
    ? `<img class="template-card-image" src="${template.assetUrl}" alt="${escapeHtml(template.name)}" />`
    : `
      <div class="template-card-preview ${template.layout === "poster" ? "poster-preview" : ""}">
        <span>${escapeHtml(template.name)}</span>
      </div>
    `;
  button.innerHTML = `
    ${previewMarkup}
    <strong>${escapeHtml(template.name)}</strong>
    <span>${escapeHtml(template.category)} · ${escapeHtml(template.hint)}</span>
  `;
  button.addEventListener("click", () => {
    pushHistory();
    state.activeTemplateId = template.id;
    state.texts = { ...template.texts };
    syncInputs();
    render();
  });
  return button;
}

function createTemplateFilterButton(category) {
  const button = document.createElement("button");
  button.className = "template-filter";
  button.type = "button";
  button.textContent = category;
  button.dataset.category = category;
  button.addEventListener("click", () => {
    state.activeTemplateCategory = category;
    renderTemplateList();
  });
  return button;
}

function createPlatformButton(platform) {
  const button = document.createElement("button");
  button.className = "platform-tab";
  button.type = "button";
  button.textContent = platform;
  button.dataset.platform = platform;
  button.addEventListener("click", () => {
    state.activePlatform = platform;
    renderTrends();
  });
  return button;
}

function renderTemplateList() {
  document.querySelectorAll(".template-filter").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.category === state.activeTemplateCategory,
    );
  });

  const filteredTemplates =
    state.activeTemplateCategory === "全部"
      ? templates
      : templates.filter((template) => template.category === state.activeTemplateCategory);

  templateList.replaceChildren(...filteredTemplates.map(createTemplateButton));
  deleteTemplateButton.disabled = !getActiveTemplate()?.imported;
}

function renderTemplateFilters() {
  templateFilters.replaceChildren(...templateCategories.map(createTemplateFilterButton));
}

function renderPlatformTabs() {
  platformTabs.replaceChildren(...platforms.map(createPlatformButton));
}

function addImportedTemplate(file) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    pushHistory();
    const importedTemplate = {
      id: `imported-${Date.now()}`,
      name: file.name.replace(/\.[^.]+$/, "") || "导入模板",
      hint: "用户导入素材",
      category: "中文梗图",
      layout: "image",
      assetUrl: reader.result,
      imported: true,
      texts: {
        leftTitle: "",
        leftText: "",
        rightTitle: "",
        rightText: "",
      },
    };

    templates.unshift(importedTemplate);
    state.activeTemplateCategory = "中文梗图";
    state.activeTemplateId = importedTemplate.id;
    state.texts = { ...importedTemplate.texts };
    templateImportInput.value = "";
    saveImportedTemplates();
    syncInputs();
    renderTemplateList();
    render();
  });

  reader.readAsDataURL(file);
}

function addTemplateFromDataUrl(dataUrl, name = "链接导入模板") {
  pushHistory();
  const importedTemplate = {
    id: `imported-${Date.now()}`,
    name,
    hint: "链接导入素材",
    category: "中文梗图",
    layout: "image",
    assetUrl: dataUrl,
    imported: true,
    texts: {
      leftTitle: "",
      leftText: "",
      rightTitle: "",
      rightText: "",
    },
  };

  templates.unshift(importedTemplate);
  state.activeTemplateCategory = "中文梗图";
  state.activeTemplateId = importedTemplate.id;
  state.texts = { ...importedTemplate.texts };
  templateUrlInput.value = "";
  saveImportedTemplates();
  syncInputs();
  renderTemplateList();
  render();
}

function deleteActiveImportedTemplate() {
  const activeTemplate = getActiveTemplate();

  if (!activeTemplate?.imported) {
    return;
  }

  pushHistory();
  const index = templates.findIndex((template) => template.id === activeTemplate.id);
  templates.splice(index, 1);
  state.activeTemplateId = templates[0].id;
  state.texts = { ...templates[0].texts };
  saveImportedTemplates();
  renderTemplateList();
  render();
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(blob);
  });
}

async function importTemplateFromUrl() {
  const url = templateUrlInput.value.trim();

  if (!url) {
    return;
  }

  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const dataUrl = await blobToDataUrl(blob);
    const name = new URL(url).pathname.split("/").pop()?.replace(/\.[^.]+$/, "") || "链接导入模板";
    addTemplateFromDataUrl(dataUrl, name);
  } catch {
    alert("这个图片链接暂时无法直接导入。可以先下载图片，再用左侧“导入模板”上传。");
  }
}

function syncInputs() {
  Object.entries(inputs).forEach(([key, input]) => {
    if (!input) {
      return;
    }
    input.value = state.texts[key] ?? "";
  });
}

function syncToolButtons() {
  selectToolButton.classList.toggle("active", state.activeTool === "select");
  eraserToolButton.classList.toggle("active", state.activeTool === "eraser");
  memeCanvas.classList.toggle("is-erasing", state.activeTool === "eraser");
}

function getSelectedTextLayer() {
  return state.textLayers.find((layer) => layer.id === state.selectedTextLayerId);
}

function syncLayerControls() {
  const layer = getSelectedTextLayer();
  const disabled = !layer;
  const activeStyle = layer || state.style;

  layerTextInput.disabled = disabled;
  layerXInput.disabled = disabled;
  layerYInput.disabled = disabled;
  deleteTextLayerButton.disabled = disabled;
  duplicateTextLayerButton.disabled = disabled;
  moveLayerUpButton.disabled = disabled;
  moveLayerDownButton.disabled = disabled;
  fontSizeInput.value = activeStyle.fontSize ?? state.style.fontSize;
  textColorInput.value = activeStyle.textColor ?? state.style.textColor;
  strokeColorInput.value = activeStyle.strokeColor ?? state.style.strokeColor;
  strokeToggleInput.checked = activeStyle.strokeEnabled ?? state.style.strokeEnabled;

  if (!layer) {
    layerTextInput.value = "";
    layerXInput.value = 50;
    layerYInput.value = 50;
    return;
  }

  layerTextInput.value = layer.text;
  layerXInput.value = layer.x;
  layerYInput.value = layer.y;
}

function createLayerButton(layer) {
  const button = document.createElement("button");
  button.className = "text-layer-item";
  button.type = "button";
  button.dataset.layerId = layer.id;
  button.textContent = layer.text || "空文字";
  button.addEventListener("click", () => {
    state.selectedTextLayerId = layer.id;
    renderTextLayers();
  });
  return button;
}

function renderLayerList() {
  textLayerList.replaceChildren(...state.textLayers.map(createLayerButton));
}

function renderTextLayers() {
  const existingLayerWrap = memeCanvas.querySelector(".free-text-layer-wrap");

  if (existingLayerWrap) {
    existingLayerWrap.remove();
  }

  const layerWrap = document.createElement("div");
  layerWrap.className = "free-text-layer-wrap";

  state.textLayers.forEach((layer) => {
    const button = document.createElement("button");
    button.className = "free-text-layer";
    button.type = "button";
    button.dataset.layerId = layer.id;
    button.classList.toggle("active", layer.id === state.selectedTextLayerId);
    button.textContent = layer.text;
    button.style.left = `${layer.x}%`;
    button.style.top = `${layer.y}%`;
    button.style.color = layer.textColor || state.style.textColor;
    button.style.fontSize = `${layer.fontSize || state.style.fontSize}px`;
    button.style.textShadow = getTextShadowForStyle({
      strokeColor: layer.strokeColor || state.style.strokeColor,
      strokeEnabled: layer.strokeEnabled ?? state.style.strokeEnabled,
    });
    button.addEventListener("pointerdown", startLayerDrag);
    button.addEventListener("click", () => {
      state.selectedTextLayerId = layer.id;
      renderTextLayers();
    });
    layerWrap.append(button);
  });

  memeCanvas.append(layerWrap);

  renderLayerList();

  document.querySelectorAll(".text-layer-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.layerId === state.selectedTextLayerId);
  });

  syncLayerControls();
}

function renderEraserLayer() {
  const existingLayer = memeCanvas.querySelector(".eraser-layer");

  if (existingLayer) {
    existingLayer.remove();
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("eraser-layer");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");

  state.eraserStrokes.forEach((stroke) => {
    if (stroke.points.length === 1) {
      const [point] = stroke.points;
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", String(point.x));
      circle.setAttribute("cy", String(point.y));
      circle.setAttribute("r", String(stroke.size / 2));
      circle.setAttribute("fill", "#ffffff");
      svg.append(circle);
      return;
    }

    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute(
      "points",
      stroke.points.map((point) => `${point.x},${point.y}`).join(" "),
    );
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", "#ffffff");
    polyline.setAttribute("stroke-linecap", "round");
    polyline.setAttribute("stroke-linejoin", "round");
    polyline.setAttribute("stroke-width", String(stroke.size));
    svg.append(polyline);
  });

  memeCanvas.append(svg);
}

function addEraserPoint(event, stroke) {
  const rect = memeCanvas.getBoundingClientRect();
  stroke.points.push({
    x: Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100)),
    y: Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100)),
  });
}

function startEraserStroke(event) {
  if (state.activeTool !== "eraser") {
    return;
  }

  event.preventDefault();
  pushHistory();
  const stroke = {
    size: (state.eraserSize / memeCanvas.getBoundingClientRect().width) * 100,
    points: [],
  };
  addEraserPoint(event, stroke);
  state.eraserStrokes.push(stroke);

  const handleMove = (moveEvent) => {
    addEraserPoint(moveEvent, stroke);
    renderEraserLayer();
  };

  const handleUp = () => {
    window.removeEventListener("pointermove", handleMove);
    window.removeEventListener("pointerup", handleUp);
  };

  window.addEventListener("pointermove", handleMove);
  window.addEventListener("pointerup", handleUp);
  renderEraserLayer();
}

function addTextLayer(text = "双击编辑文案") {
  pushHistory();
  const layer = {
    id: `text-${Date.now()}`,
    text,
    x: 50,
    y: 50,
    fontSize: state.style.fontSize,
    textColor: state.style.textColor,
    strokeColor: state.style.strokeColor,
    strokeEnabled: state.style.strokeEnabled,
  };

  state.textLayers.push(layer);
  state.selectedTextLayerId = layer.id;
  render();
}

function updateSelectedTextLayer(updates) {
  const layer = getSelectedTextLayer();

  if (!layer) {
    return;
  }

  pushHistory();
  Object.assign(layer, updates);
  renderTextLayers();
}

function deleteSelectedTextLayer() {
  pushHistory();
  state.textLayers = state.textLayers.filter(
    (layer) => layer.id !== state.selectedTextLayerId,
  );
  state.selectedTextLayerId = state.textLayers.at(-1)?.id || "";
  render();
}

function duplicateSelectedTextLayer() {
  const layer = getSelectedTextLayer();

  if (!layer) {
    return;
  }

  pushHistory();
  const copiedLayer = {
    ...layer,
    id: `text-${Date.now()}`,
    x: Math.min(100, layer.x + 6),
    y: Math.min(100, layer.y + 6),
  };
  const index = state.textLayers.findIndex((item) => item.id === layer.id);
  state.textLayers.splice(index + 1, 0, copiedLayer);
  state.selectedTextLayerId = copiedLayer.id;
  render();
}

function moveSelectedLayer(direction) {
  const index = state.textLayers.findIndex((layer) => layer.id === state.selectedTextLayerId);
  const targetIndex = index + direction;

  if (index < 0 || targetIndex < 0 || targetIndex >= state.textLayers.length) {
    return;
  }

  pushHistory();
  const [layer] = state.textLayers.splice(index, 1);
  state.textLayers.splice(targetIndex, 0, layer);
  render();
}

function startLayerDrag(event) {
  const layer = state.textLayers.find((item) => item.id === event.currentTarget.dataset.layerId);

  if (!layer) {
    return;
  }

  pushHistory();
  state.selectedTextLayerId = layer.id;
  event.currentTarget.setPointerCapture(event.pointerId);

  const handleMove = (moveEvent) => {
    const rect = memeCanvas.getBoundingClientRect();
    layer.x = Math.min(100, Math.max(0, ((moveEvent.clientX - rect.left) / rect.width) * 100));
    layer.y = Math.min(100, Math.max(0, ((moveEvent.clientY - rect.top) / rect.height) * 100));
    renderTextLayers();
  };

  const handleUp = () => {
    window.removeEventListener("pointermove", handleMove);
    window.removeEventListener("pointerup", handleUp);
  };

  window.addEventListener("pointermove", handleMove);
  window.addEventListener("pointerup", handleUp);
}

function applyPreviewStyle() {
  memeCanvas.style.aspectRatio = getCssRatio();
  memeCanvas.style.setProperty("--meme-font-size", `${state.style.fontSize}px`);
  memeCanvas.style.setProperty("--meme-text-color", state.style.textColor);
  memeCanvas.style.setProperty("--meme-stroke-shadow", getTextShadow());
  syncToolButtons();

  document.querySelectorAll(".ratio-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.ratio === state.style.ratio);
  });
}

function renderSplitTemplate() {
  memeCanvas.className = "meme-canvas split-template";
  const imageMarkup = state.imageUrl
    ? `<div class="split-image" style="background-image: url('${state.imageUrl}')"></div>`
    : "";
  memeCanvas.innerHTML = `
    <div class="meme-column">
      ${imageMarkup}
    </div>
    <div class="meme-column accent">
      ${imageMarkup}
    </div>
  `;
}

function renderPosterTemplate() {
  memeCanvas.className = "meme-canvas poster-template";
  if (state.imageUrl) {
    memeCanvas.style.backgroundImage = `linear-gradient(180deg, rgba(23, 32, 28, 0.18), rgba(23, 32, 28, 0.78)), url('${state.imageUrl}')`;
  } else {
    memeCanvas.style.backgroundImage = "";
  }
  memeCanvas.innerHTML = `
    <div class="poster-backdrop">
    </div>
  `;
}

function renderImageTemplate(template) {
  memeCanvas.className = "meme-canvas image-template";
  memeCanvas.style.backgroundImage = "";
  memeCanvas.innerHTML = `
    <img class="template-asset" src="${template.assetUrl}" alt="${escapeHtml(template.name)}" />
  `;
}

function applyTrendPrompt(prompt) {
  pushHistory();
  state.activeTemplateId = "pov";
  state.texts = { ...getActiveTemplate().texts };
  addTextLayer(prompt);
  syncInputs();
  render();
}

function createTrendCard(trend) {
  const card = document.createElement("article");
  card.className = "trend-card";
  card.innerHTML = `
    <div class="trend-card-top">
      <strong>${escapeHtml(trend.title)}</strong>
      <span>${escapeHtml(trend.platform)} · ${escapeHtml(trend.heat)}</span>
    </div>
    <p>${escapeHtml(trend.prompt)}</p>
    <small>${escapeHtml(trend.note)}</small>
  `;

  const button = document.createElement("button");
  button.className = "mini-button";
  button.type = "button";
  button.textContent = "套用文案";
  button.addEventListener("click", () => applyTrendPrompt(trend.prompt));
  card.append(button);

  return card;
}

function renderTrends() {
  document.querySelectorAll(".platform-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.platform === state.activePlatform);
  });

  const filteredTrends =
    state.activePlatform === "全部"
      ? trends
      : trends.filter((trend) => trend.platform === state.activePlatform);

  trendList.replaceChildren(...filteredTrends.map(createTrendCard));
  renderVisualTemplates();
}

function applyVisualTemplate(template) {
  const targetTemplate = templates.find((item) => item.id === template.templateId);

  pushHistory();
  state.activeTemplateId = targetTemplate.id;
  state.texts = { ...targetTemplate.texts };
  syncInputs();
  render();
}

function createVisualTemplateCard(template) {
  const card = document.createElement("button");
  card.className = "visual-template-card";
  card.type = "button";
  const thumbMarkup = template.imageUrl
    ? `<img class="visual-image-thumb" src="${template.imageUrl}" alt="${escapeHtml(template.title)}" />`
    : `
      <div class="visual-thumb">
        <div style="background: ${template.colorA}">
          <span>${escapeHtml(template.labelA)}</span>
        </div>
        <div style="background: ${template.colorB}">
          <span>${escapeHtml(template.labelB)}</span>
        </div>
      </div>
    `;
  card.innerHTML = `
    ${thumbMarkup}
    <strong>${escapeHtml(template.title)}</strong>
    <small>${escapeHtml(template.platform)}</small>
  `;
  card.addEventListener("click", () => applyVisualTemplate(template));
  return card;
}

function renderVisualTemplates() {
  const filteredTemplates =
    state.activePlatform === "全部"
      ? visualTemplates
      : visualTemplates.filter((template) => template.platform === state.activePlatform);

  visualTemplateGrid.replaceChildren(...filteredTemplates.map(createVisualTemplateCard));
}

function createSourceCard(source) {
  const card = document.createElement("article");
  card.className = "source-card";
  card.innerHTML = `
    <strong>${escapeHtml(source.name)}</strong>
    <span>${escapeHtml(source.type)}</span>
    <p>${escapeHtml(source.note)}</p>
  `;

  const actions = document.createElement("div");
  actions.className = "source-card-actions";

  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.textContent = "打开";
  openButton.addEventListener("click", () => window.open(source.url, "_blank", "noreferrer"));

  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.textContent = "搜关键词";
  searchButton.addEventListener("click", () => {
    const query = encodeURIComponent(trendQueryInput.value.trim() || "meme template");
    window.open(`${source.searchUrl}${query}`, "_blank", "noreferrer");
  });

  actions.append(openButton, searchButton);
  card.append(actions);
  return card;
}

function renderOnlineSources() {
  sourceGrid.replaceChildren(...onlineSources.map(createSourceCard));
}

function createInspirationCard(item) {
  const card = document.createElement("article");
  card.className = "inspiration-card";
  card.innerHTML = `
    <div class="inspiration-thumb">${escapeHtml(item.thumb)}</div>
    <strong>${escapeHtml(item.title)}</strong>
    <span>${escapeHtml(item.source)} · ${escapeHtml(item.tag)}</span>
    <p>${escapeHtml(item.cue)}</p>
  `;

  const actions = document.createElement("div");
  actions.className = "source-card-actions";

  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.textContent = "打开检索";
  searchButton.addEventListener("click", () => {
    window.open(
      `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(item.search)}`,
      "_blank",
      "noreferrer",
    );
  });

  const promptButton = document.createElement("button");
  promptButton.type = "button";
  promptButton.textContent = "套用提示";
  promptButton.addEventListener("click", () => {
    addTextLayer(item.cue);
  });

  actions.append(searchButton, promptButton);
  card.append(actions);
  return card;
}

function renderInspirations() {
  const shuffledItems = [...inspirationPool].sort(() => Math.random() - 0.5).slice(0, 6);
  inspirationGrid.replaceChildren(...shuffledItems.map(createInspirationCard));
}

function openTrendSearch() {
  const query = encodeURIComponent(trendQueryInput.value.trim() || "meme templates");
  const urls = [
    `https://knowyourmeme.com/search?q=${query}`,
    `https://www.reddit.com/search/?q=${query}`,
    `https://www.tiktok.com/search?q=${query}`,
  ];
  urls.forEach((url) => window.open(url, "_blank", "noreferrer"));
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, align = "center") {
  const letters = String(text).split("");
  const lines = [];
  let line = "";

  letters.forEach((letter) => {
    const testLine = line + letter;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = letter;
      return;
    }
    line = testLine;
  });

  if (line) {
    lines.push(line);
  }

  ctx.textAlign = align;
  lines.forEach((item, index) => {
    const lineY = y + index * lineHeight;
    if (state.style.strokeEnabled) {
      ctx.strokeText(item, x, lineY);
    }
    ctx.fillText(item, x, lineY);
  });

  return lines.length * lineHeight;
}

function drawImage(ctx, image, x, y, width, height, contain = false) {
  const scale = contain
    ? Math.min(width / image.width, height / image.height)
    : Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function drawEraserStrokes(ctx, width, height) {
  ctx.save();
  ctx.strokeStyle = "#ffffff";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  state.eraserStrokes.forEach((stroke) => {
    if (!stroke.points.length) {
      return;
    }

    ctx.lineWidth = (stroke.size / 100) * width;
    if (stroke.points.length === 1) {
      const [point] = stroke.points;
      ctx.beginPath();
      ctx.arc((point.x / 100) * width, (point.y / 100) * height, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      return;
    }

    ctx.beginPath();
    stroke.points.forEach((point, index) => {
      const x = (point.x / 100) * width;
      const y = (point.y / 100) * height;

      if (index === 0) {
        ctx.moveTo(x, y);
        return;
      }

      ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  ctx.restore();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", reject);
    image.src = src;
  });
}

function drawFreeTextLayers(ctx, width, height) {
  state.textLayers.forEach((layer) => {
    const fontSize = layer.fontSize || state.style.fontSize;
    const strokeEnabled = layer.strokeEnabled ?? state.style.strokeEnabled;
    ctx.fillStyle = layer.textColor || state.style.textColor;
    ctx.strokeStyle = layer.strokeColor || state.style.strokeColor;
    ctx.lineWidth = Math.max(6, fontSize * 0.12);
    ctx.lineJoin = "round";
    ctx.font = `900 ${fontSize}px Arial, sans-serif`;

    const originalStrokeEnabled = state.style.strokeEnabled;
    state.style.strokeEnabled = strokeEnabled;
    drawWrappedText(
      ctx,
      layer.text,
      (layer.x / 100) * width,
      (layer.y / 100) * height,
      width * 0.82,
      fontSize * 1.18,
    );
    state.style.strokeEnabled = originalStrokeEnabled;
  });
}

async function exportMeme(format = "png") {
  const activeTemplate = getActiveTemplate();
  const { width, height } = getCanvasSize();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = state.style.textColor;
  ctx.strokeStyle = state.style.strokeColor;
  ctx.lineWidth = Math.max(6, state.style.fontSize * 0.12);
  ctx.lineJoin = "round";
  ctx.font = `900 ${state.style.fontSize}px Arial, sans-serif`;

  if (activeTemplate.layout === "image") {
    const image = await loadImage(activeTemplate.assetUrl);
    drawImage(ctx, image, 0, 0, width, height, true);
  } else if (activeTemplate.layout === "poster") {
    if (state.imageUrl) {
      const image = await loadImage(state.imageUrl);
      drawImage(ctx, image, 0, 0, width, height);
      ctx.fillStyle = "rgba(23, 32, 28, 0.44)";
      ctx.fillRect(0, 0, width, height);
    } else {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#2c715f");
      gradient.addColorStop(1, "#f2755b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
  } else {
    const half = width / 2;
    ctx.fillStyle = "#f7d760";
    ctx.fillRect(0, 0, half, height);
    ctx.fillStyle = "#f2755b";
    ctx.fillRect(half, 0, half, height);
    if (state.imageUrl) {
      const image = await loadImage(state.imageUrl);
      ctx.globalAlpha = 0.22;
      drawImage(ctx, image, 0, 0, half, height);
      drawImage(ctx, image, half, 0, half, height);
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "#17201c";
    ctx.fillRect(half - 5, 0, 10, height);
  }

  drawEraserStrokes(ctx, width, height);
  drawFreeTextLayers(ctx, width, height);

  const link = document.createElement("a");
  link.download = `memedesu-${Date.now()}.${format}`;
  link.href =
    format === "jpg"
      ? canvas.toDataURL("image/jpeg", 0.92)
      : canvas.toDataURL("image/png");
  link.click();
}

function render() {
  const activeTemplate = getActiveTemplate();
  activeTemplateName.textContent = activeTemplate.name;
  deleteTemplateButton.disabled = !activeTemplate.imported;
  applyPreviewStyle();

  document.querySelectorAll(".template-card").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.templateId === state.activeTemplateId,
    );
  });

  if (activeTemplate.layout === "poster") {
    renderPosterTemplate();
  } else if (activeTemplate.layout === "image") {
    renderImageTemplate(activeTemplate);
  } else {
    memeCanvas.style.backgroundImage = "";
    renderSplitTemplate();
  }

  renderEraserLayer();
  renderTextLayers();
  saveWorkspace();
}

function updateActiveTextStyle(updates) {
  pushHistory();
  const layer = getSelectedTextLayer();

  if (layer) {
    Object.assign(layer, updates);
    renderTextLayers();
    saveWorkspace();
    return;
  }

  Object.assign(state.style, updates);
  render();
}

function clearProject() {
  pushHistory();
  state.imageUrl = "";
  state.textLayers = [];
  state.selectedTextLayerId = "";
  state.eraserStrokes = [];
  state.activeTool = "select";
  state.style = {
    fontSize: 46,
    textColor: "#ffffff",
    strokeColor: "#17201c",
    strokeEnabled: true,
    ratio: "1:1",
  };
  fontSizeInput.value = state.style.fontSize;
  textColorInput.value = state.style.textColor;
  strokeColorInput.value = state.style.strokeColor;
  strokeToggleInput.checked = state.style.strokeEnabled;
  render();
}

Object.entries(inputs).forEach(([key, input]) => {
  if (!input) {
    return;
  }

  input.addEventListener("input", (event) => {
    state.texts[key] = event.target.value;
    render();
  });
});

searchTrendButton.addEventListener("click", openTrendSearch);
exportButton.addEventListener("click", () => exportMeme("png"));
exportJpgButton.addEventListener("click", () => exportMeme("jpg"));
exportProjectButton.addEventListener("click", exportProject);
importUrlTemplateButton.addEventListener("click", importTemplateFromUrl);
deleteTemplateButton.addEventListener("click", deleteActiveImportedTemplate);
refreshInspirationButton.addEventListener("click", renderInspirations);
undoButton.addEventListener("click", undo);
redoButton.addEventListener("click", redo);
clearProjectButton.addEventListener("click", clearProject);

fontSizeInput.addEventListener("input", (event) => {
  updateActiveTextStyle({ fontSize: Number(event.target.value) });
});

textColorInput.addEventListener("input", (event) => {
  updateActiveTextStyle({ textColor: event.target.value });
});

strokeColorInput.addEventListener("input", (event) => {
  updateActiveTextStyle({ strokeColor: event.target.value });
});

strokeToggleInput.addEventListener("change", (event) => {
  updateActiveTextStyle({ strokeEnabled: event.target.checked });
});

ratioTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".ratio-tab");

  if (!button) {
    return;
  }

  state.style.ratio = button.dataset.ratio;
  render();
});

stickerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addTextLayer(button.dataset.sticker);
  });
});

addTextLayerButton.addEventListener("click", () => {
  addTextLayer("在这里输入新文案");
});

layerTextInput.addEventListener("input", (event) => {
  if (!getSelectedTextLayer()) {
    return;
  }
  updateSelectedTextLayer({ text: event.target.value });
  saveWorkspace();
});

layerXInput.addEventListener("input", (event) => {
  updateSelectedTextLayer({ x: Number(event.target.value) });
  saveWorkspace();
});

layerYInput.addEventListener("input", (event) => {
  updateSelectedTextLayer({ y: Number(event.target.value) });
  saveWorkspace();
});

deleteTextLayerButton.addEventListener("click", deleteSelectedTextLayer);
duplicateTextLayerButton.addEventListener("click", duplicateSelectedTextLayer);
moveLayerUpButton.addEventListener("click", () => moveSelectedLayer(1));
moveLayerDownButton.addEventListener("click", () => moveSelectedLayer(-1));

projectImportInput.addEventListener("change", (event) => {
  const [file] = event.target.files;

  if (!file) {
    return;
  }

  importProjectFile(file);
});

selectToolButton.addEventListener("click", () => {
  state.activeTool = "select";
  syncToolButtons();
  saveWorkspace();
});

eraserToolButton.addEventListener("click", () => {
  state.activeTool = "eraser";
  syncToolButtons();
  saveWorkspace();
});

eraserSizeInput.addEventListener("input", (event) => {
  state.eraserSize = Number(event.target.value);
});

clearEraserButton.addEventListener("click", () => {
  pushHistory();
  state.eraserStrokes = [];
  render();
});

memeCanvas.addEventListener("pointerdown", startEraserStroke);

templateImportInput.addEventListener("change", (event) => {
  const [file] = event.target.files;

  if (!file) {
    return;
  }

  addImportedTemplate(file);
});

imageInput.addEventListener("change", (event) => {
  const [file] = event.target.files;

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pushHistory();
    state.imageUrl = reader.result;
    render();
  });
  reader.readAsDataURL(file);
});

clearImageButton.addEventListener("click", () => {
  pushHistory();
  state.imageUrl = "";
  imageInput.value = "";
  render();
});

loadImportedTemplates();
loadWorkspace();
renderTemplateFilters();
renderTemplateList();
renderPlatformTabs();
renderOnlineSources();
renderInspirations();
syncInputs();
render();
renderTrends();
syncHistoryButtons();
