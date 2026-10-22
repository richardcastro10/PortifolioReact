import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile, waUrl, contactMessage } from '../data/profile'

export default function Contact() {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
    { label: 'Currículo', href: profile.cv },
  ]

  return (
    <section id="contato" className="scroll-mt-20 pt-28 sm:pt-36 pb-24 sm:pb-28">
      <div className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="border-t border-line pt-12"
        >
          <p className="eyebrow text-rust">Contato</p>
          <h2 className="mt-4 font-display font-extrabold text-ink text-[clamp(2.4rem,10.5vw,4.4rem)] lg:text-[5rem] leading-[0.98] tracking-[-0.05em] max-w-4xl">
            Tem um problema para resolver?
            <br />
            <span className="text-forest">Vamos conversar</span>
            <span className="text-rust">.</span>
          </h2>
          <p className="mt-7 text-[1.2rem] text-ink/75 max-w-xl leading-relaxed">
            Aberto a freelances e novas oportunidades. Me chama no WhatsApp que eu respondo rápido.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
            <a
              href={waUrl(contactMessage)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-forest hover:bg-forest-deep text-white text-[17px] font-medium px-9 py-[17px] rounded-[5px] transition-colors"
            >
              Chamar no WhatsApp
              <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-ink text-[17px] pb-1.5 border-b border-rust hover:text-forest transition-colors"
              >
                {l.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
