import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/features/contact/contact-page";

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
