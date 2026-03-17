'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { searchIndex } from '@/lib/data'

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const results = query.trim()
    ? searchIndex.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
      )
    : []

  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-[rgba(10,22,40,0.85)] z-[9999] flex items-start justify-center pt-[15vh]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-[90%] max-w-[600px] overflow-hidden shadow-[var(--shadow-lg)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-6 py-5 border-b border-[var(--border)]">
          <span className="text-xl mr-4 text-[var(--text-muted)]">🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search courses, faculty, events..."
            className="flex-1 border-none outline-none text-[1.1rem] font-['DM_Sans',sans-serif] text-[var(--navy)] bg-transparent"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer text-xl">✕</button>
        </div>
        <div className="p-4 max-h-[400px] overflow-y-auto">
          {!query.trim() && (
            <p className="text-center py-8 text-[var(--text-muted)] text-sm">Start typing to search…</p>
          )}
          {query.trim() && results.length === 0 && (
            <p className="text-center py-8 text-[var(--text-muted)] text-sm">No results found for &quot;{query}&quot;</p>
          )}
          {results.map(item => (
            <button
              key={item.section}
              onClick={() => { router.push(item.section); onClose() }}
              className="w-full text-left px-4 py-3.5 rounded hover:bg-[var(--gold-pale)] transition-colors cursor-pointer bg-transparent border-none"
            >
              <p className="text-sm font-semibold text-[var(--navy)]">{item.title}</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5 capitalize">{item.section.replace('/', '') || 'Home'}</p>
            </button>
          ))}
        </div>
        <div className="px-4 pb-3 text-xs text-[var(--text-muted)] text-right">Press Esc to close</div>
      </div>
    </div>
  )
}
