interface SectionHeaderProps {
  tag: string
  title: React.ReactNode
  subtitle?: string
  center?: boolean
}

export default function SectionHeader({ tag, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center mb-10' : 'mb-8'}>
      <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-3">{tag}</p>
      <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-[var(--navy)] font-black leading-tight mb-4">{title}</h2>
      {subtitle && <p className="text-[var(--text-muted)] text-[1.05rem] leading-relaxed max-w-xl font-light">{subtitle}</p>}
    </div>
  )
}
