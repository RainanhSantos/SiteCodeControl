import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  blurClassName?: string;
  compact?: boolean;
}

export function PageHero({ eyebrow, title, description, blurClassName, compact }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {blurClassName && (
        <div className={cn("absolute rounded-full blur-3xl", blurClassName)} />
      )}
      <div className={cn("relative mx-auto max-w-7xl px-6 py-24", compact ? "lg:py-28" : "lg:py-32")}>
        <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
          {eyebrow}
        </div>
        <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-4xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
