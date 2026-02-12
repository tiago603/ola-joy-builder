import html2pdf from "html2pdf.js";

export const generatePDF = async () => {
  const content = document.querySelector("main");
  if (!content) return;

  // Hide all interactive elements and animations for a clean PDF
  const elementsToHide = document.querySelectorAll(
    "header, nav, .cta-button, button, .scroll-reveal-wrapper"
  );
  
  // Store original styles
  const originalStyles: { el: HTMLElement; display: string; opacity: string; transform: string }[] = [];
  
  elementsToHide.forEach((el) => {
    const htmlEl = el as HTMLElement;
    originalStyles.push({
      el: htmlEl,
      display: htmlEl.style.display,
      opacity: htmlEl.style.opacity,
      transform: htmlEl.style.transform,
    });
  });

  // Hide buttons/nav, force reveal all animated content
  document.querySelectorAll("header, nav").forEach((el) => {
    (el as HTMLElement).style.display = "none";
  });
  document.querySelectorAll(".cta-button, button").forEach((el) => {
    (el as HTMLElement).style.display = "none";
  });

  // Force all scroll-reveal content to be visible
  document.querySelectorAll("[style*='opacity'], [style*='transform']").forEach((el) => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.opacity = "1";
    htmlEl.style.transform = "none";
  });

  const opt = {
    margin: [5, 5, 5, 5],
    filename: "IA-para-Arquitetos-Crissair.pdf",
    image: { type: "jpeg", quality: 0.92 },
    html2canvas: {
      scale: 1.5,
      useCORS: true,
      letterRendering: true,
      scrollY: 0,
      windowWidth: 1024,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["css", "legacy"], avoid: ["h1", "h2", "h3", "img", "li"] },
  };

  try {
    await html2pdf().set(opt).from(content).save();
  } finally {
    // Restore all original styles
    originalStyles.forEach(({ el, display, opacity, transform }) => {
      el.style.display = display;
      el.style.opacity = opacity;
      el.style.transform = transform;
    });
  }
};
