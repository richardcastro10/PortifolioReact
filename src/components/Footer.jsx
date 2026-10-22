import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-[72px]">
      <div className="border-t border-line py-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-[15px] text-ink/80">
        <p>
          {profile.name} © {new Date().getFullYear()}
        </p>
        <p className="flex items-center gap-5 text-muted">
          Construído com intenção.
          <span className="w-8 h-px bg-rust" />
        </p>
      </div>
    </footer>
  )
}
