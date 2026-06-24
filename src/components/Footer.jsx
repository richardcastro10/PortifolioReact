import { Linkedin, Github, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { profile, nav, waUrl, contactMessage } from '../data/profile'

export default function Footer() {
  const socials = [
    { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: profile.github, icon: Github, label: 'GitHub' },
    { href: waUrl(contactMessage), icon: MessageCircle, label: 'WhatsApp' },
  ]
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Logo tone="light" />
            <p className="mt-3 text-sm text-white/55 max-w-xs">
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 ring-1 ring-white/10 text-white/80 hover:bg-azure hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/45">
          <p>© {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
          <p>Feito com React, Tailwind e Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
