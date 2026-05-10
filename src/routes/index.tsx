import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Code2, Cpu, Home, Bot, Plug, Wrench, Palette, Smartphone,
  Sparkles, Users, Target, ShieldCheck, TrendingDown, Zap, Maximize2, BarChart3,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeControl — Software, Automação e Sistemas" },
      { name: "description", content: "Desenvolvimento web e mobile, automação industrial e residencial, integrações e suporte 24/7. Parceiro estratégico em tecnologia." },
      { property: "og:title", content: "CodeControl — Software & Automation" },
      { property: "og:description", content: "Soluções completas para impulsionar o seu negócio." },
    ],
  }),
  component: Home_,
});

const services = [
  { icon: Code2, title: "Desenvolvimento Web", desc: "Sites, sistemas e plataformas sob medida." },
  { icon: Smartphone, title: "Desenvolvimento Mobile", desc: "Apps nativos e híbridos para Android e iOS." },
  { icon: Bot, title: "Chatbots & Atendimento", desc: "Assistentes virtuais inteligentes 24/7." },
  { icon: Cpu, title: "Automação Industrial", desc: "CLPs, IHMs, SCADA e linhas de produção." },
  { icon: Home, title: "Automação Residencial", desc: "Ambientes inteligentes integrados." },
  { icon: Plug, title: "Integrações & APIs", desc: "Conectamos seus sistemas e plataformas." },
  { icon: Wrench, title: "Manutenção & Suporte", desc: "SLA garantido e equipe dedicada." },
  { icon: Palette, title: "Consultoria UX/UI", desc: "Design centrado no usuário." },
];

const values = [
  { icon: Sparkles, title: "Inovação", desc: "Tecnologias mais recentes para gerar vantagem competitiva real." },
  { icon: Users, title: "Parceria", desc: "Trabalhamos lado a lado com cada cliente, com soluções sob medida." },
  { icon: Target, title: "Resultados", desc: "Cada projeto desenhado com foco em ROI e crescimento sustentável." },
];

const differentials = [
  { title: "Soluções de Ponta a Ponta", desc: "Do planejamento ao suporte contínuo — sem múltiplos fornecedores." },
  { title: "Digital + Industrial", desc: "Expertise em software unida à automação do chão de fábrica." },
  { title: "Stack Moderna", desc: "React, Flutter, Node.js, Siemens TIA Portal, AWS — o melhor de cada segmento." },
  { title: "Segurança & Escalabilidade", desc: "Arquiteturas pensadas para crescer, com segurança desde o dia um." },
  { title: "Suporte 24/7", desc: "Contratos de manutenção com SLA garantido e monitoramento proativo." },
  { title: "Foco em ROI", desc: "Soluções que geram retorno mensurável — custos, produtividade, receita." },
];

const valueDelivered = [
  { icon: TrendingDown, title: "Redução de Custos", desc: "Automatizamos processos manuais e repetitivos, reduzindo erros e custos operacionais." },
  { icon: Zap, title: "Aumento de Produtividade", desc: "Sistemas integrados que eliminam retrabalho e liberam sua equipe para o que importa." },
  { icon: Maximize2, title: "Escalabilidade Total", desc: "Soluções que crescem com seu negócio sem precisar reconstruir do zero." },
  { icon: BarChart3, title: "Decisões por Dados", desc: "Dashboards em tempo real que transformam dados em insights acionáveis." },
];

function Home_() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 lg:pt-32 lg:pb-40 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
              Software · Automation · Systems
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Transformamos negócios com{" "}
              <span className="text-gradient">tecnologia inteligente</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Desenvolvimento digital, automação industrial e residencial, integrações e
              consultoria — entregamos o ciclo completo, do planejamento ao suporte 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
              >
                Comece seu projeto
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-border bg-card/50 backdrop-blur font-semibold hover:bg-card hover:border-primary/40 transition-all"
              >
                Ver serviços
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl">
              {[
                ["24/7", "Suporte SLA"],
                ["8+", "Áreas de atuação"],
                ["End-to-end", "Digital + Industrial"],
                ["ROI", "Foco em resultado"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-gradient">{n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROPÓSITO + VALORES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Nosso propósito</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Impulsionar o crescimento dos nossos clientes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que a tecnologia é o maior acelerador de resultados para empresas
              de todos os portes. A CodeControl é o parceiro estratégico que transforma
              desafios em soluções inteligentes — conectando desenvolvimento digital,
              automação e inovação para gerar impacto real.
            </p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative py-24 border-y border-border/50 bg-surface/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4">Por que nos escolher</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Diferenciais que <span className="text-gradient-accent">fazem a diferença</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentials.map((d, i) => (
              <div key={d.title} className="group p-7 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all relative overflow-hidden">
                <div className="font-mono text-xs text-accent/60 mb-3">0{i + 1}</div>
                <h3 className="font-display text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <div className="absolute -bottom-px left-0 h-px w-0 bg-gradient-accent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALOR ENTREGUE */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">O valor que entregamos</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
            Resultados concretos para o seu negócio
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueDelivered.map((v) => (
            <div key={v.title} className="p-7 rounded-2xl bg-gradient-to-br from-card to-surface border border-border shadow-card">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Nossos serviços</div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Soluções completas para o seu negócio
            </h2>
          </div>
          <Link to="/servicos" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Ver todos os serviços <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all">
                <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold mb-1.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface to-card border border-primary/30 p-12 lg:p-20 shadow-elevated">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="relative max-w-3xl">
            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
            <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Vamos transformar <span className="text-gradient">seu negócio</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Entre em contato e descubra como a tecnologia pode impulsionar seus resultados.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
            >
              Falar com um especialista
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
