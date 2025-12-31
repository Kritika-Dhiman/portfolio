import { Briefcase, Calendar } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2022 - Present',
    description: [
      'Led development of multiple web applications serving 100K+ users',
      'Architected scalable microservices using Node.js and React',
      'Mentored junior developers and established coding best practices',
      'Reduced application load time by 40% through optimization',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Startup Solutions',
    period: '2020 - 2022',
    description: [
      'Built and maintained RESTful APIs handling millions of requests',
      'Developed responsive frontend applications using React and TypeScript',
      'Collaborated with cross-functional teams in agile environment',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-gray-800">
      <div className="content-max-width">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-50">
          Experience
        </h2>
        <div className="w-16 h-0.5 bg-gray-700 mx-auto mb-16" />

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="bg-gray-800/30 p-8 rounded-lg border border-gray-800/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-50 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2 sm:mt-0">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-start gap-3">
                    <span className="text-gray-600 mt-1.5">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


