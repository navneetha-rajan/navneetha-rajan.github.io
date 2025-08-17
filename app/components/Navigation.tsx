'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const isHomePage = pathname === '/'

  const navItems = [
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'experience', label: 'Experience', href: '/#experience' },
    { id: 'projects', label: 'Projects', href: '/#projects' },
    { id: 'blogs', label: 'Blogs', href: '/#blogs' },
    { id: 'education', label: 'Education', href: '/#education' },
    { id: 'testimonials', label: 'Testimonials', href: '/#testimonials' },
    { id: 'contact', label: 'Contact', href: '/#contact' }
  ]

  const pageNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blogs', href: '/blogs' }
  ]

  const handleLogoClick = () => {
    if (isHomePage) {
      scrollToSection('hero')
    } else {
      window.location.href = '/'
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-900/90' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <motion.div
              className="text-xl font-bold text-accent cursor-pointer"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Navneetha Rajan
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {isHomePage ? (
                // Section navigation for home page
                navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted hover:text-accent transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                ))
              ) : (
                // Page navigation for other pages
                pageNavItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className={`text-muted hover:text-accent transition-all duration-200 font-medium px-4 py-2 rounded-lg hover:bg-accent/10 hover:shadow-md ${
                        pathname === item.href ? 'text-accent bg-accent/10' : ''
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container-max py-4">
                {isHomePage ? (
                  // Section navigation for home page
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-4 py-3 text-muted hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  // Page navigation for other pages
                  <div className="space-y-2">
                    {pageNavItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <motion.div
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                            pathname === item.href 
                              ? 'text-accent bg-accent/10' 
                              : 'text-muted hover:text-accent hover:bg-accent/10'
                          }`}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
