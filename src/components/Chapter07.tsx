import { ScrollReveal } from "./ScrollReveal";
import { CheckCircle } from "lucide-react";
import chapter07Cover from "@/assets/chapter07-cover.jpg";

const benefits = [
  "Mais eficiente na gestão do seu escritório",
  "Mais ágil na entrega dos seus projetos",
  "Mais estratégico no posicionamento da sua marca",
  "Mais conectado com as ferramentas que definem o futuro",
  "Mais valorizado pelo mercado que exige inovação",
];

const Chapter07 = () => (
  <section id="cap07" className="section-light py-20 md:py-28">
    <div className="max-w-3xl mx-auto px-6 relative">
      <span className="chapter-number">07</span>
      <ScrollReveal>
        <img src={chapter07Cover} alt="Arquiteto do futuro com IA" className="w-full rounded-xl mb-10 shadow-lg" />
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10 relative z-10">
          O futuro — IA + Arquitetura + Crissair
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
          O mercado de arquitetura em 2026 exige um profissional diferente. Não basta mais dominar softwares de projeto, entender de materiais e ter bom gosto. O arquiteto que vai liderar o mercado nos próximos anos é aquele que sabe usar a tecnologia como alavanca — que transforma horas de trabalho operacional em minutos, que entrega mais valor ao cliente em menos tempo e que se posiciona como referência de inovação no setor.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
          Esse profissional é o que chamamos de <strong className="text-foreground">Arquiteto 4.0</strong>.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <blockquote className="border-l-4 border-primary pl-6 py-4 my-10 bg-primary/5 rounded-r-lg">
          <p className="text-foreground/90 text-lg md:text-xl italic font-display leading-relaxed">
            "O Arquiteto 4.0 não compete com a tecnologia.<br />
            Ele Evolui com ela ao seu lado."
          </p>
        </blockquote>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
          O Arquiteto 4.0 gera memoriais descritivos em minutos, não em horas. Apresenta renders fotorrealistas na primeira reunião, não na terceira. Mantém uma presença digital consistente sem sacrificar o tempo que deveria estar projetando. Responde leads com agilidade e profissionalismo. Precifica com inteligência, baseado em dados reais do mercado. E, acima de tudo, dedica sua energia criativa ao que realmente importa: conceber espaços que transformam a vida das pessoas.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
          A Crissair acredita nesse futuro. Há 35 anos, estamos ao lado dos arquitetos e designers que projetam os ambientes mais sofisticados do Brasil. Nossos eletrodomésticos estão presentes nas cozinhas que você cria, nos projetos que você assina, nas experiências que você proporciona aos seus clientes.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.35}>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-6">
          Em 2026, queremos ir além do produto. Queremos agregar valor real à nossa rede de arquitetos e parceiros. Estamos investindo em iniciativas que empoderam o profissional, que encurtam a distância entre uma boa ideia e um grande projeto, e que posicionam você na vanguarda do mercado.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-10">
          Este E-book é o primeiro passo dessa jornada. As ferramentas, os prompts e os métodos que você acabou de conhecer já podem ser aplicados hoje. Mas isso é apenas o começo. A Crissair está construindo um ecossistema completo de suporte ao Arquiteto 4.0 — e você faz parte dele.
        </p>
      </ScrollReveal>

      <div className="space-y-4 mb-12">
        {benefits.map((b, i) => (
          <ScrollReveal key={b} delay={0.45 + i * 0.08} direction="left">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary shrink-0" size={22} />
              <span className="text-foreground/90 text-base">{b}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Chapter07;
