import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stephen Harwell\'s Projects',
  description: 'A showcase of the projects I\'m most proud of.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-10`}>
        <header>
          <Link href="/" className="text-gray-900 text-lg font-bold">Home</Link>
        </header>
        <main className="py-20">
          {children}
        </main>
      </body>
    </html>
  )
}
