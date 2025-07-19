'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'

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
            <p className="text-xl sm:text-2xl text-muted mb-8 max-w-2xl mx-auto text-elegant leading-relaxed">
              Software Development Engineer with expertise in microservices, cloud technologies, and full-stack development. Based in Tempe, Arizona.
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
                  I'm a Software Development Engineer with over 3 years of experience building scalable microservices and cloud-native applications. 
                  Currently pursuing my Master's in Information Technology at Arizona State University with a perfect 4.0 GPA.
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  I specialize in Java, Spring Boot, AWS, and microservices architecture. My experience includes optimizing systems 
                  that serve millions of users and leading teams to deliver impactful solutions.
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
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="card-bg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-elegant">Master of Science in Information Technology</h3>
                </div>
                <p className="text-accent font-medium mb-2 text-elegant">Arizona State University, Tempe</p>
                <p className="text-muted text-sm mb-3">Expected Graduation: Dec 2025</p>
                <p className="text-muted text-sm">Coursework: Information Systems Management, Analyzing Big Data</p>
              </motion.div>

              <motion.div
                className="card-bg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-elegant">Bachelor of Technology in Computer Science</h3>
                </div>
                <p className="text-accent font-medium mb-2 text-elegant">PES University, Bengaluru</p>
                <p className="text-muted text-sm mb-3">Aug 2017 - Jun 2021</p>
                <p className="text-muted text-sm">Coursework: Operating Systems, Data Structures and Algorithms, Object-Oriented Design</p>
              </motion.div>
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
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold">Software Development Engineer II</h3>
                  <span className="text-muted text-sm">Oct 2023 - Jul 2024</span>
                </div>
                <p className="text-accent font-medium mb-2">SIXT Research and Development India</p>
                <ul className="text-muted space-y-1 text-sm">
                  <li>• Optimized reservation processes with resilient microservices, reducing latency by 25% and impacting 8M+ monthly users</li>
                  <li>• Developed robust rebooking pricing system resulting in 20% increase in conversions and 8% revenue growth</li>
                  <li>• Led migration from legacy monolithic system to modern Java stack, achieving 65% improvement in response time</li>
                </ul>
              </motion.div>

              <motion.div
                className="border-l-2 border-accent pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold">Software Development Engineer I</h3>
                  <span className="text-muted text-sm">Aug 2021 - Oct 2023</span>
                </div>
                <p className="text-accent font-medium mb-2">SIXT Research and Development India</p>
                <ul className="text-muted space-y-1 text-sm">
                  <li>• Built microservice for auditing rental lifecycle, providing comprehensive activity history for 10M+ records</li>
                  <li>• Developed customer-specific pickup/drop-off recommendations leading to 10% increase in conversion rates</li>
                  <li>• Awarded Most Valuable Player for contributions to flagship product relaunch that increased revenue by 22%</li>
                </ul>
              </motion.div>

              <motion.div
                className="border-l-2 border-accent pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
                  <span className="text-muted text-sm">Feb 2021 - Jul 2021</span>
                </div>
                <p className="text-accent font-medium mb-2">Hewlett Packard Enterprise</p>
                <ul className="text-muted space-y-1 text-sm">
                  <li>• Developed automated web crawler using Python and Selenium for image validation and content translation</li>
                </ul>
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
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <a href={project.github} className="text-muted hover:text-foreground">
                        <Github size={16} />
                      </a>
                      <a href={project.link} className="text-muted hover:text-foreground">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-muted/20 text-muted px-2 py-1 rounded"
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
              <a 
                href="/blog" 
                className="text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
              >
                View all posts →
              </a>
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
                    <a 
                      href="#" 
                      className="text-accent hover:text-accent/80 font-medium text-sm group-hover:underline transition-all duration-200"
                    >
                      Read more →
                    </a>
                  </div>
                </motion.article>
              ))}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <motion.a
              href="mailto:nrajan7@asu.edu"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Email Me</span>
              </motion.a>
              <motion.a
                href="tel:+16027514983"
                className="inline-flex items-center space-x-2 border border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>+1 (602) 751-4983</span>
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