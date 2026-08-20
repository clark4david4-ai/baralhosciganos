// PDF Generator for Baralho Cigano presentation
// Uses jsPDF to build a landscape A4 PDF with all 57 slides.
// Preserves the warm cream palette and serif typography feel using
// jsPDF's built-in "times" font (Latin-1 encoding covers Portuguese).

import { jsPDF } from "jspdf";
import { slides, totalSlides } from "../data/slides";

// ----- Design tokens (mm) -----
const PAGE_W = 297; // A4 landscape width
const PAGE_H = 210;
const MARGIN_X = 24;

const COLORS = {
  bg: [237, 227, 202], // cream
  bgSoft: [244, 234, 210],
  text: [74, 55, 40], // dark brown
  textDark: [62, 44, 30],
  muted: [122, 106, 85],
  gold: [184, 152, 92],
  goldSoft: [200, 172, 118],
  red: [123, 32, 32],
};

// ----- Utilities -----
const setFill = (doc, rgb) => doc.setFillColor(rgb[0], rgb[1], rgb[2]);
const setDraw = (doc, rgb) => doc.setDrawColor(rgb[0], rgb[1], rgb[2]);
const setText = (doc, rgb) => doc.setTextColor(rgb[0], rgb[1], rgb[2]);

const drawBackground = (doc) => {
  setFill(doc, COLORS.bg);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");
};

// Wide-letter spacing effect for small caps labels
const drawTrackedCaps = (doc, text, x, y, options = {}) => {
  const { align = "center", size = 8, color = COLORS.gold, spacing = 1.6 } = options;
  const upper = String(text).toUpperCase();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(size);
  setText(doc, color);
  // Compute total width with extra spacing between chars
  const chars = [...upper];
  const widths = chars.map((c) =>
    (doc.getStringUnitWidth(c) * size) / doc.internal.scaleFactor
  );
  const totalW = widths.reduce((a, b) => a + b, 0) + spacing * (chars.length - 1);
  let startX = x;
  if (align === "center") startX = x - totalW / 2;
  else if (align === "right") startX = x - totalW;
  let cursor = startX;
  chars.forEach((c, i) => {
    doc.text(c, cursor, y);
    cursor += widths[i] + spacing;
  });
};

// Decorative ornament: line ✦ line (centered)
const drawOrnament = (doc, cx, y, width = 60) => {
  setDraw(doc, COLORS.goldSoft);
  doc.setLineWidth(0.25);
  const half = width / 2;
  const gap = 5;
  doc.line(cx - half, y, cx - gap, y);
  doc.line(cx + gap, y, cx + half, y);
  setText(doc, COLORS.gold);
  doc.setFont("times", "normal");
  doc.setFontSize(11);
  doc.text("+", cx, y + 1.2, { align: "center" });
};

// Small left-aligned ornament under content titles
const drawLeftOrnament = (doc, x, y, width = 48) => {
  setDraw(doc, COLORS.goldSoft);
  doc.setLineWidth(0.25);
  const gap = 4;
  const half = width / 2;
  doc.line(x, y, x + half - gap, y);
  doc.line(x + half + gap, y, x + width, y);
  setText(doc, COLORS.gold);
  doc.setFont("times", "normal");
  doc.setFontSize(10);
  doc.text("+", x + half, y + 1, { align: "center" });
};

// Decorative corners (for cover)
const drawCorners = (doc, x, y, w, h, size = 10) => {
  setDraw(doc, COLORS.goldSoft);
  doc.setLineWidth(0.35);
  // TL
  doc.line(x, y, x + size, y);
  doc.line(x, y, x, y + size);
  // TR
  doc.line(x + w - size, y, x + w, y);
  doc.line(x + w, y, x + w, y + size);
  // BL
  doc.line(x, y + h - size, x, y + h);
  doc.line(x, y + h, x + size, y + h);
  // BR
  doc.line(x + w - size, y + h, x + w, y + h);
  doc.line(x + w, y + h - size, x + w, y + h);
};

// Bottom slide counter + progress
const drawFooter = (doc, current, total) => {
  const pad = (n) => String(n).padStart(2, "0");
  drawTrackedCaps(
    doc,
    `${pad(current)} · ${pad(total)}`,
    PAGE_W / 2,
    PAGE_H - 8,
    { size: 8, color: COLORS.muted, spacing: 1.4 }
  );
  // Progress bar
  const barY = PAGE_H - 4;
  setFill(doc, [220, 205, 175]);
  doc.rect(0, barY, PAGE_W, 0.7, "F");
  setFill(doc, COLORS.red);
  doc.rect(0, barY, (current / total) * PAGE_W, 0.7, "F");
};

