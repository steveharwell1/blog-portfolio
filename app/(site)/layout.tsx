import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stephen Harwell\'s Projects',
  description: 'A showcase of the projects I\'m most proud of.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages()

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-10`}>
        <header className='flex items-center justify-between'>
          <Link href="/" className="text-gray-900 text-lg font-bold">Home</Link>
          {pages.length > 0 && (<nav className='flex items-center gap-5 text-sm text-gray-600'>
            {pages.map((page) => (
              <Link className='hover:underline' key={page._id} href={`/${page.slug}`}>{page.title}</Link>
            ))}
          </nav>)}
        </header>
        <main className="py-20">
          {children}
        </main>
      </body>
    </html>
  )
}
