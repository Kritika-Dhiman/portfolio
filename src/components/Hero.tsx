import { Mail, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="content-max-width w-full">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-50 tracking-tight">
            Backend Developer
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable web applications with modern technologies and thoughtful design
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1ndRJu1kmY42rUPRMKQIGSWwMp7xlfYof/view?usp=sharing"
              download
              className="px-8 py-3 border border-gray-700 text-gray-300 hover:border-gray-600 hover:text-gray-200 rounded-lg font-medium transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Kritika-Dhiman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kritika-dhiman-a23104290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