// Header brand + tools (light, ornamental)
const drawHeader = (doc) => {
  drawTrackedCaps(doc, "BARALHO CIGANO", MARGIN_X, 12, {
    align: "left",
    size: 7,
    color: COLORS.muted,
    spacing: 1.4,
  });
  drawTrackedCaps(doc, "Le Petit Lenormand", PAGE_W - MARGIN_X, 12, {
    align: "right",
    size: 7,
    color: COLORS.muted,
    spacing: 1.4,
  });
};

// Split text respecting max width, returns lines
const splitLines = (doc, text, maxWidth) => doc.splitTextToSize(text, maxWidth);

// ----- Slide renderers -----
const renderCover = (doc, s) => {
  drawBackground(doc);

  // Frame corners
  const boxX = 40, boxY = 30, boxW = PAGE_W - 80, boxH = PAGE_H - 60;
  drawCorners(doc, boxX, boxY, boxW, boxH, 14);

  const cx = PAGE_W / 2;
  let y = 55;
  drawTrackedCaps(doc, s.section, cx, y, { size: 9, spacing: 2 });
  y += 8;
  drawOrnament(doc, cx, y, 55);
  y += 15;

  setText(doc, COLORS.textDark);
  doc.setFont("times", "normal");
  doc.setFontSize(48);
  doc.text(s.title, cx, y, { align: "center" });
  y += 12;

  doc.setFont("times", "italic");
  doc.setFontSize(20);
  setText(doc, [92, 74, 56]);
  doc.text(s.subtitle, cx, y, { align: "center" });
  y += 8;

  drawOrnament(doc, cx, y, 55);
  y += 10;

  doc.setFont("times", "normal");
  doc.setFontSize(13);
  setText(doc, COLORS.text);
  doc.text(s.description, cx, y, { align: "center" });
  y += 10;

  drawTrackedCaps(doc, s.author, cx, y, {
    size: 10,
    color: COLORS.red,
    spacing: 2.2,
  });
  y += 10;

  doc.setFont("times", "italic");
  doc.setFontSize(11);
  setText(doc, COLORS.muted);
  const dedication = splitLines(doc, s.dedication, PAGE_W - 100);
  doc.text(dedication, cx, y, { align: "center" });
};

const renderSectionTitle = (doc, s) => {
  drawBackground(doc);
  const cx = PAGE_W / 2;
  let y = PAGE_H / 2 - 25;

  drawOrnament(doc, cx, y, 55);
  y += 10;
  drawTrackedCaps(doc, s.section, cx, y, { size: 9, spacing: 2 });
  y += 15;

  setText(doc, COLORS.textDark);
  doc.setFont("times", "normal");
  doc.setFontSize(44);
  const titleLines = splitLines(doc, s.title, PAGE_W - 60);
  doc.text(titleLines, cx, y, { align: "center" });
  y += 12 * titleLines.length;

  if (s.subtitle) {
    doc.setFont("times", "italic");
    doc.setFontSize(18);
    setText(doc, [92, 74, 56]);
    doc.text(s.subtitle, cx, y, { align: "center" });
    y += 10;
  }
  drawOrnament(doc, cx, y, 55);
};

const renderContent = (doc, s) => {
  drawBackground(doc);
  const contentW = PAGE_W - MARGIN_X * 2;
  let y = 42;

  drawTrackedCaps(doc, s.section, MARGIN_X, y, {
    align: "left",
    size: 9,
    spacing: 2,
  });
  y += 12;

  setText(doc, COLORS.textDark);
  doc.setFont("times", "normal");
  doc.setFontSize(34);
  const titleLines = splitLines(doc, s.title, contentW);
  doc.text(titleLines, MARGIN_X, y);
  y += 10 * titleLines.length + 2;

  drawLeftOrnament(doc, MARGIN_X, y + 1, 40);
  y += 10;

  doc.setFont("times", "normal");
  doc.setFontSize(13);
  setText(doc, COLORS.text);

  s.paragraphs.forEach((p) => {
    const lines = splitLines(doc, p, contentW);
    doc.text(lines, MARGIN_X, y);
    y += 6.2 * lines.length + 4;
  });
};

