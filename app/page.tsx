'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Calendar, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'

/* ── Data ── */

const socialLinks = [
  { icon: Github, href: 'https://github.com/navneetha-rajan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/navneetha-rajan', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:navneetharajan08@gmail.com', label: 'Email' },
]

const metrics = [
  { value: '8M+', label: 'Users served across 110+ countries' },
  { value: '1M+', label: 'Reservations processed per month' },
  { value: '20%', label: 'Booking uplift from pricing service' },
  { value: '65%', label: 'Faster API response after migration' },
  { value: '2,000+', label: 'Hours of manual work saved via AI' },
  { value: '6x', label: 'Hackathon and coding competition winner' },
]

const hackathonPhotos = [
  { src: '/hackathon/antonrx.JPG', caption: 'Policy Lens Demo · AntonRx Hackathon' },
  { src: '/hackathon/energyhacks.JPG', caption: 'AEE Energy Hackathon Demo' },
  { src: '/hackathon/arbiter.JPG', caption: 'Arbiter VillageHacks Demo' },
  { src: '/hackathon/globehacks.jpeg', caption: 'GlobeHacks \'26 · PayFlow' },
  { src: '/hackathon/codechallenge.jpeg', caption: 'SoDA Code Challenge \'26 Winners' },
  { src: '/hackathon/innovationhacks.jpeg', caption: 'Innovation Hacks Winners' },
  { src: '/hackathon/sunhacks.JPEG', caption: 'Sunhacks \'25 Winners' },
  { src: '/hackathon/villagehacks.jpeg', caption: 'StartupVillageHacks Winners' },
]

const hackathonRecord = [
  { year: 'Apr 2026', event: 'Startup VillageHacks', built: 'Arbiter: confidence-weighted AI delivery readiness engine', result: '🥇 Winner' },
  { year: 'Apr 2026', event: 'ASU AEE Energy Hackathon', built: 'GridSense-AZ: Graph WaveNet + physics-validated grid forecasting', result: '🥇 Winner' },
  { year: 'Apr 2026', event: 'GlobeHacks GTM Hackathon', built: 'PayFlow: AI invoice escalation platform', result: '🥇 Winner' },
  { year: 'Apr 2026', event: 'Innovation Hacks', built: 'Policy Lens: drug coverage intelligence, JSON-SQL-RAG pipeline', result: '🥇 Winner' },
  { year: 'Mar 2026', event: 'ASU Code Challenge', built: 'Competitive programming, Codeforces style', result: '🥇 Winner' },
  { year: 'Mar 2026', event: 'Claude Builders Club · 100+ teams', built: 'QuestMind: retro RPG where your anxiety is the boss fight', result: '🎖 Finalist' },
  { year: 'Sep 2025', event: 'ASU SunHacks \'25', built: 'LoopIT: NIST-compliant device wipe verification + reuse marketplace', result: '🥇 Winner' },
]

const caseStudies = [
  {
    title: 'GridSense-AZ',
    screenshot: '/screenshots/gridsense.jpg',
    screenshotCaption: 'Tactical map with buses colored by voltage risk',
    prose: [
      "Arizona's grid operators need to know which parts of the grid will fail before they fail, during Phoenix heat waves, evening EV charging surges, all of it. The problem is most forecasting models treat the grid as one big number. They miss that bus 47 affects bus 48.",
      "**So I built a Graph WaveNet that forecasts demand per bus, not per grid.** 132 buses, 16 months of real demand and weather data, quantile predictions (p10/p50/p90) so operators know the best and worst case. The model learns which buses influence each other directly from data, no hand-tuned topology needed.",
      "Then I plugged those forecasts into OpenDSS to run actual physics simulations: will voltage drop below safe limits? Will any lines overload? The dashboard shows operators exactly where to intervene and what to do.",
      "Why Graph WaveNet over LSTM? The grid is a graph, not a sequence. Buses have spatial relationships that LSTMs can't see. The adaptive adjacency mechanism learns these relationships from data, which matters because the real wiring doesn't always match the official topology.",
    ],
    metric: '59,890 parameters · 4.57 MW test MAE · 18.4% improvement over baseline · 🏆 ASU AEE Energy Hackathon',
    tech: ['Python', 'PyTorch', 'Graph WaveNet', 'OpenDSS', 'Next.js', 'Streamlit'],
    github: 'https://github.com/navneetha-rajan/gridsense',
    demo: 'https://gridsense-az.vercel.app/',
  },
  {
    title: 'Policy Lens',
    screenshot: '/screenshots/policylens.jpg',
    screenshotCaption: 'PA Friction Heatmap showing prior auth burden across payers and drugs',
    prose: [
      "If you're a pharma market access analyst and you need to know \"does Cigna cover Humira, and what hoops do I jump through to prescribe it?\" today you're downloading PDFs from five different payer portals, opening each one, and manually comparing coverage rules across 50-page documents. For every drug. For every payer. Every time the policy updates.",
      "**I built a system that kills that workflow.** Upload a payer's PDF, and a Gemini-powered extraction pipeline pulls out every drug, every prior auth requirement, every step therapy rule, and drops it into a structured database. Then you can search any drug and instantly see which payers cover it, what restrictions exist, and where the friction is. The standout feature was a heatmap showing prior authorization friction across payers and drugs. Judges stopped and stared at that during the demo because it made an invisible problem visible in one glance.",
      "The pipeline is JSON to SQL to RAG. No vector store, no embeddings. Keyword-based retrieval into structured SQL queries, context assembled and injected into the LLM at query time. For a domain this structured, that approach outperforms semantic search because you need exact matches on drug names and HCPCS codes, not fuzzy similarity.",
    ],
    metric: '1,500+ drugs indexed · 5 payer networks · 🏆 Innovation Hacks 2026 · 600+ participants',
    tech: ['Python', 'FastAPI', 'SQLite', 'Gemini', 'React', 'TypeScript'],
    github: 'https://github.com/navneetha-rajan/policy-lens',
  },
]

const testimonials = [
  {
    name: 'Amey Gadgil',
    role: 'Senior Engineering Manager · SIXT',
    text: "One of the strongest new grads I've worked with. Her work is impeccable, she's relentlessly persistent, and she takes complete ownership. You never have to follow up on anything she's picked up.",
  },
  {
    name: 'Bhushan Kakulte',
    role: 'Staff Software Engineer · SIXT',
    text: "Exceptional grasping power and a true end-to-end thinker. She digs into problems until she fully understands them. If something doesn't make sense, she keeps questioning until it does.",
  },
  {
    name: 'Rajasekar Venkatesan',
    role: 'Senior Software Engineer · SIXT',
    text: "She was the one who pushed our team to adopt GenAI tools early, before it was mainstream. Genuine curiosity combined with the initiative to actually bring new ideas into production.",
  },
  {
    name: 'Mithun Shivaramiah',
    role: 'Software Engineer · SIXT',
    text: "The kind of engineer who lifts the whole team. Always approachable, always willing to help. When something is asked of her, even if she doesn't know it yet, she finds a way to get it done.",
  },
]

const aboutTags = ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Python', 'Kubernetes', 'FastAPI', 'Docker']

/* ── Component ── */

export default function Home() {
  const [slide, setSlide] = useState(0)

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

  const [slideTransition, setSlideTransition] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = useCallback((i: number) => {
    setLightbox(i)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
    document.body.style.overflow = ''
  }, [])

  const lightboxPrev = useCallback(() => {
    setLightbox((p) => (p !== null ? (p - 1 + hackathonPhotos.length) % hackathonPhotos.length : null))
  }, [])

  const lightboxNext = useCallback(() => {
    setLightbox((p) => (p !== null ? (p + 1) % hackathonPhotos.length : null))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') lightboxPrev()
      if (e.key === 'ArrowRight') lightboxNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, closeLightbox, lightboxPrev, lightboxNext])

  const goToSlide = useCallback((i: number) => {
    setSlideTransition(true)
    setSlide(i)
  }, [])

  const prevSlide = useCallback(() => {
    setSlideTransition(true)
    setSlide((p) => (p - 1 + testimonials.length) % testimonials.length)
  }, [])

  const nextSlide = useCallback(() => {
    setSlideTransition(true)
    setSlide((p) => (p + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => {
      setSlideTransition(true)
      setSlide((p) => (p + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(t)
  }, [slide, isPaused])

  /* Slide always stays in [0, testimonials.length-1] via modulo — no seamless-loop clone needed */

  const mono = (size: number, color: string, ls = 0) => ({
    fontFamily: '"JetBrains Mono", monospace', fontSize: `${size}px`, color, letterSpacing: ls ? `${ls}px` : undefined,
  } as React.CSSProperties)

  const dm = (size: number, weight: number, color: string) => ({
    fontFamily: '"DM Sans", sans-serif', fontSize: `${size}px`, fontWeight: weight, color,
  } as React.CSSProperties)

  const pf = (size: number, weight: number, color: string, italic = false) => ({
    fontFamily: '"Playfair Display", serif', fontSize: `${size}px`, fontWeight: weight, color, fontStyle: italic ? 'italic' : undefined,
  } as React.CSSProperties)

  return (
    <>
      <Navigation />

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
              style={{ ...dm(17, 400, '#8A8590'), marginTop: '12px', lineHeight: 1.6 }}
            >
              3 years building backend systems at global scale.{' '}
              <span style={{ color: '#C9A0AC' }}>Weekends, I ship at hackathons.</span>
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
              transition={{ duration: 0.5, delay: 0.85 }}
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

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              style={{ marginTop: '20px' }}
            >
              <a
                href="/Navneetha_Rajan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{
                  ...mono(12, '#6B8CAE', 1),
                  border: '0.5px solid #1E1B22',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B08090')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1E1B22')}
              >
                <ExternalLink size={13} />
                Resume
              </a>
              <button
                data-cal-link="navneetha-rajan/15min"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2"
                style={{
                  ...mono(12, '#0A090C', 1),
                  background: '#B08090',
                  borderRadius: '4px',
                  padding: '8px 16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <Calendar size={13} />
                Book a Call
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:block"
            style={{ alignSelf: 'center' }}
          >
            <Image
              src="/neetz-profile.jpg"
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

        {/* ─── IMPACT METRICS ─── */}
        <section id="impact" style={{ padding: '100px 56px', background: '#0A090C' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '40px' }}>
            What I&apos;ve Built
          </p>

          <div className="animate metrics-grid" style={{ transitionDelay: '100ms' }}>
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  background: '#0F0E12',
                  border: '0.5px solid #1E1B22',
                  borderRadius: '8px',
                }}
              >
                <p style={{ ...pf(52, 700, '#B08090'), margin: 0, lineHeight: 1.1 }}>{m.value}</p>
                <p style={{ ...dm(14, 400, '#8A8590'), marginTop: '8px', lineHeight: 1.5 }}>{m.label}</p>
              </div>
            ))}
          </div>

          <div className="animate" style={{ marginTop: '40px', transitionDelay: '200ms' }}>
            <p style={{ ...dm(15, 400, '#8A8590'), lineHeight: 1.8, maxWidth: '700px' }}>
              At <a href="https://about.sixt.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A0AC', textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationColor: 'rgba(176, 128, 144, 0.4)', transition: 'text-decoration-color 0.2s' }}>SIXT</a>, one of the world&apos;s largest mobility platforms, I built the Kafka-driven pricing service that directly moved revenue, migrated the pricing monolith to microservices in Java and Go on AWS, and owned fault-tolerant booking pipelines handling a million reservations a month. Recognized as MVP, top 1% of the engineering org.
            </p>
            <span
              className="inline-flex items-center"
              style={{
                marginTop: '16px',
                background: 'rgba(196, 168, 130, 0.08)',
                border: '0.5px solid rgba(196, 168, 130, 0.25)',
                borderRadius: '4px',
                padding: '5px 12px',
                ...mono(11, '#C4A882'),
              }}
            >
              ★ Most Valuable Player Award
            </span>
          </div>
        </section>

        {/* ─── HACKATHON RECORD ─── */}
        <section id="hackathons" style={{ padding: '100px 56px' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '16px' }}>
            Hackathon Record
          </p>
          <blockquote
            className="animate"
            style={{
              ...pf(16, 400, '#C9A0AC', true),
              borderLeft: '2px solid #B08090',
              paddingLeft: '16px',
              margin: '0 0 40px 0',
              lineHeight: 1.7,
              transitionDelay: '100ms',
            }}
          >
            &ldquo;I show up, I build, I ship. Not for the prize, but because 48 hours of focused building is where I feel most alive.&rdquo;
          </blockquote>

          {/* Photo collage */}
          <div className="animate hackathon-collage" style={{ marginBottom: '48px', transitionDelay: '150ms' }}>
            {hackathonPhotos.map((photo, i) => (
              <div
                key={i}
                className="hackathon-collage-item"
                onClick={() => openLightbox(i)}
                style={{ cursor: 'pointer' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div className="collage-caption">{photo.caption}</div>
              </div>
            ))}
          </div>

          {/* Hackathon table */}
          <div className="animate" style={{ overflowX: 'auto', transitionDelay: '200ms' }}>
            <table className="hackathon-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Hackathon</th>
                  <th>Built</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {hackathonRecord.map((h, i) => (
                  <tr key={i}>
                    <td style={{ ...mono(12, '#4A4550'), whiteSpace: 'nowrap' }}>{h.year}</td>
                    <td style={{ color: '#F2EEF5', fontWeight: 500 }}>{h.event}</td>
                    <td>{h.built}</td>
                    <td style={{ color: h.result.includes('Winner') ? '#C4A882' : '#B08090' }}>{h.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── CASE STUDIES ─── */}
        <section id="projects" style={{ padding: '100px 56px', background: '#0A090C' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '40px' }}>
            Selected Projects
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="animate"
                style={{
                  background: '#0F0E12',
                  border: '0.5px solid #1E1B22',
                  borderRadius: '12px',
                  padding: '32px',
                  transition: 'border-color 0.2s ease, opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: `${(i + 1) * 120}ms`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B08090')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1E1B22')}
              >
                <h3 style={{ ...pf(24, 700, '#F2EEF5'), margin: '0 0 24px' }}>{cs.title}</h3>

                <div className="grid md:grid-cols-5 gap-6">
                  {/* Screenshot (40%) */}
                  <div className="md:col-span-2" style={{
                    border: '0.5px solid #1E1B22',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cs.screenshot}
                      alt={cs.screenshotCaption}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>

                  {/* Prose (60%) */}
                  <div className="md:col-span-3">
                    {cs.prose.map((p, pi) => (
                      <p key={pi} style={{ ...dm(15, 400, '#8A8590'), lineHeight: 1.8, marginBottom: pi < cs.prose.length - 1 ? '14px' : '0' }}>
                        {p.split(/(\*\*.*?\*\*)/).map((segment, si) =>
                          segment.startsWith('**') && segment.endsWith('**')
                            ? <strong key={si} style={{ color: '#F2EEF5', fontWeight: 500 }}>{segment.slice(2, -2)}</strong>
                            : segment
                        )}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Metric line */}
                <p style={{ ...dm(15, 500, '#C9A0AC'), lineHeight: 1.6, marginTop: '24px', marginBottom: '16px' }}>
                  {cs.metric}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '14px' }}>
                  {cs.tech.map((t, ti) => (
                    <span key={ti} style={{
                      ...mono(11, '#6B8CAE'),
                      background: '#0A090C',
                      border: '0.5px solid #1E1B22',
                      borderRadius: '3px',
                      padding: '3px 7px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a href={cs.github} target="_blank" rel="noopener noreferrer" style={{ ...mono(12, '#B08090'), transition: 'color 0.2s' }}>
                    github →
                  </a>
                  {'demo' in cs && cs.demo && (
                    <a
                      href={cs.demo as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...mono(12, '#0A090C', 1),
                        background: '#B08090',
                        borderRadius: '4px',
                        padding: '6px 14px',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                        display: 'inline-block',
                      }}
                    >
                      demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="animate" style={{ marginTop: '32px', transitionDelay: '300ms' }}>
            <Link href="/projects" style={{ ...mono(12, '#4A4550'), transition: 'color 0.2s' }}>
              view all projects →
            </Link>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section id="testimonials" style={{ padding: '100px 56px' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '24px' }}>
            From people I&apos;ve built with
          </p>

          <div
            className="animate"
            style={{
              position: 'relative',
              transitionDelay: '100ms',
            }}
          >
            {/* Left arrow */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              style={{
                position: 'absolute',
                left: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                background: '#120F15',
                border: '0.5px solid #1E1B22',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#6B8CAE',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B08090'; e.currentTarget.style.color = '#B08090' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1E1B22'; e.currentTarget.style.color = '#6B8CAE' }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Right arrow */}
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                background: '#120F15',
                border: '0.5px solid #1E1B22',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#6B8CAE',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#B08090'; e.currentTarget.style.color = '#B08090' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1E1B22'; e.currentTarget.style.color = '#6B8CAE' }}
            >
              <ChevronRight size={16} />
            </button>

            {/* Slide track */}
            <div
              style={{
                overflow: 'hidden',
                width: '100%',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={() => setIsPaused((p) => !p)}
              title={isPaused ? 'Click to resume' : 'Click to pause'}
            >
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
                {testimonials.map((t, i) => (
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
                        ...dm(15, 400, '#8A8590'),
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
          </div>

          {/* Controls: dots + pause/play */}
          <div className="flex items-center justify-center gap-3" style={{ marginTop: '16px' }}>
            <div className="flex gap-1.5">
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
            <button
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: isPaused ? '#B08090' : '#4A4550',
                transition: 'color 0.2s',
              }}
            >
              {isPaused ? <Play size={12} /> : <Pause size={12} />}
            </button>
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" style={{ padding: '100px 56px', background: '#0A090C', textAlign: 'center' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '32px' }}>
            About
          </p>
          <div className="animate" style={{ transitionDelay: '100ms', maxWidth: '650px', margin: '0 auto' }}>
            <blockquote style={{
              ...pf(20, 400, '#F2EEF5', true),
              borderLeft: 'none',
              margin: '0 0 24px 0',
              lineHeight: 1.6,
              padding: 0,
            }}>
              &ldquo;I don&apos;t wait until I&apos;m ready. I jump, and figure it out on the way down.&rdquo;
            </blockquote>

            <p style={{ ...dm(15, 400, '#8A8590'), lineHeight: 1.8, marginBottom: '16px' }}>
              I&apos;m a backend engineer who loves hard problems. The kind where the system is on fire at 2 AM and you have to think clearly anyway. The kind where you&apos;re three hours into a hackathon and realize your entire architecture needs to change. That&apos;s what I love to build and that&apos;s where I come alive.
            </p>
            <p style={{ ...dm(15, 400, '#8A8590'), lineHeight: 1.8, marginBottom: '16px' }}>
              Outside of code, I&apos;m probably learning a new dance style, experimenting with a recipe I found at midnight, or convincing someone to go bungee jumping with me.
            </p>
            <p style={{ ...dm(14, 400, '#6B8CAE'), lineHeight: 1.6, marginBottom: '24px' }}>
              MS Information Technology (AI concentration), Arizona State University<br />4.0 GPA · Graduated May 2026
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
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
        </section>

        {/* ─── WHAT I'M LOOKING FOR ─── */}
        <section style={{ padding: '80px 56px', textAlign: 'center' }}>
          <div className="animate" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ ...dm(15, 400, '#8A8590'), lineHeight: 1.8, marginBottom: '14px' }}>
              I&apos;m looking for a software engineering role where systems and AI intersect. I love building things that are technically deep and have an impact, and I&apos;m excited to find a team where I can do that.
            </p>
            <p style={{ ...dm(15, 400, '#8A8590'), lineHeight: 1.8 }}>
              I am flexible to relocate anywhere in the US.
            </p>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" style={{ padding: '80px 56px', textAlign: 'center', background: '#0A090C' }}>
          <p className="animate" style={{ ...mono(14, '#6B8CAE', 3), marginBottom: '24px' }}>
            Contact
          </p>
          <h2 className="animate" style={{ ...pf(32, 700, '#F2EEF5'), marginBottom: '32px', transitionDelay: '100ms' }}>
            Let&apos;s build something.
          </h2>
          <div className="animate flex flex-wrap justify-center gap-3" style={{ transitionDelay: '150ms' }}>
            <button
              data-cal-link="navneetha-rajan/15min"
              data-cal-config='{"layout":"month_view"}'
              style={{
                ...mono(12, '#0A090C', 1),
                background: '#B08090',
                borderRadius: '4px',
                padding: '12px 28px',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Calendar size={14} />
              Book a Call
            </button>
            <a
              href="mailto:navneetharajan08@gmail.com"
              style={{
                ...mono(12, '#B08090', 1),
                border: '0.5px solid #B08090',
                borderRadius: '4px',
                padding: '12px 28px',
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
                padding: '12px 28px',
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

      {/* ─── LIGHTBOX ─── */}
      {lightbox !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(10, 9, 12, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#8A8590',
              cursor: 'pointer',
              fontSize: '28px',
              lineHeight: 1,
              padding: '8px',
              transition: 'color 0.2s',
              zIndex: 210,
            }}
            aria-label="Close lightbox"
          >
            &#x2715;
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev() }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(18, 15, 21, 0.8)',
              border: '0.5px solid #1E1B22',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#C9A0AC',
              transition: 'border-color 0.2s',
              zIndex: 210,
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext() }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(18, 15, 21, 0.8)',
              border: '0.5px solid #1E1B22',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#C9A0AC',
              transition: 'border-color 0.2s',
              zIndex: 210,
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={20} />
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '85vw', maxHeight: '80vh', position: 'relative' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hackathonPhotos[lightbox].src}
              alt={hackathonPhotos[lightbox].caption}
              style={{
                maxWidth: '85vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '8px',
                display: 'block',
              }}
            />
            <p style={{
              ...mono(12, '#C9A0AC'),
              textAlign: 'center',
              marginTop: '12px',
            }}>
              {hackathonPhotos[lightbox].caption}
              <span style={{ color: '#4A4550', marginLeft: '12px' }}>
                {lightbox + 1} / {hackathonPhotos.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
