import { motion } from "framer-motion";
import { Activity, Code2, Cpu, Database, GitBranch, LineChart, Zap } from "lucide-react";

export function HeroArt() {
  return (
    <div className="relative h-[520px] w-full">
      {/* glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 size-80 rounded-full bg-[#1D8FFF]/30 blur-[120px]" />
        <div className="absolute bottom-0 left-10 size-72 rounded-full bg-[#3aa0ff]/20 blur-[100px]" />
      </div>

      {/* main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: -8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute inset-x-4 top-8 glass rounded-2xl p-5 glow-ring"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#1D8FFF]" />
            <span className="text-xs text-muted-foreground">infinya / dashboard</span>
          </div>
          <div className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/30" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { l: "Receita", v: "R$ 248k", t: "+18%" },
            { l: "Pedidos", v: "1.842", t: "+9%" },
            { l: "Uptime", v: "99.99%", t: "estável" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-xl bg-white/5 border border-white/5 p-3"
            >
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
              <div className="font-display text-lg font-semibold mt-1">{s.v}</div>
              <div className="text-[10px] text-[#1D8FFF]">{s.t}</div>
            </motion.div>
          ))}
        </div>

        {/* chart */}
        <div className="rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 p-4 h-40 relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <LineChart className="size-3.5 text-[#1D8FFF]" /> Performance
            </span>
            <span className="text-[10px] text-muted-foreground">7 dias</span>
          </div>
          <svg viewBox="0 0 300 100" className="w-full h-24">
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1D8FFF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1D8FFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.5 }}
              d="M0,70 C40,60 60,30 100,40 C140,50 160,20 200,25 C240,30 260,55 300,15"
              fill="none"
              stroke="#1D8FFF"
              strokeWidth="2"
            />
            <path
              d="M0,70 C40,60 60,30 100,40 C140,50 160,20 200,25 C240,30 260,55 300,15 L300,100 L0,100 Z"
              fill="url(#g)"
              opacity="0.8"
            />
          </svg>
        </div>
      </motion.div>

      {/* floating code card */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute -left-2 bottom-6 w-64 glass rounded-2xl p-4 glow-ring"
      >
        <div className="flex items-center gap-2 mb-3">
          <Code2 className="size-4 text-[#1D8FFF]" />
          <span className="text-xs text-muted-foreground">api/orders.ts</span>
        </div>
        <pre className="text-[11px] leading-relaxed font-mono text-muted-foreground">
<span className="text-[#1D8FFF]">export</span> <span className="text-[#3aa0ff]">async</span> fn{"\n"}
  <span className="text-foreground">getOrders</span>(){" {"}
  {"\n  "}<span className="text-[#1D8FFF]">return</span> db{"\n    "}.from(<span className="text-[#79c0ff]">'orders'</span>){"\n    "}.select(<span className="text-[#79c0ff]">'*'</span>);{"\n"}{"}"}
        </pre>
      </motion.div>

      {/* floating chips */}
      {[
        { icon: Database, label: "PostgreSQL", x: "right-2", y: "top-2", delay: 0.6 },
        { icon: GitBranch, label: "CI/CD", x: "right-4", y: "bottom-32", delay: 0.7 },
        { icon: Cpu, label: "Edge AI", x: "right-8", y: "bottom-12", delay: 0.8 },
        { icon: Zap, label: "Realtime", x: "left-20", y: "top-2", delay: 0.5 },
        { icon: Activity, label: "Monitoramento", x: "left-32", y: "bottom-40", delay: 0.9 },
      ].map((c) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: c.delay, duration: 0.5 }}
            className={`absolute ${c.x} ${c.y} glass rounded-full pl-2 pr-3 py-1.5 flex items-center gap-1.5 text-xs`}
          >
            <span className="grid place-items-center size-5 rounded-full bg-[#1D8FFF]/20">
              <Icon className="size-3 text-[#1D8FFF]" />
            </span>
            {c.label}
          </motion.div>
        );
      })}
    </div>
  );
}
