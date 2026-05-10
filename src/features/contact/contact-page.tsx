import { Mail, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "./contact-form";

const CONTACT_INFO = [
  { icon: Mail,        title: "E-mail",          desc: "contato@codecontrol.com.br" },
  { icon: Clock,       title: "Suporte 24/7",    desc: "Atendimento contínuo com SLA garantido" },
  { icon: ShieldCheck, title: "Confidencialidade", desc: "NDA e segurança em todos os projetos" },
];

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Vamos transformar <span className="text-gradient">seu negócio</span>?</>}
        description="Conte sobre o seu desafio. Respondemos em até 1 dia útil com um plano inicial."
        blurClassName="top-0 left-0 w-[500px] h-[500px] bg-primary/10"
        compact
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {CONTACT_INFO.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-card border border-border flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
