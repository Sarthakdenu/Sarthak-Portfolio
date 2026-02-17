import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'connectwithsarthak2006@gmail.com',
      link: 'mailto:connectwithsarthak2006@gmail.com',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91-9399804967',
      link: 'tel:+919399804967',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bhopal, Madhya Pradesh, India',
      link: null,
      gradient: 'from-green-500 to-emerald-600',
    },
  ]

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold mb-8 gradient-text">
              Let's Talk
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="glass p-6 rounded-xl card-hover"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} bg-opacity-20`}>
                      <info.icon className={`text-2xl bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="mt-8 p-6 glass rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p className="text-gray-400 mb-4">Or connect with me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Sarthakdenu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sarthak-vyas-99791b25b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass p-8 rounded-xl relative"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-dark-card border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none text-white transition-colors resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary glow-strong flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center h-full py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <FaCheckCircle className="text-7xl text-green-400 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
