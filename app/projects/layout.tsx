import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Navneetha Rajan',
  description: 'Explore a collection of technical projects showcasing expertise in machine learning, cloud architecture, and software development.',
  keywords: ['projects', 'software development', 'machine learning', 'cloud architecture', 'web development', 'mobile development'],
  alternates: {
    canonical: 'https://navneetha-rajan.github.io/projects',
  },
  openGraph: {
    title: 'Projects | Navneetha Rajan',
    description: 'Explore a collection of technical projects showcasing expertise in machine learning, cloud architecture, and software development.',
    type: 'website',
    url: 'https://navneetha-rajan.github.io/projects',
    siteName: 'Navneetha Rajan Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Navneetha Rajan',
    description: 'Explore a collection of technical projects showcasing expertise in machine learning, cloud architecture, and software development.',
    site: '@navneetha_rajan',
    creator: '@navneetha_rajan',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
