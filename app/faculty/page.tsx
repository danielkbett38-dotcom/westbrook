import { facultyData } from '@/lib/data'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'

export default function FacultyPage() {
  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">
        <SectionHeader
          tag="Our People"
          title="Meet Our Faculty"
          subtitle="140+ passionate educators committed to bringing out the best in every student."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facultyData.map(f => (
            <div
              key={f.name}
              className="bg-white rounded-xl overflow-hidden border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <div
                className="h-[200px] flex items-center justify-center text-[3.5rem]"
                style={{ background: f.color }}
              >
                {f.emoji}
              </div>
              <div className="p-5">
                <p className="font-serif text-[var(--navy)] font-bold text-base">{f.name}</p>
                <p className="text-[var(--gold)] text-xs font-semibold uppercase tracking-[0.1em] mt-0.5 mb-1">{f.title}</p>
                <p className="text-[var(--text-muted)] text-xs mb-3">{f.dept}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {f.tags.map(tag => <Badge key={tag} variant="navy">{tag}</Badge>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dept stats */}
        <hr className="border-[var(--border)] my-16" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[['140+','Teaching Staff'],['80%','With Postgrad Degrees'],['18','Departments'],['12','Languages Taught']].map(([n,l]) => (
            <div key={l} className="bg-white border border-[var(--border)] rounded-xl p-6 text-center shadow-[var(--shadow)]">
              <div className="font-serif text-[2rem] text-[var(--navy)] font-bold">{n}</div>
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-widest mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
