'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedBlogs } from './data/blogs'
import Navigation from './components/Navigation'

/* ── Data ── */

const socialLinks = [
  { icon: Github, href: 'https://github.com/navneetha-rajan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/navneetha-rajan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:navneetharajan08@gmail.com', label: 'Email' },
]

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Arizona State University',
    date: 'Apr 2025 — Present',
    location: 'Tempe, AZ',
    impact: 'AI pipeline for parking lot SVG generation · 200+ campus lots · 100+ hours saved',
    mvp: false,
  },
  {
    title: 'Software Development Engineer II',
    company: 'SIXT Research & Development',
    date: 'Aug 2021 — Jul 2024',
    location: 'Bengaluru, India',
    impact: '20% booking uplift · 65% latency reduction · 8M+ users · 1M+ reservations/month',
    mvp: true,
  },
  {
    title: 'Software Engineering Intern',
    company: 'Hewlett Packard Enterprise',
    date: 'Feb 2021 — Jul 2021',
    location: 'Bengaluru, India',
    impact: '40K+ records automated · 82% reduction in manual QA',
    mvp: false,
  },
]

const education = [
  {
    degree: 'MS Information Technology — AI Concentration',
    institution: 'Arizona State University',
    date: 'Aug 2024 — May 2026',
    detail: 'GPA 4.0',
  },
  {
    degree: 'BTech Computer Science & Engineering',
    institution: 'PES University',
    date: 'Aug 2017 — May 2021',
    detail: '',
  },
]

const projects = [
  {
    title: 'Relay',
    description: 'Real-time chat application with WebSocket messaging, JWT auth, typing indicators, read receipts, and message search.',
    tech: ['FastAPI', 'React', 'SQLite', 'WebSockets', 'JWT'],
    github: 'https://github.com/navneetha-rajan/relay-chat-room',
  },
  {
    title: 'MindMate',
    description: 'Privacy-first AI agent for reflective journaling and mood tracking. Socratic dialogue meets emotion intelligence.',
    tech: ['Python', 'LLMs', 'LangChain', 'React', 'NLP'],
    github: 'https://github.com/navneetha-rajan/MindMate',
    blogLink: '/blogs/mindmate',
  },
  {
    title: 'Ride Share',
    description: 'Cloud-native ride-sharing platform engineered for millions of concurrent requests with fault-tolerant microservices.',
    tech: ['AWS', 'Microservices', 'Docker', 'Load Balancing'],
    github: 'https://github.com/navneetha-rajan/Ride-Share-Application',
  },
]

const testimonials = [
  {
    name: 'Amey Gadgil',
    role: 'Senior Engineering Manager · SIXT',
    text: 'Consistently demonstrated technical expertise in delivering scalable solutions and building critical integrations. An outstanding engineer with exceptional work ethic, professionalism, and technical abilities.',
  },
  {
    name: 'Bhushan Kakulte',
    role: 'Staff Software Engineer · SIXT',
    text: 'Combines impressive technical expertise in Java and Spring Boot with dedication and teamwork. Balances technical excellence with collaboration, making a dependable and impactful team member.',
  },
  {
    name: 'Rajasekar Venkatesan',
    role: 'Senior Software Engineer · SIXT',
    text: 'Stands out for genuine curiosity and the ability to quickly grasp complex systems. Actively leverages GenAI tools to solve challenges efficiently while maintaining high code quality.',
  },
  {
    name: 'Mithun Shivaramiah',
    role: 'Software Engineer · SIXT',
    text: 'Demonstrates exceptional backend development skills in Java Spring Boot, building robust and efficient systems that meet high scalability demands.',
  },
]

const aboutTags = ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Python', 'Kubernetes', 'FastAPI', 'Docker']

/* ── Component ── */

