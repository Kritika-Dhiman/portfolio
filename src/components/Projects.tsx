import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  problem: string
  solution: string
  outcome: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    problem: 'Small businesses needed an affordable, customizable online store solution.',
    solution: 'Built a full-stack platform with product management, payment processing, and admin dashboard.',
    outcome: 'Enabled merchants to launch stores quickly with secure transactions and inventory management.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    problem: 'Teams struggled with coordination and visibility into project progress.',
    solution: 'Created a collaborative app with real-time updates, drag-and-drop organization, and team workspaces.',
    outcome: 'Improved team productivity with clear task ownership and streamlined workflows.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Analytics Dashboard',
    problem: 'Business metrics were scattered across multiple tools, making analysis time-consuming.',
    solution: 'Developed a unified dashboard with interactive visualizations, filtering, and export capabilities.',
    outcome: 'Reduced reporting time and enabled faster, data-driven decision making.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-gray-800">
      <div className="content-max-width">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-50">
          Projects
        </h2>
        <div className="w-16 h-0.5 bg-gray-700 mx-auto mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/30 rounded-lg border border-gray-800/50 p-8 hover:border-gray-700 transition-colors"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-50">
                  {project.title}
                </h3>
                <div className="space-y-3 text-gray-400 leading-relaxed">
                  <p>
                    <span className="text-gray-500 text-sm font-medium">Problem: </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="text-gray-500 text-sm font-medium">Solution: </span>
                    {project.solution}
                  </p>
                  <p>
                    <span className="text-gray-500 text-sm font-medium">Outcome: </span>
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-900/50 text-gray-400 text-xs rounded border border-gray-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-4 border-t border-gray-800/50">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                >
                  <Github size={18} />
                  Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


