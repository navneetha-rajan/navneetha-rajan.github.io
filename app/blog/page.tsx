'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { isFeatureEnabled } from '../config/features'
import { getAllBlogs } from '../data/blogs'

export default function BlogPage() {
  // Check if blog feature is enabled
  if (!isFeatureEnabled('BLOG_ENABLED')) {
    return (
      <main className="min-h-screen">
        <section className="py-20 section-padding">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-8">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors duration-200"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Home</span>
                </Link>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blogs</h1>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                The blog section is currently disabled. Please check back later for updates.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    )
  }

  const blogPosts = getAllBlogs()

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-8">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors duration-200 mr-6"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blogs</h1>
            <p className="text-xl text-muted max-w-3xl">
              Thoughts, insights, and experiences from my journey in software development, 
              cloud architecture, and technology innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group card-bg rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted">{post.date}</span>
                    <span className="text-sm text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-muted mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">By {post.author}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 section-padding bg-sky-light/10">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about software development, 
              cloud architecture, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-muted/20 border border-muted/30 text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 