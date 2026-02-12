import { ScrollReveal } from "./ScrollReveal";

const chapters = [
  { num: "01", title: "Por que a IA importa para você, arquiteto?" },
  { num: "02", title: "O que é IA na prática para o arquiteto?" },
  { num: "03", title: "As 12 dores do arquiteto e como a IA resolve" },
  { num: "04", title: "5 ferramentas gratuitas para começar hoje" },
  { num: "05", title: "3 prompts prontos para copiar e colar" },
  { num: "06", title: "Antes e depois com IA" },
  { num: "07", title: "O futuro — IA + Arquitetura + Crissair" },
];

const TableOfContents = () => {
  return (
    <section id="sumario" className="section-light py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-16 text-foreground">
            SUMÁRIO
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {chapters.map((ch, i) => (
            <ScrollReveal key={ch.num} delay={i * 0.08}>
              <button
                onClick={() => document.getElementById(`cap${ch.num}`)?.scrollIntoView({ behavior: "smooth" })}
                className="w-full flex items-center gap-6 py-5 border-b border-border hover:bg-muted/50 transition-colors group text-left"
              >
                <span className="font-display font-extrabold text-3xl md:text-4xl text-primary/80 group-hover:text-primary transition-colors min-w-[3rem]">
                  {ch.num}
                </span>
                <span className="font-sans text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                  {ch.title}
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
