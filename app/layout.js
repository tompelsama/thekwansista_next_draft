import './globals.css'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
  },
  openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      url: 'https://thekwansista.com',
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1065,
          height: 710,
        },
      ],
      locale: 'en-AU',
      type: 'website',
  },
  robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
