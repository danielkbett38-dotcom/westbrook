'use client'
import { useEffect } from 'react'

interface LightboxProps {
  emoji: string
  caption: string
  onClose: () => void
}

export default function Lightbox({ emoji, caption, onClose }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/92 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-8 right-8 bg-transparent border-none text-white text-3xl cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={onClose}
      >✕</button>
      <div className="max-w-[800px] w-[90%] text-center" onClick={e => e.stopPropagation()}>
        <div className="w-full h-[500px] bg-[var(--navy-mid)] rounded-xl flex items-center justify-center text-[6rem] mb-4">
          {emoji}
        </div>
        <p className="text-white/70 text-sm">{caption}</p>
      </div>
    </div>
  )
}
