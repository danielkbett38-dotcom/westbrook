'use client'
import { useState } from 'react'
import { newsData, NewsType } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { useToast } from '@/components/ui/ToastProvider'

const filterBtns: { label: string; value: NewsType }[] = [
  { label: 'All News', value: 'all' },
  { label: 'Academic', value: 'academic' },
  { label: 'Sports', value: 'sports' },
  { label: 'Community', value: 'community' },
  { label: 'Awards', value: 'awards' },
]

export default function NewsPage() {
  const { showToast } = useToast()
  const [filter, setFilter] = useState<NewsType>('all')

  const filtered = filter === 'all' ? newsData : newsData.filter(n => n.type === filter)
  const featured = filtered.find(n => n.featured) ?? filtered[0]
  const rest = filtered.filter(n => n !== featured).slice(0, 4)

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">
        <SectionHeader tag="Latest Updates" title="News & Announcements" />

        <div className="flex gap-2 flex-wrap mb-8">
          {filterBtns.map(b => (
            <button key={b.value} onClick={() => setFilter(b.value)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all cursor-pointer font-['DM_Sans'] ${filter === b.value ? 'bg-[var(--navy)] text-white border-[var(--navy)]' : 'bg-white text-[var(--text-mid)] border-[var(--border)] hover:border-[var(--gold)]'}`}>
              {b.label}
            </button>
          ))}
        </div>

        {!featured ? (
          <p className="text-[var(--text-muted)] text-sm py-8 text-center">No news in this category.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            {/* Featured */}
            <div className="bg-white rounded-xl overflow-hidden border border-[var(--border)]">
              <div className="h-[280px] bg-[var(--navy)] flex items-center justify-center text-[5rem]">
                {featured.emoji}
              </div>
              <div className="p-8">
                <p className="text-[var(--gold)] text-xs font-bold tracking-[0.15em] uppercase mb-3">{featured.category}</p>
                <h2 className="font-serif text-[var(--navy)] font-black text-[1.4rem] leading-tight mb-3">{featured.title}</h2>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex gap-4 text-xs text-[var(--text-muted)] flex-wrap mb-4">
                  <span>📅 {featured.date}</span>
                  <span>✍️ {featured.author}</span>
                </div>
                <button
                  onClick={() => showToast('Full article coming soon!')}
                  className="text-[var(--gold)] text-sm font-semibold bg-transparent border-none cursor-pointer hover:underline p-0"
                >
                  Read more →
                </button>
              </div>
            </div>

            {/* Side list */}
            <div className="flex flex-col gap-4">
              {rest.map(n => (
                <div key={n.title} className="bg-white border border-[var(--border)] rounded-xl p-5 transition-all hover:border-[var(--gold)]">
                  <p className="text-[var(--gold)] text-xs font-bold tracking-[0.15em] uppercase mb-1">{n.category}</p>
                  <p className="font-serif text-[var(--navy)] font-bold text-sm leading-snug mb-2">{n.emoji} {n.title}</p>
                  <p className="text-xs text-[var(--text-muted)] mb-2">{n.date}</p>
                  <button
                    onClick={() => showToast('Full article coming soon!')}
                    className="text-[var(--gold)] text-xs font-semibold bg-transparent border-none cursor-pointer hover:underline p-0"
                  >
                    Read →
                  </button>
                </div>
              ))}
              {rest.length === 0 && (
                <p className="text-[var(--text-muted)] text-sm text-center py-4">No more articles.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
