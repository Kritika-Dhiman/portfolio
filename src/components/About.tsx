const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & Infrastructure',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'REST APIs'],
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-gray-800">
      <div className="content-max-width">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-50">
          About
        </h2>
        <div className="w-16 h-0.5 bg-gray-700 mx-auto mb-12" />

        <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          I build web applications that solve real problems. My work focuses on clean
          architecture, maintainable code, and user-centered design. I work with modern
          technologies to deliver reliable, scalable solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-800/50"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded text-sm border border-gray-800/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


