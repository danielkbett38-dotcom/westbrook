'use client'
import { useState } from 'react'
import { useToast } from '@/components/ui/ToastProvider'

const grades = [
  { subject: 'Mathematics', score: 'A (92%)', variant: 'A' },
  { subject: 'Physics', score: 'A− (88%)', variant: 'A' },
  { subject: 'Chemistry', score: 'B+ (84%)', variant: 'B' },
  { subject: 'English Literature', score: 'A (91%)', variant: 'A' },
  { subject: 'History', score: 'B (79%)', variant: 'B' },
  { subject: 'French', score: 'A− (87%)', variant: 'A' },
]

const assignments = [
  { title: 'Physics Lab Report', due: 'March 20, 2025', color: 'bg-[var(--gold-pale)]', border: 'border-[var(--gold)]' },
  { title: 'English Essay — "Hamlet"', due: 'March 25, 2025', color: 'bg-[#FFF3CD]', border: 'border-[#FFC107]' },
  { title: 'Math Problem Set 7', due: 'March 28, 2025', color: 'bg-[#E8F5E9]', border: 'border-[#4CAF50]' },
]

const timetable = [
  { subject: 'Mathematics', time: '7:45 – 9:05', highlight: true },
  { subject: 'Physics', time: '9:15 – 10:35', highlight: false },
  { subject: 'English Literature', time: '11:00 – 12:20', highlight: false },
  { subject: '🍽 Lunch Break', time: '12:20 – 13:15', lunch: true },
  { subject: 'Chemistry', time: '13:15 – 14:35', highlight: false },
  { subject: 'History', time: '14:45 – 16:05', highlight: false },
]

type TabType = 'student' | 'parent' | 'staff'

export default function PortalPage() {
  const { showToast } = useToast()
  const [loggedIn, setLoggedIn] = useState(false)
  const [tab, setTab] = useState<TabType>('student')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username === 'demo' && password === 'demo123') {
      setLoggedIn(true)
    } else {
      showToast('⚠️ Invalid credentials. Try: demo / demo123')
    }
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setUsername('')
    setPassword('')
  }

  const inputClass = "w-full px-4 py-3 border border-[var(--border)] rounded text-sm font-['DM_Sans'] text-[var(--navy)] bg-white transition-all"
  const gradeColor: Record<string, string> = { A: '#2E7D32', B: '#1565C0', C: '#E65100' }

  return (
    <div className="pt-[68px]">
      <div className="max-w-[900px] mx-auto px-8 py-20 page-enter">
        <p className="text-[var(--gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Student &amp; Parent Portal</p>
        <h2 className="font-serif text-[clamp(2rem,4vw,2.8rem)] text-[var(--navy)] font-black mb-10">My Westbrook Portal</h2>

        {!loggedIn ? (
          <div className="bg-white rounded-xl p-12 shadow-[var(--shadow-lg)] border border-[var(--border)] max-w-[440px] mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-[var(--border)] mb-8">
              {(['student','parent','staff'] as TabType[]).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  className={`px-6 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer bg-transparent capitalize font-['DM_Sans'] ${tab === t ? 'text-[var(--navy)] border-[var(--gold)]' : 'text-[var(--text-muted)] border-transparent hover:text-[var(--navy)]'}`}>
                  {t}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Username / Student ID</label>
              <input className={inputClass} placeholder="e.g. WA2024001" value={username} onChange={e => setUsername(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()} />
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Password</label>
              <input type="password" className={inputClass} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()} />
            </div>

            <button onClick={handleLogin} className="w-full py-3.5 bg-[var(--navy)] text-white rounded text-sm font-medium hover:bg-[var(--navy-light)] transition-colors cursor-pointer border-none font-['DM_Sans'] mb-4">
              Sign In →
            </button>

            <p className="text-center text-xs text-[var(--text-muted)] mb-2">
              Demo: use <strong>demo</strong> / <strong>demo123</strong>
            </p>
            <p className="text-center text-xs">
              <a href="#" className="text-[var(--gold)] no-underline hover:underline">Forgot password?</a>
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 shadow-[var(--shadow)] border border-[var(--border)]">
            {/* Header */}
            <div className="flex justify-between items-start flex-wrap gap-4 mb-8">
              <div>
                <h3 className="font-serif text-[var(--navy)] text-2xl">Welcome, Alex Mwangi 👋</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">Grade 11 · Class of 2026 · ID: WA2024001</p>
              </div>
              <button onClick={handleLogout} className="px-5 py-2 border border-[var(--border)] bg-transparent rounded text-sm cursor-pointer hover:bg-[var(--gold-pale)] transition-colors font-['DM_Sans'] text-[var(--navy)]">
                Sign Out
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[var(--navy)] text-white rounded-xl p-5 text-center">
                <div className="font-serif text-[1.8rem] font-bold">A−</div>
                <div className="text-xs text-white/60 mt-1">Overall GPA</div>
              </div>
              <div className="bg-[var(--gold-pale)] border border-[var(--border)] rounded-xl p-5 text-center">
                <div className="font-serif text-[1.8rem] font-bold text-[var(--navy)]">94%</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">Attendance</div>
              </div>
              <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-center">
                <div className="font-serif text-[1.8rem] font-bold text-[var(--navy)]">6</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">Subjects</div>
              </div>
              <div className="bg-white border border-[var(--border)] rounded-xl p-5 text-center">
                <div className="font-serif text-[1.8rem] font-bold text-[var(--navy)]">3</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">Assignments Due</div>
              </div>
            </div>

            {/* Grades + Assignments + Timetable */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Grades */}
              <div>
                <h4 className="font-serif text-[var(--navy)] text-lg mb-4">My Grades</h4>
                <div className="bg-white border border-[var(--border)] rounded-xl p-5">
                  {grades.map(g => (
                    <div key={g.subject} className="flex justify-between items-center py-3 border-b border-[var(--border)] last:border-0">
                      <span className="text-sm text-[var(--navy)] font-medium">{g.subject}</span>
                      <span className="font-serif text-[1.1rem] font-bold" style={{ color: gradeColor[g.variant] }}>{g.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {/* Assignments */}
                <div>
                  <h4 className="font-serif text-[var(--navy)] text-lg mb-4">Upcoming Assignments</h4>
                  <div className="flex flex-col gap-3">
                    {assignments.map(a => (
                      <div key={a.title} className={`p-3 rounded border-l-4 ${a.color} ${a.border}`}>
                        <p className="text-sm font-semibold text-[var(--navy)]">{a.title}</p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">Due: {a.due}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timetable */}
                <div>
                  <h4 className="font-serif text-[var(--navy)] text-lg mb-4">Today&apos;s Timetable</h4>
                  <div className="bg-white border border-[var(--border)] rounded-xl p-4 flex flex-col gap-2">
                    {timetable.map(t => (
                      <div key={t.subject}
                        className={`flex justify-between items-center px-3 py-2 rounded text-sm ${
                          t.highlight ? 'bg-[var(--navy)] text-white' :
                          t.lunch ? 'bg-[var(--gold-pale)] text-[var(--navy)]' :
                          'text-[var(--navy)]'
                        }`}>
                        <span className={t.highlight ? 'font-semibold' : ''}>{t.subject}</span>
                        <span className={`text-xs ${t.highlight ? 'text-[var(--gold)]' : 'text-[var(--text-muted)]'}`}>{t.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
