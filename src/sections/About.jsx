import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaCode, FaStar, FaMicrosoft } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: FaTrophy,
      title: '9.89 CGPA',
      description: '1st Rank in Department',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: FaMicrosoft,
      title: 'Microsoft Intern',
      description: 'SDE Intern 2025',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FaCode,
      title: '1000+ Problems',
      description: 'Leetcode Champion',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: FaStar,
      title: '5⭐ HackerRank',
      description: 'Problem Solving',
      color: 'from-purple-400 to-pink-500',
    },
  ]

  const timeline = [
    {
      year: '2022 - 2026',
      title: 'B.Tech in Computer Science',
      organization: 'MANIT Bhopal',
      description: 'CGPA: 9.89 | Focus: DSA, System Design, ML',
    },
    {
      year: '2024 - Present',
      title: 'Frontend Developer',
      organization: 'MANIT ERP Team',
      description: 'Building scalable web applications',
    },
    {
      year: '2025',
      title: 'SDE Intern',
      organization: 'Microsoft',
      description: 'Upcoming Summer Internship',
    },
  ]

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about building scalable systems and solving complex problems
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass p-6 rounded-xl card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
              <item.icon className={`text-4xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6 gradient-text">
              My Journey
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">Computer Science student</span> at MANIT Bhopal with a passion for creating impactful solutions. With a CGPA of <span className="text-cyan-400 font-semibold">9.89</span>, I've consistently maintained top academic performance while diving deep into practical development.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My expertise spans <span className="text-purple-400 font-semibold">Full Stack Development</span> with the MERN stack, <span className="text-purple-400 font-semibold">Machine Learning</span>, and <span className="text-purple-400 font-semibold">Natural Language Processing</span>. I've solved over <span className="text-cyan-400 font-semibold">1000+ DSA problems</span> across various platforms, honing my problem-solving skills.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently preparing for my <span className="text-cyan-400 font-semibold">Microsoft SDE Internship</span> in 2025, I'm focused on building scalable, efficient systems that make a difference. I believe in continuous learning and pushing boundaries.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-cyan-500"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[9px] glow"></div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-cyan-400 text-sm font-mono mb-1">{item.year}</p>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-purple-400 text-sm mb-2">{item.organization}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="glass p-8 rounded-xl text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-6 gradient-text">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Innovation', desc: 'Building cutting-edge solutions' },
              { title: 'Excellence', desc: 'Striving for perfection in code' },
              { title: 'Impact', desc: 'Creating meaningful change' },
            ].map((value, index) => (
              <div key={index}>
                <h4 className="text-cyan-400 font-bold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
