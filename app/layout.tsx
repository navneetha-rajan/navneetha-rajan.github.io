import type { Metadata } from 'next'
import { Sniglet, Quicksand, Patrick_Hand } from 'next/font/google'
import './globals.css'

const sniglet = Sniglet({ 
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-sniglet',
})

const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const patrickHand = Patrick_Hand({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-patrick',
})

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
      <body className={`${sniglet.variable} ${quicksand.variable} ${patrickHand.variable}`}>
        <div className="min-h-screen relative overflow-x-hidden selection:bg-primary-sage selection:text-white bg-transparent">
          {/* Floral Background Pattern */}
          <div className="fixed inset-0 -z-20 bg-[url('/floral-pattern.svg')] opacity-60"></div>
          
          {/* Decorative Floating Floral Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Top Left - Soft Pink Flower Blob */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-accent-pink/20 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
            
            {/* Top Right - Mint Leaf Blob */}
            <div className="absolute top-0 -right-20 w-[400px] h-[400px] bg-primary-sage/20 rounded-full mix-blend-multiply filter blur-[60px] animate-blob animation-delay-2000"></div>
            
            {/* Bottom Left - Lavender Blob */}
            <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-soft-lavender/30 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>
            
            {/* Bottom Right - Peach Blob */}
            <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-[60px] animate-blob animation-delay-2000"></div>

            {/* Floating Flower Icons (CSS Animated) */}
            <div className="absolute top-[10%] left-[5%] text-pink-200/40 text-6xl animate-float" style={{ animationDuration: '8s' }}>🌸</div>
            <div className="absolute top-[20%] right-[10%] text-purple-200/40 text-5xl animate-float" style={{ animationDuration: '12s', animationDelay: '1s' }}>🌺</div>
            <div className="absolute bottom-[15%] left-[15%] text-yellow-200/40 text-6xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}>🌻</div>
            <div className="absolute bottom-[25%] right-[5%] text-green-200/40 text-5xl animate-float" style={{ animationDuration: '9s', animationDelay: '0.5s' }}>🍃</div>
            <div className="absolute top-[40%] left-[80%] text-red-200/30 text-4xl animate-float" style={{ animationDuration: '11s', animationDelay: '3s' }}>🌷</div>
            <div className="absolute top-[60%] left-[5%] text-blue-200/30 text-5xl animate-float" style={{ animationDuration: '13s', animationDelay: '1.5s' }}>🪷</div>
          </div>
          
          {children}
        </div>
      </body>
    </html>
  )
}
