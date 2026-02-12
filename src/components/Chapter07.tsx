import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Demonstrações ao vivo com ferramentas reais",
  "Exercícios práticos (mão na massa)",
  "Palestras com especialistas em IA",
  "Networking com 1.000 arquitetos inovadores",
  "Acesso antecipado a ferramentas exclusivas Crissair",
];

const Chapter07 = () => (
  <section id="cap07" className="section-light py-20 md:py-28">
    <div className="max-w-3xl mx-auto px-6 relative">
      <span className="chapter-number">07</span>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10 relative z-10">
          O futuro — IA + Arquitetura + Crissair
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
          O Workshop presencial da Crissair na Exporevestir 2026 é a oportunidade perfeita para dar seus primeiros passos com IA de forma guiada e prática. Veja o que você vai encontrar:
        </p>
      </ScrollReveal>

      <div className="space-y-4 mb-12">
        {benefits.map((b, i) => (
          <ScrollReveal key={b} delay={0.15 + i * 0.08} direction="left">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary shrink-0" size={22} />
              <span className="text-foreground/90 text-base">{b}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.6}>
        <div className="rounded-xl border-2 border-primary/30 bg-card p-8">
          <h3 className="font-display font-bold text-xl text-primary mb-3">Crissair Studio AI</h3>
          <p className="text-foreground/70 text-base leading-relaxed">
            Em breve: <strong className="text-foreground">Crissair Studio AI</strong> — gerador de memoriais com produtos Crissair, assistente de especificação 24/7 e melhorador de renders. O futuro da arquitetura inteligente está sendo construído agora.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Chapter07;
