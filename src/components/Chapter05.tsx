import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Copy, Check } from "lucide-react";
import chapter05Cover from "@/assets/chapter05-cover.jpg";

const prompts = [
  {
    title: "Memorial Descritivo",
    text: `Atue como um arquiteto sênior especializado em projetos de alto padrão. Crie um memorial descritivo completo para uma cozinha gourmet de [X]m², estilo [contemporâneo / clássico / minimalista], incluindo: revestimentos (piso e parede), bancadas, iluminação, marcenaria planejada e eletrodomésticos embutidos da marca Crissair. Inclua especificações técnicas, acabamentos e justificativas para cada escolha. O tom deve ser profissional e detalhado, pronto para enviar ao cliente.`,
  },
  {
    title: "Conteúdo para Instagram (30 dias)",
    text: `Você é um especialista em marketing digital para escritórios de arquitetura de alto padrão. Crie um calendário de conteúdo para 30 dias de Instagram com: tipo de post (carrossel, reels, stories, estático), tema, legenda completa com hashtags e call-to-action. O escritório atende clientes classe A e B que buscam cozinhas gourmet sofisticadas. O tom deve ser elegante, inspirador e profissional. Inclua 4 posts que mencionem naturalmente a parceria com eletrodomésticos Crissair.`,
  },
  {
    title: "Orçamento Preliminar",
    text: `Com base em valores médios do mercado brasileiro de alto padrão em 2026, estime o custo de uma reforma completa de cozinha de [X]m² incluindo: demolição, revestimentos, marcenaria planejada, iluminação, hidráulica, elétrica, mão de obra e eletrodomésticos premium Crissair. Apresente em tabela com item, valor unitário, quantidade e total.`,
  },
];

const PromptBlock = ({ title, text }: { title: string; text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="prompt-box">
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary font-semibold text-sm not-italic font-sans">{title}</span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/80 transition-colors not-italic font-sans"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  );
};

const Chapter05 = () => (
  <section id="cap05" className="section-light py-20 md:py-28">
    <div className="max-w-3xl mx-auto px-6">
      <span className="chapter-number">05</span>
      <ScrollReveal>
        <img src={chapter05Cover} alt="Arquiteto usando prompts de IA" className="w-full rounded-xl mb-10 shadow-lg" />
      </ScrollReveal>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-14 relative z-10">
          3 prompts prontos para copiar e colar
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {prompts.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.15}>
            <PromptBlock title={p.title} text={p.text} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-10 rounded-xl border-2 border-primary/40 p-5 text-center">
          <p className="text-foreground/80 text-sm">
            💡 <strong>Dica:</strong> Quanto mais contexto você der no prompt, melhor o resultado. Inclua: metragem, estilo, orçamento, preferências e restrições.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Chapter05;
