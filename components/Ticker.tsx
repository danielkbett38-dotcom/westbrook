const items = [
  'Enrollment Open for 2025–2026 Academic Year',
  'Year 10 Science Fair — April 12, 2025',
  'Westbrook wins Regional Math Olympiad 2024',
  'New Sports Complex Opening — May 2025',
  'Parent-Teacher Conference — March 28, 2025',
]

export default function Ticker() {
  return (
    <div className="ticker-bar">
      <div className="ticker-inner">
        {items.map((item, i) => <span key={i}>{item}</span>)}
        {items.map((item, i) => <span key={`dup-${i}`}>{item}</span>)}
      </div>
    </div>
  )
}
