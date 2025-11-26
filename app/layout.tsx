import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Nature Photography Portfolio | Capturing Earth\'s Beauty',
  description: 'Professional nature photography portfolio showcasing stunning landscapes, wildlife, and natural wonders from around the world. Available for prints and commissions.',
  keywords: 'nature photography, landscape photography, wildlife photography, nature photographer, photography portfolio, fine art prints',
  authors: [{ name: 'Nature Photography Studio' }],
  openGraph: {
    title: 'Nature Photography Portfolio',
    description: 'Capturing the beauty of nature through stunning photography',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nature Photography Portfolio',
    description: 'Capturing the beauty of nature through stunning photography',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}