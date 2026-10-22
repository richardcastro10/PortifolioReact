import { profile } from '../data/profile'

export default function Logo() {
  return (
    <a
      href="#top"
      className="font-display font-extrabold text-[1.65rem] tracking-tight text-ink leading-none"
      aria-label={`${profile.name} — início`}
    >
      {profile.initials}
      <span className="text-rust">.</span>
    </a>
  )
}
