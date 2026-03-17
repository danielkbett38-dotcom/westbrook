import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded'
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }
  const variants = {
    primary: 'bg-[var(--gold)] text-[var(--navy)] font-semibold hover:bg-[var(--gold-light)] hover:-translate-y-0.5',
    outline: 'bg-transparent text-white border border-white/30 hover:border-[var(--gold)] hover:text-[var(--gold)]',
    ghost: 'bg-transparent border border-[var(--border)] text-[var(--text-mid)] hover:bg-[var(--gold-pale)]',
    dark: 'bg-[var(--navy)] text-white hover:bg-[var(--navy-light)]',
  }
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
