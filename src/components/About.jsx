import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { about, profile } from '../data/profile'

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
              Sobre mim
            </span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-[2.6rem] leading-tight tracking-tight">
              Um pouco da minha trajetória
            </h2>
            <div className="mt-6 space-y-4 text-lg text-slate leading-relaxed max-w-2xl">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[1.75rem] border border-ink/[0.06] shadow-soft p-6 sm:p-7 space-y-5"
          >
            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-sky text-azure shrink-0">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Localização</p>
                <p className="text-sm text-slate">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-sky text-azure shrink-0">
                <GraduationCap size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Formação</p>
                <ul className="mt-1 space-y-1.5">
                  {about.education.map((e, i) => (
                    <li key={i} className="text-sm text-slate leading-snug">{e}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-sky text-azure shrink-0">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Foco atual</p>
                <p className="text-sm text-slate">{about.focus}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
