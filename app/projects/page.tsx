'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Github } from 'lucide-react'
import Link from 'next/link'
import Navigation from '../components/Navigation'

const allProjects = [
  {
    title: 'MindMate',
    subtitle: 'Autonomous Mental Wellness Companion',
    description:
      'Privacy-first AI agent that guides users through reflective journaling, mood analysis, and weekly planning via Socratic dialogue and emotion tracking.',
    tech: ['Python', 'LLMs', 'LangGraph', 'FastAPI', 'NLP', 'Data Visualization'],
    github: 'https://github.com/navneetha-rajan/MindMate',
    featured: true,
  },
  {
    title: 'Ride Share',
    subtitle: 'High-Performance Cloud Platform',
    description:
      'Cloud-native ride-sharing platform engineered for millions of concurrent requests with fault-tolerant microservices and sub-second response times.',
    tech: ['AWS', 'Microservices', 'Docker', 'Load Balancing', 'RabbitMQ', 'Python', 'Flask'],
    github: 'https://github.com/navneetha-rajan/Ride-Share-Application',
    featured: true,
  },
  {
    title: 'Bookify',
    subtitle: 'Personalized Book Recommendations',
    description:
      'Recommendation engine trained on 270K+ readers. Collaborative filtering meets content-based analysis for personalized book discovery.',
    tech: ['Python', 'Machine Learning', 'Data Mining', 'Recommender Systems'],
    github: 'https://github.com/navneetha-rajan/Bookify',
    featured: true,
  },
  {
    title: 'Boolean Oracle',
    subtitle: 'Intelligent Word Problem Solver',
    description:
      'Python tool that automatically solves logic-based word problems, featured in an IEEE publication and presented at ASIANCON.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Logic Programming'],
    github: 'https://github.com/navneetha-rajan/Boolean-Oracle',
    featured: false,
  },
  {
    title: 'Event Management System',
    subtitle: 'Streamlined Event Platform',
    description:
      'Event management platform using Flask and Angular with personalized recommendations to boost student engagement.',
    tech: ['Flask', 'Angular', 'Python', 'Web Development'],
    github: 'https://github.com/navneetha-rajan/event-management-system',
    featured: false,
  },
  {
    title: 'Grocery Delivery Mobile App',
    subtitle: 'Flutter-based Delivery Platform',
    description:
      'Instacart-inspired Flutter app with personalized recommendations for enhanced user experience and order efficiency.',
    tech: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX'],
    github: 'https://github.com/navneetha-rajan/grocery-delivery-app',
    featured: false,
  },
]

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg-outer)' }}>
      <Navigation />

      <div style={{ maxWidth: '860px', margin: '0 auto', background: 'var(--color-bg-content)', borderLeft: '0.5px solid var(--color-border-subtle)', borderRight: '0.5px solid var(--color-border-subtle)', minHeight: '100vh' }}>
        <section style={{ paddingTop: '112px', paddingBottom: '64px', paddingLeft: '24px', paddingRight: '24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-text-muted)', marginBottom: '48px', display: 'inline-flex', transition: 'color 0.2s' }}
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '38px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
              Projects
            </h1>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px', color: 'var(--color-text-secondary)', maxWidth: '500px', lineHeight: 1.7 }}>
              A collection of technical projects across machine learning, cloud architecture, and software development.
            </p>
          </motion.div>
        </section>

        <section style={{ paddingBottom: '128px', paddingLeft: '24px', paddingRight: '24px' }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allProjects.map((project, index) => (
              <motion.article
                key={index}
                className="flex flex-col"
                data-cursor="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                style={{
                  background: 'var(--color-bg-card)',
                  border: '0.5px solid var(--color-border-card)',
                  borderRadius: '8px',
                  padding: '16px',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent-mauve)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-card)')}
              >
                <div className="flex items-start justify-between gap-2" style={{ marginBottom: '8px' }}>
                  <h2 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                    {project.title}
                  </h2>
                  {project.featured && (
                    <span style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '9px',
                      color: 'var(--color-accent-mauve)',
                      background: 'var(--color-mvp-bg)',
                      border: '0.5px solid var(--color-border-card)',
                      borderRadius: '3px',
                      padding: '2px 7px',
                      flexShrink: 0,
                    }}>
                      Featured
                    </span>
                  )}
                </div>
                <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', color: 'var(--color-accent-slate)', marginBottom: '8px' }}>
                  {project.subtitle}
                </p>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '11px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '12px', flexGrow: 1 }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5" style={{ marginBottom: '12px' }}>
                  {project.tech.map((tech, ti) => (
                    <span key={ti} style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '9px',
                      color: 'var(--color-accent-slate)',
                      background: 'var(--color-bg-content)',
                      border: '0.5px solid var(--color-border-card)',
                      borderRadius: '3px',
                      padding: '3px 7px',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '10px',
                    color: 'var(--color-text-muted)',
                    transition: 'color 0.2s',
                    marginTop: 'auto',
                  }}
                >
                  <Github size={12} />
                  View Code →
                </a>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
