'use client'
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { useToast } from '@/components/ui/ToastProvider'

const contactItems = [
  { icon: '📍', label: 'Address', text: 'Westbrook Academy, Westlands Road,\nNairobi, Kenya' },
  { icon: '📞', label: 'Phone', text: '+254 20 123 4567\n+254 722 000 000' },
  { icon: '✉️', label: 'Email', text: 'info@westbrook.ac.ke\nadmissions@westbrook.ac.ke' },
  { icon: '🕐', label: 'Office Hours', text: 'Monday – Friday: 7:30 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM' },
]

const subjects = ['-- Select --', 'General Enquiry', 'Admissions', 'Fees & Finance', 'Curriculum', 'Other']

export default function ContactPage() {
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = () => {
    if (!form.name || !form.email) { showToast('⚠️ Please fill in your name and email.'); return }
    showToast(`✅ Message sent! We'll reply to ${form.email} shortly.`)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const inputClass = "w-full px-4 py-3 border border-[var(--border)] rounded text-sm font-['DM_Sans'] text-[var(--navy)] bg-white transition-all"

  return (
    <div className="pt-[68px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20 page-enter">
        <SectionHeader tag="Get In Touch" title="Contact Us" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 mt-4">
          {/* Info */}
          <div>
            <div className="flex flex-col gap-6">
              {contactItems.map(c => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-[var(--gold-pale)] rounded flex items-center justify-center text-lg flex-shrink-0">{c.icon}</div>
                  <div>
                    <strong className="block text-xs text-[var(--text-muted)] uppercase tracking-widest mb-1">{c.label}</strong>
                    <p className="text-sm text-[var(--navy)] leading-relaxed whitespace-pre-line">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 bg-[var(--navy-mid)] rounded-xl h-[250px] flex items-center justify-center relative overflow-hidden">
              <div className="map-pin" />
              <p className="text-white/30 text-sm mt-8">Westlands, Nairobi</p>
            </div>

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-3 font-semibold">Follow Us</p>
              <div className="flex gap-3">
                {[['f','Facebook'],['in','LinkedIn'],['tw','Twitter'],['yt','YouTube']].map(([s, label]) => (
                  <a key={s} href="#" title={label}
                    className="w-9 h-9 border border-[var(--border)] rounded flex items-center justify-center text-[var(--text-muted)] text-sm no-underline hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all bg-white">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-10 shadow-[var(--shadow)] border border-[var(--border)]">
            <h3 className="font-serif text-[var(--navy)] text-[1.3rem] mb-6">Send Us a Message</h3>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Full Name *</label>
                <input className={inputClass} placeholder="Your full name" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Email *</label>
                <input type="email" className={inputClass} placeholder="your@email.com" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Phone</label>
                <input type="tel" className={inputClass} placeholder="+254 700 000 000" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Subject</label>
                <select className={inputClass} value={form.subject} onChange={e => setForm(p => ({...p, subject: e.target.value}))}>
                  {subjects.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs font-semibold text-[var(--text-mid)] uppercase tracking-[0.04em]">Message</label>
              <textarea className={`${inputClass} resize-y`} style={{ minHeight: 140 }} placeholder="Write your message here..." value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} />
            </div>

            <button onClick={handleSubmit} className="w-full py-3.5 bg-[var(--navy)] text-white rounded text-sm font-medium hover:bg-[var(--navy-light)] transition-colors cursor-pointer border-none font-['DM_Sans']">
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
