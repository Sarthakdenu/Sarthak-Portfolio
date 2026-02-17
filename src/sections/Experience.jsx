import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'SDE Intern',
      company: 'Microsoft',
      period: 'Summer 2025',
      type: 'Upcoming',
      description: 'Selected for Microsoft SDE Internship 2025',
      achievements: [
        'Secured internship through competitive selection process',
        'Preparing for cutting-edge software development projects',
        'Focus on scalable systems and cloud technologies',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frontend Developer',
      company: 'MANIT ERP Team',
      period: '2024 - Present',
      type: 'Current',
      description: 'Building enterprise resource planning solutions for MANIT',
      achievements: [
        'Developed responsive web applications using React',
        'Implemented complex UI/UX features and components',
        'Collaborated with cross-functional teams on large-scale projects',
        'Improved application performance and user experience',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Tryambh Innovations',
      period: '2024',
      type: 'Past',
      description: 'Contributed to innovative web development projects',
      achievements: [
        'Built modern web interfaces with React and Tailwind CSS',
        'Integrated RESTful APIs and managed state with Redux',
        'Worked on client projects with tight deadlines',
        'Gained hands-on experience in agile development',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-50"></div>
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center glow`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaBriefcase className="text-white text-xl" />
                  </motion.div>
                  
                  {/* Type Badge */}
                  <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs font-bold rounded-full whitespace-nowrap ${
                    exp.type === 'Upcoming' ? 'bg-blue-500/20 text-blue-400' :
                    exp.type === 'Current' ? 'bg-green-500/20 text-green-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {exp.type}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass p-6 rounded-xl card-hover">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
