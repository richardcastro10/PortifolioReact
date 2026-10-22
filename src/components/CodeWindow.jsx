import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { snippets } from '../data/profile'

// Realce de sintaxe mínimo — só o suficiente para os snippets do hero.
const TOKEN = new RegExp(
  [
    '("(?:[^"\\\\]|\\\\.)*")', // 1 string
    '\\b(public|async|await|var|if|return|try|catch|class|def|const|export|function|is)\\b', // 2 keyword
    '\\b(null|true|True|None|Task|Result|Exception|self)\\b', // 3 tipo/literal
    '(</?[A-Z]\\w*)', // 4 componente JSX
    '\\b(\\d+)\\b', // 5 número
  ].join('|'),
  'g',
)
const CLASSES = [null, 'text-rust', 'text-[#7B3FA0]', 'text-[#2F5FA8]', 'text-forest', 'text-[#2F5FA8]']

function tokenize(code) {
  const out = []
  let last = 0
  for (const m of code.matchAll(TOKEN)) {
    if (m.index > last) out.push({ text: code.slice(last, m.index) })
    const group = m.findIndex((g, i) => i > 0 && g !== undefined)
    out.push({ text: m[0], cls: CLASSES[group] })
    last = m.index + m[0].length
  }
  if (last < code.length) out.push({ text: code.slice(last) })
  return out
}

const MAX_LINES = Math.max(...snippets.map((s) => s.code.split('\n').length))
const CHARS_PER_TICK = 2
const TICK_MS = 22
const HOLD_MS = 3800

export default function CodeWindow() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [count, setCount] = useState(0)

  const snippet = snippets[active]
  const tokens = useMemo(() => tokenize(snippet.code), [snippet])
  const total = snippet.code.length
  const shown = reduce ? total : count
  const lines = snippet.code.split('\n').length

  // digita, segura um pouco e passa para o próximo snippet
  useEffect(() => {
    if (reduce) return
    if (count < total) {
      const t = setTimeout(() => setCount((c) => Math.min(c + CHARS_PER_TICK, total)), TICK_MS)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % snippets.length)
      setCount(0)
    }, HOLD_MS)
    return () => clearTimeout(t)
  }, [count, total, reduce])

  const select = (i) => {
    setActive(i)
    setCount(0)
  }

  let remaining = shown
  const typed = []
  for (let i = 0; i < tokens.length && remaining > 0; i++) {
    const text = tokens[i].text.slice(0, remaining)
    remaining -= tokens[i].text.length
    typed.push(
      <span key={i} className={tokens[i].cls}>
        {text}
      </span>,
    )
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-6 items-stretch">
      {/* Janela de código */}
      <div className="flex-1 min-w-0 flex rounded-[10px] overflow-hidden bg-paper-2 shadow-card ring-1 ring-ink/5">
        <div className="hidden sm:block w-9 shrink-0 bg-[#2B2B2A]" />
        <div className="flex-1 min-w-0 px-4 sm:px-5 pt-4 pb-5">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C2512F]" />
            <span className="w-3 h-3 rounded-full bg-[#D9A23A]" />
            <span className="w-3 h-3 rounded-full bg-[#3E8E4E]" />
          </div>
          <div
            className="mt-5 flex font-mono text-[9px] sm:text-[11.5px] leading-[1.75] overflow-hidden"
            style={{ minHeight: `${MAX_LINES * 1.75}em` }}
          >
            <div className="pr-2.5 sm:pr-4 mr-2.5 sm:mr-4 border-r border-ink/10 text-right text-muted/70 select-none">
              {Array.from({ length: lines }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <pre className="text-ink/85 whitespace-pre" aria-label={`Exemplo de código ${snippet.label}`}>
              <code>
                {typed}
                <span className="caret text-forest" aria-hidden="true" />
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Coluna lateral */}
      <div className="lg:w-[128px] shrink-0 flex flex-col">
        <p className="eyebrow !tracking-[0.22em] text-[10px] text-muted">Ideias → Software</p>
        <div className="mt-4 lg:mt-11 flex flex-wrap lg:flex-col gap-2.5 lg:items-start">
          {snippets.map((s, i) => (
            <button
              key={s.label}
              onClick={() => select(i)}
              className={`px-4 py-2 rounded-[5px] text-[14px] transition-colors ${
                i === active ? 'bg-forest text-white' : 'bg-paper-2 text-ink hover:bg-line'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <p className="hidden lg:block mt-12 eyebrow !tracking-[0.2em] text-[10px] leading-[1.9] text-muted">
          // Tecnologia
          <br />
          &nbsp;&nbsp;&nbsp;que gera
          <br />
          &nbsp;&nbsp;&nbsp;resultados
        </p>
      </div>
    </div>
  )
}
