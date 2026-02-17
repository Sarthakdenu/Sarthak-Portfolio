import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const achievements = [
    '1000+ DSA Problems Solved',
    'Microsoft SDE Intern 2025',
    'MERN Stack Developer',
    'AI & NLP Developer',
  ]

  useEffect(() => {
    const text = achievements[currentIndex]
    let charIndex = 0
    
    const typingInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setTypedText(text.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % achievements.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentIndex])

  const codeSnippets = [
    'const skills = ["React", "Node.js", "ML"];',
    'function solve() { return "Optimal Solution"; }',
    'while(learning) { grow++; }',
    'if(passionate) { buildAmazing(); }',
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-500 font-mono text-xs md:text-sm opacity-20 pointer-events-none"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: ['-100%', '100vw'],
            y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 2,
          }}
          style={{
            top: `${20 + index * 20}%`,
          }}
        >
          {snippet}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-cyan-400 font-mono text-sm md:text-base mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Sarthak Vyas</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-xl md:text-3xl lg:text-4xl text-gray-300 font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer | ML Enthusiast | Problem Solver
          </motion.h2>

          {/* Typing Effect */}
          <motion.div
            className="h-12 md:h-16 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-lg md:text-2xl text-cyan-400 font-mono">
              {'> '}{typedText}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { label: 'CGPA', value: '9.89' },
              { label: 'Leetcode', value: '1880+' },
              { label: 'Projects', value: '15+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass px-6 py-4 rounded-lg glow"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary glow-strong"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            
            <motion.a
               href="/Sarthak_Vyas_Resume.pdf"
              download="Sarthak_Vyas_Resume.pdf"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown className="text-cyan-400 text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
