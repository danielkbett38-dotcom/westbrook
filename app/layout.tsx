import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ToastProvider from '@/components/ui/ToastProvider'

export const metadata: Metadata = {
  title: 'Westbrook Academy — Excellence in Education',
  description: 'Westbrook Academy provides a world-class education from Pre-K through Grade 12 in Nairobi, Kenya.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}
