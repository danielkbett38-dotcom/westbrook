'use client'
import { useState } from 'react'
import { subjects, curriculumRows, SubjectLevel } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

const gradeLevels: { label: string; value: SubjectLevel }[] = [
  { label: 'All Grades', value: 'all' },
  { label: 'Pre-K – Grade 4', value: 'primary' },
  { label: 'Grade 5 – 8', value: 'middle' },
  { label: 'Grade 9 – 12', value: 'high' },
  { label: 'IB Programme', value: 'ib' },
]

export default function AcademicsPage() {
  const [level, setLevel] = useState<SubjectLevel>('all')

  const filtered = level === 'all' ? subjects : subjects.filter(s => s.level === level)

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">
        <SectionHeader
          tag="Curriculum"
          title="Academic Programmes"
          subtitle="World-class curricula designed to challenge, inspire, and prepare students for global universities and careers."
        />

        {/* Grade filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {gradeLevels.map(g => (
            <button
              key={g.value}
              onClick={() => setLevel(g.value)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 font-['DM_Sans',sans-serif] cursor-pointer ${
                level === g.value
                  ? 'bg-[var(--navy)] text-white border-[var(--navy)]'
                  : 'bg-white text-[var(--text-mid)] border-[var(--border)] hover:border-[var(--gold)]'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Subject cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {filtered.map(s => (
            <div
              key={s.name}
              className="bg-white rounded-xl p-6 border border-[var(--border)] flex flex-col gap-3 cursor-pointer transition-all duration-200 hover:border-[var(--gold)] hover:-translate-y-0.5 hover:shadow-[var(--shadow)]"
            >
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--gold)]">{s.tag}</span>
              <h4 className="font-serif text-[var(--navy)] font-bold text-[1.05rem]">{s.name}</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed flex-1">{s.desc}</p>
              <span className="text-[var(--gold)] text-xl mt-auto">→</span>
            </div>
          ))}
        </div>

        <hr className="border-[var(--border)] mb-10" />

        <h3 className="font-serif text-[1.5rem] text-[var(--navy)] mb-6">Grade 11–12 Subject Offerings</h3>
        <div className="overflow-x-auto rounded-xl border border-[var(--border)] shadow-[var(--shadow)]">
          <table className="curriculum-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Level</th>
                <th>Credits</th>
                <th>Track</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {curriculumRows.map(row => (
                <tr key={row.subject}>
                  <td>{row.subject}</td>
                  <td className="text-[var(--text-muted)]">{row.level}</td>
                  <td>{row.credits}</td>
                  <td><Badge variant={row.trackVariant}>{row.track}</Badge></td>
                  <td><Badge variant="green">Open</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
