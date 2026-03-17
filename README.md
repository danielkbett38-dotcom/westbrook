# Westbrook Academy — Next.js Website

A complete, modern school website built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

## Project Structure

```
westbrook/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (navbar, footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── academics/page.tsx
│   ├── faculty/page.tsx
│   ├── admissions/page.tsx
│   ├── events/page.tsx
│   ├── news/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   └── portal/page.tsx
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Toast.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Ticker.tsx
│   ├── SearchModal.tsx
│   └── Lightbox.tsx
├── lib/
│   └── data.ts             # All site data (subjects, faculty, events, news, gallery)
└── app/globals.css         # Global styles and CSS variables
```

## Features

- **9 fully functional pages**: Home, About, Academics, Faculty, Admissions, Events, News, Gallery, Contact, Portal
- **Student Portal** with demo login (`demo` / `demo123`) — grades, timetable, assignments
- **Search modal** with keyboard shortcut support (Ctrl+K / ⌘+K)
- **Filterable content**: subjects by grade, events by category, news by type, gallery by category
- **Admissions enquiry form** with validation
- **Contact form** with validation
- **Events calendar** with reminder functionality
- **Gallery lightbox**
- **Toast notifications**
- **Responsive** — mobile-first, hamburger menu
- **Animated news ticker**
- **TypeScript** throughout
