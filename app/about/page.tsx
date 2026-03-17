import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'

const values = [
  { icon: '💡', title: 'Intellectual Curiosity', desc: 'We ignite a love for learning that extends far beyond the classroom walls.' },
  { icon: '⚖️', title: 'Integrity & Character', desc: 'Honesty, respect, and responsibility are the foundations of our community.' },
  { icon: '🌱', title: 'Personal Growth', desc: 'Every student is seen as a whole person with unique talents and potential.' },
  { icon: '🤝', title: 'Community Service', desc: 'We instil a deep commitment to giving back and making a difference.' },
]

const leadership = [
  { emoji: '👨‍💼', name: 'Dr. Daniel Bett', role: 'Principal', desc: 'Ph.D. Education, Oxford. 22 years in academic leadership. Champion of student-centred learning.', bg: 'var(--navy)' },
  { emoji: '👩‍💼', name: 'Mrs. Darleen Lagat', role: 'Deputy Principal', desc: 'M.Ed. Curriculum Design. Leads academic programmes and faculty development initiatives.', bg: 'var(--gold)' },
  { emoji: '👨‍💼', name: 'Mr. Emmanuel Kipngetich', role: 'Head of Pastoral Care', desc: 'Dedicated to student wellbeing, guidance counselling, and a safe learning environment.', bg: 'var(--navy-light)' },
]

export default function AboutPage() {
  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">

        {/* Story + Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              tag="Our Story"
              title={<>76 Years of<br />Academic Excellence</>}
              subtitle="Founded in 1948 by Dr. Margaret Westbrook, our academy has grown from a small community school to one of the region's most distinguished educational institutions."
            />
            <hr className="border-[var(--border)] my-10" />
            <ul className="list-none">
              {values.map(v => (
                <li key={v.title} className="flex items-start gap-4 py-4 border-b border-[var(--border)] last:border-0">
                  <div className="w-8 h-8 bg-[var(--gold-pale)] rounded flex items-center justify-center text-sm flex-shrink-0 mt-0.5">{v.icon}</div>
                  <div>
                    <strong className="block text-sm text-[var(--navy)] mb-0.5">{v.title}</strong>
                    <span className="text-xs text-[var(--text-muted)] leading-relaxed">{v.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-[2fr_1fr] grid-rows-[200px_200px] gap-4">
            <div className="row-span-2 bg-[var(--navy-mid)] rounded-xl flex items-center justify-center text-[5rem]">🏛️</div>
            <div className="bg-[var(--gold)] rounded-xl flex items-center justify-center text-[3rem]">📜</div>
            <div className="bg-[var(--gold-pale)] border border-[var(--border)] rounded-xl flex items-center justify-center text-[3rem]">🔬</div>
          </div>
        </div>

        <hr className="border-[var(--border)] my-16" />

        {/* Leadership */}
        <div className="text-center mb-10">
          <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Leadership</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-[var(--navy)] font-black">School Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map(l => (
            <Card key={l.name} className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-[2rem]" style={{ background: l.bg }}>
                {l.emoji}
              </div>
              <h3 className="font-serif text-[var(--navy)] font-bold text-lg mb-1">{l.name}</h3>
              <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.1em] uppercase mb-3">{l.role}</p>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light">{l.desc}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <hr className="border-[var(--border)] my-16" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[['1948','Year Founded'],['1,840','Students Enrolled'],['140+','Faculty Members'],['98%','University Placement']].map(([n,l]) => (
            <div key={l} className="bg-white border border-[var(--border)] rounded-xl p-6 text-center shadow-[var(--shadow)]">
              <div className="font-serif text-[2.2rem] text-[var(--navy)] font-bold">{n}</div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
