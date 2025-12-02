'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Brain, Cloud, Star, Coffee, MapPin, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">
      <Navigation />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        
      {/* Hero Section */}
          <motion.div
          id="home"
          initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-8 border-2 border-pink-100 shadow-sticker relative overflow-hidden group hover:shadow-sticker-hover transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-bl-[4rem] -mr-4 -mt-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 relative">
              <div className="absolute inset-0 bg-[#ffd1dc] rounded-full animate-blob opacity-70"></div>
              <div className="absolute inset-0 bg-[#b5d8cc] rounded-full animate-blob animation-delay-2000 opacity-70"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden">
                <Image
                    src="/neetz-profile.png" 
                    alt="Navneetha Rajan" 
                  fill
                  className="object-cover"
                  priority
                  />
                </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md text-2xl animate-bounce">
                ✨
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4 transform -rotate-2 hover:rotate-0 transition-transform font-heading">
                Software Engineer & Creator 🌷
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-text-charcoal font-heading">
                Hi, I'm <span className="text-primary-sage relative inline-block">
                  Navneetha
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-pink-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
            </h1>
              <p className="text-lg text-text-charcoal/70 mb-6 font-sans leading-relaxed max-w-lg">
                Crafting digital experiences with code and creativity. I love building things that are both functional and adorable! 
                Currently exploring the world of Cloud Native and Microservices.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="https://github.com/navneetha-rajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pastel-blue text-text-charcoal p-3 rounded-2xl hover:scale-110 hover:-rotate-3 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 font-bold border border-white/60"
                >
                  <Github size={20} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/navneetha-rajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pastel-purple text-text-charcoal p-3 rounded-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 font-bold border border-white/60"
                >
                  <Linkedin size={20} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="mailto:connectwithnavneetha08@gmail.com"
                  className="bg-accent-pink text-text-charcoal p-3 rounded-2xl hover:scale-110 hover:-rotate-2 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2 font-bold border border-white/60"
                >
                  <Mail size={20} />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </div>
            </div>
            </div>
          </motion.div>

        {/* Work Journal */}
          <motion.div
          id="experience"
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 row-span-2 bg-[#e3f0e6] rounded-[2rem] p-6 border-2 border-green-100 shadow-sticker flex flex-col hover:shadow-sticker-hover transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-charcoal font-heading flex items-center gap-2">
              <span className="bg-white p-2 rounded-full shadow-sm">💼</span> Work Journal
            </h2>
            <Link href="/resume.pdf" target="_blank" className="text-xs font-bold bg-white px-3 py-1 rounded-full text-green-600 shadow-sm hover:scale-105 transition-transform">
              RESUME ↗
            </Link>
              </div>

          <div className="space-y-6 overflow-y-auto custom-scrollbar pr-2 flex-1">
            {/* Item 1 */}
            <div className="bg-white/60 backdrop-blur-sm p-3 rounded-2xl border border-white/50 shadow-sm hover:scale-[1.02] transition-transform group relative">
               <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity transform rotate-12">
                  <span className="bg-yellow-200 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">Latest!</span>
                </div>
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <Image src="/asu-logo.png" alt="ASU" width={32} height={32} className="object-contain" />
                </div>
                <div className="leading-none">
                  <h3 className="font-bold text-text-charcoal leading-tight text-sm mb-0">Software Engineer</h3>
                  <p className="text-[10px] font-bold text-green-600 mt-0">Arizona State University</p>
                </div>
              </div>
              <p className="text-[10px] text-pastel-purple font-mono mb-2">Aug 2023 - Present</p>
              <ul className="text-xs text-text-charcoal space-y-0 list-disc list-inside marker:text-green-400 leading-tight">
                <li>Reduced build times by 40% via CI/CD pipelines</li>
                <li>Optimized AWS cloud infrastructure costs</li>
                <li>Developed accessible React components</li>
              </ul>
            </div>

            {/* Item 2 */}
            <div className="bg-white/60 backdrop-blur-sm p-3 rounded-2xl border border-white/50 shadow-sm hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <Image src="/sixt-logo.png" alt="Sixt" width={32} height={32} className="object-contain" />
                        </div>
                <div className="leading-none">
                  <h3 className="font-bold text-text-charcoal leading-tight text-sm mb-0">Software Engineer II</h3>
                  <p className="text-[10px] font-bold text-orange-500 mt-0">Sixt R & D</p>
                          </div>
                        </div>
              <p className="text-[10px] text-pastel-purple font-mono mb-2">July 2021 - July 2023</p>
              <ul className="text-xs text-text-charcoal space-y-0 list-disc list-inside marker:text-orange-300 leading-tight">
                <li>Built microservices handling 1M+ requests/day</li>
                <li>Led migration to Go based architecture</li>
                <li>Improved API latency by 60%</li>
                      </ul>
                  </div>
                  
            {/* Item 3 */}
            <div className="bg-white/60 backdrop-blur-sm p-3 rounded-2xl border border-white/50 shadow-sm hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <Image src="/hpe-logo.png" alt="HPE" width={32} height={32} className="object-contain" />
                  </div>
                <div className="leading-none">
                  <h3 className="font-bold text-text-charcoal leading-tight text-sm mb-0">R&D Intern</h3>
                  <p className="text-[10px] font-bold text-teal-600 mt-0">Hewlett Packard Enterprise</p>
                          </div>
                        </div>
              <p className="text-[10px] text-pastel-purple font-mono mb-2">Jan 2021 - June 2021</p>
               <ul className="text-xs text-text-charcoal space-y-0 list-disc list-inside marker:text-teal-300 leading-tight">
                <li>Developed automated testing framework</li>
                <li>Contributed to Kubernetes dashboard UI</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

        {/* Project 1: MindMate */}
                <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] p-6 border-2 border-pink-50 shadow-sticker flex flex-col items-center text-center hover:shadow-sticker-hover transition-all duration-300 group relative overflow-hidden"
        >
           <div className="absolute top-0 left-0 w-full h-2 bg-pink-200/50"></div>
          <div className="w-full aspect-video bg-pink-50 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center">
            <Image
              src="/mindmate-logo.png"
              alt="MindMate pastel AI companion logo"
              fill
              className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              sizes="(min-width: 1024px) 30vw, 80vw"
            />
                        </div>
          <h3 className="font-bold text-xl text-text-charcoal font-heading mb-1">MindMate</h3>
          <p className="text-sm text-text-charcoal/70 mb-3 line-clamp-2">An AI-powered mental health companion.</p>
          <div className="flex gap-2 mt-auto">
             <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-lg font-bold">React</span>
             <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-lg font-bold">AI</span>
        </div>
          <Link href="/projects" className="absolute inset-0" aria-label="View Project"></Link>
          </motion.div>

        {/* Project 2: Ride Share */}
            <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[2rem] p-6 border-2 border-blue-50 shadow-sticker flex flex-col items-center text-center hover:shadow-sticker-hover transition-all duration-300 group relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-200/50"></div>
          <div className="w-full aspect-video bg-blue-50 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center">
            <Image
              src="/ride-share-logo.png"
              alt="Ride Share pastel friendly car logo"
              fill
              className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              sizes="(min-width: 1024px) 30vw, 80vw"
            />
              </div>
          <h3 className="font-bold text-xl text-text-charcoal font-heading mb-1">Ride Share</h3>
          <p className="text-sm text-text-charcoal/70 mb-3 line-clamp-2">Carpooling app for sustainable travel.</p>
          <div className="flex gap-2 mt-auto">
             <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-lg font-bold">Go</span>
             <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-lg font-bold">Docker</span>
          </div>
           <Link href="/projects" className="absolute inset-0" aria-label="View Project"></Link>
        </motion.div>

        {/* Nightstand Card */}
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-[2rem] p-6 border-2 border-yellow-50 shadow-sticker flex flex-col items-center text-center hover:shadow-sticker-hover transition-all duration-300 group"
        >
          <h3 className="font-bold text-lg text-text-charcoal font-heading mb-3 flex items-center gap-2">
             Currently Reading <span className="text-xl">📚</span>
          </h3>
          <div className="relative w-24 h-36 bg-amber-100 rounded-r-md rounded-l-sm shadow-md border-l-4 border-amber-800 mb-3 group-hover:scale-105 transition-transform flex items-center justify-center text-center p-2">
              <span className="font-serif text-amber-900 font-bold text-xs leading-tight">Atomic Habits</span>
                        </div>
           <div className="flex gap-1 justify-center mb-2 text-yellow-400 text-sm">
            <Star fill="currentColor" size={14} />
            <Star fill="currentColor" size={14} />
            <Star fill="currentColor" size={14} />
            <Star fill="currentColor" size={14} />
            <Star fill="currentColor" size={14} />
                        </div>
          <p className="text-xs text-text-charcoal/70 italic">"Tiny changes, remarkable results."</p>
                </motion.div>

        {/* Love Notes */}
                <motion.div
          id="testimonials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="col-span-1 md:col-span-2 bg-[url('/floral-pattern.svg')] bg-pink-50/30 backdrop-blur-md rounded-[2rem] p-8 border-2 border-pink-100 shadow-sticker relative hover:shadow-sticker-hover transition-all duration-300 group cursor-pointer"
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-100/50 rounded-b-xl flex items-center justify-center">
              <div className="w-16 h-1.5 bg-gray-300 rounded-full"></div>
           </div>
          <h2 className="text-2xl font-bold text-text-charcoal font-heading mb-6 flex items-center gap-2">
            <span className="bg-red-100 p-2 rounded-full text-red-500">💌</span> Love Notes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Amey */}
            <div className="bg-[#fff7d1] p-6 rounded-sm shadow-sm transform -rotate-1 hover:rotate-0 transition-transform relative border border-yellow-100/50">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-200/60 rotate-1 shadow-sm"></div>
              <p className="text-gray-700 font-handwriting text-lg mb-4 leading-relaxed">
                "This is someone I trust with everything and they're amazing at what they do!"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center font-bold text-yellow-700 text-xs">A</div>
                <div>
                  <p className="font-bold text-sm text-text-charcoal font-heading">Amey</p>
                  <p className="text-[10px] text-text-charcoal/70 font-sans">Colleague</p>
                </div>
              </div>
            </div>

            {/* Bhushan */}
            <div className="bg-[#e0f2fe] p-6 rounded-sm shadow-sm transform rotate-1 hover:rotate-0 transition-transform relative border border-blue-100/50">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-blue-200/60 -rotate-1 shadow-sm"></div>
              <p className="text-gray-700 font-handwriting text-lg mb-4 leading-relaxed">
                "An innovative person that I can count on for quality and positions."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                 <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700 text-xs">B</div>
                <div>
                  <p className="font-bold text-sm text-text-charcoal font-heading">Bhushan</p>
                   <p className="text-[10px] text-text-charcoal/70 font-sans">Colleague</p>
                  </div>
                        </div>
                      </div>

            {/* Rajasekar */}
            <div className="bg-[#fce7f3] p-6 rounded-sm shadow-sm transform -rotate-1 hover:rotate-0 transition-transform relative border border-pink-100/50 sm:col-span-2 lg:col-span-1">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-pink-200/60 rotate-1 shadow-sm"></div>
              <p className="text-gray-700 font-handwriting text-lg mb-4 leading-relaxed">
                "Reunites teams and discussing ideas and staps together always."
              </p>
              <div className="flex items-center gap-3 mt-auto">
                 <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center font-bold text-pink-700 text-xs">R</div>
                <div>
                  <p className="font-bold text-sm text-text-charcoal font-heading">Rajasekar</p>
                   <p className="text-[10px] text-text-charcoal/70 font-sans">Colleague</p>
                  </div>
              </div>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/navneetha-rajan/details/recommendations/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label="View Recommendations"></a>
          </motion.div>

        {/* Travel Log - Map Card */}
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-[2rem] p-0 border-2 border-blue-50 shadow-sticker flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-sticker-hover transition-all duration-300"
        >
          <div className="absolute inset-0 bg-[url('/map-pattern.svg')] opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10 p-6 w-full h-full flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-3xl mb-3 shadow-sm animate-float">
              <MapPin size={32} />
            </div>
            <h3 className="font-bold text-xl text-text-charcoal font-heading mb-1">Travel Log</h3>
            <p className="text-sm text-text-charcoal/70 mb-2">Collecting memories & magnets.</p>
             <div className="flex items-center gap-1 text-xs font-bold text-blue-400">
                <span>📍 12 Countries</span>
             </div>
          </div>
          <Link href="/travel" className="absolute inset-0" aria-label="View Travel Log"></Link>
          </motion.div>

        {/* Blog Section */}
          <motion.div
          id="blogs"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-[2rem] p-6 border-2 border-purple-100 shadow-sticker flex flex-col items-center text-center relative overflow-hidden group hover:shadow-sticker-hover transition-all duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-purple-200/50"></div>
          <div className="w-full aspect-video bg-purple-50 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
              <BookOpen size={48} className="text-purple-400" />
            </div>
          </div>
          <h3 className="font-bold text-xl text-text-charcoal font-heading mb-1">Journal</h3>
          <p className="text-sm text-text-charcoal/70 mb-3 line-clamp-2">Thoughts, stories, and tech ramblings.</p>
          <div className="flex gap-2 mt-auto">
             <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-lg font-bold">Tech</span>
             <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-lg font-bold">Life</span>
          </div>
          <Link href="/blogs" className="absolute inset-0" aria-label="View Blogs"></Link>
          </motion.div>
        </div>
    </main>
  )
} 
