"use strict";

/*
  QR STUDIO — LIBRERIA PRESET LOCALE
  ===================================

  Questo file contiene SOLO preset, senza logica UI.
  Viene caricato prima di app.js:

    <script src="./qr-code-styling.js"></script>
    <script src="./qr-presets.js"></script>
    <script src="./app.js" defer></script>

  Forme native sicure della libreria qr-code-styling:
  - Moduli: square, dots, rounded, extra-rounded, classy, classy-rounded
  - Cornici finder: square, dot, extra-rounded
  - Centro finder: square, dot

  Ogni preset mantiene sfondo chiaro e contrasto elevato.
  I preset artistici vanno provati con una fotocamera reale prima della stampa.
*/

window.QR_PRESET_LIBRARY = {
  categories: [
    
 
    {
      id: "essential",
      name: "Essenziali",
      description: "Alta leggibilità, corporate e stampa sicura."
    },
    {
      id: "blue",
      name: "Blue Collection",
      description: "Blu, oceano, ghiaccio e tecnologia."
    },
    {
      id: "nature",
      name: "Nature Collection",
      description: "Verdi, terra, resort e outdoor."
    },
    {
      id: "luxury",
      name: "Luxury Collection",
      description: "Oro, rame, nero e finiture premium."
    },
    {
      id: "warm",
      name: "Warm Collection",
      description: "Corallo, tramonto, terracotta e colori caldi."
    },
    {
      id: "creative",
      name: "Creative Collection",
      description: "Viola, neon, gradazioni riconoscibili."
    },
    {
      id: "experimental",
      name: "Sperimentali",
      description: "Molto distintivi: testare sempre prima della stampa."
    },
    {
      id: "crazy",
      name: "Crazy Lab",
      description: "Preset estremi, scenografici e da testare sempre."
    }
  ],

  presets: [
    /* ───────────────────────────────────────────────────────
       ESSENZIALI — contrasto massimo
       ─────────────────────────────────────────────────────── */
    {
      id: "classic-black",
      name: "Classic Black",
      category: "essential",
      description: "Nero puro, universale e massima compatibilità.",
      swatch: ["#111111", "#111111"],
      dotsType: "square", dotsColor1: "#111111", dotsColor2: "#111111", gradientType: "solid", gradientRotation: "0",
      cornersSquareType: "square", cornersDotType: "square", cornersColor1: "#111111", cornersColor2: "#111111", useCornersGradient: false,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFFFFF", backgroundGradientType: "solid",
      showLogo: false, logoSize: "18", logoMargin: "12", hideBackgroundDots: true
    },
    {
      id: "classic-rounded",
      name: "Classic Rounded",
      category: "essential",
      description: "Classico morbido con angoli arrotondati.",
      swatch: ["#161616", "#161616"],
      dotsType: "rounded", dotsColor1: "#161616", dotsColor2: "#161616", gradientType: "solid", gradientRotation: "0",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#161616", cornersColor2: "#161616", useCornersGradient: false,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFFFFF", backgroundGradientType: "solid",
      showLogo: true, logoSize: "22", logoMargin: "8", hideBackgroundDots: true
    },
    {
      id: "graphite",
      name: "Graphite",
      category: "essential",
      description: "Grigio grafite per progetti editoriali e corporate.",
      swatch: ["#293241", "#293241"],
      dotsType: "rounded", dotsColor1: "#293241", dotsColor2: "#293241", gradientType: "solid", gradientRotation: "0",
      cornersSquareType: "square", cornersDotType: "square", cornersColor1: "#293241", cornersColor2: "#293241", useCornersGradient: false,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFFFFF", backgroundGradientType: "solid",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },
    {
      id: "slate-dots",
      name: "Slate Dots",
      category: "essential",
      description: "Puntini blu-grigio, minimale e contemporaneo.",
      swatch: ["#344054", "#344054"],
      dotsType: "dots", dotsColor1: "#344054", dotsColor2: "#344054", gradientType: "solid", gradientRotation: "0",
      cornersSquareType: "square", cornersDotType: "square", cornersColor1: "#344054", cornersColor2: "#344054", useCornersGradient: false,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFFFFF", backgroundGradientType: "solid",
      showLogo: true, logoSize: "18", logoMargin: "12", hideBackgroundDots: true
    },
    {
      id: "ink-classy",
      name: "Ink Classy",
      category: "essential",
      description: "Nero in stile classy, elegante ma sobrio.",
      swatch: ["#121826", "#121826"],
      dotsType: "classy", dotsColor1: "#121826", dotsColor2: "#121826", gradientType: "solid", gradientRotation: "0",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#121826", cornersColor2: "#121826", useCornersGradient: false,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFFFFF", backgroundGradientType: "solid",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "night-round",
      name: "Night Round",
      category: "essential",
      description: "Blu notte intenso per documenti e QR tecnici.",
      swatch: ["#0F172A", "#0F172A"],
      dotsType: "extra-rounded", dotsColor1: "#0F172A", dotsColor2: "#0F172A", gradientType: "solid", gradientRotation: "0",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#0F172A", cornersColor2: "#0F172A", useCornersGradient: false,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#F8FAFC", backgroundGradientType: "solid",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },

    /* ───────────────────────────────────────────────────────
       BLUE COLLECTION
       ─────────────────────────────────────────────────────── */
    {
      id: "ocean-blue",
      name: "Ocean Blue",
      category: "blue",
      description: "Blu marino e ciano, ideale per tour e hospitality.",
      swatch: ["#0B3F8C", "#00A6D6"],
      dotsType: "rounded", dotsColor1: "#0B3F8C", dotsColor2: "#00A6D6", gradientType: "linear", gradientRotation: "40",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#07346F", cornersColor2: "#00B7E8", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#E8F7FF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "21", logoMargin: "9", hideBackgroundDots: true
    },
    {
      id: "electric-blue",
      name: "Electric Blue",
      category: "blue",
      description: "Blu elettrico e ciano per look digitale.",
      swatch: ["#062B6B", "#00C2FF"],
      dotsType: "rounded", dotsColor1: "#062B6B", dotsColor2: "#00C2FF", gradientType: "linear", gradientRotation: "35",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#052258", cornersColor2: "#00C2FF", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#E9F8FF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "21", logoMargin: "9", hideBackgroundDots: true
    },
    {
      id: "mediterranean",
      name: "Mediterranean",
      category: "blue",
      description: "Blu mare e turchese per turismo e virtual tour.",
      swatch: ["#005A9C", "#00A7B5"],
      dotsType: "rounded", dotsColor1: "#005A9C", dotsColor2: "#00A7B5", gradientType: "linear", gradientRotation: "30",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#00457B", cornersColor2: "#00B9C8", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#E8FBFC", backgroundGradientType: "radial",
      showLogo: true, logoSize: "22", logoMargin: "8", hideBackgroundDots: true
    },
    {
      id: "ice-glass",
      name: "Ice Glass",
      category: "blue",
      description: "Blu ghiaccio leggero e arioso.",
      swatch: ["#1D4E89", "#67D8F4"],
      dotsType: "dots", dotsColor1: "#1D4E89", dotsColor2: "#67D8F4", gradientType: "linear", gradientRotation: "120",
      cornersSquareType: "dot", cornersDotType: "dot", cornersColor1: "#183F70", cornersColor2: "#76E2FA", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#ECFBFF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "18", logoMargin: "12", hideBackgroundDots: true
    },
    {
      id: "deep-sea",
      name: "Deep Sea",
      category: "blue",
      description: "Blu petrolio e teal con stile organico.",
      swatch: ["#063B4C", "#00A9A5"],
      dotsType: "classy-rounded", dotsColor1: "#063B4C", dotsColor2: "#00A9A5", gradientType: "linear", gradientRotation: "60",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#042F3D", cornersColor2: "#0EBBB2", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#E7FBF8", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "sapphire",
      name: "Sapphire",
      category: "blue",
      description: "Blu reale e azzurro, elegante e professionale.",
      swatch: ["#123C8C", "#4B9BFF"],
      dotsType: "extra-rounded", dotsColor1: "#123C8C", dotsColor2: "#4B9BFF", gradientType: "linear", gradientRotation: "135",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#0E2E6D", cornersColor2: "#69AEFF", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#EDF5FF", backgroundGradientType: "linear",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },

    /* ───────────────────────────────────────────────────────
       NATURE COLLECTION
       ─────────────────────────────────────────────────────── */
    {
      id: "forest-premium",
      name: "Forest Premium",
      category: "nature",
      description: "Verde naturale per resort e agriturismi.",
      swatch: ["#0B5136", "#54A75D"],
      dotsType: "classy-rounded", dotsColor1: "#0B5136", dotsColor2: "#54A75D", gradientType: "linear", gradientRotation: "55",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#073C29", cornersColor2: "#4C9A54", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#ECF8E9", backgroundGradientType: "radial",
      showLogo: true, logoSize: "21", logoMargin: "9", hideBackgroundDots: true
    },
    {
      id: "emerald-gold",
      name: "Emerald Gold",
      category: "nature",
      description: "Verde smeraldo e oro, raffinato e riconoscibile.",
      swatch: ["#005C43", "#D4A62A"],
      dotsType: "extra-rounded", dotsColor1: "#005C43", dotsColor2: "#D4A62A", gradientType: "linear", gradientRotation: "45",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#004430", cornersColor2: "#E1B83D", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF9E7", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "olive-grove",
      name: "Olive Grove",
      category: "nature",
      description: "Oliva e salvia per country house e food experience.",
      swatch: ["#4C5E2A", "#A9B96D"],
      dotsType: "classy", dotsColor1: "#4C5E2A", dotsColor2: "#A9B96D", gradientType: "linear", gradientRotation: "30",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#3C4B20", cornersColor2: "#B7C77A", useCornersGradient: true,
      backgroundColor1: "#FFFDF7", backgroundColor2: "#F2F5DF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "21", logoMargin: "9", hideBackgroundDots: true
    },
    {
      id: "alpine-mint",
      name: "Alpine Mint",
      category: "nature",
      description: "Verde abete e menta, fresco e contemporaneo.",
      swatch: ["#0D5C58", "#66D7B9"],
      dotsType: "rounded", dotsColor1: "#0D5C58", dotsColor2: "#66D7B9", gradientType: "linear", gradientRotation: "120",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#094742", cornersColor2: "#75E1C6", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#E8FCF6", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "moss-stone",
      name: "Moss Stone",
      category: "nature",
      description: "Muschio e pietra, ideale per architettura naturale.",
      swatch: ["#455A3B", "#A59B7B"],
      dotsType: "dots", dotsColor1: "#455A3B", dotsColor2: "#A59B7B", gradientType: "linear", gradientRotation: "145",
      cornersSquareType: "square", cornersDotType: "dot", cornersColor1: "#34452D", cornersColor2: "#B6AA86", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#F7F4EC", backgroundGradientType: "linear",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },

    /* ───────────────────────────────────────────────────────
       LUXURY COLLECTION
       ─────────────────────────────────────────────────────── */
    {
      id: "black-gold",
      name: "Black & Gold",
      category: "luxury",
      description: "Luxury per showroom, interni e progetti high-end.",
      swatch: ["#101010", "#B88915"],
      dotsType: "square", dotsColor1: "#101010", dotsColor2: "#B88915", gradientType: "linear", gradientRotation: "135",
      cornersSquareType: "square", cornersDotType: "square", cornersColor1: "#0A0A0A", cornersColor2: "#BE8A14", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF9E7", backgroundGradientType: "linear",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "copper-studio",
      name: "Copper Studio",
      category: "luxury",
      description: "Rame e antracite per architettura e interior.",
      swatch: ["#252525", "#C77742"],
      dotsType: "square", dotsColor1: "#252525", dotsColor2: "#C77742", gradientType: "linear", gradientRotation: "135",
      cornersSquareType: "square", cornersDotType: "square", cornersColor1: "#1B1B1B", cornersColor2: "#D58D56", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF5ED", backgroundGradientType: "linear",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },
    {
      id: "platinum",
      name: "Platinum",
      category: "luxury",
      description: "Nero e grigio argento con taglio tecnico premium.",
      swatch: ["#151515", "#AEB7C2"],
      dotsType: "square", dotsColor1: "#151515", dotsColor2: "#AEB7C2", gradientType: "linear", gradientRotation: "130",
      cornersSquareType: "square", cornersDotType: "square", cornersColor1: "#0C0C0C", cornersColor2: "#C7D0D9", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#F1F4F6", backgroundGradientType: "linear",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },
    {
      id: "champagne",
      name: "Champagne",
      category: "luxury",
      description: "Marrone espresso e champagne, sobrio e lussuoso.",
      swatch: ["#3B2924", "#D9B77A"],
      dotsType: "extra-rounded", dotsColor1: "#3B2924", dotsColor2: "#D9B77A", gradientType: "linear", gradientRotation: "40",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#2B1D19", cornersColor2: "#E6C890", useCornersGradient: true,
      backgroundColor1: "#FFFDF9", backgroundColor2: "#FFF6E7", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "midnight-chrome",
      name: "Midnight Chrome",
      category: "luxury",
      description: "Blu notte e metallo per un look hi-tech premium.",
      swatch: ["#0B1220", "#7C8797"],
      dotsType: "square", dotsColor1: "#0B1220", dotsColor2: "#7C8797", gradientType: "linear", gradientRotation: "135",
      cornersSquareType: "square", cornersDotType: "square", cornersColor1: "#080D16", cornersColor2: "#A8B2C1", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#EEF2F6", backgroundGradientType: "linear",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },

    /* ───────────────────────────────────────────────────────
       WARM COLLECTION
       ─────────────────────────────────────────────────────── */
    {
      id: "sunset",
      name: "Sunset",
      category: "warm",
      description: "Magenta e arancio per hospitality ed eventi.",
      swatch: ["#8F1D7A", "#FF7B24"],
      dotsType: "dots", dotsColor1: "#8F1D7A", dotsColor2: "#FF7B24", gradientType: "linear", gradientRotation: "45",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#80175E", cornersColor2: "#FF6824", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF0E8", backgroundGradientType: "linear",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "coral-pop",
      name: "Coral Pop",
      category: "warm",
      description: "Rosso corallo e arancio per contenuti energici.",
      swatch: ["#D5204F", "#FF9A44"],
      dotsType: "extra-rounded", dotsColor1: "#D5204F", dotsColor2: "#FF9A44", gradientType: "linear", gradientRotation: "30",
      cornersSquareType: "dot", cornersDotType: "dot", cornersColor1: "#BF1740", cornersColor2: "#FF8240", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF2EE", backgroundGradientType: "radial",
      showLogo: true, logoSize: "22", logoMargin: "8", hideBackgroundDots: true
    },
    {
      id: "terra-toscana",
      name: "Terra Toscana",
      category: "warm",
      description: "Terracotta e oro per wine tour e resort.",
      swatch: ["#7F2D20", "#D09A32"],
      dotsType: "classy", dotsColor1: "#7F2D20", dotsColor2: "#D09A32", gradientType: "linear", gradientRotation: "50",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#682117", cornersColor2: "#E3B747", useCornersGradient: true,
      backgroundColor1: "#FFFDF9", backgroundColor2: "#FFF0DE", backgroundGradientType: "radial",
      showLogo: true, logoSize: "21", logoMargin: "9", hideBackgroundDots: true
    },
    {
      id: "apricot",
      name: "Apricot",
      category: "warm",
      description: "Pesca e arancio luminoso, fresco e accessibile.",
      swatch: ["#D95D39", "#FFB36B"],
      dotsType: "rounded", dotsColor1: "#D95D39", dotsColor2: "#FFB36B", gradientType: "linear", gradientRotation: "125",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#B94325", cornersColor2: "#FFC080", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF5EC", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "rose-gold",
      name: "Rose Gold",
      category: "warm",
      description: "Bordeaux e rosa oro per beauty e lifestyle.",
      swatch: ["#7C273F", "#E4A6A4"],
      dotsType: "classy-rounded", dotsColor1: "#7C273F", dotsColor2: "#E4A6A4", gradientType: "linear", gradientRotation: "45",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#641C31", cornersColor2: "#F0BCB8", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF1F1", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },

    /* ───────────────────────────────────────────────────────
       CREATIVE COLLECTION
       ─────────────────────────────────────────────────────── */
    {
      id: "royal-violet",
      name: "Royal Violet",
      category: "creative",
      description: "Viola e magenta per brand creativi e location.",
      swatch: ["#39106E", "#D822C9"],
      dotsType: "classy-rounded", dotsColor1: "#39106E", dotsColor2: "#D822C9", gradientType: "linear", gradientRotation: "55",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#2B0958", cornersColor2: "#EC35D8", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#F6EDFF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "lavender-dream",
      name: "Lavender Dream",
      category: "creative",
      description: "Indaco e lavanda, leggero e contemporaneo.",
      swatch: ["#5146A8", "#C095FF"],
      dotsType: "dots", dotsColor1: "#5146A8", dotsColor2: "#C095FF", gradientType: "linear", gradientRotation: "40",
      cornersSquareType: "dot", cornersDotType: "dot", cornersColor1: "#40368C", cornersColor2: "#CDA9FF", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#F6F0FF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },
    {
      id: "berry-punch",
      name: "Berry Punch",
      category: "creative",
      description: "Prugna e berry per un QR vivace e sofisticato.",
      swatch: ["#6A1B4D", "#E95189"],
      dotsType: "extra-rounded", dotsColor1: "#6A1B4D", dotsColor2: "#E95189", gradientType: "linear", gradientRotation: "120",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#53133C", cornersColor2: "#F36A9C", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF0F6", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "aurora",
      name: "Aurora",
      category: "creative",
      description: "Indaco e verde acqua in gradiente aurora.",
      swatch: ["#3B1E91", "#1DD1A1"],
      dotsType: "rounded", dotsColor1: "#3B1E91", dotsColor2: "#1DD1A1", gradientType: "linear", gradientRotation: "140",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#2B1474", cornersColor2: "#29E1B0", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#EEFDF8", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "pop-art",
      name: "Pop Art",
      category: "creative",
      description: "Blu intenso e rosa pop, massima riconoscibilità.",
      swatch: ["#1536D3", "#FF3D9A"],
      dotsType: "dots", dotsColor1: "#1536D3", dotsColor2: "#FF3D9A", gradientType: "linear", gradientRotation: "25",
      cornersSquareType: "square", cornersDotType: "dot", cornersColor1: "#1028AA", cornersColor2: "#FF52A8", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF0F8", backgroundGradientType: "radial",
      showLogo: true, logoSize: "18", logoMargin: "12", hideBackgroundDots: true
    },

    /* ───────────────────────────────────────────────────────
       SPERIMENTALI — contrasto comunque alto, verificare scan
       ─────────────────────────────────────────────────────── */
    {
      id: "neon-grid",
      name: "Neon Grid",
      category: "experimental",
      description: "Fucsia e viola, da testare prima della stampa.",
      swatch: ["#5A0CA8", "#F000B8"],
      dotsType: "classy-rounded", dotsColor1: "#5A0CA8", dotsColor2: "#F000B8", gradientType: "linear", gradientRotation: "90",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#440782", cornersColor2: "#FF21CC", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FBEAFF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },
    {
      id: "cyber-lime",
      name: "Cyber Lime",
      category: "experimental",
      description: "Navy e lime per QR futuristici e distintivi.",
      swatch: ["#081B33", "#A6FF00"],
      dotsType: "dots", dotsColor1: "#081B33", dotsColor2: "#A6FF00", gradientType: "linear", gradientRotation: "115",
      cornersSquareType: "square", cornersDotType: "dot", cornersColor1: "#071426", cornersColor2: "#9BEB00", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#F6FFE8", backgroundGradientType: "radial",
      showLogo: true, logoSize: "18", logoMargin: "12", hideBackgroundDots: true
    },
    {
      id: "ruby-noir",
      name: "Ruby Noir",
      category: "experimental",
      description: "Nero e rosso rubino per luxury ad alto impatto.",
      swatch: ["#160A0C", "#C61E47"],
      dotsType: "extra-rounded", dotsColor1: "#160A0C", dotsColor2: "#C61E47", gradientType: "linear", gradientRotation: "40",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#130609", cornersColor2: "#E33460", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF0F3", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
      id: "ultraviolet",
      name: "Ultraviolet",
      category: "experimental",
      description: "Viola profondo e blu elettrico, look notturno.",
      swatch: ["#2D0B59", "#3C9DFF"],
      dotsType: "classy-rounded", dotsColor1: "#2D0B59", dotsColor2: "#3C9DFF", gradientType: "linear", gradientRotation: "125",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#20063F", cornersColor2: "#55AEFF", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#EEF4FF", backgroundGradientType: "radial",
      showLogo: true, logoSize: "19", logoMargin: "11", hideBackgroundDots: true
    },
    {
      id: "laser-mint",
      name: "Laser Mint",
      category: "experimental",
      description: "Turchese laser e verde menta, futuristico ma leggibile.",
      swatch: ["#006E7F", "#30F0B1"],
      dotsType: "dots", dotsColor1: "#006E7F", dotsColor2: "#30F0B1", gradientType: "linear", gradientRotation: "65",
      cornersSquareType: "dot", cornersDotType: "dot", cornersColor1: "#005564", cornersColor2: "#42FFC4", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#E9FFF8", backgroundGradientType: "radial",
      showLogo: true, logoSize: "18", logoMargin: "12", hideBackgroundDots: true
    },
    {
      id: "cosmic-orange",
      name: "Cosmic Orange",
      category: "experimental",
      description: "Viola scuro e arancio per QR da eventi e nightlife.",
      swatch: ["#301050", "#FF7A18"],
      dotsType: "classy", dotsColor1: "#301050", dotsColor2: "#FF7A18", gradientType: "linear", gradientRotation: "35",
      cornersSquareType: "extra-rounded", cornersDotType: "dot", cornersColor1: "#22083D", cornersColor2: "#FF913B", useCornersGradient: true,
      backgroundColor1: "#FFFFFF", backgroundColor2: "#FFF3E9", backgroundGradientType: "radial",
      showLogo: true, logoSize: "20", logoMargin: "10", hideBackgroundDots: true
    },
    {
  id: "toxic-lime",
  name: "Toxic Lime",
  category: "crazy",
  description: "Nero assoluto e lime fluorescente.",
  swatch: ["#080808", "#C8FF00"],

  dotsType: "dots",
  dotsColor1: "#080808",
  dotsColor2: "#C8FF00",
  gradientType: "linear",
  gradientRotation: "45",

  cornersSquareType: "square",
  cornersDotType: "dot",
  cornersColor1: "#050505",
  cornersColor2: "#D9FF33",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#F5FFE6",
  backgroundGradientType: "radial",

  showLogo: true,
  logoSize: "18",
  logoMargin: "13",
  hideBackgroundDots: true
},

{
  id: "laser-pink",
  name: "Laser Pink",
  category: "crazy",
  description: "Fucsia laser e viola intenso.",
  swatch: ["#5F00B5", "#FF00B8"],

  dotsType: "classy-rounded",
  dotsColor1: "#5F00B5",
  dotsColor2: "#FF00B8",
  gradientType: "linear",
  gradientRotation: "110",

  cornersSquareType: "extra-rounded",
  cornersDotType: "dot",
  cornersColor1: "#3B0074",
  cornersColor2: "#FF33CD",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#FFF0FC",
  backgroundGradientType: "radial",

  showLogo: true,
  logoSize: "20",
  logoMargin: "10",
  hideBackgroundDots: true
},

{
  id: "matrix-code",
  name: "Matrix Code",
  category: "crazy",
  description: "Verde digitale su fondo bianco.",
  swatch: ["#003B12", "#39FF14"],

  dotsType: "square",
  dotsColor1: "#003B12",
  dotsColor2: "#39FF14",
  gradientType: "linear",
  gradientRotation: "90",

  cornersSquareType: "square",
  cornersDotType: "square",
  cornersColor1: "#00280C",
  cornersColor2: "#5CFF3B",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#ECFFEA",
  backgroundGradientType: "radial",

  showLogo: false,
  logoSize: "18",
  logoMargin: "12",
  hideBackgroundDots: true
},

{
  id: "firestorm",
  name: "Firestorm",
  category: "crazy",
  description: "Rosso fuoco, arancio e modulo extra rounded.",
  swatch: ["#8A0E00", "#FF8A00"],

  dotsType: "extra-rounded",
  dotsColor1: "#8A0E00",
  dotsColor2: "#FF8A00",
  gradientType: "linear",
  gradientRotation: "45",

  cornersSquareType: "extra-rounded",
  cornersDotType: "dot",
  cornersColor1: "#670900",
  cornersColor2: "#FFAA1F",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#FFF3E7",
  backgroundGradientType: "radial",

  showLogo: true,
  logoSize: "19",
  logoMargin: "11",
  hideBackgroundDots: true
},

{
  id: "galaxy",
  name: "Galaxy",
  category: "crazy",
  description: "Blu cosmico e viola elettrico.",
  swatch: ["#11125C", "#A343FF"],

  dotsType: "classy-rounded",
  dotsColor1: "#11125C",
  dotsColor2: "#A343FF",
  gradientType: "radial",
  gradientRotation: "0",

  cornersSquareType: "extra-rounded",
  cornersDotType: "dot",
  cornersColor1: "#0B0B3F",
  cornersColor2: "#C36CFF",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#F5EEFF",
  backgroundGradientType: "radial",

  showLogo: true,
  logoSize: "19",
  logoMargin: "11",
  hideBackgroundDots: true
},

{
  id: "acid-rain",
  name: "Acid Rain",
  category: "crazy",
  description: "Teal acido e verde menta brillante.",
  swatch: ["#006C73", "#00FFC6"],

  dotsType: "dots",
  dotsColor1: "#006C73",
  dotsColor2: "#00FFC6",
  gradientType: "linear",
  gradientRotation: "130",

  cornersSquareType: "dot",
  cornersDotType: "dot",
  cornersColor1: "#004A50",
  cornersColor2: "#36FFCF",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#E8FFF9",
  backgroundGradientType: "radial",

  showLogo: true,
  logoSize: "18",
  logoMargin: "12",
  hideBackgroundDots: true
},

{
  id: "candy-pop",
  name: "Candy Pop",
  category: "crazy",
  description: "Rosa candy e viola blu per brand giocosi.",
  swatch: ["#FF3CAC", "#784BA0"],

  dotsType: "rounded",
  dotsColor1: "#FF3CAC",
  dotsColor2: "#784BA0",
  gradientType: "linear",
  gradientRotation: "60",

  cornersSquareType: "extra-rounded",
  cornersDotType: "dot",
  cornersColor1: "#DF218D",
  cornersColor2: "#9262C2",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#FFF1FC",
  backgroundGradientType: "radial",

  showLogo: true,
  logoSize: "21",
  logoMargin: "9",
  hideBackgroundDots: true
},

{
  id: "ultra-solar",
  name: "Ultra Solar",
  category: "crazy",
  description: "Navy e giallo sole ultra contrastato.",
  swatch: ["#071A52", "#FFD400"],

  dotsType: "square",
  dotsColor1: "#071A52",
  dotsColor2: "#FFD400",
  gradientType: "linear",
  gradientRotation: "25",

  cornersSquareType: "square",
  cornersDotType: "square",
  cornersColor1: "#041139",
  cornersColor2: "#FFE766",
  useCornersGradient: true,

  backgroundColor1: "#FFFFFF",
  backgroundColor2: "#FFFCEA",
  backgroundGradientType: "radial",

  showLogo: true,
  logoSize: "18",
  logoMargin: "12",
  hideBackgroundDots: true
}
       

  ]
};
