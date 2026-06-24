import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { nav, waUrl, contactMessage } from '../data/profile'

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
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-ink/5 shadow-[0_6px_24px_-18px_rgba(10,37,64,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate hover:text-ink transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-azure after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waUrl(contactMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-azure hover:bg-azure-deep px-4 py-2 rounded-full transition-colors shadow-[0_10px_24px_-10px_rgba(14,99,230,0.7)]"
            >
              <MessageCircle size={16} />
              Vamos conversar
            </a>
          </div>

          <button
            className="md:hidden text-ink p-2 -mr-2"
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
            className="md:hidden bg-white border-b border-ink/5 shadow-soft"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-ink font-medium border-b border-ink/5 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={waUrl(contactMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-center text-white font-semibold bg-azure px-4 py-3 rounded-full"
              >
                Vamos conversar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
