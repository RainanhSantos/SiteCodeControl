import { Sparkles, Users, Target } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { CtaBanner } from "@/components/shared/cta-banner";

const VALUES = [
  {
    icon: Sparkles,
    title: "Inovação",
    desc: "Aplicamos as tecnologias mais recentes para criar soluções que antecipam necessidades e geram vantagem competitiva.",
  },
  {
    icon: Users,
    title: "Parceria",
    desc: "Trabalhamos lado a lado com cada cliente, entendendo seu negócio a fundo para entregar resultados sob medida.",
  },
  {
    icon: Target,
    title: "Resultados",
    desc: "Cada projeto é desenhado com foco em ROI, eficiência operacional e crescimento sustentável.",
  },
];

const TECH_STACK = [
  { area: "Web",            techs: ["React", "Next.js", "Node.js", "Vue.js", "Angular"] },
  { area: "Mobile",         techs: ["Flutter", "React Native", "Swift", "Kotlin"] },
  { area: "Automação",      techs: ["Siemens TIA Portal", "Allen-Bradley", "SCADA", "CODESYS"] },
  { area: "Cloud",          techs: ["AWS", "Azure", "Google Cloud", "Docker", "Firebase"] },
  { area: "Bancos de Dados", techs: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
];

const HIRING_MODELS = [
  { n: "01", title: "Projetos sob medida",  desc: "Escopo definido com entrega e prazo acordados. Ideal para demandas específicas e pontuais." },
  { n: "02", title: "Consultoria por hora", desc: "Flexibilidade total para demandas variáveis. Pague apenas pelas horas utilizadas." },
  { n: "03", title: "Manutenção mensal",    desc: "Suporte contínuo com melhorias regulares e SLA garantido para seus sistemas." },
  { n: "04", title: "Squads dedicados",     desc: "Equipe alocada exclusivamente ao seu projeto, integrada ao seu time." },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={<>Tecnologia como <span className="text-gradient">parceiro estratégico</span> do seu negócio</>}
        description="A CodeControl conecta desenvolvimento digital, automação industrial e inovação para gerar impacto real — entregando o ciclo completo, do planejamento ao suporte 24/7."
        blurClassName="top-0 right-0 w-[500px] h-[500px] bg-accent/10"
      />

      {/* Valores */}
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-3 gap-6">
        {VALUES.map((v) => (
          <div key={v.title} className="p-8 rounded-2xl bg-card border border-border shadow-card">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
              <v.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* Stack */}
      <section className="border-y border-border/50 bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4">Tecnologias</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Stack moderna e <span className="text-gradient-accent">robusta</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECH_STACK.map((g) => (
              <div key={g.area} className="p-7 rounded-2xl bg-card border border-border">
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">{g.area}</div>
                <div className="flex flex-wrap gap-2">
                  {g.techs.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Modelos de contratação</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Flexibilidade para cada necessidade
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIRING_MODELS.map((m) => (
            <div key={m.n} className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all relative overflow-hidden">
              <div className="font-display text-5xl font-bold text-gradient mb-4">{m.n}</div>
              <h3 className="font-display text-lg font-semibold mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Pronto para começar?"
        description="Vamos entender seu desafio e desenhar a melhor solução para o seu negócio."
        to="/contato"
        linkLabel="Falar com a CodeControl"
      />
    </>
  );
}
