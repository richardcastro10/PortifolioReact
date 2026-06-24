import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
            Experiência
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-[2.6rem] leading-tight tracking-tight">
            Minha trajetória profissional
          </h2>
          <p className="mt-4 text-slate text-lg">
            Quase 4 anos construindo aplicações web e mobile em empresas de diferentes setores.
          </p>
        </div>

        <div className="mt-12 relative">
          {/* linha vertical */}
          <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-px bg-ink/10" />

          <div className="space-y-6">
            {experience.map((e, i) => (
              <motion.div
                key={`${e.company}-${e.period}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* ponto */}
                <span
                  className={`absolute left-0 top-1 grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-soft ${
                    e.current ? 'bg-azure text-white' : 'bg-white border border-ink/[0.06] text-azure'
                  }`}
                >
                  <Briefcase size={18} />
                </span>

                <div className="bg-white rounded-2xl border border-ink/[0.06] shadow-[0_10px_30px_-22px_rgba(10,37,64,0.5)] p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-display font-bold text-lg text-ink">{e.role}</h3>
                    {e.current && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-azure font-semibold text-sm mt-0.5">{e.company}</p>
                  <p className="text-xs text-slate mt-1">
                    {e.period} · {e.location}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {e.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-slate leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-azure shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium font-mono text-azure-deep bg-sky px-2 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
