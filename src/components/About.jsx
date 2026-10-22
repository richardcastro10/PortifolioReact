import { motion } from 'framer-motion'
import { about, stats, experience, skills } from '../data/profile'

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 pt-24 sm:pt-32">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-[72px]">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-20">
          <motion.div {...fadeUp}>
            <p className="eyebrow text-rust">Sobre</p>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[2.6rem] sm:text-[3.4rem] leading-none tracking-[-0.045em]">
              Quem está por trás<span className="text-rust">.</span>
            </h2>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-ink/25 pt-4">
                  <dt className="font-display font-extrabold text-[2rem] tracking-[-0.04em] text-forest">{s.value}</dt>
                  <dd className="text-[13px] text-muted mt-1 leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="space-y-5 text-[1.1rem] text-ink/80 leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-2">
              {about.education.map((e) => (
                <li key={e} className="flex gap-3 text-[15px] text-muted">
                  <span className="mt-[10px] w-3 h-px bg-rust shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Experiência */}
        <div className="mt-24">
          <p className="eyebrow text-muted">Experiência</p>
          <div className="mt-5 border-t border-ink/25">
            {experience.map((e, i) => (
              <motion.div
                key={`${e.company}-${e.period}`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-[150px_1.1fr_1.4fr_1fr] gap-x-6 gap-y-1.5 py-6 border-b border-line"
              >
                <span className={`text-[15px] tabular-nums ${e.current ? 'text-forest font-medium' : 'text-muted'}`}>
                  {e.period}
                </span>
                <div>
                  <p className="font-display font-bold text-[1.15rem] tracking-[-0.02em] text-ink">{e.role}</p>
                  <p className="text-[15px] text-muted">{e.company}</p>
                </div>
                <p className="text-[15px] text-ink/75 leading-relaxed">{e.summary}</p>
                <p className="text-[14px] text-ink/70 lg:text-right">{e.tags.join(' · ')}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {skills.map((s, i) => (
            <motion.div key={s.group} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
              <p className="eyebrow text-muted">{s.group}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-[14px] text-ink bg-paper-2 px-3.5 py-1.5 rounded-[5px] hover:bg-forest hover:text-white transition-colors"
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
