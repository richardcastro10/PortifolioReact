import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, ShieldCheck } from 'lucide-react'
import { services } from '../data/profile'

const icons = { globe: Globe, smartphone: Smartphone, server: Server, shield: ShieldCheck }

export default function Services() {
  return (
    <section id="servicos" className="py-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink grain px-6 py-14 sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -top-24 -right-16 w-96 h-96 rounded-full bg-azure/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-glint/10 blur-3xl" />

          <div className="relative max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CB2FF]">
              Como posso ajudar
            </span>
            <h2 className="mt-3 font-display font-extrabold text-white text-3xl sm:text-[2.4rem] leading-tight tracking-tight">
              Do código à entrega, eu cuido da sua ideia
            </h2>
          </div>

          <div className="relative mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {services.map((s, i) => {
              const Icon = icons[s.icon] ?? Globe
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-white/10 text-[#9DC4FF] ring-1 ring-white/10">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-lg text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.copy}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
