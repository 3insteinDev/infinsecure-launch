import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/infinya-logo.asset.json";
import mark from "@/assets/infinya-mark.asset.json";

const WHATSAPP = "https://wa.me/5519996939172";
const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-transparent"
          }`}
        >
          <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
            <img src={mark.url} alt="Infinya" className="h-8 w-8 rounded-md" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Infinya<span className="text-[#1D8FFF]">.</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex group items-center gap-2 rounded-xl bg-gradient-to-br from-[#1D8FFF] to-[#3aa0ff] px-4 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(29,143,255,0.7)] hover:shadow-[0_12px_32px_-8px_rgba(29,143,255,0.9)] hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="size-4" />
              Solicitar Orçamento
            </a>
            <button
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg glass"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass rounded-2xl p-3"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D8FFF] px-4 py-2.5 text-sm font-medium text-white"
              >
                <MessageCircle className="size-4" /> Solicitar Orçamento
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

export { WHATSAPP };
