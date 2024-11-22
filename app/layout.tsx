import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Vantare - Innovate and Inspire',
  description: 'Vantare provides cutting-edge solutions that empower individuals and businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}

