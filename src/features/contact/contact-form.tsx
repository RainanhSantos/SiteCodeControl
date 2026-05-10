import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}

function Field({ label, name, type = "text", required = false }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:outline-none transition"
      />
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
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
  );
}
