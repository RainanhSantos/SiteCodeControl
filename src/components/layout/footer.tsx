import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="font-display font-bold text-lg">CodeControl</div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Transformamos negócios através de soluções inteligentes em desenvolvimento digital
            e automação industrial. Software · Automation · Systems.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-primary transition">Serviços</Link></li>
            <li><Link to="/sobre" className="hover:text-primary transition">Sobre</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm">Contato</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contato@codecontrol.com.br</li>
            <li>Suporte 24/7 com SLA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} CodeControl. Todos os direitos reservados.</span>
          <span className="tracking-[0.25em] uppercase">Software · Automation · Systems</span>
        </div>
      </div>
    </footer>
  );
}
