import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUsers, FaMicrophone, FaHandshake, FaBullhorn } from 'react-icons/fa'

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const positions = [
    {
      icon: FaHandshake,
      title: 'Sponsorship Head',
      organization: 'QCM MANIT',
      period: '2023 - 2024',
      description: 'Led sponsorship initiatives for Quiz Club MANIT, securing partnerships and managing relationships with corporate sponsors.',
      achievements: [
        'Secured sponsorships worth ₹50,000+',
        'Built relationships with 15+ corporate partners',
        'Coordinated team of 10+ volunteers',
        'Organized multiple successful quiz events',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaMicrophone,
      title: 'Debate Speaker',
      organization: 'DEBSOC MANIT',
      period: '2022 - Present',
      description: 'Active participant and speaker in debate society, representing MANIT in inter-college competitions.',
      achievements: [
        'Participated in 20+ debate competitions',
        'Won multiple inter-college debates',
        'Mentored junior debaters',
        'Organized debate workshops and sessions',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="leadership" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Leadership & <span className="gradient-text">Responsibilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My contributions to campus organizations and extracurricular activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              className="glass p-8 rounded-xl card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Gradient Border */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${position.gradient}`}></div>

              {/* Icon */}
              <div className={`inline-block p-4 rounded-lg bg-gradient-to-r ${position.gradient} bg-opacity-20 mb-6`}>
                <position.icon className={`text-4xl bg-gradient-to-r ${position.gradient} bg-clip-text text-transparent`} />
              </div>

              {/* Title & Organization */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${position.gradient} bg-clip-text text-transparent mb-1`}>
                  {position.organization}
                </p>
                <p className="text-gray-400 text-sm">{position.period}</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{position.description}</p>

              {/* Achievements */}
              <div>
                <h4 className="text-sm font-bold text-cyan-400 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {position.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${position.gradient} opacity-5 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: FaUsers, label: 'Team Management', value: '25+ Members' },
            { icon: FaBullhorn, label: 'Events Organized', value: '15+ Events' },
            { icon: FaHandshake, label: 'Partnerships', value: '20+ Partners' },
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <stat.icon className="text-4xl mx-auto mb-3 text-cyan-400" />
              <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
