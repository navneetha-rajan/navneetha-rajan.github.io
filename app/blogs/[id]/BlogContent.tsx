'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '../../data/blogs'

interface BlogContentProps {
  blog: BlogPost
  otherBlogs: BlogPost[]
}

export default function BlogContent({ blog, otherBlogs }: BlogContentProps) {
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
                href="/blogs"
                className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors duration-200 mr-6"
              >
                <ArrowLeft size={20} />
                <span>Back to Blogs</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.article
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Blog Header */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-muted">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                {blog.featured && (
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-elegant">
                {blog.title}
              </h1>
              <p className="text-xl text-muted mb-6">
                {blog.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="flex items-center space-x-1 bg-muted/20 text-muted px-3 py-1 rounded-full text-sm"
                  >
                    <Tag size={14} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

            </div>

            {/* Blog Content */}
            <div 
              className="prose prose-invert max-w-none prose-lg"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.article>
        </div>
      </section>

      {/* View More Blogs Section */}
      {otherBlogs.length > 0 && (
        <section className="py-20 section-padding bg-sky-light/10">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">View More Blogs</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherBlogs.map((post, index) => (
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
                        <div className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200 mt-auto">
                          Read more →
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link 
                  href="/blogs"
                  className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <span>View All Blogs</span>
                  <ArrowLeft size={20} className="rotate-180" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}


    </main>
  )
} 