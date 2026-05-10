import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Clock, ShieldCheck, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — CodeControl" },
      { name: "description", content: "Fale com a CodeControl. Conte seu desafio e descubra como a tecnologia pode impulsionar seus resultados." },
      { property: "og:title", content: "Contato — CodeControl" },
      { property: "og:description", content: "Vamos transformar seu negócio." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Contato</div>
          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-3xl">
            Vamos transformar <span className="text-gradient">seu negócio</span>?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Conte sobre o seu desafio. Respondemos em até 1 dia útil com um plano inicial.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-5">
          {[
            { icon: Mail, title: "E-mail", desc: "contato@codecontrol.com.br" },
            { icon: Clock, title: "Suporte 24/7", desc: "Atendimento contínuo com SLA garantido" },
            { icon: ShieldCheck, title: "Confidencialidade", desc: "NDA e segurança em todos os projetos" },
          ].map((c) => (
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-card space-y-5"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-glow mb-5">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Em breve nossa equipe entrará em contato.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nome" name="name" required />
                  <Field label="Empresa" name="company" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="Telefone" name="phone" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de projeto</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition">
                    <option>Desenvolvimento Web</option>
                    <option>Desenvolvimento Mobile</option>
                    <option>Automação Industrial</option>
                    <option>Automação Residencial</option>
                    <option>Chatbots & Atendimento</option>
                    <option>Integrações & APIs</option>
                    <option>Consultoria UX/UI</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Conte sobre seu desafio</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
                >
                  Enviar mensagem <Send className="w-4 h-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition"
      />
    </div>
  );
}
