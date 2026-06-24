import { motion } from 'framer-motion'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
            Conhecimentos
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-[2.6rem] leading-tight tracking-tight">
            Ferramentas que uso para construir
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-3xl border border-ink/[0.06] shadow-[0_10px_30px_-22px_rgba(10,37,64,0.5)] p-6"
            >
              <h3 className="font-display font-bold text-lg text-ink">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm font-medium font-mono text-ink bg-mist border border-ink/[0.06] px-3 py-1.5 rounded-lg hover:border-azure hover:text-azure transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
