'use client'

import { motion } from 'framer-motion'
import { Mail, Send, Github, Linkedin } from 'lucide-react'
import Navigation from '../components/Navigation'

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
      <Navigation />
      <div className="bg-white rounded-[2rem] p-8 mb-8 shadow-sm border border-gray-100 text-center">
        <h1 className="font-handwriting text-4xl text-text-charcoal mb-2 flex items-center justify-center gap-2">
          Let's Connect! 💌
        </h1>
        <p className="text-text-charcoal/60">Have a question or want to work together? Drop me a note!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form */}
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-white rounded-[2rem] p-8 shadow-sticker border border-gray-100 flex flex-col relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-24 h-24 bg-primary-sage/20 rounded-bl-full -mr-10 -mt-10"></div>
           <h2 className="text-2xl font-heading text-gray-800 mb-6">Send a Message ✍️</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1 font-heading">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-primary-sage focus:ring-0 outline-none transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1 font-heading">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-primary-sage focus:ring-0 outline-none transition-colors" placeholder="hello@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1 font-heading">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-primary-sage focus:ring-0 outline-none transition-colors resize-none" placeholder="Say hi!"></textarea>
            </div>
            <button type="submit" className="btn-kawaii w-full justify-center mt-2">
              Send Love <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* Right: Socials */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.3 }}
           className="bg-primary-sage/10 rounded-[2rem] p-8 shadow-sticker border border-primary-sage/20 flex flex-col items-center justify-center h-full text-center relative"
        >
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/40 rounded-tr-full -ml-10 -mb-10"></div>
           <h2 className="text-2xl font-heading text-gray-800 mb-2">Find me elsewhere 🌐</h2>
           <p className="text-gray-600 mb-8 font-sans">I'm always happy to chat about code, design, or the best coffee spots!</p>
           
           <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              <a href="https://github.com/navneetha-rajan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:scale-105 transition-transform border border-gray-100 group">
                 <Github size={32} className="text-gray-800 mb-2 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-sm text-gray-600">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/navneetha-rajan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:scale-105 transition-transform border border-gray-100 group">
                 <Linkedin size={32} className="text-[#0077b5] mb-2 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-sm text-gray-600">LinkedIn</span>
              </a>
              <a href="mailto:connectwithnavneetha08@gmail.com" className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:scale-105 transition-transform border border-gray-100 group">
                 <Mail size={32} className="text-red-400 mb-2 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-sm text-gray-600">Email</span>
              </a>
               <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm hover:scale-105 transition-transform border border-gray-100 group cursor-pointer" title="Coming Soon!">
                 <span className="text-3xl mb-2 group-hover:rotate-12 transition-transform">📸</span>
                 <span className="font-bold text-sm text-gray-600">Instagram</span>
              </div>
           </div>
        </motion.div>
      </div>
    </main>
  )
}
