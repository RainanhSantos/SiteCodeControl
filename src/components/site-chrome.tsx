import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";

export function SiteHeader() {
  const links = [
    { to: "/", label: "Início" },
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-60 group-hover:opacity-100 transition" />
            <div className="relative w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-tight">CodeControl</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Software · Automation</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-primary rounded-md" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contato"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold hover:shadow-glow transition-all"
        >
          Fale conosco
        </Link>
      </div>
    </header>
  );
}

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
