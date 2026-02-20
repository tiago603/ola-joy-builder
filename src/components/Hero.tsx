import { ScrollReveal } from "./ScrollReveal";
import { ArrowDown } from "lucide-react";
import crissairDesde1991 from "@/assets/crissair-desde1991.png";

const Hero = () => {

  return (
    <section
      id="capa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(0 0% 95%) 0%, hsl(0 0% 88%) 50%, hsl(0 0% 95%) 100%)",
      }}
    >

      <div className="text-center px-6 max-w-3xl mx-auto relative z-10">
        <ScrollReveal delay={0.1}>
          <span className="label-badge mb-8 inline-block">GUIA EXCLUSIVO</span>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-secondary leading-tight mb-4">
            IA para Arquitetos
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-primary mb-8">
            Seu Primeiro Passo
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7}>
          <p className="text-secondary/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Um guia prático para transformar seu dia a dia com inteligência artificial — sem programação, sem complicação.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.9}>
          <button
            onClick={() => document.getElementById("sumario")?.scrollIntoView({ behavior: "smooth" })}
            className="cta-button text-lg gap-2"
          >
            Começar a leitura <ArrowDown size={18} />
          </button>
        </ScrollReveal>

        <ScrollReveal delay={1.1}>
          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="text-secondary/40 text-sm tracking-wide">Apresentado por</span>
            <img src={crissairDesde1991} alt="Crissair - Desde 1991" className="h-40 mix-blend-multiply" />
            <p className="text-secondary/50 text-sm tracking-widest font-display mt-2">Excelência que se sente, confiança que permanece.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
