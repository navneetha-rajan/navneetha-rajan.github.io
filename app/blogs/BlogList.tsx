'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { BlogPost } from '../data/blogs'

interface BlogListProps {
  blogPosts: BlogPost[]
}

export default function BlogList({ blogPosts }: BlogListProps) {
  return (
    <main className="min-h-screen bg-transparent pb-32">
      <Navigation />
      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 bg-white rounded-full shadow-sticker hover:scale-110 transition-transform hover:shadow-sticker-hover border border-gray-100">
            <ArrowLeft size={20} className="text-text-charcoal" />
          </Link>
          <h1 className="font-handwriting text-4xl text-text-charcoal relative inline-block">
            Journal Entries 
            <span className="absolute -top-2 -right-8 text-3xl animate-bounce">📔</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-r-3xl rounded-l-md p-6 shadow-sticker relative border-l-8 border-l-primary-sage border-y border-r border-gray-100 h-full flex flex-col group hover:shadow-sticker-hover hover:-translate-y-1 transition-all duration-300"
              >
                {/* Binder Holes Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-evenly py-4">
                  <div className="w-3 h-3 bg-cream rounded-full -ml-1.5 shadow-inner border border-gray-200"></div>
                  <div className="w-3 h-3 bg-cream rounded-full -ml-1.5 shadow-inner border border-gray-200"></div>
                  <div className="w-3 h-3 bg-cream rounded-full -ml-1.5 shadow-inner border border-gray-200"></div>
                </div>
                <div className="pl-4 flex flex-col h-full">
                  <div className="flex items-center gap-3 text-xs text-text-charcoal/50 font-bold uppercase mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-text-charcoal mb-3 font-heading group-hover:text-primary-sage transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-text-charcoal/70 mb-4 font-sans line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
                     <span className="text-sm font-bold text-text-charcoal group-hover:translate-x-2 transition-transform flex items-center gap-1">
                       Read Entry <ArrowRight size={14} />
                     </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
