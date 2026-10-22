import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import CodeWindow from './CodeWindow'
import { profile, waUrl, contactMessage } from '../data/profile'

export default function Hero() {
  const reduce = useReducedMotion()

  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
  }

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-[72px] pt-32 pb-16 sm:pt-36 lg:pt-[140px] lg:pb-[52px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-14 lg:gap-14 items-start">
          {/* Copy */}
          <div className="min-w-0">
            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0}
              className="flex items-center gap-4 sm:gap-5 eyebrow !tracking-[0.18em] sm:!tracking-[0.3em] text-muted sm:whitespace-nowrap"
            >
              <span className="w-10 h-px bg-rust" />
              {profile.role} · {profile.location}
            </motion.p>

            <motion.h1
              variants={rise}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-7 font-display font-extrabold text-ink text-[clamp(2.4rem,10.5vw,4.4rem)] lg:text-[4.1rem] xl:text-[4.75rem] leading-[0.98] tracking-[-0.05em] lg:whitespace-nowrap"
            >
              {profile.headline[0]}
              <br />
              <span className="text-forest">{profile.headline[1]}</span>
              <span className="text-rust">.</span>
            </motion.h1>

            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-8 text-[1.2rem] sm:text-[1.35rem] text-ink/80 max-w-[34rem] leading-[1.45]"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              variants={rise}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-5"
            >
              <a
                href="#trabalho"
                className="group inline-flex items-center gap-3 bg-forest hover:bg-forest-deep text-white text-[17px] font-medium px-9 py-[17px] rounded-[5px] transition-colors"
              >
                Ver projetos
                <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={waUrl(contactMessage)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-ink text-[17px] font-medium pb-2 border-b border-rust"
              >
                Falar comigo
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Código */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.2, 0.65, 0.3, 0.9] }}
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
