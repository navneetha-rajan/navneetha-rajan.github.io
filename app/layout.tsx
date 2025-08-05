import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navneetha Rajan - Software Development Engineer | Full-Stack Developer | Cloud Architect',
  description: 'Software Development Engineer with expertise in microservices, cloud technologies, and full-stack development. Currently pursuing MS in Information Technology at Arizona State University. Specializing in Java, Spring Boot, AWS, and modern web technologies.',
  keywords: [
    'Navneetha Rajan',
    'Software Engineer',
    'Software Development Engineer',
    'Full-Stack Developer',
    'Backend Developer',
    'Cloud Architect',
    'Microservices',
    'AWS',
    'Java',
    'Spring Boot',
    'Python',
    'Machine Learning',
    'React',
    'Next.js',
    'TypeScript',
    'Arizona State University',
    'MS Information Technology',
    'SIXT',
    'Portfolio',
    'Developer Portfolio',
    'Tech Resume',
    'Software Development',
    'Cloud Computing',
    'API Development',
    'Database Design',
    'DevOps',
    'Docker',
    'Kubernetes',
    'Git',
    'Agile',
    'Scrum'
  ],
  authors: [{ name: 'Navneetha Rajan', url: 'https://github.com/navneetha-rajan' }],
  creator: 'Navneetha Rajan',
  publisher: 'Navneetha Rajan',
  category: 'Technology',
  classification: 'Software Development',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://navneetha-rajan.github.io'),
  alternates: {
    canonical: 'https://navneetha-rajan.github.io/',
    languages: {
      'en-US': '/en-US',
    },
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
      'max-snippet': -1,
    },
  },
  verification: {
    google: '0wv6E1R30LY0sfflwgR1azAYKLvJTlZm0OOHfsi8fzM',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  openGraph: {
    title: 'Navneetha Rajan - Software Development Engineer | Full-Stack Developer',
    description: 'Software Development Engineer with expertise in microservices, cloud technologies, and full-stack development. Currently pursuing MS in Information Technology at Arizona State University. Specializing in Java, Spring Boot, AWS, and modern web technologies.',
    type: 'website',
    url: 'https://navneetha-rajan.github.io/',
    siteName: 'Navneetha Rajan Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/neetz-profile.png',
        width: 1200,
        height: 630,
        alt: 'Navneetha Rajan - Software Development Engineer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navneetha Rajan - Software Development Engineer | Full-Stack Developer',
    description: 'Software Development Engineer with expertise in microservices, cloud technologies, and full-stack development. Specializing in Java, Spring Boot, AWS, and modern web technologies.',
    site: '@navneetha_rajan',
    creator: '@navneetha_rajan',
    images: ['/neetz-profile.png'],
  },
  other: {
    'application-name': 'Navneetha Rajan Portfolio',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Navneetha Rajan',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#000000',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#000000',
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