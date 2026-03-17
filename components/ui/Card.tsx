interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white border border-[var(--border)] rounded-xl p-8 shadow-[var(--shadow)] ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
