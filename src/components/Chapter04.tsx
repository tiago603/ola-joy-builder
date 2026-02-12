import { ScrollReveal } from "./ScrollReveal";

const tools = [
  {
    num: "1",
    name: "ChatGPT",
    url: "chat.openai.com",
    desc: "Textos, documentos, cálculos — o canivete suíço da IA textual.",
    exercise: "Gere seu primeiro memorial descritivo: cole o briefing de um projeto real e peça ao ChatGPT para criar um memorial completo.",
  },
  {
    num: "2",
    name: "Claude",
    url: "claude.ai",
    desc: "Análise de PDFs, escrita longa e raciocínio estruturado.",
    exercise: "Envie uma planta em PDF e peça um resumo com pontos de atenção para o cliente.",
  },
  {
    num: "3",
    name: "Canva AI",
    url: "canva.com",
    desc: "Design e marketing visual com assistente de IA integrado.",
    exercise: "Crie 5 posts para Instagram em 15 minutos usando os templates de arquitetura.",
  },
  {
    num: "4",
    name: "Redraw",
    url: "redraw.pro",
    desc: "Renders instantâneos e melhoria de imagens arquitetônicas.",
    exercise: "Melhore um render existente: faça upload e veja a diferença em segundos.",
  },
  {
    num: "5",
    name: "Make",
    url: "make.com",
    desc: "Automação sem código — conecta seus apps favoritos.",
    exercise: "Crie sua primeira automação: formulário → planilha → e-mail de confirmação.",
  },
];

const Chapter04 = () => (
  <section
    id="cap04"
    className="py-20 md:py-28"
    style={{ background: "linear-gradient(180deg, hsl(0 0% 10%) 0%, hsl(0 0% 14%) 100%)" }}
  >
    <div className="max-w-3xl mx-auto px-6 relative">
      <span className="chapter-number text-secondary-foreground/10">04</span>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary-foreground mb-14 relative z-10">
          5 ferramentas gratuitas para começar hoje
        </h2>
      </ScrollReveal>

      <div className="space-y-6">
        {tools.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="rounded-xl border border-primary/20 bg-secondary/60 p-6 relative overflow-hidden">
              <span className="absolute -top-2 -left-1 font-display font-extrabold text-7xl text-primary/10">
                {t.num}
              </span>
              <div className="relative z-10">
                <h3 className="font-display font-bold text-xl text-secondary-foreground mb-1">{t.name}</h3>
                <p className="text-primary text-sm mb-3">{t.url}</p>
                <p className="text-secondary-foreground/70 text-sm mb-4">{t.desc}</p>
                <div className="rounded-lg p-4 border-l-4 border-primary" style={{ background: "hsl(0 0% 18%)" }}>
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                    Exercício do primeiro dia
                  </p>
                  <p className="text-secondary-foreground/80 text-sm">{t.exercise}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Chapter04;
