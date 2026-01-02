const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', "Figma"],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Tools & CS',
    skills: ['Git', 'GitHub', 'DSA', 'OS', 'CN', 'DBMS', 'ML'],
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
        I’m a B.Tech student at NSUT (ECE with AI/ML), focused on building backend-driven, real-world products. I enjoy designing clean APIs, working with scalable systems, and applying AI where it actually adds value. I’ve built full-stack applications using Node.js, Express, MongoDB, and React—ranging from a loan processing and compliance platform to a multilingual, voice-first inventory system for small businesses. I like breaking down ambiguous problems, writing maintainable code, and learning how large-scale systems are built in practice.
        Currently, I’m looking to grow as a software engineer by working on impactful products with strong engineering culture.
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


