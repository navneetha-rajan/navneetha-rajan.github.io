'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '../../data/blogs'
import Navigation from '../../components/Navigation'

interface BlogContentProps {
  blog: BlogPost
  otherBlogs: BlogPost[]
}

export default function BlogContent({ blog, otherBlogs }: BlogContentProps) {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg-outer)' }}>
      <Navigation />

      <div style={{ maxWidth: '860px', margin: '0 auto', background: 'var(--color-bg-content)', borderLeft: '0.5px solid var(--color-border-subtle)', borderRight: '0.5px solid var(--color-border-subtle)', minHeight: '100vh' }}>
        <section style={{ paddingTop: '112px', paddingBottom: '32px', paddingLeft: '24px', paddingRight: '24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2"
              style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-text-muted)', marginBottom: '48px', display: 'inline-flex', transition: 'color 0.2s' }}
            >
              <ArrowLeft size={14} />
              Back to Blogs
            </Link>
          </motion.div>
        </section>

        <section style={{ paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ marginBottom: '48px' }}>
              <div className="flex items-center gap-6" style={{ marginBottom: '24px' }}>
                <div className="flex items-center gap-1.5" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-text-muted)' }}>
                  <Calendar size={14} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1.5" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-text-muted)' }}>
                  <Clock size={14} />
                  <span>{blog.readTime}</span>
                </div>
              </div>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '32px', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.25, marginBottom: '24px' }}>
                {blog.title}
              </h1>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                {blog.excerpt}
              </p>
            </div>

            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </motion.article>
        </section>

        {otherBlogs.length > 0 && (
          <section style={{ padding: '80px 24px', borderTop: '0.5px solid var(--color-border-subtle)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '32px', textAlign: 'center' }}>
                More Posts
              </h2>
              <div style={{ borderTop: '0.5px solid var(--color-border-subtle)' }}>
                {otherBlogs.map((post) => (
                  <Link key={post.id} href={`/blogs/${post.id}`}>
                    <div
                      className="group flex items-baseline gap-5"
                      style={{
                        padding: '14px 0',
                        borderBottom: '0.5px solid var(--color-border-subtle)',
                      }}
                    >
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-text-muted)', minWidth: '80px', flexShrink: 0 }}>
                        {post.date}
                      </span>
                      <span className="blog-title-underline" style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px', color: 'var(--color-text-primary)' }}>
                        {post.title}
                      </span>
                      <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-text-muted)', marginLeft: 'auto', flexShrink: 0 }}>
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link
                  href="/blogs"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '11px',
                    color: 'var(--color-accent-mauve)',
                    border: '0.5px solid var(--color-accent-mauve)',
                    borderRadius: '4px',
                    padding: '10px 24px',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  View All Blogs
                </Link>
              </div>
            </motion.div>
          </section>
        )}
      </div>
    </main>
  )
}
