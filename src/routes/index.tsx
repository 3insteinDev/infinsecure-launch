import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import {
  Hero,
  About,
  Services,
  Products,
  Diferenciais,
  Processo,
  CTA,
  Contato,
  Footer,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinya Tecnologia — Soluções Inteligentes e Desenvolvimento Sob Medida" },
      {
        name: "description",
        content:
          "Infinya Tecnologia: desenvolvimento de software sob medida, ERPs, dashboards, automações e gestão de TI para empresas que crescem com inovação.",
      },
      { property: "og:title", content: "Infinya Tecnologia — Soluções Inteligentes" },
      {
        property: "og:description",
        content:
          "Desenvolvimento sob medida, gestão de TI, dashboards e integrações para impulsionar seu negócio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Infinya Tecnologia",
          slogan: "Soluções Inteligentes, Desenvolvimento Sob Medida.",
          telephone: "+55-19-99693-9172",
          url: "/",
        }),
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Products />
      <Diferenciais />
      <Processo />
      <CTA />
      <Contato />
      <Footer />
    </main>
  );
}
