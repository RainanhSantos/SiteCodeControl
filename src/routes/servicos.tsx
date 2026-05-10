import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/features/services/services-page";

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
