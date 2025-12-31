import { Briefcase, Calendar } from 'lucide-react'

interface ExperienceItem {
  title: string
  
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'LinkedIn CoachIn Program',
    
    period: 'Feb - 2025',
    description: [
      'Selected among the top 80 out of 18,000+ applicants for a competitive mentorship program focused on DSA, problem-solving, and career readiness.'
    ],
  },
  {
    title: 'Smart Delhi Ideathon – Top 5 Finalist',
    
    period: 'Feb - 2025',
    description: [
      'Ranked in the top 0.5% of 1,000+ teams for proposing CleanWave, an AI + IoT-based drone solution for river cleanup with ML-driven pollution prediction.',
    ],
  },
  {
    title: 'NinjaSprint Ideathon by Coding Ninjas',
    
    period: 'April - 2024',
    description: [
      'Awarded Best All-Women Team for building an innovative technology solution under competitive hackathon constraints.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-gray-800">
      <div className="content-max-width">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-50">
          Achievements
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


