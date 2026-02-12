import { ScrollReveal } from "./ScrollReveal";

const rows = [
  { dor: "Sobrecarga administrativa", nota: 5, ferramentas: "ChatGPT, Claude, Make", solucao: "Gera documentos profissionais em segundos" },
  { dor: "Apresentação ao cliente", nota: 5, ferramentas: "Midjourney, Redraw, LookX", solucao: "Transforma croquis em renders instantâneos" },
  { dor: "Marketing e conteúdo", nota: 5, ferramentas: "ChatGPT, Canva AI", solucao: "Cria textos, legendas e layouts para redes sociais" },
  { dor: "Tempo em renders", nota: 5, ferramentas: "Redraw, Lumion AI, Interior AI", solucao: "De horas para segundos em visualizações" },
  { dor: "Medo de ficar para trás", nota: 5, ferramentas: "Workshops como este!", solucao: "Educação resolve diretamente" },
  { dor: "Excesso de retrabalho", nota: 4, ferramentas: "Midjourney, Finch3D", solucao: "Visualizações rápidas alinham expectativas" },
  { dor: "Gestão financeira", nota: 4, ferramentas: "ChatGPT, Claude, FlowUp", solucao: "Calcula horas e propõe preços" },
  { dor: "Pesquisa de referências", nota: 4, ferramentas: "Pinterest Lens, Midjourney", solucao: "Busca e organiza referências por estilo" },
  { dor: "Captação de clientes", nota: 4, ferramentas: "ChatGPT, Meta AI", solucao: "Cria funis e campanhas segmentadas" },
  { dor: "Gestão de projetos", nota: 3, ferramentas: "Notion AI, Monday", solucao: "Auxilia na priorização e organização" },
  { dor: "Especificação técnica", nota: 3, ferramentas: "ChatGPT, Claude", solucao: "Consulta normas e gera documentação" },
  { dor: "Comunicação com obra", nota: 2, ferramentas: "BIM + Make", solucao: "Checklists e relatórios automatizados" },
];

const Chapter03 = () => (
  <section id="cap03" className="section-light py-20 md:py-28">
    <div className="max-w-5xl mx-auto px-6 relative">
      <span className="chapter-number">03</span>
      <ScrollReveal>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10 relative z-10">
          As 12 dores do arquiteto e como a IA resolve
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left py-3 px-4 font-semibold">Dor do Arquiteto</th>
                <th className="text-center py-3 px-4 font-semibold">Nota</th>
                <th className="text-left py-3 px-4 font-semibold hidden md:table-cell">Ferramentas</th>
                <th className="text-left py-3 px-4 font-semibold">O que a IA faz</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`${i % 2 === 0 ? "bg-card" : "bg-background"} border-b border-border/50`}>
                  <td className="py-3 px-4 text-foreground font-medium">{r.dor}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {r.nota}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">{r.ferramentas}</td>
                  <td className="py-3 px-4 text-foreground/80">{r.solucao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-8 text-center">
          <span className="label-badge">↑ As dores com nota 5 serão prioridade no Workshop presencial da Crissair</span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Chapter03;
