'use client'
import { useState } from 'react'
import { galleryData, GalleryCategory } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Lightbox from '@/components/Lightbox'

const filterBtns: { label: string; value: GalleryCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Academics', value: 'academics' },
  { label: 'Sports', value: 'sports' },
  { label: 'Arts & Culture', value: 'arts' },
  { label: 'Campus', value: 'campus' },
  { label: 'Events', value: 'events' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState<GalleryCategory>('all')
  const [lightbox, setLightbox] = useState<{ emoji: string; caption: string } | null>(null)

  const filtered = filter === 'all' ? galleryData : galleryData.filter(g => g.cat === filter)

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">
        <SectionHeader
          tag="Campus Life"
          title="Photo Gallery"
          subtitle="Moments from our vibrant school community."
        />

        <div className="flex gap-2 flex-wrap mb-8">
          {filterBtns.map(b => (
            <button key={b.value} onClick={() => setFilter(b.value)}
              className={`px-5 py-1.5 rounded-full text-sm border transition-all cursor-pointer font-['DM_Sans'] ${filter === b.value ? 'bg-[var(--navy)] text-white border-[var(--navy)]' : 'bg-white text-[var(--text-mid)] border-[var(--border)] hover:border-[var(--gold)]'}`}>
              {b.label}
            </button>
          ))}
        </div>

        <div className="gallery-masonry">
          {filtered.map(g => (
            <div
              key={g.caption}
              className="gallery-item rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] relative group"
              onClick={() => setLightbox({ emoji: g.emoji, caption: g.caption })}
            >
              <div
                className="w-full flex items-center justify-center text-[2.5rem]"
                style={{ background: g.bg, height: g.h }}
              >
                {g.emoji}
              </div>
              <div className="absolute inset-0 bg-[rgba(10,22,40,0.7)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-3xl">🔍</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-medium">{g.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-[var(--text-muted)] text-sm text-center py-12">No images in this category.</p>
        )}
      </div>

      {lightbox && (
        <Lightbox
          emoji={lightbox.emoji}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
