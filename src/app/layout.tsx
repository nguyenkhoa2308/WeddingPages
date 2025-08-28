// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Eternal Moments - Wedding Photography',
    template: '%s | Eternal Moments'
  },
  description: 'Chụp ảnh cưới chuyên nghiệp tại TP.HCM - Studio, Outdoor, Traditional. Tạo nên những khoảnh khắc vĩnh cửu cho ngày trọng đại của bạn.',
  keywords: ['chụp ảnh cưới', 'wedding photography', 'studio ảnh cưới', 'makeup cô dâu', 'TP.HCM'],
  authors: [{ name: 'Eternal Moments Photography' }],
  creator: 'Eternal Moments Photography',
  publisher: 'Eternal Moments Photography',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://eternalmoments.vn',
    title: 'Eternal Moments - Wedding Photography',
    description: 'Chụp ảnh cưới chuyên nghiệp tại TP.HCM',
    siteName: 'Eternal Moments',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eternal Moments - Wedding Photography',
    description: 'Chụp ảnh cưới chuyên nghiệp tại TP.HCM',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white`}>
        {children}
      </body>
    </html>
  )
}