'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useToast } from '@/components/ui/ToastProvider'

const steps = [
  { num: '1', title: 'Submit Enquiry', desc: 'Complete the online enquiry form to begin your application journey.', date: 'Open Year-Round' },
  { num: '2', title: 'Assessment & Interview', desc: 'Shortlisted applicants sit entrance assessments and attend a family interview.', date: 'January – March 2025' },
  { num: '3', title: 'Offer & Acceptance', desc: 'Successful applicants receive an offer letter within two weeks of interview.', date: 'March – April 2025' },
  { num: '4', title: 'Enrolment & Orientation', desc: 'Complete registration, pay fees, and attend our welcome orientation day.', date: 'August 2025' },
]

const fees = [
  ['Early Years', 'Pre-K – KG', 'KES 480,000'],
  ['Primary', 'Grade 1 – 4', 'KES 560,000'],
  ['Middle School', 'Grade 5 – 8', 'KES 680,000'],
  ['High School', 'Grade 9 – 12', 'KES 820,000'],
  ['IB Diploma', 'Grade 11 – 12', 'KES 950,000'],
]

const grades = ['Pre-Kindergarten','Kindergarten','Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12']

export default function AdmissionsPage() {
  const { showToast } = useToast()
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState({ guardian: '', email: '', phone: '', student: '', dob: '', grade: '', school: '', message: '' })

  const handleSubmit = () => {
    if (!form.guardian || !form.email || !form.student) {
      showToast('⚠️ Please fill in all required fields.')
      return
    }
    if (!agreed) {
      showToast('⚠️ Please agree to the terms before submitting.')
      return
    }
    showToast('✅ Enquiry submitted! We\'ll contact you within 2 business days.')
    setForm({ guardian: '', email: '', phone: '', student: '', dob: '', grade: '', school: '', message: '' })
    setAgreed(false)
  }

  const inputClass = "w-full px-4 py-3 border border-[var(--border)] rounded text-sm font-['DM_Sans'] text-[var(--navy)] bg-white transition-all"

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">
        <SectionHeader
          tag="Join Us"
          title="Admissions 2025–2026"
          subtitle="We welcome applications from students who demonstrate academic promise, good character, and eagerness to contribute to our community."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          {/* Left — process + fees */}
          <div>
            <h3 className="font-serif text-[1.4rem] text-[var(--navy)] mb-8">Application Process</h3>
            <div className="steps-timeline">
              {steps.map(s => (
                <div key={s.num} className="relative mb-10">
                  <div className="absolute -left-12 top-1 w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center text-xs font-bold text-[var(--navy)] border-4 border-[var(--cream)]">
                    {s.num}
                  </div>
                  <h4 className="font-serif text-[var(--navy)] text-[1.1rem] mb-1">{s.title}</h4>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{s.desc}</p>
                  <p className="text-xs text-[var(--gold)] font-semibold mt-1">{s.date}</p>
                </div>
              ))}
            </div>

            <hr className="border-[var(--border)] my-10" />

            <h3 className="font-serif text-[1.2rem] text-[var(--navy)] mb-5">Tuition Fees 2025–2026</h3>
            <div className="overflow-hidden rounded-xl border border-[var(--border)] shadow-[var(--shadow)]">
              <table className="fee-table">
                <thead><tr><th>Level</th><th>Grades</th><th>Annual Fee</th></tr></thead>
                <tbody>
                  {fees.map(([level, grades, fee]) => (
                    <tr key={level}>
                      <td>{level}</td>
                      <td className="text-[var(--text-muted)]">{grades}</td>
                      <td className="font-serif font-semibold text-[var(--navy)]">{fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-3">* Scholarships and bursaries available. Contact admissions for details.</p>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-xl p-10 shadow-[var(--shadow)] border border-[var(--border)]">
            <h3 className="font-serif text-[var(--navy)] text-[1.3rem] mb-6">Enquiry Form</h3>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Parent / Guardian Name *</label>
                <input className={inputClass} placeholder="Full name" value={form.guardian} onChange={e => setForm(p => ({...p, guardian: e.target.value}))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Email Address *</label>
                <input type="email" className={inputClass} placeholder="email@example.com" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Phone Number</label>
                <input type="tel" className={inputClass} placeholder="+254 700 000 000" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Student&apos;s Name *</label>
                <input className={inputClass} placeholder="Full name" value={form.student} onChange={e => setForm(p => ({...p, student: e.target.value}))} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Date of Birth</label>
                <input type="date" className={inputClass} value={form.dob} onChange={e => setForm(p => ({...p, dob: e.target.value}))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Applying for Grade</label>
                <select className={inputClass} value={form.grade} onChange={e => setForm(p => ({...p, grade: e.target.value}))}>
                  <option value="">-- Select Grade --</option>
                  {grades.map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Previous School</label>
              <input className={inputClass} placeholder="Name of current / previous school" value={form.school} onChange={e => setForm(p => ({...p, school: e.target.value}))} />
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Message (Optional)</label>
              <textarea className={`${inputClass} resize-y min-h-[100px]`} placeholder="Any specific questions or requirements..." value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <input type="checkbox" id="terms" className="w-4 h-4 cursor-pointer" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
              <label htmlFor="terms" className="text-xs text-[var(--text-muted)] cursor-pointer">I agree to the privacy policy and terms of admission.</label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3.5 bg-[var(--navy)] text-white rounded text-sm font-medium hover:bg-[var(--navy-light)] transition-colors cursor-pointer border-none font-['DM_Sans']"
            >
              Submit Enquiry →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
