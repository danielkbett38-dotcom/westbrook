export type SubjectLevel = 'all' | 'primary' | 'middle' | 'high' | 'ib'
export type EventType = 'all' | 'academic' | 'sports' | 'arts' | 'community'
export type NewsType = 'all' | 'academic' | 'sports' | 'community' | 'awards'
export type GalleryCategory = 'all' | 'academics' | 'sports' | 'arts' | 'campus' | 'events'

export interface Subject {
  tag: string
  name: string
  desc: string
  level: Exclude<SubjectLevel, 'all'>
}

export interface FacultyMember {
  emoji: string
  name: string
  title: string
  dept: string
  tags: string[]
  color: string
}

export interface Event {
  day: string
  month: string
  title: string
  time: string
  location: string
  type: Exclude<EventType, 'all'>
}

export interface NewsItem {
  category: string
  title: string
  excerpt: string
  date: string
  author: string
  emoji: string
  featured?: boolean
  type: Exclude<NewsType, 'all'>
}

export interface GalleryItem {
  emoji: string
  caption: string
  h: number
  cat: Exclude<GalleryCategory, 'all'>
  bg: string
}

export interface CurriculumRow {
  subject: string
  level: string
  credits: number
  track: string
  trackVariant: 'navy' | 'gold'
}

export const subjects: Subject[] = [
  { tag: 'Primary', name: 'Integrated Science', desc: 'Hands-on exploration of natural world phenomena for early learners.', level: 'primary' },
  { tag: 'Primary', name: 'Mathematics', desc: 'Number sense, problem solving, and foundational algebraic thinking.', level: 'primary' },
  { tag: 'Primary', name: 'Creative Arts', desc: 'Drawing, painting, drama, and music to inspire creativity.', level: 'primary' },
  { tag: 'Middle', name: 'Life Sciences', desc: 'Biology, ecology, and environmental science for growing minds.', level: 'middle' },
  { tag: 'Middle', name: 'Pre-Algebra & Algebra', desc: 'Bridge from arithmetic to abstract mathematical reasoning.', level: 'middle' },
  { tag: 'Middle', name: 'World History', desc: 'Ancient civilisations to modern nation states and global events.', level: 'middle' },
  { tag: 'Middle', name: 'English & Composition', desc: 'Critical reading, creative and expository writing skills.', level: 'middle' },
  { tag: 'High School', name: 'Advanced Mathematics', desc: 'Calculus, statistics, and advanced algebra for university preparation.', level: 'high' },
  { tag: 'High School', name: 'Physics A-Level', desc: 'Mechanics, electromagnetism, quantum and nuclear physics.', level: 'high' },
  { tag: 'High School', name: 'Chemistry A-Level', desc: 'Organic, inorganic, and physical chemistry with practical lab work.', level: 'high' },
  { tag: 'IB', name: 'IB Theory of Knowledge', desc: 'Interdisciplinary epistemology course unique to the IB Diploma.', level: 'ib' },
  { tag: 'IB', name: 'IB Extended Essay', desc: 'Independent 4,000-word research project on a chosen subject.', level: 'ib' },
]

export const curriculumRows: CurriculumRow[] = [
  { subject: 'Advanced Mathematics', level: 'A-Level / AP', credits: 4, track: 'STEM', trackVariant: 'navy' },
  { subject: 'Physics', level: 'A-Level / IB HL', credits: 4, track: 'STEM', trackVariant: 'navy' },
  { subject: 'Chemistry', level: 'A-Level / IB HL', credits: 4, track: 'STEM', trackVariant: 'navy' },
  { subject: 'Biology', level: 'A-Level / IB HL', credits: 4, track: 'STEM', trackVariant: 'navy' },
  { subject: 'English Literature', level: 'A-Level / IB HL', credits: 4, track: 'Humanities', trackVariant: 'gold' },
  { subject: 'History', level: 'A-Level / IB HL', credits: 4, track: 'Humanities', trackVariant: 'gold' },
  { subject: 'Economics', level: 'A-Level / IB HL', credits: 4, track: 'Humanities', trackVariant: 'gold' },
  { subject: 'Computer Science', level: 'AP / IB', credits: 3, track: 'STEM', trackVariant: 'navy' },
  { subject: 'French / Kiswahili', level: 'A-Level', credits: 3, track: 'Languages', trackVariant: 'gold' },
  { subject: 'Visual Arts', level: 'IB SL/HL', credits: 3, track: 'Arts', trackVariant: 'gold' },
]

