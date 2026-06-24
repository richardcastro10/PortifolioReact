import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileText, MessageCircle } from 'lucide-react'
import { profile, stats, waUrl, contactMessage } from '../data/profile'

export default function Hero() {
  const reduce = useReducedMotion()

  const focusIn = {
    hidden: { opacity: 0, filter: reduce ? 'blur(0px)' : 'blur(14px)', y: reduce ? 0 : 14 },
    show: (i = 0) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
  }

  return (
    <section id="top" className="relative overflow-hidden grain">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[820px] lens-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky/60 via-mist to-mist" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div>
            {profile.available && (
              <motion.span
                variants={focusIn}
                initial="hidden"
                animate="show"
                custom={0}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-azure-deep bg-white/70 border border-azure/15 rounded-full px-3.5 py-1.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Disponível para projetos
              </motion.span>
            )}

            <motion.p
              variants={focusIn}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-5 text-slate font-medium"
            >
              {profile.greeting}
            </motion.p>

            <motion.h1
              variants={focusIn}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-2 font-display font-extrabold text-ink text-[2.4rem] leading-[1.06] sm:text-[3.4rem] sm:leading-[1.03] tracking-tight"
            >
              Desenvolvedor{' '}
              <span className="relative whitespace-nowrap text-azure">
                Full Stack
                <svg
                  className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10"
                  fill="none" preserveAspectRatio="none" aria-hidden="true"
                >
                  <path d="M2 7C45 2 120 2 198 6" stroke="#F4B740" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              que transforma ideias em produtos.
            </motion.h1>

            <motion.p
              variants={focusIn}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-6 text-lg text-slate max-w-xl leading-relaxed"
            >
              {profile.subheadline}
            </motion.p>

            <motion.div
              variants={focusIn}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 bg-azure hover:bg-azure-deep text-white font-semibold px-6 py-3.5 rounded-full transition-colors shadow-lift"
              >
                Ver projetos
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={waUrl(contactMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink font-semibold px-5 py-3.5 rounded-full border border-ink/15 hover:border-azure hover:text-azure transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink font-semibold px-5 py-3.5 rounded-full border border-ink/15 hover:border-azure hover:text-azure transition-colors"
              >
                <FileText size={18} />
                Currículo
              </a>
            </motion.div>

            <motion.dl
              variants={focusIn}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-ink/10 pt-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display font-extrabold text-2xl text-ink">{s.value}</dt>
                  <dd className="text-xs text-slate mt-1 leading-snug">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.92, filter: reduce ? 'blur(0)' : 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="pointer-events-none absolute -inset-8 lens-glow" />

            {/* moldura com borda em gradiente */}
            <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-br from-azure to-ink shadow-lift">
              <div className="rounded-[1.7rem] overflow-hidden aspect-square bg-ink">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* floating tech chips */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-6 -left-3 sm:-left-6 bg-white rounded-xl shadow-soft px-3 py-2 text-sm font-mono font-semibold text-ink"
            >
              {'{ }'} C#
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="absolute bottom-8 -right-2 sm:-right-5 bg-white rounded-xl shadow-soft px-3 py-2 text-sm font-mono font-semibold text-azure"
            >
              &lt;React /&gt;
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
