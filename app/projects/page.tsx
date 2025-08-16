'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "Bookify",
      subtitle: "Personalized Book Recommendations",
      description: "Built a smart recommendation system that helps users discover books they'll love, leveraging data from over 270,000 readers to deliver tailored suggestions and boost user engagement.",
      tech: ["Python", "Machine Learning", "Data Mining", "Recommender Systems"],
      github: "https://github.com/navneetha-rajan/Bookify",
      demo: "https://github.com/navneetha-rajan/Bookify",
      featured: true
    },
    {
      id: 2,
      title: "Ride Share",
      subtitle: "High-Performance Cloud Platform",
      description: "Created a robust, scalable cloud-based ride-sharing platform designed to handle millions of requests seamlessly, ensuring high availability and reliability for users.",
      tech: ["AWS", "Microservices", "Docker", "Load Balancing", "RabbitMQ", "Python", "Flask"],
      github: "https://github.com/navneetha-rajan/Ride-Share-Application",
      demo: "https://github.com/navneetha-rajan/Ride-Share-Application",
      featured: true
    },
    {
      id: 3,
      title: "MindMate",
      subtitle: "Autonomous Mental Wellness Companion",
      description: "Developed a privacy-first AI agent that guides users through reflective journaling, mood analysis, and weekly planning via Socratic dialogue and emotion tracking, enhancing self-awareness over time.",
      tech: ["Python", "LLMs", "LangGraph", "FastAPI", "NLP", "Data Visualization"],
      github: "https://github.com/navneetha-rajan/MindMate",
      demo: "https://github.com/navneetha-rajan/MindMate",
      featured: true
    },
    {
      id: 4,
      title: "Boolean Oracle",
      subtitle: "Intelligent Word Problem Solver",
      description: "Developed an innovative Python tool that automatically solves logic-based word problems, featured in an IEEE publication and presented at the ASIANCON conference.",
      tech: ["Python", "NLP", "Machine Learning", "Logic Programming"],
      github: "https://github.com/navneetha-rajan/Boolean-Oracle",
      demo: "https://github.com/navneetha-rajan/Boolean-Oracle",
      featured: false
    },
    {
      id: 5,
      title: "Event Management System",
      subtitle: "Streamlined Event Platform",
      description: "Developed a streamlined event management platform using Flask and Angular, simplifying event registrations and including personalized recommendations to boost student engagement.",
      tech: ["Flask", "Angular", "Python", "Web Development"],
      github: "https://github.com/navneetha-rajan/event-management-system",
      demo: "https://event-management-system-demo.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Grocery Delivery Mobile App",
      subtitle: "Flutter-based Delivery Platform",
      description: "Created a responsive Flutter app inspired by Instacart, featuring personalized recommendations to enhance user experience and increase order efficiency.",
      tech: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
      github: "https://github.com/navneetha-rajan/grocery-delivery-app",
      demo: "https://grocery-delivery-app-demo.vercel.app",
      featured: false
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-8">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors duration-200 mr-6"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-muted max-w-3xl">
              A collection of my technical projects showcasing expertise in machine learning, 
              cloud architecture, and software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="card-bg rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h2 className="text-xl font-semibold mb-1 text-elegant">
                          {project.title}
                        </h2>
                        <p className="text-sm text-accent font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      {project.featured && (
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-muted text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        className="flex items-center space-x-2 text-muted hover:text-accent transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span className="text-sm">View Code</span>
                      </a>
                      {project.demo !== "#" && (
                        <a 
                          href={project.demo} 
                          className="flex items-center space-x-2 text-muted hover:text-accent transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 