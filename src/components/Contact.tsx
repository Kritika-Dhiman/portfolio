import { useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Reset status when user starts typing again
    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    // Get environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setErrorMessage(
        'Email service is not configured. Please check environment variables.'
      )
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_YOUR_EMAIL || 'your.email@example.com',
        },
        publicKey
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        'Failed to send message. Please try again or contact me directly via email.'
      )
      console.error('EmailJS error:', error)
    }
  }

  return (
    <section id="contact" className="section-padding border-t border-gray-800">
      <div className="content-max-width">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-50">
          Contact
        </h2>
        <div className="w-16 h-0.5 bg-gray-700 mx-auto mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              I'm available for new opportunities and interesting projects. Reach out if
              you'd like to discuss how we can work together.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-gray-400 hover:text-gray-300 transition-colors group"
              >
                <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-800/50 group-hover:border-gray-700 transition-colors">
                  <Mail className="text-gray-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p className="font-medium text-gray-300">
                    your.email@example.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-gray-300 transition-colors group"
              >
                <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-800/50 group-hover:border-gray-700 transition-colors">
                  <Linkedin className="text-gray-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    LinkedIn
                  </p>
                  <p className="font-medium text-gray-300">
                    linkedin.com/in/yourprofile
                  </p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-gray-300 transition-colors group"
              >
                <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-800/50 group-hover:border-gray-700 transition-colors">
                  <Github className="text-gray-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    GitHub
                  </p>
                  <p className="font-medium text-gray-300">
                    github.com/yourusername
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-800/50 rounded-lg text-gray-100 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-800/50 rounded-lg text-gray-100 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-800/50 rounded-lg text-gray-100 focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your message..."
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-gray-800/50 border border-gray-800/50 rounded-lg">
                <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-300">
                  Message sent successfully. I'll get back to you soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 bg-gray-800/50 border border-red-900/50 rounded-lg">
                <XCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-gray-300">
                  {errorMessage ||
                    'Failed to send message. Please try again or contact me directly.'}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}