export default function Home() {
  const [slide, setSlide] = useState(0)
  const blogs = getFeaturedBlogs()

  /* Intersection Observer for scroll animations */
  useEffect(() => {
    const els = document.querySelectorAll('.animate')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* Testimonial carousel with seamless loop */
  const [slideTransition, setSlideTransition] = useState(true)

  const goToSlide = useCallback((i: number) => {
    setSlideTransition(true)
    setSlide(i)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setSlideTransition(true)
      setSlide((p) => p + 1)
    }, 3000)
    return () => clearInterval(t)
  }, [slide])

  useEffect(() => {
    if (slide === testimonials.length) {
      const timeout = setTimeout(() => {
        setSlideTransition(false)
        setSlide(0)
      }, 620)
      return () => clearTimeout(timeout)
    }
  }, [slide])

  /* Shared inline-style helpers */
  const mono = (size: number, color: string, ls = 0) => ({
    fontFamily: '"JetBrains Mono", monospace', fontSize: `${size}px`, color, letterSpacing: ls ? `${ls}px` : undefined,
  } as React.CSSProperties)

  const dm = (size: number, weight: number, color: string) => ({
    fontFamily: '"DM Sans", sans-serif', fontSize: `${size}px`, fontWeight: weight, color,
  } as React.CSSProperties)

  const pf = (size: number, weight: number, color: string, italic = false) => ({
    fontFamily: '"Playfair Display", serif', fontSize: `${size}px`, fontWeight: weight, color, fontStyle: italic ? 'italic' : undefined,
  } as React.CSSProperties)

  /* Card style for experience / education */
  const cardStyle: React.CSSProperties = {
    background: '#120F15',
    border: '0.5px solid #1E1B22',
    borderLeft: '2px solid #B08090',
    borderRadius: '0 8px 8px 0',
    padding: '20px 24px',
    marginBottom: '16px',
    transition: 'border-left-color 0.2s ease, background 0.2s ease, opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
  }

  const onCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderLeftColor = '#C9A0AC'
    e.currentTarget.style.background = '#150F18'
  }
  const onCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderLeftColor = '#B08090'
    e.currentTarget.style.background = '#120F15'
  }

  return (
    <>
      <Navigation />

      {/* Content column */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          background: 'var(--color-bg-content)',
          borderLeft: '0.5px solid var(--color-border-subtle)',
          borderRight: '0.5px solid var(--color-border-subtle)',
          minHeight: '100vh',
        }}
      >
        {/* ─── HERO ─── */}
        <section
          id="hero"
          style={{
            padding: '64px 56px 48px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ ...mono(14, '#6B8CAE', 2), marginBottom: '20px' }}
            >
              Software Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ ...pf(52, 700, '#F2EEF5'), lineHeight: 1.1, margin: 0 }}
            >
              Navneetha Rajan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ ...pf(28, 400, '#F2EEF5'), marginTop: '8px', lineHeight: 1.3 }}
            >
              Building systems that <span style={{ color: '#C9A0AC' }}>scale.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ ...pf(15, 400, '#C9A0AC', true), marginTop: '16px', lineHeight: 1.8 }}
            >
              Curious about the why.<br />
              Energised by hard things.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              style={{ marginTop: '28px' }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-1.5"
                  style={{
                    ...mono(12, '#6B8CAE'),
                    border: '0.5px solid #1E1B22',
                    borderRadius: '20px',
                    padding: '5px 12px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B08090')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1E1B22')}
                >
                  <s.icon size={13} />
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:block"
            style={{ alignSelf: 'center' }}
          >
            <Image
              src="/neetz-profile.png"
              alt="Navneetha Rajan"
              width={320}
              height={380}
              priority
              style={{
                width: '320px',
                height: '380px',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '24px',
                border: '1.5px solid #B08090',
                boxShadow: '0 0 40px rgba(176, 128, 144, 0.15)',
              }}
            />
          </motion.div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" style={{ padding: '56px 56px' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '32px' }}>
            About
          </p>
          <div className="animate grid md:grid-cols-2 gap-8" style={{ transitionDelay: '100ms' }}>
            <div>
              <blockquote style={{
                ...pf(18, 400, '#F2EEF5', true),
                borderLeft: '2px solid #B08090',
                paddingLeft: '16px',
                margin: '0 0 24px 0',
                lineHeight: 1.6,
              }}>
                &ldquo;I don&apos;t wait until I&apos;m ready. I jump, and figure it out on the way down.&rdquo;
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {aboutTags.map((t) => (
                  <span key={t} style={{
                    ...mono(12, '#6B8CAE'),
                    border: '0.5px solid #1E1B22',
                    borderRadius: '4px',
                    padding: '4px 10px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ ...dm(13, 400, '#8A8590'), lineHeight: 1.8 }}>
              <p style={{ marginBottom: '16px' }}>
                Backend engineer with 3 years of production experience building systems at real scale. At SIXT, I worked on platforms serving 8M+ monthly users across 110+ countries — optimizing reservation flows, migrating monoliths to microservices, and building fault-tolerant pipelines processing 1M+ bookings/month.
              </p>
              <p>
                Outside of code, I&apos;m endlessly curious — always finding energy in new ideas and people who challenge me to think differently.
              </p>
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" style={{ padding: '56px 56px' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '32px' }}>
            Experience
          </p>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="animate"
              style={{ ...cardStyle, transitionDelay: `${(i + 1) * 100}ms` }}
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
            >
              <p style={{ ...dm(15, 500, '#F2EEF5'), margin: 0 }}>{exp.title}</p>
              <p style={{ ...dm(13, 400, '#B08090'), margin: '2px 0 0' }}>{exp.company}</p>
              <p style={{ ...mono(12, '#4A4550'), margin: '2px 0 0' }}>{exp.date} · {exp.location}</p>
              <p style={{ ...dm(13, 400, '#8A8590'), margin: '10px 0 0', lineHeight: 1.7 }}>{exp.impact}</p>
              {exp.mvp && (
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: '8px',
                  background: '#16101A',
                  border: '0.5px solid #B08090',
                  borderRadius: '4px',
                  padding: '3px 10px',
                  ...mono(11, '#C9A0AC'),
                }}>
                  ★ Most Valuable Player Award
                </span>
              )}
            </div>
          ))}
        </section>

        {/* ─── EDUCATION ─── */}
        <section id="education" style={{ padding: '56px 56px' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '32px' }}>
            Education
          </p>
          {education.map((edu, i) => (
            <div
              key={i}
              className="animate"
              style={{ ...cardStyle, transitionDelay: `${(i + 1) * 100}ms` }}
              onMouseEnter={onCardEnter}
              onMouseLeave={onCardLeave}
            >
              <p style={{ ...dm(15, 500, '#F2EEF5'), margin: 0 }}>{edu.degree}</p>
              <p style={{ ...dm(13, 400, '#B08090'), margin: '2px 0 0' }}>{edu.institution}</p>
              <p style={{ ...mono(12, '#4A4550'), margin: '2px 0 0' }}>
                {edu.date}{edu.detail ? ` · ${edu.detail}` : ''}
              </p>
            </div>
          ))}
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" style={{ padding: '56px 56px' }}>
          <div className="animate flex justify-between items-end" style={{ marginBottom: '24px' }}>
            <p style={mono(14, '#6B8CAE', 3)}>Projects</p>
            <Link href="/projects" style={{ ...mono(12, '#4A4550'), transition: 'color 0.2s' }}>
              view all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <div
                key={i}
                className="animate"
                style={{
                  background: '#120F15',
                  border: '0.5px solid #1E1B22',
                  borderRadius: '8px',
                  padding: '16px',
                  transition: 'border-color 0.2s ease, opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: `${(i + 1) * 100}ms`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B08090')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1E1B22')}
              >
                <p style={{ ...dm(15, 500, '#F2EEF5'), margin: '0 0 6px' }}>{p.title}</p>
                <p style={{ ...dm(13, 400, '#8A8590'), lineHeight: 1.6, margin: '0 0 12px' }}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '12px' }}>
                  {p.tech.map((t, ti) => (
                    <span key={ti} style={{
                      ...mono(11, '#6B8CAE'),
                      background: '#0F0E12',
                      border: '0.5px solid #1E1B22',
                      borderRadius: '3px',
                      padding: '3px 7px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ ...mono(12, '#B08090'), transition: 'color 0.2s' }}>
                    github →
                  </a>
                  {p.blogLink && (
                    <Link href={p.blogLink} style={{ ...mono(12, '#B08090'), transition: 'color 0.2s' }}>
                      read more →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── BLOGS ─── */}
        <section id="blogs" style={{ padding: '56px 56px' }}>
          <div className="animate flex justify-between items-end" style={{ marginBottom: '24px' }}>
            <p style={mono(14, '#6B8CAE', 3)}>Blogs</p>
            <Link href="/blogs" style={{ ...mono(12, '#4A4550'), transition: 'color 0.2s' }}>
              all posts →
            </Link>
          </div>
          {blogs.map((post, i) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <div
                className="animate group"
                style={{
                  padding: '14px 0',
                  borderBottom: '0.5px solid #1A1820',
                  transitionDelay: `${(i + 1) * 100}ms`,
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: '20px', alignItems: 'baseline' }}>
                  <span style={{ ...mono(12, '#4A4550'), whiteSpace: 'nowrap' }}>{post.date}</span>
                  <span className="blog-title-underline" style={dm(15, 400, '#F2EEF5')}>
                    {post.title}
                  </span>
                  <span style={mono(12, '#4A4550')}>{post.readTime}</span>
                </div>
                <p style={{ ...dm(13, 400, '#B08090'), fontStyle: 'italic', margin: '4px 0 0 0', paddingLeft: '120px' }}>
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section id="testimonials" style={{ padding: '56px 56px' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '24px' }}>
            From people I&apos;ve built with
          </p>

          <div
            className="animate"
            style={{
              overflow: 'hidden',
              width: '100%',
              position: 'relative',
              borderRadius: '8px',
              transitionDelay: '100ms',
            }}
          >
            {/* Horizontal sliding track */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                width: '100%',
                transform: `translateX(-${slide * 100}%)`,
                transition: slideTransition ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
                willChange: 'transform',
              }}
            >
              {[...testimonials, testimonials[0]].map((t, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: '100%',
                    width: '100%',
                    flexShrink: 0,
                    flexGrow: 0,
                    boxSizing: 'border-box',
                  }}
                >
                  <div style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '24px',
                    background: '#120F15',
                    border: '0.5px solid #1E1B22',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}>
                    <span style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: '64px',
                      color: '#B08090',
                      lineHeight: 1,
                      display: 'block',
                      marginBottom: '12px',
                    }}>
                      {'"'}
                    </span>
                    <p style={{
                      ...dm(14, 400, '#8A8590'),
                      fontStyle: 'italic',
                      lineHeight: 1.8,
                      margin: 0,
                    }}>
                      {t.text}
                    </p>
                    <p style={{ ...dm(13, 500, '#F2EEF5'), marginTop: '20px', marginBottom: 0 }}>
                      {t.name}
                    </p>
                    <p style={{ ...mono(12, '#B08090'), marginTop: '2px', marginBottom: 0 }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-1.5 justify-center" style={{ marginTop: '16px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                style={{
                  width: i === (slide % testimonials.length) ? '20px' : '6px',
                  height: '6px',
                  background: i === (slide % testimonials.length) ? '#B08090' : '#1E1B22',
                  borderRadius: i === (slide % testimonials.length) ? '3px' : '50%',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'width 0.3s ease, background 0.3s ease, border-radius 0.3s ease',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" style={{ padding: '56px 56px', textAlign: 'center' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '24px' }}>
            Contact
          </p>
          <h2 className="animate" style={{ ...pf(32, 700, '#F2EEF5'), marginBottom: '12px', transitionDelay: '100ms' }}>
            Let&apos;s build something.
          </h2>
          <p className="animate" style={{ ...dm(13, 400, '#8A8590'), marginBottom: '28px', transitionDelay: '150ms' }}>
            Open to backend and full-stack roles · New York City
          </p>
          <div className="animate flex flex-wrap justify-center gap-3" style={{ transitionDelay: '200ms' }}>
            <a
              href="mailto:navneetharajan08@gmail.com"
              style={{
                ...mono(12, '#0A090C', 1),
                background: '#B08090',
                borderRadius: '4px',
                padding: '10px 24px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/navneetha-rajan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...mono(12, '#B08090', 1),
                border: '0.5px solid #B08090',
                borderRadius: '4px',
                padding: '10px 24px',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer style={{ padding: '24px 56px', textAlign: 'center', borderTop: '0.5px solid #1A1820' }}>
          <p style={mono(12, '#4A4550')}>© 2025 Navneetha Rajan</p>
        </footer>
      </div>
    </>
  )
}
