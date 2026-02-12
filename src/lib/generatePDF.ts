import html2pdf from "html2pdf.js";

export const generatePDF = async () => {
  const content = document.querySelector("main");
  if (!content) return;

  // Hide interactive elements during PDF generation
  const header = document.querySelector("header");
  const sideNav = document.querySelector("nav");
  const ctaButtons = content.querySelectorAll(".cta-button, button");
  
  if (header) (header as HTMLElement).style.display = "none";
  if (sideNav) (sideNav as HTMLElement).style.display = "none";
  ctaButtons.forEach((btn) => (btn as HTMLElement).style.visibility = "hidden");

  const opt = {
    margin: 0,
    filename: "IA-para-Arquitetos-Crissair.pdf",
    image: { type: "jpeg", quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  try {
    await html2pdf().set(opt).from(content).save();
  } finally {
    // Restore elements
    if (header) (header as HTMLElement).style.display = "";
    if (sideNav) (sideNav as HTMLElement).style.display = "";
    ctaButtons.forEach((btn) => (btn as HTMLElement).style.visibility = "");
  }
};