export const facultyData: FacultyMember[] = [
  { emoji: '👨‍🔬', name: 'Dr. Samuel Abuya', title: 'Head of Science', dept: 'Physics & Chemistry', tags: ['Physics', 'IB HL', 'Research'], color: '#0A1628' },
  { emoji: '👩‍💻', name: 'Ms. Faith Wambua', title: 'Computer Science Lead', dept: 'STEM Department', tags: ['Coding', 'Robotics', 'AP CS'], color: '#C9973A' },
  { emoji: '👨‍🎨', name: 'Mr. Eric Ndungu', title: 'Visual Arts Director', dept: 'Arts Department', tags: ['IB Art', 'Painting', 'Design'], color: '#1E3452' },
  { emoji: '👩‍🏫', name: 'Mrs. Grace Muthoni', title: 'Head of Humanities', dept: 'History & Geography', tags: ['History', 'Geography', 'IB'], color: '#2C1810' },
  { emoji: '👨‍📚', name: 'Mr. David Kamau', title: 'Senior English Teacher', dept: 'Languages', tags: ['Literature', 'Writing', 'IB Lang'], color: '#0D3B5C' },
  { emoji: '👩‍🔬', name: 'Dr. Lydia Otieno', title: 'Biology Lead', dept: 'Science Department', tags: ['Biology', 'Ecology', 'IB HL'], color: '#1A3D1A' },
  { emoji: '👨‍🏫', name: 'Mr. Alex Omondi', title: 'Head of Mathematics', dept: 'Mathematics', tags: ['Calculus', 'Statistics', 'AP Math'], color: '#3D1A5C' },
  { emoji: '👩‍🎤', name: 'Ms. Carol Njeri', title: 'Music & Drama', dept: 'Performing Arts', tags: ['Music', 'Theatre', 'Choir'], color: '#2C0A3D' },
]

export const eventsData: Event[] = [
  { day: '20', month: 'Mar', title: 'Parent-Teacher Conference', time: '8:00 AM – 4:00 PM', location: 'Main Hall', type: 'academic' },
  { day: '28', month: 'Mar', title: 'Inter-House Athletics Day', time: 'All Day', location: 'Sports Ground', type: 'sports' },
  { day: '05', month: 'Apr', title: 'Annual Drama Festival', time: '5:00 PM', location: 'Auditorium', type: 'arts' },
  { day: '12', month: 'Apr', title: 'Grade 10 Science Fair', time: '9:00 AM', location: 'Science Block', type: 'academic' },
  { day: '18', month: 'Apr', title: 'Community Service Day', time: 'All Day', location: 'Off Campus', type: 'community' },
  { day: '25', month: 'Apr', title: 'IB Exams Begin', time: '8:00 AM', location: 'Exam Halls', type: 'academic' },
  { day: '03', month: 'May', title: 'Football Invitational Tournament', time: '8:00 AM', location: 'Sports Complex', type: 'sports' },
  { day: '17', month: 'May', title: 'Arts & Culture Night', time: '6:00 PM', location: 'Main Hall', type: 'arts' },
]

