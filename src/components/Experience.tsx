import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Award, Calendar } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  type: 'experience' | 'achievement'
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
    type: 'experience',
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
    type: 'experience',
  },
  {
    title: 'Best Innovation Award',
    company: 'Tech Conference 2023',
    period: '2023',
    description: [
      'Recognized for developing an innovative solution that improved user engagement by 200%',
      'Presented findings at industry conference with 500+ attendees',
    ],
    type: 'achievement',
  },
  {
    title: 'Open Source Contributor',
    company: 'GitHub',
    period: '2020 - Present',
    description: [
      'Contributed to 10+ open source projects with 500+ stars combined',
      'Maintained popular React component library with 2K+ weekly downloads',
    ],
    type: 'achievement',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-gray-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-16" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary-600 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-900/50 rounded-lg">
                    {item.type === 'experience' ? (
                      <Briefcase className="text-primary-400" size={24} />
                    ) : (
                      <Award className="text-primary-400" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-400 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-medium">{item.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 sm:mt-0">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                    <span className="text-primary-500 mt-1.5">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

