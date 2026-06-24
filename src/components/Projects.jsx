import { motion } from 'framer-motion'
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/profile'

function BrowserFrame({ project }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-ink/[0.06] shadow-soft">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-ink/[0.03] border-b border-ink/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <video
        src={project.video}
        poster={project.poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full block bg-sky"
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
            Portfólio
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-[2.6rem] leading-tight tracking-tight">
            Projetos reais que coloquei no ar
          </h2>
          <p className="mt-4 text-slate text-lg">
            Sites desenvolvidos para clientes — do design ao código, pensados para converter.
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:space-y-20">
          {projects.map((p, i) => {
            const reversed = i % 2 === 1
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Vídeo */}
                <div className={reversed ? 'lg:order-2' : ''}>
                  <BrowserFrame project={p} />
                </div>

                {/* Texto */}
                <div className={reversed ? 'lg:order-1' : ''}>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-azure">
                    {p.label}
                  </span>
                  <h3 className="mt-2 font-display font-extrabold text-ink text-2xl sm:text-3xl tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-slate leading-relaxed">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium font-mono text-azure-deep bg-sky px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-azure hover:bg-azure-deep px-4 py-2.5 rounded-full transition-colors"
                      >
                        <ExternalLink size={15} />
                        Ver ao vivo
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-azure transition-colors"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    )}
                    {p.note && (
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate">
                        <CheckCircle2 size={16} className="text-green-500" />
                        {p.note}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
