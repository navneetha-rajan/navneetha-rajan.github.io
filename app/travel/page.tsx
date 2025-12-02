'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckSquare, Square, Plane, ArrowLeft, Check } from 'lucide-react'
import Navigation from '../components/Navigation'
import Link from 'next/link'

export default function TravelPage() {
  const visitedPlaces = [
    { id: 1, name: "San Francisco", date: "2023", image: "🌁", color: "bg-blue-50" },
    { id: 2, name: "New York", date: "2022", image: "🗽", color: "bg-gray-50" },
    { id: 3, name: "London", date: "2021", image: "💂", color: "bg-red-50" },
    { id: 4, name: "Paris", date: "2021", image: "🥖", color: "bg-yellow-50" },
    { id: 5, name: "Dubai", date: "2020", image: "🏜️", color: "bg-orange-50" },
    { id: 6, name: "Singapore", date: "2019", image: "🦁", color: "bg-red-50" },
    { id: 7, name: "Bangalore", date: "2018", image: "🍛", color: "bg-green-50" },
    { id: 8, name: "Kerala", date: "2017", image: "🌴", color: "bg-green-100" },
  ]

  const bucketList = [
    { id: 1, text: "Visit Japan for Cherry Blossoms", checked: false },
    { id: 2, text: "See Northern Lights in Iceland", checked: false },
    { id: 3, text: "Road trip along Pacific Coast", checked: true },
    { id: 4, text: "Backpack through Europe", checked: true },
    { id: 5, text: "Skydiving in Dubai", checked: true },
  ]

  return (
    <main className="min-h-screen pb-32 bg-transparent">
      <Navigation />
      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-handwriting text-4xl text-text-charcoal">My Adventures 🗺️</h1>
        </div>
        <div className="space-y-8">
          {/* Map Section */}
          <motion.div className="bg-blue-50/50 rounded-[2rem] p-8 border border-blue-100 relative min-h-[300px] flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/map-pattern.svg')] opacity-10"></div>
            {/* Stylized Map Pins */}
            <motion.div 
               animate={{ y: [0, -10, 0] }} 
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute top-1/3 left-1/4 text-2xl"
               title="USA"
            >
               📍
            </motion.div>
            <motion.div 
               animate={{ y: [0, -8, 0] }} 
               transition={{ repeat: Infinity, duration: 4, delay: 1 }}
               className="absolute top-1/2 right-1/3 text-2xl"
               title="Europe"
            >
               📍
            </motion.div>
             <motion.div 
               animate={{ y: [0, -12, 0] }} 
               transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
               className="absolute bottom-1/3 right-1/4 text-2xl"
               title="India"
            >
               📍
            </motion.div>
            
            <h2 className="text-3xl font-heading text-blue-800 relative z-10 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-white">
              Exploring the World, One City at a Time 🌍
            </h2>
            <p className="mt-4 text-blue-600/80 font-handwriting text-xl relative z-10">
              "Not all those who wander are lost."
            </p>
          </motion.div>

          {/* Bottom Grid: Photos + Bucket List */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Photo Grid */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {visitedPlaces.map((place, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-3 pb-8 rounded-sm shadow-md rotate-1 hover:rotate-0 hover:scale-110 transition-all duration-300 border border-gray-100 relative group"
                >
                   <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-red-200/50 rotate-1 group-hover:rotate-0 transition-transform"></div>
                  <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden mb-2 flex items-center justify-center text-4xl">
                    {place.image}
                  </div>
                  <p className="font-handwriting text-center text-gray-800 text-lg leading-none">{place.name}</p>
                  <p className="text-[10px] text-center text-gray-400 font-mono mt-1 uppercase tracking-widest">{place.date}</p>
                </motion.div>
              ))}
            </div>
            {/* Bucket List */}
            <motion.div className="lg:col-span-1 bg-yellow-50 rounded-[2rem] p-6 border border-yellow-100 shadow-sticker h-full relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 -rotate-1 shadow-sm"></div>
              <h3 className="font-heading text-2xl text-yellow-800 mb-6 text-center mt-2">Bucket List 📝</h3>
              <ul className="space-y-3">
                {bucketList.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 group cursor-default">
                    <span className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors ${item.checked ? 'bg-green-400 border-green-400 text-white' : 'border-gray-300 group-hover:border-yellow-400'}`}>
                      {item.checked && <Check size={12} strokeWidth={4} />}
                    </span>
                    <span className={`font-handwriting text-lg ${item.checked ? 'line-through text-gray-400' : ''}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
