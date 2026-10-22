import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Github, Pause, Play } from 'lucide-react'
import { projects } from '../data/profile'

function ProjectVideo({ project }) {
  const ref = useRef(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const portrait = project.orientation === 'portrait'
  const host = project.live ? new URL(project.live).host : `${project.id}.site`

  // só toca enquanto está visível na tela
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.3 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  const toggle = () => {
    const v = ref.current
    if (v.paused) {
      userPaused.current = false
      v.play().catch(() => {})
    } else {
      userPaused.current = true
      v.pause()
    }
  }

  return (
    <div
      className={`relative rounded-[12px] overflow-hidden bg-[#141414] shadow-card ring-1 ring-ink/10 ${
        portrait ? 'w-full max-w-[340px] mx-auto lg:mx-0' : 'w-full'
      }`}
    >
      {!portrait && (
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#1E1E1D]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C2512F]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9A23A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#3E8E4E]" />
          </div>
          <span className="flex-1 text-center font-mono text-[11px] text-white/45 truncate">{host}</span>
          <span className="w-[42px]" />
        </div>
      )}
      <button onClick={toggle} className="group relative block w-full" aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}>
        <video
          ref={ref}
          src={project.video}
          poster={project.poster}
          loop
          muted
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime / (e.currentTarget.duration || 1))}
          className={`w-full block ${portrait ? 'aspect-[4/5]' : 'aspect-video'} object-cover`}
        />
        <span
          className={`absolute bottom-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-black/55 text-white backdrop-blur transition-opacity ${
            playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
        >
          {playing ? <Pause size={15} /> : <Play size={15} className="translate-x-px" />}
        </span>
      </button>
      <div className="h-[3px] bg-white/10">
        <div className="h-full bg-rust" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  )
}

function ProjectDetail({ project }) {
  const portrait = project.orientation === 'portrait'
  return (
    <div
      className={`grid grid-cols-1 gap-10 lg:gap-14 pt-2 pb-12 lg:pl-[103px] ${
        portrait ? 'lg:grid-cols-[340px_1fr]' : 'lg:grid-cols-[1.55fr_1fr]'
      } items-center`}
    >
      <ProjectVideo project={project} />

      <div>
        <p className="eyebrow text-rust">{project.label}</p>
        <p className="mt-4 text-[1.1rem] text-ink/80 leading-relaxed">{project.desc}</p>

        <ul className="mt-6 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[15px] text-ink/80 leading-snug">
              <span className="mt-[9px] w-3 h-px bg-rust shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 bg-forest hover:bg-forest-deep text-white text-[15px] font-medium px-6 py-3 rounded-[5px] transition-colors"
            >
              Ver ao vivo
              <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-ink pb-1 border-b border-rust"
            >
              <Github size={16} />
              Código
            </a>
          )}
          {!project.live && !project.repo && <span className="text-[15px] text-muted">Projeto entregue para cliente</span>}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(projects[0]?.id)

  return (
    <section id="trabalho" className="scroll-mt-20">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-[72px]">
        <div className="border-t border-line pt-10 sm:pt-11 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="eyebrow text-rust">Projetos</p>
            <h2 className="mt-3 font-display font-extrabold text-ink text-[2.6rem] sm:text-[3.4rem] leading-none tracking-[-0.045em]">
              Trabalho selecionado<span className="text-rust">.</span>
            </h2>
          </div>
          <p className="text-muted text-[16px] leading-relaxed max-w-[22rem] lg:text-left">
            Produtos que eu criei e sites entregues para clientes — clique em um projeto para ver ele funcionando.
          </p>
        </div>

        <div className="mt-10 border-t border-ink/25">
          {projects.map((p, i) => {
            const isOpen = open === p.id
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-b border-line"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  aria-expanded={isOpen}
                  className="group w-full text-left grid grid-cols-[44px_1fr_auto] lg:grid-cols-[103px_1fr_1.35fr_1fr_40px] items-center gap-x-4 lg:gap-x-6 gap-y-1 py-6 lg:py-[26px]"
                >
                  <span className={`text-[19px] tabular-nums transition-colors ${isOpen ? 'text-rust' : 'text-muted/70'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display font-bold text-[1.3rem] lg:text-[1.4rem] tracking-[-0.02em] text-ink group-hover:text-forest transition-colors">
                    {p.name}
                  </span>
                  <span className="col-start-2 row-start-2 lg:col-start-auto lg:row-start-auto text-muted text-[15px] lg:text-[17px]">
                    {p.short}
                  </span>
                  <span className="hidden lg:flex flex-wrap items-center gap-x-2.5 text-[15px] text-ink/80">
                    {p.tags.map((t, ti) => (
                      <span key={t} className="inline-flex items-center gap-2.5">
                        {ti > 0 && <span className="text-muted">·</span>}
                        {t}
                      </span>
                    ))}
                  </span>
                  <span className="col-start-3 row-start-1 lg:col-start-auto lg:row-start-auto justify-self-end text-rust">
                    <ArrowRight
                      size={22}
                      strokeWidth={1.6}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.65, 0.3, 0.9] }}
                      className="overflow-hidden"
                    >
                      <ProjectDetail project={p} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
