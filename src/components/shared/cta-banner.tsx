import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  description: string;
  to: "/" | "/servicos" | "/sobre" | "/contato";
  linkLabel: string;
}

export function CtaBanner({ title, description, to, linkLabel }: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-3xl bg-gradient-to-br from-surface to-card border border-border p-12 text-center">
        <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{description}</p>
        <Link
          to={to}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
        >
          {linkLabel} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
