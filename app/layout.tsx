import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navneetha Rajan - Software Development Engineer',
  description: 'Software Development Engineer with expertise in microservices, cloud technologies, and full-stack development. Currently pursuing MS in Information Technology at Arizona State University.',
  keywords: ['Navneetha Rajan', 'Software Engineer', 'Microservices', 'AWS', 'Java', 'Spring Boot', 'Arizona State University'],
  authors: [{ name: 'Navneetha Rajan' }],
  creator: 'Navneetha Rajan',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  metadataBase: new URL('https://navneetha-rajan.github.io'),
  alternates: {
    canonical: 'https://navneetha-rajan.github.io/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Navneetha Rajan - Software Development Engineer',
    description: 'Software Development Engineer with expertise in microservices, cloud technologies, and full-stack development. Currently pursuing MS in Information Technology at Arizona State University.',
    type: 'website',
    url: 'https://navneetha-rajan.github.io/',
    siteName: 'Navneetha Rajan Portfolio',
    images: [
      {
        url: '/neetz-profile.png',
        width: 460,
        height: 257,
        alt: 'Navneetha Rajan Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navneetha Rajan - Software Development Engineer',
    description: 'Software Development Engineer with expertise in microservices, cloud technologies, and full-stack development.',
    site: '@navneetha08',
    creator: '@navneetha08',
    images: ['/neetz-profile.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
} 