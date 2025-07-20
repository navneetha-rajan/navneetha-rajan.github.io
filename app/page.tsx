'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Asset Management System",
      description: "Led the development of an asset management system, overseeing the full SDLC from requirements to deployment. Designed and implemented features like asset registration, tracking, and reporting.",
      tech: ["Java", "Spring Boot", "Microservices", "AWS"],
      link: "#",
      github: "#"
    },
    {
      title: "Boolean Oracle", 
      description: "Built a tool using program synthesis in Python to evaluate the truth values of propositional word problems in natural language with 96% accuracy, leading to an IEEE publication.",
      tech: ["Python", "TensorFlow", "NLP", "Machine Learning"],
      link: "#",
      github: "#"
    },
    {
      title: "Ride Share Platform",
      description: "Developed and deployed a platform application like Uber for ride-sharing on a scaled AWS EC2 instance. Designed master-slave architecture using RabbitMQ and ZooKeeper.",
      tech: ["AWS", "RabbitMQ", "ZooKeeper", "Microservices"],
      link: "#",
      github: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/navneetha08", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/navneetha-rajan", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nrajan7@asu.edu", label: "Email" }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding">
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
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-elegant">
              Hi, I'm <span className="gradient-text">Navneetha Rajan</span>
            </h1>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto text-elegant leading-relaxed">
              I'm passionate about crafting scalable, impactful technology solutions, always seeking ways to optimize and enhance system performance. Beyond coding, I thrive on adventure, travel, and genuine connections - sharing stories, exploring new places, and learning from diverse experiences.
            </p>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto text-elegant leading-relaxed">
              Let's connect and chat about technology, travel, or your next big idea!
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">About</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  I have a strong background in computer science and software engineering, specializing in distributed systems, cloud computing, and microservices. At SIXT Research and Development India, I optimized reservation processes serving millions globally, significantly reducing latency and boosting conversions.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  I'm driven by the excitement of building robust systems that leverage big data and efficient information management. I enjoy solving complex real-world problems, creating scalable solutions, and delivering meaningful impact through innovative technology.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted">Microservices & Cloud Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted">Java & Spring Boot</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted">AWS & DevOps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted">Machine Learning & Data Science</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
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
                      <h3 className="text-xl font-semibold">Machine Learning Engineer</h3>
                      <span className="text-muted text-sm">April 2025 - Present</span>
                    </div>
                    <p className="text-accent font-medium mb-2">Arizona State University</p>
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
                      <h3 className="text-xl font-semibold">Software Development Engineer II</h3>
                      <span className="text-muted text-sm">Aug 2021 - Jul 2024</span>
                    </div>
                    <p className="text-accent font-medium mb-2">SIXT Research and Development India</p>
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
                      <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
                      <span className="text-muted text-sm">Feb 2021 - Jul 2021</span>
                    </div>
                    <p className="text-accent font-medium mb-2">Hewlett Packard Enterprise</p>
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
      <section className="py-20 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
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
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a href={project.github} className="text-muted hover:text-accent transition-colors duration-200">
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 section-padding bg-sky-light/10">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Blog</h2>
              <Link 
                href="/blog" 
                className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
              >
                View all posts →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Building Scalable Microservices with Spring Boot",
                  excerpt: "A deep dive into designing and implementing microservices architecture using Spring Boot, covering best practices for scalability and maintainability.",
                  date: "Dec 15, 2024",
                  readTime: "8 min read",
                  tags: ["Microservices", "Spring Boot", "Architecture"],
                  featured: true
                },
                {
                  title: "Optimizing AWS Infrastructure for Cost and Performance",
                  excerpt: "Practical strategies for reducing AWS costs while maintaining high performance, including auto-scaling, caching, and resource optimization techniques.",
                  date: "Nov 28, 2024",
                  readTime: "6 min read",
                  tags: ["AWS", "DevOps", "Cost Optimization"],
                  featured: false
                },
                {
                  title: "The Future of Cloud-Native Development",
                  excerpt: "Exploring emerging trends in cloud-native development, from serverless architectures to container orchestration and beyond.",
                  date: "Nov 10, 2024",
                  readTime: "10 min read",
                  tags: ["Cloud Native", "Trends", "Technology"],
                  featured: false
                }
              ].map((post, index) => (
                <motion.article
                  key={index}
                  className="group card-bg rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted">{post.date}</span>
                      <span className="text-sm text-muted">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-muted mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href="/blog" 
                      className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200"
                    >
                      Read more →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 section-padding bg-sky-light/20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education</h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <motion.div
                className="card-bg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-elegant">Master of Science</h3>
                    <h4 className="text-lg font-medium text-elegant">Information Technology</h4>
                  </div>
                  <span className="text-accent font-bold text-lg">4.22 / 4.0 GPA</span>
                </div>
                <p className="text-accent font-medium mb-2 text-elegant">Arizona State University, Tempe</p>
                <p className="text-muted text-sm mb-3">Aug 2024 - May 2026</p>
                <p className="text-muted text-sm">Coursework: Information Systems Management, Analyzing Big Data and AI, Data in the Cloud</p>
              </motion.div>

              <motion.div
                className="card-bg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-elegant">Bachelor of Technology</h3>
                  <h4 className="text-lg font-medium text-elegant">Computer Science and Engineering</h4>
                </div>
                <p className="text-accent font-medium mb-2 text-elegant">PES University, Bengaluru</p>
                <p className="text-muted text-sm mb-3">Aug 2017 - May 2021</p>
                <p className="text-muted text-sm">Coursework: Operating Systems, Data Structures and Algorithms, Object-Oriented Design</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or discuss potential roles!
            </p>
            <div className="flex justify-center">
              <motion.a
                href="mailto:nrajan7@asu.edu"
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Email Me</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-sky-medium/30">
        <div className="container-max text-center">
          <p className="text-muted">
            © 2024 Navneetha Rajan. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
} 