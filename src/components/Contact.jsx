import { motion } from 'framer-motion'
import { MessageCircle, Linkedin, Github, FileText } from 'lucide-react'
import { profile, waUrl, contactMessage } from '../data/profile'

export default function Contact() {
  const channels = [
    { label: 'WhatsApp', href: waUrl(contactMessage), icon: MessageCircle, primary: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: Github },
    { label: 'Currículo', href: profile.cv, icon: FileText },
  ]

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-azure to-ink grain px-6 py-16 sm:px-14 sm:py-20 text-center"
        >
          <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-[2.8rem] leading-tight tracking-tight max-w-2xl mx-auto">
              Tem um projeto em mente? Vamos tirar do papel.
            </h2>
            <p className="mt-4 text-white/75 text-lg max-w-xl mx-auto">
              Estou aberto a freelances e novas oportunidades. Me chama que eu respondo rápido.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {channels.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full transition-colors ${
                      c.primary
                        ? 'bg-white text-azure hover:bg-sky'
                        : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20'
                    }`}
                  >
                    <Icon size={18} />
                    {c.label}
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
