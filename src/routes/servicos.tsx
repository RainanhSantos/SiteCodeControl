import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2, Smartphone, Bot, Cpu, Home, Plug, Wrench, Palette, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — CodeControl" },
      { name: "description", content: "Desenvolvimento web e mobile, chatbots, automação industrial e residencial, integrações, suporte e consultoria UX/UI." },
      { property: "og:title", content: "Serviços — CodeControl" },
      { property: "og:description", content: "Soluções completas em software e automação." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    desc: "Sites, sistemas e plataformas web sob medida. Landing pages otimizadas para conversão até sistemas gerenciais completos com performance, segurança e escalabilidade.",
    items: ["Landing Pages e Sites", "E-commerce Completo", "Sistemas Gerenciais (ERP/CRM)", "Dashboards e Painéis", "Agendamento e Reservas", "Marketplaces e PWA"],
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    desc: "Apps de alta performance com Flutter e React Native. Da concepção ao deploy, cuidamos de todo o ciclo para Android e iOS.",
    items: ["Delivery e E-commerce", "Apps Corporativos", "Serviços e Agendamentos", "Rastreamento e Logística", "Pagamento Integrado (Pix, cartões)", "Educação e Comunicação"],
  },
  {
    icon: Bot,
    title: "Chatbots & Atendimento",
    desc: "Bots que entendem linguagem natural, qualificam leads, agendam serviços e integram com seus sistemas. Reduza custos e melhore a experiência do cliente.",
    items: ["WhatsApp Business", "Redes Sociais", "Assistentes para Sites", "Agendamento Automático", "Qualificação de Leads", "Integração com CRM"],
  },
  {
    icon: Cpu,
    title: "Automação Industrial",
    desc: "Soluções completas com CLPs, IHMs e sistemas supervisórios. Monitoramento e controle em tempo real com dashboards de produção e análise de dados.",
    items: ["Programação de CLPs (Siemens, AB, WEG)", "Sistemas Supervisórios SCADA", "IHMs e Painéis de Controle", "Linhas de Produção", "Coleta e Análise de Dados", "Dashboards de Produção"],
  },
  {
    icon: Home,
    title: "Automação Residencial e Predial",
    desc: "Residências e prédios inteligentes. Controle iluminação, climatização, segurança e acessos pelo celular ou voz. Conforto, eficiência e valorização.",
    items: ["Iluminação Inteligente", "Climatização e Conforto", "Persianas e Portões", "Assistentes de Voz (Alexa, Google)", "Gestão Energética", "Controle de Acesso"],
  },
  {
    icon: Plug,
    title: "Integrações & APIs",
    desc: "Eliminamos trabalho manual conectando seus sistemas com marketplaces, gateways, transportadoras, ERPs e plataformas de marketing.",
    items: ["APIs REST e GraphQL", "Marketplaces (ML, Amazon, Shopee)", "Gateways de Pagamento", "Transportadoras e Correios", "Email Marketing", "Webhooks e Microserviços"],
  },
  {
    icon: Wrench,
    title: "Manutenção & Suporte",
    desc: "Suporte contínuo com SLA garantido. Análise de gargalos, otimização, migração de tecnologias e documentação técnica completa.",
    items: ["Otimização de Performance", "Migração de Tecnologias", "Documentação Técnica", "Suporte com SLA", "Monitoramento Proativo", "Equipe Dedicada"],
  },
  {
    icon: Palette,
    title: "Consultoria & UX/UI Design",
    desc: "Da análise de viabilidade à prototipação interativa, garantimos que o produto atenda às necessidades reais dos usuários e do negócio.",
    items: ["Transformação Digital", "Arquitetura de Soluções", "Análise de Viabilidade", "Design UX/UI", "Prototipação Interativa", "Testes de Usabilidade"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Nossos serviços</div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-4xl">
            Soluções completas para o <span className="text-gradient">seu negócio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Do digital ao chão de fábrica — entregamos o ciclo completo, com tecnologia de ponta
            e suporte contínuo para garantir resultados reais.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all overflow-hidden"
            >
              <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground/40">0{i + 1}</div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground/85">{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-surface to-card border border-border p-12 text-center">
          <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Não encontrou exatamente o que precisa?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Conte para nós o seu desafio — desenhamos uma solução sob medida.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
          >
            Conversar com um especialista <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
