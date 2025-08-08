'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '../data/blogs'

interface BlogListProps {
  blogPosts: BlogPost[]
}

export default function BlogList({ blogPosts }: BlogListProps) {
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
              <Link 
                key={post.id}
                href={`/blogs/${post.id}`}
                className="group"
              >
                <motion.article
                  className="card-bg rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted">{post.date}</span>
                      <span className="text-sm text-muted">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-muted mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200 mt-auto">
                      Read more →
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
} 