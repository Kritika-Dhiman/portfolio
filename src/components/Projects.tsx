import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Features include product management, shopping cart, order tracking, and real-time inventory updates.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern UI/UX principles and optimized for performance.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'A comprehensive analytics dashboard for visualizing business metrics and KPIs. Features interactive charts, data filtering, export capabilities, and responsive design for all devices.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-800 hover:border-primary-600 transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary-300 opacity-50">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-900 text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

