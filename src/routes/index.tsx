import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/home/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeControl — Software, Automação e Sistemas" },
      { name: "description", content: "Desenvolvimento web e mobile, automação industrial e residencial, integrações e suporte 24/7. Parceiro estratégico em tecnologia." },
      { property: "og:title", content: "CodeControl — Software & Automation" },
      { property: "og:description", content: "Soluções completas para impulsionar o seu negócio." },
    ],
  }),
  component: HomePage,
});
