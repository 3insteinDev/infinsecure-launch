import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, Sparkles, Check, Headphones, Wrench, Cpu, ShieldCheck,
  Bot, Boxes, Briefcase, Package, Globe, LayoutDashboard, Layers, Plug, Compass,
  Truck, Smartphone, MonitorSmartphone, Database, Gauge, Lock, Code2, Rocket,
  Phone, Mail, Send, Linkedin, Instagram, Github, Building2,
} from "lucide-react";
import { HeroArt } from "./HeroArt";
import { WHATSAPP } from "./Nav";
import mark from "@/assets/infinya-mark.asset.json";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const },
};

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center mb-14">
      <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
        <Sparkles className="size-3 text-[#1D8FFF]" /> {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gradient">
        {title}
      </h2>
      {desc && <p className="mt-4 text-muted-foreground leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid -z-10" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-[#1D8FFF] animate-pulse" />
            Tecnologia sob medida para empresas modernas
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.05] font-semibold tracking-tight"
          >
            Soluções inteligentes para{" "}
            <span className="text-gradient">impulsionar seu negócio.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Entregamos soluções tecnológicas inteligentes combinando gestão de TI e
            desenvolvimento sob medida. Impulsionamos empresas através de tecnologia
            personalizada, inovação e resultados duradouros.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#1D8FFF] to-[#3aa0ff] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(29,143,255,0.8)] hover:shadow-[0_16px_40px_-10px_rgba(29,143,255,1)] hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="size-4" />
              Falar no WhatsApp
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Conhecer Serviços
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
          >
            {["99.99% uptime", "Suporte dedicado", "Arquitetura escalável", "LGPD compliant"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <Check className="size-3.5 text-[#1D8FFF]" /> {t}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HeroArt />
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  const items = [
    { icon: Headphones, t: "Atendimento personalizado", d: "Cada cliente é único e tratado com prioridade." },
    { icon: Wrench, t: "Desenvolvimento sob medida", d: "Sistemas construídos para o seu negócio." },
    { icon: Cpu, t: "Tecnologia moderna", d: "Stacks atuais, performáticas e escaláveis." },
    { icon: ShieldCheck, t: "Suporte especializado", d: "Equipe pronta para garantir continuidade." },
  ];
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <Building2 className="size-3 text-[#1D8FFF]" /> Quem somos
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gradient">
              Tecnologia que simplifica e acelera.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <span className="text-foreground">Infinya Tecnologia</span> nasceu com o propósito
                de desenvolver soluções inteligentes que simplificam processos, aumentam
                produtividade e impulsionam resultados.
              </p>
              <p>
                Atuamos tanto no desenvolvimento de software sob medida quanto na gestão de
                infraestrutura de TI, oferecendo soluções completas para empresas que desejam
                crescer através da tecnologia.
              </p>
              <p>
                Nosso compromisso é criar sistemas robustos, intuitivos e escaláveis, sempre
                focados na necessidade de cada cliente.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.t}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="card-hover glass rounded-2xl p-5"
                >
                  <div className="grid place-items-center size-10 rounded-xl bg-[#1D8FFF]/15 mb-4">
                    <Icon className="size-5 text-[#1D8FFF]" />
                  </div>
                  <h3 className="font-display font-semibold">{it.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { i: Bot, t: "Autoatendimento", d: "Totens e kiosks para acelerar o atendimento." },
  { i: Boxes, t: "Automação de Processos", d: "Reduza tarefas manuais com fluxos automatizados." },
  { i: Briefcase, t: "Sistemas de Gestão", d: "ERPs sob medida para a sua operação." },
  { i: Package, t: "Gerenciamento de Estoque", d: "Controle preciso, multi-depósito em tempo real." },
  { i: Globe, t: "Sites Institucionais", d: "Presença digital premium e otimizada para SEO." },
  { i: Layers, t: "Aplicações Web", d: "Plataformas escaláveis com UX moderna." },
  { i: LayoutDashboard, t: "Dashboards Gerenciais", d: "Decisões guiadas por dados em tempo real." },
  { i: Truck, t: "Sistema Delivery", d: "Pedidos, rotas e entregas integrados." },
  { i: Plug, t: "Integrações entre Sistemas", d: "APIs, webhooks e ETL para conectar tudo." },
  { i: Compass, t: "Consultoria em TI", d: "Estratégia tecnológica para o seu próximo passo." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Serviços"
          title="Tudo o que sua empresa precisa em um só parceiro."
          desc="Do diagnóstico à operação, entregamos serviços completos com excelência técnica."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.i;
            return (
              <motion.div
                key={s.t}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 6) * 0.05 }}
                className="card-hover group relative glass rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-[#1D8FFF]/0 group-hover:bg-[#1D8FFF]/20 blur-3xl transition-all duration-500" />
                <div className="grid place-items-center size-11 rounded-xl bg-gradient-to-br from-[#1D8FFF]/25 to-[#1D8FFF]/5 border border-[#1D8FFF]/20 mb-5">
                  <Icon className="size-5 text-[#1D8FFF]" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#1D8FFF] opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais <ArrowRight className="size-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductMockup({ kind }: { kind: string }) {
  // small abstract dashboards per product
  return (
    <div className="relative h-40 rounded-xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#0a1942] to-[#020E32]">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-[#1D8FFF]/60" />
        <span className="ml-2 text-[10px] text-muted-foreground">{kind}</span>
      </div>
      <div className="absolute inset-x-4 top-9 bottom-4 grid grid-cols-5 gap-2">
        <div className="col-span-1 rounded-md bg-white/5 border border-white/5" />
        <div className="col-span-4 flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2 h-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-md bg-white/5 border border-white/5 p-1.5">
                <div className="h-1.5 w-8 rounded bg-white/15" />
                <div className="mt-1 h-2 w-12 rounded bg-[#1D8FFF]/60" />
              </div>
            ))}
          </div>
          <div className="relative flex-1 rounded-md bg-white/5 border border-white/5 overflow-hidden">
            <svg viewBox="0 0 200 60" className="w-full h-full">
              <path d="M0,40 C30,25 50,45 80,30 C110,15 130,35 160,20 C180,12 195,28 200,18"
                fill="none" stroke="#1D8FFF" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const products = [
  { i: Briefcase, t: "Sistema ERP", d: "Gestão financeira, fiscal e operacional unificada." },
  { i: LayoutDashboard, t: "Painel Dashboard", d: "KPIs e insights estratégicos em tempo real." },
  { i: Truck, t: "Sistema Delivery", d: "Pedidos online, rotas e cozinha integrados." },
  { i: Globe, t: "Portal Web", d: "Áreas do cliente, B2B e self-service." },
  { i: Package, t: "Sistema de Estoque", d: "Multi-depósito, código de barras e relatórios." },
  { i: Briefcase, t: "Sistema Comercial", d: "Pré-venda, CRM e propostas centralizadas." },
  { i: Smartphone, t: "Aplicativo Empresarial", d: "Apps mobile com sincronização offline." },
  { i: MonitorSmartphone, t: "Sistema de Autoatendimento", d: "Kiosks rápidos para alto volume." },
];

export function Products() {
  return (
    <section id="produtos" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Produtos"
          title="Soluções prontas para escalar seu negócio."
          desc="Plataformas modulares prontas para personalização e integração."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p, i) => {
            const Icon = p.i;
            return (
              <motion.div
                key={p.t}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }}
                className="card-hover glass rounded-2xl p-4"
              >
                <ProductMockup kind={p.t.toLowerCase()} />
                <div className="mt-4 flex items-center gap-2">
                  <div className="grid place-items-center size-8 rounded-lg bg-[#1D8FFF]/15">
                    <Icon className="size-4 text-[#1D8FFF]" />
                  </div>
                  <h3 className="font-display font-semibold">{p.t}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const diffs = [
  { i: Wrench, t: "Desenvolvimento Sob Medida" },
  { i: Layers, t: "Arquitetura Escalável" },
  { i: Plug, t: "Integrações via API" },
  { i: Gauge, t: "Alta Performance" },
  { i: Sparkles, t: "UX Moderna" },
  { i: Lock, t: "Segurança" },
  { i: Headphones, t: "Suporte Contínuo" },
  { i: Code2, t: "Tecnologias Atualizadas" },
];

export function Diferenciais() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Diferenciais" title="Por que escolher a Infinya." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {diffs.map((d, i) => {
            const Icon = d.i;
            return (
              <motion.div
                key={d.t}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.06 }}
                className="card-hover glass rounded-2xl p-5 flex items-center gap-3"
              >
                <div className="grid place-items-center size-10 rounded-lg bg-gradient-to-br from-[#1D8FFF]/30 to-transparent border border-[#1D8FFF]/20">
                  <Icon className="size-5 text-[#1D8FFF]" />
                </div>
                <span className="font-medium">{d.t}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Diagnóstico", d: "Entendemos o seu negócio, dores e oportunidades." },
  { n: "02", t: "Planejamento", d: "Arquitetura, escopo e roadmap claros." },
  { n: "03", t: "Desenvolvimento", d: "Sprints ágeis com entregas contínuas." },
  { n: "04", t: "Implantação", d: "Deploy, integrações e treinamento." },
  { n: "05", t: "Suporte", d: "Evolução contínua e SLA dedicado." },
];

export function Processo() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Processo"
          title="Do diagnóstico à evolução contínua."
          desc="Um método claro, transparente e orientado a resultados."
        />
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1D8FFF]/40 to-transparent" />
          <div className="grid lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative glass rounded-2xl p-5 card-hover"
              >
                <div className="size-10 rounded-full bg-gradient-to-br from-[#1D8FFF] to-[#3aa0ff] grid place-items-center font-display text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(29,143,255,0.8)]">
                  {s.n}
                </div>
                <h3 className="mt-4 font-display font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-16 text-center"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(29,143,255,0.35), transparent 60%), linear-gradient(135deg, #020E32, #061a52)",
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[420px] rounded-full bg-[#1D8FFF]/40 blur-[120px]" />
          <Rocket className="mx-auto size-8 text-[#1D8FFF] relative" />
          <h2 className="relative mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gradient">
            Vamos construir a solução ideal para sua empresa.
          </h2>
          <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto">
            Fale com nossos especialistas e descubra como a Infinya pode acelerar seu próximo passo.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#1D8FFF] to-[#3aa0ff] px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_40px_-10px_rgba(29,143,255,0.9)] hover:-translate-y-0.5 transition-all"
          >
            <MessageCircle className="size-4" /> Falar no WhatsApp
            <ArrowRight className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Contato() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <motion.div {...fadeUp}>
          <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <MessageCircle className="size-3 text-[#1D8FFF]" /> Contato
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gradient">
            Vamos conversar sobre o seu projeto.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Responda em poucos minutos. Atendimento humano, técnico e direto ao ponto.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="tel:+5519996939172"
              className="card-hover glass rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="grid place-items-center size-11 rounded-xl bg-[#1D8FFF]/15">
                <Phone className="size-5 text-[#1D8FFF]" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Telefone</div>
                <div className="font-display font-semibold">(19) 99693-9172</div>
              </div>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="card-hover glass rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="grid place-items-center size-11 rounded-xl bg-[#1D8FFF]/15">
                <MessageCircle className="size-5 text-[#1D8FFF]" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-display font-semibold">Conversar agora</div>
              </div>
            </a>
            <div className="card-hover glass rounded-2xl p-4 flex items-center gap-4">
              <div className="grid place-items-center size-11 rounded-xl bg-[#1D8FFF]/15">
                <Mail className="size-5 text-[#1D8FFF]" />
              </div>
                <div>
                <div className="text-xs text-muted-foreground">E-mail</div>
                <div className="font-display font-semibold">infinyatecnologia@gmail.com</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const msg = `Olá! Sou ${data.get("nome")} da ${data.get("empresa")}.%0A${data.get("mensagem")}%0A%0AEmail: ${data.get("email")} | Tel: ${data.get("telefone")}`;
            window.open(`${WHATSAPP}?text=${msg}`, "_blank");
          }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { n: "nome", l: "Nome", t: "text" },
              { n: "empresa", l: "Empresa", t: "text" },
              { n: "email", l: "Email", t: "email" },
              { n: "telefone", l: "Telefone", t: "tel" },
            ].map((f) => (
              <label key={f.n} className="block">
                <span className="text-xs text-muted-foreground">{f.l}</span>
                <input
                  required
                  name={f.n}
                  type={f.t}
                  className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#1D8FFF] focus:ring-2 focus:ring-[#1D8FFF]/30 transition"
                />
              </label>
            ))}
          </div>
          <label className="block mt-4">
            <span className="text-xs text-muted-foreground">Mensagem</span>
            <textarea
              required
              name="mensagem"
              rows={5}
              className="mt-1.5 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#1D8FFF] focus:ring-2 focus:ring-[#1D8FFF]/30 transition resize-none"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#1D8FFF] to-[#3aa0ff] px-5 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(29,143,255,0.8)] hover:-translate-y-0.5 transition-all"
          >
            <Send className="size-4" /> Enviar mensagem
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={mark.url} alt="Infinya" className="h-9 w-9 rounded-md" />
              <span className="font-display text-xl font-semibold">
                Infinya<span className="text-[#1D8FFF]">.</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Soluções Inteligentes, Desenvolvimento Sob Medida.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center size-9 rounded-lg glass hover:border-[#1D8FFF]/50 transition"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Início", "Sobre", "Serviços", "Contato"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace("í", "i").replace("ç", "c")}`} className="hover:text-foreground transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(19) 99693-9172</li>
              <li>infinyatecnologia@gmail.com</li>
              <li>Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Infinya Tecnologia. Todos os direitos reservados.</div>
          <div>Feito com tecnologia · São Paulo, BR</div>
        </div>
      </div>
    </footer>
  );
}
