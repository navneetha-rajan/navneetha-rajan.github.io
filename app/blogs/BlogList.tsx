'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { BlogPost } from '../data/blogs'

interface BlogListProps {
  blogPosts: BlogPost[]
}

export default function BlogList({ blogPosts }: BlogListProps) {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg-outer)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', background: 'var(--color-bg-content)', borderLeft: '0.5px solid var(--color-border-subtle)', borderRight: '0.5px solid var(--color-border-subtle)', minHeight: '100vh' }}>
        <section style={{ paddingTop: '112px', paddingBottom: '64px', paddingLeft: '24px', paddingRight: '24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-text-muted)', marginBottom: '48px', display: 'inline-flex', transition: 'color 0.2s' }}
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '38px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Blogs
            </h1>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px', color: 'var(--color-text-secondary)', maxWidth: '500px', lineHeight: 1.7 }}>
              Thoughts, insights, and experiences from my journey in software development, cloud architecture, and technology innovation.
            </p>
          </motion.div>
        </section>

        <section style={{ paddingBottom: '128px', paddingLeft: '24px', paddingRight: '24px' }}>
          <div style={{ borderTop: '0.5px solid var(--color-border-subtle)' }}>
            {blogPosts.map((post, index) => (
              <Link key={post.id} href={`/blogs/${post.id}`}>
                <div
                  className="group flex items-baseline gap-5"
                  style={{
                    padding: '14px 0',
                    borderBottom: '0.5px solid var(--color-border-subtle)',
                    transition: 'border-color 0.2s',
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
        </section>
      </div>
    </main>
  )
}