const renderClosing = (doc, s) => {
  drawBackground(doc);
  const cx = PAGE_W / 2;
  let y = 55;

  drawTrackedCaps(doc, s.section, cx, y, { size: 9, spacing: 2 });
  y += 8;
  drawOrnament(doc, cx, y, 55);
  y += 15;

  setText(doc, COLORS.textDark);
  doc.setFont("times", "normal");
  doc.setFontSize(52);
  doc.text(s.title, cx, y, { align: "center" });
  y += 12;
  drawOrnament(doc, cx, y, 55);
  y += 12;

  doc.setFont("times", "italic");
  doc.setFontSize(15);
  setText(doc, [92, 74, 56]);
  s.paragraphs.forEach((p) => {
    const lines = splitLines(doc, p, PAGE_W - 100);
    doc.text(lines, cx, y, { align: "center" });
    y += 7.5 * lines.length + 3;
  });
  y += 6;

  drawTrackedCaps(doc, s.author, cx, y, {
    size: 10,
    color: COLORS.red,
    spacing: 2.2,
  });
  y += 8;

  doc.setFont("times", "italic");
  doc.setFontSize(12);
  setText(doc, COLORS.muted);
  doc.text(s.farewell, cx, y, { align: "center" });
};

const renderCard = (doc, s, imgData) => {
  drawBackground(doc);
  const pad = (n) => String(n).padStart(2, "0");

  // Left column: card image
  const cardW = 78;
  const cardH = 117; // 2:3 ratio
  const cardX = 30;
  const cardY = (PAGE_H - cardH) / 2;
  if (imgData) {
    // subtle shadow / border rectangle
    setDraw(doc, COLORS.goldSoft);
    doc.setLineWidth(0.3);
    doc.rect(cardX - 0.5, cardY - 0.5, cardW + 1, cardH + 1);
    try {
      doc.addImage(imgData, "JPEG", cardX, cardY, cardW, cardH, undefined, "FAST");
    } catch (e) {
      // ignore image errors
    }
  }
  // Caption
  drawTrackedCaps(
    doc,
    `Carta ${pad(s.cardNumber)} / ${pad(s.cardTotal)}`,
    cardX + cardW / 2,
    cardY + cardH + 8,
    { size: 8, color: COLORS.muted, spacing: 1.6 }
  );

  // Right column: text
  const textX = cardX + cardW + 20;
  const textW = PAGE_W - textX - MARGIN_X;
  let y = cardY + 8;

  drawTrackedCaps(
    doc,
    `Carta ${pad(s.cardNumber)} de ${s.cardTotal}`,
    textX,
    y,
    { align: "left", size: 9, spacing: 2 }
  );
  y += 12;

  setText(doc, COLORS.textDark);
  doc.setFont("times", "normal");
  doc.setFontSize(40);
  doc.text(s.title, textX, y);
  y += 4;

  drawLeftOrnament(doc, textX, y + 4, 40);
  y += 12;

  doc.setFont("times", "normal");
  doc.setFontSize(12);
  setText(doc, COLORS.text);
  const lines = splitLines(doc, s.text, textW);
  doc.text(lines, textX, y);
};

// ----- Image loading (fetch card as base64 dataURL) -----
const imgCache = {};
const loadImage = async (path) => {
  if (imgCache[path]) return imgCache[path];
  try {
    const res = await fetch(path);
    if (!res.ok) return null;
    const blob = await res.blob();
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    imgCache[path] = dataUrl;
    return dataUrl;
  } catch (e) {
    return null;
  }
};

// ----- Main entry -----
export const generatePDF = async (onProgress) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
    compress: true,
  });

  // Preload all card images first
  const cardSlides = slides.filter((s) => s.type === "card");
  for (let i = 0; i < cardSlides.length; i++) {
    const s = cardSlides[i];
    const path = `/cards/card-${String(s.cardNumber).padStart(2, "0")}.jpeg`;
    await loadImage(path);
    onProgress && onProgress(Math.round(((i + 1) / cardSlides.length) * 50));
  }

  for (let i = 0; i < slides.length; i++) {
    const s = slides[i];
    if (i > 0) doc.addPage();

    switch (s.type) {
      case "cover":
        renderCover(doc, s);
        break;
      case "section":
        renderSectionTitle(doc, s);
        break;
      case "card": {
        const path = `/cards/card-${String(s.cardNumber).padStart(2, "0")}.jpeg`;
        renderCard(doc, s, imgCache[path]);
        break;
      }
      case "closing":
        renderClosing(doc, s);
        break;
      case "content":
      default:
        renderContent(doc, s);
        break;
    }

    // Common footer + header (skip header on cover)
    if (s.type !== "cover") drawHeader(doc);
    drawFooter(doc, s.n, totalSlides);

    onProgress && onProgress(50 + Math.round(((i + 1) / slides.length) * 50));
    // yield to UI thread
    if (i % 6 === 0) await new Promise((r) => setTimeout(r, 0));
  }

  doc.save("Baralho-Cigano-Apostila.pdf");
};

export default generatePDF;
