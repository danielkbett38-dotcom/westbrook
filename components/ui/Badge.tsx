interface BadgeProps {
  children: React.ReactNode
  variant?: 'navy' | 'gold' | 'green'
}

export default function Badge({ children, variant = 'navy' }: BadgeProps) {
  const styles = {
    navy: 'bg-[rgba(10,22,40,0.07)] text-[var(--navy)]',
    gold: 'bg-[var(--gold-pale)] text-[var(--gold)] border border-[rgba(201,151,58,0.2)]',
    green: 'bg-[#E8F5E9] text-[#2E7D32]',
  }
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[0.7rem] font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}
