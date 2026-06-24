import { profile } from '../data/profile'

export default function Logo({ tone = 'ink' }) {
  const text = tone === 'light' ? 'text-white' : 'text-ink'
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label={`${profile.name} — início`}>
      <span className="grid place-items-center w-9 h-9 rounded-xl bg-ink text-[#7CB2FF] font-mono font-semibold text-sm group-hover:bg-azure group-hover:text-white transition-colors">
        {'</>'}
      </span>
      <span className={`font-display font-extrabold tracking-tight ${text}`}>
        Richard<span className="text-azure"> Rocha</span>
      </span>
    </a>
  )
}
