import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
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
          {NAV_LINKS.map((l) => (
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
