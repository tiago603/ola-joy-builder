import { ScrollReveal } from "./ScrollReveal";
import { FileText, Image, Zap } from "lucide-react";
import chapter02Img from "@/assets/chapter02-illustration.png";

const cards = [
  {
    icon: FileText,
    title: "IA Textual",
    subtitle: "Modelos de Linguagem",
    tools: "ChatGPT • Claude",
    items: ["Memoriais descritivos", "Cronogramas", "E-mails", "Normas ABNT", "Orçamentos", "Paletas de materiais"],
    example: "Você digita um briefing de cozinha gourmet 25m² e recebe um memorial descritivo profissional em 60 segundos.",
  },
  {
    icon: Image,
    title: "IA Visual",
    subtitle: "Geração de Imagens",
    tools: "Midjourney • Redraw • DALL-E • LookX",
    items: ["Transforma croquis e descrições em renders realistas", "Melhora renders existentes"],
    example: "Você fotografa um croqui à mão e recebe um render fotorrealista em 30 segundos.",
  },
  {
    icon: Zap,
    title: "IA de Automação",
    subtitle: "Workflows Inteligentes",
    tools: "Make • n8n • Zapier",
    items: ["Conecta apps e automatiza tarefas repetitivas sem código"],
    example: "Um lead entra pelo Instagram e automaticamente recebe boas-vindas, questionário e você recebe o resumo no WhatsApp.",
  },
];

const Chapter02 = () => (
  <section
    id="cap02"
    className="py-20 md:py-28"
    style={{ background: "linear-gradient(180deg, hsl(0 0% 10%) 0%, hsl(0 0% 14%) 100%)" }}
  >
    <div className="max-w-6xl mx-auto px-6 relative overflow-hidden">
      <img src={chapter02Img} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-lg opacity-[0.06] pointer-events-none select-none" />
      <span className="chapter-number text-secondary-foreground/10">02</span>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary-foreground mb-14 relative z-10">
          O que é IA na prática para o arquiteto?
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={i * 0.15} direction="scale">
            <div className="rounded-xl border border-primary/20 bg-secondary/80 p-6 h-full flex flex-col">
              <card.icon className="text-primary mb-4" size={32} />
              <h3 className="font-display font-bold text-xl text-primary mb-1">{card.title}</h3>
              <p className="text-secondary-foreground/60 text-sm mb-2">{card.subtitle}</p>
              <p className="text-primary/80 text-xs font-semibold tracking-wide mb-4">{card.tools}</p>

              <ul className="space-y-1.5 mb-6 flex-1">
                {card.items.map((item) => (
                  <li key={item} className="text-secondary-foreground/80 text-sm flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-lg p-4 text-sm text-secondary-foreground/70 italic" style={{ background: "hsl(0 0% 18%)" }}>
                {card.example}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Chapter02;
