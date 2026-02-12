import { ScrollReveal } from "./ScrollReveal";
import CrissairLogo from "./CrissairLogo";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer
    id="footer"
    className="relative py-24 md:py-32 overflow-hidden"
    style={{ background: "linear-gradient(135deg, hsl(0 0% 10%) 0%, hsl(0 0% 14%) 50%, hsl(0 0% 10%) 100%)" }}
  >
    <div className="decorative-corner top-left" />
    <div className="decorative-corner top-right" />
    <div className="decorative-corner bottom-left" />
    <div className="decorative-corner bottom-right" />

    <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
      <ScrollReveal>
        <p className="font-display font-bold text-2xl md:text-3xl text-secondary-foreground mb-2">
          Bem-vindo à era da arquitetura inteligente.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="font-display font-bold text-2xl md:text-3xl text-primary mb-12">
          Bem-vindo ao futuro com a Crissair.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <CrissairLogo light className="mb-8 scale-150 md:scale-[1.75]" />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <p className="italic text-secondary-foreground/50 mb-10">
          Elegância e inovação para momentos que encantam.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <a
          href="https://instagram.com/crissair_eletros"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors text-lg"
        >
          <Instagram size={24} />
          <span>@crissair_eletros</span>
        </a>
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <p className="text-secondary-foreground/40 text-sm mt-10 tracking-wide">
          crissair.com.br
        </p>
      </ScrollReveal>
    </div>
  </footer>
);

export default Footer;
