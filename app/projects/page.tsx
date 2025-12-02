'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, Cloud, Star, Book, Coffee } from 'lucide-react'
import Navigation from '../components/Navigation'

export default function ProjectsPage() {
  const projects = [
    {
      id: 'mindmate',
      title: 'MindMate',
      description: 'My AI friend for chats & feelings.',
      tags: ['Java', 'Python', 'SC', 'React'],
      color: 'bg-[#f0fdf4] border-green-100',
      icon: <Brain size={32} className="text-pink-500" />,
      links: {
        github: 'https://github.com/navneetha-rajan/MindMate',
        demo: 'https://mindmate-demo.vercel.app'
      }
    },
    {
      id: 'rideshare',
      title: 'Ride Share',
      description: 'Carpooling platform for sustainable urban travel.',
      tags: ['Java', 'Python', 'MB', 'HIB'],
      color: 'bg-[#f5f3ff] border-purple-100',
      icon: <Cloud size={32} className="text-blue-500" />,
      links: {
        github: 'https://github.com/navneetha-rajan/Ride-Share-Application',
        demo: 'https://rideshare-demo.vercel.app'
      }
    },
    {
      id: 'bookify',
      title: 'Bookify',
      description: 'Clean code researching for project deals.',
      tags: ['Git', 'Prept', 'React', 'Java'],
      color: 'bg-[#fff7ed] border-orange-100',
      icon: <Book size={32} className="text-blue-500" />,
      links: {
        github: 'https://github.com/navneetha-rajan/Bookify',
        demo: 'https://bookify-demo.vercel.app'
      }
    },
    {
      id: 'bookify-2',
      title: 'Bookify V2',
      description: 'Clean code, machine running class implementation.',
      tags: ['Python', 'MH', 'RI'],
      color: 'bg-[#fafaf9] border-gray-200',
      icon: <Coffee size={32} className="text-amber-700" />,
      links: {
        github: 'https://github.com/navneetha-rajan/Bookify',
        demo: 'https://bookify-demo.vercel.app'
      }
    }
  ]

  return (
    <main className="min-h-screen pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white rounded-[2rem] p-8 mb-8 shadow-sm border border-gray-100 relative overflow-hidden">
        <h1 className="font-handwriting text-4xl text-text-charcoal mb-2 flex items-center gap-2">
          My Creations <span className="text-2xl text-gray-400">📁</span>
        </h1>
        <p className="text-text-charcoal/60">A collection of projects I've built with love and lots of coffee.</p>
        <div className="absolute top-4 right-4 text-yellow-200">
          <StarIcon />
        </div>
        <div className="absolute top-12 left-[-10px] text-pink-200 transform rotate-45">
          <FlowerIcon />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`rounded-[2rem] p-6 shadow-sm border flex flex-col items-center text-center ${project.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Traffic Light Dots */}
            <div className="flex gap-1.5 self-start mb-4 opacity-50">
              <div className="w-2 h-2 rounded-full bg-red-300"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
              <div className="w-2 h-2 rounded-full bg-green-300"></div>
            </div>

            <div className="mb-4">
              {project.icon}
            </div>

            <h2 className="font-handwriting text-xl text-text-charcoal mb-1 flex items-center gap-2">
              {project.title} <span className="text-xs">🌸</span>
            </h2>
            
            <p className="text-xs text-text-charcoal/60 mb-4 min-h-[2.5rem]">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-white/50 rounded-md text-[10px] font-bold text-text-charcoal/70">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 w-full mt-auto">
              <a 
                href={project.links.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 bg-white py-2 rounded-xl text-xs font-bold text-text-charcoal hover:bg-gray-50 transition-colors"
              >
                <Github size={14} /> View Code
              </a>
              <a 
                href={project.links.demo} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 bg-pink-100 py-2 rounded-xl text-xs font-bold text-pink-700 hover:bg-pink-200 transition-colors"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

function FlowerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 2.9 14.9 2 16 2C17.1 2 18 2.9 18 4C18 5.1 17.1 6 16 6C17.1 6 18 6.9 18 8C18 9.1 17.1 10 16 10C14.9 10 14 9.1 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2C9.1 2 10 2.9 10 4C10 2.9 10.9 2 12 2ZM12 6C13.1 6 14 5.1 14 4C14 5.1 13.1 6 12 6Z" />
    </svg>
  )
}
