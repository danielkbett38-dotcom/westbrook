import Link from 'next/link'
import Ticker from '@/components/Ticker'

const heroCards = [
  { icon: '🏆', title: 'Award-Winning Curriculum', desc: 'IB, Cambridge & National curricula with specialised STEM, Arts and Humanities tracks.' },
  { icon: '🔬', title: 'STEM Excellence', desc: 'State-of-the-art labs and robotics centre.' },
  { icon: '🎭', title: 'Arts & Culture', desc: 'Performing arts, music and visual arts.' },
  { icon: '⚽', title: 'Sports & Fitness', desc: '25+ sports and athletics programmes.' },
]

const features = [
  { icon: '👩‍🏫', title: 'Expert Faculty', desc: 'Over 140 dedicated educators, 80% holding advanced degrees in their fields.' },
  { icon: '📚', title: 'Rich Curriculum', desc: '120+ courses including AP, IB, and dual-enrollment university programmes.' },
  { icon: '🌍', title: 'Global Outlook', desc: 'Exchange programmes with partner schools in 18 countries worldwide.' },
  { icon: '🤝', title: 'Inclusive Community', desc: 'A diverse, welcoming environment where every student can thrive and belong.' },
]

export default function Home() {
  return (
    <>
      <Ticker />

      {/* HERO */}
      <section className="min-h-screen bg-[var(--navy)] relative overflow-hidden flex items-center px-8 pt-32 pb-16">
        <div className="hero-bg" />
        <div className="hero-circle" />
        <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 page-enter">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 text-[var(--gold)] text-xs font-medium tracking-[0.2em] uppercase mb-6">
              <span className="block w-8 h-px bg-[var(--gold)]" />
              Excellence Since 1948
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-black leading-[1.1] mb-6">
              Where <em className="text-[var(--gold)] not-italic">Futures</em><br />Are Forged
            </h1>
            <p className="text-white/65 text-[1.05rem] leading-relaxed mb-10 font-light max-w-lg">
              Westbrook Academy provides a world-class education that nurtures intellectual curiosity,
              character, and a lifelong passion for learning. From Pre-K through Grade 12.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/admissions" className="px-8 py-3.5 bg-[var(--gold)] text-[var(--navy)] font-semibold text-sm rounded no-underline hover:bg-[var(--gold-light)] transition-all hover:-translate-y-0.5">
                Apply Now
              </Link>
              <Link href="/about" className="px-8 py-3.5 bg-transparent text-white border border-white/30 text-sm rounded no-underline hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all">
                Explore Academy
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12">
              {[['1,840','Students'],['98%','University Placement'],['120+','Programmes']].map(([num,label]) => (
                <div key={label} className="border-l-2 border-[var(--gold)] pl-4">
                  <div className="font-serif text-[2rem] text-white font-bold">{num}</div>
                  <div className="text-[0.75rem] text-white/50 uppercase tracking-widest mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {heroCards.map((c, i) => (
              <div
                key={c.title}
                className={`border border-[rgba(201,151,58,0.2)] rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 ${
                  i === 0
                    ? 'col-span-2 bg-[rgba(201,151,58,0.1)] border-[rgba(201,151,58,0.4)]'
                    : 'bg-white/5'
                }`}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-serif text-white text-base mb-2">{c.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WESTBROOK */}
      <section className="bg-white py-20 px-8 border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Why Westbrook</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-[var(--navy)] font-black leading-tight">
              A Community Built on<br />Excellence &amp; Character
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white border border-[var(--border)] rounded-xl p-8 shadow-[var(--shadow)] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
                <div className="w-[52px] h-[52px] bg-[var(--gold-pale)] rounded flex items-center justify-center text-2xl mx-auto mb-5">{f.icon}</div>
                <h3 className="font-serif text-[var(--navy)] font-bold text-[1.1rem] mb-2">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--navy)] text-white py-20 px-8 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-serif text-[2.2rem] mb-3">
            Ready to Join the <span className="text-[var(--gold)]">Westbrook Family?</span>
          </h2>
          <p className="text-white/60 mb-8">Applications for the 2025–2026 academic year are now open. Limited places available.</p>
          <Link href="/admissions" className="inline-block px-8 py-3.5 bg-[var(--gold)] text-[var(--navy)] font-semibold text-sm rounded no-underline hover:bg-[var(--gold-light)] transition-all">
            Start Your Application →
          </Link>
        </div>
      </section>
    </>
  )
}
