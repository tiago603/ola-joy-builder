import { ScrollReveal } from "./ScrollReveal";
import chapter06Img from "@/assets/chapter06-illustration.png";

const rows = [
  { tarefa: "Memorial descritivo", antes: "3-5 horas", depois: "5-10 min", impacto: "-90% tempo" },
  { tarefa: "Render realista", antes: "4-8 horas", depois: "30s-2min", impacto: "Cliente visualiza na 1ª reunião" },
  { tarefa: "30 posts Instagram", antes: "2-3 dias", depois: "1-2 horas", impacto: "Consistência digital" },
  { tarefa: "Orçamento preliminar", antes: "2-3 horas", depois: "10-15 min", impacto: "Resposta rápida ao lead" },
  { tarefa: "E-mail follow-up", antes: "30-45 min", depois: "2-3 min", impacto: "Profissionalismo instantâneo" },
  { tarefa: "Pesquisa referências", antes: "2-4 horas", depois: "10-20 min", impacto: "Organização automática" },
];

const Chapter06 = () => (
  <section
    id="cap06"
    className="py-20 md:py-28"
    style={{ background: "linear-gradient(180deg, hsl(0 0% 10%) 0%, hsl(0 0% 14%) 100%)" }}
  >
    <div className="max-w-5xl mx-auto px-6 relative">
      <span className="chapter-number text-secondary-foreground/10">06</span>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-secondary-foreground mb-14 relative z-10">
          Antes e depois com IA
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <img src={chapter06Img} alt="Antes e depois com IA" className="w-full max-w-lg mx-auto mb-12 rounded-xl opacity-80" />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="overflow-x-auto rounded-xl border border-primary/20">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "hsl(0 0% 18%)" }}>
                <th className="text-left py-3 px-4 font-semibold text-secondary-foreground">Tarefa</th>
                <th className="text-center py-3 px-4 font-semibold text-secondary-foreground/60">Antes (manual)</th>
                <th className="text-center py-3 px-4 font-semibold text-primary">Depois (com IA)</th>
                <th className="text-left py-3 px-4 font-semibold text-secondary-foreground hidden md:table-cell">Impacto</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-primary/10" style={{ background: i % 2 === 0 ? "hsl(0 0% 12%)" : "hsl(0 0% 10%)" }}>
                  <td className="py-3 px-4 text-secondary-foreground font-medium">{r.tarefa}</td>
                  <td className="py-3 px-4 text-center text-secondary-foreground/50">{r.antes}</td>
                  <td className="py-3 px-4 text-center text-primary font-bold">{r.depois}</td>
                  <td className="py-3 px-4 text-secondary-foreground/70 hidden md:table-cell">{r.impacto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <p className="text-center text-primary font-display font-bold text-xl md:text-2xl mt-12">
          Um escritório de 5 pessoas pode economizar até 18 horas por semana.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Chapter06;
