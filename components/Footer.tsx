import Link from 'next/link'

const academicsLinks = [
  { label: 'Curriculum', href: '/academics' },
  { label: 'IB Programme', href: '/academics' },
  { label: 'STEM', href: '/academics' },
  { label: 'Arts', href: '/academics' },
  { label: 'Faculty', href: '/faculty' },
]
const communityLinks = [
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
const admissionsLinks = [
  { label: 'Apply Now', href: '/admissions' },
  { label: 'Fees & Finance', href: '/admissions' },
  { label: 'Scholarships', href: '/admissions' },
  { label: 'Student Portal', href: '/portal' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white/70 pt-16 pb-8 px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="logo-hex w-8 h-8 bg-[var(--gold)] flex items-center justify-center font-serif font-black text-[var(--navy)] text-sm">W</div>
            <span className="font-serif text-white font-bold text-[1.1rem]">Westbrook Academy</span>
          </div>
          <p className="text-sm leading-relaxed text-white/50">
            Shaping tomorrow&apos;s leaders through excellence in education, character, and community since 1948.
          </p>
          <div className="flex gap-3 mt-5">
            {['f', 'in', 'tw', 'yt'].map(s => (
              <a key={s} href="#" className="w-9 h-9 border border-white/15 rounded flex items-center justify-center text-white/50 text-sm no-underline hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Academics */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Academics</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {academicsLinks.map(l => (
              <li key={l.label}><Link href={l.href} className="text-white/55 text-sm no-underline hover:text-[var(--gold)] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Community</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {communityLinks.map(l => (
              <li key={l.label}><Link href={l.href} className="text-white/55 text-sm no-underline hover:text-[var(--gold)] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h4 className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Admissions</h4>
          <ul className="list-none flex flex-col gap-2.5">
            {admissionsLinks.map(l => (
              <li key={l.label}><Link href={l.href} className="text-white/55 text-sm no-underline hover:text-[var(--gold)] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs text-white/35">
        <span>© 2025 Westbrook Academy. All rights reserved.</span>
        <span>Privacy Policy · Terms of Use · Safeguarding</span>
      </div>
    </footer>
  )
}
