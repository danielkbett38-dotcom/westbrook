'use client'
import { useState } from 'react'
import { eventsData, EventType } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { useToast } from '@/components/ui/ToastProvider'

const typeColors: Record<string, string> = {
  academic: 'bg-[#E8F0FE] text-[#1967D2]',
  sports:   'bg-[#E6F4EA] text-[#137333]',
  arts:     'bg-[#FCE8E6] text-[#C5221F]',
  community:'bg-[#FEF7E0] text-[#B06000]',
}

const calEventDays = [5, 12, 15, 20, 25, 28]
const today = 16

function buildCalendar() {
  const days: { day: number; hasEvent: boolean; isToday: boolean } [] = []
  for (let d = 1; d <= 31; d++) {
    days.push({ day: d, hasEvent: calEventDays.includes(d), isToday: d === today })
  }
  return days
}

export default function EventsPage() {
  const { showToast } = useToast()
  const [filter, setFilter] = useState<EventType>('all')
  const [reminderTitle, setReminderTitle] = useState('')
  const [reminderDate, setReminderDate] = useState('')
  const [reminderTime, setReminderTime] = useState('')

  const filtered = filter === 'all' ? eventsData : eventsData.filter(e => e.type === filter)
  const calDays = buildCalendar()
  const dayLabels = ['Su','Mo','Tu','We','Th','Fr','Sa']
  // March 2025 starts on Saturday (index 6)
  const startOffset = 6

  const handleAddReminder = () => {
    if (!reminderTitle || !reminderDate) { showToast('⚠️ Please enter a title and date.'); return }
    showToast(`✅ Reminder added: "${reminderTitle}" on ${reminderDate}`)
    setReminderTitle(''); setReminderDate(''); setReminderTime('')
  }

  const filterBtns: { label: string; value: EventType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Academic', value: 'academic' },
    { label: 'Sports', value: 'sports' },
    { label: 'Arts', value: 'arts' },
    { label: 'Community', value: 'community' },
  ]

  const inputClass = "w-full px-3 py-2.5 border border-[var(--border)] rounded text-sm font-['DM_Sans'] text-[var(--navy)] bg-white transition-all"

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">
        <div className="flex justify-between items-start flex-wrap gap-4 mb-12">
          <SectionHeader tag="School Calendar" title="Upcoming Events" />
          <div className="flex gap-2 flex-wrap">
            {filterBtns.map(b => (
              <button key={b.value} onClick={() => setFilter(b.value)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all cursor-pointer font-['DM_Sans'] ${filter === b.value ? 'bg-[var(--navy)] text-white border-[var(--navy)]' : 'bg-white text-[var(--text-mid)] border-[var(--border)] hover:border-[var(--gold)]'}`}>
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          {/* Events list */}
          <div className="flex flex-col gap-4">
            {filtered.map(e => (
              <div key={e.title} className="bg-white rounded-xl p-6 border border-[var(--border)] grid grid-cols-[auto_1fr_auto] gap-6 items-center transition-all hover:border-[var(--gold)] hover:shadow-[var(--shadow)]">
                <div className="bg-[var(--navy)] text-white rounded px-4 py-3 text-center min-w-[60px]">
                  <div className="font-serif text-2xl font-black leading-none">{e.day}</div>
                  <div className="text-[0.7rem] text-[var(--gold)] uppercase tracking-widest mt-0.5">{e.month}</div>
                </div>
                <div>
                  <p className="font-serif text-[var(--navy)] font-bold text-base mb-1">{e.title}</p>
                  <div className="flex gap-4 text-xs text-[var(--text-muted)] flex-wrap">
                    <span>🕐 {e.time}</span>
                    <span>📍 {e.location}</span>
                  </div>
                </div>
                <span className={`hidden sm:inline px-3 py-1.5 rounded-full text-[0.7rem] font-semibold uppercase tracking-wide ${typeColors[e.type]}`}>
                  {e.type}
                </span>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-[var(--text-muted)] text-sm py-8 text-center">No events in this category.</p>
            )}
          </div>

          {/* Calendar + reminder */}
          <div className="flex flex-col gap-6">
            {/* Calendar */}
            <div>
              <h3 className="font-serif text-[var(--navy)] text-lg mb-4">March 2025</h3>
              <div className="bg-white border border-[var(--border)] rounded-xl p-5">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayLabels.map(d => (
                    <div key={d} className="text-center text-[0.7rem] font-semibold text-[var(--text-muted)] uppercase py-2">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
                  {calDays.map(d => (
                    <div
                      key={d.day}
                      className={`aspect-square flex items-center justify-center text-sm rounded cursor-pointer transition-colors ${
                        d.hasEvent ? 'bg-[var(--navy)] text-white font-semibold' :
                        d.isToday ? 'border-2 border-[var(--gold)] font-bold text-[var(--navy)]' :
                        'text-[var(--text-mid)] hover:bg-[var(--gold-pale)]'
                      }`}
                    >
                      {d.day}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[var(--navy)]" /><span className="text-xs text-[var(--text-muted)]">Has event</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded border-2 border-[var(--gold)]" /><span className="text-xs text-[var(--text-muted)]">Today</span></div>
                </div>
              </div>
            </div>

            {/* Add reminder */}
            <div className="bg-white border border-[var(--border)] rounded-xl p-5">
              <h4 className="font-serif text-[var(--navy)] text-base mb-4">Add Reminder</h4>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Event Title</label>
                  <input className={inputClass} placeholder="e.g., Science Fair" value={reminderTitle} onChange={e => setReminderTitle(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Date</label>
                    <input type="date" className={inputClass} value={reminderDate} onChange={e => setReminderDate(e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Time</label>
                    <input type="time" className={inputClass} value={reminderTime} onChange={e => setReminderTime(e.target.value)} />
                  </div>
                </div>
                <button onClick={handleAddReminder} className="w-full py-2.5 bg-[var(--navy)] text-white rounded text-sm font-medium hover:bg-[var(--navy-light)] transition-colors cursor-pointer border-none font-['DM_Sans']">
                  Add Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
