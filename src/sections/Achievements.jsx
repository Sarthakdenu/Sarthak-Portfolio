import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaCode, FaMedal, FaStar } from 'react-icons/fa'
import { SiLeetcode, SiCodechef } from 'react-icons/si'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Counter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      let startTime
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / (duration * 1000)

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }, [inView, end, duration])

    return (
      <span className="text-4xl md:text-5xl font-bold gradient-text">
        {prefix}{count}{suffix}
      </span>
    )
  }

  const stats = [
    {
      icon: SiLeetcode,
      label: 'Leetcode Problems',
      value: 1000,
      suffix: '+',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: FaStar,
      label: 'Leetcode Rating',
      value: 1880,
      suffix: '+',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: SiCodechef,
      label: 'CodeChef Rating',
      value: 1700,
      suffix: '+',
      color: 'from-brown-500 to-amber-600',
    },
    {
      icon: FaMedal,
      label: 'HackerRank Stars',
      value: 5,
      suffix: '⭐',
      color: 'from-green-400 to-emerald-500',
    },
  ]

  const highlights = [
    {
      icon: FaMedal,
      title: 'Microsoft SDE Intern 2025',
      description: 'Selected for Microsoft Summer Internship',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaTrophy,
      title: 'JP Morgan CodeForGood',
      description: 'Semifinalist in JP Morgan CodeForGood Hackathon',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaMedal,
      title: '1st Rank - 9.90 CGPA',
      description: 'Department Topper with exceptional academic record',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FaCode,
      title: 'Google Interns Connect',
      description: 'Shortlisted for Google interns Connect 2025 with great Google leaders',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="achievements" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Achievements & <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones and competitive programming statistics
          </p>
        </motion.div>

        {/* Coding Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass p-6 rounded-xl text-center card-hover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <stat.icon className={`text-4xl md:text-5xl mx-auto mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              <div className="mb-2">
                {inView && <Counter end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="glass p-6 rounded-xl card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              {/* Gradient Border */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${highlight.gradient}`}></div>
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${highlight.gradient} bg-opacity-20`}>
                  <highlight.icon className={`text-3xl bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-5 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          className="glass p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center gradient-text">
            Competitive Programming Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400 mb-2">1000+</p>
              <p className="text-gray-400">Problems Solved</p>
              <p className="text-xs text-gray-500 mt-1">Across all platforms</p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400 mb-2">Top 10%</p>
              <p className="text-gray-400">Global Ranking</p>
              <p className="text-xs text-gray-500 mt-1">On Leetcode</p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400 mb-2">200+</p>
              <p className="text-gray-400">Contest Participations</p>
              <p className="text-xs text-gray-500 mt-1">Across platforms</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