export const newsData: NewsItem[] = [
  { category: 'Academic', title: 'Westbrook Students Sweep Regional Mathematics Olympiad', excerpt: 'Our Grade 11 team took gold, silver and bronze at this year\'s East Africa Regional Mathematics Olympiad, beating 42 schools from five countries.', date: 'March 10, 2025', author: 'Communications Office', emoji: '🏆', featured: true, type: 'awards' },
  { category: 'Sports', title: 'Eagles Football Team Qualifies for National Finals', excerpt: 'The Westbrook Eagles have qualified for the national school football finals for the third consecutive year.', date: 'March 8, 2025', author: 'Sports Dept', emoji: '⚽', type: 'sports' },
  { category: 'Community', title: 'Grade 9 Plants 500 Trees in Nairobi Forest', excerpt: 'Students partnered with Kenya Forest Service to plant indigenous trees as part of the school\'s sustainability drive.', date: 'March 5, 2025', author: 'Environment Club', emoji: '🌳', type: 'community' },
  { category: 'Academic', title: 'New Robotics Lab Opens This Term', excerpt: 'State-of-the-art robotics and coding lab officially opens, equipped with advanced programming kits and AI tools.', date: 'Feb 28, 2025', author: 'Principal\'s Office', emoji: '🤖', type: 'academic' },
  { category: 'Awards', title: 'Westbrook Ranked Top 3 in National University Placement', excerpt: 'For the second year running, 98% of our Form 4 graduates secured university placements.', date: 'Feb 20, 2025', author: 'Admissions Office', emoji: '🎓', type: 'awards' },
]

export const galleryData: GalleryItem[] = [
  { emoji: '🔬', caption: 'Chemistry Lab Experiments', h: 220, cat: 'academics', bg: '#0A1628' },
  { emoji: '⚽', caption: 'Inter-House Football Match', h: 160, cat: 'sports', bg: '#1E5C1E' },
  { emoji: '🎭', caption: 'Annual Drama Festival', h: 200, cat: 'arts', bg: '#5C1A1A' },
  { emoji: '🏛️', caption: 'Main School Building', h: 180, cat: 'campus', bg: '#152238' },
  { emoji: '🎺', caption: 'School Orchestra Performance', h: 220, cat: 'arts', bg: '#3D1A5C' },
  { emoji: '🏊', caption: 'Swimming Championships', h: 160, cat: 'sports', bg: '#0D3B5C' },
  { emoji: '📚', caption: 'Library Study Sessions', h: 190, cat: 'academics', bg: '#2C1810' },
  { emoji: '🌳', caption: 'School Garden Project', h: 170, cat: 'events', bg: '#1A3D1A' },
  { emoji: '🏆', caption: 'Prize Giving Ceremony', h: 200, cat: 'events', bg: '#3D2C0A' },
  { emoji: '🎨', caption: 'Art Exhibition', h: 180, cat: 'arts', bg: '#2C0A3D' },
  { emoji: '🤖', caption: 'Robotics Club Showcase', h: 160, cat: 'academics', bg: '#0A2C3D' },
  { emoji: '🏃', caption: 'Athletics Day', h: 200, cat: 'sports', bg: '#1A3D0A' },
]

export const searchIndex = [
  { title: 'Admissions 2025–2026', section: '/admissions', keywords: 'apply enrollment fees' },
  { title: 'Academic Programmes', section: '/academics', keywords: 'curriculum subjects courses ib' },
  { title: 'Faculty & Staff', section: '/faculty', keywords: 'teachers professors staff' },
  { title: 'Upcoming Events', section: '/events', keywords: 'calendar activities schedule' },
  { title: 'Latest News', section: '/news', keywords: 'announcements updates' },
  { title: 'Photo Gallery', section: '/gallery', keywords: 'photos campus life sports' },
  { title: 'Contact Information', section: '/contact', keywords: 'phone email address map' },
  { title: 'Student Portal', section: '/portal', keywords: 'grades timetable login dashboard' },
  { title: 'About Westbrook Academy', section: '/about', keywords: 'history values mission leadership' },
]
