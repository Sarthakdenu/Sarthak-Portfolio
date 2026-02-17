import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiCodeforces, SiHackerrank, SiCodingninjas } from 'react-icons/si'

const CodingProfiles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const profiles = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Sarthakdenu',
      color: 'from-gray-700 to-gray-900',
      stats: '50+ Repositories',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/sarthak-vyas-99791b25b/',
      color: 'from-blue-600 to-blue-800',
      stats: 'Professional Network',
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/u/Sarthak-Vyas-DenuMaster/',
      color: 'from-orange-500 to-yellow-600',
      stats: '1880+ Rating',
    },
    {
      name: 'CodeChef',
      icon: SiCodechef,
      url: 'https://www.codechef.com/users/sarthakmanju21',
      color: 'from-brown-600 to-amber-700',
      stats: '1700+ Rating',
    },
    {
      name: 'Codeforces',
      icon: SiCodeforces,
      url: 'https://codeforces.com/profile/SarthakDenuMaster',
      color: 'from-blue-500 to-indigo-600',
      stats: 'Active Contestant',
    },
    {
      name: 'HackerRank',
      icon: SiHackerrank,
      url: 'https://www.hackerrank.com/profile/sarthakmanju2104',
      color: 'from-green-500 to-emerald-600',
      stats: '5⭐ Problem Solving',
    },
    {
      name: 'Coding Ninjas',
      icon: SiCodingninjas,
      url: 'https://www.naukri.com/code360/profile/sarthak_vyas',
      color: 'from-orange-600 to-red-600',
      stats: 'Active Learner',
    },
  ]

  return (
    <section id="coding-profiles" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with me on various competitive programming platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-xl text-center card-hover group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <profile.icon className={`text-5xl mx-auto mb-4 bg-gradient-to-r ${profile.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`} />
              
              {/* Name */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {profile.name}
              </h3>
              
              {/* Stats */}
              <p className="text-gray-400 text-xs">{profile.stats}</p>

              {/* Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} blur-xl opacity-20`}></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            Let's connect and collaborate on exciting projects!
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Sarthakdenu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sarthak-vyas-99791b25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles
