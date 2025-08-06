import { isFeatureEnabled } from '../config/features'
import { getAllBlogs } from '../data/blogs'
import BlogList from './BlogList'

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