"use strict";

const DEFAULT_LOGO = "./image.png";
const DEFAULT_LOGO_NAME = "image.png";

const ZOOM_MIN = 50;
const ZOOM_MAX = 160;
const ZOOM_STEP = 10;

let currentQRCode = null;
let currentLogo = DEFAULT_LOGO;
let currentLogoName = DEFAULT_LOGO_NAME;

let activePreset = "classic";
let debounceTimer = null;
let toastTimer = null;
let zoom = 100;

const $ = (id) => document.getElementById(id);

const ui = {
  qrData: $("qrData"),
  logoInput: $("logoInput"),
  logoButton: $("logoButton"),
  changeLogoBtn: $("changeLogoBtn"),
  logoThumb: $("logoThumb"),
  logoName: $("logoName"),

  qrSize: $("qrSize"),
  fileName: $("fileName"),

  dotsType: $("dotsType"),
  dotsColor1: $("dotsColor1"),
  dotsColor2: $("dotsColor2"),
  gradientType: $("gradientType"),
  gradientRotation: $("gradientRotation"),
  gradientRotationValue: $("gradientRotationValue"),

  cornersSquareType: $("cornersSquareType"),
  cornersDotType: $("cornersDotType"),
  cornersColor1: $("cornersColor1"),
  cornersColor2: $("cornersColor2"),
  useCornersGradient: $("useCornersGradient"),

  backgroundColor1: $("backgroundColor1"),
  backgroundColor2: $("backgroundColor2"),
  backgroundGradientType: $("backgroundGradientType"),
  backgroundOpacity: $("backgroundOpacity"),
  backgroundOpacityValue: $("backgroundOpacityValue"),

  showLogo: $("showLogo"),
  logoOptions: $("logoOptions"),
  hideDotsRow: $("hideDotsRow"),

  logoSize: $("logoSize"),
  logoSizeValue: $("logoSizeValue"),
  logoMargin: $("logoMargin"),
  logoMarginValue: $("logoMarginValue"),
  hideBackgroundDots: $("hideBackgroundDots"),

  toolTabs: [...document.querySelectorAll(".tool-tab")],
  settingsPanels: [...document.querySelectorAll(".settings-panel")],
  effectCards: [...document.querySelectorAll("[data-effect]")],
  presetLibraryContainer: $("presetLibraryContainer"),

  qrContainer: $("qrContainer"),
  qrScale: $("qrScale"),

  zoomOutBtn: $("zoomOutBtn"),
  zoomInBtn: $("zoomInBtn"),
  zoomResetBtn: $("zoomResetBtn"),

  downloadBtn: $("downloadBtn"),
  resetBtn: $("resetBtn"),
  toast: $("toast")
};

const presetLibrary = window.QR_PRESET_LIBRARY || {
  categories: [],
  presets: []
};

const presets = Object.fromEntries(
  presetLibrary.presets.map((preset) => [preset.id, preset])
);

const defaults = {
  qrData: "https://example.com",
  qrSize: "600",
  fileName: "qr-tour",

  dotsType: "rounded",
  dotsColor1: "#111827",
  dotsColor2: "#1769e0",
  gradientType: "solid",
  gradientRotation: "45",

  cornersSquareType: "extra-rounded",
  cornersDotType: "dot",
  cornersColor1: "#111827",
  cornersColor2: "#1769e0",
  useCornersGradient: false,

  backgroundColor1: "#ffffff",
  backgroundColor2: "#f4f7ff",
  backgroundGradientType: "solid",
  backgroundOpacity: "100",

  showLogo: true,
  logoSize: "22",
  logoMargin: "8",
  hideBackgroundDots: true
};

function showToast(message, isError = false) {
  clearTimeout(toastTimer);

  ui.toast.textContent = message;
  ui.toast.classList.toggle("is-error", isError);
  ui.toast.classList.add("is-visible");

  toastTimer = setTimeout(() => {
    ui.toast.classList.remove("is-visible", "is-error");
  }, isError ? 4200 : 1800);
}

