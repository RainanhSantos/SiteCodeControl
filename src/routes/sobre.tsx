import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/features/about/about-page";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — CodeControl" },
      { name: "description", content: "Conheça a CodeControl: nosso propósito, valores, stack tecnológica e modelos de contratação." },
      { property: "og:title", content: "Sobre a CodeControl" },
      { property: "og:description", content: "Parceiro estratégico em software e automação." },
    ],
  }),
  component: AboutPage,
});
