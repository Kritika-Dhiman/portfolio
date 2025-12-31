import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'REST APIs', 'GraphQL'],
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-4 text-center"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary-500 mx-auto mb-12"
          />

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16 leading-relaxed"
          >
            I'm a passionate full-stack developer with a strong focus on creating
            scalable, maintainable, and user-friendly applications. With expertise in
            modern web technologies, I bring ideas to life through clean code and
            innovative solutions. I thrive in collaborative environments and am always
            eager to learn and adapt to new challenges.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary-600 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

