import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="section-padding border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

