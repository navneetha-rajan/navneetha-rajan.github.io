'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code, Twitter } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { isFeatureEnabled } from './config/features'
import { getFeaturedBlogs } from './data/blogs'
import Navigation from './components/Navigation'

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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
      text: "Consistently demonstrated technical expertise in delivering scalable solutions and building critical integrations. Passionate about problem solving, takes ownership in driving key projects to completion while collaborating effectively across teams. An outstanding engineer with exceptional work ethic, professionalism, and technical abilities, making a valuable asset to any high-performing engineering team.",
      linkedin: "https://www.linkedin.com/in/amey-gadgil"
    },
    {
      name: "Bhushan Kakulte",
      role: "Staff Software Engineer",
      company: "SIXT",
      text: "Combines impressive technical expertise in Java and Spring Boot with dedication and teamwork. Consistently delivers high-quality, scalable systems while supporting colleagues and contributing to a positive team culture. Balances technical excellence with collaboration, making a dependable and impactful team member.",
      linkedin: "https://www.linkedin.com/in/bhushan-kakulte"
    },
    {
      name: "Rajasekar Venkatesan",
      role: "Senior Software Engineer",
      company: "SIXT",
      text: "Stands out for genuine curiosity and the ability to quickly grasp complex systems. Breaks down business requirements into scalable, reliable solutions and has evolved into a strong, independent contributor. Actively leverages GenAI tools to solve challenges efficiently while maintaining high code quality and fostering collaboration within the team.",
      linkedin: "https://www.linkedin.com/in/rajasekar-venkatesan"
    },
    {
      name: "Mithun Shivaramiah",
      role: "Software Engineer",
      company: "SIXT",
      text: "Demonstrates exceptional backend development skills, particularly in Java Spring Boot, building robust and efficient systems that meet high scalability demands. Writes clean, maintainable code and contributes positively to team projects, significantly boosting productivity and ensuring consistent delivery of organizational goals.",
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
                  className="group flex flex-col items-center space-y-2 text-muted hover:text-foreground transition-colors duration-200"
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
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                    {social.label}
                  </span>
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
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/10"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 - Mobile: Full width, Desktop: Left Side */}
                <motion.div
                  className="relative flex flex-col lg:flex-row lg:items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                    <div className="bg-card-bg rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="mb-2">Machine Learning Engineer</h3>
                          <p className="text-accent-medium mb-2">Arizona State University</p>
                          <p className="text-muted mb-2">Tempe, AZ</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 text-right">
                          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 mb-2">
                            April 2025 - Present
                          </span>
                          <div className="flex justify-end">
                            <img src="/asu-logo.png" alt="Arizona State University" className="w-12 h-12 object-contain" />
                          </div>
                        </div>
                      </div>
                      <ul className="text-muted leading-relaxed space-y-2">
                        <li>• Designed an AI pipeline that identifies parking lot layouts from satellite imagery across 200+ campus lots.</li>
                        <li>• Automated slot detection and SVG mapping, cutting manual work by 100+ hours per project.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
                    {/* Outer glow ring with bright star */}
                    <motion.div
                      className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 0.9, 1.2, 1],
                        opacity: [0.3, 0.8, 0.2, 0.9, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Bright star icon */}
                      <span className="text-accent text-lg font-bold">★</span>
                    </motion.div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 lg:pl-8"></div>
                </motion.div>

                {/* Item 2 - Mobile: Full width, Desktop: Right Side */}
                <motion.div
                  className="relative flex flex-col lg:flex-row lg:items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0"></div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
                    {/* Outer glow ring with bright star */}
                    <motion.div
                      className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 0.9, 1.2, 1],
                        opacity: [0.3, 0.8, 0.2, 0.9, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                      }}
                    >
                      {/* Bright star icon */}
                      <span className="text-accent text-lg font-bold">★</span>
                    </motion.div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="bg-card-bg rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="mb-2">Software Development Engineer II</h3>
                          <p className="text-accent-medium mb-2">SIXT Research and Development</p>
                          <p className="text-muted mb-2">Bengaluru, India</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 text-right">
                          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 mb-2">
                            Aug 2021 - Jul 2024
                          </span>
                          <div className="flex justify-end">
                            <img src="/sixt-logo.png" alt="SIXT" className="w-12 h-12 object-contain" />
                          </div>
                        </div>
                      </div>
                      <ul className="text-muted leading-relaxed space-y-2">
                        <li>• Developed a microservice for tailored offer recommendations and personalized pricing, driving a 20% uplift in booking completion rates and 18% revenue growth.</li>
                        <li>• Led the migration from a PHP/Golang monolith to Java microservices, improving response times by 65%.</li>
                        <li>• Rolled out critical features to the ZEN platform, enhancing UX for 8M+ monthly users in 110+ countries.</li>
                        <li>• Developed a fault-tolerant booking pipeline processing 1M+ reservations/month with 90% less downtime.</li>
                        <li>• Built a microservice for auditing the rental lifecycle, delivering standardized activity history for 10M+ records.</li>
                        <li>• Integrated a pickup/drop-off recommendation model, increasing conversion rate by 22%.</li>
                        <li>• <strong>Awarded Most Valuable Player</strong> for game-changing contributions, teamwork, and spirit towards the flagship product's successful re-launch, increasing revenue by 22%.</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Item 3 - Mobile: Full width, Desktop: Left Side */}
                <motion.div
                  className="relative flex flex-col lg:flex-row lg:items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                    <div className="bg-card-bg rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="mb-2">Software Engineering Intern</h3>
                          <p className="text-accent-medium mb-2">Hewlett Packard Enterprise</p>
                          <p className="text-muted mb-2">Bengaluru, India</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 text-right">
                          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 mb-2">
                            Feb 2021 - Jul 2021
                          </span>
                          <div className="flex justify-end">
                            <img src="/hpe-logo.png" alt="Hewlett Packard Enterprise" className="w-12 h-12 object-contain" />
                          </div>
                        </div>
                      </div>
                      <ul className="text-muted leading-relaxed space-y-2">
                        <li>• Created a pipeline to convert 40K+ unstructured records into clean datasets, saving 100+ hours in reporting work.</li>
                        <li>• Built a Selenium-based crawler scanning 10K+ pages/day for broken links and faulty images.</li>
                        <li>• Automated content translation & QA, reducing manual checks by 82%.</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
                    {/* Outer glow ring with bright star */}
                    <motion.div
                      className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 0.9, 1.2, 1],
                        opacity: [0.3, 0.8, 0.2, 0.9, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6
                      }}
                    >
                      {/* Bright star icon */}
                      <span className="text-accent text-lg font-bold">★</span>
                    </motion.div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 lg:pl-8"></div>
                </motion.div>
              </div>
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
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/10"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 - Mobile: Full width, Desktop: Left Side */}
                <motion.div
                  className="relative flex flex-col lg:flex-row lg:items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                    <div className="bg-card-bg rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-accent-medium mb-2">Arizona State University</h3>
                          <p className="mb-2">Master of Science in Information Technology</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 text-right">
                          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 mb-2">
                            Aug 2024 - May 2026
                          </span>
                          <div className="text-accent font-bold text-sm">4.22/4.0 GPA</div>
                        </div>
                      </div>
                      <ul className="text-muted leading-relaxed space-y-2">
                        <li>• Information Systems Management</li>
                        <li>• Analyzing Big Data and AI</li>
                        <li>• Data in the Cloud</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
                    {/* Outer glow ring with bright star */}
                    <motion.div
                      className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 0.9, 1.2, 1],
                        opacity: [0.3, 0.8, 0.2, 0.9, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Bright star icon */}
                      <span className="text-accent text-lg font-bold">★</span>
                    </motion.div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 lg:pl-8"></div>
                </motion.div>

                {/* Item 2 - Mobile: Full width, Desktop: Right Side */}
                <motion.div
                  className="relative flex flex-col lg:flex-row lg:items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0"></div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
                    {/* Outer glow ring with bright star */}
                    <motion.div
                      className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 0.9, 1.2, 1],
                        opacity: [0.3, 0.8, 0.2, 0.9, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      {/* Bright star icon */}
                      <span className="text-accent text-lg font-bold">★</span>
                    </motion.div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="bg-card-bg rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-accent-medium mb-2">PES University</h3>
                          <p className="mb-2">Bachelor of Technology in Computer Science and Engineering</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 text-right">
                          <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 mb-2">
                            Aug 2017 - May 2021
                          </span>
                        </div>
                      </div>
                      <ul className="text-muted leading-relaxed space-y-2">
                        <li>• Operating Systems</li>
                        <li>• Data Structures and Algorithms</li>
                        <li>• Object-Oriented Design</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
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
            <div className="max-w-4xl mx-auto space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="card-bg rounded-lg p-8 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6">
                    <p className="text-muted italic text-lg leading-relaxed text-center">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <h4 className="text-xl">{testimonial.name}</h4>
                      <p className="text-accent font-medium">{testimonial.role}</p>
                      <p className="text-muted">{testimonial.company}</p>
                    </div>
                    <motion.a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors duration-200 ml-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
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