import { Metadata } from 'next'
import { isFeatureEnabled } from '../config/features'
import { getAllBlogs } from '../data/blogs'
import BlogList from './BlogList'

export const metadata: Metadata = {
  title: 'Blogs | Navneetha Rajan',
  description: 'Explore insights on software development, cloud technologies, microservices, and modern web development from Navneetha Rajan.',
  keywords: ['software development', 'technology', 'programming', 'cloud computing', 'microservices', 'web development'],
  alternates: {
    canonical: 'https://navneetha-rajan.github.io/blogs',
  },
  openGraph: {
    title: 'Blogs | Navneetha Rajan',
    description: 'Explore insights on software development, cloud technologies, microservices, and modern web development.',
    type: 'website',
    url: 'https://navneetha-rajan.github.io/blogs',
    siteName: 'Navneetha Rajan Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs | Navneetha Rajan',
    description: 'Explore insights on software development, cloud technologies, microservices, and modern web development.',
    site: '@navneetha_rajan',
    creator: '@navneetha_rajan',
  },
}

export default function BlogPage() {
  // Check if blog feature is enabled
  if (!isFeatureEnabled('BLOG_ENABLED')) {
    return (
      <main className="min-h-screen">
        <section className="py-20 section-padding">
          <div className="container-max text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blogs</h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                The blog section is currently disabled. Please check back later for updates.
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const blogPosts = getAllBlogs()

  return <BlogList blogPosts={blogPosts} />
} 