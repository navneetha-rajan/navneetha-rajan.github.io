'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight, Code, Twitter } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { isFeatureEnabled } from './config/features'
import { getFeaturedBlogs } from './data/blogs'
import Navigation from './components/Navigation'

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const projects = [
    {
      title: "MindMate",
      subtitle: "Autonomous Mental Wellness Companion",
      description: "Developed a privacy-first AI agent that guides users through reflective journaling, mood analysis, and weekly planning via Socratic dialogue and emotion tracking, enhancing self-awareness over time.",
      tech: ["Python", "LLMs", "LangChain", "React", "NLP", "Data Visualization"],
      link: "https://github.com/navneetha-rajan/MindMate",
      github: "https://github.com/navneetha-rajan/MindMate",
      blogLink: "/blogs/mindmate"
    },
    {
      title: "Ride Share", 
      subtitle: "High-Performance Cloud Platform",
      description: "Created a robust, scalable cloud-based ride-sharing platform designed to handle millions of requests seamlessly, ensuring high availability and reliability for users.",
      tech: ["AWS", "Microservices", "Docker", "Load Balancing"],
      link: "https://github.com/navneetha-rajan/Ride-Share-Application",
      github: "https://github.com/navneetha-rajan/Ride-Share-Application"
    },
    {
      title: "Bookify",
      subtitle: "Personalized Book Recommendations",
      description: "Built a smart recommendation system that helps users discover books they'll love, leveraging data from over 270,000 readers to deliver tailored suggestions and boost user engagement.",
      tech: ["Python", "Machine Learning", "Data Mining", "Recommender Systems"],
      link: "https://github.com/navneetha-rajan/Bookify",
      github: "https://github.com/navneetha-rajan/Bookify"
    }

  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/navneetha-rajan", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/navneetha-rajan", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/navneetha_rajan", label: "X (Twitter)" },
    { icon: Mail, href: "mailto:connectwithnavneetha08@gmail.com", label: "Email" },
    { icon: Code, href: "https://leetcode.com/u/navneetha_rajan", label: "LeetCode" }
  ]

  const testimonials = [
    {
      name: "Amey Gadgil",
      role: "Senior Engineering Manager",
      company: "SIXT",
      text: "Navneetha consistently delivers scalable technical solutions with outstanding ownership and passion. Her exceptional communication skills and collaborative approach have significantly enhanced project execution and team dynamics.",
      linkedin: "https://www.linkedin.com/in/amey-gadgil"
    },
    {
      name: "Rajasekar Venkatesan",
      role: "Senior Software Engineer",
      company: "SIXT",
      text: "Navneetha stands out for her genuine curiosity, exceptional skill in designing scalable solutions, and professional collaboration. She rapidly evolved from a new graduate into a confident and independent contributor, consistently leveraging innovative technologies like GenAI to solve complex problems efficiently.",
      linkedin: "https://www.linkedin.com/in/rajasekar-venkatesan"
    },
    {
      name: "Bhushan Kakulte",
      role: "Staff Software Engineer",
      company: "SIXT",
      text: "Navneetha combines impressive technical expertise in Java and Spring Boot with outstanding dedication and teamwork. She consistently delivers high-quality results and strongly supports colleagues, making her an invaluable team member.",
      linkedin: "https://www.linkedin.com/in/bhushan-kakulte"
    },
    {
      name: "Mithun Shivaramaiah",
      role: "Software Engineer",
      company: "Copart",
      text: "Navneetha demonstrates exceptional skills in backend development, particularly Java Spring Boot. Her ability to write clean, efficient code and contribute positively to team projects significantly elevates organizational success.",
      linkedin: "https://www.linkedin.com/in/mithun-shivaramaiah"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-16">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Photo */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg p-1">
                  <img 
                    src="/neetz-profile.png" 
                    alt="Navneetha Rajan" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <h1 className="mb-8">
              Hi, I'm <span className="gradient-text">Navneetha Rajan</span>
            </h1>
            <p className="text-large text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            I love building technology solutions that work smoothly, scale easily, and genuinely help people, always looking for ways to make things faster and better. Beyond work, I thrive on adventure, travel, and genuine connections. I like sharing stories, exploring new places, and learning from diverse experiences.
            </p>
            <p className="text-large text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's connect and chat about technology, travel, or your next big idea!
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors duration-75"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + index * 0.1,
                    hover: { duration: 0.1 }
                  }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>About</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-large text-muted mb-6">
                  I have a strong background in computer science and software engineering, specializing in distributed systems, cloud computing, and microservices. At SIXT, I optimized reservation processes serving millions globally, significantly reducing latency and boosting conversions.
                </p>
                <p className="text-large text-muted">
                  I'm driven by the excitement of building robust systems that leverage big data and efficient information management. I enjoy solving complex real-world problems, creating scalable solutions, and delivering meaningful impact through innovative technology.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-accent-bold">⚡ Scalable Backend & Microservices Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-accent-bold">☕ Java, Spring Boot & Distributed Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-accent-bold">🚀 Cloud Engineering (AWS, Docker, Kubernetes)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-accent-bold">🤖 Machine Learning & AI Automation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Experience</h2>
            <div className="space-y-8">
              <motion.div
                className="border-l-2 border-accent pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3>Machine Learning Engineer</h3>
                      <span className="text-muted text-sm">April 2025 - Present</span>
                    </div>
                    <p className="text-accent-medium mb-2">Arizona State University</p>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <img src="/asu-logo.png" alt="Arizona State University" className="w-16 h-16 object-contain" />
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Building an automated AI-driven pipeline leveraging Google Maps APIs and visual LLM models to digitally transform and optimize the design layouts of 200+ campus parking lots, enhancing operational efficiency and accuracy.
                </p>
              </motion.div>

              <motion.div
                className="border-l-2 border-accent pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3>Software Development Engineer II</h3>
                      <span className="text-muted text-sm">Aug 2021 - Jul 2024</span>
                    </div>
                    <p className="text-accent-medium mb-2">SIXT Research and Development</p>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <img src="/sixt-logo.png" alt="SIXT" className="w-16 h-16 object-contain" />
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Designed and delivered scalable microservices, modernized legacy architectures, enhanced platform reliability, and created personalized customer experiences, significantly impacting overall product success.
                </p>
              </motion.div>

              <motion.div
                className="border-l-2 border-accent pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3>Software Engineering Intern</h3>
                      <span className="text-muted text-sm">Feb 2021 - Jul 2021</span>
                    </div>
                    <p className="text-accent-medium mb-2">Hewlett Packard Enterprise</p>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <img src="/hpe-logo.png" alt="Hewlett Packard Enterprise" className="w-16 h-16 object-contain" />
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Developed automated web crawlers and testing frameworks to enhance software quality and efficiency, collaborating closely with cross-functional teams to deliver robust solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2>Projects</h2>
              <Link 
                href="/projects" 
                className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
              >
                View more projects →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative card-bg rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                                              <h3 className="mb-1 group-hover:text-accent transition-colors duration-200">{project.title}</h3>
                        <p className="text-accent-medium mb-2 group-hover:text-white transition-colors duration-200">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded group-hover:bg-accent group-hover:text-white transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href={project.github} 
                        className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Github →
                      </a>
                      {project.link && project.link !== project.github && (
                        <a 
                          href={project.link} 
                          className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                    {project.blogLink && (
                      <div>
                        <Link 
                          href={project.blogLink}
                          className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200"
                        >
                          Read more →
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      {isFeatureEnabled('BLOG_ENABLED') && (
        <section id="blogs" className="py-20 section-padding bg-sky-light/10">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-12">
                <h2>Blogs</h2>
                <Link 
                  href="/blogs" 
                  className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
                >
                  View all posts →
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFeaturedBlogs().map((post, index) => (
                  <Link 
                    key={index}
                    href={`/blogs/${post.id}`}
                    className="group"
                  >
                    <motion.article
                      className="card-bg rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-muted">{post.date}</span>
                          <span className="text-sm text-muted">{post.readTime}</span>
                        </div>
                        <h3 className="mb-3 group-hover:text-accent transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-muted mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200 mt-auto">
                          Read more →
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Education Section */}
      <section id="education" className="py-20 section-padding bg-sky-light/20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Education</h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <motion.div
                className="card-bg rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3>Master of Science</h3>
                    <h4>Information Technology</h4>
                  </div>
                  <span className="text-accent font-bold text-lg">4.22 / 4.0 GPA</span>
                </div>
                <p className="text-accent font-medium mb-2 text-elegant">Arizona State University, Tempe, AZ</p>
                <p className="text-muted text-sm mb-3">Aug 2024 - May 2026</p>
                <p className="text-muted text-sm">Coursework: Information Systems Management, Analyzing Big Data and AI, Data in the Cloud</p>
              </motion.div>

              <motion.div
                className="card-bg rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                                      <h3>Bachelor of Technology</h3>
                    <h4>Computer Science and Engineering</h4>
                </div>
                <p className="text-accent font-medium mb-2 text-elegant">PES University, Bengaluru, India</p>
                <p className="text-muted text-sm mb-3">Aug 2017 - May 2021</p>
                <p className="text-muted text-sm">Coursework: Operating Systems, Data Structures and Algorithms, Object-Oriented Design</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* From My Colleagues Section */}
      <section id="testimonials" className="py-20 section-padding bg-sky-light/10">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center">From My Colleagues</h2>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="card-bg rounded-lg p-6 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="mb-4">
                      <p className="text-muted italic text-base leading-relaxed text-center">"{testimonial.text}"</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-center flex-1">
                        <h4>{testimonial.name}</h4>
                        <p className="text-sm text-accent">{testimonial.role}</p>
                        <p className="text-sm text-muted">{testimonial.company}</p>
                      </div>
                      <motion.a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors duration-200 ml-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Let's Connect</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or discuss potential roles!
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="mailto:connectwithnavneetha08@gmail.com"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Email Me</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/navneetha-rajan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-sky-medium/20">
        <div className="container-max text-center">
          <p className="text-muted text-sm">
            © 2025 Navneetha Rajan
          </p>
        </div>
      </footer>
    </main>
  )
} 