'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Heart, Folder, Camera, Mail } from 'lucide-react'

const Navigation = () => {
  const pathname = usePathname()

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'projects', label: 'Creations', icon: Heart, href: '/projects' },
    { id: 'about', label: 'Story', icon: Folder, href: '/blogs' }, // Mapping Folder to Blogs/Story based on image context
    { id: 'travel', label: 'Adventures', icon: Camera, href: '/travel' },
    { id: 'contact', label: 'Connect', icon: Mail, href: '/contact' }
  ]

  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#8ba896] rounded-full px-6 py-3 flex items-center gap-6 shadow-xl z-50"
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href
        
        return (
          <Link key={item.id} href={item.href}>
            <div 
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 relative group ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
              data-tooltip={item.label}
            >
              <item.icon size={24} strokeWidth={2.5} />
              {isActive && (
                <motion.div
                  layoutId="dock-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                />
              )}
            </div>
          </Link>
        )
      })}
    </motion.div>
  )
}

export default Navigation
