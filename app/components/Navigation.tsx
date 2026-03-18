'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

const pageNavItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileOpen(false)
  }

  const logoClick = () => {
    if (isHome) scrollTo('hero')
    else window.location.href = '/'
    setIsMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-bg-outer/90 backdrop-blur-md' : 'bg-transparent'
        }`}
        style={{ borderBottom: '0.5px solid var(--color-border-subtle)' }}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-12">
          {/* Left — NR */}
          <div
            onClick={logoClick}
            className="cursor-pointer select-none"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '12px',
              color: 'var(--color-accent-mauve)',
              letterSpacing: '2px',
            }}
          >
            NR
          </div>

          {/* Center — links */}
          <div className="hidden md:flex items-center gap-6">
            {isHome
              ? navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '13px',
                      color: 'var(--color-text-muted)',
                      letterSpacing: '1px',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-mauve)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                  >
                    {item.label}
                  </button>
                ))
              : pageNavItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span
                      style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '13px',
                        color: pathname === item.href ? 'var(--color-accent-mauve)' : 'var(--color-text-muted)',
                        letterSpacing: '1px',
                        transition: 'color 0.2s',
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
          </div>

          {/* Right — available + mobile toggle */}
          <div className="flex items-center gap-4">
            <span
              className="hidden sm:inline-flex items-center"
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '12px',
                color: 'var(--color-text-muted)',
              }}
            >
              <span className="available-dot" />
              available
            </span>
            <button
              className="md:hidden"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[90]"
              style={{ background: 'var(--color-bg-outer)', opacity: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.98 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-0 z-[95] flex flex-col items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-4 right-6"
                onClick={() => setIsMobileOpen(false)}
                style={{ color: 'var(--color-text-muted)' }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
              {(isHome ? navItems : pageNavItems).map((item, i) => (
                <motion.button
                  key={'id' in item ? item.id : item.href}
                  onClick={() => 'id' in item ? scrollTo(item.id) : (window.location.href = item.href)}
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: '24px',
                    color: 'var(--color-text-primary)',
                    background: 'none',
                    border: 'none',
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