function hexToRgba(hex, opacityPercent) {
  const cleanHex = String(hex).replace("#", "");
  const value = parseInt(cleanHex, 16);

  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacityPercent / 100})`;
}

function makeGradient(type, color1, color2, rotation) {
  if (type === "solid") return undefined;

  return {
    type,
    rotation: Number(rotation),
    colorStops: [
      { offset: 0, color: color1 },
      { offset: 1, color: color2 }
    ]
  };
}

function getSettings() {
  const size = Math.max(200, Math.min(2000, Number(ui.qrSize.value) || 600));

  const logoSize = Math.max(
    0.05,
    Math.min(0.4, Number(ui.logoSize.value) / 100)
  );

  const logoMargin = Math.max(
    0,
    Math.min(30, Number(ui.logoMargin.value) || 0)
  );

  const rotation = Math.max(
    0,
    Math.min(360, Number(ui.gradientRotation.value) || 0)
  );

  const backgroundOpacity = Math.max(
    0,
    Math.min(100, Number(ui.backgroundOpacity.value) || 100)
  );

  ui.logoSizeValue.textContent = `${Math.round(logoSize * 100)}%`;
  ui.logoMarginValue.textContent = `${logoMargin} px`;
  ui.gradientRotationValue.textContent = `${rotation}°`;
  ui.backgroundOpacityValue.textContent = `${backgroundOpacity}%`;

  return {
    data: ui.qrData.value.trim(),
    size,

    dotsType: ui.dotsType.value,
    dotsColor1: ui.dotsColor1.value,
    dotsColor2: ui.dotsColor2.value,
    gradientType: ui.gradientType.value,
    rotation,

    cornersSquareType: ui.cornersSquareType.value,
    cornersDotType: ui.cornersDotType.value,
    cornersColor1: ui.cornersColor1.value,
    cornersColor2: ui.cornersColor2.value,
    useCornersGradient: ui.useCornersGradient.checked,

    backgroundColor1: ui.backgroundColor1.value,
    backgroundColor2: ui.backgroundColor2.value,
    backgroundGradientType: ui.backgroundGradientType.value,
    backgroundOpacity,

    showLogo: ui.showLogo.checked,
    logoSize,
    logoMargin,
    hideBackgroundDots: ui.hideBackgroundDots.checked
  };
}

function renderQR() {
  if (typeof QRCodeStyling === "undefined") {
    showToast("qr-code-styling.js non è stato caricato.", true);
    return;
  }

  const settings = getSettings();

  if (!settings.data) {
    ui.qrContainer.innerHTML = "";
    currentQRCode = null;
    ui.downloadBtn.disabled = true;
    return;
  }

  const backgroundColor1 = hexToRgba(
    settings.backgroundColor1,
    settings.backgroundOpacity
  );

  const backgroundColor2 = hexToRgba(
    settings.backgroundColor2,
    settings.backgroundOpacity
  );

  const dotsGradient = makeGradient(
    settings.gradientType,
    settings.dotsColor1,
    settings.dotsColor2,
    settings.rotation
  );

  const cornersGradient = settings.useCornersGradient
    ? makeGradient(
      settings.gradientType === "solid"
        ? "linear"
        : settings.gradientType,
      settings.cornersColor1,
      settings.cornersColor2,
      settings.rotation
    )
    : undefined;

  const backgroundGradient = makeGradient(
    settings.backgroundGradientType,
    backgroundColor1,
    backgroundColor2,
    settings.rotation
  );

  const options = {
    data: settings.data,
    type: "canvas",
    width: settings.size,
    height: settings.size,
    margin: 10,

    qrOptions: {
      errorCorrectionLevel: "H"
    },

    dotsOptions: {
      type: settings.dotsType,
      color: settings.dotsColor1,
      gradient: dotsGradient
    },

    cornersSquareOptions: {
      type: settings.cornersSquareType,
      color: settings.cornersColor1,
      gradient: cornersGradient
    },

    cornersDotOptions: {
      type: settings.cornersDotType,
      color: settings.cornersColor1,
      gradient: cornersGradient
    },

    backgroundOptions: {
      color: backgroundColor1,
      gradient: backgroundGradient
    }
  };

  if (currentLogo && settings.showLogo) {
    options.image = currentLogo;

    options.imageOptions = {
      crossOrigin: "anonymous",
      imageSize: settings.logoSize,
      margin: settings.logoMargin,
      hideBackgroundDots: settings.hideBackgroundDots,
      saveAsBlob: true
    };
  }

  try {
    const qrCode = new QRCodeStyling(options);

    ui.qrContainer.innerHTML = "";
    qrCode.append(ui.qrContainer);

    currentQRCode = qrCode;
    ui.downloadBtn.disabled = false;
  } catch (error) {
    console.error(error);
    showToast("Errore durante la generazione del QR.", true);
  }
}

function scheduleRender() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(renderQR, 60);
}

function updateLogoControls() {
  const visible = ui.showLogo.checked;

  ui.logoOptions.style.opacity = visible ? "1" : "0.35";
  ui.logoOptions.style.pointerEvents = visible ? "auto" : "none";

  ui.hideDotsRow.style.opacity = visible ? "1" : "0.35";
  ui.hideDotsRow.style.pointerEvents = visible ? "auto" : "none";

  ui.changeLogoBtn.disabled = !visible;
}

function updateZoom() {
  zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoom));

  ui.qrScale.style.transform = `scale(${zoom / 100})`;
  ui.zoomResetBtn.textContent = `${zoom}%`;
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Impossibile leggere il logo."));

    reader.readAsDataURL(file);
  });
}

function setLogoThumbnail(source, name) {
  ui.logoThumb.innerHTML = "";

  const image = document.createElement("img");
  image.src = source;
  image.alt = "";

  image.addEventListener(
    "error",
    () => {
      ui.logoThumb.innerHTML =
        '<span class="logo-placeholder">+</span>';
    },
    { once: true }
  );

  ui.logoThumb.appendChild(image);

  ui.logoName.textContent = name || "logo";
  ui.logoName.title = name || "logo";
}

function setFieldValue(id, value) {
  const field = $(id);
  if (!field) return;

  if (field.type === "checkbox") {
    field.checked = Boolean(value);
  } else {
    field.value = value;
  }
}

function markSelectedPreset(id) {
  document.querySelectorAll("[data-preset]").forEach((element) => {
    element.classList.toggle(
      "is-selected",
      element.dataset.preset === id
    );
  });
}

function applyPreset(id) {
  const preset = presets[id];

  if (!preset) {
    showToast(`Preset "${id}" non trovato.`, true);
    return;
  }

  Object.entries(preset).forEach(([key, value]) => {
    if ($(key)) {
      setFieldValue(key, value);
    }
  });

  activePreset = id;
  markSelectedPreset(id);

  updateLogoControls();
  scheduleRender();

  showToast(`Preset "${preset.name}" applicato.`);
}

function renderPresetLibrary() {
  if (!ui.presetLibraryContainer) return;

  ui.presetLibraryContainer.innerHTML = "";

  presetLibrary.categories.forEach((category) => {
    const categoryPresets = presetLibrary.presets.filter(
      (preset) => preset.category === category.id
    );

    if (!categoryPresets.length) return;

    const categoryBox = document.createElement("section");
    categoryBox.className = "preset-category";

    const title = document.createElement("div");
    title.className = "preset-category-title";
    title.textContent = category.name;

    const description = document.createElement("div");
    description.className = "preset-category-description";
    description.textContent = category.description;

    const grid = document.createElement("div");
    grid.className = "preset-grid";

    categoryPresets.forEach((preset) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "preset-card";
      button.dataset.preset = preset.id;
      button.title = preset.description;

      const swatch = document.createElement("span");
      swatch.className = "preset-swatch";

      swatch.style.background =
        preset.swatch[0] === preset.swatch[1]
          ? preset.swatch[0]
          : `linear-gradient(90deg, ${preset.swatch[0]}, ${preset.swatch[1]})`;

      const name = document.createElement("span");
      name.textContent = preset.name;

      button.append(swatch, name);

      button.addEventListener("click", () => {
        applyPreset(preset.id);
      });

      grid.appendChild(button);
    });

    categoryBox.append(title, description, grid);
    ui.presetLibraryContainer.appendChild(categoryBox);
  });

  markSelectedPreset(activePreset);
}

function sanitizeFileName(name) {
  return (
    String(name || "qr-code")
      .trim()
      .replace(/[\\/:*?"<>|]/g, "-")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "qr-code"
  );
}

function setActivePanel(name) {
  ui.toolTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.panel === name);
  });

  ui.settingsPanels.forEach((panel) => {
    panel.classList.toggle(
      "is-active",
      panel.dataset.settingsPanel === name
    );
  });
}
function setEffectSelected(effectName) {
  ui.effectCards.forEach((card) => {
    card.classList.toggle(
      "is-selected",
      card.dataset.effect === effectName
    );
  });
}

function applyEffect(effectName) {
  const effects = {
    bubble: {
      dotsType: "dots",
      cornersSquareType: "dot",
      cornersDotType: "dot",
      gradientType: "radial",
      dotsColor1: "#0B3F8C",
      dotsColor2: "#00C2FF",
      cornersColor1: "#07346F",
      cornersColor2: "#00B7E8",
      useCornersGradient: true,
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#EAF8FF",
      backgroundGradientType: "radial"
    },

    pixel: {
      dotsType: "square",
      cornersSquareType: "square",
      cornersDotType: "square",
      gradientType: "solid",
      dotsColor1: "#111827",
      dotsColor2: "#111827",
      cornersColor1: "#111827",
      cornersColor2: "#111827",
      useCornersGradient: false,
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#FFFFFF",
      backgroundGradientType: "solid"
    },

    liquid: {
      dotsType: "classy-rounded",
      cornersSquareType: "extra-rounded",
      cornersDotType: "dot",
      gradientType: "linear",
      gradientRotation: "130",
      dotsColor1: "#005C43",
      dotsColor2: "#1DD1A1",
      cornersColor1: "#004430",
      cornersColor2: "#30E7B2",
      useCornersGradient: true,
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#E9FFF8",
      backgroundGradientType: "radial"
    },

    glitch: {
      dotsType: "square",
      cornersSquareType: "square",
      cornersDotType: "square",
      gradientType: "linear",
      gradientRotation: "45",
      dotsColor1: "#2D0B59",
      dotsColor2: "#FF007A",
      cornersColor1: "#1E063D",
      cornersColor2: "#00E5FF",
      useCornersGradient: true,
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#FFF0FA",
      backgroundGradientType: "linear"
    },

    mono: {
      dotsType: "rounded",
      cornersSquareType: "extra-rounded",
      cornersDotType: "dot",
      gradientType: "solid",
      dotsColor1: "#1D1D1D",
      dotsColor2: "#1D1D1D",
      cornersColor1: "#1D1D1D",
      cornersColor2: "#1D1D1D",
      useCornersGradient: false,
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#FFFFFF",
      backgroundGradientType: "solid"
    },

    contrast: {
      dotsType: "extra-rounded",
      cornersSquareType: "square",
      cornersDotType: "square",
      gradientType: "linear",
      gradientRotation: "90",
      dotsColor1: "#071A52",
      dotsColor2: "#FFD400",
      cornersColor1: "#041139",
      cornersColor2: "#FFE466",
      useCornersGradient: true,
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#FFFCEA",
      backgroundGradientType: "radial"
    },

    soft: {
      dotsType: "classy-rounded",
      cornersSquareType: "extra-rounded",
      cornersDotType: "dot",
      gradientType: "linear",
      gradientRotation: "45",
      dotsColor1: "#5146A8",
      dotsColor2: "#C095FF",
      cornersColor1: "#40368C",
      cornersColor2: "#D4B5FF",
      useCornersGradient: true,
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#F7F0FF",
      backgroundGradientType: "radial"
    }
  };

  if (effectName === "reset") {
    Object.entries(defaults).forEach(([key, value]) => {
      if ($(key)) setFieldValue(key, value);
    });

    setEffectSelected(null);
    activePreset = null;
    markSelectedPreset(null);
    updateLogoControls();
    scheduleRender();
    showToast("Effetto ripristinato.");
    return;
  }

  const effect = effects[effectName];
  if (!effect) return;

  Object.entries(effect).forEach(([key, value]) => {
    if ($(key)) setFieldValue(key, value);
  });

  activePreset = null;
  markSelectedPreset(null);

  setEffectSelected(effectName);
  scheduleRender();

  showToast(`Effetto "${effectName}" applicato.`);
}
function bindEvents() {
  const openLogoPicker = () => ui.logoInput.click();

  ui.effectCards.forEach((card) => {
    card.addEventListener("click", () => {
      applyEffect(card.dataset.effect);
    });
  });
  ui.toolTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActivePanel(tab.dataset.panel);
    });
  });


  ui.logoButton.addEventListener("click", openLogoPicker);
  ui.changeLogoBtn.addEventListener("click", openLogoPicker);

  ui.logoInput.addEventListener("change", async () => {
    const file = ui.logoInput.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("Seleziona un file immagine valido.", true);
      return;
    }

    try {
      currentLogo = await readFileAsDataURL(file);
      currentLogoName = file.name;

      setLogoThumbnail(currentLogo, currentLogoName);

      if (!ui.showLogo.checked) {
        ui.showLogo.checked = true;
      }

      updateLogoControls();
      scheduleRender();

      showToast(`Logo "${file.name}" selezionato.`);
    } catch (error) {
      console.error(error);
      showToast("Non riesco a leggere il logo.", true);
    }
  });

  ui.downloadBtn.addEventListener("click", async () => {
    if (!currentQRCode) {
      showToast("Inserisci un link valido prima di esportare.", true);
      return;
    }

    try {
      ui.downloadBtn.disabled = true;

      await currentQRCode.download({
        name: sanitizeFileName(ui.fileName.value),
        extension: "png"
      });

      showToast("Download PNG avviato.");
    } catch (error) {
      console.error(error);
      showToast("Errore nel download PNG.", true);
    } finally {
      ui.downloadBtn.disabled = false;
    }
  });

  ui.resetBtn.addEventListener("click", () => {
    Object.entries(defaults).forEach(([key, value]) => {
      setFieldValue(key, value);
    });

    currentLogo = DEFAULT_LOGO;
    currentLogoName = DEFAULT_LOGO_NAME;

    ui.logoInput.value = "";

    setLogoThumbnail(currentLogo, currentLogoName);

    activePreset = "classic";
    markSelectedPreset(activePreset);

    zoom = 100;
    updateZoom();

    updateLogoControls();
    scheduleRender();

    showToast("Impostazioni ripristinate.");
  });

  ui.zoomOutBtn.addEventListener("click", () => {
    zoom -= ZOOM_STEP;
    updateZoom();
  });

  ui.zoomInBtn.addEventListener("click", () => {
    zoom += ZOOM_STEP;
    updateZoom();
  });

  ui.zoomResetBtn.addEventListener("click", () => {
    zoom = 100;
    updateZoom();
  });

  ui.showLogo.addEventListener("change", () => {
    updateLogoControls();
    scheduleRender();
  });

  const liveInputs = [
    ui.qrData,
    ui.qrSize,
    ui.dotsColor1,
    ui.dotsColor2,
    ui.gradientRotation,
    ui.cornersColor1,
    ui.cornersColor2,
    ui.backgroundColor1,
    ui.backgroundColor2,
    ui.backgroundOpacity,
    ui.logoSize,
    ui.logoMargin
  ];

  const liveChanges = [
    ui.dotsType,
    ui.gradientType,
    ui.cornersSquareType,
    ui.cornersDotType,
    ui.useCornersGradient,
    ui.backgroundGradientType,
    ui.hideBackgroundDots
  ];

  liveInputs.forEach((element) => {
    element.addEventListener("input", () => {
      activePreset = null;
      markSelectedPreset(null);
      scheduleRender();
    });
  });

  liveChanges.forEach((element) => {
    element.addEventListener("change", () => {
      activePreset = null;
      markSelectedPreset(null);
      scheduleRender();
    });
  });
}

setLogoThumbnail(currentLogo, currentLogoName);
renderPresetLibrary();
updateLogoControls();
updateZoom();
bindEvents();
renderQR();