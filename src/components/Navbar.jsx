import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav, profile, waUrl, contactMessage } from '../data/profile'

function Available() {
  return (
    <span className="inline-flex items-center gap-2.5 text-[15px] text-ink">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-50" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-forest" />
      </span>
      Disponível para projetos
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-paper/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-[72px] h-[76px] grid grid-cols-[1fr_auto_1fr] items-center">
          <Logo />

          <div className="hidden md:flex items-center gap-10">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[16px] text-ink/85 hover:text-ink transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-rust after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex justify-end">
            {profile.available ? (
              <Available />
            ) : (
              <a href={waUrl(contactMessage)} target="_blank" rel="noreferrer" className="text-[15px] text-ink">
                Falar comigo
              </a>
            )}
          </div>

          <button
            className="md:hidden col-start-3 justify-self-end text-ink p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-paper border-b border-line"
          >
            <div className="px-5 py-4 flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-ink text-lg border-b border-line last:border-0"
                >
                  {item.label}
                </a>
              ))}
              {profile.available && (
                <div className="pt-4">
                  <Available />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
