import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CrissairLogo from "./CrissairLogo";

const chapters = [
  { id: "capa", label: "Capa" },
  { id: "sumario", label: "Sumário" },
  { id: "cap01", label: "01" },
  { id: "cap02", label: "02" },
  { id: "cap03", label: "03" },
  { id: "cap04", label: "04" },
  { id: "cap05", label: "05" },
  { id: "cap06", label: "06" },
  { id: "cap07", label: "07" },
  { id: "footer", label: "CTA" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("capa");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = chapters.map((c) => document.getElementById(c.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(chapters[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <div className={`transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}>
            <CrissairLogo light />
          </div>
          <button
            className="lg:hidden text-primary-foreground pointer-events-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-secondary/98 backdrop-blur-md lg:hidden flex flex-col items-center justify-center gap-4">
          {chapters.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollTo(c.id)}
              className={`text-lg font-display font-semibold tracking-wide transition-colors ${
                activeSection === c.id ? "text-primary" : "text-primary-foreground/70 hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop side nav */}
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 px-3">
        {chapters.map((c) => (
          <button
            key={c.id}
            onClick={() => scrollTo(c.id)}
            title={c.label}
            className={`group flex items-center gap-2 transition-all duration-200`}
          >
            <span
              className={`block rounded-full transition-all duration-200 ${
                activeSection === c.id
                  ? "w-3 h-3 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                  : "w-2 h-2 bg-primary-foreground/30 group-hover:bg-primary/70"
              }`}
            />
            <span
              className={`text-[10px] font-display font-semibold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                activeSection === c.id ? "text-primary !opacity-100" : "text-primary-foreground/60"
              }`}
            >
              {c.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Header;
