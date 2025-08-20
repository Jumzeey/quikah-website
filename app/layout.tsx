import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quikah - Connect Businesses and Customers',
  description: 'The ultimate platform connecting businesses with customers through innovative solutions.',
  keywords: 'business, customers, platform, connection, services',
  authors: [{ name: 'Quikah Team' }],
  openGraph: {
    title: 'Quikah - Connect Businesses and Customers',
    description: 'The ultimate platform connecting businesses with customers through innovative solutions.',
    url: 'https://quikah.com',
    siteName: 'Quikah',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quikah Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quikah - Connect Businesses and Customers',
    description: 'The ultimate platform connecting businesses with customers through innovative solutions.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
