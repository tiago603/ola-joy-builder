import { ScrollReveal } from "./ScrollReveal";
import chapter01Cover from "@/assets/chapter01-cover.jpg";

const Chapter01 = () => (
  <section id="cap01" className="section-light py-20 md:py-28">
    <div className="max-w-3xl mx-auto px-6 relative">
      <span className="chapter-number">01</span>
      <ScrollReveal>
        <img src={chapter01Cover} alt="Arquiteto com tablet mostrando projeto" className="w-full rounded-xl mb-10 shadow-lg" />
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10 relative z-10">
          Por que a IA importa para você, arquiteto?
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
          Se você é como a maioria dos arquitetos brasileiros, provavelmente é ao mesmo tempo projetista, vendedor, gestor financeiro, produtor de conteúdo, coordenador de obra e atendente de SAC. O Brasil possui mais de 212 mil arquitetos registrados, e 55% deles atuam como autônomos. Isso significa que a sobrecarga não é exceção — é regra.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
          Em 2026, a construção civil brasileira entrou em um novo ciclo de exigência. O custo médio da construção chegou a R$ 1.872 por metro quadrado. Produtividade, previsibilidade e controle deixaram de ser diferenciais competitivos para se tornar requisitos básicos de sobrevivência no mercado.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
          A boa notícia? A inteligência artificial já oferece ferramentas acessíveis — muitas delas gratuitas — que podem ser incorporadas ao seu fluxo de trabalho hoje mesmo. Sem programação. Sem hardware especial. Sem mudar completamente a forma como você trabalha.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <blockquote className="quote-block text-foreground/80">
          "A IA não veio substituir o arquiteto. Ela veio dar superpoderes para que você faça mais, melhor e em menos tempo."
        </blockquote>
      </ScrollReveal>
    </div>
  </section>
);

export default Chapter01;
