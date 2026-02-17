import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss,
  SiPython, SiJavascript, SiCplusplus, SiC, SiHtml5, SiCss3,
  SiTensorflow, SiScikitlearn, SiFlask, SiGit, SiGithub,
  SiDocker, SiPostman, SiMysql, SiRedux
} from 'react-icons/si'

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'ml', name: 'ML & AI' },
    { id: 'tools', name: 'Tools' },
  ]

  const skills = [
    // Languages
    { name: 'C', icon: SiC, level: 90, category: 'languages', color: 'from-blue-500 to-blue-700' },
    { name: 'C++', icon: SiCplusplus, level: 95, category: 'languages', color: 'from-blue-600 to-purple-600' },
    { name: 'Python', icon: SiPython, level: 92, category: 'languages', color: 'from-yellow-400 to-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, level: 90, category: 'languages', color: 'from-yellow-300 to-yellow-500' },
    { name: 'HTML5', icon: SiHtml5, level: 95, category: 'languages', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: SiCss3, level: 90, category: 'languages', color: 'from-blue-400 to-blue-600' },
    
    // Frontend
    { name: 'React', icon: SiReact, level: 92, category: 'frontend', color: 'from-cyan-400 to-blue-500' },
    { name: 'Redux', icon: SiRedux, level: 85, category: 'frontend', color: 'from-purple-500 to-purple-700' },
    { name: 'Tailwind', icon: SiTailwindcss, level: 90, category: 'frontend', color: 'from-cyan-400 to-teal-500' },
    
    // Backend
    { name: 'Node.js', icon: SiNodedotjs, level: 88, category: 'backend', color: 'from-green-500 to-green-700' },
    { name: 'Express', icon: SiExpress, level: 88, category: 'backend', color: 'from-gray-600 to-gray-800' },
    { name: 'MongoDB', icon: SiMongodb, level: 87, category: 'backend', color: 'from-green-500 to-green-600' },
    { name: 'MySQL', icon: SiMysql, level: 82, category: 'backend', color: 'from-blue-500 to-blue-700' },
    
    // ML & AI
    { name: 'TensorFlow', icon: SiTensorflow, level: 80, category: 'ml', color: 'from-orange-500 to-orange-600' },
    { name: 'Scikit-Learn', icon: SiScikitlearn, level: 85, category: 'ml', color: 'from-orange-400 to-blue-500' },
    { name: 'Flask', icon: SiFlask, level: 82, category: 'ml', color: 'from-gray-700 to-gray-900' },
    
    // Tools
    { name: 'Git', icon: SiGit, level: 90, category: 'tools', color: 'from-orange-600 to-red-600' },
    { name: 'GitHub', icon: SiGithub, level: 90, category: 'tools', color: 'from-gray-700 to-gray-900' },
    { name: 'Docker', icon: SiDocker, level: 75, category: 'tools', color: 'from-blue-500 to-blue-600' },
    { name: 'Postman', icon: SiPostman, level: 85, category: 'tools', color: 'from-orange-500 to-orange-600' },
      ]

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter)

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technology stack and expertise across different domains
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white glow'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass p-6 rounded-xl card-hover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <skill.icon className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Summary */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: '10+', label: 'Technologies' },
            { number: '5+', label: 'Frameworks' },
            { number: '8+', label: 'Tools' },
            { number: '3+', label: 'ML Libraries' },
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
